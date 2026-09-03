import { Link } from 'react-router-dom'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>نور جدة للكهرباء</h2>

          <p>
            كهربائي منازل في جدة يقدم أعمال تشطيب الكهرباء للمنازل
            في جميع مناطق جدة.
          </p>
        </div>

        <div>
          <h2>روابط الموقع</h2>

          <nav aria-label="روابط الموقع">
            <Link to="/">الرئيسية</Link>
            <Link to="/services">الخدمات</Link>
            <Link to="/contact">تواصل معنا</Link>
          </nav>
        </div>

        <div>
          <h2>تواصل مباشر</h2>

          <a href={`tel:${phoneNumber}`}>{phoneNumber}</a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
          >
            التواصل عبر واتساب
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {new Date().getFullYear()} نور جدة للكهرباء. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}

export default Footer