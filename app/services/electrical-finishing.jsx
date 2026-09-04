import { Link } from 'react-router-dom'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'تشطيب كهرباء المنازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'أعمال تشطيب الكهرباء للمنازل في جدة، تشمل نقاط الكهرباء والإنارة والمفاتيح والأفياش ضمن المراحل النهائية للتشطيب.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/services/electrical-finishing`,
  },
  {
    property: 'og:type',
    content: 'website',
  },
  {
    property: 'og:locale',
    content: 'ar_SA',
  },
  {
    property: 'og:site_name',
    content: 'نور جدة للكهرباء',
  },
  {
    property: 'og:title',
    content: 'تشطيب كهرباء المنازل في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'تشطيب الكهرباء للمنازل ونقاط الكهرباء والإنارة والمفاتيح والأفياش في جدة.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/services/electrical-finishing`,
  },
]

export default function ElectricalFinishing() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">خدمات الكهرباء المنزلية</span>

          <h1>تشطيب كهرباء المنازل في جدة</h1>

          <p>
            تنفيذ أعمال التشطيب الكهربائي للمنازل وتجهيز النقاط
            النهائية للكهرباء والإنارة والمفاتيح والأفياش.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>أعمال تشطيب الكهرباء</h2>

          <p>
            تشطيب الكهرباء هو المرحلة التي تكتمل فيها نقاط الاستخدام
            والتجهيزات الكهربائية داخل المنزل بعد مراحل التأسيس
            والتمديدات.
          </p>

          <h2>الخدمات المرتبطة بالتشطيب</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الكهرباء</h3>
              <p>
                تجهيز النقاط النهائية للاستخدام داخل المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>الإنارة</h3>
              <p>
                تنفيذ نقاط وتجهيزات الإنارة ضمن أعمال التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>المفاتيح والأفياش</h3>
              <p>
                تركيب وتجهيز نقاط المفاتيح والأفياش للمنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج تشطيب كهرباء لمنزلك في جدة؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن الأعمال التي تحتاجها.
            </p>

            <div className="cta-actions">
              <a
                className="button button-primary"
                href="tel:0546856974"
              >
                اتصل الآن
              </a>

              <Link
                className="button button-secondary"
                to="/services"
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