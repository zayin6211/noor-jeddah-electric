import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
} from '../lib/seo'

function navigateTo(path) {
  window.location.assign(path)
}

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <a
          className="brand"
          href="/"
          aria-label={`${BUSINESS_NAME} - الصفحة الرئيسية`}
          onClick={(event) => {
            event.preventDefault()
            navigateTo('/')
          }}
        >
          <span
            className="brand-mark"
            aria-hidden="true"
          >
            ن
          </span>

          <span>
            <strong>
              {BUSINESS_NAME}
            </strong>

            <small>
              كهربائي منازل في جدة
            </small>
          </span>
        </a>

        <nav
          className="main-nav"
          aria-label="التنقل الرئيسي"
        >
          <a
            href="/"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/')
            }}
          >
            الرئيسية
          </a>

          <a
            href="/services"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/services')
            }}
          >
            الخدمات
          </a>

          <a
            href="/contact"
            onClick={(event) => {
              event.preventDefault()
              navigateTo('/contact')
            }}
          >
            التواصل
          </a>
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={`tel:${BUSINESS_PHONE}`}
            aria-label={`الاتصال بـ${BUSINESS_NAME} على الرقم ${BUSINESS_PHONE}`}
          >
            اتصل الآن
          </a>

          <a
            className="header-whatsapp"
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`التواصل مع ${BUSINESS_NAME} عبر واتساب`}
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header