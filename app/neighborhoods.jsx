import { Link } from 'react-router'

import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createPageMeta,
} from '../src/lib/seo'

import {
  NEIGHBORHOODS,
} from '../src/lib/neighborhoods'

export const meta = () =>
  createPageMeta({
    title:
      'كهربائي أحياء جدة | كهربائي منازل في جميع أحياء جدة',

    description:
      'خدمات الكهرباء المنزلية في أحياء جدة المختلفة، تشمل التأسيس والتمديد والتشطيب والإنارة والإصلاح مع خدمة ميدانية في مواقع العملاء.',

    path:
      '/neighborhoods',
  })

export default function Neighborhoods() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            نطاق الخدمة
          </span>

          <h1>
            كهربائي في أحياء جدة
          </h1>

          <p>
            {BUSINESS_NAME} يقدم خدمات الكهرباء
            المنزلية في أحياء جدة المختلفة،
            مع الوصول إلى موقع العميل بحسب
            نوع العمل المطلوب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              أحياء جدة
            </span>

            <h2>
              اختر الحي لمعرفة خدمات الكهرباء المتاحة
            </h2>

            <p>
              اختر منطقتك داخل جدة للوصول إلى
              صفحة مخصصة تتناول احتياجات الكهرباء
              المنزلية والخدمات التي يمكن طلبها.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {NEIGHBORHOODS.map(
              (neighborhood) => (
                <Link
                  className="service-card service-card--detailed"
                  key={
                    neighborhood.slug
                  }
                  to={`/neighborhoods/${neighborhood.slug}`}
                  reloadDocument
                  aria-label={`كهربائي ${neighborhood.name} جدة`}
                >
                  <h3>
                    كهربائي {neighborhood.name}
                    {' جدة'}
                  </h3>

                  <p>
                    {neighborhood.description}
                  </p>

                  <span
                    className="text-link"
                    aria-hidden="true"
                  >
                    خدمات الكهرباء في{' '}
                    {neighborhood.name}

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
              تحتاج كهربائي داخل أحد أحياء جدة؟
            </h2>

            <p>
              {BUSINESS_NAME} يعمل في مواقع
              العملاء داخل جدة. تواصل مباشرة
              لتوضيح الحي ونوع العمل المطلوب.
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
              to="/services"
              reloadDocument
            >
              جميع الخدمات
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}