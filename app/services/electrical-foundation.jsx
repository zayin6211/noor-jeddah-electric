import { Link } from 'react-router-dom'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'تأسيس كهرباء المنازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'خدمة تأسيس كهرباء المنازل في جدة من نور جدة للكهرباء، تشمل تجهيز نقاط الكهرباء والتمديدات الأولية للمنازل ضمن مراحل البناء والتشطيب.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/services/electrical-foundation`,
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
    content: 'تأسيس كهرباء المنازل في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'خدمة تأسيس كهرباء المنازل وتجهيز نقاط الكهرباء والتمديدات الأولية في جدة.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/services/electrical-foundation`,
  },
]

export default function ElectricalFoundation() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">خدمات الكهرباء المنزلية</span>

          <h1>تأسيس كهرباء المنازل في جدة</h1>

          <p>
            أعمال تأسيس الكهرباء وتجهيز نقاط الاستخدام والتمديدات
            الأولية للمنازل ضمن مراحل البناء والتشطيب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>ما المقصود بتأسيس الكهرباء؟</h2>

          <p>
            تأسيس الكهرباء هو المرحلة التي يتم فيها تجهيز وتمديد
            البنية الكهربائية الأساسية للمنزل قبل اكتمال مراحل
            التشطيب النهائية.
          </p>

          <h2>أعمال مرتبطة بالتأسيس</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>تجهيز نقاط الكهرباء</h3>
              <p>
                تحديد وتجهيز نقاط الاستخدام الكهربائية التي يحتاجها
                المنزل بحسب احتياجاته.
              </p>
            </article>

            <article className="service-card">
              <h3>التمديدات الأولية</h3>
              <p>
                تنفيذ التمديدات الكهربائية ضمن مراحل تأسيس المنزل.
              </p>
            </article>

            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز نقاط الإنارة ضمن خطة التشطيب الكهربائي للمنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج إلى تأسيس كهرباء لمنزلك في جدة؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياج المنزل وتفاصيل العمل.
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