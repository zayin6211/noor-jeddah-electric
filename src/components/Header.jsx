import { Link, NavLink } from 'react-router-dom'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link className="brand" to="/" aria-label="نور جدة للكهرباء - الرئيسية">
          <span className="brand-mark" aria-hidden="true">
            ن
          </span>

          <span>
            <strong>نور جدة للكهرباء</strong>
            <small>كهربائي منازل في جدة</small>
          </span>
        </Link>

        <nav className="main-nav" aria-label="التنقل الرئيسي">
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            الرئيسية
          </NavLink>

          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            الخدمات
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            تواصل معنا
          </NavLink>
        </nav>

        <div className="header-actions">
          <a className="header-phone" href={`tel:${phoneNumber}`}>
            اتصال مباشر
          </a>

          <a
            className="header-whatsapp"
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            واتساب
          </a>
        </div>
      </div>
    </header>
  )
}

export default Header