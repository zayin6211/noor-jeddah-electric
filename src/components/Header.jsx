import { Link, NavLink } from 'react-router'
import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
} from '../lib/seo'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label={`${BUSINESS_NAME} - الصفحة الرئيسية`}
        >
          <span className="brand-mark" aria-hidden="true">
            ن
          </span>

          <span>
            <strong>{BUSINESS_NAME}</strong>
            <small>كهربائي منازل في جدة</small>
          </span>
        </Link>

        <nav
          className="main-nav"
          aria-label="التنقل الرئيسي"
        >
          <NavLink to="/" end>
            الرئيسية
          </NavLink>

          <NavLink to="/services">
            الخدمات
          </NavLink>

          <NavLink to="/contact">
            التواصل
          </NavLink>
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