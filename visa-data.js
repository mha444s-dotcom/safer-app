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
    }

  },

  /* ==========================================================
     تصنيفات جاهزة للفلترة السريعة (مبنية على visaType)
     تنبيه: tr و ma «فيزا إلكترونية مشروطة» (بتحتاج تأشيرة سابقة)
     ========================================================== */
  categories: {
    visaFree:  ['my', 'jo'],
    eVisa:     ['tr', 'ae', 'th', 'ge', 'ma'],
    onArrival: [],
    required:  ['sa', 'az', 'tn']
  }
};
