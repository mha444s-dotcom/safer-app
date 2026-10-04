/* ============================================================
   SAFR APP - VISA-DATA.JS
   بيانات تأشيرة السفر للمصريين حسب الدولة (جواز سفر عادي)
   ------------------------------------------------------------
   التصنيف حسب نوع التأشيرة المطلوب من مواطني مصر:
     visa-free      = بدون فيزا
     e-visa         = فيزا إلكترونية (يمكن التقديم أونلاين)
     on-arrival     = فيزا عند الوصول
     visa-required  = فيزا مطلوبة مسبقًا من السفارة

   المصادر الأساسية (مراجعة 2026):
   • ويكيبيديا — «متطلبات التأشيرة للمواطنين المصريين»
     https://en.wikipedia.org/wiki/Visa_requirements_for_Egyptian_citizens
   • صفحات «سياسة التأشيرات» الرسمية لكل دولة على ويكيبيديا
     (مبنية على Timatic / IATA Travel Centre)
   • المواقع الرسمية للحكومات (evisa.gov.tr, evisa.gov.ge, thaievisa.go.th ...)

   ⚠️ تنبيه: البيانات إرشادية وممكن تتغيّر في أي وقت.
   تأكد دايمًا من السفارة أو الموقع الرسمي قبل السفر.
   حقول السفارات (العنوان/الهاتف) بعضها غير مؤكَّد (verified:false).
   ============================================================ */

/* ============================================================
   ثوابت مشتركة — لتأشيرة شنغن
   ------------------------------------------------------------
   كل دول منطقة شنغن بتطلب نفس المستندات بالظبط، فبدل ما نكرّر
   نفس الـ8 عناصر 40 مرة، هنا مصدر واحد + ملاحظة موحّدة.
   ============================================================ */
const SCHENGEN_REQUIREMENTS = [
  'جواز سفر ساري 3 شهور على الأقل بعد تاريخ المغادرة المخطّط',
  'استمارة طلب تأشيرة شنغن معبّأة وموقّعة',
  'صورتان شخصيتان حديثتان بخلفية بيضاء (مقاس جواز السفر)',
  'تأمين صحي ساري يغطّي 30,000 يورو على الأقل في كل دول شنغن',
  'كشف حساب بنكي لآخر 3 – 6 شهور + إثبات دخل ثابت',
  'حجز فندق/إثبات إقامة + حجز تذاكر طيران ذهاب وعودة',
  'خطاب من جهة العمل (أو سجل تجاري/مستندات العمل الحر) + إجازات معتمدة',
  'تسجيل البيانات الحيوية (بصمة + صورة) في مركز التقديم'
];

const VISA_SCHENGEN_NOTE = 'تأشيرة شنغن موحّدة: بتدخل بيها كل دول منطقة شنغن. مدة الإقامة 90 يوم خلال أي 180 يوم، والرسوم 90 يورو (45 يورو للأطفال 6–12 سنة). التقديم من سفارة/قنصلية الدولة اللي هتقعد فيها أطول مدة «الدولة الأكثر مسؤولية». مصر ليست ضمن قائمة الإعفاء. [يحتاج تأكيد: مركز التقديم والمواعيد بالقاهرة].';

const visaData = {

  /* آخر مراجعة للبيانات */
  lastReviewed: '2026',

  /* ==========================================================
     بيانات الدول (بدون تحقق منفصل لكل حقل تأشيرة)
     ========================================================== */
  countries: {

    /* ==================== تركيا ==================== */
    tr: {
      code: 'tr',
      name: 'تركيا',
      visaType: 'e-visa',
      conditional: true,
      duration: '30 يوم (دخول واحد)',
      cost: '≈ 43$',
      processingTime: '1 – 3 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'وجود تأشيرة أو إقامة سارية من (شنغن / أمريكا / بريطانيا / أيرلندا) — شرط أساسي',
        'حجز طيران مؤكد (Turkish Airlines أو Pegasus، أو AJet / مصر للطيران / Air Cairo)',
        'تذكرة عودة وحجز فندق مؤكد',
        'إثبات مالي ≈ 50$ عن كل يوم',
        'تأمين صحي يغطّي مدة الرحلة'
      ],
      notes: 'تركيا مش ضمن قائمة الإعفاء للمصريين، لكن متاح «فيزا إلكترونية مشروطة»: لازم يكون معاك تأشيرة/إقامة سارية من شنغن أو أمريكا أو بريطانيا أو أيرلندا. لو مش متوفرة، التقديم بيتم من السفارة. الفيزا للسياحة أو الأعمال فقط وممنوع العمل بها.',
      officialLink: 'https://www.evisa.gov.tr/en/',
      embassyInEgypt: {
        address: 'القاهرة – المهندسين، الجيزة',
        phone: '',
        website: 'https://cairo.emb.mfa.gov.tr',
        verified: false
      },
      bestTime: 'أبريل – يونيو، سبتمبر – نوفمبر',
      currency: 'TRY (الليرة التركية)',
      currencyPerUSD: '1$ ≈ 42 TRY (تقديري)',
      language: 'التركية',
      timezone: 'UTC+3',
      emergencyNumber: '112',
      source: 'Wikipedia: Visa policy of Turkey (Conditional e-Visa) + evisa.gov.tr'
    },

    /* ==================== الإمارات ==================== */
    ae: {
      code: 'ae',
      name: 'الإمارات',
      visaType: 'e-visa',
      conditional: false,
      duration: '30 / 60 يوم (حسب نوع الفيزا)',
      cost: '≈ 90 – 120$',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'حجز طيران مؤكد + حجز فندق',
        'التقديم أونلاين عبر خدمة ICP «Smart Service» أو عبر شركة الطيران/الفندق الراعي',
        'صورة شخصية بخلفية بيضاء',
        'إثبات مالي مناسب لمدة الإقامة'
      ],
      notes: 'الإمارات مش ضمن قائمة الإعفاء، لكن الفيزا بتطلع أونلاين: عبر منظومة ICP «Smart Service» أو بواسطة شركات الطيران (Emirates / Etihad / flydubai …) أو الفندق الراعي. المدة عادة 30 أو 60 يوم وقابلة للتمديد.',
      officialLink: 'https://smartservices.icp.gov.ae/echannels/web/client/guest/index.html#/dashboard',
      embassyInEgypt: {
        address: '16 شارع حسن أفلاطون (أمام شارع الثورة)، مصر الجديدة، القاهرة',
        phone: '+20 2 2417 2390',
        website: 'https://www.mofa.gov.ae/en/missions/cairo',
        verified: true
      },
      bestTime: 'نوفمبر – مارس',
      currency: 'AED (الدرهم الإماراتي)',
      currencyPerUSD: '1$ ≈ 3.67 AED (ثابت)',
      language: 'العربية',
      timezone: 'UTC+4',
      emergencyNumber: '999',
      source: 'Wikipedia: Visa policy of the UAE (Online Visa / Smart Service) + mofa.gov.ae'
    },

    /* ==================== السعودية ==================== */
    sa: {
      code: 'sa',
      name: 'السعودية',
      visaType: 'visa-required',
      conditional: false,
      duration: '30 / 90 يوم (حسب نوع الفيزا)',
      cost: '≈ 100 – 120$',
      processingTime: '3 – 7 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم من السفارة / القنصلية السعودية (مصر ليست ضمن قائمة الفيزا السياحية الإلكترونية)',
        'حجز فندق + تذكرة ذهاب وعودة',
        'شهادة تطعيم (حسب متطلبات الحج / العمرة)',
        'صورة شخصية + كشف حساب بنكي'
      ],
      notes: 'السعودية مش بتتيح للمصريين الفيزا السياحية الإلكترونية (القائمة الحالية لا تضم مصر)، فالتقديم بيتم من السفارة. استثناء مفيد: حاملو تأشيرة سارية من أمريكا / بريطانيا / شنغن يمكنهم الحصول على الفيزا عند الوصول عبر الطيران السعودي (Saudia / Flynas / Flyadeal). فيزا العمرة متاحة كذلك.',
      officialLink: 'https://visa.visitsaudi.com/',
      embassyInEgypt: {
        address: 'القاهرة – جاردن سيتي',
        phone: '',
        website: 'https://www.mofa.gov.sa',
        verified: false
      },
      bestTime: 'نوفمبر – مارس',
      currency: 'SAR (الريال السعودي)',
      currencyPerUSD: '1$ ≈ 3.75 SAR (ثابت)',
      language: 'العربية',
      timezone: 'UTC+3',
      emergencyNumber: '999',
      source: 'Wikipedia: Visa policy of Saudi Arabia (eVisa list excludes Egypt) + visitsaudi.com'
    },

    /* ==================== الأردن ==================== */
    jo: {
      code: 'jo',
      name: 'الأردن',
      visaType: 'visa-free',
      conditional: false,
      duration: '30 يوم (شهر واحد)',
      cost: 'مجاني',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة أو متابعة',
        'حجز فندق أو عنوان إقامة'
      ],
      notes: 'المصريون معفيون من الفيزا للأردن لمدة شهر (30 يوم). خيار مفيد: «Jordan Pass» بيوفّر دخول المعالم السياحية (وهو مفيد أكتر للجنسيات اللي محتاجة فيزا). راجع دائمًا أي تحديث للإعفاء.',
      officialLink: 'https://www.moi.gov.jo/',
      embassyInEgypt: {
        address: 'القاهرة – جاردن سيتي',
        phone: '',
        website: 'https://www.mfa.gov.jo',
        verified: false
      },
      bestTime: 'مارس – مايو، سبتمبر – نوفمبر',
      currency: 'JOD (الدينار الأردني)',
      currencyPerUSD: '1$ ≈ 0.71 JOD',
      language: 'العربية',
      timezone: 'UTC+3',
      emergencyNumber: '911',
      source: 'Wikipedia: Visa policy of Jordan (Egypt — visa-free, 1 month)'
    },

    /* ==================== ماليزيا ==================== */
    my: {
      code: 'my',
      name: 'ماليزيا',
      visaType: 'visa-free',
      conditional: false,
      duration: '90 يوم',
      cost: 'مجاني',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة',
        'إثبات مالي كافٍ لمدة الرحلة',
        'تعبئة «بطاقة الوصول الرقمية» MDAC أونلاين قبل الوصول بـ3 أيام'
      ],
      notes: 'المصريون معفيون من التأشيرة لمدة 90 يوم لماليزيا. إلزامي تعبئة بطاقة الوصول الرقمية (MDAC) أونلاين قبل السفر، وهي مجانية تمامًا — احذر المواقع المزيّفة اللي بتاخد فلوس عليها.',
      officialLink: 'https://www.imi.gov.my/index.php/en/main-services/visa/',
      embassyInEgypt: {
        address: 'القاهرة – المهندسين، الجيزة',
        phone: '',
        website: 'https://www.kln.gov.my/web/eg_cairo',
        verified: false
      },
      bestTime: 'مارس – أكتوبر',
      currency: 'MYR (الرينغيت الماليزي)',
      currencyPerUSD: '1$ ≈ 4.4 MYR (تقديري)',
      language: 'الملايوية، الإنجليزية',
      timezone: 'UTC+8',
      emergencyNumber: '999',
      source: 'Wikipedia: Visa policy of Malaysia (Egypt — visa-free 90 days, Timatic)'
    },

    /* ==================== تايلاند ==================== */
    th: {
      code: 'th',
      name: 'تايلاند',
      visaType: 'e-visa',
      conditional: false,
      duration: '60 يوم',
      cost: '≈ 30 – 60$',
      processingTime: '5 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم عبر thaievisa.go.th (متاح لكل الجنسيات)',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي (20,000 بات للفرد / 40,000 بات للأسرة)',
        'صورة شخصية + تعبئة الطلب'
      ],
      notes: 'تايلاند مش بتدّي إعفاء للمصريين، لكن الفيزا الإلكترونية (e-Visa) متاحة لكل الجنسيات ومدة الإقامة تصل لـ60 يوم. «الفيزا عند الوصول» لمدة 15 يوم متاحة حاليًا لثلاث دول فقط ومصر ليست منها. احتفظ بإثبات مالي عند الوصول.',
      officialLink: 'https://www.thaievisa.go.th/',
      embassyInEgypt: {
        address: 'فيلا 19، شارع عبد الله الكاتب، الدقي، الجيزة',
        phone: '+20 2 3336 6520',
        website: 'https://cairo.thaiembassy.org',
        verified: true
      },
      bestTime: 'نوفمبر – فبراير',
      currency: 'THB (البات التايلاندي)',
      currencyPerUSD: '1$ ≈ 34 THB (تقديري)',
      language: 'التايلاندية',
      timezone: 'UTC+7',
      emergencyNumber: '191',
      source: 'Wikipedia: Visa policy of Thailand (e-Visa for all nationalities) + cairo.thaiembassy.org'
    },

    /* ==================== جورجيا ==================== */
    ge: {
      code: 'ge',
      name: 'جورجيا',
      visaType: 'e-visa',
      conditional: false,
      duration: '30 يوم (خلال 120 يوم)',
      cost: '≈ 25$',
      processingTime: '5 أيام عمل (متاح مستعجل)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم أونلاين عبر evisa.gov.ge',
        'صورة شخصية + تعبئة الطلب',
        'حجز فندق (قد يُطلب عند الوصول)',
        'تأمين صحي (إلزامي أحيانًا)'
      ],
      notes: 'مصر ضمن قائمة الفيزا الإلكترونية لجورجيا: حتى 30 يوم خلال أي 120 يوم. المعفيون تمامًا من الفيزا (بدون أي تقديم) هم حاملو الجوازات الدبلوماسية/الرسمية فقط، أما الجواز العادي فيحتاج الفيزا الإلكترونية.',
      officialLink: 'https://www.evisa.gov.ge/',
      embassyInEgypt: {
        address: '9 شارع التبة، الدقي، الجيزة، القاهرة',
        phone: '+20 2 3762 2795',
        website: 'https://egypt.mfa.gov.ge',
        verified: true
      },
      bestTime: 'مايو – يونيو، سبتمبر – أكتوبر',
      currency: 'GEL (اللاري الجورجي)',
      currencyPerUSD: '1$ ≈ 2.7 GEL (تقديري)',
      language: 'الجورجية',
      timezone: 'UTC+4',
      emergencyNumber: '112',
      source: 'Wikipedia: Visa policy of Georgia (e-Visa — Egypt, 30d/120d) + egypt.mfa.gov.ge'
    },

    /* ==================== أذربيجان ==================== */
    az: {
      code: 'az',
      name: 'أذربيجان',
      visaType: 'visa-required',
      conditional: false,
      duration: '30 يوم (حسب التأشيرة)',
      cost: '≈ 60 – 80$',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 3 شهور على الأقل بعد انتهاء مدة التأشيرة',
        'التقديم من سفارة أذربيجان بالقاهرة (مصر ليست في قائمة ASAN الإلكترونية)',
        'حجز فندق + تذكرة ذهاب وعودة',
        'تأمين صحي',
        'صورة شخصية + استمارة الطلب'
      ],
      notes: 'مصر ليست ضمن قائمة الفيزا الإلكترونية «ASAN viza» لأذربيجان، فالتقديم بيتم من السفارة. استثناء: حاملو إقامة سارية في الإمارات قد يحصلون على فيزا عند الوصول. التسجيل في مكان الإقامة إلزامي لو هتقعد أكثر من 15 يوم.',
      officialLink: 'https://mfa.gov.az/en',
      embassyInEgypt: {
        address: 'القاهرة',
        phone: '',
        website: 'https://cairo.mfa.gov.az',
        verified: false
      },
      bestTime: 'أبريل – يونيو، سبتمبر – أكتوبر',
      currency: 'AZN (المانات الأذربيجاني)',
      currencyPerUSD: '1$ ≈ 1.70 AZN (ثابت)',
      language: 'الأذربيجانية',
      timezone: 'UTC+4',
      emergencyNumber: '112',
      source: 'Wikipedia: Visa policy of Azerbaijan (ASAN e-Visa list excludes Egypt)'
    },

    /* ==================== المغرب ==================== */
    ma: {
      code: 'ma',
      name: 'المغرب',
      visaType: 'e-visa',
      conditional: true,
      duration: '30 يوم (حسب الإذن)',
      cost: '≈ 40$',
      processingTime: '3 – 10 أيام',
      requirements: [
        'جواز سفر ساري 6 شهور',
        'تأشيرة/إقامة سارية من (شنغن / أمريكا / بريطانيا / كندا / أستراليا / اليابان / نيوزيلندا / أيرلندا) — شرط للفيزا الإلكترونية',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'المغرب مش معفي للمصريين. الفيزا الإلكترونية المباشرة (acces-maroc.ma) محصورة في دول معيّنة، لكن المصريين يقدروا يقدّموا عليها «بشرط» امتلاك تأشيرة/إقامة سارية من شنغن أو أمريكا أو بريطانيا أو كندا أو غيرها. غير كده التقديم بيتم من السفارة.',
      officialLink: 'https://www.acces-maroc.ma/',
      embassyInEgypt: {
        address: 'القاهرة – الزمالك',
        phone: '',
        website: 'https://www.diplomatie.ma',
        verified: false
      },
      bestTime: 'مارس – مايو، سبتمبر – نوفمبر',
      currency: 'MAD (الدرهم المغربي)',
      currencyPerUSD: '1$ ≈ 10 MAD (تقديري)',
      language: 'العربية، الفرنسية',
      timezone: 'UTC+1',
      emergencyNumber: '190',
      source: 'Wikipedia: Visa policy of Morocco (conditional e-Visa) + acces-maroc.ma'
    },

    /* ==================== تونس ==================== */
    tn: {
      code: 'tn',
      name: 'تونس',
      visaType: 'visa-required',
      conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 يوم)',
      cost: '≈ 30 – 50$',
      processingTime: '5 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم من سفارة تونس بالقاهرة',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي + صورة شخصية'
      ],
      notes: 'تونس مش معفية للمصريين (الإعفاء مقصور على حاملي الجوازات الدبلوماسية/الرسمية). منصة الفيزا الإلكترونية التونسية «متعثّرة» فمازال التقديم بيتم من السفارة. منظّمو الرحلات قد يحصلون على بعض التسهيلات.',
      officialLink: 'https://www.diplomatie.gov.tn/',
      embassyInEgypt: {
        address: 'القاهرة – المهندسين، الجيزة',
        phone: '',
        website: 'https://www.diplomatie.gov.tn/',
        verified: false
      },
      bestTime: 'مارس – مايو، سبتمبر – نوفمبر',
      currency: 'TND (الدينار التونسي)',
      currencyPerUSD: '1$ ≈ 3.1 TND (تقديري)',
      language: 'العربية، الفرنسية',
      timezone: 'UTC+1',
      emergencyNumber: '190',
      source: 'Wikipedia: Visa policy of Tunisia (Egypt — visa required for ordinary passports)'
    },

    /* ==========================================================
       المجموعات 1 – 9 — 90 دولة جديدة (10 لكل مجموعة)
       ملاحظة: verified:false معناها بيانات السفارة محتاجة تأكيد.
       أي معلومة غير مؤكدة مكتوب جنبها «يحتاج تأكيد» في الملاحظات.
       ========================================================== */

    /* ==========================================================
       المجموعة 1 — أوروبا الغربية (1/2)
       gr, pt, ch, at, be
       ========================================================== */
    gr: {
      code: 'gr', name: 'اليونان', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' اليونان: التقديم من قنصلية اليونان بالقاهرة (جاردن سيتي) — واحدة من أشهر بوابات شنغن للسياحة الجزرية.',
      officialLink: 'https://www.mfa.gr/en/visas/',
      embassyInEgypt: { address: 'القاهرة – جاردن سيتي', phone: '', website: 'https://www.mfa.gr/', verified: false },
      bestTime: 'أبريل – يونيو، سبتمبر – أكتوبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'اليونانية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: اليونان (Schengen قصيرة المدى، 90/180) — مراجعة 2026'
    },
    pt: {
      code: 'pt', name: 'البرتغال', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' البرتغال: التقديم من سفارة البرتغال بالقاهرة عبر نظام الحجز الإلكتروني (vistos.mne.gov.pt).',
      officialLink: 'https://www.vistos.mne.gov.pt/en',
      embassyInEgypt: { address: 'القاهرة – الزمالك', phone: '', website: 'https://www.vistos.mne.gov.pt/', verified: false },
      bestTime: 'مارس – مايو، سبتمبر – أكتوبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'البرتغالية', timezone: 'UTC+0 (UTC+1 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: البرتغال (Schengen قصيرة المدى، 90/180) — مراجعة 2026'
    },
    ch: {
      code: 'ch', name: 'سويسرا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' سويسرا: عضو شنغن (مش عضو في الاتحاد الأوروبي) — نفس تأشيرة شنغن ونفس المستندات. العملة فرنك سويسري (CHF).',
      officialLink: 'https://www.eda.admin.ch/eda/en/home/representations-and-travel-advice/visa-requirements.html',
      embassyInEgypt: { address: 'القاهرة – جاردن سيتي', phone: '', website: 'https://www.eda.admin.ch/', verified: false },
      bestTime: 'مايو – سبتمبر (والتزلج: ديسمبر – مارس)',
      currency: 'الفرنك السويسري (CHF)', currencyPerUSD: '1$ ≈ 0.88 CHF (تقديري)',
      language: 'الألمانية، الفرنسية، الإيطالية، الرومانشية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: سويسرا (Schengen، 90/180) — مراجعة 2026'
    },
    at: {
      code: 'at', name: 'النمسا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' النمسا: التقديم من سفارة النمسا بالقاهرة. من أهم دول وسط أوروبا للسياحة والدراسة.',
      officialLink: 'https://www.bmeia.gv.at/en/',
      embassyInEgypt: { address: 'القاهرة – جاردن سيتي', phone: '', website: 'https://www.bmeia.gv.at/', verified: false },
      bestTime: 'مايو – سبتمبر (والتزلج: ديسمبر – مارس)',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الألمانية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: النمسا (Schengen، 90/180) — مراجعة 2026'
    },
    be: {
      code: 'be', name: 'بلجيكا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' بلجيكا: التقديم من سفارة بلجيكا بالقاهرة. مفيدة كمقر رئيسي لمؤسسات الاتحاد الأوروبي.',
      officialLink: 'https://diplomatie.belgium.be/en',
      embassyInEgypt: { address: 'القاهرة – الزمالك', phone: '', website: 'https://diplomatie.belgium.be/en', verified: false },
      bestTime: 'أبريل – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الهولندية، الفرنسية، الألمانية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بلجيكا (Schengen، 90/180) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 1 — أوروبا الغربية (2/2)
       ie, nl, se, no, dk
       ========================================================== */
    ie: {
      code: 'ie', name: 'أيرلندا', visaType: 'visa-required', conditional: false,
      duration: 'تأشيرة قصيرة المدى حتى 90 يوم', cost: '≈ 60 يورو (دخول واحد) / 100 يورو (متعددة)',
      processingTime: '8 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل بعد تاريخ الوصول',
        'تقديم أونلاين عبر نظام AVATS + إرسال المستندات للسفارة',
        'صورتان شخصيتان حديثتان',
        'كشف حساب بنكي لآخر 6 شهور (إثبات قدرة مالية)',
        'خطاب من جهة العمل + إجازات معتمدة',
        'حجز فندق + حجز تذكرة طيران',
        'تأمين صحي للسفر'
      ],
      notes: 'أيرلندا مش عضو في منطقة شنغن، فبتحتاج تأشيرة أيرلندية منفصلة (Irish Short Stay Visa). لو معاك تأشيرة شنغن مش بتدخلك أيرلندا. [يحتاج تأكيد: هل مصر مشمولة ببرنامج الإعفاء القصير]',
      officialLink: 'https://www.irishimmigration.ie/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.irishimmigration.ie/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الإنجليزية، الأيرلندية', timezone: 'UTC+0 (UTC+1 في الصيف)', emergencyNumber: '112 / 999',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: أيرلندا (Visa required) + irishimmigration.ie — مراجعة 2026'
    },
    nl: {
      code: 'nl', name: 'هولندا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' هولندا: التقديم من سفارة هولندا بالقاهرة (TeamNL / VFS). مفيدة لمن عنده ترانزيت طويل في أمستردام.',
      officialLink: 'https://www.netherlandsworldwide.nl/visa-the-netherlands',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.netherlandsworldwide.nl/', verified: false },
      bestTime: 'أبريل – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الهولندية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: هولندا (Schengen، 90/180) — مراجعة 2026'
    },
    se: {
      code: 'se', name: 'السويد', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' السويد: التقديم من سفارة السويد بالقاهرة — من أسهل دول شنغن في المواعيد.',
      officialLink: 'https://www.migrationsverket.se/English/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.migrationsverket.se/English/', verified: false },
      bestTime: 'يونيو – أغسطس (الصيف)، ديسمبر – فبراير (الشتاء)',
      currency: 'الكرونة السويدية (SEK)', currencyPerUSD: '1$ ≈ 10.5 SEK (تقديري)',
      language: 'السويدية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: السويد (Schengen، 90/180) — مراجعة 2026'
    },
    no: {
      code: 'no', name: 'النرويج', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' النرويج: عضو شنغن (مش عضو في الاتحاد الأوروبي) — نفس التأشيرة والمستندات. العملة كرونة نرويجية.',
      officialLink: 'https://www.udi.no/en/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.udi.no/en/', verified: false },
      bestTime: 'يونيو – أغسطس (الصيف)، ديسمبر – مارس (الشفق القطبي)',
      currency: 'الكرونة النرويجية (NOK)', currencyPerUSD: '1$ ≈ 10.9 NOK (تقديري)',
      language: 'النرويجية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: النرويج (Schengen، 90/180) — مراجعة 2026'
    },
    dk: {
      code: 'dk', name: 'الدنمارك', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' الدنمارك: التقديم من سفارة الدنمارك بالقاهرة. ملاحظة: الدنمارك بتنوب عن دول شنغن تانية (زي أيسلندا) في إصدار التأشيرات من مصر — يحتاج تأكيد.',
      officialLink: 'https://www.nyidanmark.dk/en-GB',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.nyidanmark.dk/en-GB', verified: false },
      bestTime: 'مايو – أغسطس',
      currency: 'الكرونة الدنماركية (DKK)', currencyPerUSD: '1$ ≈ 6.9 DKK (تقديري)',
      language: 'الدنماركية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: الدنمارك (Schengen، 90/180) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 2 — أوروبا الشرقية (1/2)
       pl, cz, hu, ro, hr
       ========================================================== */
    pl: {
      code: 'pl', name: 'بولندا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' بولندا: التقديم من سفارة بولندا بالقاهرة. ملاحظة: بولندا من الدول اللي بتطلب تأشيرة عبور (ترانزيت) حتى لو هتفضل جوّه المطار — يحتاج تأكيد.',
      officialLink: 'https://www.gov.pl/web/diplomacy',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gov.pl/web/diplomacy', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'الزلوتي البولندي (PLN)', currencyPerUSD: '1$ ≈ 4.0 PLN (تقديري)',
      language: 'البولندية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بولندا (Schengen، 90/180) — مراجعة 2026'
    },
    cz: {
      code: 'cz', name: 'التشيك', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' التشيك: التقديم من سفارة التشيك بالقاهرة. مهم: التشيك بتطلب تأشيرة عبور (Airport Transit Visa) حتى لو المسافر هيستنى جوّه المطار بترانزيت — يحتاج تأكيد.',
      officialLink: 'https://mzv.gov.cz/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mzv.gov.cz/', verified: false },
      bestTime: 'مايو – سبتمبر (والتزلج: ديسمبر – فبراير)',
      currency: 'الكرونة التشيكية (CZK)', currencyPerUSD: '1$ ≈ 23 CZK (تقديري)',
      language: 'التشيكية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: التشيك (Schengen + Airport Transit Visa) — مراجعة 2026'
    },
    hu: {
      code: 'hu', name: 'المجر', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' المجر: التقديم من سفارة المجر بالقاهرة. بودابست من أرخص عواصم شنغن للسياحة.',
      officialLink: 'https://konzuliszolgalat.kormany.hu/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://konzuliszolgalat.kormany.hu/en', verified: false },
      bestTime: 'أبريل – يونيو، سبتمبر – أكتوبر',
      currency: 'الفورنت المجري (HUF)', currencyPerUSD: '1$ ≈ 355 HUF (تقديري)',
      language: 'المجرية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: المجر (Schengen، 90/180) — مراجعة 2026'
    },
    ro: {
      code: 'ro', name: 'رومانيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' رومانيا: انضمت لكامل منطقة شنغن (بما فيها الحدود البرية) بداية 2025، وبقت بتصدر تأشيرة شنغن — يحتاج تأكيد من السفارة. التقديم من سفارة رومانيا بالقاهرة عبر بوابة evisa.mae.ro.',
      officialLink: 'https://evisa.mae.ro/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.mae.ro/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'الليو الروماني (RON)', currencyPerUSD: '1$ ≈ 4.6 RON (تقديري)',
      language: 'الرومانية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: رومانيا (Schengen منذ 2025) — مراجعة 2026'
    },
    hr: {
      code: 'hr', name: 'كرواتيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' كرواتيا: عضو شنغن من 2023 وبتستخدم اليورو. من أجمل الوجهات الساحلية (دوبروفنيك / سبليت).',
      officialLink: 'https://mvep.gov.hr/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mvep.gov.hr/en', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الكرواتية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: كرواتيا (Schengen منذ 2023) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 2 — أوروبا الشرقية (2/2)
       rs, bg, si, sk, ee
       ========================================================== */
    rs: {
      code: 'rs', name: 'صربيا', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 – 90 يوم)', cost: '≈ 40 – 60$',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم من سفارة صربيا بالقاهرة',
        'استمارة طلب + صورة شخصية',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'صربيا (مش عضو في الاتحاد الأوروبي ومش في شنغن) — المصريون محتاجين تأشيرة من السفارة. [يحتاج تأكيد: حاملو تأشيرة شنغن/أمريكا/بريطانيا السارية ممكن يدخلوا بدون تأشيرة صربية لفترة محدودة].',
      officialLink: 'https://www.mfa.gov.rs/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mfa.gov.rs/en', verified: false },
      bestTime: 'أبريل – يونيو، سبتمبر – أكتوبر',
      currency: 'الدينار الصربي (RSD)', currencyPerUSD: '1$ ≈ 108 RSD (تقديري)',
      language: 'الصربية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: صربيا (Visa required) — مراجعة 2026'
    },
    bg: {
      code: 'bg', name: 'بلغاريا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' بلغاريا: انضمت لكامل شنغن بداية 2025. العملة كانت الليف البلغاري (BGN) واتحوّلت لليورو بداية 2026 — يحتاج تأكيد.',
      officialLink: 'https://www.mfa.bg/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mfa.bg/en', verified: false },
      bestTime: 'مايو – سبتمبر (والتزلج: ديسمبر – فبراير)',
      currency: 'يورو (EUR) من 2026 (كان الليف البلغاري BGN)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'البلغارية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بلغاريا (Schengen منذ 2025) — مراجعة 2026'
    },
    si: {
      code: 'si', name: 'سلوفينيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' سلوفينيا: التقديم من سفارة سلوفينيا بالقاهرة. بحيرة بليد من أشهر الوجهات.',
      officialLink: 'https://www.gov.si/en/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gov.si/en/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'السلوفينية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: سلوفينيا (Schengen، 90/180) — مراجعة 2026'
    },
    sk: {
      code: 'sk', name: 'سلوفاكيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' سلوفاكيا: التقديم من سفارة سلوفاكيا بالقاهرة — من الدول اللي مواعيدها عادة متاحة بسرعة.',
      officialLink: 'https://www.mzv.sk/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mzv.sk/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'السلوفاكية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: سلوفاكيا (Schengen، 90/180) — مراجعة 2026'
    },
    ee: {
      code: 'ee', name: 'إستونيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' إستونيا: [يحتاج تأكيد: هل ليها سفارة في القاهرة ولا التقديم بيتم عبر سفارة دولة شنغن ممثّلة لها (زي بولندا/ليتوانيا)].',
      officialLink: 'https://vm.ee/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://vm.ee/en', verified: false },
      bestTime: 'يونيو – أغسطس',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الإستونية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: إستونيا (Schengen، 90/180) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 3 — أوروبا وآسيا الوسطى (1/2)
       lv, lt, fi, is, lu
       ========================================================== */
    lv: {
      code: 'lv', name: 'لاتفيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' لاتفيا: التقديم من سفارة لاتفيا بالقاهرة. [يحتاج تأكيد: مركز التقديم والمواعيد].',
      officialLink: 'https://www.mfa.gov.lv/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mfa.gov.lv/en', verified: false },
      bestTime: 'يونيو – أغسطس',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'اللاتفية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: لاتفيا (Schengen، 90/180) — مراجعة 2026'
    },
    lt: {
      code: 'lt', name: 'ليتوانيا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' ليتوانيا: التقديم من سفارة ليتوانيا بالقاهرة. [يحتاج تأكيد: مركز التقديم والمواعيد].',
      officialLink: 'https://www.urm.lt/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.urm.lt/', verified: false },
      bestTime: 'يونيو – أغسطس',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الليتوانية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: ليتوانيا (Schengen، 90/180) — مراجعة 2026'
    },
    fi: {
      code: 'fi', name: 'فنلندا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' فنلندا: التقديم من سفارة فنلندا بالقاهرة. لو هتفضل أكتر من 90 يوم (دراسة/عمل) لازم تصريح إقامة من migri.fi.',
      officialLink: 'https://um.fi/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://migri.fi/en', verified: false },
      bestTime: 'يونيو – أغسطس (والصيف القطبي في لابلاند)',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'الفنلندية، السويدية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: فنلندا (Schengen، 90/180) — مراجعة 2026'
    },
    is: {
      code: 'is', name: 'أيسلندا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' أيسلندا: عضو شنغن (مش عضو في الاتحاد الأوروبي). [يحتاج تأكيد: التقديم في مصر بيتم عن طريق سفارة دولة شنغن ممثّلة (غالبًا الدنمارك)].',
      officialLink: 'https://www.government.is/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.government.is/', verified: false },
      bestTime: 'يونيو – أغسطس (منتصف الليل المشمس)، سبتمبر – مارس (الشفق القطبي)',
      currency: 'الكرونة الآيسلندية (ISK)', currencyPerUSD: '1$ ≈ 138 ISK (تقديري)',
      language: 'الآيسلندية', timezone: 'UTC+0', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: أيسلندا (Schengen، 90/180) — مراجعة 2026'
    },
    lu: {
      code: 'lu', name: 'لوكسمبورج', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' لوكسمبورج: [يحتاج تأكيد: التقديم في مصر ممكن يكون عبر سفارة بلجيكا (اتفاق بنلوكس) بدل سفارة مستقلة].',
      officialLink: 'https://maee.gouvernement.lu/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://maee.gouvernement.lu/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'اللوكسمبورجية، الفرنسية، الألمانية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: لوكسمبورج (Schengen، 90/180) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 3 — أوروبا وآسيا الوسطى (2/2)
       mt, cy, al, mk, ba
       ========================================================== */
    mt: {
      code: 'mt', name: 'مالطا', visaType: 'schengen', conditional: false,
      duration: '90 يوم خلال أي 180 يوم', cost: '≈ 90 يورو',
      processingTime: '15 يوم عمل (قابل للتمديد حتى 45 يوم)',
      requirements: SCHENGEN_REQUIREMENTS,
      notes: VISA_SCHENGEN_NOTE + ' مالطا: التقديم من سفارة مالطا بالقاهرة. من أشهر وجهات تعلم الإنجليزية للمصريين (دورات اللغة + إقامة قصيرة).',
      officialLink: 'https://foreignaffairs.gov.mt/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://foreignaffairs.gov.mt/', verified: false },
      bestTime: 'مايو – أكتوبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'المالطية، الإنجليزية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: مالطا (Schengen، 90/180) — مراجعة 2026'
    },
    cy: {
      code: 'cy', name: 'قبرص', visaType: 'visa-required', conditional: false,
      duration: '90 يوم (حسب التأشيرة)', cost: '≈ 20 – 60 يورو',
      processingTime: '7 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة قبرص + صورة شخصية',
        'التقديم من سفارة/قنصلية قبرص بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'قبرص عضو في الاتحاد الأوروبي لكن لسه مش جوّه منطقة شنغن رسميًا، فبتحتاج تأشيرة قبرصية وطنية. [يحتاج تأكيد: 1) حالة انضمام قبرص لشنغن، 2) هل حاملو تأشيرة شنغن السارية بيدخلوا بدون تأشيرة قبرصية].',
      officialLink: 'https://www.mfa.gov.cy/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mfa.gov.cy/', verified: false },
      bestTime: 'أبريل – أكتوبر',
      currency: 'يورو (EUR)', currencyPerUSD: '1$ ≈ 0.92 EUR (تقديري)',
      language: 'اليونانية، التركية', timezone: 'UTC+2 (UTC+3 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: قبرص (Visa required — خارج شنغن) — مراجعة 2026'
    },
    al: {
      code: 'al', name: 'ألبانيا', visaType: 'e-visa', conditional: false,
      duration: '90 يوم (للفيزا الإلكترونية) — أو 90 يوم إعفاء لحاملي تأشيرة شنغن/أمريكا/بريطانيا',
      cost: '≈ 50 يورو (تقديري)',
      processingTime: '5 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية e-visa.al',
        'صورة شخصية + تعبئة الطلب',
        'حجز فندق/إثبات إقامة + تذاكر طيران',
        'إثبات مالي كافٍ لمدة الإقامة',
        'تأمين صحي للسفر'
      ],
      notes: 'ألبانيا عندها فيزا إلكترونية للمصريين. ميزة مهمة: حاملو تأشيرة سارية أو إقامة سارية من دول شنغن أو بريطانيا أو أمريكا مسموح لهم بالدخول بدون تأشيرة ألبانية لمدة تصل 90 يوم خلال أي 180 يوم (حسب ويكيبيديا). [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://e-visa.al/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://e-visa.al/', verified: false },
      bestTime: 'أبريل – أكتوبر',
      currency: 'الليك الألباني (ALL)', currencyPerUSD: '1$ ≈ 92 ALL (تقديري)',
      language: 'الألبانية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: ألبانيا (eVisa 90 يوم) + e-visa.al — مراجعة 2026'
    },
    mk: {
      code: 'mk', name: 'مقدونيا الشمالية', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 – 90 يوم)', cost: '≈ 35 يورو',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم من سفارة مقدونيا الشمالية (أو سفارة ممثّلة لها)',
        'استمارة طلب + صورة شخصية',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + تأمين صحي'
      ],
      notes: 'مقدونيا الشمالية مش في شنغن — تأشيرة منفصلة. [يحتاج تأكيد: حاملو تأشيرة شنغن/أمريكا/بريطانيا السارية أو حاملو إقامة سارية ممكن يدخلوا بدون تأشيرة لفترة محدودة].',
      officialLink: 'https://mfa.gov.mk/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mfa.gov.mk/en', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'الدينار المقدوني (MKD)', currencyPerUSD: '1$ ≈ 57 MKD (تقديري)',
      language: 'المقدونية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: مقدونيا الشمالية (Visa required) — مراجعة 2026'
    },
    ba: {
      code: 'ba', name: 'البوسنة والهرسك', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 – 90 يوم)', cost: '≈ 40 – 60 يورو',
      processingTime: '7 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم من سفارة البوسنة والهرسك (أو سفارة ممثّلة لها)',
        'استمارة طلب + صورة شخصية',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + تأمين صحي'
      ],
      notes: 'البوسنة مش في شنغن — تأشيرة منفصلة. [يحتاج تأكيد: حاملو تأشيرة شنغن متعددة الدخول السارية مُعفَون من تأشيرة البوسنة لمدة تصل 30 يوم].',
      officialLink: 'https://mfa.gov.ba/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mfa.gov.ba/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'المارك البوسني (BAM)', currencyPerUSD: '1$ ≈ 1.80 BAM (ثابت)',
      language: 'البوسنية، الصربية، الكرواتية', timezone: 'UTC+1 (UTC+2 في الصيف)', emergencyNumber: '112 / 122',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: البوسنة والهرسك (Visa required) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 4 — آسيا (جنوب) (1/2)
       in, lk, mv, np, bd
       ========================================================== */
    in: {
      code: 'in', name: 'الهند', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (سياحي عادة 30 – 90 يوم)', cost: '≈ 40 – 100$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صور شخصية',
        'التقديم من سفارة/قنصلية الهند (بموعد مسبق)',
        'حجز فندق/إثبات إقامة + تذكرة ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'قائمة الفيزا الإلكترونية الهندية (e-Visa) الحالية مش بتضم مصر، فالمصريين محتاجين تأشيرة من السفارة/القنصلية. [يحتاج تأكيد: راجع السفارة قبل أي حجز].',
      officialLink: 'https://indianvisaonline.gov.in/evisa/',
      embassyInEgypt: { address: 'القاهرة – جاردن سيتي', phone: '', website: 'https://www.indianembassycairo.gov.in/', verified: false },
      bestTime: 'أكتوبر – مارس',
      currency: 'الروبية الهندية (INR)', currencyPerUSD: '1$ ≈ 84 INR (تقديري)',
      language: 'الهندية، الإنجليزية', timezone: 'UTC+5:30', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of India (قائمة e-Visa: مصر غير مدرجة) — مراجعة 2026'
    },
    lk: {
      code: 'lk', name: 'سريلانكا', visaType: 'e-visa', conditional: false,
      duration: '30 يوم (ETA، قابلة للتمديد)', cost: '≈ 20 – 50$ (تقديري)',
      processingTime: '1 – 3 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين لتصريح السفر الإلكتروني (ETA) قبل السفر',
        'صورة شخصية + بيانات الرحلة',
        'حجز فندق/إثبات إقامة + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ',
        'تأمين صحي موصى به'
      ],
      notes: 'سريلانكا نظامها ETA (تصريح سفر إلكتروني) بيتطلع أونلاين قبل السفر. [يحتاج تأكيد: الرسوم الحالية بعد إعادة هيكلة نظام ETA].',
      officialLink: 'https://www.srilankaevisa.lk/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.srilankaevisa.lk/', verified: false },
      bestTime: 'ديسمبر – مارس (الساحل الغربي)، مايو – سبتمبر (الساحل الشرقي)',
      currency: 'الروبية السريلانكية (LKR)', currencyPerUSD: '1$ ≈ 295 LKR (تقديري)',
      language: 'السنهالية، التاميلية', timezone: 'UTC+5:30', emergencyNumber: '119',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: سريلانكا (ETA) — مراجعة 2026'
    },
    mv: {
      code: 'mv', name: 'المالديف', visaType: 'on-arrival', conditional: false,
      duration: '30 يوم (قابلة للتمديد)', cost: 'مجاني',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل (شهر واحد على الأقل بعد تاريخ العودة)',
        'تصريح سفر إلكتروني (IMUGA Traveler Declaration) قبل الوصول',
        'تذكرة عودة مؤكدة',
        'حجز فندق/منتجع مؤكد',
        'إثبات مالي كافٍ للفترة (≈ 100$ لليوم الواحد)',
        'تأمين صحي موصى به'
      ],
      notes: 'المالديف بتدي تأشيرة عند الوصول مجانًا 30 يوم لمعظم الجنسيات — من أسهل وجهات المصريين بدون تأشيرة مسبقة. [يحتاج تأكيد: سياسة الجواز العادي المصري المحدّثة].',
      officialLink: 'https://imuga.immigration.gov.mv/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://imuga.immigration.gov.mv/', verified: false },
      bestTime: 'نوفمبر – أبريل',
      currency: 'الروبية المالديفية (MVR) + الدولار مقبول على نطاق واسع', currencyPerUSD: '1$ ≈ 15.4 MVR (ثابت)',
      language: 'الديفيهي، الإنجليزية', timezone: 'UTC+5', emergencyNumber: '119',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: المالديف (Visa on arrival، 30 يوم) — مراجعة 2026'
    },
    np: {
      code: 'np', name: 'نيبال', visaType: 'on-arrival', conditional: false,
      duration: '15 / 30 / 90 يوم', cost: '≈ 30$ (15 يوم) – 125$ (90 يوم)',
      processingTime: 'فوري عند الوصول (أو أونلاين مسبقًا)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تعبئة طلب الفيزا أونلاين مسبقًا (بيوفّر وقت) أو في المطار',
        'صورة شخصية',
        'دفع الرسوم بالدولار نقدًا عند الوصول',
        'تذكرة عودة/متابعة'
      ],
      notes: 'نيبال بتدي فيزا عند الوصول ويمكن تقديمها أونلاين مسبقًا. [يحتاج تأكيد: هل مصر مضمّنة في قائمة الدول المؤهلة للفيزا عند الوصول].',
      officialLink: 'https://nepaliport.immigration.gov.np/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://nepaliport.immigration.gov.np/', verified: false },
      bestTime: 'أكتوبر – نوفمبر، مارس – أبريل',
      currency: 'الروبية النيبالية (NPR)', currencyPerUSD: '1$ ≈ 134 NPR (تقديري)',
      language: 'النيبالية', timezone: 'UTC+5:45', emergencyNumber: '100 / 112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: نيبال (Visa on arrival) — مراجعة 2026'
    },
    bd: {
      code: 'bd', name: 'بنجلاديش', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 يوم)', cost: '≈ 50 – 80$',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة/قنصلية بنجلاديش بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'بنجلاديش محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: نظام الفيزا الإلكترونية (visa.gov.bd) وفيزا عند الوصول لمجموعة جنسيات محددة — راجع السفارة].',
      officialLink: 'https://www.visa.gov.bd/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.visa.gov.bd/', verified: false },
      bestTime: 'نوفمبر – فبراير',
      currency: 'التاكا البنغالية (BDT)', currencyPerUSD: '1$ ≈ 120 BDT (تقديري)',
      language: 'البنغالية', timezone: 'UTC+6', emergencyNumber: '999',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بنجلاديش (Visa required) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 4 — آسيا (جنوب) (2/2)
       bt, pk, mm, tw, hk
       ========================================================== */
    bt: {
      code: 'bt', name: 'بوتان', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 15 – 30 يوم)', cost: '≈ 40$ رسوم + 100$ «رسوم التنمية المستدامة» لكل يوم (SDF)',
      processingTime: '5 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'التقديم أونلاين (السفارة/منظّم رحلات معتمد بوتاني)',
        'حجز فندق + برنامج سياحي',
        'دفع رسوم التنمية المستدامة (SDF) المقررة لكل يوم',
        'تأمين صحي للسفر'
      ],
      notes: 'بوتان مش بتسمح بالسياحة الفردية — لازم منظّم رحلات معتمد، ومعاها «رسوم تنمية مستدامة» يومية. [يحتاج تأكيد: قيمة الـSDF الحالية والرسوم].',
      officialLink: 'https://www.doi.gov.bt/',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.doi.gov.bt/', verified: false },
      bestTime: 'مارس – مايو، سبتمبر – نوفمبر',
      currency: 'النغولترم البوتاني (BTN) — مرتبط بالروبية الهندية', currencyPerUSD: '1$ ≈ 84 BTN (تقديري)',
      language: 'الدزونكا', timezone: 'UTC+6', emergencyNumber: '113',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بوتان (Visa required) — مراجعة 2026'
    },
    pk: {
      code: 'pk', name: 'باكستان', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 يوم)', cost: '≈ 60 – 100$',
      processingTime: '7 – 21 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة باكستان بالقاهرة (أو النظام الأونلاين)',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'باكستان محتاجة تأشيرة مسبقة. [يحتاج تأكيد: باكستان عندها نظام تأشيرة أونلاين (visa.nadra.gov.pk) بيغطي معظم الجنسيات — راجع لو مصر مؤهلة للفيزا الإلكترونية].',
      officialLink: 'https://visa.nadra.gov.pk/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://visa.nadra.gov.pk/', verified: false },
      bestTime: 'أكتوبر – مارس',
      currency: 'الروبية الباكستانية (PKR)', currencyPerUSD: '1$ ≈ 278 PKR (تقديري)',
      language: 'الأردية، الإنجليزية', timezone: 'UTC+5', emergencyNumber: '15',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: باكستان (Visa required) — مراجعة 2026'
    },
    mm: {
      code: 'mm', name: 'ميانمار (بورما)', visaType: 'e-visa', conditional: false,
      duration: '28 يوم', cost: '≈ 50$',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (evisa.moip.gov.mm)',
        'صورة شخصية حديثة (خلفية بيضاء)',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'ميانمار بتدي فيزا إلكترونية سياحية. [يحتاج تأكيد: هل مصر مضمّنة في قائمة الـe-Visa، وضرورة مراجعة توصيات السفر الأمنية قبل الحجز].',
      officialLink: 'https://evisa.moip.gov.mm/',
      embassyInEgypt: { address: '', phone: '', website: 'https://evisa.moip.gov.mm/', verified: false },
      bestTime: 'نوفمبر – فبراير',
      currency: 'الكيات الميانمارية (MMK)', currencyPerUSD: '1$ ≈ 2,100 MMK (تقديري)',
      language: 'البورمية', timezone: 'UTC+6:30', emergencyNumber: '199',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: ميانمار (eVisa) — مراجعة 2026'
    },
    tw: {
      code: 'tw', name: 'تايوان', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 – 90 يوم)', cost: '≈ 50$ (تقديري)',
      processingTime: '5 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورتين شخصيتين',
        'التقديم عبر مكتب تمثيل تايوان (BOCA) أو سفارة معتمدة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'تايوان محتاجة تأشيرة مسبقة للمصريين. «تصريح السفر الإلكتروني» (Travel Authorization Certificate) متاح حاليًا لجنسيات الهند وإندونيسيا ولاوس وميانمار وفيتنام فقط (وبشروط تأشيرة/إقامة سارية من دول محددة) — مصر مش على القائمة. [يحتاج تأكيد: الرسوم ومكان التقديم].',
      officialLink: 'https://www.boca.gov.tw/en/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.boca.gov.tw/en/', verified: false },
      bestTime: 'أكتوبر – أبريل',
      currency: 'الدولار التايواني الجديد (TWD)', currencyPerUSD: '1$ ≈ 32 TWD (تقديري)',
      language: 'الماندرين الصينية', timezone: 'UTC+8', emergencyNumber: '110',
      source: 'Wikipedia — Visa policy of Taiwan (قائمة Travel Authorization Certificate: مصر غير مدرجة) — مراجعة 2026'
    },
    hk: {
      code: 'hk', name: 'هونج كونج', visaType: 'visa-free', conditional: false,
      duration: '90 يوم', cost: 'مجانًا (بدون رسوم تأشيرة)',
      processingTime: 'لا يوجد — دخول مباشر بدون تأشيرة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'إثبات مالي كافٍ',
        'الغرض: سياحة أو نشاط أعمال محدود (ممنوع العمل بأجر)'
      ],
      notes: 'مصر على قائمة إعفاء هونج كونج لمدة 90 يوم. هونج كونج منطقة إدارية خاصة بتأشيرات مستقلة عن البر الصيني الرئيسي. [يحتاج تأكيد: المدة النهائية بتتحدد في ختم الدخول].',
      officialLink: 'https://www.immd.gov.hk/eng/services/visas/visit-transit/visit-visa-entry-permit.html',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.immd.gov.hk/eng/', verified: false },
      bestTime: 'أكتوبر – ديسمبر',
      currency: 'الدولار الهونج كونجي (HKD)', currencyPerUSD: '1$ ≈ 7.8 HKD (ثابت)',
      language: 'الصينية (الكانتونية)، الإنجليزية', timezone: 'UTC+8', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Hong Kong (قائمة الإعفاء: مصر = 90 يوم) + immd.gov.hk — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 5 — آسيا (جنوب شرق) (1/2)
       id, sg, vn, ph, kh
       ========================================================== */
    id: {
      code: 'id', name: 'إندونيسيا', visaType: 'e-visa', conditional: false,
      duration: '30 يوم (الـe-VOA بتتقدر تتمدّد 30 يوم مرة واحدة) — [يحتاج تأكيد]', cost: '≈ 500,000 روبية (≈ 33$) للـe-VOA',
      processingTime: 'أونلاين قبل السفر (e-Visa / e-VOA)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم الفيزا عند الوصول (نقدًا أو كارت)',
        'إثبات مالي كافٍ',
        'إقرار جمركي إلكتروني (e-CD) قبل الوصول'
      ],
      notes: 'إعفاء مصر من تأشيرة إندونيسيا اتلغى في مارس 2022 ومارجعش في قوائم الإعفاء المحدّثة. المسار المتاح: فيزا إلكترونية (e-Visa) أو فيزا إلكترونية عند الوصول (e-VOA) لو مصر على قائمة الـVOA الحالية. [يحتاج تأكيد: هل مصر على قائمة الـe-VOA الحالية — راجع البوابة الرسمية].',
      officialLink: 'https://evisa.imigrasi.go.id/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.imigrasi.go.id/', verified: false },
      bestTime: 'مايو – سبتمبر (موسم الجفاف)',
      currency: 'الروبية الإندونيسية (IDR)', currencyPerUSD: '1$ ≈ 16,000 IDR (تقديري)',
      language: 'الإندونيسية', timezone: 'UTC+7 / +8 / +9', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Indonesia (مصر مش في قائمة الإعفاء — اتلغى 2022) + البوابة الرسمية evisa.imigrasi.go.id — مراجعة 2026'
    },
    sg: {
      code: 'sg', name: 'سنغافورة', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 يوم)', cost: '≈ 30 دولار سنغافوري',
      processingTime: '≈ 3 أيام عمل بعد التقديم (زائد وقت تجهيز المستندات)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة Form 14A + صورة شخصية (مواصفات دقيقة)',
        'كفيل/جهة سنغافورية محلية أو وكيل تأشيرات معتمد + خطاب تعريف (LOI)',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'سنغافورة بتصنّف مصر في «Assessment Level II»: الفيزا إلكترونية وممكن تتقدّم من خلال كفيل سنغافوري محلي (أو وكيل تأشيرات معتمد) + «خطاب تعريف» (Letter of Introduction)، والمعالجة عادة 3 أيام عمل. [يحتاج تأكيد: قائمة الوكلاء المعتمدين الحالية].',
      officialLink: 'https://www.ica.gov.sg/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.ica.gov.sg/', verified: false },
      bestTime: 'طوال السنة (بعد الأمطار الموسمية)',
      currency: 'الدولار السنغافوري (SGD)', currencyPerUSD: '1$ ≈ 1.35 SGD (تقديري)',
      language: 'الإنجليزية، الملايو، الماندرين، التاميلية', timezone: 'UTC+8', emergencyNumber: '999',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: سنغافورة (Visa required) + ica.gov.sg — مراجعة 2026'
    },
    vn: {
      code: 'vn', name: 'فيتنام', visaType: 'e-visa', conditional: false,
      duration: 'حتى 90 يوم (دخول متعدد)', cost: '≈ 25$ (دخول مفرد) – 50$ (متعدد)',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية للفيزا الإلكترونية',
        'صورة شخصية + نسخة من صفحة الجواز',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'فيتنام وسّعت الفيزا الإلكترونية لتغطي جميع الجنسيات لمدة تصل 90 يوم (من أغسطس 2023). [يحتاج تأكيد: منافذ الدخول المعتمدة].',
      officialLink: 'https://evisa.gov.vn/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.gov.vn/', verified: false },
      bestTime: 'أكتوبر – أبريل (الشمال)، فبراير – أغسطس (الجنوب)',
      currency: 'الدونغ الفيتنامي (VND)', currencyPerUSD: '1$ ≈ 25,400 VND (تقديري)',
      language: 'الفيتنامية', timezone: 'UTC+7', emergencyNumber: '113',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: فيتنام (eVisa 90 يوم) — مراجعة 2026'
    },
    ph: {
      code: 'ph', name: 'الفلبين', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 30 يوم)', cost: '≈ 40 – 60$',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة الفلبين (أو سفارة ممثّلة)',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'تأمين صحي للسفر'
      ],
      notes: 'الفلبين محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: هل مصر على قائمة الـe-Visa (evisa.gov.ph) الجديدة].',
      officialLink: 'https://www.dfa.gov.ph/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.dfa.gov.ph/', verified: false },
      bestTime: 'نوفمبر – مايو (موسم الجفاف)',
      currency: 'البيزو الفلبيني (PHP)', currencyPerUSD: '1$ ≈ 58 PHP (تقديري)',
      language: 'الفلبينية، الإنجليزية', timezone: 'UTC+8', emergencyNumber: '911',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: الفلبين (Visa required) — مراجعة 2026'
    },
    kh: {
      code: 'kh', name: 'كمبوديا', visaType: 'e-visa', conditional: false,
      duration: '30 يوم (قابلة للتمديد)', cost: '≈ 36$ (e-Visa) / 30$ (عند الوصول)',
      processingTime: '3 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (evisa.gov.kh)',
        'صورة شخصية رقميًا + تعبئة الطلب',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'كمبوديا بتدي فيزا إلكترونية لجميع الجنسيات تقريبًا ومنها مصر، وكذلك فيزا عند الوصول. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://www.evisa.gov.kh/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.evisa.gov.kh/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الرييل الكمبودي (KHR) + الدولار مستخدم على نطاق واسع', currencyPerUSD: '1$ ≈ 4,100 KHR (تقديري)',
      language: 'الخميرية', timezone: 'UTC+7', emergencyNumber: '119',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: كمبوديا (eVisa / Visa on arrival) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 5 — آسيا (جنوب شرق) (2/2)
       la, bn, tl, mo, kp
       ========================================================== */
    la: {
      code: 'la', name: 'لاوس', visaType: 'e-visa', conditional: false,
      duration: '30 يوم', cost: '≈ 35 – 50$',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (laoevisa.gov.la)',
        'صورة شخصية + نسخة من الجواز',
        'حجز فندق + تذكرة ذهاب وعودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'لاوس بتدي فيزا إلكترونية ومنافذ محددة للفيزا عند الوصول. [يحتاج تأكيد: هل مصر مؤهلة للـe-Visa الحالي].',
      officialLink: 'https://laoevisa.gov.la/',
      embassyInEgypt: { address: '', phone: '', website: 'https://laoevisa.gov.la/', verified: false },
      bestTime: 'نوفمبر – فبراير',
      currency: 'الكيب اللاوسي (LAK)', currencyPerUSD: '1$ ≈ 21,500 LAK (تقديري)',
      language: 'اللاو', timezone: 'UTC+7', emergencyNumber: '1191',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: لاوس (eVisa) — مراجعة 2026'
    },
    bn: {
      code: 'bn', name: 'بروناي', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (غالبًا 14 يوم)', cost: '≈ 20 دولار بروناي',
      processingTime: '7 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة/قنصلية بروناي المعتمدة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'إثبات مالي كافٍ + تأمين صحي'
      ],
      notes: 'بروناي محتاجة تأشيرة مسبقة للمصريين. قائمة الفيزا عند الوصول لبروناي = 5 دول بس (أستراليا، البحرين، الكويت، قطر، السعودية) ومصر مش منها. [يحتاج تأكيد: وجود تمثيل قنصلي لبروناي لمصر].',
      officialLink: 'https://www.mfa.gov.bn/Pages/Visa-Information.aspx',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.mfa.gov.bn/Pages/Visa-Information.aspx', verified: false },
      bestTime: 'يناير – فبراير',
      currency: 'الدولار البروناوي (BND)', currencyPerUSD: '1$ ≈ 1.35 BND (تقديري)',
      language: 'الملايو', timezone: 'UTC+8', emergencyNumber: '993',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بروناي (Visa required) — مراجعة 2026'
    },
    tl: {
      code: 'tl', name: 'تيمور الشرقية', visaType: 'on-arrival', conditional: false,
      duration: '30 يوم (قابلة للتمديد)', cost: '≈ 30$',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم الفيزا عند الوصول',
        'إثبات مالي كافٍ'
      ],
      notes: 'تيمور الشرقية بتدي تأشيرة عند الوصول لمعظم الجنسيات. [يحتاج تأكيد: هل مصر على القائمة الحالية + الرسوم].',
      officialLink: 'https://www.migracao.gov.tl/',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.migracao.gov.tl/', verified: false },
      bestTime: 'مايو – نوفمبر (موسم الجفاف)',
      currency: 'الدولار الأمريكي (USD)', currencyPerUSD: 'الدولار هو العملة الرسمية',
      language: 'التتوم، البرتغالية', timezone: 'UTC+9', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: تيمور الشرقية (Visa on arrival) — مراجعة 2026'
    },
    mo: {
      code: 'mo', name: 'ماكاو', visaType: 'visa-free', conditional: false,
      duration: '90 يوم', cost: 'مجانًا (بدون رسوم تأشيرة)',
      processingTime: 'لا يوجد — دخول مباشر بدون تأشيرة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'إثبات مالي كافٍ',
        'الالتزام بمدة الإقامة المسموحة عند الدخول'
      ],
      notes: 'ماكاو منطقة إدارية خاصة تابعة للصين وبتطبّق سياسة تأشيرات مستقلة عن البر الرئيسي. مصر على قائمة الإعفاء 90 يوم. [يحتاج تأكيد: المدة النهائية بتحددها سلطات الهجرة في ختم الدخول].',
      officialLink: 'https://www.fsm.gov.mo/psp/eng/',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.fsm.gov.mo/psp/eng/', verified: false },
      bestTime: 'أكتوبر – ديسمبر',
      currency: 'الباتاكا الماكاوية (MOP)', currencyPerUSD: '1$ ≈ 8 MOP (تقديري)',
      language: 'الصينية (الكانتونية)، البرتغالية', timezone: 'UTC+8', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Macau (قائمة الإعفاء بدون تأشيرة: مصر = 90 يوم) — مراجعة 2026'
    },
    kp: {
      code: 'kp', name: 'كوريا الشمالية', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (الزيارة منظمة ببرنامج) — [يحتاج تأكيد]', cost: '[يحتاج تأكيد]',
      processingTime: 'غير محدد — التقديم عبر منظّم رحلات معتمد',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'الحجز عبر منظّم رحلات معتمد من كوريا الشمالية (إلزامي)',
        'موافقة/تصريح دخول مسبق',
        'برنامج سياحي كامل بمرشد معتمد',
        'تأشيرة تُستخرج عادة عند الوصول ضمن الرحلة المنظمة'
      ],
      notes: 'السياحة في كوريا الشمالية لازم تكون عن طريق منظّم رحلات معتمد فقط، والأوضاع بتنطوي على قيود سفر كبيرة. [يحتاج تأكيد: وجود سفارة بكوريا الشمالية بالقاهرة، وإجراءات ورسوم التأشيرة الحالية]. يُنصح بمراجعة وزارة الخارجية قبل أي ترتيب.',
      officialLink: 'https://www.mfa.gov.kp/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.mfa.gov.kp/', verified: false },
      bestTime: 'أبريل – أكتوبر (حسب توفر الرحلات المنظمة)',
      currency: 'الوون الكوري الشمالي (KPW)', currencyPerUSD: '[يحتاج تأكيد]',
      language: 'الكورية', timezone: 'UTC+9', emergencyNumber: '[يحتاج تأكيد]',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: كوريا الشمالية (Visa required) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 6 — الأمريكتان (1/2)
       br, ar, mx, cu, cl
       ========================================================== */
    br: {
      code: 'br', name: 'البرازيل', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 80$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة البرازيل بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + تأمين صحي للسفر'
      ],
      notes: 'البرازيل محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: الرسوم الحالية ونوع التأشيرة (سياحية/زيارة)].',
      officialLink: 'https://www.gov.br/mre/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gov.br/mre/en', verified: false },
      bestTime: 'أبريل – أكتوبر',
      currency: 'الريال البرازيلي (BRL)', currencyPerUSD: '1$ ≈ 5.5 BRL (تقديري)',
      language: 'البرتغالية', timezone: 'UTC−3 (توقيت برازيليا)', emergencyNumber: '190',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: البرازيل (Visa required) — مراجعة 2026'
    },
    ar: {
      code: 'ar', name: 'الأرجنتين', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 100 – 150$ (تقديري)',
      processingTime: '15 – 30 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة الأرجنتين بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل + تأمين صحي'
      ],
      notes: 'الأرجنتين محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: الرسوم + هل مطلوب موعد مسبق].',
      officialLink: 'https://cancilleria.gob.ar/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://cancilleria.gob.ar/en', verified: false },
      bestTime: 'نوفمبر – مارس (النصف الجنوبي)',
      currency: 'البيزو الأرجنتيني (ARS)', currencyPerUSD: '1$ ≈ 1,000 ARS (تقديري — تضخم مرتفع)',
      language: 'الإسبانية', timezone: 'UTC−3', emergencyNumber: '911',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: الأرجنتين (Visa required) — مراجعة 2026'
    },
    mx: {
      code: 'mx', name: 'المكسيك', visaType: 'visa-required', conditional: false,
      duration: 'حتى 180 يوم', cost: '≈ 54$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية + بصمات',
        'التقديم من سفارة المكسيك بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي لآخر 3 شهور + إثبات دخل'
      ],
      notes: 'المكسيك محتاجة تأشيرة مسبقة للمصريين. ملاحظة مهمة: المكسيك بتعفيه لحاملي تأشيرة/إقامة سارية من أمريكا أو كندا أو بريطانيا أو اليابان أو شنغن أو الدول الأعضاء في «التحالف الهادئ». [يحتاج تأكيد: تفاصيل الإعفاء والرسوم].',
      officialLink: 'https://www.gob.mx/sre',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gob.mx/sre', verified: false },
      bestTime: 'نوفمبر – أبريل',
      currency: 'البيزو المكسيكي (MXN)', currencyPerUSD: '1$ ≈ 20 MXN (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−6 (وسط المكسيك)', emergencyNumber: '911',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: المكسيك (Visa required + إعفاء لحاملي تأشيرات محددة) — مراجعة 2026'
    },
    cu: {
      code: 'cu', name: 'كوبا', visaType: 'visa-required', conditional: false,
      duration: '30 يوم (قابلة للتمديد)', cost: '≈ 25 – 75$',
      processingTime: '5 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة/كارت سياحي + صورة شخصية',
        'التقديم من سفارة كوبا بالقاهرة أو عبر البوابة الرسمية',
        'حجز فندق + تذكرة ذهاب وعودة',
        'تأمين صحي إلزامي للسفر لكوبا'
      ],
      notes: 'كوبا محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: هل مصر مؤهلة لمنصة الفيزا الإلكترونية الكوبية الجديدة].',
      officialLink: 'https://evisa.cubaminrex.cu/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.cubaminrex.cu/', verified: false },
      bestTime: 'نوفمبر – أبريل',
      currency: 'البيزو الكوبي (CUP)', currencyPerUSD: '1$ ≈ 24 CUP (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−5', emergencyNumber: '106',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: كوبا (Visa required) — مراجعة 2026'
    },
    cl: {
      code: 'cl', name: 'تشيلي', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 80 – 130$ (تقديري)',
      processingTime: '15 – 30 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة تشيلي بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل + تأمين صحي'
      ],
      notes: 'تشيلي محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: الرسوم + شروط الإثبات المالي].',
      officialLink: 'https://serviciomigraciones.cl/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://serviciomigraciones.cl/', verified: false },
      bestTime: 'نوفمبر – مارس (النصف الجنوبي)',
      currency: 'البيزو التشيلي (CLP)', currencyPerUSD: '1$ ≈ 950 CLP (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−3 / −4', emergencyNumber: '133',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: تشيلي (Visa required) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 6 — الأمريكتان (2/2)
       co, pe, ve, ec, uy
       ========================================================== */
    co: {
      code: 'co', name: 'كولومبيا', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 60 – 100$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'طلب أونلاين عبر بوابة الخارجية الكولومبية + صورة شخصية',
        'التقديم/المقابلة من سفارة كولومبيا (أو قنصلية معتمدة)',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل'
      ],
      notes: 'كولومبيا محتاجة تأشيرة مسبقة للمصريين، والتقديم بيبدأ أونلاين. [يحتاج تأكيد: نوع الفيزا والرسوم].',
      officialLink: 'https://www.cancilleria.gov.co/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.cancilleria.gov.co/', verified: false },
      bestTime: 'ديسمبر – مارس',
      currency: 'البيزو الكولومبي (COP)', currencyPerUSD: '1$ ≈ 4,000 COP (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−5', emergencyNumber: '123',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: كولومبيا (Visa required) — مراجعة 2026'
    },
    pe: {
      code: 'pe', name: 'بيرو', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 30 – 60$ (تقديري)',
      processingTime: '7 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة بيرو بالقاهرة',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل'
      ],
      notes: 'بيرو محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: الرسوم + هل في إعفاء لحاملي تأشيرات أمريكا/شنغن].',
      officialLink: 'https://www.gob.pe/migraciones',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gob.pe/migraciones', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'السول البيروفي (PEN)', currencyPerUSD: '1$ ≈ 3.8 PEN (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−5', emergencyNumber: '105',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: بيرو (Visa required) — مراجعة 2026'
    },
    ve: {
      code: 've', name: 'فنزويلا', visaType: 'visa-required', conditional: false,
      duration: '90 يوم', cost: '≈ 30 – 60$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة فنزويلا (أو سفارة ممثّلة)',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + تأمين صحي'
      ],
      notes: 'فنزويلا محتاجة تأشيرة مسبقة. [يحتاج تأكيد: وضع السفارة بالقاهرة/التمثيل، والأوضاع الأمنية موصى بمراجعتها قبل السفر].',
      officialLink: 'https://mppre.gob.ve/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mppre.gob.ve/', verified: false },
      bestTime: 'ديسمبر – مارس',
      currency: 'البوليفار الفنزويلي (VES)', currencyPerUSD: '1$ ≈ 40 VES (تقديري — سعر متغير)',
      language: 'الإسبانية', timezone: 'UTC−4', emergencyNumber: '911',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: فنزويلا (Visa required) — مراجعة 2026'
    },
    ec: {
      code: 'ec', name: 'الإكوادور', visaType: 'e-visa', conditional: false,
      duration: '90 يوم', cost: '≈ 50 – 100$ (تقديري)',
      processingTime: 'عدة أيام عمل (تقديم أونلاين)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر منصة الفيزا الإلكترونية الرسمية',
        'صورة شخصية + نسخة من الجواز',
        'حجز فندق + تذكرة ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل'
      ],
      notes: 'مصر ضمن قائمة الدول اللي محتاجة تأشيرة للإكوادور، ومتاح التقديم على فيزا إلكترونية (e-Visa). [يحتاج تأكيد: الرسوم ومنصة التقديم الحالية].',
      officialLink: 'https://www.cancilleria.gob.ec/',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.cancilleria.gob.ec/', verified: false },
      bestTime: 'يونيو – سبتمبر (الساحل)، طوال السنة (الأنديز)',
      currency: 'الدولار الأمريكي (USD)', currencyPerUSD: 'الدولار هو العملة الرسمية',
      language: 'الإسبانية', timezone: 'UTC−5 / −6', emergencyNumber: '911',
      source: 'Wikipedia — Visa policy of Ecuador (مصر في قائمة من يحتاجون فيزا ويمكنهم طلب e-Visa) — مراجعة 2026'
    },
    uy: {
      code: 'uy', name: 'أوروغواي', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (عادة 90 يوم)', cost: '≈ 40 – 90$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب تأشيرة + صورة شخصية',
        'التقديم من سفارة/قنصلية أوروغواي',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل'
      ],
      notes: 'مصر مش في قائمة إعفاء أوروغواي للجوازات العادية (الإعفاء المذكور لمصر خاص بالجوازات الدبلوماسية/الرسمية). [يحتاج تأكيد: هل في إعفاء لحاملي تأشيرة أمريكا/كندا/بريطانيا/الاتحاد الأوروبي].',
      officialLink: 'https://www.gub.uy/ministerio-interior/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.gub.uy/ministerio-interior/', verified: false },
      bestTime: 'نوفمبر – مارس (النصف الجنوبي)',
      currency: 'البيزو الأوروغواياني (UYU)', currencyPerUSD: '1$ ≈ 40 UYU (تقديري)',
      language: 'الإسبانية', timezone: 'UTC−3', emergencyNumber: '911',
      source: 'Wikipedia — Visa policy of Uruguay (مصر غير مدرجة في إعفاء الجوازات العادية) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 7 — أفريقيا (شرق) (1/2)
       ke, za, et, rw, sc
       ========================================================== */
    ke: {
      code: 'ke', name: 'كينيا', visaType: 'visa-free', conditional: false,
      duration: '60 يوم', cost: 'مجانًا (معفاة من رسوم تصريح السفر الإلكتروني eTA)',
      processingTime: 'لا يوجد — إعفاء من الـeTA',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة',
        'إثبات مالي كافٍ'
      ],
      notes: 'كينيا ألغت تصريح السفر الإلكتروني (eTA) ورسومه لمعظم الدول الأفريقية (يوليو 2025)، ومصر على قائمة الإعفاء 60 يوم. [يحتاج تأكيد: التنفيذ الفعلي على المنافذ].',
      officialLink: 'https://www.etakenya.go.ke/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.etakenya.go.ke/', verified: false },
      bestTime: 'يوليو – أكتوبر (الهجرة الكبرى)، يناير – فبراير',
      currency: 'الشيلينج الكيني (KES)', currencyPerUSD: '1$ ≈ 129 KES (تقديري)',
      language: 'السواحيلية، الإنجليزية', timezone: 'UTC+3', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Kenya (قائمة إعفاء eTA: مصر = 60 يوم) — مراجعة 2026'
    },
    za: {
      code: 'za', name: 'جنوب أفريقيا', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (عادة 30 – 90 يوم)', cost: '≈ 40 – 80$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 30 يوم بعد المغادرة + صفحتين فارغتين',
        'استمارة طلب تأشيرة (DHA-84) + صورة شخصية',
        'التقديم من سفارة/مراكز تأشيرات جنوب أفريقيا',
        'حجز فندق + تذاكر طيران ذهاب وعودة',
        'كشف حساب بنكي + إثبات دخل',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة'
      ],
      notes: 'جنوب أفريقيا محتاجة تأشيرة مسبقة للمصريين. [يحتاج تأكيد: الرسوم ومراكز التقديم المعتمدة].',
      officialLink: 'https://www.dha.gov.za/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.dha.gov.za/', verified: false },
      bestTime: 'مايو – سبتمبر',
      currency: 'الراند الجنوب أفريقي (ZAR)', currencyPerUSD: '1$ ≈ 18 ZAR (تقديري)',
      language: 'الإنجليزية، الأفريكانية (+لغات رسمية أخرى)', timezone: 'UTC+2', emergencyNumber: '10111',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: جنوب أفريقيا (Visa required) — مراجعة 2026'
    },
    et: {
      code: 'et', name: 'إثيوبيا', visaType: 'e-visa', conditional: false,
      duration: '30 يوم (دخول مفرد) – 90 يوم (متعدد)', cost: '≈ 52$ – 82$',
      processingTime: 'حتى 3 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (evisa.gov.et)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'الدخول من مطار أديس أبابا فقط',
        'كارت دفع دولي للسداد'
      ],
      notes: 'إثيوبيا بتدّي e-Visa سياحية لكل الجنسيات (ومنها مصر)، لكن مصر مستثناة من «الفيزا عند الوصول» الممنوحة لدول الاتحاد الأفريقي → e-Visa إلزامي والدخول من مطار أديس أبابا بس. [يحتاج تأكيد: الرسوم حسب النوع].',
      officialLink: 'https://www.evisa.gov.et/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.evisa.gov.et/', verified: false },
      bestTime: 'أكتوبر – مارس',
      currency: 'البير الإثيوبي (ETB)', currencyPerUSD: '1$ ≈ 130 ETB (تقديري)',
      language: 'الأمهرية', timezone: 'UTC+3', emergencyNumber: '991',
      source: 'Wikipedia — Visa policy of Ethiopia (e-Visa لكل الجنسيات + مصر مستثناة من VOA) — مراجعة 2026'
    },
    rw: {
      code: 'rw', name: 'رواندا', visaType: 'visa-free', conditional: false,
      duration: '30 يوم', cost: 'مجانًا (بدون رسوم تأشيرة)',
      processingTime: 'لا يوجد — دخول بدون تأشيرة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل + صفحة فارغة',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة'
      ],
      notes: 'رواندا بتدّي إعفاء 30 يوم للمصريين (قائمة الإعفاء)، وكمان بتدّي فيزا عند الوصول لمعظم الجنسيات (مجانية لأعضاء الاتحاد الأفريقي). [يحتاج تأكيد: المدة الفعلية على الحدود].',
      officialLink: 'https://www.migration.gov.rw/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.migration.gov.rw/', verified: false },
      bestTime: 'يونيو – سبتمبر (موسم الجفاف)',
      currency: 'الفرنك الرواندي (RWF)', currencyPerUSD: '1$ ≈ 1,400 RWF (تقديري)',
      language: 'الكينيارواندا، الإنجليزية، الفرنسية', timezone: 'UTC+2', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Rwanda (قائمة الإعفاء: مصر = 30 يوم) — مراجعة 2026'
    },
    sc: {
      code: 'sc', name: 'سيشل', visaType: 'e-visa', conditional: false,
      duration: '90 يوم (تصريح إقامة الزائر مجانًا عند الوصول)', cost: '≈ 10 يورو (ETA عادي) – 70 يورو (سريع)',
      processingTime: 'حتى 24 ساعة (المعالجة العادية)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تصريح سفر إلكتروني (ETA) من نظام SEBS قبل السفر',
        'حجز إقامة مؤكد لكل أيام الرحلة',
        'تذكرة ذهاب وعودة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة',
        'إثبات مالي كافٍ'
      ],
      notes: 'سيشل ملهاش «تأشيرة» بالمعنى المعتاد: كل الزوار (ومنهم مصر) لازم ETA إلكتروني مدفوع قبل السفر، وبعدها تصريح إقامة مجاني عند الوصول حتى 3 شهور. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://seychelles.govtas.com/en',
      embassyInEgypt: { address: '', phone: '', website: 'https://seychelles.govtas.com/en', verified: false },
      bestTime: 'أبريل – مايو، أكتوبر – نوفمبر',
      currency: 'الروبية السيشلية (SCR)', currencyPerUSD: '1$ ≈ 14 SCR (تقديري)',
      language: 'الكريولية السيشلية، الإنجليزية، الفرنسية', timezone: 'UTC+4', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Seychelles (ETA إلزامي لكل الجنسيات + Visitor Permit مجاني 90 يوم) — مراجعة 2026'
    },
    mu: {
      code: 'mu', name: 'موريشيوس', visaType: 'visa-free', conditional: false,
      duration: '90 يوم (بحد أقصى 180 يوم في السنة للسياحة)', cost: 'مجانًا (بدون رسوم تأشيرة)',
      processingTime: 'لا يوجد — دخول بدون تأشيرة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة',
        'حجز فندق مؤكد',
        'إثبات مالي (≈ 100$ لليوم الواحد)',
        'نموذج «All-In-One Travel Form» قبل الوصول'
      ],
      notes: 'موريشيوس بتدّي إعفاء تأشيرة 90 يوم للمصريين. [يحتاج تأكيد: نموذج السفر/الصحة قبل الوصول ومدد الإقامة].',
      officialLink: 'https://passport.govmu.org/',
      embassyInEgypt: { address: '', phone: '', website: 'https://passport.govmu.org/', verified: false },
      bestTime: 'مايو – ديسمبر',
      currency: 'الروبية الموريشيوسية (MUR)', currencyPerUSD: '1$ ≈ 46 MUR (تقديري)',
      language: 'الإنجليزية، الفرنسية، الكريولية', timezone: 'UTC+4', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Mauritius (قائمة الإعفاء: مصر = 90 يوم) — مراجعة 2026'
    },
    gh: {
      code: 'gh', name: 'غانا', visaType: 'e-visa', conditional: false,
      duration: '90 يوم', cost: 'مجانًا (تصريح سفر إلكتروني ETA بدون رسوم)',
      processingTime: '2 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تسجيل أونلاين على بوابة غانا الرسمية للحصول على ETA',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء (إلزامية)'
      ],
      notes: 'غانا بتدّي «تصريح سفر إلكتروني» (ETA) مجاني لمدة 90 يوم لكل دول الاتحاد الأفريقي ومنها مصر (الإعفاء الكامل لدول الإيكواس + 3 دول بس). شهادة الحمى الصفراء مطلوبة. [يحتاج تأكيد: خطوات البوابة الرسمية].',
      officialLink: 'https://evisa.immigration.gov.gh/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.immigration.gov.gh/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'السيدي الغاني (GHS)', currencyPerUSD: '1$ ≈ 15 GHS (تقديري)',
      language: 'الإنجليزية', timezone: 'UTC+0', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Ghana (ETA مجاني 90 يوم لدول الاتحاد الأفريقي) — مراجعة 2026'
    },
    ng: {
      code: 'ng', name: 'نيجيريا', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (عادة 30 – 90 يوم)', cost: '≈ 100 – 200$ (تقديري)',
      processingTime: '10 – 20 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'طلب أونلاين على بوابة الهجرة النيجيرية + قسيمة سداد',
        'صورة شخصية + خطاب دعوة/حجز فندقي',
        'تذاكر طيران + كشف حساب بنكي',
        'شهادة الحمى الصفراء (إلزامية)'
      ],
      notes: 'نيجيريا محتاجة تأشيرة مسبقة للمصريين؛ الطلب بيبدأ أونلاين لكن الموافقة/الختم من السفارة. [يحتاج تأكيد: الرسوم ونظام الفيزا عند الوصول للأعمال].',
      officialLink: 'https://immigration.gov.ng/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://immigration.gov.ng/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'النيرا النيجيري (NGN)', currencyPerUSD: '1$ ≈ 1,600 NGN (تقديري)',
      language: 'الإنجليزية', timezone: 'UTC+1', emergencyNumber: '112',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: نيجيريا (Visa required) — مراجعة 2026'
    },
    tz: {
      code: 'tz', name: 'تنزانيا', visaType: 'e-visa', conditional: false,
      duration: '90 يوم', cost: '≈ 50$ (e-Visa سياحي)',
      processingTime: '3 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (visa.immigration.go.tz)',
        'صورة شخصية + بيانات الرحلة',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة',
        'إثبات مالي كافٍ'
      ],
      notes: 'تنزانيا مش بتعفى مصر → لازم e-Visa مسبق، وكمان متاح فيزا عند الوصول في المطارات. [يحتاج تأكيد: الرسوم حسب النوع ومنفذ الدخول].',
      officialLink: 'https://visa.immigration.go.tz/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://visa.immigration.go.tz/', verified: false },
      bestTime: 'يونيو – أكتوبر (موسم الجفاف)',
      currency: 'الشيلينج التنزاني (TZS)', currencyPerUSD: '1$ ≈ 2,600 TZS (تقديري)',
      language: 'السواحيلية، الإنجليزية', timezone: 'UTC+3', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Tanzania (مصر غير مدرجة في الإعفاء؛ e-Visa/VOA متاح) — مراجعة 2026'
    },
    ug: {
      code: 'ug', name: 'أوغندا', visaType: 'e-visa', conditional: false,
      duration: '90 يوم (سياحي)', cost: '≈ 50$',
      processingTime: '3 – 7 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (visas.immigration.go.ug)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء (إلزامية)',
        'إثبات مالي كافٍ'
      ],
      notes: 'أوغندا بتدّي فيزا إلكترونية 3 شهور للمصريين. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://visas.immigration.go.ug/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://visas.immigration.go.ug/', verified: false },
      bestTime: 'ديسمبر – فبراير، يونيو – سبتمبر',
      currency: 'الشيلينج الأوغندي (UGX)', currencyPerUSD: '1$ ≈ 3,700 UGX (تقديري)',
      language: 'الإنجليزية، السواحيلية', timezone: 'UTC+3', emergencyNumber: '999',
      source: 'Wikipedia — Visa requirements for Egyptian citizens: أوغندا (eVisa 3 شهور) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 8 — أفريقيا (جنوب وغرب) (1/2)
       zm, zw, mz, na, bw
       ========================================================== */
    zm: {
      code: 'zm', name: 'زامبيا', visaType: 'e-visa', conditional: false,
      duration: 'حسب الفيزا (عادة 30 – 90 يوم) — [يحتاج تأكيد]', cost: '≈ 25 – 50$ (تقديري)',
      processingTime: '3 – 7 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر بوابة الهجرة الزامبية (e-Visa)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة',
        'إثبات مالي كافٍ'
      ],
      notes: 'زامبيا مش في قائمة الإعفاء لمصر → فيزا إلكترونية (أو عند الوصول) مسبقًا. فيه كمان «فيزا KAZA» الموحّدة مع زيمبابوي لجنسيات محددة. [يحتاج تأكيد: الرسوم والمدد].',
      officialLink: 'https://eservices.zambiaimmigration.gov.zm/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://eservices.zambiaimmigration.gov.zm/', verified: false },
      bestTime: 'مايو – أكتوبر (موسم الجفاف)',
      currency: 'الكواتشا الزامبية (ZMW)', currencyPerUSD: '1$ ≈ 27 ZMW (تقديري)',
      language: 'الإنجليزية', timezone: 'UTC+2', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Zambia (مصر غير مدرجة في الإعفاء؛ eVisa/VOA متاح) — مراجعة 2026'
    },
    zw: {
      code: 'zw', name: 'زيمبابوي', visaType: 'on-arrival', conditional: false,
      duration: 'حسب التأشيرة (عادة 30 يوم عند الوصول)', cost: '≈ 30 – 70$',
      processingTime: 'فوري عند الوصول (أو e-Visa قبل السفر)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم التأشيرة عند الوصول',
        'إثبات مالي كافٍ'
      ],
      notes: 'زيمبابوي بتدّي فيزا عند الوصول ومصر مدرجة على قائمة الـVOA، وكمان متاح e-Visa أونلاين بديل. [يحتاج تأكيد: الرسوم والمدة].',
      officialLink: 'https://www.evisa.gov.zw/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.evisa.gov.zw/', verified: false },
      bestTime: 'مايو – أكتوبر (موسم الجفاف)',
      currency: 'الدولار الأمريكي (USD) مستخدم عمليًا + الزيج (ZiG)', currencyPerUSD: 'الدولار مقبول على نطاق واسع',
      language: 'الإنجليزية، الشونا، النديبيل', timezone: 'UTC+2', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Zimbabwe (قائمة الفيزا عند الوصول: مصر مدرجة) — مراجعة 2026'
    },
    mz: {
      code: 'mz', name: 'موزمبيق', visaType: 'on-arrival', conditional: false,
      duration: '30 يوم (قابل للتمديد)', cost: '≈ 50$ (عند الوصول)',
      processingTime: 'فوري عند الوصول (أو e-Visa قبل السفر)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة + إثبات الغرض من الزيارة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم التأشيرة عند الوصول',
        'إثبات مالي كافٍ'
      ],
      notes: 'موزمبيق بتدّي فيزا عند الوصول لمعظم الجنسيات (مصر مش في قائمة المستثنين)، وكمان متاح e-Visa أونلاين. [يحتاج تأكيد: الرسوم الحالية والمدد].',
      officialLink: 'https://evisa.gov.mz/',
      embassyInEgypt: { address: '', phone: '', website: 'https://evisa.gov.mz/', verified: false },
      bestTime: 'مايو – أكتوبر (موسم الجفاف)',
      currency: 'المتيكال الموزمبيقي (MZN)', currencyPerUSD: '1$ ≈ 64 MZN (تقديري)',
      language: 'البرتغالية', timezone: 'UTC+2', emergencyNumber: '119',
      source: 'Wikipedia — Visa policy of Mozambique (مصر غير مستثناة من VOA؛ eVisa متاح) — مراجعة 2026'
    },
    na: {
      code: 'na', name: 'ناميبيا', visaType: 'e-visa', conditional: false,
      duration: 'حسب الفيزا (عادة 30 – 90 يوم) — [يحتاج تأكيد]', cost: '≈ 25 – 50$ (تقديري)',
      processingTime: '3 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين أو من سفارة/ممثلية ناميبيا',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'ناميبيا مش في قائمة الإعفاء لمصر (وفي أبريل 2025 ألغت الإعفاء عن عشرات الدول). ناميبيا بتتيح التقديم أونلاين بدون زيارة سفارة، وأعلنت إتاحة فيزا عند الوصول لحاملي الجوازات الأفريقية. [يحتاج تأكيد: هل مصر مشمولة بالـVOA حاليًا والرسوم].',
      officialLink: 'https://mha.gov.na/',
      embassyInEgypt: { address: '', phone: '', website: 'https://mha.gov.na/', verified: false },
      bestTime: 'مايو – أكتوبر (موسم الجفاف)',
      currency: 'الدولار الناميبي (NAD)', currencyPerUSD: '1$ ≈ 18 NAD (تقديري)',
      language: 'الإنجليزية', timezone: 'UTC+2', emergencyNumber: '10111',
      source: 'Wikipedia — Visa policy of Namibia (مصر غير مدرجة في الإعفاء + تعديلات 2025) — مراجعة 2026'
    },
    bw: {
      code: 'bw', name: 'بوتسوانا', visaType: 'e-visa', conditional: false,
      duration: 'حسب الفيزا (عادة حتى 90 يوم) — [يحتاج تأكيد]', cost: '≈ 30 – 50$ (تقديري)',
      processingTime: '5 – 15 يوم عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر بوابة الفيزا الإلكترونية (evisa.gov.bw)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'كشف حساب بنكي + إثبات دخل'
      ],
      notes: 'بوتسوانا محتاجة تأشيرة مسبقة للمصريين، ومتاح التقديم على فيزا إلكترونية (e-Visa) من 2021 لكل الدول اللي كانت محتاجة فيزا. [يحتاج تأكيد: الرسوم والمدة].',
      officialLink: 'https://evisa.gov.bw/',
      embassyInEgypt: { address: '', phone: '', website: 'https://evisa.gov.bw/', verified: false },
      bestTime: 'مايو – سبتمبر (موسم الجفاف والحيوانات)',
      currency: 'البولا البوتسوانية (BWP)', currencyPerUSD: '1$ ≈ 13.5 BWP (تقديري)',
      language: 'الإنجليزية، التسوانا', timezone: 'UTC+2', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Botswana (مصر غير مدرجة في الإعفاء؛ e-Visa متاح) — مراجعة 2026'
    },
    sn: {
      code: 'sn', name: 'السنغال', visaType: 'on-arrival', conditional: false,
      duration: '30 يوم (فيزا عند الوصول — مطار داكار فقط)', cost: '≈ 50$ (تقديري)',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة ذهاب وعودة مؤكدة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم التأشيرة عند الوصول',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة'
      ],
      notes: 'السنغال بتدّي فيزا عند الوصول لمدة شهر في مطار داكار الدولي بس (مش الحدود البرية)، ومصر مؤهلة كدولة عضو في الاتحاد الأفريقي ومش مطلوب منها تأشيرة مسبقة. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://www.diplomatie.gouv.sn/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.diplomatie.gouv.sn/', verified: false },
      bestTime: 'نوفمبر – مايو (موسم الجفاف)',
      currency: 'الفرنك الأفريقي الغربي (XOF)', currencyPerUSD: '1$ ≈ 600 XOF (تقديري)',
      language: 'الفرنسية', timezone: 'UTC+0', emergencyNumber: '17',
      source: 'Wikipedia — Visa policy of Senegal (قائمة الفيزا عند الوصول: دول الاتحاد الأفريقي ومنها مصر) — مراجعة 2026'
    },
    ci: {
      code: 'ci', name: 'كوت ديفوار', visaType: 'e-visa', conditional: false,
      duration: '90 يوم', cost: '≈ 73 يورو',
      processingTime: 'حتى 48 ساعة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين قبل السفر (بوابة e-Visa الرسمية)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'استلام التأشيرة عند الوصول بمطار أبيدجان',
        'شهادة الحمى الصفراء (إلزامية)'
      ],
      notes: 'كوت ديفوار محتاجة فيزا للمصريين، ومتاح تقديم أونلاين (e-Visa) واستلامها في مطار أبيدجان بورت بوييه، وصالحة 90 يوم. [يحتاج تأكيد: الرسوم الحالية + هل مطلوب موافقة أمنية مسبقة لبعض الجنسيات].',
      officialLink: 'https://snedai.com/e-visa/',
      embassyInEgypt: { address: '', phone: '', website: 'https://snedai.com/e-visa/', verified: false },
      bestTime: 'نوفمبر – مارس (موسم الجفاف)',
      currency: 'الفرنك الأفريقي الغربي (XOF)', currencyPerUSD: '1$ ≈ 600 XOF (تقديري)',
      language: 'الفرنسية', timezone: 'UTC+0', emergencyNumber: '111',
      source: 'Wikipedia — Visa policy of Ivory Coast (e-Visa في المطار 90 يوم / 73 يورو) — مراجعة 2026'
    },
    cm: {
      code: 'cm', name: 'الكاميرون', visaType: 'e-visa', conditional: false,
      duration: 'حسب الفيزا (متاح 180 يوم أو سنة) — [يحتاج تأكيد]', cost: '≈ 153 يورو (180 يوم) / 305 يورو (سنة)',
      processingTime: '≈ 72 ساعة من السداد (يُفضّل التقديم 10 أيام قبل السفر)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (evisacam.cm)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء (إلزامية)',
        'كارت دفع دولي للسداد'
      ],
      notes: 'الكاميرون محتاجة فيزا مسبقة للمصريين (الإعفاء لـ7 دول بس)، ومتاح نظام e-Visa لكل الدول غير المعفاة، والرسوم مرتفعة نسبيًا وشهادة الحمى الصفراء إلزامية. [يحتاج تأكيد: فئات الرسوم النهائية].',
      officialLink: 'https://www.evisacam.cm/ords/dl_portal/r/public_portal/home',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://www.evisacam.cm/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الفرنك الأفريقي الوسطى (XAF)', currencyPerUSD: '1$ ≈ 600 XAF (تقديري)',
      language: 'الفرنسية، الإنجليزية', timezone: 'UTC+1', emergencyNumber: '113',
      source: 'Wikipedia — Visa policy of Cameroon (e-Visa لكل غير المعفاة + جدول الرسوم) — مراجعة 2026'
    },
    ga: {
      code: 'ga', name: 'الجابون', visaType: 'e-visa', conditional: false,
      duration: '1 – 3 شهور (دخول مفرد) / 6 شهور (متعدد)', cost: '≈ 70 يورو (1–3 شهور) / 185 يورو (6 شهور) + 15 يورو رسوم ملف',
      processingTime: '≈ 72 ساعة من التقديم',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر البوابة الرسمية (evisa.dgdi.ga)',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'الدخول من مطار ليبرفيل الدولي فقط',
        'شهادة الحمى الصفراء + كارت دفع دولي'
      ],
      notes: 'الجابون محتاجة فيزا مسبقة للمصريين (مصر مش في قائمة الإعفاء ولا قائمة الفيزا عند الوصول)، والفيزا الإلكترونية متاحة لأي جنسية محتاجة فيزا وصالحة للدخول من مطار ليبرفيل بس. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://evisa.dgdi.ga/',
      embassyInEgypt: { address: '', phone: '', website: 'https://evisa.dgdi.ga/', verified: false },
      bestTime: 'يونيو – سبتمبر (موسم الجفاف)',
      currency: 'الفرنك الأفريقي الوسطى (XAF)', currencyPerUSD: '1$ ≈ 600 XAF (تقديري)',
      language: 'الفرنسية', timezone: 'UTC+1', emergencyNumber: '18',
      source: 'Wikipedia — Visa policy of Gabon (e-Visa لأي جنسية تحتاج فيزا) — مراجعة 2026'
    },
    mg: {
      code: 'mg', name: 'مدغشقر', visaType: 'on-arrival', conditional: false,
      duration: '15 / 30 / 60 / 90 يوم حسب الرسوم المدفوعة', cost: '≈ 30 يورو (15 يوم) حتى ≈ 55$ (90 يوم)',
      processingTime: 'فوري عند الوصول (أو e-Visa أونلاين)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة',
        'حجز فندق/إثبات إقامة',
        'دفع رسوم التأشيرة عند الوصول',
        'إثبات مالي كافٍ'
      ],
      notes: 'مدغشقر بتدّي فيزا عند الوصول لمدة تصل 90 يوم لكل الجنسيات تقريبًا (فلسطين فقط مستثناة) في المطارات الدولية، وكمان متاح e-Visa أونلاين. [يحتاج تأكيد: الرسوم بعد زيادات 2026].',
      officialLink: 'https://evisamada-mg.com/',
      embassyInEgypt: { address: '', phone: '', website: 'https://evisamada-mg.com/', verified: false },
      bestTime: 'أبريل – نوفمبر (موسم الجفاف)',
      currency: 'الأرياري الملغاشي (MGA)', currencyPerUSD: '1$ ≈ 4,500 MGA (تقديري)',
      language: 'الملغاشية، الفرنسية', timezone: 'UTC+3', emergencyNumber: '117',
      source: 'Wikipedia — Visa policy of Madagascar (VOA/e-Visa لكل الجنسيات) — مراجعة 2026'
    },
    /* ==========================================================
       المجموعة 9 — الشرق الأوسط (1/2)
       kw, qa, bh
       ========================================================== */
    kw: {
      code: 'kw', name: 'الكويت', visaType: 'visa-required', conditional: true,
      duration: 'حسب التأشيرة (عادة 30 يوم)', cost: '≈ 3 – 25 دينار كويتي حسب النوع',
      processingTime: '1 – 7 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'حجز فندق + تذكرة عودة',
        'كشف حساب بنكي + إثبات دخل',
        'صورة شخصية + نموذج الطلب',
        'تأشيرة/إقامة سارية من شنغن أو بريطانيا أو أمريكا (للمسار المبسّط e-Visa)'
      ],
      notes: 'الكويت مش بتدّي فيزا بدون شرط للمصريين (مصر مش على قوائم الـVOA/e-Visa العادية). المتاح: (1) فيزا عند الوصول لمدة شهر لحاملي تأكيد من شركة الطيران بغرض السياحة، (2) e-Visa مبسّط لحاملي تأشيرة/إقامة سارية من شنغن أو بريطانيا أو أمريكا أو إقامة خليجية. [يحتاج تأكيد: التطبيق الفعلي والرسوم].',
      officialLink: 'https://evisa.moi.gov.kw/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.moi.gov.kw/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الدينار الكويتي (KWD)', currencyPerUSD: '1$ ≈ 0.31 KWD (تقديري)',
      language: 'العربية', timezone: 'UTC+3', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Kuwait (مصر غير مدرجة في قوائم VOA/e-Visa العادية؛ VOA شهر بتأكيد شركة الطيران + e-Visa مشروط) — مراجعة 2026'
    },
    qa: {
      code: 'qa', name: 'قطر', visaType: 'e-visa', conditional: false,
      duration: '30 يوم (قابلة للتمديد 30 يوم كمان) — [يحتاج تأكيد]', cost: '≈ 100 ريال قطري (≈ 27$)',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين (منصة Hayya / بوابة وزارة الداخلية)',
        'حجز فندق + تذكرة عودة',
        'كشف حساب بنكي + إثبات دخل',
        'صورة شخصية'
      ],
      notes: 'قطر مش بتعفى مصر ولا بتدّيها فيزا عند الوصول في القوائم الحالية → لازم فيزا إلكترونية (Hayya) قبل السفر. [يحتاج تأكيد: نوع التأشيرة والمدة من البوابة الرسمية].',
      officialLink: 'https://portal.moi.gov.qa/qatarvisas/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://portal.moi.gov.qa/qatarvisas/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الريال القطري (QAR)', currencyPerUSD: '1$ ≈ 3.64 QAR (ثابت)',
      language: 'العربية', timezone: 'UTC+3', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Qatar (مصر غير مدرجة في قائمتي الإعفاء والفيزا عند الوصول) — مراجعة 2026'
    },
    bh: {
      code: 'bh', name: 'البحرين', visaType: 'e-visa', conditional: false,
      duration: 'أسبوعان (دخول مفرد) / شهر (متعدد) / 90 يوم حسب نوع الفيزا', cost: '≈ 9 – 44 دينار بحريني',
      processingTime: '3 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين (evisa.gov.bh)',
        'تذكرة عودة مؤكدة + حجز فندق',
        'كشف حساب بنكي لآخر 3 شهور برصيد ≥ 1000$',
        'صورة من صفحة الجواز'
      ],
      notes: 'البحرين بتدّي فيزا إلكترونية/عند الوصول لمعظم الجنسيات، والقائمة غير المؤهلة محدودة (إيران، كوسوفو، كوريا الشمالية). [يحتاج تأكيد: هل مصر مؤهلة حاليًا للـVOA/e-Visa].',
      officialLink: 'https://www.evisa.gov.bh/',
      embassyInEgypt: { address: '', phone: '', website: 'https://www.evisa.gov.bh/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الدينار البحريني (BHD)', currencyPerUSD: '1$ ≈ 0.38 BHD (ثابت)',
      language: 'العربية', timezone: 'UTC+3', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Bahrain (e-Visa/VOA لمعظم الجنسيات + قائمة غير المؤهلة) — مراجعة 2026'
    },
    om: {
      code: 'om', name: 'عُمان', visaType: 'visa-required', conditional: true,
      duration: 'حسب التأشيرة (14 يوم للإعفاء المشروط)', cost: '≈ 20 ريال عُماني (فيزا إلكترونية)',
      processingTime: '1 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'حجز فندق + تذكرة عودة + تأمين صحي',
        'كشف حساب بنكي + إثبات دخل',
        'تأشيرة/إقامة سارية من شنغن/أمريكا/كندا/بريطانيا/اليابان/أستراليا (للإعفاء المشروط 14 يوم)'
      ],
      notes: 'عُمان مش بتعفى مصر في قائمة الـ14 يوم (103 دول)، ومصر مش في قوائم الـe-Visa العادية. المتاح: إعفاء مشروط 14 يوم لحاملي تأشيرة سارية من شنغن/أمريكا/كندا/بريطانيا/اليابان/أستراليا أو المقيمين في الخليج بمهنة مؤهلة، وإلا لازم تأشيرة. [يحتاج تأكيد: نوع الفيزا والرسوم].',
      officialLink: 'https://evisa.rop.gov.om/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.rop.gov.om/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الريال العُماني (OMR)', currencyPerUSD: '1$ ≈ 0.385 OMR (ثابت)',
      language: 'العربية', timezone: 'UTC+4', emergencyNumber: '9999',
      source: 'Wikipedia — Visa policy of Oman (قائمة «Substitute visa» تشمل مصر — إعفاء مشروط 14 يوم) — مراجعة 2026'
    },
    iq: {
      code: 'iq', name: 'العراق', visaType: 'e-visa', conditional: false,
      duration: '30 – 60 يوم حسب نوع التأشيرة', cost: '≈ 40 – 100$ (تقديري)',
      processingTime: '3 – 10 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر منصة الفيزا الإلكترونية العراقية الرسمية',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'إثبات مالي كافٍ'
      ],
      notes: 'العراق أوقفت الفيزا عند الوصول (من مارس 2025) واعتمدت الفيزا الإلكترونية للدخول لكل العراق. تنبيه: في إقليم كردستان مصر مدرجة في قائمة الجنسيات غير المؤهلة للـe-Visa عن طريق كفيل (List B). [يحتاج تأكيد: خطوات المنصة الرسمية].',
      officialLink: 'https://mofa.gov.iq/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mofa.gov.iq/', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الدينار العراقي (IQD)', currencyPerUSD: '1$ ≈ 1,310 IQD (تقديري)',
      language: 'العربية، الكردية', timezone: 'UTC+3', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Iraq (إيقاف VOA + e-Visa من 2025 + قائمة كردستان) — مراجعة 2026'
    },
    sy: {
      code: 'sy', name: 'سوريا', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (عادة 30 يوم)', cost: '[يحتاج تأكيد] (فيزا عند الوصول/رسوم بالمثل)',
      processingTime: 'غير محدد — حسب السفارة',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب + صورة شخصية',
        'التقديم من السفارة السورية (أو عند الوصول حسب الحالة)',
        'حجز فندق/إثبات إقامة + تذكرة عودة',
        'مستندات إضافية/تحاليل تُطلب أحيانًا'
      ],
      notes: 'سوريا بتطبّق «مبدأ التعامل بالمثل» وسياستها غير مستقرة: بعض الجنسيات بتدخل بدون تأشيرة أو بفيزا عند الوصول عبر دمشق وحلب، والباقي محتاج تأشيرة من السفارة (منصة الـe-Visa متوقفة حاليًا). [يحتاج تأكيد: وضع المصريين تحديدًا].',
      officialLink: 'https://mofaex.gov.sy/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mofaex.gov.sy/', verified: false },
      bestTime: '[يحتاج تأكيد]',
      currency: 'الليرة السورية (SYP)', currencyPerUSD: '1$ ≈ 13,000 SYP (تقديري — سعر متغير)',
      language: 'العربية', timezone: 'UTC+3', emergencyNumber: '112',
      source: 'Wikipedia — Visa policy of Syria (سياسة بالمثل؛ e-Visa متوقفة؛ فيزا عند الوصول حسب الجنسية) — مراجعة 2026'
    },
    ye: {
      code: 'ye', name: 'اليمن', visaType: 'on-arrival', conditional: false,
      duration: 'حتى 3 شهور (فيزا عند الوصول)', cost: '[يحتاج تأكيد]',
      processingTime: 'فوري عند الوصول',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'الوصول المباشر من مصر (شرط لفيزا الوصول)',
        'تذكرة عودة/متابعة',
        'حجز فندق/إثبات إقامة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة'
      ],
      notes: 'اليمن بتدّي فيزا عند الوصول (تصل 3 شهور) للمصريين بشرط الوصول مباشرة من مصر. من يوليو 2025 فيه نظام e-Visa للمجموعات السياحية المباعة عن طريق وكالات معتمدة. ⚠️ تنبيه: الأوضاع الأمنية غير مستقرة — راجع توصيات وزارة الخارجية. [يحتاج تأكيد: الرسوم].',
      officialLink: 'https://mofa.gov.ye/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mofa.gov.ye/', verified: false },
      bestTime: '[يحتاج تأكيد] (تنبيه أمني)',
      currency: 'الريال اليمني (YER)', currencyPerUSD: '1$ ≈ 530 YER (تقديري — سعر متغير)',
      language: 'العربية', timezone: 'UTC+3', emergencyNumber: '199',
      source: 'Wikipedia — Visa policy of Yemen (قائمة الفيزا عند الوصول: مصر مدرجة بشرط الوصول من مصر) — مراجعة 2026'
    },
    sd: {
      code: 'sd', name: 'السودان', visaType: 'visa-free', conditional: true,
      duration: 'فترة غير محددة (بدون تأشيرة)', cost: 'مجانًا (بدون رسوم تأشيرة)',
      processingTime: 'لا يوجد — دخول بدون تأشيرة (باستثناء الرجال 18–49 سنة)',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تذكرة عودة/متابعة',
        'إثبات إقامة/عنوان في السودان',
        'تسجيل في الشرطة خلال 24 ساعة من الوصول'
      ],
      notes: 'المصريون معفيون من تأشيرة السودان لفترة غير محددة، مع استثناء الرجال من 18 لـ49 سنة (دول محتاجين تأشيرة مسبقة). ⚠️ تنبيه: الأوضاع الأمنية غير مستقرة — راجع توصيات وزارة الخارجية قبل أي سفر.',
      officialLink: 'https://mofa.gov.sd/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://mofa.gov.sd/', verified: false },
      bestTime: '[يحتاج تأكيد] (تنبيه أمني)',
      currency: 'الجنيه السوداني (SDG)', currencyPerUSD: '1$ ≈ 600 SDG (تقديري — سعر متغير)',
      language: 'العربية، الإنجليزية', timezone: 'UTC+2', emergencyNumber: '999',
      source: 'Wikipedia — Visa policy of Sudan (قائمة الإعفاء: مصر — فترة غير محددة باستثناء الرجال 18–49) — مراجعة 2026'
    },
    ly: {
      code: 'ly', name: 'ليبيا', visaType: 'visa-required', conditional: false,
      duration: 'حسب التأشيرة (عادة 30 يوم)', cost: '[يحتاج تأكيد]',
      processingTime: 'غير محدد — حسب السفارة/الكفيل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'استمارة طلب + صورة شخصية',
        'دعوة/كفيل رسمي (شرط أساسي في العادة)',
        'حجز فندق + تذكرة عودة',
        'موافقة أمنية مسبقة (تُطلب عمليًا)'
      ],
      notes: 'ليبيا محتاجة تأشيرة للمصريين (مصر مش في قائمة الإعفاء). فيه منصة e-Visa ليبية لكنها مشروطة بكفيل/راعي رسمي. ⚠️ تنبيه: وزارة الخارجية المصرية بتحذّر من السفر لليبيا حاليًا. [يحتاج تأكيد: هل مصر مؤهلة للـe-Visa الليبي].',
      officialLink: 'https://evisa.gov.ly/',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://evisa.gov.ly/', verified: false },
      bestTime: '[يحتاج تأكيد] (تنبيه أمني)',
      currency: 'الدينار الليبي (LYD)', currencyPerUSD: '1$ ≈ 4.8 LYD (تقديري)',
      language: 'العربية', timezone: 'UTC+2', emergencyNumber: '1515',
      source: 'Wikipedia — Visa policy of Libya (مصر غير مدرجة في الإعفاء؛ eVisa بكفيل/راعي) — مراجعة 2026'
    },
    mr: {
      code: 'mr', name: 'موريتانيا', visaType: 'e-visa', conditional: false,
      duration: '30 – 90 يوم حسب نوع التأشيرة', cost: '≈ 55 – 100$ (تقديري)',
      processingTime: '2 – 5 أيام عمل',
      requirements: [
        'جواز سفر ساري 6 شهور على الأقل',
        'تقديم أونلاين عبر منصة e-Visa الموريتانية قبل السفر',
        'صورة شخصية + بيانات الجواز',
        'حجز فندق + تذكرة عودة',
        'شهادة الحمى الصفراء لو قادم من منطقة موبوءة'
      ],
      notes: 'من يناير 2025 موريتانيا بقت تلزم كل الجنسيات اللي محتاجة تأشيرة (ومنها مصر) باستخراج e-Visa أونلاين قبل السفر؛ والسفارات مبقتش بتصدر تأشيرات والفيزا عند الوصول اتوقفت. [يحتاج تأكيد: الرسوم الحالية].',
      officialLink: 'https://anrpts.gov.mr/en',
      embassyInEgypt: { address: 'القاهرة', phone: '', website: 'https://anrpts.gov.mr/en', verified: false },
      bestTime: 'نوفمبر – مارس',
      currency: 'الأوقية الموريتانية (MRU)', currencyPerUSD: '1$ ≈ 39 MRU (تقديري)',
      language: 'العربية، الفرنسية', timezone: 'UTC+0', emergencyNumber: '117',
      source: 'Wikipedia — Visa policy of Mauritania (e-Visa إلزامي لكل من يحتاج فيزا من يناير 2025) — مراجعة 2026'
    },
  },

  /* ==========================================================
     تصنيفات جاهزة للفلترة السريعة (مبنية على visaType)
     تنبيه: tr و ma و kw و om و sd عليها شرط (تأشيرة سابقة/استثناءات)
     — راجع حقل notes لكل دولة قبل الاعتماد على التصنيف.
     ========================================================== */
  categories: {
    visaFree:  ['jo', 'my', 'hk', 'mo', 'ke', 'rw', 'mu', 'sd'],
    eVisa:     ['tr', 'ae', 'th', 'ge', 'ma', 'al', 'lk', 'mm', 'id', 'vn', 'kh', 'la',
                'ec', 'et', 'sc', 'gh', 'tz', 'ug', 'zm', 'na', 'bw', 'ci', 'cm', 'ga',
                'qa', 'bh', 'iq', 'mr'],
    onArrival: ['mv', 'np', 'tl', 'zw', 'mz', 'sn', 'mg', 'ye'],
    required:  ['sa', 'az', 'tn', 'ie', 'rs', 'cy', 'mk', 'ba', 'in', 'bd', 'bt', 'pk',
                'tw', 'sg', 'ph', 'bn', 'kp', 'br', 'ar', 'mx', 'cu', 'cl', 'co', 'pe',
                've', 'uy', 'za', 'ng', 'kw', 'om', 'sy', 'ly'],
    schengen:  ['gr', 'pt', 'ch', 'at', 'be', 'nl', 'se', 'no', 'dk', 'pl', 'cz', 'hu',
                'ro', 'hr', 'bg', 'si', 'sk', 'ee', 'lv', 'lt', 'fi', 'is', 'lu', 'mt']
  }
};
