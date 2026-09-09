import {
  Link,
} from 'react-router'

import {
  createBreadcrumbSchema,
  createPageMeta,
  BUSINESS_PHONE,
  WHATSAPP_URL,
} from '../src/lib/seo'

import {
  SERVICE_CATALOG,
} from '../src/lib/services'

export const meta = () =>
  createPageMeta({
    title:
      'خدمات الكهرباء المنزلية في جدة | نور جدة للكهرباء',

    description:
      'خدمات نور جدة للكهرباء تشمل تأسيس وتمديد وتشطيب الكهرباء المنزلية والإنارة والمفاتيح والأفياش وإصلاح الأعطال في جميع مناطق جدة.',

    path:
      '/services',

    image:
      '/og-image.webp',
  })

export default function ServicesRoute() {
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
            'الخدمات',

          path:
            '/services',
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
              breadcrumbSchema,
            ),
        }}
      />

      <section
        className="page-hero"
        aria-labelledby="services-page-title"
      >
        <div className="container">
          <div className="page-hero-content">
            <span className="eyebrow">
              خدمات الكهرباء المنزلية
            </span>

            <h1 id="services-page-title">
              خدمات كهربائي المنازل في جدة
            </h1>

            <p>
              خدمات كهربائية للمنازل
              تشمل التأسيس والتمديدات
              والتشطيب والإنارة وإصلاح
              الأعطال، بحسب احتياج كل
              موقع.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <Link
                className="button button-secondary"
                to="/contact"
              >
                التواصل
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="services-list-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات
            </span>

            <h2 id="services-list-title">
              اختر الخدمة التي تحتاجها
            </h2>

            <p>
              يمكنك الاطلاع على تفاصيل
              كل خدمة لمعرفة نطاق الأعمال
              والأسئلة الشائعة والأعمال
              المرتبطة بها.
            </p>
          </div>

          <div className="services-grid">
            {SERVICE_CATALOG.map(
              (
                service,
                index,
              ) => (
                <article
                  className="service-card"
                  key={
                    service.id
                  }
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

                  <Link
                    className="text-link"
                    to={
                      service.path
                    }
                    aria-label={`عرض تفاصيل ${service.name}`}
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

      <section
        className="section section--soft"
        aria-labelledby="service-process-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              طريقة التواصل
            </span>

            <h2 id="service-process-title">
              اشرح احتياجك مباشرة
            </h2>

            <p>
              تختلف الأعمال المطلوبة
              من منزل إلى آخر، لذلك
              الأفضل شرح المشكلة أو نوع
              العمل المطلوب مباشرة عند
              التواصل.
            </p>
          </div>

          <div className="benefits-list">
            <div>
              <strong>
                01
              </strong>

              <span>
                تواصل عبر الاتصال أو واتساب.
              </span>
            </div>

            <div>
              <strong>
                02
              </strong>

              <span>
                اشرح نوع العمل أو المشكلة
                ومكانها.
              </span>
            </div>

            <div>
              <strong>
                03
              </strong>

              <span>
                يتم تحديد الخدمة المناسبة
                بحسب احتياج الموقع.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section
        className="section section--cta"
        aria-labelledby="services-cta-title"
      >
        <div className="container">
          <div className="cta-card">
            <div>
              <span className="eyebrow">
                نور جدة للكهرباء
              </span>

              <h2 id="services-cta-title">
                تحتاج خدمة كهرباء لمنزلك في جدة؟
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
                aria-label="الاتصال بنور جدة للكهرباء"
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