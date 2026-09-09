import { Link, NavLink } from 'react-router'

const navigation = [
  {
    to: '/',
    label: 'الرئيسية',
    end: true,
  },
  {
    to: '/services',
    label: 'الخدمات',
  },
  {
    to: '/neighborhoods',
    label: 'أحياء جدة',
  },
  {
    to: '/contact',
    label: 'تواصل معنا',
  },
]

function Header() {
  return (
    <header className="site-header">
      <div className="container site-header-inner">
        <Link
          className="site-logo"
          to="/"
          aria-label="نور جدة للكهرباء - الصفحة الرئيسية"
        >
          <span className="site-logo-mark" aria-hidden="true">
            ⚡
          </span>

          <span className="site-logo-text">
            نور جدة للكهرباء
          </span>
        </Link>

        <nav
          className="site-navigation"
          aria-label="التنقل الرئيسي"
        >
          {navigation.map(
            (item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    'nav-link',
                    isActive
                      ? 'nav-link--active'
                      : '',
                  ]
                    .filter(Boolean)
                    .join(' ')
                }
              >
                {item.label}
              </NavLink>
            ),
          )}
        </nav>

        <div className="site-header-actions">
          <a
            className="header-phone"
            href="tel:0546856974"
            aria-label="الاتصال بنور جدة للكهرباء"
          >
            <span aria-hidden="true">
              ☎
            </span>

            <span>
              0546856974
            </span>
          </a>

          <a
            className="header-whatsapp"
            href="https://wa.me/966546856974"
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