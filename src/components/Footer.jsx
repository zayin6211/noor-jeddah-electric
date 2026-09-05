import { Link } from 'react-router'

import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
} from '../lib/seo'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>{BUSINESS_NAME}</h2>

          <p>
            كهربائي منازل في جدة يقدم أعمال تأسيس وتمديد وتشطيب
            الكهرباء للمنازل في جميع مناطق جدة.
          </p>
        </div>

        <div>
          <h2>روابط الموقع</h2>

          <nav aria-label="روابط الموقع">
            <Link to="/">
              الرئيسية
            </Link>

            <Link to="/services">
              خدمات الكهرباء
            </Link>

            <Link to="/contact">
              التواصل مع كهربائي في جدة
            </Link>
          </nav>
        </div>

        <div>
          <h2>تواصل مباشر</h2>

          <a
            href={`tel:${BUSINESS_PHONE}`}
          >
            {BUSINESS_PHONE}
          </a>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            التواصل عبر واتساب
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} {BUSINESS_NAME}. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}

export default Footer