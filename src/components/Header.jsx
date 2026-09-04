import { Link, NavLink } from 'react-router-dom'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link
          className="brand"
          to="/"
          aria-label="نور جدة للكهرباء - الصفحة الرئيسية"
        >
          <span
            className="brand-mark"
            aria-hidden="true"
          >
            ن
          </span>

          <span>
            <strong>نور جدة للكهرباء</strong>
            <small>كهربائي منازل في جدة</small>
          </span>
        </Link>

        <nav
          className="main-nav"
          aria-label="التنقل الرئيسي"
        >
          <NavLink
            to="/"
            end
          >
            الرئيسية
          </NavLink>

          <NavLink to="/services">
            خدماتنا
          </NavLink>

          <NavLink to="/contact">
            اتصل بنا
          </NavLink>
        </nav>

        <div className="header-actions">
          <a
            className="header-phone"
            href={`tel:${phoneNumber}`}
            aria-label={`الاتصال بنور جدة للكهرباء على الرقم ${phoneNumber}`}
          >
            اتصل الآن
          </a>

          <a
            className="header-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header