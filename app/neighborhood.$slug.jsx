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
      'خدمة كهربائي منازل داخل الحي',
    paragraph: (name) =>
      `إذا كنت تبحث عن كهربائي في حي ${name} بجدة، يمكن التواصل مباشرة مع نور جدة للكهرباء للاستفسار عن أعمال الكهرباء المنزلية التي تحتاجها. الخدمة تشمل أعمال التأسيس والتمديدات والتشطيب والإنارة وإصلاح الأعطال حسب طبيعة العمل.`,
    needHeading:
      'متى تحتاج إلى كهربائي في حي {name}؟',
    needParagraph: (name) =>
      `قد تحتاج إلى كهربائي في حي ${name} عند تجهيز منزل جديد، إضافة نقاط كهرباء، تعديل توزيع الإنارة، تركيب المفاتيح والأفياش، أو التعامل مع عطل كهربائي يحتاج إلى فحص. تحديد نوع العمل مسبقًا يساعد على توضيح احتياجك عند التواصل.`,
  },
  {
    heading:
      'أعمال الكهرباء المنزلية في الحي',
    paragraph: (name) =>
      `يقدم نور جدة للكهرباء خدمة منزلية داخل حي ${name} وجميع مناطق جدة. يمكن طلب الخدمة لأعمال الكهرباء المختلفة، سواء كان الاحتياج متعلقًا بتأسيس منزل أو تمديدات جديدة أو تشطيب كهربائي أو إنارة أو إصلاح عطل قائم.`,
    needHeading:
      'أعمال يمكن طلبها داخل حي {name}',
    needParagraph: (name) =>
      `تختلف أعمال الكهرباء من منزل إلى آخر في حي ${name}. لذلك تبدأ الخدمة بتحديد المطلوب بوضوح، مثل عدد النقاط الكهربائية، أعمال الإنارة، التمديدات، التشطيب أو نوع العطل الموجود، ثم يتم التواصل مباشرة لمناقشة التفاصيل.`,
  },
  {
    heading:
      'كهربائي للمنازل في حي جدة',
    paragraph: (name) =>
      `لأعمال الكهرباء المنزلية في حي ${name}، يمكنك التواصل مع نور جدة للكهرباء مباشرة. الخدمة موجهة للمنازل والشقق وتشمل الأعمال الكهربائية الأساسية التي يحتاجها المنزل من التأسيس وحتى الإصلاح والصيانة.`,
    needHeading:
      'كيف تحدد الخدمة التي يحتاجها منزلك في {name}؟',
    needParagraph: (name) =>
      `إذا كان المنزل في حي ${name} في مرحلة البناء أو التجهيز، فقد يكون الاحتياج متعلقًا بالتأسيس أو التمديدات أو التشطيب. أما في المنزل المستخدم بالفعل فقد يكون الطلب متعلقًا بالإنارة أو إضافة نقطة أو معالجة عطل كهربائي.`,
  },
  {
    heading:
      'خدمات كهربائية منزلية في حي {name}',
    paragraph: (name) =>
      `نور جدة للكهرباء يخدم العملاء داخل حي ${name} ضمن نطاق الخدمة في جدة. يمكنك التواصل لشرح العمل المطلوب، سواء كان مشروعًا كهربائيًا داخل منزل أو شقة أو تعديلًا على تمديدات قائمة أو إصلاح مشكلة كهربائية.`,
    needHeading:
      'قبل طلب كهربائي في حي {name}',
    needParagraph: (name) =>
      `قبل التواصل من داخل حي ${name}، من المفيد تحديد ما إذا كان المطلوب تأسيسًا جديدًا، تمديدات، تشطيبًا، تركيب إنارة، أو إصلاح عطل. هذه المعلومة تساعد على فهم طبيعة الطلب وتوجيه التواصل نحو الخدمة المناسبة.`,
  },
  {
    heading:
      'كهربائي منازل لخدمة سكان حي {name}',
    paragraph: (name) =>
      `إذا كان منزلك داخل حي ${name} في جدة وتحتاج إلى خدمة كهربائية، يمكنك التواصل مع نور جدة للكهرباء مباشرة. يتم استقبال الاستفسارات المتعلقة بأعمال الكهرباء المنزلية المختلفة، مع التركيز على فهم العمل المطلوب قبل البدء.`,
    needHeading:
      'أكثر احتياجات الكهرباء المنزلية شيوعًا',
    needParagraph: (name) =>
      `داخل حي ${name} قد تختلف احتياجات الكهرباء بحسب حالة المنزل. من الأعمال الممكنة تأسيس النقاط، تنفيذ التمديدات، أعمال التشطيب، تجهيز الإنارة أو فحص الأعطال الكهربائية الموجودة.`,
  },
  {
    heading:
      'طلب كهربائي للمنزل في حي {name}',
    paragraph: (name) =>
      `يمكن لسكان حي ${name} بجدة التواصل مباشرة مع نور جدة للكهرباء عند الحاجة إلى أعمال كهربائية منزلية. الخدمة تشمل عدة مراحل من العمل الكهربائي، ويمكن تحديد نوع الخدمة المطلوبة أثناء التواصل.`,
    needHeading:
      'خدمات الكهرباء حسب حالة المنزل في {name}',
    needParagraph: (name) =>
      `إذا كان المنزل في حي ${name} جديدًا، فقد تكون الأولوية لأعمال التأسيس والتمديدات. وإذا كان المنزل مكتملًا فقد تكون الحاجة إلى التشطيب أو الإنارة أو إصلاح الأعطال. اختيار نوع الخدمة المناسب يبدأ بتحديد المشكلة أو العمل المطلوب.`,
  },
  {
    heading:
      'أعمال تأسيس وتمديد وتشطيب الكهرباء في حي {name}',
    paragraph: (name) =>
      `خدمة نور جدة للكهرباء متاحة للعملاء في حي ${name} ضمن مناطق جدة. تشمل الأعمال الكهربائية المنزلية التأسيس والتمديد والتشطيب ونقاط الإنارة وتركيبها، بالإضافة إلى فحص وإصلاح الأعطال الكهربائية.`,
    needHeading:
      'من التأسيس إلى إصلاح الأعطال في {name}',
    needParagraph: (name) =>
      `يمكن أن تتغير الحاجة الكهربائية داخل منزل في حي ${name} مع مراحل استخدامه. يبدأ العمل في المنزل الجديد من التأسيس والتمديدات، ثم التشطيب والإنارة، بينما تحتاج المنازل القائمة أحيانًا إلى إضافة نقاط أو معالجة أعطال.`,
  },
  {
    heading:
      'خدمة كهربائي سكني في حي {name} بجدة',
    paragraph: (name) =>
      `لمن يحتاج إلى كهربائي سكني في حي ${name} بجدة، يوفر نور جدة للكهرباء وسيلة تواصل مباشرة للاستفسار عن الأعمال المنزلية. يمكن شرح نوع العمل أو العطل وتحديد الخدمة الأقرب إلى الاحتياج.`,
    needHeading:
      'ما الذي يمكن طلبه من كهربائي المنزل في {name}؟',
    needParagraph: (name) =>
      `تشمل احتياجات المنزل في حي ${name} أعمالًا مثل تجهيز النقاط الكهربائية، التمديدات، التشطيب، الإنارة، أو التعامل مع الأعطال. نوع الخدمة يعتمد على حالة المنزل وطبيعة العمل المطلوب، لذلك يفضل وصف الاحتياج عند التواصل.`,
  },
]

const FAQ_VARIANTS = [
  [
    {
      question: (name) =>
        `هل نور جدة للكهرباء يخدم حي ${name}؟`,
      answer: (name) =>
        `نعم، نطاق الخدمة يشمل حي ${name} ضمن مناطق جدة. يمكنك التواصل مباشرة للاستفسار عن العمل الكهربائي المطلوب.`,
    },
    {
      question: (name) =>
        `ما الخدمات الكهربائية المتاحة في حي ${name}؟`,
      answer: () =>
        'تشمل الخدمات تأسيس الكهرباء والتمديدات والتشطيب ونقاط وتركيب الإنارة وإصلاح الأعطال الكهربائية المنزلية.',
    },
    {
      question:
        'هل الخدمة للمنازل والشقق؟',
      answer:
        'نعم، الموقع مخصص لخدمات الكهرباء السكنية، ويمكن التواصل لتوضيح نوع العقار والعمل المطلوب.',
    },
    {
      question:
        'كيف أتواصل لطلب الخدمة؟',
      answer:
        'يمكن التواصل مباشرة عبر الاتصال أو واتساب وشرح نوع العمل أو المشكلة الكهربائية.',
    },
  ],
  [
    {
      question: (name) =>
        `هل يمكن طلب كهربائي لمنزل داخل حي ${name}؟`,
      answer: (name) =>
        `يمكن التواصل مع نور جدة للكهرباء لطلب خدمة كهربائية منزلية داخل حي ${name} وتوضيح تفاصيل العمل قبل البدء.`,
    },
    {
      question:
        'هل تشمل الخدمة تأسيس الكهرباء؟',
      answer:
        'نعم، من الخدمات المتاحة تأسيس كهرباء المنازل والتمديدات المرتبطة به.',
    },
    {
      question:
        'هل يمكن تركيب نقاط إنارة جديدة؟',
      answer:
        'نعم، يمكن الاستفسار عن تجهيز نقاط الإنارة وتركيب وحدات الإضاءة حسب احتياج المنزل.',
    },
    {
      question:
        'ماذا أفعل إذا كان لدي عطل كهربائي؟',
      answer:
        'تواصل مباشرة واشرح العطل والأعراض الظاهرة حتى يتم تحديد نوع الخدمة المناسبة للفحص والإصلاح.',
    },
  ],
  [
    {
      question: (name) =>
        `هل تشمل الخدمة سكان حي ${name} في جدة؟`,
      answer: (name) =>
        `نطاق الخدمة داخل جدة يشمل حي ${name}، ويمكن التواصل مباشرة لمعرفة إمكانية تنفيذ العمل المطلوب.`,
    },
    {
      question:
        'ما الفرق بين التأسيس والتشطيب الكهربائي؟',
      answer:
        'التأسيس والتمديدات تكون مرتبطة بتجهيز البنية والنقاط الكهربائية، بينما التشطيب يهتم بالأعمال النهائية مثل المفاتيح والأفياش ونقاط الإنارة.',
    },
    {
      question:
        'هل يمكن طلب إضافة نقطة كهرباء؟',
      answer:
        'يمكن التواصل وشرح مكان النقطة والاستخدام المطلوب لمعرفة نوع العمل الكهربائي المناسب.',
    },
    {
      question:
        'هل التواصل متاح عبر واتساب؟',
      answer:
        'نعم، يمكن التواصل عبر واتساب إلى جانب الاتصال الهاتفي.',
    },
  ],
  [
    {
      question: (name) =>
        `كيف أطلب خدمة كهربائي في حي ${name}؟`,
      answer: () =>
        'ابدأ بالتواصل مباشرة واذكر الحي ونوع العمل المطلوب أو العطل الموجود، ثم وضح التفاصيل التي تساعد على فهم الطلب.',
    },
    {
      question:
        'هل تشمل الخدمة أعمال الإنارة؟',
      answer:
        'نعم، تشمل تجهيز نقاط الإنارة وتركيب وحدات الإضاءة ضمن الخدمات الكهربائية المنزلية.',
    },
    {
      question:
        'هل يمكن تنفيذ أعمال كهربائية في منزل قائم؟',
      answer:
        'نعم، يمكن الاستفسار عن الأعمال المناسبة للمنازل القائمة مثل إضافة النقاط أو الإنارة أو إصلاح الأعطال.',
    },
    {
      question:
        'هل يوجد عنوان لاستقبال العملاء؟',
      answer:
        'الخدمة منزلية وموجهة إلى مناطق جدة، ولا يعتمد الموقع على استقبال العملاء في مقر تجاري.',
    },
  ],
]

function getVariantIndex(slug = '') {
  let total = 0

  for (const character of slug) {
    total += character.codePointAt(0) || 0
  }

  return total % CONTENT_VARIANTS.length
}

function getFaqVariantIndex(slug = '') {
  let total = 0

  for (const character of slug) {
    total += character.codePointAt(0) || 0
  }

  return total % FAQ_VARIANTS.length
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
      getVariantIndex(neighborhood.slug)
    ]

  const faqVariant =
    FAQ_VARIANTS[
      getFaqVariantIndex(neighborhood.slug)
    ]

  const relatedNeighborhoods =
    getRelatedNeighborhoods(
      neighborhood.slug,
      6,
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
          path: `/neighborhoods/${neighborhood.slug}`,
        },
      ],
    })

  const firstParagraph =
    variant.paragraph(neighborhood.name)

  const needHeading =
    variant.needHeading.replace(
      '{name}',
      neighborhood.name,
    )

  const needParagraph =
    variant.needParagraph(neighborhood.name)

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
            {firstParagraph}
          </p>

          <p>
            {neighborhood.secondParagraph}
          </p>

          <div className="detail-cta">
            <h2>
              {focusText} في حي {neighborhood.name}
            </h2>

            <p>
              إذا كان هذا هو نوع العمل الذي تحتاجه،
              تواصل مباشرة لشرح تفاصيل الخدمة واحتياج المنزل.
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
                    عرض تفاصيل الخدمة

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

      <section className="section">
        <div className="container service-detail">
          <h2>
            {needHeading}
          </h2>

          <p>
            {needParagraph}
          </p>

          <h2>
            كيف تبدأ طلب الخدمة في حي {neighborhood.name}؟
          </h2>

          <p>
            اذكر اسم الحي ونوع العمل الذي تحتاجه،
            مثل تأسيس الكهرباء أو التمديدات أو التشطيب
            أو الإنارة أو إصلاح عطل. ويمكنك التواصل
            مباشرة عبر الهاتف أو واتساب لتوضيح التفاصيل.
          </p>
        </div>
      </section>

      {relatedNeighborhoods.length > 0 && (
        <section className="section section--soft">
          <div className="container">
            <div className="section-heading">
              <span className="eyebrow">
                نطاق الخدمة
              </span>

              <h2>
                أحياء أخرى نخدمها في جدة
              </h2>

              <p>
                صفحات أخرى للخدمات الكهربائية المنزلية
                داخل أحياء جدة.
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
                      صفحة الحي

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
        className="section"
        aria-labelledby="neighborhood-faq-heading"
      >
        <div className="container">
          <div className="section-heading">
            <span className="eyebrow">
              أسئلة شائعة
            </span>

            <h2 id="neighborhood-faq-heading">
              أسئلة عن خدمة الكهرباء في حي {neighborhood.name}
            </h2>
          </div>

          <div className="faq-list">
            {faqVariant.map(
              (faq) => (
                <details
                  className="faq-item"
                  key={
                    typeof faq.question ===
                    'function'
                      ? faq.question(
                          neighborhood.name,
                        )
                      : faq.question
                  }
                >
                  <summary>
                    {typeof faq.question ===
                    'function'
                      ? faq.question(
                          neighborhood.name,
                        )
                      : faq.question}
                  </summary>

                  <p>
                    {typeof faq.answer ===
                    'function'
                      ? faq.answer(
                          neighborhood.name,
                        )
                      : faq.answer}
                  </p>
                </details>
              ),
            )}
          </div>
        </div>
      </section>

      <section className="section section--soft">
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
      robots: 'noindex, follow',
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