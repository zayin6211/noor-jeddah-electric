import { Link } from 'react-router'

export const meta = () => [
  {
    title:
      'الصفحة غير موجودة | نور جدة للكهرباء',
  },
  {
    name: 'description',
    content:
      'الصفحة المطلوبة غير موجودة. يمكنك العودة إلى خدمات الكهرباء المنزلية في جدة أو التواصل مع نور جدة للكهرباء.',
  },
  {
    name: 'robots',
    content:
      'noindex, follow',
  },
]

export default function NotFoundRoute() {
  return (
    <>
      <section
        className="page-hero"
        aria-labelledby="not-found-title"
      >
        <div className="container">
          <span
            className="eyebrow"
            aria-hidden="true"
          >
            404
          </span>

          <h1 id="not-found-title">
            الصفحة غير موجودة
          </h1>

          <p>
            الصفحة التي تبحث عنها غير موجودة
            أو ربما تم تغيير رابطها.
          </p>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="not-found-actions-title"
      >
        <div className="container">
          <div className="detail-cta">
            <h2 id="not-found-actions-title">
              يمكنك متابعة التصفح
            </h2>

            <p>
              انتقل إلى الصفحة الرئيسية أو
              اطلع على خدمات الكهرباء المنزلية
              أو تواصل معنا مباشرة.
            </p>

            <nav
              className="cta-actions"
              aria-label="خيارات التنقل"
            >
              <Link
                className="button button-primary"
                to="/"
              >
                الصفحة الرئيسية
              </Link>

              <Link
                className="button button-secondary"
                to="/services"
              >
                خدمات الكهرباء
              </Link>

              <Link
                className="button button-secondary"
                to="/contact"
              >
                التواصل معنا
              </Link>
            </nav>
          </div>
        </div>
      </section>
    </>
  )
}