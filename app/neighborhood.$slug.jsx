import { Link, useParams } from 'react-router'

import {
  BUSINESS_NAME,
  BUSINESS_PHONE,
  WHATSAPP_URL,
  createBreadcrumbSchema,
  createPageMeta,
} from '../src/lib/seo'

import {
  getNeighborhoodBySlug,
  getNeighborhoodFaqs,
  getRelatedNeighborhoods,
} from '../src/lib/neighborhoods'

const SERVICE_LINKS = [
  {
    path: '/services/electrical-foundation',
    title: 'تأسيس كهرباء المنازل',
    description:
      'تجهيز وتمديد نقاط الكهرباء الأساسية للمنازل أثناء مراحل التأسيس.',
  },
  {
    path: '/services/electrical-wiring',
    title: 'التمديدات الكهربائية للمنازل',
    description:
      'تنظيم وتمديد الأسلاك والدوائر الكهربائية بما يناسب احتياجات المنزل.',
  },
  {
    path: '/services/electrical-finishing',
    title: 'تشطيب كهرباء المنازل',
    description:
      'تنفيذ أعمال التشطيب الكهربائي وترتيب نقاط المفاتيح والأفياش والإنارة.',
  },
  {
    path: '/services/lighting',
    title: 'نقاط وتركيب الإنارة',
    description:
      'تجهيز نقاط الإنارة وتركيب وحدات الإضاءة المناسبة للمساحات المنزلية.',
  },
  {
    path: '/services/electrical-repair',
    title: 'إصلاح الأعطال الكهربائية',
    description:
      'فحص الأعطال الكهربائية المنزلية وتحديد سبب المشكلة قبل الإصلاح.',
  },
]

const CONTENT_VARIANTS = [
  {
    heading:
      'كهربائي منازل لخدمة احتياجك داخل الحي',
    paragraph: (name) =>
      `إذا كنت تبحث عن كهربائي منازل في حي ${name} بجدة، يمكنك التواصل مباشرة مع نور جدة للكهرباء وشرح نوع العمل المطلوب. يمكن أن يكون الطلب متعلقًا بالتأسيس أو التمديدات أو التشطيب أو الإنارة أو إصلاح عطل كهربائي.`,
  },
  {
    heading:
      'أعمال الكهرباء المنزلية في حي {name}',
    paragraph: (name) =>
      `الخدمة الكهربائية داخل حي ${name} تبدأ من فهم حالة المنزل والعمل الذي يحتاجه فعليًا. لذلك يمكن التواصل سواء كان المطلوب تجهيز منزل جديد أو تعديل تمديدات قائمة أو استكمال أعمال كهربائية داخل منزل مستخدم.`,
  },
  {
    heading:
      'خدمة كهربائي سكني في حي {name} بجدة',
    paragraph: (name) =>
      `لأعمال الكهرباء السكنية في حي ${name} بجدة، يمكن شرح المشكلة أو المشروع المطلوب مباشرة. هذا يشمل الأعمال المرتبطة بالنقاط والتمديدات والإنارة والتشطيب والإصلاح بحسب حالة العقار.`,
  },
  {
    heading:
      'احتياجات الكهرباء للمنازل في حي {name}',
    paragraph: (name) =>
      `قد تختلف احتياجات المنزل داخل حي ${name} من نقطة إلى أخرى؛ فقد يكون العمل جزءًا من تأسيس جديد أو تعديلًا على منزل قائم أو معالجة مشكلة ظهرت أثناء الاستخدام. تحديد الاحتياج يساعد على اختيار الخدمة المناسبة.`,
  },
  {
    heading:
      'طلب خدمة كهربائية للمنزل في حي {name}',
    paragraph: (name) =>
      `يمكن لسكان حي ${name} في جدة التواصل مع نور جدة للكهرباء عند وجود عمل كهربائي منزلي. الأفضل عند التواصل توضيح نوع العمل ومكانه ومرحلة المنزل حتى يكون نطاق الطلب واضحًا.`,
  },
  {
    heading:
      'أعمال تأسيس وتمديد وتشطيب الكهرباء في {name}',
    paragraph: (name) =>
      `تشمل خدمة الكهرباء المنزلية في حي ${name} الأعمال التي يحتاجها المنزل بحسب مرحلته، من تجهيز النقاط والتمديدات إلى التشطيب والإنارة، إضافة إلى التعامل مع الأعطال أو التعديلات داخل المنازل القائمة.`,
  },
  {
    heading:
      'كهربائي منازل داخل حي {name}',
    paragraph: (name) =>
      `إذا كان منزلك في حي ${name} بجدة يحتاج إلى عمل كهربائي، يمكنك التواصل وشرح المطلوب بدل الاعتماد على وصف عام. طبيعة الخدمة تختلف بين منزل جديد ومنزل قائم وبين أعمال الإنارة والتشطيب والإصلاح.`,
  },
  {
    heading:
      'خدمة الكهرباء المنزلية لسكان حي {name}',
    paragraph: (name) =>
      `نور جدة للكهرباء يوفر وسيلة تواصل مباشرة لسكان حي ${name} ضمن نطاق الخدمة في جدة. يمكن الاستفسار عن الأعمال الكهربائية المنزلية المختلفة وتوضيح التفاصيل قبل تحديد نطاق التنفيذ.`,
  },
]

function getVariantIndex(index = 0) {
  return (
    (index * 5 + 2) %
    CONTENT_VARIANTS.length
  )
}

function NeighborhoodPage() {
  const { slug = '' } = useParams()

  const neighborhood =
    getNeighborhoodBySlug(slug)

  if (!neighborhood) {
    return (
      <main>
        <section className="page-hero">
          <div className="container">
            <span className="eyebrow">
              نور جدة للكهرباء
            </span>

            <h1>
              الصفحة غير موجودة
            </h1>

            <p>
              لم نتمكن من العثور على صفحة الحي المطلوبة.
            </p>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <Link
              className="button button-primary"
              to="/neighborhoods"
              reloadDocument
            >
              عرض أحياء جدة
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const variant =
    CONTENT_VARIANTS[
      getVariantIndex(
        neighborhood.profileIndex,
      )
    ]

  const relatedNeighborhoods =
    getRelatedNeighborhoods(
      neighborhood.slug,
      6,
    )

  const faqs =
    getNeighborhoodFaqs(
      neighborhood,
      4,
    )

  const focusText =
    neighborhood.focus ||
    'الخدمة الكهربائية المنزلية'

  const breadcrumbSchema =
    createBreadcrumbSchema({
      items: [
        {
          name: 'الرئيسية',
          path: '/',
        },
        {
          name: 'أحياء جدة',
          path: '/neighborhoods',
        },
        {
          name: `حي ${neighborhood.name}`,
          path:
            `/neighborhoods/${neighborhood.slug}`,
        },
      ],
    })

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html:
            JSON.stringify(
              breadcrumbSchema,
            ),
        }}
      />

      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">
            كهربائي منازل في جدة
          </span>

          <h1>
            كهربائي في حي {neighborhood.name} بجدة
          </h1>

          <p>
            {neighborhood.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container service-detail">
          <h2>
            {variant.heading.replace(
              '{name}',
              neighborhood.name,
            )}
          </h2>

          <p>
            {variant.paragraph(
              neighborhood.name,
            )}
          </p>

          <p>
            {neighborhood.secondParagraph}
          </p>

          <div className="detail-cta">
            <h2>
              {focusText} في حي {neighborhood.name}
            </h2>

            <p>
              {neighborhood.tipText}
            </p>

            <div className="cta-actions">
              <a
                className="button button-primary"
                href={`tel:${BUSINESS_PHONE}`}
                aria-label={`الاتصال بـ${BUSINESS_NAME} على الرقم ${BUSINESS_PHONE}`}
              >
                اتصل الآن
              </a>

              <a
                className="button button-secondary"
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`التواصل مع ${BUSINESS_NAME} عبر واتساب`}
              >
                واتساب
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container service-detail">
          <div className="section-heading">
            <span className="eyebrow">
              حسب حالة المنزل
            </span>

            <h2>
              {neighborhood.scenarioHeading}
            </h2>
          </div>

          <p>
            {neighborhood.scenarioText}
          </p>

          <h2>
            ما الذي يحدد نوع الخدمة؟
          </h2>

          <p>
            {neighborhood.needText}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              الخدمات الكهربائية
            </span>

            <h2>
              خدمات الكهرباء المنزلية المتاحة
            </h2>

            <p>
              اختر نوع العمل الأقرب إلى احتياج منزلك
              في حي {neighborhood.name}.
            </p>
          </div>

          <div className="services-grid services-grid--large">
            {SERVICE_LINKS.map(
              (service) => (
                <Link
                  className="service-card"
                  key={service.path}
                  to={service.path}
                  reloadDocument
                  aria-label={`${service.title} في جدة`}
                >
                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.description}
                  </p>

                  <span
                    className="text-link"
                    aria-hidden="true"
                  >
                    عرض {service.title}

                    <span>
                      ←
                    </span>
                  </span>
                </Link>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft">
        <div className="container service-detail">
          <h2>
            قبل طلب كهربائي في حي {neighborhood.name}
          </h2>

          <p>
            {neighborhood.tipText}
          </p>

          <h2>
            كيف تبدأ طلب الخدمة؟
          </h2>

          <p>
            اذكر اسم الحي ونوع العمل أو المشكلة
            ومكانها قدر الإمكان. إذا كان الطلب متعلقًا
            بتأسيس أو تمديد أو تشطيب أو إنارة، وضح
            المرحلة التي وصل إليها المنزل، أما في حالة
            العطل فاذكر النقطة أو الجزء المتأثر والأعراض
            التي تظهر أثناء الاستخدام.
          </p>
        </div>
      </section>

      {relatedNeighborhoods.length > 0 && (
        <section className="section">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                نطاق الخدمة
              </span>

              <h2>
                أحياء أخرى نخدمها في جدة
              </h2>

              <p>
                تعرف على صفحات أخرى لخدمات الكهرباء
                المنزلية داخل أحياء جدة.
              </p>
            </div>

            <div className="services-grid">
              {relatedNeighborhoods.map(
                (related) => (
                  <Link
                    className="service-card"
                    key={related.slug}
                    to={`/neighborhoods/${related.slug}`}
                    reloadDocument
                    aria-label={`كهربائي في حي ${related.name} بجدة`}
                  >
                    <h3>
                      كهربائي في حي {related.name}
                    </h3>

                    <p>
                      خدمات كهربائية منزلية
                      داخل جدة.
                    </p>

                    <span
                      className="text-link"
                      aria-hidden="true"
                    >
                      كهربائي في حي {related.name}

                      <span>
                        ←
                      </span>
                    </span>
                  </Link>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      <section
        className="section section--soft"
        aria-labelledby="neighborhood-faq-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              أسئلة شائعة
            </span>

            <h2 id="neighborhood-faq-heading">
              أسئلة عن كهربائي حي {neighborhood.name}
            </h2>
          </div>

          <div className="faq-list">
            {faqs.map(
              (faq) => (
                <details
                  className="faq-item"
                  key={faq.question}
                >
                  <summary>
                    {faq.question}
                  </summary>

                  <p>
                    {faq.answer}
                  </p>
                </details>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container simple-cta">
          <div>
            <h2>
              تحتاج كهربائي في حي {neighborhood.name}؟
            </h2>

            <p>
              تواصل مباشرة مع نور جدة للكهرباء
              واشرح نوع العمل أو العطل المطلوب.
            </p>
          </div>

          <div className="cta-actions">
            <a
              className="button button-primary"
              href={`tel:${BUSINESS_PHONE}`}
              aria-label={`الاتصال بـ${BUSINESS_NAME} على الرقم ${BUSINESS_PHONE}`}
            >
              اتصل الآن
            </a>

            <a
              className="button button-secondary"
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`التواصل مع ${BUSINESS_NAME} عبر واتساب`}
            >
              واتساب
            </a>

            <Link
              className="text-link"
              to="/neighborhoods"
              reloadDocument
            >
              جميع أحياء جدة
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export function meta({ params }) {
  const neighborhood =
    getNeighborhoodBySlug(
      params?.slug || '',
    )

  if (!neighborhood) {
    return createPageMeta({
      title:
        'الحي غير موجود | نور جدة للكهرباء',
      description:
        'صفحة الحي المطلوبة غير متاحة في موقع نور جدة للكهرباء.',
      path:
        `/neighborhoods/${params?.slug || ''}`,
      indexable: false,
    })
  }

  return createPageMeta({
    title:
      neighborhood.title,
    description:
      neighborhood.description,
    path:
      `/neighborhoods/${neighborhood.slug}`,
  })
}

export default NeighborhoodPage