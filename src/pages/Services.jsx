import { Link } from 'react-router-dom'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

const services = [
  {
    title: 'تأسيس الكهرباء',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام ضمن مراحل البناء والتشطيب.',
  },
  {
    title: 'التمديدات الكهربائية',
    description:
      'تنفيذ أعمال التمديدات الكهربائية للمنازل ضمن أعمال التشطيب الكهربائي.',
  },
  {
    title: 'نقاط الكهرباء',
    description:
      'تجهيز وتركيب نقاط الكهرباء التي يحتاجها المنزل للاستخدام اليومي.',
  },
  {
    title: 'الإنارة',
    description:
      'تنفيذ أعمال نقاط وتركيب الإنارة ضمن مراحل تشطيب الكهرباء.',
  },
  {
    title: 'المفاتيح',
    description:
      'تركيب وتجهيز نقاط المفاتيح ضمن أعمال الكهرباء المنزلية.',
  },
  {
    title: 'الأفياش',
    description:
      'تركيب وتجهيز نقاط الأفياش ضمن تشطيب الكهرباء للمنزل.',
  },
]

function Services() {
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">الخدمات</span>

          <h1>خدمات الكهرباء المنزلية في جدة</h1>

          <p>
            أعمال تأسيس وتمديد وتشطيب الكهرباء للمنازل في جميع
            مناطق جدة.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="services-grid services-grid--large">
            {services.map((service) => (
              <article className="service-card service-card--detailed" key={service.title}>
                <div className="service-number" aria-hidden="true">
                  ✓
                </div>

                <h2>{service.title}</h2>

                <p>{service.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container simple-cta">
          <div>
            <h2>هل لديك عمل كهربائي للمنزل؟</h2>

            <p>
              تواصل مباشرة للاستفسار عن احتياجك وتفاصيل الخدمة.
            </p>
          </div>

          <div className="cta-actions">
            <a className="button button-primary" href={`tel:${phoneNumber}`}>
              اتصل الآن
            </a>

            <a
              className="button button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              واتساب
            </a>

            <Link className="text-link" to="/contact">
              صفحة التواصل
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Services