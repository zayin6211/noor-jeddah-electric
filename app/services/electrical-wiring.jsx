import { Link } from 'react-router'

import {
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createBreadcrumbSchema,
  createPageMeta,
  createServiceSchema,
} from '../../src/lib/seo'

import {
  getRelatedServices,
  getServiceById,
} from '../../src/lib/services'

const service =
  getServiceById(
    'electrical-wiring',
  )

const relatedServices =
  getRelatedServices(service)

export const meta = () =>
  createPageMeta({
    title:
      service.title,

    description:
      service.description,

    path:
      service.path,
  })

export default function ElectricalWiring() {
  const serviceSchema =
    createServiceSchema({
      name:
        service.shortName,

      description:
        service.description,

      path:
        service.path,
    })

  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name:
            'الرئيسية',

          path:
            '/',
        },

        {
          name:
            'خدمات الكهرباء',

          path:
            '/services',
        },

        {
          name:
            service.shortName,

          path:
            service.path,
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
              serviceSchema,
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

      <section
        className="page-hero"
        aria-labelledby="service-page-title"
      >
        <div className="container">
          <nav
            className="breadcrumbs"
            aria-label="مسار التنقل"
          >
            <ol>
              <li>
                <Link to="/">
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link to="/services">
                  خدمات الكهرباء
                </Link>
              </li>

              <li>
                <span aria-current="page">
                  {
                    service.shortName
                  }
                </span>
              </li>
            </ol>
          </nav>

          <div className="page-hero-content">
            <span className="eyebrow">
              خدمات الكهرباء المنزلية
            </span>

            <h1 id="service-page-title">
              {
                service.shortName
              }
              {' في جدة'}
            </h1>

            <p>
              {
                service.pageIntro
              }
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
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="service-introduction-heading"
      >
        <div className="container service-detail">
          <div className="section-heading">
            <span className="eyebrow">
              عن الخدمة
            </span>

            <h2 id="service-introduction-heading">
              {
                service.content
                  .introduction
                  .heading
              }
            </h2>

            <p>
              {
                service.content
                  .introduction
                  .text
              }
            </p>
          </div>
        </div>
      </section>

      <section
        className="section section--soft"
        aria-labelledby="related-work-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              نطاق الأعمال
            </span>

            <h2 id="related-work-heading">
              {
                service.content
                  .relatedHeading
              }
            </h2>

            <p>
              تشمل أعمال التمديدات
              الكهربائية تجهيز المسارات
              والنقاط المطلوبة بحسب
              توزيع المنزل واستخدام
              كل مساحة.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {service.content.relatedItems.map(
              (
                item,
              ) => (
                <article
                  className="service-card"
                  key={
                    item.title
                  }
                >
                  <h3>
                    {
                      item.title
                    }
                  </h3>

                  <p>
                    {
                      item.description
                    }
                  </p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {service.content.faq?.length >
        0 && (
        <section
          className="section"
          aria-labelledby="service-faq-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                الأسئلة الشائعة
              </span>

              <h2 id="service-faq-heading">
                أسئلة شائعة عن التمديدات الكهربائية
              </h2>
            </div>

            <div className="faq-list">
              {service.content.faq.map(
                (
                  item,
                ) => (
                  <details
                    className="faq-item"
                    key={
                      item.question
                    }
                  >
                    <summary>
                      {
                        item.question
                      }
                    </summary>

                    <div className="faq-answer">
                      <p>
                        {
                          item.answer
                        }
                      </p>
                    </div>
                  </details>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {relatedServices.length >
        0 && (
        <section
          className="section section--soft"
          aria-labelledby="related-services-heading"
        >
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                خدمات مرتبطة
              </span>

              <h2 id="related-services-heading">
                خدمات كهربائية ذات صلة
              </h2>

              <p>
                قد ترتبط التمديدات
                الكهربائية بأعمال
                التأسيس والتشطيب
                والإنارة بحسب مرحلة
                المشروع.
              </p>
            </div>

            <div className="services-grid services-grid--large">
              {relatedServices.map(
                (
                  relatedService,
                ) => (
                  <article
                    className="service-card"
                    key={
                      relatedService.id
                    }
                  >
                    <h3>
                      {
                        relatedService.shortName
                      }
                    </h3>

                    <p>
                      {
                        relatedService.description
                      }
                    </p>

                    <Link
                      className="text-link"
                      to={
                        relatedService.path
                      }
                      aria-label={`عرض تفاصيل ${relatedService.shortName}`}
                    >
                      عرض تفاصيل الخدمة

                      <span
                        aria-hidden="true"
                      >
                        ←
                      </span>
                    </Link>
                  </article>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section
        className="section section--cta"
        aria-labelledby="service-cta-heading"
      >
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="eyebrow">
                تواصل مباشر
              </span>

              <h2 id="service-cta-heading">
                {
                  service.content
                    .ctaTitle
                }
              </h2>

              <p>
                {
                  service.content
                    .ctaText
                }
              </p>
            </div>

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
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}