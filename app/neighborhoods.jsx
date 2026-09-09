import { Link } from 'react-router'

import {
  NEIGHBORHOODS,
} from '../src/lib/neighborhoods.js'

import {
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createBreadcrumbSchema,
  createPageMeta,
} from '../src/lib/seo.js'

export const meta = () =>
  createPageMeta({
    title:
      'أحياء جدة | كهربائي منازل في جميع أحياء جدة | نور جدة للكهرباء',

    description:
      'قائمة أحياء جدة التي يغطيها نور جدة للكهرباء لخدمات تأسيس وتمديد وتشطيب الكهرباء والإنارة وإصلاح الأعطال المنزلية.',

    path:
      '/neighborhoods',
  })

function NeighborhoodsPage() {
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
            'أحياء جدة',

          path:
            '/neighborhoods',
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
        aria-labelledby="neighborhoods-page-title"
      >
        <div className="container">
          <span className="eyebrow">
            نطاق الخدمة
          </span>

          <h1 id="neighborhoods-page-title">
            كهربائي منازل في أحياء جدة
          </h1>

          <p>
            يغطي نور جدة للكهرباء الأحياء
            المدرجة أدناه لخدمات الكهرباء
            المنزلية، من التأسيس والتمديدات
            والتشطيب والإنارة إلى إصلاح
            الأعطال.
          </p>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="neighborhoods-list-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              أحياء جدة
            </span>

            <h2 id="neighborhoods-list-title">
              اختر الحي المطلوب
            </h2>

            <p>
              افتح صفحة الحي لمعرفة الخدمات
              الكهربائية المنزلية المرتبطة
              به والتواصل مباشرة مع نور جدة
              للكهرباء.
            </p>
          </div>

          <nav
            aria-label="قائمة أحياء جدة"
          >
            <div className="services-grid services-grid--large">
              {NEIGHBORHOODS.map(
                (
                  neighborhood,
                  index,
                ) => (
                  <Link
                    className="service-card"
                    key={
                      neighborhood.slug
                    }
                    to={`/neighborhoods/${neighborhood.slug}`}
                    aria-label={`كهربائي في حي ${neighborhood.name} بجدة`}
                  >
                    <div
                      className="service-number"
                      aria-hidden="true"
                    >
                      {String(
                        index + 1,
                      ).padStart(
                        3,
                        '0',
                      )}
                    </div>

                    <h3>
                      كهربائي حي{' '}
                      {
                        neighborhood.name
                      }
                    </h3>

                    <p>
                      {
                        neighborhood.focus
                      }
                    </p>

                    <span
                      className="text-link"
                      aria-hidden="true"
                    >
                      صفحة الحي

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
          </nav>

          <div className="detail-cta">
            <h2>
              تحتاج كهربائي في جدة؟
            </h2>

            <p>
              تواصل مباشرة واشرح نوع العمل
              أو العطل المطلوب داخل منزلك.
            </p>

            <div className="cta-actions">
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

export default NeighborhoodsPage