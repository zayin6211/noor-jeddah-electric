import { Link } from 'react-router'

const serviceLinks = [
  {
    to: '/services/electrical-foundation',
    label: 'تأسيس الكهرباء',
  },
  {
    to: '/services/electrical-wiring',
    label: 'التمديدات الكهربائية',
  },
  {
    to: '/services/electrical-finishing',
    label: 'التشطيب الكهربائي',
  },
  {
    to: '/services/lighting',
    label: 'أعمال الإنارة',
  },
  {
    to: '/services/electrical-repair',
    label: 'إصلاح الأعطال',
  },
]

const mainLinks = [
  {
    to: '/',
    label: 'الرئيسية',
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

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer-grid">
          <section
            aria-labelledby="footer-about-title"
          >
            <h2
              id="footer-about-title"
              className="site-footer-title"
            >
              نور جدة للكهرباء
            </h2>

            <p>
              خدمات كهرباء منزلية في جدة تشمل
              التأسيس والتمديدات والتشطيب
              والإنارة وإصلاح الأعطال.
            </p>

            <div className="footer-contact">
              <a
                href="tel:0546856974"
                aria-label="الاتصال بنور جدة للكهرباء"
              >
                0546856974
              </a>

              <a
                href="https://wa.me/966546856974"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="التواصل مع نور جدة للكهرباء عبر واتساب"
              >
                واتساب
              </a>
            </div>
          </section>

          <nav
            aria-labelledby="footer-navigation-title"
          >
            <h2
              id="footer-navigation-title"
              className="site-footer-title"
            >
              روابط الموقع
            </h2>

            <ul className="footer-links">
              {mainLinks.map(
                (link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>

          <nav
            aria-labelledby="footer-services-title"
          >
            <h2
              id="footer-services-title"
              className="site-footer-title"
            >
              الخدمات
            </h2>

            <ul className="footer-links">
              {serviceLinks.map(
                (link) => (
                  <li key={link.to}>
                    <Link to={link.to}>
                      {link.label}
                    </Link>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="site-footer-bottom">
          <p>
            © {new Date().getFullYear()}{' '}
            نور جدة للكهرباء. جميع الحقوق
            محفوظة.
          </p>

          <Link to="/contact">
            تواصل معنا
          </Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer