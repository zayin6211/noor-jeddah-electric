import {
  useEffect,
  useState,
} from 'react'

import {
  Link,
} from 'react-router'

import {
  BUSINESS_PHONE,
  BUSINESS_EXPERIENCE,
  BUSINESS_SERVICE_AREA,
  BUSINESS_NAME,
  WHATSAPP_URL,
  createPageMeta,
} from '../src/lib/seo'

import {
  SERVICE_CATALOG,
} from '../src/lib/services'

import heroImage from '../src/assets/588522761_1277704574403400_700824699880070196_n - Copy (2).webp'
import heroImage1024 from '../src/assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-1024.webp'
import heroImage768 from '../src/assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-768.webp'

import electricalFinishingImage from '../src/assets/electrical-finishing-jeddah.webp'
import lightingImage from '../src/assets/images (8).webp'
import ceilingLightingImage from '../src/assets/images (9).webp'
import electricalInstallationImage from '../src/assets/images (15).webp'
import wiringImage from '../src/assets/images (20)_upscayl_4x_upscayl-standard-4x - Copy.webp'
import interiorLightingImage from '../src/assets/images (17).webp'

export const meta = () =>
  createPageMeta({
    title:
      'كهربائي منازل في جدة | نور جدة للكهرباء',

    description:
      'نور جدة للكهرباء يقدم خدمات الكهرباء المنزلية في جدة، من تأسيس وتمديد وتشطيب الكهرباء إلى نقاط الإنارة والمفاتيح والأفياش وإصلاح الأعطال، مع أكثر من 15 عامًا من الخبرة.',

    path: '/',

    image:
      '/og-image.webp',
  })

const gallery = [
  {
    src:
      electricalFinishingImage,

    alt:
      'أعمال تشطيب كهربائي ونقاط كهرباء داخل منزل',

    width: 1024,

    height: 768,
  },

  {
    src:
      lightingImage,

    alt:
      'أعمال إنارة داخلية في منزل',

    width: 516,

    height: 387,
  },

  {
    src:
      ceilingLightingImage,

    alt:
      'نقاط وتجهيزات إنارة داخلية في السقف',

    width: 516,

    height: 387,
  },

  {
    src:
      electricalInstallationImage,

    alt:
      'تمديدات وتجهيزات كهربائية أثناء أعمال التشطيب',

    width: 415,

    height: 739,
  },

  {
    src:
      wiringImage,

    alt:
      'تمديدات وأسلاك كهربائية داخل مبنى',

    width: 898,

    height: 1600,
  },

  {
    src:
      interiorLightingImage,

    alt:
      'تشطيب وتركيب إنارة داخلية',

    width: 335,

    height: 597,
  },
]

function normalizeRating(
  value,
) {
  const numericRating =
    Number(value)

  if (
    !Number.isFinite(
      numericRating,
    )
  ) {
    return 0
  }

  return Math.min(
    5,
    Math.max(
      0,
      Math.round(
        numericRating,
      ),
    ),
  )
}

function StarRating({
  rating,
}) {
  const normalizedRating =
    normalizeRating(
      rating,
    )

  return (
    <div
      className="review-stars"
      role="img"
      aria-label={`التقييم ${normalizedRating} من 5`}
    >
      {Array.from(
        {
          length: 5,
        },
        (_, index) => {
          const filled =
            index <
            normalizedRating

          return (
            <span
              key={index}
              className={
                filled
                  ? 'is-filled'
                  : ''
              }
              aria-hidden="true"
            >
              ★
            </span>
          )
        },
      )}
    </div>
  )
}

function Home() {
  const [
    reviews,
    setReviews,
  ] = useState([])

  const [
    reviewsLoading,
    setReviewsLoading,
  ] = useState(true)

  const [
    reviewsError,
    setReviewsError,
  ] = useState('')

  const [
    name,
    setName,
  ] = useState('')

  const [
    rating,
    setRating,
  ] = useState(5)

  const [
    hoverRating,
    setHoverRating,
  ] = useState(0)

  const [
    comment,
    setComment,
  ] = useState('')

  const [
    website,
    setWebsite,
  ] = useState('')

  const [
    submitLoading,
    setSubmitLoading,
  ] = useState(false)

  const [
    submitMessage,
    setSubmitMessage,
  ] = useState('')

  const [
    submitError,
    setSubmitError,
  ] = useState('')

  useEffect(() => {
    let cancelled = false

    async function loadReviews() {
      try {
        const response =
          await fetch(
            '/api/reviews',
          )

        if (!response.ok) {
          throw new Error(
            'تعذر تحميل التقييمات.',
          )
        }

        const data =
          await response.json()

        if (
          !cancelled
        ) {
          setReviews(
            Array.isArray(
              data?.reviews,
            )
              ? data.reviews
              : [],
          )
        }
      } catch {
        if (
          !cancelled
        ) {
          setReviewsError(
            'تعذر تحميل التقييمات حاليًا.',
          )
        }
      } finally {
        if (
          !cancelled
        ) {
          setReviewsLoading(
            false,
          )
        }
      }
    }

    loadReviews()

    return () => {
      cancelled = true
    }
  }, [])

  async function handleReviewSubmit(
    event,
  ) {
    event.preventDefault()

    setSubmitMessage('')
    setSubmitError('')

    if (
      website.trim()
    ) {
      setSubmitError(
        'تعذر إرسال التقييم.',
      )

      return
    }

    setSubmitLoading(true)

    try {
      const response =
        await fetch(
          '/api/reviews',
          {
            method:
              'POST',

            headers: {
              'Content-Type':
                'application/json',
            },

            body:
              JSON.stringify({
                name:
                  name.trim(),

                rating,

                comment:
                  comment.trim(),

                website:
                  website.trim(),
              }),
          },
        )

      let data = {}

      try {
        data =
          await response.json()
      } catch {
        data = {}
      }

      if (
        !response.ok
      ) {
        throw new Error(
          data?.error ||
            'تعذر إرسال التقييم حاليًا.',
        )
      }

      if (
        data?.review
      ) {
        setReviews(
          (
            currentReviews,
          ) => [
            data.review,
            ...currentReviews,
          ],
        )
      }

      setName('')
      setRating(5)
      setHoverRating(0)
      setComment('')
      setWebsite('')

      setSubmitMessage(
        'تم إرسال تقييمك بنجاح، شكرًا لك.',
      )
    } catch (
      error
    ) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'تعذر إرسال التقييم حاليًا.',
      )
    } finally {
      setSubmitLoading(
        false,
      )
    }
  }

  const displayedRating =
    hoverRating ||
    rating

  return (
    <>
      <section
        className="hero-section"
        aria-labelledby="home-heading"
      >
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">
              {BUSINESS_NAME}
            </span>

            <h1 id="home-heading">
              كهربائي منازل في جدة
            </h1>

            <p className="hero-description">
              تنفيذ أعمال الكهرباء
              المنزلية من التأسيس
              والتمديدات إلى التشطيب
              ونقاط الإنارة والمفاتيح
              والأفياش وإصلاح الأعطال،
              في جميع مناطق جدة.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
                aria-label={`الاتصال بـ${BUSINESS_NAME} على الرقم ${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`التواصل مع ${BUSINESS_NAME} عبر واتساب`}
              >
                تواصل عبر واتساب
              </a>
            </div>

            <div
              className="hero-facts"
              aria-label="معلومات عن الخدمة"
            >
              <div>
                <strong>
                  {BUSINESS_EXPERIENCE}
                </strong>

                <span>
                  خبرة
                </span>
              </div>

              <div>
                <strong>
                  {BUSINESS_SERVICE_AREA}
                </strong>

                <span>
                  نطاق الخدمة
                </span>
              </div>

              <div>
                <strong>
                  جميع الأيام
                </strong>

                <span>
                  أيام العمل
                </span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <picture>
              <source
                media="(max-width: 767px)"
                srcSet={
                  heroImage768
                }
              />

              <source
                media="(max-width: 1100px)"
                srcSet={
                  heroImage1024
                }
              />

              <img
                className="hero-image"
                src={heroImage}
                alt="أعمال كهربائية وتشطيب كهربائي داخل منزل"
                width="1024"
                height="768"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="services-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات
            </span>

            <h2 id="services-heading">
              خدمات الكهرباء المنزلية في جدة
            </h2>

            <p>
              خدمات كهربائية للمنازل
              تبدأ من التأسيس والتمديدات
              وتصل إلى التشطيب والإنارة
              وإصلاح الأعطال بحسب احتياج
              كل موقع.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {SERVICE_CATALOG.map(
              (
                service,
                index,
              ) => (
                <Link
                  className="service-card"
                  key={
                    service.id
                  }
                  to={
                    service.path
                  }
                  aria-label={`عرض تفاصيل ${service.name}`}
                >
                  <div
                    className="service-number"
                    aria-hidden="true"
                  >
                    {String(
                      index + 1,
                    ).padStart(
                      2,
                      '0',
                    )}
                  </div>

                  <h3>
                    {
                      service.name
                    }
                  </h3>

                  <p>
                    {
                      service.description
                    }
                  </p>

                  <span className="text-link">
                    عرض تفاصيل الخدمة

                    <span
                      aria-hidden="true"
                    >
                      ←
                    </span>
                  </span>
                </Link>
              ),
            )}
          </div>

          <div className="center-action">
            <Link
              className="text-link"
              to="/services"
            >
              عرض جميع خدمات الكهرباء

              <span
                aria-hidden="true"
              >
                ←
              </span>
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section section--soft"
        aria-labelledby="gallery-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              معرض الأعمال
            </span>

            <h2 id="gallery-heading">
              صور لأعمال وتجهيزات كهربائية
            </h2>

            <p>
              صور توضيحية لأعمال
              الكهرباء والتشطيب
              الكهربائي للمنازل.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map(
              (image) => (
                <figure
                  className="gallery-item"
                  key={
                    image.src
                  }
                >
                  <img
                    src={
                      image.src
                    }
                    alt={
                      image.alt
                    }
                    width={
                      image.width
                    }
                    height={
                      image.height
                    }
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ),
            )}
          </div>
        </div>
      </section>

      <section
        className="section reviews-section"
        aria-labelledby="reviews-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              آراء العملاء
            </span>

            <h2 id="reviews-heading">
              تقييمات وتجارب العملاء
            </h2>

            <p>
              التقييمات المعروضة هنا
              يتم إرسالها من العملاء
              من خلال نظام التقييمات.
            </p>
          </div>

          <div className="reviews-layout">
            <div className="reviews-list">
              <h3>
                تقييمات العملاء
              </h3>

              {reviewsLoading ? (
                <p
                  className="reviews-status"
                  role="status"
                >
                  جارٍ تحميل التقييمات...
                </p>
              ) : reviewsError ? (
                <p
                  className="reviews-status reviews-status-error"
                  role="alert"
                >
                  {reviewsError}
                </p>
              ) : reviews.length ===
                0 ? (
                <p className="reviews-status">
                  لا توجد تقييمات منشورة حاليًا.
                </p>
              ) : (
                <div className="reviews-items">
                  {reviews.map(
                    (
                      review,
                    ) => (
                      <article
                        className="review-card"
                        key={
                          review.id
                        }
                      >
                        <div className="review-card-header">
                          <div>
                            <h4>
                              {
                                review.name
                              }
                            </h4>

                            <StarRating
                              rating={
                                review.rating
                              }
                            />
                          </div>
                        </div>

                        <p>
                          {
                            review.comment
                          }
                        </p>
                      </article>
                    ),
                  )}
                </div>
              )}
            </div>

            <div className="review-form-wrapper">
              <div className="section-heading">
                <span className="eyebrow">
                  شارك تجربتك
                </span>

                <h3>
                  أضف تقييمك
                </h3>
              </div>

              <form
                className="review-form"
                onSubmit={
                  handleReviewSubmit
                }
              >
                <div className="form-field">
                  <label htmlFor="review-name">
                    الاسم
                  </label>

                  <input
                    id="review-name"
                    name="name"
                    type="text"
                    value={name}
                    onChange={(
                      event,
                    ) =>
                      setName(
                        event.target
                          .value,
                      )
                    }
                    maxLength={60}
                    minLength={2}
                    required
                    autoComplete="name"
                  />
                </div>

                <fieldset className="rating-fieldset">
                  <legend>
                    التقييم
                  </legend>

                  <div
                    className="rating-options"
                    onMouseLeave={() =>
                      setHoverRating(
                        0,
                      )
                    }
                  >
                    {Array.from(
                      {
                        length: 5,
                      },
                      (
                        _,
                        index,
                      ) => {
                        const value =
                          index + 1

                        const isFilled =
                          value <=
                          displayedRating

                        return (
                          <button
                            key={
                              value
                            }
                            type="button"
                            className={
                              isFilled
                                ? 'rating-option is-filled'
                                : 'rating-option'
                            }
                            onMouseEnter={() =>
                              setHoverRating(
                                value,
                              )
                            }
                            onFocus={() =>
                              setHoverRating(
                                value,
                              )
                            }
                            onBlur={() =>
                              setHoverRating(
                                0,
                              )
                            }
                            onClick={() =>
                              setRating(
                                value,
                              )
                            }
                            aria-label={`اختيار ${value} من 5`}
                            aria-pressed={
                              value ===
                              rating
                            }
                          >
                            <span
                              className="rating-star"
                              aria-hidden="true"
                            >
                              ★
                            </span>
                          </button>
                        )
                      },
                    )}
                  </div>
                </fieldset>

                <div className="form-field">
                  <label htmlFor="review-comment">
                    التعليق
                  </label>

                  <textarea
                    id="review-comment"
                    name="comment"
                    value={
                      comment
                    }
                    onChange={(
                      event,
                    ) =>
                      setComment(
                        event.target
                          .value,
                      )
                    }
                    maxLength={500}
                    minLength={3}
                    required
                    rows={5}
                  />
                </div>

                <div
                  className="review-honeypot"
                  aria-hidden="true"
                >
                  <label htmlFor="review-website">
                    Website
                  </label>

                  <input
                    id="review-website"
                    name="website"
                    type="text"
                    value={
                      website
                    }
                    onChange={(
                      event,
                    ) =>
                      setWebsite(
                        event.target
                          .value,
                      )
                    }
                    tabIndex={-1}
                    autoComplete="off"
                  />
                </div>

                {submitMessage ? (
                  <p
                    className="review-form-message review-form-message-success"
                    role="status"
                  >
                    {
                      submitMessage
                    }
                  </p>
                ) : null}

                {submitError ? (
                  <p
                    className="review-form-message review-form-message-error"
                    role="alert"
                  >
                    {
                      submitError
                    }
                  </p>
                ) : null}

                <button
                  className="button button-primary review-submit"
                  type="submit"
                  disabled={
                    submitLoading
                  }
                >
                  {submitLoading
                    ? 'جارٍ الإرسال...'
                    : 'إرسال التقييم'}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="experience-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              خبرة وتواصل مباشر
            </span>

            <h2 id="experience-heading">
              كهربائي منازل في جدة لأعمال الكهرباء المنزلية
            </h2>

            <p>
              {BUSINESS_NAME}
              {' '}
              يقدم خدمات كهربائية
              للمنازل في جميع مناطق
              جدة، مع خبرة تمتد إلى
              أكثر من 15 عامًا.
            </p>
          </div>

          <div className="benefits-list">
            <div>
              <strong>
                {BUSINESS_EXPERIENCE}
              </strong>

              <span>
                خبرة عملية في مجال
                الكهرباء.
              </span>
            </div>

            <div>
              <strong>
                خدمة داخل جدة
              </strong>

              <span>
                الخدمة متاحة في جميع
                مناطق جدة.
              </span>
            </div>

            <div>
              <strong>
                تواصل مباشر
              </strong>

              <span>
                تواصل مباشرة عبر
                الاتصال أو واتساب.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--cta"
        aria-labelledby="contact-cta-heading"
      >
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="eyebrow">
                تواصل الآن
              </span>

              <h2 id="contact-cta-heading">
                تحتاج كهربائيًا لمنزلك في جدة؟
              </h2>

              <p>
                تواصل مباشرة واشرح
                احتياجك لمعرفة الخدمة
                المناسبة.
              </p>
            </div>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home