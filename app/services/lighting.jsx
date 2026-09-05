import { Link } from 'react-router'

import {
  BUSINESS_PHONE,
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
    'lighting',
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

export default function Lighting() {
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
    <main>
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

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            خدمات الكهرباء المنزلية
          </span>

          <h1>
            {service.shortName}
            {' في جدة'}
          </h1>

          <p>
            {service.pageIntro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <nav
            className="breadcrumbs"
            aria-label="مسار التنقل"
          >
            <ol>
              <li>
                <Link
                  to="/"
                  reloadDocument
                >
                  الرئيسية
                </Link>
              </li>

              <li>
                <Link
                  to="/services"
                  reloadDocument
                >
                  خدمات الكهرباء
                </Link>
              </li>

              <li>
                <span aria-current="page">
                  {service.shortName}
                </span>
              </li>
            </ol>
          </nav>

          <h2>
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

          <h2>
            {
              service.content
                .relatedHeading
            }
          </h2>

          <div className="services-grid services-grid--large">
            {
              service.content.relatedItems.map(
                (item) => (
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
              )
            }
          </div>

          {relatedServices.length > 0 && (
            <section
              className="related-services"
              aria-labelledby="related-services-heading"
            >
              <h2 id="related-services-heading">
                خدمات كهربائية ذات صلة
              </h2>

              <div className="services-grid services-grid--large">
                {relatedServices.map(
                  (relatedService) => (
                    <Link
                      className="service-card"
                      key={
                        relatedService.id
                      }
                      to={
                        relatedService.path
                      }
                      reloadDocument
                      aria-label={`التعرف على ${relatedService.shortName}`}
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

                      <span
                        className="text-link"
                        aria-hidden="true"
                      >
                        تفاصيل الخدمة
                        <span>
                          ←
                        </span>
                      </span>
                    </Link>
                  ),
                )}
              </div>
            </section>
          )}

          {service.content.faq?.length > 0 && (
            <section
              className="related-services"
              aria-labelledby="faq-heading"
            >
              <h2 id="faq-heading">
                الأسئلة الشائعة حول{' '}
                {service.shortName}
              </h2>

              <div className="services-grid services-grid--large">
                {service.content.faq.map(
                  (item) => (
                    <details
                      className="service-card"
                      key={
                        item.question
                      }
                    >
                      <summary>
                        {item.question}
                      </summary>

                      <p>
                        {item.answer}
                      </p>
                    </details>
                  ),
                )}
              </div>
            </section>
          )}

          <div className="detail-cta">
            <h2>
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

            <div className="cta-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
                aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <Link
                className="button button-secondary"
                to="/services"
                reloadDocument
              >
                جميع الخدمات
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}