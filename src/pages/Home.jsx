import { Link } from 'react-router-dom'

import heroImage from '../assets/588522761_1277704574403400_700824699880070196_n - Copy (2).webp'
import electricalFinishingImage from '../assets/electrical-finishing-jeddah.webp'
import lightingImage from '../assets/images (8).webp'
import ceilingLightingImage from '../assets/images (9).webp'
import electricalInstallationImage from '../assets/images (15).webp'
import wiringImage from '../assets/images (20)_upscayl_4x_upscayl-standard-4x - Copy.webp'
import interiorLightingImage from '../assets/images (17).webp'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

const services = [
  {
    title: 'تأسيس الكهرباء',
    description:
      'أعمال تأسيس الكهرباء للمنازل وتجهيز نقاط الاستخدام وفق احتياج المنزل.',
  },
  {
    title: 'التمديدات الكهربائية',
    description:
      'تنفيذ أعمال التمديدات الكهربائية ضمن مراحل تشطيب المنزل.',
  },
  {
    title: 'نقاط الكهرباء والإنارة',
    description:
      'تجهيز وتركيب نقاط الكهرباء والإنارة بما يناسب الاستخدام اليومي.',
  },
  {
    title: 'المفاتيح والأفياش',
    description:
      'تركيب نقاط المفاتيح والأفياش ضمن أعمال التشطيب الكهربائي للمنزل.',
  },
]

const gallery = [
  {
    src: electricalFinishingImage,
    alt: 'تشطيبات كهربائية منزلية ونقاط كهرباء داخل منزل',
    width: 1024,
    height: 768,
  },
  {
    src: lightingImage,
    alt: 'إضاءة داخلية وتشطيب أسقف في منزل',
    width: 516,
    height: 387,
  },
  {
    src: ceilingLightingImage,
    alt: 'تصميم وتركيب الإضاءة الداخلية في الأسقف',
    width: 516,
    height: 387,
  },
  {
    src: electricalInstallationImage,
    alt: 'تمديدات وتجهيزات كهربائية أثناء أعمال التشطيب',
    width: 415,
    height: 739,
  },
  {
    src: wiringImage,
    alt: 'تمديدات كهربائية وتجهيز أسلاك داخل المبنى',
    width: 898,
    height: 1600,
  },
  {
    src: interiorLightingImage,
    alt: 'تشطيب إنارة داخلية في منزل',
    width: 335,
    height: 597,
  },
]

function Home() {
  return (
    <main>
      <section className="hero-section">
        <div className="container hero-content">
          <div className="hero-copy">
            <span className="eyebrow">نور جدة للكهرباء</span>

            <h1>كهربائي منازل في جدة لأعمال التشطيب الكهربائي</h1>

            <p className="hero-description">
              تنفيذ أعمال تشطيب الكهرباء للمنازل في جميع مناطق جدة،
              من التأسيس والتمديدات إلى نقاط الكهرباء والإنارة
              والمفاتيح والأفياش.
            </p>

            <div className="hero-actions">
              <a
                className="button button-primary"
                href={`tel:${phoneNumber}`}
                aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${phoneNumber}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
              >
                تواصل عبر واتساب
              </a>
            </div>

            <div
              className="hero-facts"
              aria-label="معلومات عن الخدمة"
            >
              <div>
                <strong>15 سنة</strong>
                <span>خبرة</span>
              </div>

              <div>
                <strong>جميع مناطق جدة</strong>
                <span>نطاق الخدمة</span>
              </div>

              <div>
                <strong>كل يوم</strong>
                <span>أيام العمل</span>
              </div>
            </div>
          </div>

          <div className="hero-image-wrapper">
            <img
              className="hero-image"
              src={heroImage}
              alt="تشطيب كهربائي وإضاءة داخلية لمنزل"
              width="1600"
              height="1200"
              loading="eager"
              fetchPriority="high"
              decoding="async"
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">الخدمات</span>

            <h2>خدمات الكهرباء المنزلية في جدة</h2>

            <p>
              أعمال كهربائية مرتبطة بمراحل تأسيس وتشطيب المنزل،
              مع إمكانية التواصل مباشرة للاستفسار عن احتياجك.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service) => (
              <article
                className="service-card"
                key={service.title}
              >
                <div
                  className="service-number"
                  aria-hidden="true"
                >
                  ✓
                </div>

                <h3>{service.title}</h3>

                <p>{service.description}</p>
              </article>
            ))}
          </div>

          <div className="center-action">
            <Link className="text-link" to="/services">
              مشاهدة جميع تفاصيل الخدمات
              <span aria-hidden="true">←</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="section gallery-section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">معرض الصور</span>

            <h2>نماذج وصور لأعمال الكهرباء والإنارة</h2>

            <p>
              مجموعة من الصور المرتبطة بأعمال الكهرباء والتشطيب
              والإضاءة المنزلية.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((image) => (
              <figure
                className="gallery-item"
                key={image.src}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  decoding="async"
                />
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">خبرة وتواصل مباشر</span>

            <h2>كهربائي منازل في جدة لأعمال الكهرباء للمنازل</h2>

            <p>
              نور جدة للكهرباء يقدم خدمة كهربائي سكنية مستقلة في
              جميع مناطق جدة، مع خبرة تمتد إلى 15 سنة في مجال
              الكهرباء.
            </p>
          </div>

          <div className="benefits-list">
            <div>
              <strong>خبرة 15 سنة</strong>
              <span>
                خبرة عملية في مجال الكهرباء.
              </span>
            </div>

            <div>
              <strong>خدمة داخل جدة</strong>
              <span>
                الخدمة متاحة في جميع مناطق جدة.
              </span>
            </div>

            <div>
              <strong>تواصل مباشر</strong>
              <span>
                تواصل مباشرة عبر الاتصال أو واتساب.
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container cta-content">
          <div>
            <span className="eyebrow">تواصل الآن</span>

            <h2>تحتاج كهربائيًا لمنزلك في جدة؟</h2>

            <p>
              تواصل مباشرة مع علي للاستفسار عن أعمال الكهرباء التي
              تحتاجها.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button-light"
              href={`tel:${phoneNumber}`}
            >
              اتصل بـ {phoneNumber}
            </a>

            <a
              className="button button-outline-light"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home