import { Link, useParams } from 'react-router'

import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createBreadcrumbSchema,
  createPageMeta,
  createWebPageSchema,
} from '../src/lib/seo'

import {
  getNeighborhoodBySlug,
  getNeighborhoodFaqs,
  getRelatedNeighborhoods,
} from '../src/lib/neighborhoods'

import { SERVICE_CATALOG } from '../src/lib/services'

function NeighborhoodPage() {
  const { slug = '' } = useParams()

  const neighborhood =
    getNeighborhoodBySlug(slug)

  if (!neighborhood) {
    return (
      <>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">
              نور جدة للكهرباء
            </span>

            <h1>
              الصفحة غير موجودة
            </h1>

            <p>
              لم نتمكن من العثور على صفحة الحي المطلوبة.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Link
              className="button button-primary"
              to="/neighborhoods"
            >
              عرض أحياء جدة
            </Link>
          </div>
        </section>
      </>
    )
  }

  const relatedNeighborhoods =
    getRelatedNeighborhoods(
      neighborhood.slug,
      6,
    )

  const faqs =
    getNeighborhoodFaqs(
      neighborhood,
      4,
    )

  const focusText =
    neighborhood.focus ||
    'الخدمة الكهربائية المنزلية'

  const serviceIntent =
    neighborhood.serviceIntent ||
    focusText

  const neighborhoodPath =
    `/neighborhoods/${neighborhood.slug}`

  const webPageSchema =
    createWebPageSchema({
      name: neighborhood.title,
      description: neighborhood.description,
      path: neighborhoodPath,
    })

  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name: 'الرئيسية',
          path: '/',
        },
        {
          name: 'أحياء جدة',
          path: '/neighborhoods',
        },
        {
          name: `حي ${neighborhood.name}`,
          path: neighborhoodPath,
        },
      ],
    })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              webPageSchema,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema,
            ),
        }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            كهربائي منازل في جدة
          </span>

          <h1>
            كهربائي في حي {neighborhood.name} بجدة
          </h1>

          <p>
            {neighborhood.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <p>
            {neighborhood.secondParagraph}
          </p>

          <h2>
            {neighborhood.pageAngle}
          </h2>

          <p>
            {neighborhood.details}
          </p>

          <div className="detail-cta">
            <span className="eyebrow">
              نوع الخدمة
            </span>

            <h2>
              {serviceIntent} في حي {neighborhood.name}
            </h2>

            <p>
              {neighborhood.serviceSummary}
            </p>

            <p>
              {neighborhood.tipText}
            </p>

            <div className="cta-actions">
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
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container service-detail">
          <div className="section-heading">
            <span className="eyebrow">
              حسب حالة المنزل
            </span>

            <h2>
              {neighborhood.scenarioHeading}
            </h2>
          </div>

          <p>
            {neighborhood.scenarioText}
          </p>

          <h2>
            ما الذي يحدد نوع الخدمة في حي {neighborhood.name}؟
          </h2>

          <p>
            {neighborhood.needText}
          </p>

          <h2>
            مرحلة العمل الكهربائي في حي {neighborhood.name}
          </h2>

          <p>
            {neighborhood.projectStageText}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات الكهربائية
            </span>

            <h2>
              خدمات الكهرباء المنزلية المتاحة في حي {neighborhood.name}
            </h2>

            <p>
              اختر نوع العمل الأقرب إلى احتياج منزلك
              في حي {neighborhood.name}.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {SERVICE_CATALOG.map(
              (service) => (
                <Link
                  className="service-card"
                  key={service.id}
                  to={service.path}
                  aria-label={`${service.shortName} في حي ${neighborhood.name} بجدة`}
                >
                  <h3>
                    {service.shortName}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <span
                    className="text-link"
                    aria-hidden="true"
                  >
                    عرض {service.shortName}

                    <span>
                      ←
                    </span>
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container service-detail">
          <h2>
            قبل طلب كهربائي في حي {neighborhood.name}
          </h2>

          <p>
            {neighborhood.beforeWorkNote}
          </p>

          <h2>
            كيف تبدأ طلب {serviceIntent}؟
          </h2>

          <p>
            {neighborhood.requestContext}
          </p>

          {Array.isArray(
            neighborhood.requestChecklist,
          ) &&
            neighborhood.requestChecklist.length > 0 && (
              <ul>
                {neighborhood.requestChecklist.map(
                  (item) => (
                    <li key={item}>
                      {item}
                    </li>
                  ),
                )}
              </ul>
            )}

          <h2>
            تنبيه السلامة قبل تنفيذ العمل الكهربائي
          </h2>

          <p>
            {neighborhood.safetyNote}
          </p>
        </div>
      </section>

      {relatedNeighborhoods.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                نطاق الخدمة
              </span>

              <h2>
                أحياء أخرى نخدمها في جدة
              </h2>

              <p>
                تعرف على صفحات أخرى لخدمات الكهرباء
                المنزلية داخل أحياء جدة.
              </p>
            </div>

            <div className="services-grid">
              {relatedNeighborhoods.map(
                (related) => (
                  <Link
                    className="service-card"
                    key={related.slug}
                    to={`/neighborhoods/${related.slug}`}
                    aria-label={`كهربائي في حي ${related.name} بجدة`}
                  >
                    <h3>
                      كهربائي في حي {related.name}
                    </h3>

                    <p>
                      {related.serviceSummary ||
                        related.focus ||
                        `خدمات كهربائية منزلية داخل حي ${related.name} بجدة.`}
                    </p>

                    <span
                      className="text-link"
                      aria-hidden="true"
                    >
                      كهربائي في حي {related.name}

                      <span>
                        ←
                      </span>
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section
        className="section section--soft"
        aria-labelledby="neighborhood-faq-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              أسئلة شائعة
            </span>

            <h2 id="neighborhood-faq-heading">
              أسئلة عن كهربائي حي {neighborhood.name}
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map(
              (faq) => (
                <details
                  className="faq-item"
                  key={faq.question}
                >
                  <summary>
                    {faq.question}
                  </summary>

                  <p>
                    {faq.answer}
                  </p>
                </details>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container simple-cta">
          <div>
            <span className="eyebrow">
              نور جدة للكهرباء
            </span>

            <h2>
              تحتاج كهربائي في حي {neighborhood.name}؟
            </h2>

            <p>
              تواصل مباشرة مع {BUSINESS_NAME}
              واشرح نوع العمل أو العطل المطلوب
              داخل المنزل.
            </p>
          </div>

          <div className="cta-actions">
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
              واتساب
            </a>

            <Link
              className="text-link"
              to="/neighborhoods"
            >
              جميع أحياء جدة
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}

export function meta({ params }) {
  const neighborhood =
    getNeighborhoodBySlug(
      params?.slug || '',
    )

  if (!neighborhood) {
    return createPageMeta({
      title:
        'الحي غير موجود | نور جدة للكهرباء',
      description:
        'صفحة الحي المطلوبة غير متاحة في موقع نور جدة للكهرباء.',
      path:
        `/neighborhoods/${params?.slug || ''}`,
      indexable: false,
    })
  }

  return createPageMeta({
    title:
      neighborhood.title,
    description:
      neighborhood.description,
    path:
      `/neighborhoods/${neighborhood.slug}`,
    indexable: false,
  })
}

export default NeighborhoodPage