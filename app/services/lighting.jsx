import { Link } from 'react-router-dom'

const SITE_URL = 'https://noor-jeddah-electric.vercel.app'

export const meta = () => [
  {
    title: 'تركيب ونقاط الإنارة للمنازل في جدة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'خدمات نقاط وتركيب الإنارة للمنازل في جدة ضمن أعمال التشطيب الكهربائي، مع تجهيز نقاط الإنارة حسب احتياج المنزل.',
  },
  {
    tagName: 'link',
    rel: 'canonical',
    href: `${SITE_URL}/services/lighting`,
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
      'تركيب ونقاط الإنارة للمنازل في جدة | نور جدة للكهرباء',
  },
  {
    property: 'og:description',
    content:
      'تجهيز نقاط وتركيب الإنارة ضمن أعمال الكهرباء المنزلية والتشطيب في جدة.',
  },
  {
    property: 'og:url',
    content: `${SITE_URL}/services/lighting`,
  },
]

export default function Lighting() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">خدمات الكهرباء المنزلية</span>

          <h1>نقاط وتركيب الإنارة للمنازل في جدة</h1>

          <p>
            تجهيز نقاط الإنارة وتنفيذ أعمال مرتبطة بتشطيب الكهرباء
            داخل المنازل في جدة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>أعمال الإنارة المنزلية</h2>

          <p>
            تشمل أعمال الإنارة تجهيز النقاط المطلوبة ضمن مراحل
            التشطيب الكهربائي بما يتناسب مع استخدامات ومساحات المنزل.
          </p>

          <h2>أعمال مرتبطة بالإنارة</h2>

          <div className="services-grid services-grid--large">
            <article className="service-card">
              <h3>نقاط الإنارة</h3>
              <p>
                تجهيز نقاط الإنارة داخل الغرف والمساحات المختلفة.
              </p>
            </article>

            <article className="service-card">
              <h3>تمديدات الإنارة</h3>
              <p>
                تنفيذ التمديدات المرتبطة بنقاط الإنارة ضمن أعمال
                التشطيب.
              </p>
            </article>

            <article className="service-card">
              <h3>تجهيزات الإضاءة</h3>
              <p>
                تجهيز نقاط الإضاءة النهائية ضمن احتياج المنزل.
              </p>
            </article>
          </div>

          <div className="detail-cta">
            <h2>تحتاج أعمال إنارة لمنزلك؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياجك.
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