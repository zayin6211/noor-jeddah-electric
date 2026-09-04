import { sql } from "../src/lib/db.js";

const MAX_NAME_LENGTH = 60;
const MAX_COMMENT_LENGTH = 500;

const allowedMethods = ["GET", "POST"];

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), {
    status,
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function containsUnsafeContent(value) {
  return /<[^>]*>|javascript\s*:|https?:\/\/|www\./i.test(value);
}

function isValidRating(value) {
  const rating = Number(value);
  return Number.isInteger(rating) && rating >= 1 && rating <= 5;
}

export default async function handler(request) {
  if (!allowedMethods.includes(request.method)) {
    return jsonResponse(
      {
        error: "الطريقة غير مسموحة.",
      },
      405,
    );
  }

  try {
    if (request.method === "GET") {
      const reviews = await sql`
        SELECT
          id,
          name,
          rating,
          comment,
          created_at
        FROM reviews
        ORDER BY created_at DESC
        LIMIT 50
      `;

      return jsonResponse({
        reviews,
      });
    }

    const body = await request.json();

    const name = normalizeText(body?.name);
    const comment = normalizeText(body?.comment);
    const rating = Number(body?.rating);

    if (!name || name.length > MAX_NAME_LENGTH) {
      return jsonResponse(
        {
          error: `الاسم مطلوب وبحد أقصى ${MAX_NAME_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (!isValidRating(rating)) {
      return jsonResponse(
        {
          error: "التقييم يجب أن يكون من 1 إلى 5.",
        },
        400,
      );
    }

    if (!comment || comment.length > MAX_COMMENT_LENGTH) {
      return jsonResponse(
        {
          error: `التعليق مطلوب وبحد أقصى ${MAX_COMMENT_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (containsUnsafeContent(name) || containsUnsafeContent(comment)) {
      return jsonResponse(
        {
          error: "يرجى كتابة الاسم والتعليق بدون روابط أو أكواد.",
        },
        400,
      );
    }

    const existingReview = await sql`
      SELECT id
      FROM reviews
      WHERE LOWER(name) = LOWER(${name})
        AND LOWER(comment) = LOWER(${comment})
        AND rating = ${rating}
      LIMIT 1
    `;

    if (existingReview.length > 0) {
      return jsonResponse(
        {
          error: "تم إرسال هذا التقييم مسبقًا.",
        },
        409,
      );
    }

    const [review] = await sql`
      INSERT INTO reviews (
        name,
        rating,
        comment
      )
      VALUES (
        ${name},
        ${rating},
        ${comment}
      )
      RETURNING
        id,
        name,
        rating,
        comment,
        created_at
    `;

    return jsonResponse(
      {
        review,
      },
      201,
    );
  } catch (error) {
    console.error("Reviews API error:", error);

    return jsonResponse(
      {
        error: "حدث خطأ أثناء معالجة الطلب.",
      },
      500,
    );
  }
}