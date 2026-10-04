/* ============================================================
   SAFR APP — EMBASSIES-DATA.JS
   بيانات السفارات والقنصليات:
   (1) السفارات المصرية في الخارج
   (2) السفارات الأجنبية في مصر
   ------------------------------------------------------------
   المصادر الأساسية:
   • وزارة الخارجية المصرية — دليل بعثات مصر الدبلوماسية
     والقنصلية في الخارج
     https://www.mfa.gov.eg/ar/AboutMinistry/EgyptianMissionsAbroad
   • المواقع الرسمية للسفارات الأجنبية في مصر:
     eg.usembassy.gov — gov.uk — kairo.diplo.de — eg.ambafrance.org
     ambilcairo.esteri.it — exteriores.gob.es — mofa.gov.ae
     travel.gc.ca (كندا) — mofa.gov.iq/cairo
   • OpenStreetMap (Nominatim) — بيانات مفتوحة (ODbL) للعنوان التفصيلي
     والإحداثيات لبعض البعثات. أي بند جاي من هنا بيتسجّل verified: false
     والسبب مكتوب في notes.
   • ويكيبيديا (قائمة البعثات الدبلوماسية في مصر / بعثات مصر في الخارج)
     للمواقف اللي مفيش لها مصدر رسمي متاح — وبتتسجّل verified: false

   قواعد ثابتة في الملف ده:
   • verified: true  = البيانات متأكد منها من مصدر رسمي.
   • verified: false = فيه بند محتاج تأكيد (السبب مكتوب في notes).
   • أي بند مش معروف = '' فاضية — مفيش أي اختراع للبيانات.
   • الخدمات المدكورة = الخدمات القياسية المعلنة لرعاية المصريين
     في الخارج، وبتختلف من بعثة للتانية.
   ============================================================ */

/* الخدمات القنصلية القياسية للسفارات المصرية في الخارج */
const EGY_SERVICES = [
  'تجديد واستخراج جواز السفر',
  'تصديق المستندات والتوكيلات',
  'تسجيل المواليد والوفيات',
  'توثيق عقود الزواج والطلاق',
  'استخراج بطاقة الرقم القومي',
  'خدمات التجنيد والموقف التجنيدي'
];

/* خدمات السفارات الأجنبية في مصر (قائمة عامة) */
const FGN_SERVICES = [
  'تأشيرات السياحة',
  'تأشيرات العمل',
  'تأشيرات الدراسة',
  'خدمات مواطني الدولة المقيمين في مصر',
  'التصديقات والمعاملات القنصلية'
];

const embassiesData = {

  /* ============================================================
     (1) السفارات المصرية في الخارج
     ============================================================ */
  egyptianAbroad: {

    'sa': {
      country: 'السعودية',
      countryCode: 'sa',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في الرياض',
        city: 'الرياض',
        address: 'شارع عبد الله بن حذيفة، الرياض',
        phone: '(+9661) 4831469',
        fax: '',
        email: 'embassy.riyadh@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [24.6723581, 46.6227511],
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: '[يحتاج تأكيد: المصدر الرسمي كتب «(+9661) 4831469 – 483130» والرقم التاني ناقص، أكّده قبل الاتصال]. الإحداثيات من OpenStreetMap (مبنى السفارة – حي السفارات، الدور السابع).'
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في الرياض',
          city: 'الرياض',
          address: '٦٥١١ شارع عبد الله السهمي، حي السفارات',
          phone: '+966 11 483 1305',
          email: 'consulate.riyadh@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        },
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في جدة',
          city: 'جدة',
          address: '٢ شارع محمد إقبال، شمال غرب كوبري المربع – طريق المدينة – حي الروضة، جدة',
          phone: '',
          email: 'consulate.jeddah@mfa.gov.eg',
          website: '',
          verified: false,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: '[يحتاج تأكيد: المصدر الرسمي كتب رقم غير منطقي (12 رقم) — راجع الرقم الرسمي].'
        }
      ],
      services: EGY_SERVICES
    },

    'ae': {
      country: 'الإمارات',
      countryCode: 'ae',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في أبو ظبي',
        city: 'أبو ظبي',
        address: 'شارع الشيخ راشد بن سعيد آل مكتوم، أبو ظبي',
        phone: '+971 2 813 7000',
        fax: '',
        email: 'embassy.abudhabi@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [24.4254364, 54.4368573],
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: 'العنوان التفصيلي والإحداثيات من OpenStreetMap: شارع عوشة بنت الحسم الرميثي – حي السفارات – أبو ظبي.'
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في دبي',
          city: 'دبي',
          address: '',
          phone: '',
          email: 'consulate.dubai@mfa.gov.eg',
          website: '',
          verified: false,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: '[يحتاج تأكيد: المصدر الرسمي ذكر الإيميل فقط بدون عنوان أو هاتف].'
        }
      ],
      services: EGY_SERVICES
    },

    'kw': {
      country: 'الكويت',
      countryCode: 'kw',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في الكويت',
        city: 'الكويت',
        address: 'محافظة حولي – منطقة الصديق – قطعة ٧ – شارع ٧٠٢ – فيلا ١٠٠',
        phone: '+965 2521 2610',
        fax: '',
        email: 'embassy.kuwait@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: ''
      },
      consulates: [
        {
          name: 'قنصلية جمهورية مصر العربية في الكويت',
          city: 'الكويت',
          address: 'محافظة حولي – منطقة السلام – قطعة ٥ – شارع ٤٠٣ – فيلا ٢١',
          phone: '+965 2523 4491',
          email: 'consulate.kuwait@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },

    'qa': {
      country: 'قطر',
      countryCode: 'qa',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في الدوحة',
        city: 'الدوحة',
        address: 'الدفنة – عنيزة، المنطقة الدبلوماسية، الدوحة',
        phone: '+974 4483 2424',
        fax: '',
        email: 'embassy.doha@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: ''
      },
      consulates: [],
      services: EGY_SERVICES
    },

    'jo': {
      country: 'الأردن',
      countryCode: 'jo',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في عمّان',
        city: 'عمّان',
        address: 'عبدون – شارع محمد علي بدير – مبنى رقم 7 – ص.ب 35178، عمّان 11180',
        phone: '009626 5605175',
        fax: '',
        email: 'embassy.amman@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [31.9446005, 35.9009350],
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: 'أرقام إضافية من نفس المصدر الرسمي: 5605176 / 5605202 / 5605203. الإحداثيات من OpenStreetMap (شارع بلودان – منطقة زهران – عمّان).'
      },
      consulates: [
        {
          name: 'قنصلية جمهورية مصر العربية في العقبة',
          city: 'العقبة',
          address: 'شارع لبيد بن رابيه، مقابل نقابة المهندسين الأردنيين، الحي الأخضر، العقبة',
          phone: '+962 3 201 6171',
          email: 'consulate.aqaba@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },

    /* ---------- المرحلة 1: الخليج والعربي (جديد) ---------- */

    'bh': {
      country: 'البحرين',
      countryCode: 'bh',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في المنامة',
        city: 'المنامة',
        address: 'منطقة بوعشيرة، المنامة',
        phone: '',
        fax: '',
        email: '',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [26.2081885, 50.5829942],
        verified: false,
        source: 'OpenStreetMap (Nominatim) — مبنى السفارة (Embassy of the Arab Republic of Egypt)',
        notes: '[يحتاج تأكيد: الهاتف والإيميل وساعات العمل — دليل بعثات مصر على موقع وزارة الخارجية بيتحمّل بالجافاسكربت فقط، وكان غير متاح للمراجعة الآلية]. العنوان ودرجة الدقة من OpenStreetMap (مستوى الحي).'
      },
      consulates: [],
      services: EGY_SERVICES
    },

    'om': {
      country: 'عُمان',
      countryCode: 'om',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في مسقط',
        city: 'مسقط',
        address: 'شارع جامعة الدول العربية – حي السفارات – بوشر، مسقط 118',
        phone: '',
        fax: '',
        email: '',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [23.6055616, 58.4324293],
        verified: false,
        source: 'OpenStreetMap (Nominatim) — مبنى السفارة (Embassy of the Arab Republic of Egypt)',
        notes: '[يحتاج تأكيد: الهاتف والإيميل وساعات العمل — دليل وزارة الخارجية المصرية غير متاح للمراجعة الآلية].'
      },
      consulates: [],
      services: EGY_SERVICES
    },

    'lb': {
      country: 'لبنان',
      countryCode: 'lb',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في بيروت',
        city: 'بيروت',
        address: 'شارع زاهية سلمان – مار إلياس – المصيطبة، بيروت',
        phone: '',
        fax: '',
        email: '',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [33.8714430, 35.4939117],
        verified: false,
        source: 'OpenStreetMap (Nominatim) — مبنى السفارة (Egyptian Embassy)',
        notes: '[يحتاج تأكيد: الهاتف والإيميل وساعات العمل]. البعثة ليها قسم قنصلي جوّه مبنى السفارة في بيروت.'
      },
      consulates: [],
      services: EGY_SERVICES
    },

    'iq': {
      country: 'العراق',
      countryCode: 'iq',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في بغداد',
        city: 'بغداد',
        address: 'شارع المسعودي – محلة ٢٢٦ – كرادة مريم (الكرادة)، بغداد',
        phone: '',
        fax: '',
        email: '',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [33.3113809, 44.3962830],
        verified: false,
        source: 'OpenStreetMap (Nominatim) — مبنى السفارة (Embassy of Egypt)',
        notes: '[يحتاج تأكيد: الهاتف والإيميل وساعات العمل].'
      },
      consulates: [
        {
          name: 'قنصلية جمهورية مصر العربية في أربيل',
          city: 'أربيل',
          address: 'منطقة وزيران ٢١٣، أربيل، إقليم كردستان',
          phone: '+964 66 260 3443',
          email: '',
          website: '',
          verified: false,
          source: 'OpenStreetMap (Nominatim) — Consulate of Egypt (الهاتف من نفس المصدر)',
          notes: '[يحتاج تأكيد: الهاتف وساعات العمل]. صفحة البعثة على موقع الخارجية المصرية (رابط من OpenStreetMap — تأكد إنها شغالة قبل النشر): https://www.mfa.gov.eg/arabic/embassies/egyptian_consulate_iraq/contactus/pages/default.aspx'
        }
      ],
      services: EGY_SERVICES
    },

    'sy': {
      country: 'سوريا',
      countryCode: 'sy',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في دمشق',
        city: 'دمشق',
        address: '17 April Street (شارع ١٧ نيسان) – حي الربوة – منطقة المزة، دمشق',
        phone: '',
        fax: '',
        email: '',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: [33.5041034, 36.2796033],
        verified: false,
        source: 'OpenStreetMap (Nominatim) — مبنى السفارة (Embassy of Egypt)',
        notes: '[يحتاج تأكيد: الهاتف وساعات العمل ومواعيد العمل الرسمية الحالية].'
      },
      consulates: [],
      services: EGY_SERVICES
    },

    'gb': {
      country: 'المملكة المتحدة',
      countryCode: 'gb',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في لندن',
        city: 'لندن',
        address: '26 South St, Mayfair, London W1K 1DW, UK',
        phone: '+44 20 7499 3304',
        fax: '',
        email: 'embassy.london@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: ''
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في لندن',
          city: 'لندن',
          address: '2 Lowndes Street, London, UK',
          phone: '+44 20 7235 9777',
          email: 'consulate.london@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },

    'de': {
      country: 'ألمانيا',
      countryCode: 'de',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في برلين',
        city: 'برلين',
        address: 'Stauffenbergstraße 6/7, 10785 Berlin, Germany',
        phone: '030 47754713',
        fax: '',
        email: 'embassy.berlin@mfa.gov.eg',
        website: 'https://www.egyptian-embassy.de/',
        workingHours: 'الاتنين – الجمعة، 9:30 ص – 12:00 م (القسم القنصلي، بموعد مسبق)',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية + الموقع الرسمي للسفارة (egyptian-embassy.de)',
        notes: 'أرقام إضافية: 030/47754750 – 030/47754755 – 030/47754725. رقم الطوارئ: +49 176 81294512.'
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في فرانكفورت',
          city: 'فرانكفورت',
          address: 'Eysseneckstr. 34, Frankfurt, Germany',
          phone: '+49 69 9551340',
          email: 'Consulate.Frankfurt@mfa.gov.eg',
          website: 'https://egyptconsulate-frankfurt.de/',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        },
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في هامبورج',
          city: 'هامبورج',
          address: 'Mittelweg 183, Hamburg-Mitte, Germany',
          phone: '+49 40 41332626',
          email: 'Consulate.Hamburg@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },

    'fr': {
      country: 'فرنسا',
      countryCode: 'fr',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في باريس',
        city: 'باريس',
        address: "56 Avenue d'Iéna, 75116 Paris, France",
        phone: '+33 1 53 67 88 30',
        fax: '',
        email: 'embassy.paris@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: ''
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في باريس',
          city: 'باريس (Neuilly-sur-Seine)',
          address: '53 Bd Bineau, Neuilly-sur-Seine, France',
          phone: '+33 1 55 21 43 62',
          email: 'consulate.paris@gmail.com',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        },
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في مارسيليا',
          city: 'مارسيليا',
          address: "14 rue Dumont d'Urville, Marseille, France",
          phone: '+33 6 03 97 74 04',
          email: 'consulate.marseille@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },

    'us': {
      country: 'الولايات المتحدة',
      countryCode: 'us',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في واشنطن',
        city: 'واشنطن',
        address: '3521 International Court NW, Washington, DC 20008, USA',
        phone: '+1 202 895 5400',
        fax: '202 244 4319',
        email: 'embassy.washington@mfa.gov.eg',
        website: 'https://www.egyptembassy.net/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية + الموقع الرسمي للسفارة (egyptembassy.net)',
        notes: 'القسم القنصلي: 202 966 6342 – consulate@egyptembassy.net.'
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في نيويورك',
          city: 'نيويورك',
          address: '866 United Nations Plaza #586, New York, NY 10017, USA',
          phone: '+1 212 759 7120',
          email: 'consulate.newyork@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        },
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في شيكاغو',
          city: 'شيكاغو',
          address: '180 N Michigan Ave, Suite #1150, Chicago, IL, USA',
          phone: '+1 312 332 7210',
          email: 'consulate.chicago@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        },
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في لوس أنجلوس',
          city: 'لوس أنجلوس',
          address: '6300 Wilshire Blvd, Suite 1890, Los Angeles, CA, USA',
          phone: '+1 323 933 9700',
          email: 'consulate.losangles@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    },


    'ca': {
      country: 'كندا',
      countryCode: 'ca',
      embassy: {
        name: 'سفارة جمهورية مصر العربية في أوتاوا',
        city: 'أوتاوا',
        address: '454 Laurier Avenue East, Ottawa, ON, Canada',
        phone: '+1 613 234 4931',
        fax: '',
        email: 'Embassy.ottawa@mfa.gov.eg',
        website: '',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
        notes: ''
      },
      consulates: [
        {
          name: 'القنصلية العامة لجمهورية مصر العربية في مونتريال',
          city: 'مونتريال',
          address: '1800 avenue McGill College, Suite 900, Montreal, QC H3A 3J6, Canada',
          phone: '+1 514 866 8455',
          email: 'Consulate.montreal@mfa.gov.eg',
          website: '',
          verified: true,
          source: 'وزارة الخارجية المصرية — دليل بعثات مصر في الخارج',
          notes: ''
        }
      ],
      services: EGY_SERVICES
    }

  },

  /* ============================================================
     (2) السفارات الأجنبية في مصر
     ============================================================ */
  foreignInEgypt: {

    'us': {
      country: 'الولايات المتحدة',
      countryCode: 'us',
      embassy: {
        name: 'سفارة الولايات المتحدة الأمريكية في القاهرة',
        city: 'القاهرة',
        address: '5 شارع توفيق دياب (شارع البرازيل سابقًا)، جاردن سيتي، القاهرة',
        phone: '+20 2 2797 3300',
        fax: '+20 2 2797 3200',
        email: '',
        website: 'https://eg.usembassy.gov/',
        workingHours: '',
        ambassador: '',
        coordinates: [30.0405, 31.2325],
        verified: true,
        source: 'الموقع الرسمي للسفارة (eg.usembassy.gov/contact)',
        notes: 'رقم الطوارئ للمواطنين الأمريكيين (24 ساعة): +20 2 2797 3300. [يحتاج تأكيد: أيام وساعات العمل الرسمية].'
      },
      consulates: [
        {
          name: 'القنصلية العامة الأمريكية في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://eg.usembassy.gov/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من صفحة القنصلية على الموقع الرسمي].'
        }
      ],
      services: FGN_SERVICES
    },

    'gb': {
      country: 'المملكة المتحدة',
      countryCode: 'gb',
      embassy: {
        name: 'السفارة البريطانية في القاهرة',
        city: 'القاهرة',
        address: '7 شارع أحمد راغب، جاردن سيتي، القاهرة',
        phone: '',
        fax: '',
        email: '',
        website: 'https://www.gov.uk/world/organisations/british-embassy-cairo',
        workingHours: 'الأحد – الأربعاء، 8:00 ص – 3:30 م',
        ambassador: 'Mark Bryson-Richardson MBE',
        coordinates: null,
        verified: true,
        source: 'الموقع الرسمي (gov.uk)',
        notes: 'الدخول بموعد مسبق فقط. [يحتاج تأكيد: gov.uk بيطلب التواصل عبر نموذج رسمي بدل رقم هاتف مباشر].'
      },
      consulates: [
        {
          name: 'القنصلية البريطانية العامة في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://www.gov.uk/world/organisations/british-consulate-general-alexandria',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من صفحة القنصلية على gov.uk].'
        }
      ],
      services: FGN_SERVICES
    },

    'de': {
      country: 'ألمانيا',
      countryCode: 'de',
      embassy: {
        name: 'سفارة ألمانيا في القاهرة',
        city: 'القاهرة',
        address: '2 شارع برلين (متفرع من شارع حسن صبري)، الزمالك، القاهرة 11211',
        phone: '(+20) 2 2728 2000',
        fax: '(+20) 2 2728 2159',
        email: '',
        website: 'https://kairo.diplo.de/',
        workingHours: 'الأحد – الأربعاء، 8:00 ص – 4:00 م | الخميس، 8:30 ص – 1:30 م',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'الموقع الرسمي (kairo.diplo.de)',
        notes: 'الرقم المعلن للاستفسارات العامة فقط ومش لاستفسارات التأشيرات.'
      },
      consulates: [
        {
          name: 'القنصلية الألمانية العامة في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://kairo.diplo.de/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الموقع الرسمي].'
        }
      ],
      services: FGN_SERVICES
    },

    'fr': {
      country: 'فرنسا',
      countryCode: 'fr',
      embassy: {
        name: 'سفارة فرنسا في مصر',
        city: 'القاهرة',
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://eg.ambafrance.org/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: false,
        source: 'الموقع الرسمي (eg.ambafrance.org) — الصفحة بتتحمّل بالجافاسكربت فمقدرناش نستخرج العنوان منها',
        notes: '[يحتاج تأكيد: العنوان والهاتف ← من صفحة «الاتصال» الرسمية أو القنصلية العامة بالقاهرة].'
      },
      consulates: [
        {
          name: 'القنصلية العامة لفرنسا في القاهرة',
          city: 'القاهرة',
          address: '',
          phone: '',
          email: '',
          website: 'https://eg.ambafrance.org/consulat-general-de-france-au-caire',
          verified: false,
          source: 'الموقع الرسمي (eg.ambafrance.org)',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الصفحة الرسمية].'
        },
        {
          name: 'القنصلية العامة لفرنسا في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://eg.ambafrance.org/consulat-general-de-france-alexandrie',
          verified: false,
          source: 'الموقع الرسمي (eg.ambafrance.org)',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الصفحة الرسمية].'
        }
      ],
      services: FGN_SERVICES
    },

    'sa': {
      country: 'السعودية',
      countryCode: 'sa',
      embassy: {
        name: 'سفارة المملكة العربية السعودية في القاهرة',
        city: 'القاهرة / الجيزة',
        address: 'شارع اليمن، الجيزة، أمام مديرية أمن الجيزة',
        phone: '',
        fax: '',
        email: '',
        website: 'https://www.mofa.gov.sa/',
        workingHours: '',
        ambassador: 'صالح بن عيد الحصيني',
        coordinates: null,
        verified: false,
        source: 'ويكيبيديا العربية (سفارة السعودية في مصر) — الموقع الرسمي لوزارة الخارجية السعودية غير متاح وقت التحقق',
        notes: '[يحتاج تأكيد: الهاتف وساعات العمل، واسم السفير ممكن يكون اتغيّر — راجع mofa.gov.sa].'
      },
      consulates: [
        {
          name: 'القنصلية السعودية في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://www.mofa.gov.sa/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من وزارة الخارجية السعودية].'
        }
      ],
      services: FGN_SERVICES
    },

    'ae': {
      country: 'الإمارات',
      countryCode: 'ae',
      embassy: {
        name: 'سفارة دولة الإمارات العربية المتحدة في القاهرة',
        city: 'القاهرة',
        address: '16 شارع حسن أفلاطون (أمام شارع الثورة)، مصر الجديدة، القاهرة',
        phone: '0020224172390',
        fax: '',
        email: 'cairoemb@mofa.gov.ae',
        website: 'https://www.mofa.gov.ae/en/missions/cairo',
        workingHours: 'الأحد – الخميس، 8:00 ص – 3:00 م (العطلة: الجمعة والسبت)',
        ambassador: 'حمد عبيد الزعابي',
        coordinates: null,
        verified: true,
        source: 'الموقع الرسمي لوزارة الخارجية الإماراتية (mofa.gov.ae/en/missions/cairo)',
        notes: 'أرقام إضافية: 0020224172391 – 0020224172392 – 0020224172394. رقم الطوارئ: 0097180024.'
      },
      consulates: [
        {
          name: 'القنصلية الإماراتية في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://www.mofa.gov.ae/en/missions/cairo',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الوزارة أو السفارة].'
        }
      ],
      services: FGN_SERVICES
    },

    'ca': {
      country: 'كندا',
      countryCode: 'ca',
      embassy: {
        name: 'سفارة كندا في القاهرة',
        city: 'القاهرة',
        address: 'أبراج نايل سيتي – 2005 (A) كورنيش النيل، البرج الجنوبي، الدور 18، القاهرة 11221',
        phone: '+20 2 2461 2200',
        fax: '+20 2 2461 2201',
        email: 'cairo.consular@international.gc.ca',
        website: 'https://www.canadainternational.gc.ca/egypt-egypte/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'صفحة مصر على travel.gc.ca (حكومة كندا)',
        notes: 'العنوان البريدي: ص.ب 150 الجزيرة، الزمالك، القاهرة 11568.'
      },
      consulates: [
        {
          name: 'القنصلية الكندية في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://www.canadainternational.gc.ca/egypt-egypte/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الموقع الرسمي].'
        }
      ],
      services: FGN_SERVICES
    },

    'it': {
      country: 'إيطاليا',
      countryCode: 'it',
      embassy: {
        name: 'سفارة إيطاليا في القاهرة',
        city: 'القاهرة',
        address: '15 شارع عبد الرحمن فهمي، جاردن سيتي، القاهرة',
        phone: '+20 2 2794 3194',
        fax: '+20 (0) 2 2461 9359',
        email: 'ambasciata.cairo@esteri.it',
        website: 'https://ambilcairo.esteri.it/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'الموقع الرسمي للسفارة (ambilcairo.esteri.it)',
        notes: 'القسم القنصلي: +20 2 2461 9680 / 2461 9681. رقم الطوارئ: +20 100 669 0079.'
      },
      consulates: [
        {
          name: 'القنصلية الإيطالية العامة في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://ambilcairo.esteri.it/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من الموقع الرسمي].'
        }
      ],
      services: FGN_SERVICES
    },

    'es': {
      country: 'إسبانيا',
      countryCode: 'es',
      embassy: {
        name: 'سفارة إسبانيا في القاهرة',
        city: 'القاهرة',
        address: '41 شارع إسماعيل محمد، الزمالك، القاهرة',
        phone: '+20 2 2735 5813',
        fax: '(0020) 2 2735 2132',
        email: 'emb.elcairo@maec.es',
        website: 'https://www.exteriores.gob.es/embajadas/elcairo/es/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: true,
        source: 'الموقع الرسمي للسفارة (exteriores.gob.es/embajadas/elcairo)',
        notes: 'أرقام إضافية: 0227353622 – 0227353603. إيميل قسم التأشيرات: emb.elcairo.vis@maec.es. الطوارئ القنصلية: (0020) 1223183783.'
      },
      consulates: [
        {
          name: 'القنصلية الإسبانية في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://www.exteriores.gob.es/embajadas/elcairo/es/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من وزارة الخارجية الإسبانية].'
        }
      ],
      services: FGN_SERVICES
    },

    'tr': {
      country: 'تركيا',
      countryCode: 'tr',
      embassy: {
        name: 'سفارة تركيا في القاهرة',
        city: 'القاهرة',
        address: '25 شارع الفلكى، باب اللوق، القاهرة',
        phone: '',
        fax: '',
        email: '',
        website: 'https://kahire.be.mfa.gov.tr/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: false,
        source: 'ويكيبيديا العربية (سفارة تركيا في مصر) — موقع السفارة الرسمي غير متاح وقت التحقق',
        notes: '[يحتاج تأكيد: الهاتف وساعات العمل. ويكيبيديا بتذكر كمان عنوان قديم (10 شارع عزيز عثمان، الزمالك) — راجع الموقع الرسمي قبل الزيارة].'
      },
      consulates: [
        {
          name: 'القنصلية التركية العامة في الإسكندرية',
          city: 'الإسكندرية',
          address: '',
          phone: '',
          email: '',
          website: 'https://kahire.be.mfa.gov.tr/',
          verified: false,
          source: '',
          notes: '[يحتاج تأكيد: العنوان والهاتف من وزارة الخارجية التركية].'
        }
      ],
      services: FGN_SERVICES
    },

    /* ---------- المرحلة 1: الخليج والعربي (جديد) ---------- */

    'bh': {
      country: 'البحرين',
      countryCode: 'bh',
      embassy: {
        name: 'سفارة مملكة البحرين في القاهرة',
        city: 'القاهرة',
        address: '١٥ شارع البرازيل – محمد مظهر – الزمالك، القاهرة ١١٥٦٨',
        phone: '',
        fax: '',
        email: '',
        website: 'https://www.mofa.gov.bh/Default.aspx?tabid=4599',
        workingHours: '',
        ambassador: '',
        coordinates: [30.0619408, 31.2235022],
        verified: false,
        source: 'الموقع الرسمي لوزارة الخارجية البحرينية (صفحة سفارة البحرين في القاهرة) + العنوان والإحداثيات من OpenStreetMap',
        notes: '[يحتاج تأكيد: الهاتف وساعات العمل — موقع الخارجية البحرينية بيرجّع خطأ 405 لطلبات الفحص الآلي وقت المراجعة]. العلاقات الدبلوماسية بين البلدين قائمة (سفارة البحرين في القاهرة + سفارة مصر في المنامة).'
      },
      consulates: [],
      services: FGN_SERVICES
    },

    'om': {
      country: 'عُمان',
      countryCode: 'om',
      embassy: {
        name: 'سفارة سلطنة عُمان في القاهرة',
        city: 'القاهرة',
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://www.fm.gov.om/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: false,
        source: 'ويكيبيديا — قائمة البعثات الدبلوماسية في مصر (وجود السفارة) + الموقع الرسمي للخارجية العُمانية',
        notes: '[يحتاج تأكيد: العنوان والهاتف وساعات العمل — موقع الخارجية العُمانية غير متاح للمراجعة الآلية، ومفيش بيانات للسفارة على OpenStreetMap].'
      },
      consulates: [],
      services: FGN_SERVICES
    },

    'lb': {
      country: 'لبنان',
      countryCode: 'lb',
      embassy: {
        name: 'سفارة الجمهورية اللبنانية في القاهرة',
        city: 'القاهرة',
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://mfa.gov.lb/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: false,
        source: 'ويكيبيديا — قائمة البعثات الدبلوماسية في مصر (وجود السفارة + قنصلية عامة في الإسكندرية)',
        notes: '[يحتاج تأكيد: عنوان وهاتف السفارة في القاهرة — موقع الخارجية اللبنانية غير متاح للمراجعة الآلية].'
      },
      consulates: [
        {
          name: 'القنصلية العامة اللبنانية في الإسكندرية',
          city: 'الإسكندرية',
          address: 'المسلة الشرقية – الشاطبي – الإسكندرية ٢١٥١٢ (الشارع: Hussein Hasab Street)',
          phone: '',
          email: '',
          website: '',
          verified: false,
          source: 'OpenStreetMap (Nominatim) — Consulate General of Lebanon (Wikidata: Q111528894)',
          notes: '[يحتاج تأكيد: الهاتف وساعات العمل].'
        }
      ],
      services: FGN_SERVICES
    },

    'iq': {
      country: 'العراق',
      countryCode: 'iq',
      embassy: {
        name: 'سفارة جمهورية العراق في القاهرة',
        city: 'القاهرة',
        address: '٩ شارع محمد مظهر – الزمالك، القاهرة ١١٥٦٨',
        phone: '+20 2 2735 8087',
        fax: '+20 2 2736 5075',
        email: '',
        website: 'https://mofa.gov.iq/cairo/',
        workingHours: 'الأحد – الخميس، 9:00 ص – 3:00 م',
        ambassador: 'قحطان طه خلف',
        coordinates: [30.0647230, 31.2230909],
        verified: false,
        source: 'الموقع الرسمي للسفارة (mofa.gov.iq/cairo) — تأكيد وجود السفارة واسم السفير من أخبار البعثة الرسمية؛ العنوان والهاتف والفاكس وساعات العمل من OpenStreetMap (آخر تحقق مسجّل: 2024-10-21)',
        notes: 'معلومات رسمية: www.mofa.gov.iq/cairo + اسم السفير. [يحتاج تأكيد: رقم الهاتف والفاكس مصدرهم OpenStreetMap مش الموقع الرسمي — راجعهم قبل الاتصال].'
      },
      consulates: [],
      services: FGN_SERVICES
    },

    'sy': {
      country: 'سوريا',
      countryCode: 'sy',
      embassy: {
        name: 'سفارة الجمهورية العربية السورية في القاهرة',
        city: 'القاهرة',
        address: '',
        phone: '',
        fax: '',
        email: '',
        website: 'https://mofaex.gov.sy/',
        workingHours: '',
        ambassador: '',
        coordinates: null,
        verified: false,
        source: 'ويكيبيديا — قائمة البعثات الدبلوماسية في مصر (وجود السفارة) + موقع الخارجية السورية',
        notes: '[يحتاج تأكيد: العنوان والهاتف وساعات العمل — موقع الخارجية السورية غير متاح للمراجعة الآلية، ومفيش بيانات للسفارة على OpenStreetMap].'
      },
      consulates: [],
      services: FGN_SERVICES
    }
  }

};

