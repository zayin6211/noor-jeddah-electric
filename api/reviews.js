import { sql } from "../src/lib/db.js";

const MAX_NAME_LENGTH = 60;
const MAX_COMMENT_LENGTH = 500;

const ALLOWED_METHODS = ["GET", "POST"];

function sendJson(res, data, status = 200) {
  res.status(status).json(data);
}

function normalizeText(value) {
  return typeof value === "string" ? value.trim() : "";
}

function containsUnsafeContent(value) {
  return /<[^>]*>|javascript\s*:|https?:\/\/|www\./i.test(value);
}

function isValidRating(value) {
  return Number.isInteger(value) && value >= 1 && value <= 5;
}

export default async function handler(req, res) {
  if (!ALLOWED_METHODS.includes(req.method)) {
    return sendJson(
      res,
      {
        error: "الطريقة غير مسموحة.",
      },
      405,
    );
  }

  try {
    if (req.method === "GET") {
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

      return sendJson(res, {
        reviews,
      });
    }

    const body = req.body ?? {};

    const name = normalizeText(body.name);
    const comment = normalizeText(body.comment);
    const rating = Number(body.rating);

    if (!name || name.length > MAX_NAME_LENGTH) {
      return sendJson(
        res,
        {
          error: `الاسم مطلوب وبحد أقصى ${MAX_NAME_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (!isValidRating(rating)) {
      return sendJson(
        res,
        {
          error: "التقييم يجب أن يكون من 1 إلى 5.",
        },
        400,
      );
    }

    if (!comment || comment.length > MAX_COMMENT_LENGTH) {
      return sendJson(
        res,
        {
          error: `التعليق مطلوب وبحد أقصى ${MAX_COMMENT_LENGTH} حرفًا.`,
        },
        400,
      );
    }

    if (containsUnsafeContent(name) || containsUnsafeContent(comment)) {
      return sendJson(
        res,
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
      return sendJson(
        res,
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

    return sendJson(
      res,
      {
        review,
      },
      201,
    );
  } catch (error) {
    console.error("Reviews API error:", error);

    return sendJson(
      res,
      {
        error: "حدث خطأ أثناء معالجة الطلب.",
      },
      500,
    );
  }
}