import { useEffect } from 'react'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'
const canonicalUrl = 'https://noor-jeddah-electric.com/contact'

function setMeta(name, content) {
  let meta = document.head.querySelector(`meta[name="${name}"]`)

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('name', name)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

function setProperty(property, content) {
  let meta = document.head.querySelector(
    `meta[property="${property}"]`,
  )

  if (!meta) {
    meta = document.createElement('meta')
    meta.setAttribute('property', property)
    document.head.appendChild(meta)
  }

  meta.setAttribute('content', content)
}

function setCanonical(url) {
  let canonical = document.head.querySelector(
    'link[rel="canonical"]',
  )

  if (!canonical) {
    canonical = document.createElement('link')
    canonical.setAttribute('rel', 'canonical')
    document.head.appendChild(canonical)
  }

  canonical.setAttribute('href', url)
}

function Contact() {
  useEffect(() => {
    const title =
      'التواصل مع كهربائي في جدة | نور جدة للكهرباء'

    const description =
      'تواصل مع نور جدة للكهرباء للاستفسار عن أعمال الكهرباء المنزلية في جميع مناطق جدة. اتصال مباشر أو تواصل عبر واتساب.'

    document.title = title

    setMeta('description', description)

    setProperty('og:type', 'website')
    setProperty('og:locale', 'ar_SA')
    setProperty('og:site_name', 'نور جدة للكهرباء')
    setProperty('og:title', title)
    setProperty('og:description', description)
    setProperty('og:url', canonicalUrl)

    setCanonical(canonicalUrl)
  }, [])

  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">التواصل</span>

          <h1>تواصل مع كهربائي في جدة</h1>

          <p>
            للتواصل والاستفسار عن أعمال الكهرباء المنزلية، يمكنك
            الاتصال مباشرة أو التواصل عبر واتساب.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid">
          <div className="contact-card contact-card--primary">
            <span className="contact-icon" aria-hidden="true">
              ☎
            </span>

            <h2>اتصال مباشر</h2>

            <p>
              الخيار الأسرع للتواصل والاستفسار عن احتياجك.
            </p>

            <a
              className="contact-number"
              href={`tel:${phoneNumber}`}
            >
              {phoneNumber}
            </a>

            <a
              className="button button-primary"
              href={`tel:${phoneNumber}`}
            >
              اتصل الآن
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              وات
            </span>

            <h2>واتساب</h2>

            <p>
              يمكنك أيضًا التواصل مباشرة عبر واتساب.
            </p>

            <a
              className="button button-secondary"
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
            >
              فتح واتساب
            </a>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              جدة
            </span>

            <h2>منطقة الخدمة</h2>

            <p>
              الخدمة متاحة في جميع مناطق جدة.
            </p>

            <strong className="contact-highlight">
              جميع مناطق جدة
            </strong>
          </div>

          <div className="contact-card">
            <span className="contact-icon" aria-hidden="true">
              15
            </span>

            <h2>الخبرة</h2>

            <p>
              خبرة في مجال الكهرباء تمتد إلى 15 سنة.
            </p>

            <strong className="contact-highlight">
              15 سنة خبرة
            </strong>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container contact-note">
          <h2>متى يمكن التواصل؟</h2>

          <p>
            العمل متاح كل يوم، ومعظم ساعات العمل تكون في الصباح.
          </p>

          <a
            className="button button-primary"
            href={`tel:${phoneNumber}`}
          >
            تواصل مباشرة
          </a>
        </div>
      </section>
    </main>
  )
}

export default Contact