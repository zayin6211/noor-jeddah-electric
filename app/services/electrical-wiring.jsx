import { Link } from 'react-router-dom'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'تمديدات كهربائية للمنازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'خدمات التمديدات الكهربائية للمنازل في جدة ضمن أعمال تأسيس وتشطيب الكهرباء، مع تجهيز نقاط الاستخدام والإنارة.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/services/electrical-wiring`,
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
    content:
      'تمديدات كهربائية للمنازل في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'تمديدات كهربائية للمنازل ضمن أعمال تأسيس وتشطيب الكهرباء في جدة.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/services/electrical-wiring`,
  },
]

export default function ElectricalWiring() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">خدمات الكهرباء المنزلية</span>

          <h1>تمديدات كهربائية للمنازل في جدة</h1>

          <p>
            تنفيذ أعمال التمديدات الكهربائية للمنازل ضمن مراحل
            التأسيس والتشطيب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>تمديدات الكهرباء للمنازل</h2>

          <p>
            تشمل أعمال التمديدات تجهيز المسارات والنقاط الكهربائية
            المرتبطة باستخدامات المنزل المختلفة ضمن مراحل العمل
            الكهربائي.
          </p>

          <h2>أنواع النقاط المرتبطة بالتمديدات</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الكهرباء</h3>
              <p>
                تجهيز نقاط الاستخدام الكهربائية في الأماكن المناسبة
                داخل المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز التمديدات ونقاط الإنارة ضمن أعمال التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>المفاتيح والأفياش</h3>
              <p>
                تجهيز نقاط المفاتيح والأفياش ضمن احتياجات المنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>استفسر عن التمديدات الكهربائية لمنزلك</h2>

            <p>
              تواصل مباشرة لمعرفة تفاصيل العمل المناسب لاحتياجك.
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