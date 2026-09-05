import { Link } from 'react-router'

import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  SERVICES,
  WHATSAPP_URL,
} from '../lib/seo'

function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            الخدمات
          </span>

          <h1>
            خدمات الكهرباء المنزلية في جدة
          </h1>

          <p>
            أعمال تأسيس وتمديد وتشطيب الكهرباء
            للمنازل في جميع مناطق جدة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              خدمات نور جدة للكهرباء
            </span>

            <h2>
              خدمات كهربائية مرتبطة باحتياج المنزل
            </h2>

            <p>
              تعرّف على الخدمات الأساسية المتاحة،
              ثم تواصل مباشرة للاستفسار عن العمل الذي تحتاجه.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {SERVICES.map(
              (service) => (
                <Link
                  className="service-card service-card--detailed"
                  key={service.id}
                  to={service.path}
                  aria-label={`التعرف على ${service.shortName}`}
                  reloadDocument
                >
                  <div
                    className="service-number"
                    aria-hidden="true"
                  >
                    ✓
                  </div>

                  <h2>
                    {service.name}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                  <span
                    className="text-link"
                    aria-hidden="true"
                  >
                    تفاصيل {service.shortName}

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
        <div className="container simple-cta">
          <div>
            <h2>
              هل لديك عمل كهربائي للمنزل؟
            </h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياجك
              وتفاصيل الخدمة.
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
              to="/contact"
              reloadDocument
            >
              صفحة التواصل
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services