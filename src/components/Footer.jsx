import { Link } from 'react-router-dom'

const phoneNumber = '0546856974'
const whatsappUrl = 'https://wa.me/966546856974'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h2>نور جدة للكهرباء</h2>

          <p>
            كهربائي منازل في جدة يقدم أعمال تأسيس وتمديد وتشطيب
            الكهرباء للمنازل في جميع مناطق جدة.
          </p>
        </div>

        <div>
          <h2>روابط الموقع</h2>

          <nav aria-label="روابط الموقع">
            <Link to="/">الرئيسية</Link>
            <Link to="/services">خدمات الكهرباء</Link>
            <Link to="/contact">التواصل مع كهربائي في جدة</Link>
          </nav>
        </div>

        <div>
          <h2>تواصل مباشر</h2>

          <a href={`tel:${phoneNumber}`}>
            {phoneNumber}
          </a>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            التواصل عبر واتساب
          </a>
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {currentYear} نور جدة للكهرباء. جميع الحقوق محفوظة.
        </p>
      </div>
    </footer>
  )
}

export default Footer