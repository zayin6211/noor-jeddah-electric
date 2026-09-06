import {
  Link,
  useParams,
} from 'react-router'

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
    title: 'تأسيس الكهرباء',
    path: '/services/electrical-foundation',
    description:
      'تجهيز النقاط ومسارات التمديدات الكهربائية للمنازل الجديدة.',
  },
  {
    title: 'التمديدات الكهربائية',
    path: '/services/electrical-wiring',
    description:
      'تنفيذ وتمديد نقاط الكهرباء والإضافات داخل المنزل.',
  },
  {
    title: 'تشطيب الكهرباء',
    path: '/services/electrical-finishing',
    description:
      'تركيب المفاتيح والأفياش واستكمال الأعمال الكهربائية النهائية.',
  },
  {
    title: 'أعمال الإنارة',
    path: '/services/lighting',
    description:
      'تجهيز وتركيب نقاط ووحدات الإنارة المنزلية.',
  },
  {
    title: 'إصلاح الأعطال',
    path: '/services/electrical-repair',
    description:
      'فحص ومعالجة الأعطال والمشكلات الكهربائية المنزلية.',
  },
]

const CONTENT_VARIANTS = [
  {
    heading:
      'خدمات الكهرباء المنزلية داخل الحي',
    paragraph:
      'يمكن أن تختلف أعمال الكهرباء المطلوبة من منزل إلى آخر بحسب مرحلة العقار وطبيعة الاستخدام. لذلك يبدأ تحديد الخدمة من معرفة ما إذا كان المطلوب تأسيسًا أو تمديدًا أو تشطيبًا أو إنارة أو إصلاح عطل.',
  },
  {
    heading:
      'اختيار الخدمة المناسبة للمنزل',
    paragraph:
      'تحديد طبيعة العمل قبل التواصل يساعد على توضيح الطلب، سواء كان متعلقًا بمنزل جديد أو تعديل داخل منزل قائم أو استكمال أعمال كهربائية لم تكتمل بعد.',
  },
  {
    heading:
      'أعمال كهربائية بحسب حالة العقار',
    paragraph:
      'قد يحتاج المنزل إلى أعمال كهربائية في بداية المشروع أو أثناء التشطيب أو بعد بدء الاستخدام. ولكل مرحلة نطاق مختلف من الأعمال التي يمكن طلبها.',
  },
  {
    heading:
      'عند الحاجة إلى كهربائي منزلي',
    paragraph:
      'وصف المشكلة أو العمل المطلوب ومكانه داخل المنزل يجعل التواصل الأولي أكثر وضوحًا، خصوصًا عند وجود نقطة أو دائرة كهربائية تحتاج إلى فحص أو تعديل.',
  },
  {
    heading:
      'تجهيز وتعديل الكهرباء داخل المنزل',
    paragraph:
      'يمكن أن يرتبط الطلب بتجهيز منزل جديد أو إضافة نقطة كهرباء أو تعديل توزيع قائم أو استكمال أعمال الإنارة والتشطيب، بحسب حالة العقار.',
  },
  {
    heading:
      'خدمة الكهرباء للمنازل والشقق',
    paragraph:
      'الأعمال الكهربائية المنزلية لا تقتصر على الأعطال؛ فقد تشمل أيضًا التأسيس والتمديدات والتشطيب وتجهيز الإنارة وإضافة نقاط جديدة حسب احتياج المكان.',
  },
  {
    heading:
      'قبل بدء العمل الكهربائي',
    paragraph:
      'من المفيد تحديد الغرفة أو النقطة المتأثرة والغرض من العمل عند التواصل، لأن التفاصيل تساعد على فهم نطاق الخدمة المطلوبة بصورة أفضل.',
  },
  {
    heading:
      'احتياجات الكهرباء في المنازل القائمة',
    paragraph:
      'مع استخدام المنزل قد تظهر احتياجات جديدة مثل إضافة نقطة لجهاز أو تعديل مكان مفتاح أو معالجة مشكلة في الإنارة، ويختلف نطاق العمل بحسب الحالة.',
  },
]

function getVariantIndex(index) {
  return (
    (index * 5 + 2) %
    CONTENT_VARIANTS.length
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
    indexable:
      neighborhood.indexable === true,
  })
}

function NeighborhoodPage() {
  const {
    slug = '',
  } = useParams()

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
              الحي غير موجود
            </h1>

            <p>
              الصفحة التي تبحث عنها غير متاحة.
            </p>

            <Link
              className="button button-primary"
              to="/neighborhoods"
              reloadDocument
            >
              عرض جميع الأحياء
            </Link>
          </div>
        </section>
      </main>
    )
  }

  const neighborhoodIndex =
    neighborhood.indexable
      ? 1
      : 0

  const variant =
    CONTENT_VARIANTS[
      getVariantIndex(
        neighborhoodIndex +
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
          name:
            `حي ${neighborhood.name}`,
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
            كهربائي في حي {neighborhood.name}
            بجدة
          </h1>

          <p>
            {neighborhood.intro}
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="detail-content">
            <div className="section-heading">
              <span className="eyebrow">
                خدمات الكهرباء المنزلية
              </span>

              <h2>
                {variant.heading}
              </h2>

              <p>
                {variant.paragraph}
              </p>
            </div>

            <div className="detail-copy">
              <p>
                {neighborhood.secondParagraph}
              </p>

              <p>
                {neighborhood.needText}
              </p>
            </div>

            <div className="detail-cta">
              <h2>
                تحتاج كهربائي في حي{' '}
                {neighborhood.name}؟
              </h2>

              <p>
                اشرح نوع العمل أو العطل ومكانه
                داخل المنزل، وتواصل مباشرة مع
                نور جدة للكهرباء.
              </p>

              <div className="cta-actions">
                <a
                  className="button button-primary"
                  href={`tel:${BUSINESS_PHONE}`}
                >
                  اتصل الآن
                </a>

                <a
                  className="button button-secondary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  واتساب
                </a>
              </div>
            </div>

            <div className="section-heading">
              <span className="eyebrow">
                حسب حالة المنزل
              </span>

              <h2>
                {neighborhood.scenarioHeading}
              </h2>

              <p>
                {neighborhood.scenarioText}
              </p>
            </div>

            <div className="services-grid">
              {SERVICE_LINKS.map(
                (service, index) => (
                  <Link
                    className="service-card"
                    key={service.path}
                    to={service.path}
                    reloadDocument
                  >
                    <div
                      className="service-number"
                      aria-hidden="true"
                    >
                      {String(
                        index + 1,
                      ).padStart(2, '0')}
                    </div>

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
                      معرفة التفاصيل
                      <span>
                        ←
                      </span>
                    </span>
                  </Link>
                ),
              )}
            </div>

            <div className="detail-copy">
              <h2>
                قبل طلب كهربائي في حي{' '}
                {neighborhood.name}
              </h2>

              <p>
                {neighborhood.tipText}
              </p>

              <h2>
                كيف تبدأ طلب الخدمة؟
              </h2>

              <p>
                اذكر الحي، والغرفة أو النقطة
                المتأثرة، ونوع العمل المطلوب
                أو الأعراض التي تظهر عند وجود
                عطل. هذه التفاصيل تساعد على
                توضيح الطلب من البداية.
              </p>
            </div>

            {faqs.length > 0 && (
              <section
                className="faq-section"
                aria-labelledby="neighborhood-faq-title"
              >
                <div className="section-heading">
                  <span className="eyebrow">
                    الأسئلة الشائعة
                  </span>

                  <h2 id="neighborhood-faq-title">
                    أسئلة عن كهربائي حي{' '}
                    {neighborhood.name}
                  </h2>
                </div>

                <div className="faq-list">
                  {faqs.map(
                    (faq) => (
                      <details
                        className="faq-item"
                        key={
                          faq.question
                        }
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
              </section>
            )}

            {relatedNeighborhoods.length >
              0 && (
              <section
                className="related-section"
                aria-labelledby="related-neighborhoods-title"
              >
                <div className="section-heading">
                  <span className="eyebrow">
                    أحياء قريبة ضمن نطاق جدة
                  </span>

                  <h2 id="related-neighborhoods-title">
                    كهربائي في أحياء أخرى
                  </h2>
                </div>

                <div className="services-grid">
                  {relatedNeighborhoods.map(
                    (related) => (
                      <Link
                        className="service-card"
                        key={
                          related.slug
                        }
                        to={`/neighborhoods/${related.slug}`}
                        reloadDocument
                        aria-label={`كهربائي في حي ${related.name} بجدة`}
                      >
                        <h3>
                          كهربائي حي{' '}
                          {
                            related.name
                          }
                        </h3>

                        <p>
                          {
                            related.focus
                          }
                        </p>

                        <span
                          className="text-link"
                          aria-hidden="true"
                        >
                          صفحة الحي
                          <span>
                            ←
                          </span>
                        </span>
                      </Link>
                    ),
                  )}
                </div>
              </section>
            )}

            <div className="detail-cta">
              <h2>
                تواصل مع {BUSINESS_NAME}
              </h2>

              <p>
                لخدمات الكهرباء المنزلية داخل
                جدة، تواصل مباشرة واشرح احتياج
                المنزل.
              </p>

              <div className="cta-actions">
                <a
                  className="button button-primary"
                  href={`tel:${BUSINESS_PHONE}`}
                >
                  اتصال مباشر
                </a>

                <a
                  className="button button-secondary"
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  تواصل عبر واتساب
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default NeighborhoodPage