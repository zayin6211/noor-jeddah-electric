import { Link } from 'react-router'

import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createBreadcrumbSchema,
  createPageMeta,
  createWebPageSchema,
} from '../src/lib/seo.js'

export const meta = () =>
  createPageMeta({
    title:
      'تواصل مع نور جدة للكهرباء | كهربائي منازل في جدة',

    description:
      'تواصل مع نور جدة للكهرباء لطلبات تأسيس وتمديد وتشطيب الكهرباء والإنارة وإصلاح الأعطال المنزلية في جدة.',

    path:
      '/contact',
  })

export default function ContactRoute() {
  const webPageSchema =
    createWebPageSchema({
      name:
        'تواصل مع نور جدة للكهرباء',

      description:
        'صفحة التواصل مع نور جدة للكهرباء لخدمات الكهرباء المنزلية في جدة.',

      path:
        '/contact',
    })

  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name:
            'الرئيسية',

          path:
            '/',
        },

        {
          name:
            'تواصل معنا',

          path:
            '/contact',
        },
      ],
    })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              webPageSchema,
            ),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema,
            ),
        }}
      />

      <section
        className="page-hero"
        aria-labelledby="contact-page-title"
      >
        <div className="container">
          <span className="eyebrow">
            نور جدة للكهرباء
          </span>

          <h1 id="contact-page-title">
            تواصل معنا
          </h1>

          <p>
            لديك عطل كهربائي أو تحتاج إلى
            تأسيس أو تمديدات أو تشطيب أو
            أعمال إنارة؟ تواصل مباشرة واشرح
            نوع العمل المطلوب.
          </p>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="contact-methods-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              طرق التواصل
            </span>

            <h2 id="contact-methods-title">
              اختر طريقة التواصل المناسبة
            </h2>

            <p>
              يمكنك الاتصال مباشرة أو
              استخدام واتساب، كما يمكنك
              مراسلتنا عبر البريد الإلكتروني
              عند الحاجة.
            </p>
          </div>

          <div className="services-grid">
            <article className="service-card">
              <div
                className="service-number"
                aria-hidden="true"
              >
                01
              </div>

              <h3>
                الاتصال
              </h3>

              <p>
                اتصل مباشرة واشرح نوع المشكلة
                أو الخدمة الكهربائية التي
                تحتاجها.
              </p>

              <a
                className="text-link"
                href={`tel:${BUSINESS_PHONE}`}
                aria-label={`الاتصال على الرقم ${BUSINESS_PHONE}`}
              >
                {BUSINESS_PHONE}

                <span aria-hidden="true">
                  ←
                </span>
              </a>
            </article>

            <article className="service-card">
              <div
                className="service-number"
                aria-hidden="true"
              >
                02
              </div>

              <h3>
                واتساب
              </h3>

              <p>
                أرسل تفاصيل العمل أو المشكلة
                عبر واتساب لتوضيح احتياجك.
              </p>

              <a
                className="text-link"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="التواصل عبر واتساب"
              >
                فتح واتساب

                <span aria-hidden="true">
                  ←
                </span>
              </a>
            </article>

            <article className="service-card">
              <div
                className="service-number"
                aria-hidden="true"
              >
                03
              </div>

              <h3>
                البريد الإلكتروني
              </h3>

              <p>
                للمراسلات التي تحتاج إلى
                التواصل عبر البريد الإلكتروني.
              </p>

              <a
                className="text-link"
                href={`mailto:${BUSINESS_EMAIL}`}
                aria-label={`إرسال بريد إلكتروني إلى ${BUSINESS_EMAIL}`}
              >
                {BUSINESS_EMAIL}

                <span aria-hidden="true">
                  ←
                </span>
              </a>
            </article>
          </div>
        </div>
      </section>

      <section
        className="section section--soft"
        aria-labelledby="contact-details-title"
      >
        <div className="container">
          <div className="detail-cta">
            <span className="eyebrow">
              قبل التواصل
            </span>

            <h2 id="contact-details-title">
              جهّز تفاصيل المشكلة أو العمل
            </h2>

            <p>
              يساعد وصف الحالة بشكل واضح على
              فهم نوع الخدمة المطلوبة بشكل
              أفضل.
            </p>

            <ul>
              <li>
                اذكر نوع العمل: تأسيس، تمديد،
                تشطيب، إنارة أو إصلاح عطل.
              </li>

              <li>
                وضّح مكان المشكلة أو الجزء
                المتأثر داخل المنزل.
              </li>

              <li>
                إذا كان هناك عطل، اذكر ما
                يحدث عند تشغيل الكهرباء.
              </li>

              <li>
                يمكنك إرسال التفاصيل والصور
                المناسبة عبر وسيلة التواصل
                المتاحة لك.
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section
        className="section"
        aria-labelledby="contact-services-title"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات
            </span>

            <h2 id="contact-services-title">
              تعرف على الخدمات قبل التواصل
            </h2>

            <p>
              إذا لم تكن متأكدًا من اسم الخدمة،
              يمكنك مراجعة قائمة الخدمات
              واختيار الأقرب إلى احتياجك.
            </p>
          </div>

          <div className="cta-actions">
            <Link
              className="button button-primary"
              to="/services"
            >
              جميع الخدمات
            </Link>

            <Link
              className="button button-secondary"
              to="/neighborhoods"
            >
              أحياء جدة
            </Link>
          </div>
        </div>
      </section>

      <section
        className="section section--soft"
        aria-labelledby="contact-final-title"
      >
        <div className="container simple-cta">
          <div>
            <span className="eyebrow">
              تواصل مباشر
            </span>

            <h2 id="contact-final-title">
              تحتاج كهربائي في جدة؟
            </h2>

            <p>
              اتصل أو تواصل عبر واتساب واشرح
              احتياجك الكهربائي.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href={`tel:${BUSINESS_PHONE}`}
              aria-label={`الاتصال على الرقم ${BUSINESS_PHONE}`}
            >
              اتصل الآن
            </a>

            <a
              className="button button-secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="التواصل عبر واتساب"
            >
              واتساب
            </a>
          </div>
        </div>
      </section>
    </>
  )
}