import { useEffect, useState } from 'react'
import { Link } from 'react-router'

import {
  BUSINESS_PHONE,
  WHATSAPP_URL,
} from '../lib/seo'

import heroImage from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2).webp'
import heroImage1024 from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-1024.webp'
import heroImage768 from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2)-768.webp'
import electricalFinishingImage from '../assets/electrical-finishing-jeddah.webp'
import lightingImage from '../assets/images (8).webp'
import ceilingLightingImage from '../assets/images (9).webp'
import electricalInstallationImage from '../assets/images (15).webp'
import wiringImage from '../assets/images (20)_upscayl_4x_upscayl-standard-4x - Copy.webp'
import interiorLightingImage from '../assets/images (17).webp'

const services = [
  {
    title: 'تأسيس الكهرباء',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام وفق احتياج المنزل.',
    path: '/services/electrical-foundation',
  },
  {
    title: 'التمديدات الكهربائية',
    description:
      'تنفيذ أعمال التمديدات الكهربائية ضمن مراحل تشطيب المنزل.',
    path: '/services/electrical-wiring',
  },
  {
    title: 'نقاط الكهرباء والإنارة',
    description:
      'تجهيز وتركيب نقاط الكهرباء والإنارة بما يناسب الاستخدام اليومي.',
    path: '/services/lighting',
  },
  {
    title: 'المفاتيح والأفياش',
    description:
      'تركيب نقاط المفاتيح والأفياش ضمن أعمال التشطيب الكهربائي للمنزل.',
    path: '/services/electrical-finishing',
  },
]

const gallery = [
  {
    src: electricalFinishingImage,
    alt: 'تشطيبات كهربائية منزلية ونقاط كهرباء داخل منزل',
    width: 1024,
    height: 768,
  },
  {
    src: lightingImage,
    alt: 'إضاءة داخلية وتشطيب أسقف في منزل',
    width: 516,
    height: 387,
  },
  {
    src: ceilingLightingImage,
    alt: 'تصميم وتركيب الإضاءة الداخلية في الأسقف',
    width: 516,
    height: 387,
  },
  {
    src: electricalInstallationImage,
    alt: 'تمديدات وتجهيزات كهربائية أثناء أعمال التشطيب',
    width: 415,
    height: 739,
  },
  {
    src: wiringImage,
    alt: 'تمديدات كهربائية وتجهيز أسلاك داخل المبنى',
    width: 898,
    height: 1600,
  },
  {
    src: interiorLightingImage,
    alt: 'تشطيب إنارة داخلية في منزل',
    width: 335,
    height: 597,
  },
]

function normalizeRating(value) {
  const numericRating = Number(value)

  if (!Number.isFinite(numericRating)) {
    return 0
  }

  return Math.min(
    5,
    Math.max(
      0,
      Math.round(numericRating),
    ),
  )
}

function StarRating({ rating }) {
  const normalizedRating =
    normalizeRating(rating)

  return (
    <div
      className="review-stars"
      role="img"
      aria-label={`التقييم ${normalizedRating} من 5`}
    >
      {Array.from(
        { length: 5 },
        (_, index) => {
          const filled =
            index < normalizedRating

          return (
            <span
              key={index}
              aria-hidden="true"
              className={
                filled
                  ? 'is-filled'
                  : ''
              }
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
  const [reviews, setReviews] = useState([])
  const [reviewsLoading, setReviewsLoading] =
    useState(true)
  const [reviewsError, setReviewsError] =
    useState('')

  const [name, setName] =
    useState('')
  const [rating, setRating] =
    useState(5)
  const [hoverRating, setHoverRating] =
    useState(0)
  const [comment, setComment] =
    useState('')
  const [website, setWebsite] =
    useState('')

  const [submitLoading, setSubmitLoading] =
    useState(false)
  const [submitMessage, setSubmitMessage] =
    useState('')
  const [submitError, setSubmitError] =
    useState('')

  useEffect(() => {
    let cancelled = false

    async function loadReviews() {
      try {
        const response =
          await fetch('/api/reviews')

        if (!response.ok) {
          throw new Error(
            'تعذر تحميل التقييمات.',
          )
        }

        const data =
          await response.json()

        if (!cancelled) {
          setReviews(
            Array.isArray(
              data.reviews,
            )
              ? data.reviews
              : [],
          )
        }
      } catch {
        if (!cancelled) {
          setReviewsError(
            'تعذر تحميل التقييمات حاليًا.',
          )
        }
      } finally {
        if (!cancelled) {
          setReviewsLoading(false)
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

    if (website.trim()) {
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
            method: 'POST',
            headers: {
              'Content-Type':
                'application/json',
            },
            body:
              JSON.stringify({
                name,
                rating,
                comment,
                website,
              }),
          },
        )

      const data =
        await response.json()

      if (!response.ok) {
        throw new Error(
          data.error ||
            'تعذر إرسال التقييم حاليًا.',
        )
      }

      if (data.review) {
        setReviews(
          (currentReviews) => [
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
    } catch (error) {
      setSubmitError(
        error instanceof Error
          ? error.message
          : 'تعذر إرسال التقييم حاليًا.',
      )
    } finally {
      setSubmitLoading(false)
    }
  }

  const displayedRating =
    hoverRating || rating

  return (
    <main>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">
              نور جدة للكهرباء
            </span>

            <h1>
              كهربائي منازل في جدة لأعمال
              التشطيب الكهربائي
            </h1>

            <p className="hero-description">
              تنفيذ أعمال تشطيب الكهرباء
              للمنازل في جميع مناطق جدة،
              من التأسيس والتمديدات إلى
              نقاط الكهرباء والإنارة
              والمفاتيح والأفياش.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
                aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
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
                  15 سنة
                </strong>

                <span>
                  خبرة
                </span>
              </div>

              <div>
                <strong>
                  جميع مناطق جدة
                </strong>

                <span>
                  نطاق الخدمة
                </span>
              </div>

              <div>
                <strong>
                  كل يوم
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
                srcSet={heroImage768}
              />

              <source
                media="(max-width: 1100px)"
                srcSet={heroImage1024}
              />

              <img
                src={heroImage}
                alt="أعمال كهرباء وتشطيب كهربائي داخل منزل"
                width="1024"
                height="768"
                fetchPriority="high"
                decoding="async"
              />
            </picture>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات
            </span>

            <h2>
              خدمات الكهرباء المنزلية في جدة
            </h2>

            <p>
              خدمات كهربائية مرتبطة باحتياجات
              المنزل من التأسيس والتمديدات
              إلى الإنارة والتشطيب.
            </p>
          </div>

          <div className="services-grid">
            {services.map(
              (service) => (
                <article
                  className="service-card"
                  key={service.path}
                >
                  <div
                    className="service-number"
                    aria-hidden="true"
                  >
                    ✓
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <Link
                    className="text-link"
                    to={service.path}
                  >
                    تفاصيل الخدمة
                    <span aria-hidden="true">
                      ←
                    </span>
                  </Link>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              معرض الأعمال
            </span>

            <h2>
              صور لأعمال وتجهيزات كهربائية
            </h2>

            <p>
              صور توضيحية لأعمال الكهرباء
              والتشطيب الكهربائي.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map(
              (image) => (
                <figure
                  className="gallery-item"
                  key={image.src}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    loading="lazy"
                    decoding="async"
                  />
                </figure>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              آراء العملاء
            </span>

            <h2>
              تقييمات وتجارب العملاء
            </h2>

            <p>
              التقييمات المعروضة في الموقع
              يتم إرسالها من العملاء عبر
              نظام التقييمات.
            </p>
          </div>

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
          ) : reviews.length === 0 ? (
            <p className="reviews-status">
              لا توجد تقييمات منشورة حاليًا.
            </p>
          ) : (
            <div className="reviews-grid">
              {reviews.map(
                (review) => (
                  <article
                    className="review-card"
                    key={review.id}
                  >
                    <div className="review-card-header">
                      <strong>
                        {review.name}
                      </strong>

                      <StarRating
                        rating={
                          review.rating
                        }
                      />
                    </div>

                    <p>
                      {review.comment}
                    </p>
                  </article>
                ),
              )}
            </div>
          )}

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
                  onChange={(event) =>
                    setName(
                      event.target.value,
                    )
                  }
                  maxLength={60}
                  required
                  autoComplete="name"
                />
              </div>

              <fieldset className="form-field">
                <legend>
                  التقييم
                </legend>

                <div
                  className="rating-selector"
                  onMouseLeave={() =>
                    setHoverRating(0)
                  }
                >
                  {Array.from(
                    {
                      length: 5,
                    },
                    (_, index) => {
                      const value =
                        index + 1

                      return (
                        <button
                          key={value}
                          type="button"
                          className={
                            value <=
                            displayedRating
                              ? 'rating-star is-active'
                              : 'rating-star'
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
                            value === rating
                          }
                        >
                          ★
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
                  value={comment}
                  onChange={(event) =>
                    setComment(
                      event.target.value,
                    )
                  }
                  maxLength={500}
                  required
                  rows={5}
                />
              </div>

              <div
                className="honeypot-field"
                aria-hidden="true"
              >
                <label htmlFor="review-website">
                  Website
                </label>

                <input
                  id="review-website"
                  name="website"
                  type="text"
                  value={website}
                  onChange={(event) =>
                    setWebsite(
                      event.target.value,
                    )
                  }
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

              {submitMessage && (
                <p
                  className="review-form-message review-form-message-success"
                  role="status"
                >
                  {submitMessage}
                </p>
              )}

              {submitError && (
                <p
                  className="review-form-message review-form-message-error"
                  role="alert"
                >
                  {submitError}
                </p>
              )}

              <button
                className="button button-primary review-submit"
                type="submit"
                disabled={submitLoading}
              >
                {submitLoading
                  ? 'جارٍ الإرسال...'
                  : 'إرسال التقييم'}
              </button>
            </form>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              خبرة وتواصل مباشر
            </span>

            <h2>
              كهربائي منازل في جدة لأعمال
              الكهرباء للمنازل
            </h2>

            <p>
              نور جدة للكهرباء يقدم خدمة كهربائي
              سكنية مستقلة في جميع مناطق جدة،
              مع خبرة تمتد إلى 15 سنة في مجال
              الكهرباء.
            </p>
          </div>

          <div className="benefits-list">
            <div>
              <strong>
                خبرة 15 سنة
              </strong>

              <span>
                خبرة عملية في مجال الكهرباء.
              </span>
            </div>

            <div>
              <strong>
                خدمة داخل جدة
              </strong>

              <span>
                الخدمة متاحة في جميع مناطق جدة.
              </span>
            </div>

            <div>
              <strong>
                تواصل مباشر
              </strong>

              <span>
                تواصل مباشرة عبر الاتصال أو واتساب.
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home