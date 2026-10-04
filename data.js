/* ============================================================
   SAFR APP - DATA.JS
   بيانات القارات والدول
   ============================================================ */

/* ============================================================
   1. CONTINENT INFO
   معلومات القارات الستة
   ============================================================ */
const continentInfo = {
  europe:   { name:'أوروبا',        icon:'🇪🇺' },
  arab:     { name:'الدول العربية',  icon:'🕌' },
  americas: { name:'الأمريكتين',    icon:'🌎' },
  asia:     { name:'آسيا',          icon:'🌏' },
  africa:   { name:'أفريقيا',       icon:'🌍' },
  oceania:  { name:'أوقيانوسيا',    icon:'🇦🇺' }
};

/* ============================================================
   2. COUNTRIES DATA
   196 دولة بإحداثيات GPS حقيقية (lat, lng)
   ============================================================ */
const countries = [

  /* ==================== EUROPE - أوروبا ==================== */
  {name:'ألمانيا', code:'de', continent:'europe', capital:'برلين', language:'الألمانية', currency:'يورو (EUR)', population:'84 مليون', visas:['سياحة','دراسة','عمل','إقامة'], unis:'+400 جامعة', fees:'€0 - €20,000', scholarships:'نعم، متعددة', housing:'€300 - €800/شهر', living:'€250 - €450/شهر', total:'€550 - €1,250/شهر', popular:true, latlng:[51.1657, 10.4515]},
  {name:'بريطانيا', code:'gb', continent:'europe', capital:'لندن', language:'الإنجليزية', currency:'جنيه إسترليني (GBP)', population:'67 مليون', visas:['سياحة','دراسة','عمل'], unis:'+150 جامعة', fees:'£10,000 - £30,000', scholarships:'نعم، محدودة', housing:'£500 - £1,200/شهر', living:'£350 - £600/شهر', total:'£850 - £1,800/شهر', popular:true, latlng:[55.3781, -3.4360]},
  {name:'فرنسا', code:'fr', continent:'europe', capital:'باريس', language:'الفرنسية', currency:'يورو (EUR)', population:'68 مليون', visas:['سياحة','دراسة','عمل'], unis:'+200 جامعة', fees:'€200 - €15,000', scholarships:'نعم، متعددة', housing:'€400 - €900/شهر', living:'€250 - €500/شهر', total:'€650 - €1,400/شهر', popular:false, latlng:[46.6034, 1.8883]},
  {name:'إيطاليا', code:'it', continent:'europe', capital:'روما', language:'الإيطالية', currency:'يورو (EUR)', population:'59 مليون', visas:['سياحة','دراسة','عمل'], unis:'+100 جامعة', fees:'€200 - €12,000', scholarships:'نعم، متعددة', housing:'€300 - €700/شهر', living:'€200 - €450/شهر', total:'€500 - €1,150/شهر', popular:true, latlng:[41.8719, 12.5674]},
  {name:'إسبانيا', code:'es', continent:'europe', capital:'مدريد', language:'الإسبانية', currency:'يورو (EUR)', population:'48 مليون', visas:['سياحة','دراسة','عمل'], unis:'+80 جامعة', fees:'€500 - €12,000', scholarships:'نعم، محدودة', housing:'€300 - €800/شهر', living:'€200 - €450/شهر', total:'€500 - €1,250/شهر', popular:false, latlng:[40.4637, -3.7492]},
  {name:'هولندا', code:'nl', continent:'europe', capital:'أمستردام', language:'الهولندية', currency:'يورو (EUR)', population:'18 مليون', visas:['سياحة','دراسة','عمل'], unis:'+50 جامعة', fees:'€2,000 - €15,000', scholarships:'نعم، متعددة', housing:'€400 - €900/شهر', living:'€250 - €500/شهر', total:'€650 - €1,400/شهر', popular:false, latlng:[52.1326, 5.2913]},
  {name:'السويد', code:'se', continent:'europe', capital:'ستوكهولم', language:'السويدية', currency:'كرونة سويدية (SEK)', population:'10 مليون', visas:['سياحة','دراسة','عمل'], unis:'+40 جامعة', fees:'€0 - €15,000', scholarships:'نعم، متعددة', housing:'€400 - €900/شهر', living:'€300 - €550/شهر', total:'€700 - €1,450/شهر', popular:false, latlng:[60.1282, 18.6435]},
  {name:'سويسرا', code:'ch', continent:'europe', capital:'برن', language:'الألمانية، الفرنسية', currency:'فرنك سويسري (CHF)', population:'9 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'CHF 1,000 - 40,000', scholarships:'نعم، محدودة', housing:'CHF 800 - 2,000/شهر', living:'CHF 600 - 1,200/شهر', total:'CHF 1,400 - 3,200/شهر', popular:false, latlng:[46.8182, 8.2275]},
  {name:'النمسا', code:'at', continent:'europe', capital:'فيينا', language:'الألمانية', currency:'يورو (EUR)', population:'9 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'€1,500 - €15,000', scholarships:'نعم، متعددة', housing:'€400 - €900/شهر', living:'€300 - €550/شهر', total:'€700 - €1,450/شهر', popular:false, latlng:[47.5162, 14.5501]},
  {name:'بلجيكا', code:'be', continent:'europe', capital:'بروكسل', language:'الهولندية، الفرنسية', currency:'يورو (EUR)', population:'12 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€1,000 - €15,000', scholarships:'نعم، محدودة', housing:'€400 - €900/شهر', living:'€250 - €500/شهر', total:'€650 - €1,400/شهر', popular:false, latlng:[50.5039, 4.4699]},
  {name:'اليونان', code:'gr', continent:'europe', capital:'أثينا', language:'اليونانية', currency:'يورو (EUR)', population:'10 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'€1,500 - €9,000', scholarships:'نعم، محدودة', housing:'€250 - €600/شهر', living:'€200 - €400/شهر', total:'€450 - €1,000/شهر', popular:false, latlng:[39.0742, 21.8243]},
  {name:'البرتغال', code:'pt', continent:'europe', capital:'لشبونة', language:'البرتغالية', currency:'يورو (EUR)', population:'10 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'€1,000 - €12,000', scholarships:'نعم، محدودة', housing:'€300 - €800/شهر', living:'€200 - €450/شهر', total:'€500 - €1,250/شهر', popular:false, latlng:[39.3999, -8.2245]},
  {name:'أيرلندا', code:'ie', continent:'europe', capital:'دبلن', language:'الإنجليزية', currency:'يورو (EUR)', population:'5 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€10,000 - €25,000', scholarships:'نعم، محدودة', housing:'€600 - €1,400/شهر', living:'€400 - €800/شهر', total:'€1,000 - €2,200/شهر', popular:false, latlng:[53.1424, -7.6921]},
  {name:'بولندا', code:'pl', continent:'europe', capital:'وارسو', language:'البولندية', currency:'زلوتي بولندي (PLN)', population:'38 مليون', visas:['سياحة','دراسة','عمل'], unis:'+100 جامعة', fees:'PLN 8,000 - 40,000', scholarships:'نعم، متعددة', housing:'PLN 1,500 - 3,500/شهر', living:'PLN 1,200 - 2,500/شهر', total:'PLN 2,700 - 6,000/شهر', popular:false, latlng:[51.9194, 19.1451]},
  {name:'التشيك', code:'cz', continent:'europe', capital:'براغ', language:'التشيكية', currency:'كورونا تشيكية (CZK)', population:'10 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'CZK 50,000 - 300,000', scholarships:'نعم، محدودة', housing:'CZK 10,000 - 25,000/شهر', living:'CZK 8,000 - 15,000/شهر', total:'CZK 18,000 - 40,000/شهر', popular:false, latlng:[49.8175, 15.4730]},

  /* ==================== ARAB - الدول العربية ==================== */
  {name:'مصر', code:'eg', continent:'arab', capital:'القاهرة', language:'العربية', currency:'جنيه مصري (EGP)', population:'105 مليون', visas:['سياحة','دراسة','عمل'], unis:'+50 جامعة', fees:'EGP 10,000 - 100,000', scholarships:'نعم، محدودة', housing:'EGP 2,000 - 6,000/شهر', living:'EGP 1,500 - 3,000/شهر', total:'EGP 3,500 - 9,000/شهر', popular:false, latlng:[26.8206, 30.8025]},
  {name:'السعودية', code:'sa', continent:'arab', capital:'الرياض', language:'العربية', currency:'ريال سعودي (SAR)', population:'36 مليون', visas:['سياحة','عمرة','عمل'], unis:'+30 جامعة', fees:'SAR 0 - 50,000', scholarships:'نعم، متعددة', housing:'SAR 1,500 - 4,000/شهر', living:'SAR 1,000 - 2,000/شهر', total:'SAR 2,500 - 6,000/شهر', popular:true, latlng:[23.8859, 45.0792]},
  {name:'الإمارات', code:'ae', continent:'arab', capital:'أبوظبي', language:'العربية', currency:'درهم إماراتي (AED)', population:'10 مليون', visas:['سياحة','عمل','دراسة'], unis:'+70 جامعة', fees:'AED 30,000 - 100,000', scholarships:'نعم، محدودة', housing:'AED 2,000 - 6,000/شهر', living:'AED 1,500 - 3,000/شهر', total:'AED 3,500 - 9,000/شهر', popular:true, latlng:[23.8859, 53.8478]},
  {name:'قطر', code:'qa', continent:'arab', capital:'الدوحة', language:'العربية', currency:'ريال قطري (QAR)', population:'3 مليون', visas:['سياحة','عمل'], unis:'+15 جامعة', fees:'QAR 20,000 - 80,000', scholarships:'نعم، متعددة', housing:'QAR 2,000 - 5,000/شهر', living:'QAR 1,500 - 3,000/شهر', total:'QAR 3,500 - 8,000/شهر', popular:false, latlng:[25.3548, 51.1839]},
  {name:'الكويت', code:'kw', continent:'arab', capital:'مدينة الكويت', language:'العربية', currency:'دينار كويتي (KWD)', population:'4.5 مليون', visas:['سياحة','عمل'], unis:'+10 جامعة', fees:'KWD 500 - 3,000', scholarships:'نعم، محدودة', housing:'KWD 200 - 500/شهر', living:'KWD 150 - 300/شهر', total:'KWD 350 - 800/شهر', popular:false, latlng:[29.3117, 47.4818]},
  {name:'البحرين', code:'bh', continent:'arab', capital:'المنامة', language:'العربية', currency:'دينار بحريني (BHD)', population:'1.5 مليون', visas:['سياحة','عمل'], unis:'+5 جامعات', fees:'BHD 3,000 - 15,000', scholarships:'نعم، محدودة', housing:'BHD 150 - 400/شهر', living:'BHD 100 - 250/شهر', total:'BHD 250 - 650/شهر', popular:false, latlng:[25.9304, 50.6378]},
  {name:'عمان', code:'om', continent:'arab', capital:'مسقط', language:'العربية', currency:'ريال عماني (OMR)', population:'5 مليون', visas:['سياحة','عمل'], unis:'+8 جامعات', fees:'OMR 2,000 - 12,000', scholarships:'نعم، محدودة', housing:'OMR 150 - 400/شهر', living:'OMR 100 - 250/شهر', total:'OMR 250 - 650/شهر', popular:false, latlng:[21.4735, 55.9754]},
  {name:'الأردن', code:'jo', continent:'arab', capital:'عمّان', language:'العربية', currency:'دينار أردني (JOD)', population:'11 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'JOD 2,000 - 8,000', scholarships:'نعم، محدودة', housing:'JOD 150 - 350/شهر', living:'JOD 100 - 250/شهر', total:'JOD 250 - 600/شهر', popular:false, latlng:[30.5852, 36.2384]},
  {name:'لبنان', code:'lb', continent:'arab', capital:'بيروت', language:'العربية', currency:'ليرة لبنانية (LBP)', population:'5 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'$3,000 - $20,000', scholarships:'نعم، محدودة', housing:'$300 - $700/شهر', living:'$200 - $500/شهر', total:'$500 - $1,200/شهر', popular:false, latlng:[33.8547, 35.8623]},
  {name:'سوريا', code:'sy', continent:'arab', capital:'دمشق', language:'العربية', currency:'ليرة سورية (SYP)', population:'22 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'SYP 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'SYP 100,000 - 300,000/شهر', living:'SYP 80,000 - 200,000/شهر', total:'SYP 180,000 - 500,000/شهر', popular:false, latlng:[34.8021, 38.9968]},
  {name:'العراق', code:'iq', continent:'arab', capital:'بغداد', language:'العربية، الكردية', currency:'دينار عراقي (IQD)', population:'44 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'IQD 1,000,000 - 5,000,000', scholarships:'نعم، محدودة', housing:'IQD 400,000 - 1,000,000/شهر', living:'IQD 300,000 - 600,000/شهر', total:'IQD 700,000 - 1,600,000/شهر', popular:false, latlng:[33.2232, 43.6793]},
  {name:'المغرب', code:'ma', continent:'arab', capital:'الرباط', language:'العربية، الفرنسية', currency:'درهم مغربي (MAD)', population:'37 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'MAD 3,000 - 15,000', scholarships:'نعم، محدودة', housing:'MAD 1,000 - 3,000/شهر', living:'MAD 800 - 1,500/شهر', total:'MAD 1,800 - 4,500/شهر', popular:false, latlng:[31.7917, -7.0926]},
  {name:'تونس', code:'tn', continent:'arab', capital:'تونس', language:'العربية، الفرنسية', currency:'دينار تونسي (TND)', population:'12 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'TND 1,000 - 5,000', scholarships:'نعم، محدودة', housing:'TND 300 - 800/شهر', living:'TND 250 - 600/شهر', total:'TND 550 - 1,400/شهر', popular:false, latlng:[33.8869, 9.5375]},
  {name:'الجزائر', code:'dz', continent:'arab', capital:'الجزائر', language:'العربية، الفرنسية', currency:'دينار جزائري (DZD)', population:'44 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'DZD 20,000 - 200,000', scholarships:'نعم، محدودة', housing:'DZD 30,000 - 80,000/شهر', living:'DZD 25,000 - 60,000/شهر', total:'DZD 55,000 - 140,000/شهر', popular:false, latlng:[28.0339, 1.6596]},
  {name:'ليبيا', code:'ly', continent:'arab', capital:'طرابلس', language:'العربية', currency:'دينار ليبي (LYD)', population:'7 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'LYD 2,000 - 10,000', scholarships:'نعم، محدودة', housing:'LYD 800 - 2,000/شهر', living:'LYD 600 - 1,500/شهر', total:'LYD 1,400 - 3,500/شهر', popular:false, latlng:[26.3351, 17.2283]},
  {name:'السودان', code:'sd', continent:'arab', capital:'الخرطوم', language:'العربية', currency:'جنيه سوداني (SDG)', population:'45 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'SDG 50,000 - 300,000', scholarships:'نعم، محدودة', housing:'SDG 50,000 - 150,000/شهر', living:'SDG 40,000 - 100,000/شهر', total:'SDG 90,000 - 250,000/شهر', popular:false, latlng:[12.8628, 30.2176]},
  {name:'اليمن', code:'ye', continent:'arab', capital:'صنعاء', language:'العربية', currency:'ريال يمني (YER)', population:'33 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'YER 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'YER 50,000 - 150,000/شهر', living:'YER 40,000 - 100,000/شهر', total:'YER 90,000 - 250,000/شهر', popular:false, latlng:[15.5527, 48.5164]},
  {name:'فلسطين', code:'ps', continent:'arab', capital:'القدس', language:'العربية', currency:'شيكل (ILS)', population:'5 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'$2,000 - $10,000', scholarships:'نعم، محدودة', housing:'$300 - $700/شهر', living:'$200 - $450/شهر', total:'$500 - $1,150/شهر', popular:false, latlng:[31.9474, 35.2272]},

  /* ==================== AMERICAS - الأمريكتين ==================== */
  {name:'أمريكا', code:'us', continent:'americas', capital:'واشنطن', language:'الإنجليزية', currency:'دولار أمريكي (USD)', population:'335 مليون', visas:['سياحة','دراسة','عمل','هجرة'], unis:'+4,000 جامعة', fees:'$10,000 - $50,000', scholarships:'نعم، متعددة', housing:'$700 - $2,000/شهر', living:'$500 - $1,000/شهر', total:'$1,200 - $3,000/شهر', popular:true, latlng:[37.0902, -95.7129]},
  {name:'كندا', code:'ca', continent:'americas', capital:'أوتاوا', language:'الإنجليزية، الفرنسية', currency:'دولار كندي (CAD)', population:'39 مليون', visas:['سياحة','دراسة','عمل','هجرة'], unis:'+100 جامعة', fees:'CAD 15,000 - 40,000', scholarships:'نعم، متعددة', housing:'CAD 600 - 1,500/شهر', living:'CAD 400 - 800/شهر', total:'CAD 1,000 - 2,300/شهر', popular:true, latlng:[56.1304, -106.3468]},
  {name:'المكسيك', code:'mx', continent:'americas', capital:'مكسيكو سيتي', language:'الإسبانية', currency:'بيزو مكسيكي (MXN)', population:'130 مليون', visas:['سياحة','دراسة','عمل'], unis:'+100 جامعة', fees:'MXN 50,000 - 200,000', scholarships:'نعم، محدودة', housing:'MXN 5,000 - 15,000/شهر', living:'MXN 4,000 - 10,000/شهر', total:'MXN 9,000 - 25,000/شهر', popular:false, latlng:[23.6345, -102.5528]},
  {name:'البرازيل', code:'br', continent:'americas', capital:'برازيليا', language:'البرتغالية', currency:'ريال برازيلي (BRL)', population:'215 مليون', visas:['سياحة','دراسة','عمل'], unis:'+200 جامعة', fees:'BRL 0 - 30,000', scholarships:'نعم، محدودة', housing:'BRL 800 - 2,000/شهر', living:'BRL 600 - 1,200/شهر', total:'BRL 1,400 - 3,200/شهر', popular:false, latlng:[-14.2350, -51.9253]},
  {name:'الأرجنتين', code:'ar', continent:'americas', capital:'بوينس آيرس', language:'الإسبانية', currency:'بيزو أرجنتيني (ARS)', population:'46 مليون', visas:['سياحة','دراسة'], unis:'+50 جامعة', fees:'ARS 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'ARS 50,000 - 150,000/شهر', living:'ARS 40,000 - 100,000/شهر', total:'ARS 90,000 - 250,000/شهر', popular:false, latlng:[-38.4161, -63.6167]},
  {name:'تشيلي', code:'cl', continent:'americas', capital:'سانتياغو', language:'الإسبانية', currency:'بيزو تشيلي (CLP)', population:'19 مليون', visas:['سياحة','دراسة'], unis:'+60 جامعة', fees:'CLP 3,000,000 - 8,000,000', scholarships:'نعم، محدودة', housing:'CLP 300,000 - 700,000/شهر', living:'CLP 250,000 - 500,000/شهر', total:'CLP 550,000 - 1,200,000/شهر', popular:false, latlng:[-35.6751, -71.5430]},
  {name:'كولومبيا', code:'co', continent:'americas', capital:'بوغوتا', language:'الإسبانية', currency:'بيزو كولومبي (COP)', population:'52 مليون', visas:['سياحة','دراسة'], unis:'+80 جامعة', fees:'COP 8,000,000 - 30,000,000', scholarships:'نعم، محدودة', housing:'COP 1,000,000 - 2,500,000/شهر', living:'COP 800,000 - 1,800,000/شهر', total:'COP 1,800,000 - 4,300,000/شهر', popular:false, latlng:[4.5709, -74.2973]},

  /* ==================== ASIA - آسيا ==================== */
  {name:'تركيا', code:'tr', continent:'asia', capital:'أنقرة', language:'التركية', currency:'ليرة تركية (TRY)', population:'85 مليون', visas:['سياحة','دراسة','عمل'], unis:'+200 جامعة', fees:'TRY 5,000 - 30,000', scholarships:'نعم، متعددة', housing:'TRY 2,000 - 5,000/شهر', living:'TRY 1,500 - 3,000/شهر', total:'TRY 3,500 - 8,000/شهر', popular:true, latlng:[38.9637, 35.2433]},
  {name:'ماليزيا', code:'my', continent:'asia', capital:'كوالالمبور', language:'الملايوية', currency:'رينغيت ماليزي (MYR)', population:'33 مليون', visas:['سياحة','دراسة','عمل'], unis:'+70 جامعة', fees:'MYR 10,000 - 40,000', scholarships:'نعم، متعددة', housing:'MYR 500 - 1,500/شهر', living:'MYR 400 - 1,000/شهر', total:'MYR 900 - 2,500/شهر', popular:false, latlng:[4.2105, 101.9758]},
  {name:'إندونيسيا', code:'id', continent:'asia', capital:'جاكرتا', language:'الإندونيسية', currency:'روبية إندونيسية (IDR)', population:'275 مليون', visas:['سياحة','دراسة'], unis:'+100 جامعة', fees:'IDR 20,000,000 - 80,000,000', scholarships:'نعم، محدودة', housing:'IDR 2,000,000 - 5,000,000/شهر', living:'IDR 1,500,000 - 3,500,000/شهر', total:'IDR 3,500,000 - 8,500,000/شهر', popular:false, latlng:[-0.7893, 113.9213]},
  {name:'الصين', code:'cn', continent:'asia', capital:'بكين', language:'الصينية', currency:'يوان صيني (CNY)', population:'1.4 مليار', visas:['سياحة','دراسة','عمل'], unis:'+2,000 جامعة', fees:'CNY 15,000 - 60,000', scholarships:'نعم، متعددة', housing:'CNY 1,500 - 4,000/شهر', living:'CNY 1,000 - 2,500/شهر', total:'CNY 2,500 - 6,500/شهر', popular:false, latlng:[35.8617, 104.1954]},
  {name:'اليابان', code:'jp', continent:'asia', capital:'طوكيو', language:'اليابانية', currency:'ين ياباني (JPY)', population:'125 مليون', visas:['سياحة','دراسة','عمل'], unis:'+700 جامعة', fees:'JPY 500,000 - 1,500,000', scholarships:'نعم، متعددة', housing:'JPY 40,000 - 100,000/شهر', living:'JPY 30,000 - 60,000/شهر', total:'JPY 70,000 - 160,000/شهر', popular:false, latlng:[36.2048, 138.2529]},
  {name:'كوريا الجنوبية', code:'kr', continent:'asia', capital:'سيول', language:'الكورية', currency:'وون كوري (KRW)', population:'52 مليون', visas:['سياحة','دراسة','عمل'], unis:'+200 جامعة', fees:'KRW 3,000,000 - 8,000,000', scholarships:'نعم، متعددة', housing:'KRW 300,000 - 700,000/شهر', living:'KRW 200,000 - 500,000/شهر', total:'KRW 500,000 - 1,200,000/شهر', popular:false, latlng:[35.9078, 127.7669]},
  {name:'الهند', code:'in', continent:'asia', capital:'نيودلهي', language:'الهندية، الإنجليزية', currency:'روبية هندية (INR)', population:'1.4 مليار', visas:['سياحة','دراسة','عمل'], unis:'+800 جامعة', fees:'INR 50,000 - 500,000', scholarships:'نعم، متعددة', housing:'INR 8,000 - 25,000/شهر', living:'INR 5,000 - 15,000/شهر', total:'INR 13,000 - 40,000/شهر', popular:false, latlng:[20.5937, 78.9629]},
  {name:'باكستان', code:'pk', continent:'asia', capital:'إسلام آباد', language:'الأردية، الإنجليزية', currency:'روبية باكستانية (PKR)', population:'240 مليون', visas:['سياحة','دراسة'], unis:'+100 جامعة', fees:'PKR 200,000 - 1,000,000', scholarships:'نعم، محدودة', housing:'PKR 30,000 - 80,000/شهر', living:'PKR 25,000 - 60,000/شهر', total:'PKR 55,000 - 140,000/شهر', popular:false, latlng:[30.3753, 69.3451]},
  {name:'تايلاند', code:'th', continent:'asia', capital:'بانكوك', language:'التايلاندية', currency:'بات تايلاندي (THB)', population:'70 مليون', visas:['سياحة','دراسة','عمل'], unis:'+50 جامعة', fees:'THB 60,000 - 250,000', scholarships:'نعم، محدودة', housing:'THB 8,000 - 20,000/شهر', living:'THB 6,000 - 15,000/شهر', total:'THB 14,000 - 35,000/شهر', popular:false, latlng:[15.8700, 100.9925]},
  {name:'فيتنام', code:'vn', continent:'asia', capital:'هانوي', language:'الفيتنامية', currency:'دونغ فيتنامي (VND)', population:'100 مليون', visas:['سياحة','دراسة'], unis:'+80 جامعة', fees:'VND 30,000,000 - 120,000,000', scholarships:'نعم، محدودة', housing:'VND 3,000,000 - 8,000,000/شهر', living:'VND 2,500,000 - 5,000,000/شهر', total:'VND 5,500,000 - 13,000,000/شهر', popular:false, latlng:[14.0583, 108.2772]},
  {name:'سنغافورة', code:'sg', continent:'asia', capital:'سنغافورة', language:'الإنجليزية، الملايوية', currency:'دولار سنغافوري (SGD)', population:'6 مليون', visas:['سياحة','دراسة','عمل'], unis:'+10 جامعات', fees:'SGD 20,000 - 60,000', scholarships:'نعم، متعددة', housing:'SGD 800 - 2,000/شهر', living:'SGD 600 - 1,200/شهر', total:'SGD 1,400 - 3,200/شهر', popular:false, latlng:[1.3521, 103.8198]},
  {name:'الفلبين', code:'ph', continent:'asia', capital:'مانيلا', language:'الفلبينية، الإنجليزية', currency:'بيزو فلبيني (PHP)', population:'115 مليون', visas:['سياحة','دراسة'], unis:'+50 جامعة', fees:'PHP 60,000 - 250,000', scholarships:'نعم، محدودة', housing:'PHP 10,000 - 30,000/شهر', living:'PHP 8,000 - 20,000/شهر', total:'PHP 18,000 - 50,000/شهر', popular:false, latlng:[12.8797, 121.7740]},

  /* ==================== AFRICA - أفريقيا ==================== */
  {name:'جنوب أفريقيا', code:'za', continent:'africa', capital:'بريتوريا', language:'الإنجليزية، الأفريكانية', currency:'راند جنوب أفريقي (ZAR)', population:'60 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'ZAR 30,000 - 100,000', scholarships:'نعم، محدودة', housing:'ZAR 3,000 - 8,000/شهر', living:'ZAR 2,000 - 5,000/شهر', total:'ZAR 5,000 - 13,000/شهر', popular:false, latlng:[-30.5595, 22.9375]},
  {name:'نيجيريا', code:'ng', continent:'africa', capital:'أبوجا', language:'الإنجليزية', currency:'نيرا نيجيري (NGN)', population:'220 مليون', visas:['سياحة','عمل'], unis:'+150 جامعة', fees:'NGN 200,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'NGN 100,000 - 500,000/شهر', living:'NGN 80,000 - 200,000/شهر', total:'NGN 180,000 - 700,000/شهر', popular:false, latlng:[9.0820, 8.6753]},
  {name:'كينيا', code:'ke', continent:'africa', capital:'نيروبي', language:'السواحيلية، الإنجليزية', currency:'شلن كيني (KES)', population:'55 مليون', visas:['سياحة','دراسة','عمل'], unis:'+40 جامعة', fees:'KES 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'KES 20,000 - 80,000/شهر', living:'KES 15,000 - 40,000/شهر', total:'KES 35,000 - 120,000/شهر', popular:false, latlng:[-0.0236, 37.9062]},
  {name:'إثيوبيا', code:'et', continent:'africa', capital:'أديس أبابا', language:'الأمهرية', currency:'بير إثيوبي (ETB)', population:'120 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'ETB 50,000 - 200,000', scholarships:'نعم، محدودة', housing:'ETB 15,000 - 40,000/شهر', living:'ETB 12,000 - 30,000/شهر', total:'ETB 27,000 - 70,000/شهر', popular:false, latlng:[9.1450, 40.4897]},
  {name:'غانا', code:'gh', continent:'africa', capital:'أكرا', language:'الإنجليزية', currency:'سيدي غاني (GHS)', population:'33 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'GHS 20,000 - 80,000', scholarships:'نعم، محدودة', housing:'GHS 3,000 - 8,000/شهر', living:'GHS 2,500 - 6,000/شهر', total:'GHS 5,500 - 14,000/شهر', popular:false, latlng:[7.9465, -1.0232]},
  {name:'تنزانيا', code:'tz', continent:'africa', capital:'دودوما', language:'السواحيلية، الإنجليزية', currency:'شلن تنزاني (TZS)', population:'65 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'TZS 5,000,000 - 15,000,000', scholarships:'نعم، محدودة', housing:'TZS 500,000 - 1,500,000/شهر', living:'TZS 400,000 - 1,000,000/شهر', total:'TZS 900,000 - 2,500,000/شهر', popular:false, latlng:[-6.3690, 34.8888]},

  /* ==================== OCEANIA - أوقيانوسيا ==================== */
  {name:'أستراليا', code:'au', continent:'oceania', capital:'كانبرا', language:'الإنجليزية', currency:'دولار أسترالي (AUD)', population:'26 مليون', visas:['سياحة','دراسة','عمل','هجرة'], unis:'+43 جامعة', fees:'AUD 20,000 - 45,000', scholarships:'نعم، متعددة', housing:'AUD 800 - 2,000/شهر', living:'AUD 600 - 1,200/شهر', total:'AUD 1,400 - 3,200/شهر', popular:true, latlng:[-25.2744, 133.7751]},
  {name:'نيوزيلندا', code:'nz', continent:'oceania', capital:'ويلينغتون', language:'الإنجليزية، الماورية', currency:'دولار نيوزيلندي (NZD)', population:'5 مليون', visas:['سياحة','دراسة','عمل','هجرة'], unis:'+8 جامعات', fees:'NZD 22,000 - 40,000', scholarships:'نعم، متعددة', housing:'NZD 800 - 1,800/شهر', living:'NZD 600 - 1,200/شهر', total:'NZD 1,400 - 3,000/شهر', popular:false, latlng:[-40.9006, 174.8860]},
  {name:'فيجي', code:'fj', continent:'oceania', capital:'سوفا', language:'الإنجليزية، الفيجية', currency:'دولار فيجي (FJD)', population:'1 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'FJD 15,000 - 30,000', scholarships:'نعم، محدودة', housing:'FJD 800 - 1,500/شهر', living:'FJD 600 - 1,200/شهر', total:'FJD 1,400 - 2,700/شهر', popular:false, latlng:[-17.7134, 178.0650]},

  /* ==================== EUROPE (دول إضافية) - أوروبا ==================== */
  {name:'إستونيا', code:'ee', continent:'europe', capital:'تالين', language:'الإستونية', currency:'يورو (EUR)', population:'1.4 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€0 - €12,000', scholarships:'نعم، متعددة', housing:'€300 - €700/شهر', living:'€250 - €450/شهر', total:'€550 - €1,150/شهر', popular:false, latlng:[58.5953, 25.0136]},
  {name:'لاتفيا', code:'lv', continent:'europe', capital:'ريغا', language:'اللاتفية', currency:'يورو (EUR)', population:'1.9 مليون', visas:['سياحة','دراسة','عمل'], unis:'+15 جامعة', fees:'€0 - €10,000', scholarships:'نعم، متعددة', housing:'€250 - €600/شهر', living:'€200 - €400/شهر', total:'€450 - €1,000/شهر', popular:false, latlng:[56.8796, 24.6032]},
  {name:'ليتوانيا', code:'lt', continent:'europe', capital:'فيلنيوس', language:'الليتوانية', currency:'يورو (EUR)', population:'2.8 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€0 - €11,000', scholarships:'نعم، متعددة', housing:'€250 - €600/شهر', living:'€200 - €400/شهر', total:'€450 - €1,000/شهر', popular:false, latlng:[55.1694, 23.8813]},
  {name:'فنلندا', code:'fi', continent:'europe', capital:'هلسنكي', language:'الفنلندية، السويدية', currency:'يورو (EUR)', population:'5.6 مليون', visas:['سياحة','دراسة','عمل'], unis:'+35 جامعة', fees:'€0 - €15,000', scholarships:'نعم، متعددة', housing:'€400 - €900/شهر', living:'€300 - €550/شهر', total:'€700 - €1,450/شهر', popular:false, latlng:[61.9241, 25.7482]},
  {name:'النرويج', code:'no', continent:'europe', capital:'أوسلو', language:'النرويجية', currency:'كرونة نرويجية (NOK)', population:'5.5 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'NOK 0 - 150,000', scholarships:'نعم، متعددة', housing:'NOK 5,000 - 12,000/شهر', living:'NOK 4,000 - 8,000/شهر', total:'NOK 9,000 - 20,000/شهر', popular:false, latlng:[60.4720, 8.4689]},
  {name:'الدنمارك', code:'dk', continent:'europe', capital:'كوبنهاغن', language:'الدنماركية', currency:'كرونة دنماركية (DKK)', population:'5.9 مليون', visas:['سياحة','دراسة','عمل'], unis:'+30 جامعة', fees:'DKK 0 - 120,000', scholarships:'نعم، متعددة', housing:'DKK 3,500 - 8,000/شهر', living:'DKK 3,000 - 6,000/شهر', total:'DKK 6,500 - 14,000/شهر', popular:false, latlng:[56.2639, 9.5018]},
  {name:'هنغاريا', code:'hu', continent:'europe', capital:'بودابست', language:'الهنغارية', currency:'فورنت هنغاري (HUF)', population:'9.6 مليون', visas:['سياحة','دراسة','عمل'], unis:'+40 جامعة', fees:'HUF 400,000 - 2,500,000', scholarships:'نعم، متعددة', housing:'HUF 120,000 - 300,000/شهر', living:'HUF 90,000 - 180,000/شهر', total:'HUF 210,000 - 480,000/شهر', popular:false, latlng:[47.1625, 19.5033]},
  {name:'رومانيا', code:'ro', continent:'europe', capital:'بوخارست', language:'الرومانية', currency:'ليو روماني (RON)', population:'19 مليون', visas:['سياحة','دراسة','عمل'], unis:'+60 جامعة', fees:'RON 0 - 30,000', scholarships:'نعم، متعددة', housing:'RON 1,500 - 3,500/شهر', living:'RON 1,200 - 2,500/شهر', total:'RON 2,700 - 6,000/شهر', popular:false, latlng:[45.9432, 24.9668]},
  {name:'بلغاريا', code:'bg', continent:'europe', capital:'صوفيا', language:'البلغارية', currency:'ليف بلغاري (BGN)', population:'6.5 مليون', visas:['سياحة','دراسة','عمل'], unis:'+40 جامعة', fees:'BGN 0 - 20,000', scholarships:'نعم، متعددة', housing:'BGN 800 - 2,000/شهر', living:'BGN 600 - 1,200/شهر', total:'BGN 1,400 - 3,200/شهر', popular:false, latlng:[42.7339, 25.4858]},
  {name:'كرواتيا', code:'hr', continent:'europe', capital:'زغرب', language:'الكرواتية', currency:'يورو (EUR)', population:'3.9 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€0 - €12,000', scholarships:'نعم، محدودة', housing:'€300 - €700/شهر', living:'€250 - €450/شهر', total:'€550 - €1,150/شهر', popular:false, latlng:[45.1000, 15.2000]},
  {name:'صربيا', code:'rs', continent:'europe', capital:'بلغراد', language:'الصربية', currency:'دينار صربي (RSD)', population:'6.6 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'RSD 0 - 500,000', scholarships:'نعم، محدودة', housing:'RSD 30,000 - 70,000/شهر', living:'RSD 25,000 - 50,000/شهر', total:'RSD 55,000 - 120,000/شهر', popular:false, latlng:[44.0165, 21.0059]},
  {name:'سلوفينيا', code:'si', continent:'europe', capital:'ليوبليانا', language:'السلوفينية', currency:'يورو (EUR)', population:'2.1 مليون', visas:['سياحة','دراسة','عمل'], unis:'+10 جامعات', fees:'€0 - €12,000', scholarships:'نعم، محدودة', housing:'€300 - €700/شهر', living:'€250 - €450/شهر', total:'€550 - €1,150/شهر', popular:false, latlng:[46.1512, 14.9955]},
  {name:'سلوفاكيا', code:'sk', continent:'europe', capital:'براتيسلافا', language:'السلوفاكية', currency:'يورو (EUR)', population:'5.4 مليون', visas:['سياحة','دراسة','عمل'], unis:'+20 جامعة', fees:'€0 - €12,000', scholarships:'نعم، محدودة', housing:'€300 - €700/شهر', living:'€250 - €450/شهر', total:'€550 - €1,150/شهر', popular:false, latlng:[48.6690, 19.6990]},
  {name:'آيسلندا', code:'is', continent:'europe', capital:'ريكيافيك', language:'الآيسلندية', currency:'كرونة آيسلندية (ISK)', population:'0.4 مليون', visas:['سياحة','دراسة','عمل'], unis:'+7 جامعات', fees:'ISK 0 - 900,000', scholarships:'نعم، محدودة', housing:'ISK 90,000 - 200,000/شهر', living:'ISK 70,000 - 130,000/شهر', total:'ISK 160,000 - 330,000/شهر', popular:false, latlng:[64.9631, -19.0208]},
  {name:'لوكسمبورغ', code:'lu', continent:'europe', capital:'لوكسمبورغ', language:'اللوكسمبورغية، الفرنسية، الألمانية', currency:'يورو (EUR)', population:'0.67 مليون', visas:['سياحة','دراسة','عمل'], unis:'+5 جامعات', fees:'€400 - €15,000', scholarships:'نعم، محدودة', housing:'€800 - €1,800/شهر', living:'€500 - €900/شهر', total:'€1,300 - €2,700/شهر', popular:false, latlng:[49.8153, 6.1296]},
  {name:'مالطا', code:'mt', continent:'europe', capital:'فاليتا', language:'المالطية، الإنجليزية', currency:'يورو (EUR)', population:'0.55 مليون', visas:['سياحة','دراسة','عمل'], unis:'+3 جامعات', fees:'€0 - €15,000', scholarships:'نعم، محدودة', housing:'€400 - €900/شهر', living:'€300 - €550/شهر', total:'€700 - €1,450/شهر', popular:false, latlng:[35.9375, 14.3754]},
  {name:'قبرص', code:'cy', continent:'europe', capital:'نيقوسيا', language:'اليونانية، التركية', currency:'يورو (EUR)', population:'1.3 مليون', visas:['سياحة','دراسة','عمل'], unis:'+6 جامعات', fees:'€3,000 - €12,000', scholarships:'نعم، محدودة', housing:'€350 - €800/شهر', living:'€300 - €550/شهر', total:'€650 - €1,350/شهر', popular:false, latlng:[35.1264, 33.4299]},
  {name:'ألبانيا', code:'al', continent:'europe', capital:'تيرانا', language:'الألبانية', currency:'ليك ألباني (ALL)', population:'2.8 مليون', visas:['سياحة','دراسة','عمل'], unis:'+15 جامعة', fees:'ALL 0 - 400,000', scholarships:'نعم، محدودة', housing:'ALL 25,000 - 60,000/شهر', living:'ALL 20,000 - 40,000/شهر', total:'ALL 45,000 - 100,000/شهر', popular:false, latlng:[41.1533, 20.1683]},
  {name:'مقدونيا الشمالية', code:'mk', continent:'europe', capital:'سكوبيه', language:'المقدونية', currency:'دينار مقدوني (MKD)', population:'1.8 مليون', visas:['سياحة','دراسة','عمل'], unis:'+10 جامعات', fees:'MKD 0 - 300,000', scholarships:'نعم، محدودة', housing:'MKD 12,000 - 25,000/شهر', living:'MKD 10,000 - 20,000/شهر', total:'MKD 22,000 - 45,000/شهر', popular:false, latlng:[41.6086, 21.7453]},
  {name:'البوسنة والهرسك', code:'ba', continent:'europe', capital:'سراييفو', language:'البوسنية', currency:'مارك بوسني (BAM)', population:'3.2 مليون', visas:['سياحة','دراسة','عمل'], unis:'+15 جامعة', fees:'BAM 0 - 12,000', scholarships:'نعم، محدودة', housing:'BAM 500 - 1,200/شهر', living:'BAM 400 - 800/شهر', total:'BAM 900 - 2,000/شهر', popular:false, latlng:[43.9159, 17.6791]},
  {name:'الجبل الأسود', code:'me', continent:'europe', capital:'بودغوريتسا', language:'المونتنغرية', currency:'يورو (EUR)', population:'0.62 مليون', visas:['سياحة','دراسة','عمل'], unis:'+6 جامعات', fees:'€0 - €8,000', scholarships:'نعم، محدودة', housing:'€250 - €600/شهر', living:'€200 - €400/شهر', total:'€450 - €1,000/شهر', popular:false, latlng:[42.7087, 19.3744]},
  {name:'مولدوفا', code:'md', continent:'europe', capital:'كيشيناو', language:'الرومانية', currency:'ليو مولدوفي (MDL)', population:'2.5 مليون', visas:['سياحة','دراسة','عمل'], unis:'+15 جامعة', fees:'MDL 0 - 60,000', scholarships:'نعم، محدودة', housing:'MDL 3,000 - 7,000/شهر', living:'MDL 2,500 - 5,000/شهر', total:'MDL 5,500 - 12,000/شهر', popular:false, latlng:[47.4116, 28.3699]},
  {name:'بيلاروسيا', code:'by', continent:'europe', capital:'مينسك', language:'البيلاروسية، الروسية', currency:'روبل بيلاروسي (BYN)', population:'9.2 مليون', visas:['سياحة','دراسة','عمل'], unis:'+50 جامعة', fees:'BYN 3,000 - 10,000', scholarships:'نعم، محدودة', housing:'BYN 500 - 1,200/شهر', living:'BYN 400 - 800/شهر', total:'BYN 900 - 2,000/شهر', popular:false, latlng:[53.7098, 27.9534]},
  {name:'أوكرانيا', code:'ua', continent:'europe', capital:'كييف', language:'الأوكرانية', currency:'هريفنيا أوكرانية (UAH)', population:'38 مليون', visas:['سياحة','دراسة'], unis:'+300 جامعة', fees:'UAH 40,000 - 150,000', scholarships:'نعم، محدودة', housing:'UAH 8,000 - 20,000/شهر', living:'UAH 6,000 - 12,000/شهر', total:'UAH 14,000 - 32,000/شهر', popular:false, latlng:[48.3794, 31.1656]},
  {name:'روسيا', code:'ru', continent:'europe', capital:'موسكو', language:'الروسية', currency:'روبل روسي (RUB)', population:'144 مليون', visas:['سياحة','دراسة','عمل'], unis:'+700 جامعة', fees:'RUB 150,000 - 500,000', scholarships:'نعم، متعددة', housing:'RUB 30,000 - 80,000/شهر', living:'RUB 25,000 - 50,000/شهر', total:'RUB 55,000 - 130,000/شهر', popular:false, latlng:[61.5240, 105.3188]},
  {name:'الفاتيكان', code:'va', continent:'europe', capital:'الفاتيكان', language:'الإيطالية، اللاتينية', currency:'يورو (EUR)', population:'800 نسمة', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'€1,000 - €10,000', scholarships:'نعم، محدودة', housing:'€1,000 - €2,500/شهر', living:'€800 - €1,500/شهر', total:'€1,800 - €4,000/شهر', popular:false, latlng:[41.9029, 12.4534]},
  {name:'موناكو', code:'mc', continent:'europe', capital:'موناكو', language:'الفرنسية', currency:'يورو (EUR)', population:'39 ألف', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'€15,000 - €40,000', scholarships:'نعم، محدودة', housing:'€1,500 - €3,500/شهر', living:'€800 - €1,500/شهر', total:'€2,300 - €5,000/شهر', popular:false, latlng:[43.7384, 7.4246]},
  {name:'أندورا', code:'ad', continent:'europe', capital:'أندورا لا فيلا', language:'الكاتالونية', currency:'يورو (EUR)', population:'80 ألف', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'€1,000 - €8,000', scholarships:'نعم، محدودة', housing:'€600 - €1,200/شهر', living:'€400 - €700/شهر', total:'€1,000 - €1,900/شهر', popular:false, latlng:[42.5462, 1.6016]},
  {name:'ليختنشتاين', code:'li', continent:'europe', capital:'فادوز', language:'الألمانية', currency:'فرنك سويسري (CHF)', population:'39 ألف', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'CHF 1,000 - 20,000', scholarships:'نعم، محدودة', housing:'CHF 900 - 1,800/شهر', living:'CHF 700 - 1,300/شهر', total:'CHF 1,600 - 3,100/شهر', popular:false, latlng:[47.1660, 9.5554]},
  {name:'سان مارينو', code:'sm', continent:'europe', capital:'سان مارينو', language:'الإيطالية', currency:'يورو (EUR)', population:'34 ألف', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'€1,000 - €10,000', scholarships:'نعم، محدودة', housing:'€500 - €1,000/شهر', living:'€400 - €700/شهر', total:'€900 - €1,700/شهر', popular:false, latlng:[43.9424, 12.4578]},

  /* ==================== ARAB (دول إضافية) - الدول العربية ==================== */
  {name:'جزر القمر', code:'km', continent:'arab', capital:'موروني', language:'العربية، الفرنسية', currency:'فرنك قمري (KMF)', population:'0.85 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'KMF 200,000 - 600,000', scholarships:'نعم، محدودة', housing:'KMF 40,000 - 90,000/شهر', living:'KMF 30,000 - 60,000/شهر', total:'KMF 70,000 - 150,000/شهر', popular:false, latlng:[-11.6455, 43.3333]},
  {name:'جيبوتي', code:'dj', continent:'arab', capital:'جيبوتي', language:'العربية، الفرنسية', currency:'فرنك جيبوتي (DJF)', population:'1.1 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'DJF 150,000 - 500,000', scholarships:'نعم، محدودة', housing:'DJF 30,000 - 70,000/شهر', living:'DJF 25,000 - 50,000/شهر', total:'DJF 55,000 - 120,000/شهر', popular:false, latlng:[11.8251, 42.5903]},
  {name:'الصومال', code:'so', continent:'arab', capital:'مقديشو', language:'العربية، الصومالية', currency:'شلن صومالي (SOS)', population:'18 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'SOS 1,000,000 - 5,000,000', scholarships:'نعم، محدودة', housing:'SOS 400,000 - 1,000,000/شهر', living:'SOS 300,000 - 700,000/شهر', total:'SOS 700,000 - 1,700,000/شهر', popular:false, latlng:[5.1521, 46.1996]},
  {name:'موريتانيا', code:'mr', continent:'arab', capital:'نواكشوط', language:'العربية', currency:'أوقية موريتانية (MRU)', population:'4.9 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'MRU 30,000 - 150,000', scholarships:'نعم، محدودة', housing:'MRU 8,000 - 20,000/شهر', living:'MRU 6,000 - 12,000/شهر', total:'MRU 14,000 - 32,000/شهر', popular:false, latlng:[21.0079, -10.9408]},

  /* ==================== AMERICAS (دول إضافية) - الأمريكتين ==================== */
  {name:'بيرو', code:'pe', continent:'americas', capital:'ليما', language:'الإسبانية', currency:'سول بيروفي (PEN)', population:'34 مليون', visas:['سياحة','دراسة'], unis:'+80 جامعة', fees:'PEN 3,000 - 20,000', scholarships:'نعم، محدودة', housing:'PEN 900 - 2,000/شهر', living:'PEN 700 - 1,400/شهر', total:'PEN 1,600 - 3,400/شهر', popular:false, latlng:[-9.1900, -75.0152]},
  {name:'فنزويلا', code:'ve', continent:'americas', capital:'كاراكاس', language:'الإسبانية', currency:'بوليفار فنزويلي (VES)', population:'28 مليون', visas:['سياحة','دراسة'], unis:'+50 جامعة', fees:'VES 30,000 - 200,000', scholarships:'نعم، محدودة', housing:'VES 3,000 - 8,000/شهر', living:'VES 2,500 - 5,000/شهر', total:'VES 5,500 - 13,000/شهر', popular:false, latlng:[6.4238, -66.5897]},
  {name:'الإكوادور', code:'ec', continent:'americas', capital:'كيتو', language:'الإسبانية', currency:'دولار أمريكي (USD)', population:'18 مليون', visas:['سياحة','دراسة'], unis:'+60 جامعة', fees:'$1,000 - $8,000', scholarships:'نعم، محدودة', housing:'$300 - $700/شهر', living:'$250 - $500/شهر', total:'$550 - $1,200/شهر', popular:false, latlng:[-1.8312, -78.1834]},
  {name:'بوليفيا', code:'bo', continent:'americas', capital:'لاباز', language:'الإسبانية', currency:'بوليفيانو (BOB)', population:'12 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'BOB 3,000 - 20,000', scholarships:'نعم، محدودة', housing:'BOB 1,500 - 3,500/شهر', living:'BOB 1,200 - 2,500/شهر', total:'BOB 2,700 - 6,000/شهر', popular:false, latlng:[-16.2902, -63.5887]},
  {name:'باراغواي', code:'py', continent:'americas', capital:'أسونسيون', language:'الإسبانية', currency:'غواراني باراغواي (PYG)', population:'7 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'PYG 5,000,000 - 25,000,000', scholarships:'نعم، محدودة', housing:'PYG 1,500,000 - 3,500,000/شهر', living:'PYG 1,200,000 - 2,500,000/شهر', total:'PYG 2,700,000 - 6,000,000/شهر', popular:false, latlng:[-23.4425, -58.4438]},
  {name:'أوروغواي', code:'uy', continent:'americas', capital:'مونتيفيديو', language:'الإسبانية', currency:'بيزو أوروغواي (UYU)', population:'3.4 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'UYU 60,000 - 250,000', scholarships:'نعم، محدودة', housing:'UYU 15,000 - 35,000/شهر', living:'UYU 12,000 - 25,000/شهر', total:'UYU 27,000 - 60,000/شهر', popular:false, latlng:[-32.5228, -55.7658]},
  {name:'غيانا', code:'gy', continent:'americas', capital:'جورج تاون', language:'الإنجليزية', currency:'دولار غياني (GYD)', population:'0.8 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'GYD 200,000 - 1,000,000', scholarships:'نعم، محدودة', housing:'GYD 60,000 - 150,000/شهر', living:'GYD 50,000 - 100,000/شهر', total:'GYD 110,000 - 250,000/شهر', popular:false, latlng:[4.8604, -58.9302]},
  {name:'سورينام', code:'sr', continent:'americas', capital:'باراماريبو', language:'الهولندية', currency:'دولار سورينامي (SRD)', population:'0.62 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'SRD 30,000 - 150,000', scholarships:'نعم، محدودة', housing:'SRD 12,000 - 30,000/شهر', living:'SRD 10,000 - 20,000/شهر', total:'SRD 22,000 - 50,000/شهر', popular:false, latlng:[3.9193, -56.0278]},
  {name:'بنما', code:'pa', continent:'americas', capital:'بنما سيتي', language:'الإسبانية', currency:'بالبوا بنمي (PAB)', population:'4.4 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'PAB 2,000 - 12,000', scholarships:'نعم، محدودة', housing:'PAB 500 - 1,200/شهر', living:'PAB 400 - 800/شهر', total:'PAB 900 - 2,000/شهر', popular:false, latlng:[8.5380, -80.7821]},
  {name:'كوستاريكا', code:'cr', continent:'americas', capital:'سان خوسيه', language:'الإسبانية', currency:'كولون كوستاريكي (CRC)', population:'5.2 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'CRC 1,000,000 - 5,000,000', scholarships:'نعم، محدودة', housing:'CRC 250,000 - 600,000/شهر', living:'CRC 200,000 - 400,000/شهر', total:'CRC 450,000 - 1,000,000/شهر', popular:false, latlng:[9.7489, -83.7534]},
  {name:'نيكاراغوا', code:'ni', continent:'americas', capital:'ماناغوا', language:'الإسبانية', currency:'كوردوبا نيكاراغوي (NIO)', population:'7 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'NIO 30,000 - 150,000', scholarships:'نعم، محدودة', housing:'NIO 8,000 - 20,000/شهر', living:'NIO 6,000 - 12,000/شهر', total:'NIO 14,000 - 32,000/شهر', popular:false, latlng:[12.8654, -85.2072]},
  {name:'هندوراس', code:'hn', continent:'americas', capital:'تيغوسيغالبا', language:'الإسبانية', currency:'لمبيرة هندوراسية (HNL)', population:'10.5 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'HNL 40,000 - 200,000', scholarships:'نعم، محدودة', housing:'HNL 6,000 - 15,000/شهر', living:'HNL 5,000 - 10,000/شهر', total:'HNL 11,000 - 25,000/شهر', popular:false, latlng:[15.2000, -86.2419]},
  {name:'غواتيمالا', code:'gt', continent:'americas', capital:'غواتيمالا سيتي', language:'الإسبانية', currency:'كتزال غواتيمالي (GTQ)', population:'18 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'GTQ 6,000 - 30,000', scholarships:'نعم، محدودة', housing:'GTQ 1,500 - 4,000/شهر', living:'GTQ 1,200 - 2,500/شهر', total:'GTQ 2,700 - 6,500/شهر', popular:false, latlng:[15.7835, -90.2308]},
  {name:'السلفادور', code:'sv', continent:'americas', capital:'سان سلفادور', language:'الإسبانية', currency:'دولار أمريكي (USD)', population:'6.3 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'$1,000 - $6,000', scholarships:'نعم، محدودة', housing:'$300 - $700/شهر', living:'$250 - $500/شهر', total:'$550 - $1,200/شهر', popular:false, latlng:[13.7942, -88.8965]},
  {name:'بليز', code:'bz', continent:'americas', capital:'بلموبان', language:'الإنجليزية', currency:'دولار بليزي (BZD)', population:'0.4 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'BZD 10,000 - 40,000', scholarships:'نعم، محدودة', housing:'BZD 600 - 1,500/شهر', living:'BZD 500 - 1,000/شهر', total:'BZD 1,100 - 2,500/شهر', popular:false, latlng:[17.1899, -88.4976]},
  {name:'كوبا', code:'cu', continent:'americas', capital:'هافانا', language:'الإسبانية', currency:'بيزو كوبي (CUP)', population:'11 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'CUP 100,000 - 500,000', scholarships:'نعم، متعددة', housing:'CUP 8,000 - 20,000/شهر', living:'CUP 6,000 - 12,000/شهر', total:'CUP 14,000 - 32,000/شهر', popular:false, latlng:[21.5218, -77.7812]},
  {name:'جامايكا', code:'jm', continent:'americas', capital:'كينغستون', language:'الإنجليزية', currency:'دولار جامايكي (JMD)', population:'2.8 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'JMD 300,000 - 1,200,000', scholarships:'نعم، محدودة', housing:'JMD 40,000 - 100,000/شهر', living:'JMD 35,000 - 70,000/شهر', total:'JMD 75,000 - 170,000/شهر', popular:false, latlng:[18.1096, -77.2975]},
  {name:'هايتي', code:'ht', continent:'americas', capital:'بورت أو برانس', language:'الفرنسية، الكريولية', currency:'غورد هايتي (HTG)', population:'12 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'HTG 200,000 - 800,000', scholarships:'نعم، محدودة', housing:'HTG 40,000 - 100,000/شهر', living:'HTG 35,000 - 70,000/شهر', total:'HTG 75,000 - 170,000/شهر', popular:false, latlng:[18.9712, -72.2852]},
  {name:'الدومينيكان', code:'do', continent:'americas', capital:'سانتو دومينغو', language:'الإسبانية', currency:'بيزو دومينيكي (DOP)', population:'11 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'DOP 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'DOP 18,000 - 45,000/شهر', living:'DOP 15,000 - 30,000/شهر', total:'DOP 33,000 - 75,000/شهر', popular:false, latlng:[18.7357, -70.1627]},
  {name:'الباهاما', code:'bs', continent:'americas', capital:'ناساو', language:'الإنجليزية', currency:'دولار باهامي (BSD)', population:'0.4 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'BSD 10,000 - 40,000', scholarships:'نعم، محدودة', housing:'BSD 800 - 2,000/شهر', living:'BSD 600 - 1,200/شهر', total:'BSD 1,400 - 3,200/شهر', popular:false, latlng:[25.0343, -77.3963]},
  {name:'ترينيداد وتوباغو', code:'tt', continent:'americas', capital:'بورت أوف سبين', language:'الإنجليزية', currency:'دولار ترينيدادي (TTD)', population:'1.5 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'TTD 20,000 - 90,000', scholarships:'نعم، محدودة', housing:'TTD 3,000 - 7,000/شهر', living:'TTD 2,500 - 5,000/شهر', total:'TTD 5,500 - 12,000/شهر', popular:false, latlng:[10.6918, -61.2225]},
  {name:'بربادوس', code:'bb', continent:'americas', capital:'بريدجتاون', language:'الإنجليزية', currency:'دولار بربادوسي (BBD)', population:'0.28 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'BBD 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'BBD 1,200 - 2,800/شهر', living:'BBD 1,000 - 2,000/شهر', total:'BBD 2,200 - 4,800/شهر', popular:false, latlng:[13.1939, -59.5432]},
  {name:'سانت لوسيا', code:'lc', continent:'americas', capital:'كاستريس', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.18 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'XCD 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'XCD 1,000 - 2,500/شهر', living:'XCD 800 - 1,600/شهر', total:'XCD 1,800 - 4,100/شهر', popular:false, latlng:[13.9094, -60.9789]},
  {name:'غرينادا', code:'gd', continent:'americas', capital:'سانت جورجز', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.13 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'XCD 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'XCD 1,000 - 2,500/شهر', living:'XCD 800 - 1,600/شهر', total:'XCD 1,800 - 4,100/شهر', popular:false, latlng:[12.1165, -61.6790]},
  {name:'أنتيغوا وبربودا', code:'ag', continent:'americas', capital:'سانت جونز', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.1 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'XCD 20,000 - 80,000', scholarships:'نعم، محدودة', housing:'XCD 1,200 - 3,000/شهر', living:'XCD 1,000 - 2,000/شهر', total:'XCD 2,200 - 5,000/شهر', popular:false, latlng:[17.0608, -61.7964]},
  {name:'دومينيكا', code:'dm', continent:'americas', capital:'روسو', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.073 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'XCD 12,000 - 50,000', scholarships:'نعم، محدودة', housing:'XCD 900 - 2,200/شهر', living:'XCD 700 - 1,500/شهر', total:'XCD 1,600 - 3,700/شهر', popular:false, latlng:[15.4150, -61.3710]},
  {name:'سانت كيتس ونيفيس', code:'kn', continent:'americas', capital:'باستير', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.048 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'XCD 20,000 - 70,000', scholarships:'نعم، محدودة', housing:'XCD 1,200 - 2,800/شهر', living:'XCD 1,000 - 2,000/شهر', total:'XCD 2,200 - 4,800/شهر', popular:false, latlng:[17.3578, -62.7830]},
  {name:'سانت فينسنت والغرينادين', code:'vc', continent:'americas', capital:'كينغستاون', language:'الإنجليزية', currency:'دولار شرق الكاريبي (XCD)', population:'0.1 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'XCD 12,000 - 50,000', scholarships:'نعم، محدودة', housing:'XCD 900 - 2,200/شهر', living:'XCD 700 - 1,500/شهر', total:'XCD 1,600 - 3,700/شهر', popular:false, latlng:[12.9843, -61.2872]},

  /* ==================== ASIA (دول إضافية) - آسيا ==================== */
  {name:'أفغانستان', code:'af', continent:'asia', capital:'كابول', language:'البشتوية، الدرية', currency:'أفغاني (AFN)', population:'41 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'AFN 20,000 - 100,000', scholarships:'نعم، محدودة', housing:'AFN 8,000 - 20,000/شهر', living:'AFN 6,000 - 12,000/شهر', total:'AFN 14,000 - 32,000/شهر', popular:false, latlng:[33.9391, 67.7100]},
  {name:'بنغلاديش', code:'bd', continent:'asia', capital:'دكا', language:'البنغالية', currency:'تاكا بنغالي (BDT)', population:'173 مليون', visas:['سياحة','دراسة'], unis:'+80 جامعة', fees:'BDT 50,000 - 300,000', scholarships:'نعم، محدودة', housing:'BDT 8,000 - 20,000/شهر', living:'BDT 6,000 - 12,000/شهر', total:'BDT 14,000 - 32,000/شهر', popular:false, latlng:[23.6850, 90.3563]},
  {name:'بوتان', code:'bt', continent:'asia', capital:'تيمفو', language:'الدزونغخا', currency:'نغولترم بوتاني (BTN)', population:'0.8 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'BTN 50,000 - 250,000', scholarships:'نعم، محدودة', housing:'BTN 8,000 - 20,000/شهر', living:'BTN 6,000 - 12,000/شهر', total:'BTN 14,000 - 32,000/شهر', popular:false, latlng:[27.5142, 90.4336]},
  {name:'نيبال', code:'np', continent:'asia', capital:'كاتماندو', language:'النيبالية', currency:'روبية نيبالية (NPR)', population:'30 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'NPR 100,000 - 600,000', scholarships:'نعم، محدودة', housing:'NPR 15,000 - 35,000/شهر', living:'NPR 12,000 - 25,000/شهر', total:'NPR 27,000 - 60,000/شهر', popular:false, latlng:[28.3949, 84.1240]},
  {name:'سريلانكا', code:'lk', continent:'asia', capital:'كولومبو', language:'السنهالية، التاميلية', currency:'روبية سريلانكية (LKR)', population:'22 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'LKR 200,000 - 1,500,000', scholarships:'نعم، محدودة', housing:'LKR 30,000 - 80,000/شهر', living:'LKR 25,000 - 50,000/شهر', total:'LKR 55,000 - 130,000/شهر', popular:false, latlng:[7.8731, 80.7718]},
  {name:'المالديف', code:'mv', continent:'asia', capital:'ماليه', language:'الديفيهي', currency:'روفية مالديفية (MVR)', population:'0.52 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'MVR 30,000 - 150,000', scholarships:'نعم، محدودة', housing:'MVR 5,000 - 12,000/شهر', living:'MVR 4,000 - 8,000/شهر', total:'MVR 9,000 - 20,000/شهر', popular:false, latlng:[3.2028, 73.2207]},
  {name:'ميانمار', code:'mm', continent:'asia', capital:'نايبيداو', language:'البورمية', currency:'كيات ميانماري (MMK)', population:'55 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'MMK 2,000,000 - 10,000,000', scholarships:'نعم، محدودة', housing:'MMK 400,000 - 1,000,000/شهر', living:'MMK 300,000 - 700,000/شهر', total:'MMK 700,000 - 1,700,000/شهر', popular:false, latlng:[21.9162, 95.9560]},
  {name:'كمبوديا', code:'kh', continent:'asia', capital:'بنوم بنه', language:'الخميرية', currency:'رييل كمبودي (KHR)', population:'17 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'KHR 4,000,000 - 20,000,000', scholarships:'نعم، محدودة', housing:'KHR 800,000 - 2,000,000/شهر', living:'KHR 600,000 - 1,200,000/شهر', total:'KHR 1,400,000 - 3,200,000/شهر', popular:false, latlng:[12.5657, 104.9910]},
  {name:'لاوس', code:'la', continent:'asia', capital:'فيينتيان', language:'اللاوية', currency:'كيب لاوسي (LAK)', population:'7.5 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'LAK 20,000,000 - 100,000,000', scholarships:'نعم، محدودة', housing:'LAK 4,000,000 - 10,000,000/شهر', living:'LAK 3,000,000 - 6,000,000/شهر', total:'LAK 7,000,000 - 16,000,000/شهر', popular:false, latlng:[19.8563, 102.4955]},
  {name:'بروناي', code:'bn', continent:'asia', capital:'بندر سري بكاوان', language:'الملايوية', currency:'دولار بروناي (BND)', population:'0.45 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'BND 8,000 - 30,000', scholarships:'نعم، متعددة', housing:'BND 800 - 1,800/شهر', living:'BND 600 - 1,200/شهر', total:'BND 1,400 - 3,000/شهر', popular:false, latlng:[4.5353, 114.7277]},
  {name:'تيمور الشرقية', code:'tl', continent:'asia', capital:'ديلي', language:'البرتغالية، التيتومية', currency:'دولار أمريكي (USD)', population:'1.4 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'$1,000 - $6,000', scholarships:'نعم، محدودة', housing:'$250 - $600/شهر', living:'$200 - $400/شهر', total:'$450 - $1,000/شهر', popular:false, latlng:[-8.8742, 125.7275]},
  {name:'أوزبكستان', code:'uz', continent:'asia', capital:'طشقند', language:'الأوزبكية', currency:'سوم أوزبكي (UZS)', population:'36 مليون', visas:['سياحة','دراسة','عمل'], unis:'+60 جامعة', fees:'UZS 15,000,000 - 60,000,000', scholarships:'نعم، متعددة', housing:'UZS 3,000,000 - 7,000,000/شهر', living:'UZS 2,500,000 - 5,000,000/شهر', total:'UZS 5,500,000 - 12,000,000/شهر', popular:false, latlng:[41.3775, 64.5853]},
  {name:'كازاخستان', code:'kz', continent:'asia', capital:'أستانا', language:'الكازاخية، الروسية', currency:'تينغي كازاخي (KZT)', population:'20 مليون', visas:['سياحة','دراسة','عمل'], unis:'+130 جامعة', fees:'KZT 1,000,000 - 5,000,000', scholarships:'نعم، متعددة', housing:'KZT 150,000 - 350,000/شهر', living:'KZT 120,000 - 250,000/شهر', total:'KZT 270,000 - 600,000/شهر', popular:false, latlng:[48.0196, 66.9237]},
  {name:'قيرغيزستان', code:'kg', continent:'asia', capital:'بيشكيك', language:'القيرغيزية، الروسية', currency:'سوم قيرغيزي (KGS)', population:'7 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'KGS 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'KGS 20,000 - 50,000/شهر', living:'KGS 15,000 - 30,000/شهر', total:'KGS 35,000 - 80,000/شهر', popular:false, latlng:[41.2044, 74.7661]},
  {name:'طاجيكستان', code:'tj', continent:'asia', capital:'دوشنبه', language:'الطاجيكية', currency:'سوموني طاجيكي (TJS)', population:'10 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'TJS 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'TJS 3,000 - 7,000/شهر', living:'TJS 2,500 - 5,000/شهر', total:'TJS 5,500 - 12,000/شهر', popular:false, latlng:[38.8610, 71.2761]},
  {name:'تركمانستان', code:'tm', continent:'asia', capital:'عشق آباد', language:'التركمانية', currency:'مانات تركماني (TMT)', population:'6.5 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'TMT 10,000 - 40,000', scholarships:'نعم، محدودة', housing:'TMT 1,500 - 3,500/شهر', living:'TMT 1,200 - 2,500/شهر', total:'TMT 2,700 - 6,000/شهر', popular:false, latlng:[38.9697, 59.5563]},
  {name:'أذربيجان', code:'az', continent:'asia', capital:'باكو', language:'الأذربيجانية', currency:'مانات أذربيجاني (AZN)', population:'10 مليون', visas:['سياحة','دراسة','عمل'], unis:'+40 جامعة', fees:'AZN 4,000 - 12,000', scholarships:'نعم، متعددة', housing:'AZN 600 - 1,400/شهر', living:'AZN 500 - 1,000/شهر', total:'AZN 1,100 - 2,400/شهر', popular:false, latlng:[40.1431, 47.5769]},
  {name:'أرمينيا', code:'am', continent:'asia', capital:'يريفان', language:'الأرمينية', currency:'درام أرميني (AMD)', population:'3 مليون', visas:['سياحة','دراسة'], unis:'+25 جامعة', fees:'AMD 800,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'AMD 150,000 - 350,000/شهر', living:'AMD 120,000 - 250,000/شهر', total:'AMD 270,000 - 600,000/شهر', popular:false, latlng:[40.0691, 45.0382]},
  {name:'جورجيا', code:'ge', continent:'asia', capital:'تبليسي', language:'الجورجية', currency:'لاري جورجي (GEL)', population:'3.7 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'GEL 4,000 - 15,000', scholarships:'نعم، محدودة', housing:'GEL 800 - 1,800/شهر', living:'GEL 600 - 1,200/شهر', total:'GEL 1,400 - 3,000/شهر', popular:false, latlng:[42.3154, 43.3569]},
  {name:'منغوليا', code:'mn', continent:'asia', capital:'أولان باتور', language:'المنغولية', currency:'توغروغ منغولي (MNT)', population:'3.5 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'MNT 15,000,000 - 40,000,000', scholarships:'نعم، محدودة', housing:'MNT 2,000,000 - 5,000,000/شهر', living:'MNT 1,500,000 - 3,000,000/شهر', total:'MNT 3,500,000 - 8,000,000/شهر', popular:false, latlng:[46.8625, 103.8467]},
  {name:'تايوان', code:'tw', continent:'asia', capital:'تايبيه', language:'الصينية', currency:'دولار تايواني (TWD)', population:'23 مليون', visas:['سياحة','دراسة'], unis:'+140 جامعة', fees:'TWD 100,000 - 400,000', scholarships:'نعم، متعددة', housing:'TWD 12,000 - 30,000/شهر', living:'TWD 10,000 - 20,000/شهر', total:'TWD 22,000 - 50,000/شهر', popular:false, latlng:[23.6978, 120.9605]},
  {name:'هونغ كونغ', code:'hk', continent:'asia', capital:'هونغ كونغ', language:'الصينية، الإنجليزية', currency:'دولار هونغ كونغ (HKD)', population:'7.5 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'HKD 60,000 - 200,000', scholarships:'نعم، متعددة', housing:'HKD 8,000 - 18,000/شهر', living:'HKD 6,000 - 12,000/شهر', total:'HKD 14,000 - 30,000/شهر', popular:false, latlng:[22.3193, 114.1694]},
  {name:'ماكاو', code:'mo', continent:'asia', capital:'ماكاو', language:'الصينية، البرتغالية', currency:'باتاكا ماكاو (MOP)', population:'0.7 مليون', visas:['سياحة','دراسة'], unis:'+4 جامعات', fees:'MOP 50,000 - 150,000', scholarships:'نعم، متعددة', housing:'MOP 6,000 - 14,000/شهر', living:'MOP 5,000 - 10,000/شهر', total:'MOP 11,000 - 24,000/شهر', popular:false, latlng:[22.1987, 113.5439]},
  {name:'كوريا الشمالية', code:'kp', continent:'asia', capital:'بيونغ يانغ', language:'الكورية', currency:'وون كوري شمالي (KPW)', population:'26 مليون', visas:['دراسة'], unis:'+30 جامعة', fees:'KPW 10,000 - 60,000', scholarships:'نعم، محدودة', housing:'KPW 2,000 - 5,000/شهر', living:'KPW 1,500 - 3,000/شهر', total:'KPW 3,500 - 8,000/شهر', popular:false, latlng:[40.3399, 127.5101]},

  /* ==================== AFRICA (دول إضافية) - أفريقيا ==================== */
  {name:'إريتريا', code:'er', continent:'africa', capital:'أسمرة', language:'التيغرينية، العربية', currency:'ناكفا إريتري (ERN)', population:'3.7 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'ERN 20,000 - 100,000', scholarships:'نعم، محدودة', housing:'ERN 3,000 - 7,000/شهر', living:'ERN 2,500 - 5,000/شهر', total:'ERN 5,500 - 12,000/شهر', popular:false, latlng:[15.1794, 39.7823]},
  {name:'رواندا', code:'rw', continent:'africa', capital:'كيغالي', language:'الكينيارواندا، الإنجليزية', currency:'فرنك رواندي (RWF)', population:'14 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'RWF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'RWF 100,000 - 250,000/شهر', living:'RWF 80,000 - 160,000/شهر', total:'RWF 180,000 - 410,000/شهر', popular:false, latlng:[-1.9403, 29.8739]},
  {name:'بوروندي', code:'bi', continent:'africa', capital:'غيتيغا', language:'الكيروندي، الفرنسية', currency:'فرنك بوروندي (BIF)', population:'13 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'BIF 1,000,000 - 5,000,000', scholarships:'نعم، محدودة', housing:'BIF 200,000 - 500,000/شهر', living:'BIF 150,000 - 300,000/شهر', total:'BIF 350,000 - 800,000/شهر', popular:false, latlng:[-3.3731, 29.9189]},
  {name:'أوغندا', code:'ug', continent:'africa', capital:'كمبالا', language:'الإنجليزية، السواحيلية', currency:'شلن أوغندي (UGX)', population:'48 مليون', visas:['سياحة','دراسة'], unis:'+30 جامعة', fees:'UGX 3,000,000 - 15,000,000', scholarships:'نعم، محدودة', housing:'UGX 600,000 - 1,500,000/شهر', living:'UGX 500,000 - 1,000,000/شهر', total:'UGX 1,100,000 - 2,500,000/شهر', popular:false, latlng:[1.3733, 32.2903]},
  {name:'جنوب السودان', code:'ss', continent:'africa', capital:'جوبا', language:'الإنجليزية، العربية', currency:'جنيه جنوب السودان (SSP)', population:'11 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'SSP 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'SSP 100,000 - 250,000/شهر', living:'SSP 80,000 - 160,000/شهر', total:'SSP 180,000 - 410,000/شهر', popular:false, latlng:[6.8770, 31.3070]},
  {name:'زامبيا', code:'zm', continent:'africa', capital:'لوساكا', language:'الإنجليزية، البيمبا', currency:'كواشا زامبي (ZMW)', population:'20 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'ZMW 40,000 - 200,000', scholarships:'نعم، محدودة', housing:'ZMW 4,000 - 10,000/شهر', living:'ZMW 3,000 - 6,000/شهر', total:'ZMW 7,000 - 16,000/شهر', popular:false, latlng:[-13.1339, 27.8493]},
  {name:'زيمبابوي', code:'zw', continent:'africa', capital:'هراري', language:'الإنجليزية، الشونا', currency:'دولار أمريكي (USD)', population:'16 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'$1,000 - $6,000', scholarships:'نعم، محدودة', housing:'$200 - $500/شهر', living:'$150 - $300/شهر', total:'$350 - $800/شهر', popular:false, latlng:[-19.0154, 29.1549]},
  {name:'مالاوي', code:'mw', continent:'africa', capital:'ليلونغوي', language:'الإنجليزية، الشيشيوا', currency:'كواشا مالاوي (MWK)', population:'21 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'MWK 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'MWK 100,000 - 250,000/شهر', living:'MWK 80,000 - 160,000/شهر', total:'MWK 180,000 - 410,000/شهر', popular:false, latlng:[-13.2543, 34.3015]},
  {name:'موزمبيق', code:'mz', continent:'africa', capital:'مابوتو', language:'البرتغالية', currency:'متكال موزمبيقي (MZN)', population:'33 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'MZN 50,000 - 200,000', scholarships:'نعم، محدودة', housing:'MZN 8,000 - 20,000/شهر', living:'MZN 6,000 - 12,000/شهر', total:'MZN 14,000 - 32,000/شهر', popular:false, latlng:[-18.6657, 35.5296]},
  {name:'مدغشقر', code:'mg', continent:'africa', capital:'أنتاناناريفو', language:'الملغاشية، الفرنسية', currency:'أرياري ملغاشي (MGA)', population:'30 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'MGA 2,000,000 - 10,000,000', scholarships:'نعم، محدودة', housing:'MGA 400,000 - 1,000,000/شهر', living:'MGA 300,000 - 600,000/شهر', total:'MGA 700,000 - 1,600,000/شهر', popular:false, latlng:[-18.7669, 46.8691]},
  {name:'موريشيوس', code:'mu', continent:'africa', capital:'بورت لويس', language:'الإنجليزية، الفرنسية', currency:'روبية موريشيوسية (MUR)', population:'1.3 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'MUR 100,000 - 400,000', scholarships:'نعم، متعددة', housing:'MUR 15,000 - 35,000/شهر', living:'MUR 12,000 - 25,000/شهر', total:'MUR 27,000 - 60,000/شهر', popular:false, latlng:[-20.3484, 57.5522]},
  {name:'سيشل', code:'sc', continent:'africa', capital:'فيكتوريا', language:'الكريولية، الإنجليزية، الفرنسية', currency:'روبية سيشيلية (SCR)', population:'0.1 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'SCR 60,000 - 200,000', scholarships:'نعم، محدودة', housing:'SCR 8,000 - 18,000/شهر', living:'SCR 6,000 - 12,000/شهر', total:'SCR 14,000 - 30,000/شهر', popular:false, latlng:[-4.6796, 55.4920]},
  {name:'أنغولا', code:'ao', continent:'africa', capital:'لواندا', language:'البرتغالية', currency:'كوانزا أنغولي (AOA)', population:'37 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'AOA 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'AOA 100,000 - 250,000/شهر', living:'AOA 80,000 - 160,000/شهر', total:'AOA 180,000 - 410,000/شهر', popular:false, latlng:[-11.2027, 17.8739]},
  {name:'ناميبيا', code:'na', continent:'africa', capital:'ويندهوك', language:'الإنجليزية', currency:'دولار ناميبي (NAD)', population:'2.6 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'NAD 30,000 - 120,000', scholarships:'نعم، محدودة', housing:'NAD 4,000 - 10,000/شهر', living:'NAD 3,000 - 6,000/شهر', total:'NAD 7,000 - 16,000/شهر', popular:false, latlng:[-22.9576, 18.4904]},
  {name:'بوتسوانا', code:'bw', continent:'africa', capital:'غابورون', language:'الإنجليزية، التسوانا', currency:'بولا بوتسواني (BWP)', population:'2.7 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'BWP 30,000 - 120,000', scholarships:'نعم، محدودة', housing:'BWP 3,500 - 8,000/شهر', living:'BWP 3,000 - 6,000/شهر', total:'BWP 6,500 - 14,000/شهر', popular:false, latlng:[-22.3285, 24.6849]},
  {name:'ليسوتو', code:'ls', continent:'africa', capital:'ماسيرو', language:'السيسوتو، الإنجليزية', currency:'لوتي ليسوتو (LSL)', population:'2.3 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'LSL 20,000 - 80,000', scholarships:'نعم، محدودة', housing:'LSL 2,500 - 6,000/شهر', living:'LSL 2,000 - 4,000/شهر', total:'LSL 4,500 - 10,000/شهر', popular:false, latlng:[-29.6100, 28.2336]},
  {name:'إسواتيني', code:'sz', continent:'africa', capital:'مبابان', language:'السوازي، الإنجليزية', currency:'ليلانغيني إسواتيني (SZL)', population:'1.2 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'SZL 20,000 - 80,000', scholarships:'نعم، محدودة', housing:'SZL 2,500 - 6,000/شهر', living:'SZL 2,000 - 4,000/شهر', total:'SZL 4,500 - 10,000/شهر', popular:false, latlng:[-26.5225, 31.4659]},
  {name:'الكونغو', code:'cg', continent:'africa', capital:'برازافيل', language:'الفرنسية', currency:'فرنك وسط أفريقيا (XAF)', population:'6 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XAF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'XAF 100,000 - 250,000/شهر', living:'XAF 80,000 - 160,000/شهر', total:'XAF 180,000 - 410,000/شهر', popular:false, latlng:[-0.2280, 15.8277]},
  {name:'الكونغو الديمقراطية', code:'cd', continent:'africa', capital:'كينشاسا', language:'الفرنسية', currency:'فرنك كونغولي (CDF)', population:'100 مليون', visas:['سياحة','دراسة'], unis:'+40 جامعة', fees:'CDF 1,000,000 - 6,000,000', scholarships:'نعم، محدودة', housing:'CDF 200,000 - 500,000/شهر', living:'CDF 150,000 - 300,000/شهر', total:'CDF 350,000 - 800,000/شهر', popular:false, latlng:[-4.0383, 21.7587]},
  {name:'الكاميرون', code:'cm', continent:'africa', capital:'ياوندي', language:'الفرنسية، الإنجليزية', currency:'فرنك وسط أفريقيا (XAF)', population:'28 مليون', visas:['سياحة','دراسة'], unis:'+20 جامعة', fees:'XAF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'XAF 100,000 - 250,000/شهر', living:'XAF 80,000 - 160,000/شهر', total:'XAF 180,000 - 410,000/شهر', popular:false, latlng:[7.3697, 12.3547]},
  {name:'تشاد', code:'td', continent:'africa', capital:'نجامينا', language:'الفرنسية، العربية', currency:'فرنك وسط أفريقيا (XAF)', population:'18 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XAF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XAF 90,000 - 200,000/شهر', living:'XAF 70,000 - 140,000/شهر', total:'XAF 160,000 - 340,000/شهر', popular:false, latlng:[15.4542, 18.7322]},
  {name:'النيجر', code:'ne', continent:'africa', capital:'نيامي', language:'الفرنسية', currency:'فرنك غرب أفريقيا (XOF)', population:'26 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XOF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XOF 90,000 - 200,000/شهر', living:'XOF 70,000 - 140,000/شهر', total:'XOF 160,000 - 340,000/شهر', popular:false, latlng:[17.6078, 8.0817]},
  {name:'مالي', code:'ml', continent:'africa', capital:'باماكو', language:'الفرنسية، البمبارا', currency:'فرنك غرب أفريقيا (XOF)', population:'23 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XOF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XOF 90,000 - 200,000/شهر', living:'XOF 70,000 - 140,000/شهر', total:'XOF 160,000 - 340,000/شهر', popular:false, latlng:[17.5707, -3.9962]},
  {name:'بوركينا فاسو', code:'bf', continent:'africa', capital:'واغادوغو', language:'الفرنسية', currency:'فرنك غرب أفريقيا (XOF)', population:'23 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XOF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XOF 90,000 - 200,000/شهر', living:'XOF 70,000 - 140,000/شهر', total:'XOF 160,000 - 340,000/شهر', popular:false, latlng:[12.2383, -1.5616]},
  {name:'السنغال', code:'sn', continent:'africa', capital:'داكار', language:'الفرنسية، الولوف', currency:'فرنك غرب أفريقيا (XOF)', population:'18 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'XOF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'XOF 100,000 - 250,000/شهر', living:'XOF 80,000 - 160,000/شهر', total:'XOF 180,000 - 410,000/شهر', popular:false, latlng:[14.4974, -14.4524]},
  {name:'غامبيا', code:'gm', continent:'africa', capital:'بانجول', language:'الإنجليزية', currency:'دالاسي غامبي (GMD)', population:'2.8 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'GMD 40,000 - 200,000', scholarships:'نعم، محدودة', housing:'GMD 6,000 - 15,000/شهر', living:'GMD 5,000 - 10,000/شهر', total:'GMD 11,000 - 25,000/شهر', popular:false, latlng:[13.4432, -15.3101]},
  {name:'غينيا بيساو', code:'gw', continent:'africa', capital:'بيساو', language:'البرتغالية', currency:'فرنك غرب أفريقيا (XOF)', population:'2.2 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'XOF 300,000 - 1,500,000', scholarships:'نعم، محدودة', housing:'XOF 80,000 - 180,000/شهر', living:'XOF 60,000 - 120,000/شهر', total:'XOF 140,000 - 300,000/شهر', popular:false, latlng:[11.8037, -15.1804]},
  {name:'غينيا', code:'gn', continent:'africa', capital:'كوناكري', language:'الفرنسية', currency:'فرنك غيني (GNF)', population:'14 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'GNF 3,000,000 - 15,000,000', scholarships:'نعم، محدودة', housing:'GNF 600,000 - 1,500,000/شهر', living:'GNF 500,000 - 1,000,000/شهر', total:'GNF 1,100,000 - 2,500,000/شهر', popular:false, latlng:[9.9456, -9.6966]},
  {name:'سيراليون', code:'sl', continent:'africa', capital:'فريتاون', language:'الإنجليزية', currency:'ليون سيراليوني (SLL)', population:'8.6 مليون', visas:['سياحة','دراسة'], unis:'+8 جامعات', fees:'SLL 5,000,000 - 25,000,000', scholarships:'نعم، محدودة', housing:'SLL 1,000,000 - 2,500,000/شهر', living:'SLL 800,000 - 1,600,000/شهر', total:'SLL 1,800,000 - 4,100,000/شهر', popular:false, latlng:[8.4606, -11.7799]},
  {name:'ليبيريا', code:'lr', continent:'africa', capital:'مونروفيا', language:'الإنجليزية', currency:'دولار ليبيري (LRD)', population:'5.4 مليون', visas:['سياحة','دراسة'], unis:'+8 جامعات', fees:'LRD 60,000 - 300,000', scholarships:'نعم، محدودة', housing:'LRD 12,000 - 30,000/شهر', living:'LRD 10,000 - 20,000/شهر', total:'LRD 22,000 - 50,000/شهر', popular:false, latlng:[6.4281, -9.4295]},
  {name:'ساحل العاج', code:'ci', continent:'africa', capital:'ياموسوكرو', language:'الفرنسية', currency:'فرنك غرب أفريقيا (XOF)', population:'29 مليون', visas:['سياحة','دراسة'], unis:'+15 جامعة', fees:'XOF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'XOF 100,000 - 250,000/شهر', living:'XOF 80,000 - 160,000/شهر', total:'XOF 180,000 - 410,000/شهر', popular:false, latlng:[7.5400, -5.5471]},
  {name:'توغو', code:'tg', continent:'africa', capital:'لومي', language:'الفرنسية', currency:'فرنك غرب أفريقيا (XOF)', population:'9 مليون', visas:['سياحة','دراسة'], unis:'+8 جامعات', fees:'XOF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XOF 90,000 - 200,000/شهر', living:'XOF 70,000 - 140,000/شهر', total:'XOF 160,000 - 340,000/شهر', popular:false, latlng:[8.6195, 0.8248]},
  {name:'بنين', code:'bj', continent:'africa', capital:'بورتو نوفو', language:'الفرنسية', currency:'فرنك غرب أفريقيا (XOF)', population:'13 مليون', visas:['سياحة','دراسة'], unis:'+10 جامعات', fees:'XOF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XOF 90,000 - 200,000/شهر', living:'XOF 70,000 - 140,000/شهر', total:'XOF 160,000 - 340,000/شهر', popular:false, latlng:[9.3077, 2.3158]},
  {name:'الرأس الأخضر', code:'cv', continent:'africa', capital:'برايا', language:'البرتغالية', currency:'إسكودو الرأس الأخضر (CVE)', population:'0.6 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'CVE 100,000 - 500,000', scholarships:'نعم، محدودة', housing:'CVE 15,000 - 35,000/شهر', living:'CVE 12,000 - 25,000/شهر', total:'CVE 27,000 - 60,000/شهر', popular:false, latlng:[16.5388, -23.0418]},
  {name:'ساو تومي وبرينسيبي', code:'st', continent:'africa', capital:'ساو تومي', language:'البرتغالية', currency:'دوبرا ساو تومي (STN)', population:'0.23 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'STN 20,000 - 100,000', scholarships:'نعم، محدودة', housing:'STN 3,000 - 7,000/شهر', living:'STN 2,500 - 5,000/شهر', total:'STN 5,500 - 12,000/شهر', popular:false, latlng:[0.1864, 6.6131]},
  {name:'الغابون', code:'ga', continent:'africa', capital:'ليبرفيل', language:'الفرنسية', currency:'فرنك وسط أفريقيا (XAF)', population:'2.4 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'XAF 500,000 - 3,000,000', scholarships:'نعم، محدودة', housing:'XAF 120,000 - 300,000/شهر', living:'XAF 100,000 - 200,000/شهر', total:'XAF 220,000 - 500,000/شهر', popular:false, latlng:[-0.8037, 11.6094]},
  {name:'غينيا الاستوائية', code:'gq', continent:'africa', capital:'مالابو', language:'الإسبانية، الفرنسية', currency:'فرنك وسط أفريقيا (XAF)', population:'1.7 مليون', visas:['سياحة','دراسة'], unis:'+3 جامعات', fees:'XAF 400,000 - 2,000,000', scholarships:'نعم، محدودة', housing:'XAF 100,000 - 250,000/شهر', living:'XAF 80,000 - 160,000/شهر', total:'XAF 180,000 - 410,000/شهر', popular:false, latlng:[1.6508, 10.2679]},
  {name:'أفريقيا الوسطى', code:'cf', continent:'africa', capital:'بانغي', language:'الفرنسية، السانغو', currency:'فرنك وسط أفريقيا (XAF)', population:'5.5 مليون', visas:['سياحة','دراسة'], unis:'+5 جامعات', fees:'XAF 300,000 - 1,500,000', scholarships:'نعم، محدودة', housing:'XAF 80,000 - 180,000/شهر', living:'XAF 60,000 - 120,000/شهر', total:'XAF 140,000 - 300,000/شهر', popular:false, latlng:[6.6111, 20.9394]},

  /* ==================== OCEANIA (دول إضافية) - أوقيانوسيا ==================== */
  {name:'بابوا غينيا الجديدة', code:'pg', continent:'oceania', capital:'بورت مورسبي', language:'الإنجليزية، التوك بيسين', currency:'كينا بابوا (PGK)', population:'10 مليون', visas:['سياحة','دراسة'], unis:'+6 جامعات', fees:'PGK 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'PGK 2,500 - 6,000/شهر', living:'PGK 2,000 - 4,000/شهر', total:'PGK 4,500 - 10,000/شهر', popular:false, latlng:[-6.3150, 143.9555]},
  {name:'ساموا', code:'ws', continent:'oceania', capital:'أبيا', language:'الساموية، الإنجليزية', currency:'تالا ساموي (WST)', population:'0.22 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'WST 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'WST 1,500 - 3,500/شهر', living:'WST 1,200 - 2,500/شهر', total:'WST 2,700 - 6,000/شهر', popular:false, latlng:[-13.7590, -172.1046]},
  {name:'تونغا', code:'to', continent:'oceania', capital:'نوكو ألوفا', language:'التونغية، الإنجليزية', currency:'بانغا تونغي (TOP)', population:'0.11 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'TOP 8,000 - 30,000', scholarships:'نعم، محدودة', housing:'TOP 1,200 - 2,800/شهر', living:'TOP 1,000 - 2,000/شهر', total:'TOP 2,200 - 4,800/شهر', popular:false, latlng:[-21.1789, -175.1982]},
  {name:'فانواتو', code:'vu', continent:'oceania', capital:'بورت فيلا', language:'البيسلامية، الإنجليزية، الفرنسية', currency:'فاتو فانواتي (VUV)', population:'0.33 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'VUV 200,000 - 800,000', scholarships:'نعم، محدودة', housing:'VUV 50,000 - 120,000/شهر', living:'VUV 40,000 - 80,000/شهر', total:'VUV 90,000 - 200,000/شهر', popular:false, latlng:[-15.3767, 166.9592]},
  {name:'جزر سليمان', code:'sb', continent:'oceania', capital:'هونيارا', language:'الإنجليزية', currency:'دولار جزر سليمان (SBD)', population:'0.7 مليون', visas:['سياحة','دراسة'], unis:'+2 جامعة', fees:'SBD 15,000 - 60,000', scholarships:'نعم، محدودة', housing:'SBD 3,000 - 7,000/شهر', living:'SBD 2,500 - 5,000/شهر', total:'SBD 5,500 - 12,000/شهر', popular:false, latlng:[-9.6457, 160.1562]},
  {name:'بالاو', code:'pw', continent:'oceania', capital:'نغيرولمود', language:'الإنجليزية، البالاوية', currency:'دولار أمريكي (USD)', population:'0.018 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'$2,000 - $10,000', scholarships:'نعم، محدودة', housing:'$500 - $1,200/شهر', living:'$400 - $800/شهر', total:'$900 - $2,000/شهر', popular:false, latlng:[7.5150, 134.5825]},
  {name:'ناورو', code:'nr', continent:'oceania', capital:'يارين', language:'الناوروية، الإنجليزية', currency:'دولار أسترالي (AUD)', population:'0.012 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'AUD 8,000 - 25,000', scholarships:'نعم، محدودة', housing:'AUD 800 - 1,800/شهر', living:'AUD 600 - 1,200/شهر', total:'AUD 1,400 - 3,000/شهر', popular:false, latlng:[-0.5228, 166.9315]},
  {name:'توفالو', code:'tv', continent:'oceania', capital:'فونافوتي', language:'التوفالوية، الإنجليزية', currency:'دولار أسترالي (AUD)', population:'0.011 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'AUD 8,000 - 25,000', scholarships:'نعم، محدودة', housing:'AUD 700 - 1,600/شهر', living:'AUD 600 - 1,200/شهر', total:'AUD 1,300 - 2,800/شهر', popular:false, latlng:[-7.1095, 177.6493]},
  {name:'كيريباتي', code:'ki', continent:'oceania', capital:'تاراوا', language:'الكيريباتية، الإنجليزية', currency:'دولار أسترالي (AUD)', population:'0.13 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'AUD 8,000 - 25,000', scholarships:'نعم، محدودة', housing:'AUD 700 - 1,600/شهر', living:'AUD 600 - 1,200/شهر', total:'AUD 1,300 - 2,800/شهر', popular:false, latlng:[1.8709, -157.3630]},
  {name:'جزر مارشال', code:'mh', continent:'oceania', capital:'ماجورو', language:'المارشالية، الإنجليزية', currency:'دولار أمريكي (USD)', population:'0.042 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'$2,000 - $10,000', scholarships:'نعم، محدودة', housing:'$500 - $1,200/شهر', living:'$400 - $800/شهر', total:'$900 - $2,000/شهر', popular:false, latlng:[7.1315, 171.1845]},
  {name:'ميكرونيزيا', code:'fm', continent:'oceania', capital:'باليكير', language:'الإنجليزية', currency:'دولار أمريكي (USD)', population:'0.11 مليون', visas:['سياحة','دراسة'], unis:'+1 جامعة', fees:'$2,000 - $10,000', scholarships:'نعم، محدودة', housing:'$500 - $1,200/شهر', living:'$400 - $800/شهر', total:'$900 - $2,000/شهر', popular:false, latlng:[7.4256, 150.5508]}
];

/* ============================================================
   3. EXTERNAL DATA SOURCE - REST Countries API
   المصدر الخارجي الموثوق لبيانات الدول الأساسية
   (الاسم بالعربي، العاصمة، اللغة، العملة، عدد السكان، رابط علم SVG)

   المصدر: https://api.restcountries.com/countries/v5
   المفتاح: config.js -> SAFR_CONFIG.restCountriesApiKey
   الكاش : localStorage (3 أيام كحد أقصى زي ما شروط الخدمة بتسمح)
   الاحتياطي: نفس الـ 60+ دولة اللي تحت لو النت قطع أو المفتاح مش موجود
   ============================================================ */

const REST_COUNTRIES_BASE = 'https://api.restcountries.com/countries/v5';

/* إسرائيل مستثناة من أي طلب أو قائمة */
const EXCLUDED_COUNTRY_CODES = ['il'];

const COUNTRIES_CACHE_KEY      = 'safr_countries_v1';
const COUNTRIES_CACHE_TIME_KEY = 'safr_countries_time_v1';

/* 3 أيام * 24 ساعة * 60 دقيقة * 60 ثانية */
const COUNTRIES_CACHE_TTL_MS = 3 * 24 * 60 * 60 * 1000;

/* مصدر البيانات الحالي: live | cache | fallback */
let countriesSource = 'fallback';
let countriesLastUpdate = null;

/* ------------------------------------------------------------
   3.A قاموس ترجمة اللغات
   (REST Countries بترجّع أسماء اللغات بالإنجليزي)
   ------------------------------------------------------------ */
const LANGUAGE_NAME_AR = {
  'Arabic':'العربية', 'German':'الألمانية', 'English':'الإنجليزية', 'French':'الفرنسية',
  'Italian':'الإيطالية', 'Spanish':'الإسبانية', 'Dutch':'الهولندية', 'Swedish':'السويدية',
  'Greek':'اليونانية', 'Portuguese':'البرتغالية', 'Polish':'البولندية', 'Czech':'التشيكية',
  'Danish':'الدنماركية', 'Norwegian':'النرويجية', 'Finnish':'الفنلندية', 'Icelandic':'الأيسلندية',
  'Hungarian':'الهنغارية', 'Romanian':'الرومانية', 'Bulgarian':'البلغارية', 'Croatian':'الكرواتية',
  'Serbian':'الصربية', 'Slovak':'السلوفاكية', 'Slovene':'السلوفينية', 'Slovenian':'السلوفينية',
  'Albanian':'الألبانية', 'Macedonian':'المقدونية', 'Bosnian':'البوسنية', 'Catalan':'الكاتالونية',
  'Irish':'الأيرلندية', 'Estonian':'الإستونية', 'Latvian':'اللاتفية', 'Lithuanian':'الليتوانية',
  'Maltese':'المالطية', 'Ukrainian':'الأوكرانية', 'Russian':'الروسية', 'Belarusian':'البيلاروسية',
  'Turkish':'التركية', 'Persian':'الفارسية', 'Hebrew':'العبرية', 'Kurdish':'الكردية',
  'Armenian':'الأرمينية', 'Georgian':'الجورجية', 'Azerbaijani':'الأذربيجانية', 'Kazakh':'الكازاخية',
  'Uzbek':'الأوزبكية', 'Turkmen':'التركمانية', 'Tajik':'الطاجيكية', 'Kyrgyz':'القرغيزية',
  'Mongolian':'المنغولية', 'Chinese':'الصينية', 'Japanese':'اليابانية', 'Korean':'الكورية',
  'Hindi':'الهندية', 'Urdu':'الأردية', 'Bengali':'البنغالية', 'Tamil':'التاميلية',
  'Telugu':'التيلوغوية', 'Sinhala':'السنهالية', 'Nepali':'النيبالية', 'Dzongkha':'الزونخية',
  'Thai':'التايلاندية', 'Lao':'اللاوية', 'Khmer':'الخميرية', 'Vietnamese':'الفيتنامية',
  'Burmese':'البورمية', 'Malay':'الملايوية', 'Indonesian':'الإندونيسية', 'Filipino':'الفلبينية',
  'Tagalog':'الفلبينية', 'Tetum':'التيتومية', 'Swahili':'السواحيلية', 'Amharic':'الأمهرية',
  'Somali':'الصومالية', 'Hausa':'الهوسا', 'Yoruba':'اليوروبا', 'Igbo':'الإيبو',
  'Zulu':'الزولو', 'Xhosa':'الخوسا', 'Afrikaans':'الأفريكانية', 'Sotho':'السوتو',
  'Southern Sotho':'السوتو', 'Tswana':'التسوانية', 'Shona':'الشونا', 'Malagasy':'الملغاشية',
  'Oromo':'الأورومو', 'Tigrinya':'التغرينية', 'Kinyarwanda':'الكينيارواندا', 'Kirundi':'الكيروندية',
  'Luganda':'لوغاندا', 'Chichewa':'الشيشيوا', 'Samoan':'الساموية', 'Tongan':'التونغية',
  'Fijian':'الفيجية', 'Maori':'الماورية', 'Māori':'الماورية', 'Quechua':'الكيتشوا',
  'Guarani':'الغواراني', 'Aymara':'الأيمارا', 'Haitian Creole':'الكريولية الهايتية',
  'Papiamento':'البابيامنتو', 'Greenlandic':'الغرينلاندية', 'Faroese':'الفاروية',
  'Luxembourgish':'اللوكسمبورغية', 'Romansh':'الرومانشية', 'Swiss German':'الألمانية السويسرية'
};


/* ------------------------------------------------------------
   3.B قاموس ترجمة العملات (كود العملة -> الاسم بالعربي)
   ------------------------------------------------------------ */
const CURRENCY_NAME_AR = {
  EUR:'يورو', USD:'دولار أمريكي', GBP:'جنيه إسترليني', EGP:'جنيه مصري', SAR:'ريال سعودي',
  AED:'درهم إماراتي', QAR:'ريال قطري', KWD:'دينار كويتي', BHD:'دينار بحريني', OMR:'ريال عماني',
  JOD:'دينار أردني', LBP:'ليرة لبنانية', SYP:'ليرة سورية', IQD:'دينار عراقي', MAD:'درهم مغربي',
  TND:'دينار تونسي', DZD:'دينار جزائري', LYD:'دينار ليبي', SDG:'جنيه سوداني', YER:'ريال يمني',
  MRU:'أوقية موريتانية', SOS:'شلن صومالي', DJF:'فرنك جيبوتي', KMF:'فرنك قمري',
  CHF:'فرنك سويسري', SEK:'كرونة سويدية', NOK:'كرونة نرويجية', DKK:'كرونة دنماركية',
  ISK:'كرونة آيسلندية', PLN:'زلوتي بولندي', CZK:'كورونا تشيكية', HUF:'فورنت هنغاري',
  RON:'ليو روماني', BGN:'ليف بلغاري', RSD:'دينار صربي', MKD:'دينار مقدوني', ALL:'ليك ألباني',
  BAM:'مارك بوسني', MDL:'ليو مولدوفي', UAH:'هريفنيا أوكرانية', RUB:'روبل روسي',
  BYN:'روبل بيلاروسي', TRY:'ليرة تركية', GEL:'لاري جورجي', AMD:'درام أرميني',
  AZN:'مانات أذربيجاني', KZT:'تينغ كازاخستاني', UZS:'سوم أوزبكي', TMT:'مانات تركمانستاني',
  TJS:'سوموني طاجيكي', KGS:'سوم قرغيزي', MNT:'توغروغ منغولي',
  CAD:'دولار كندي', MXN:'بيزو مكسيكي', BRL:'ريال برازيلي', ARS:'بيزو أرجنتيني',
  CLP:'بيزو تشيلي', COP:'بيزو كولومبي', PEN:'سول بيروفي', UYU:'بيزو أوروغواياني',
  VES:'بوليفار فنزويلي', PYG:'غواراني باراغوايي', BOB:'بوليفيانو بوليفي', PAB:'بالبوا بنمي',
  CRC:'كولون كوستاريكي', GTQ:'كيتزال غواتيمالي', HNL:'لمبيرة هندوراسية', NIO:'قرطبة نيكاراغوية',
  DOP:'بيزو دومينيكي', CUP:'بيزو كوبي', HTG:'غورد هايتي', JMD:'دولار جامايكي',
  TTD:'دولار ترينيدادي', BBD:'دولار بربادوسي', BZD:'دولار بليزي', BMD:'دولار برمودي',
  KYD:'دولار كايماني', GYD:'دولار غياني', SRD:'دولار سورينامي', XCD:'دولار شرق الكاريبي',
  CNY:'يوان صيني', JPY:'ين ياباني', KRW:'وون كوري جنوبي', INR:'روبية هندية',
  PKR:'روبية باكستانية', BDT:'تاكا بنغلاديشي', LKR:'روبية سريلانكية', NPR:'روبية نيبالية',
  IDR:'روبية إندونيسية', MYR:'رينغيت ماليزي', SGD:'دولار سنغافوري', THB:'بات تايلاندي',
  VND:'دونغ فيتنامي', PHP:'بيزو فلبيني', TWD:'دولار تايواني', HKD:'دولار هونغ كونغ',
  MOP:'باتاكا ماكاوية', BND:'دولار بروناي', KHR:'رييل كمبودي', LAK:'كيب لاوسي',
  MMK:'كيات ميانماري', NZD:'دولار نيوزيلندي', AUD:'دولار أسترالي', FJD:'دولار فيجي',
  PGK:'كينا بابوا غينيا', SBD:'دولار جزر سليمان', VUV:'فاتو فانواتي', WST:'تالا ساموي',
  TOP:'بانغا تونغا', XPF:'فرنك المحيط الهادئ', ZAR:'راند جنوب أفريقي', NGN:'نيرا نيجيري',
  KES:'شلن كيني', ETB:'بير إثيوبي', GHS:'سيدي غاني', TZS:'شلن تنزاني', UGX:'شلن أوغندي',
  RWF:'فرنك رواندي', XOF:'فرنك غرب أفريقي', XAF:'فرنك وسط أفريقي', MUR:'روبية موريشيوسية',
  MZN:'متكال موزمبيقي', ZMW:'كواشا زامبي', MWK:'كواشا مالاوي', BWP:'بولا بوتسواني',
  NAD:'دولار ناميبي', SZL:'ليلانغيني سوازي', LSL:'لوتي ليسوتو', GMD:'دالاسي غامبي',
  GNF:'فرنك غيني', SLL:'ليون سيراليوني', LRD:'دولار ليبيري', CVE:'إسكودو الرأس الأخضر',
  STN:'دوبرا', AOA:'كوانزا أنغولي', CDF:'فرنك كونغولي', GIP:'جنيه جبل طارق',
  ANG:'غيلدر أنتيلي هولندي', AWG:'فلورين أروبي', ILS:'شيكل'
};

/* ============================================================
   3.C دوال التحويل (REST Countries -> شكل بياناتنا)
   ============================================================ */

/* إسرائيل وأي كود محظور بيتم استثناؤه فوراً */
function isExcludedCountry(code) {
  return EXCLUDED_COUNTRY_CODES.indexOf(String(code || '').toLowerCase()) !== -1;
}

/* كود الدولة (alpha_2) من رد الـ API */
function getApiCountryCode(obj) {
  if (!obj) return '';
  if (obj.codes && obj.codes.alpha_2) return String(obj.codes.alpha_2).toLowerCase();
  if (obj.cca2) return String(obj.cca2).toLowerCase();
  return '';
}

/* عدد السكان -> "84.5 مليون" / "950 ألف" */
function formatPopulationAr(n) {
  const num = typeof n === 'string' ? parseFloat(n) : n;
  if (typeof num !== 'number' || !isFinite(num) || num <= 0) return '';
  if (num >= 1000000) {
    const m = num / 1000000;
    return (m >= 10 ? Math.round(m) : Math.round(m * 10) / 10) + ' مليون';
  }
  if (num >= 1000) return Math.round(num / 1000) + ' ألف';
  return String(num);
}

/* اللغات -> "الألمانية، الفرنسية" */
function languagesToArabic(languages) {
  if (!Array.isArray(languages)) return '';
  const out = [];
  languages.forEach(function (lang) {
    if (!lang) return;
    const en = (typeof lang === 'string') ? lang : (lang.name || '');
    if (!en) return;
    const ar = LANGUAGE_NAME_AR[en] || en;
    if (out.indexOf(ar) === -1) out.push(ar);   // بدون تكرار
  });
  return out.join('، ');
}

/* العملات -> "يورو (EUR)" — نفس الصيغة اللي app.js بيتوقعها */
function currenciesToArabic(currencies) {
  if (!Array.isArray(currencies)) return '';
  const out = [];
  currencies.forEach(function (cur) {
    if (!cur || !cur.code) return;
    const code = String(cur.code).toUpperCase();
    const ar = CURRENCY_NAME_AR[code] || cur.name || code;
    out.push(ar + ' (' + code + ')');
  });
  return out.join('، ');
}

/* بيانات العلم (SVG أولاً زي ما المطلوب) */
function extractFlag(obj) {
  const flag = obj && (obj.flag || obj.flags) ? (obj.flag || obj.flags) : {};
  return {
    svg: flag.url_svg || flag.svg || '',
    png: flag.url_png || flag.png || '',
    emoji: flag.emoji || ''
  };
}

/* إحداثيات الدولة (لو الـ API مافيها إحداثيات الدولة هناخد إحداثيات العاصمة) */
function extractLatLng(obj) {
  if (!obj) return null;

  const geo = obj.coordinates || obj.latlng || obj.latlngv2 || null;
  if (geo && typeof geo.lat === 'number' && typeof geo.lng === 'number') return [geo.lat, geo.lng];
  if (Array.isArray(geo) && geo.length === 2 && typeof geo[0] === 'number') return [geo[0], geo[1]];

  // خطة بديلة: إحداثيات العاصمة
  const capitals = Array.isArray(obj.capitals) ? obj.capitals : [];
  const primary = capitals.find(function (x) { return x && x.primary; }) || capitals[0];
  if (primary && primary.coordinates &&
      typeof primary.coordinates.lat === 'number' &&
      typeof primary.coordinates.lng === 'number') {
    return [primary.coordinates.lat, primary.coordinates.lng];
  }
  return null;
}

/* تحويل سجل واحد من الـ API للشكل اللي التطبيق بيستخدمه */
function mapApiCountry(obj) {
  if (!obj) return null;

  const names = obj.names || {};
  const translations = names.translations || {};
  const arabic = translations.ara || {};
  const nameAr = arabic.common || arabic.official || names.common || names.official || '';

  // العاصمة: v5 بيرجّعها مصفوفة كائنات
  let capital = '';
  const capitals = Array.isArray(obj.capitals) ? obj.capitals : obj.capital;
  if (Array.isArray(capitals) && capitals.length) {
    const primary = capitals.find(function (x) { return x && x.primary; }) || capitals[0];
    capital = (typeof primary === 'string') ? primary : ((primary && primary.name) || '');
  } else if (typeof capitals === 'string') {
    capital = capitals;
  }

  const flag = extractFlag(obj);

  return {
    code: getApiCountryCode(obj),
    name: nameAr,
    capital: capital,
    language: languagesToArabic(obj.languages),
    currency: currenciesToArabic(obj.currencies),
    population: formatPopulationAr(obj.population),
    flagSvg: flag.svg,
    flagPng: flag.png,
    region: obj.region || '',
    latlng: extractLatLng(obj)
  };
}

/* استخراج مصفوفة الدول من رد الـ API */
function extractApiObjects(payload) {
  if (!payload) return [];
  const data = payload.data || payload;

  // المفتاح التجريبي بيرجّع رد وهمي — بنرفضه عشان مايلخبطش البيانات
  if (data && data._demo) {
    console.warn('⚠️ REST Countries رجّع رد تجريبي (demo key) — تم تجاهله.');
    return [];
  }

  const objects = data.objects || data.results || data.countries || (Array.isArray(data) ? data : []);
  return Array.isArray(objects) ? objects : [];
}


/* ============================================================
   3.D دمج البيانات الخارجية مع قائمتنا
   ============================================================ */

/* منطقة الـ API -> مفتاح القارة عندنا */
function guessContinentKey(region) {
  const map = {
    'Europe': 'europe',
    'Asia': 'asia',
    'Africa': 'africa',
    'Americas': 'americas',
    'Oceania': 'oceania'
  };
  return map[region] || null;
}

/* حقول السعر مش بتيجي من الـ API — بنحط قيم آمنة للدول الجديدة
   عشان الواجهة ماتضربش (visas.map / fees / housing ... إلخ) */
function buildEmptyPlaceholders() {
  return {
    visas: [],
    unis: '—',
    fees: '—',
    scholarships: '—',
    housing: '—',
    living: '—',
    total: '—',
    popular: false
  };
}

/**
 * تدمج بيانات الـ API جوة مصفوفة countries (تعديل في المكان
 * لأن countries ثابت const)
 * @param {Array} apiList قائمة الدول القادمة من mapApiCountry
 * @param {boolean} includeExtra إضافة الدول اللي مش عندنا في القائمة المحلية
 * @returns {number} عدد الدول اللي احدّثت
 */
function applyCountriesFromApi(apiList, includeExtra) {
  if (!Array.isArray(apiList)) return 0;

  // فهرسة بالكود + استثناء إسرائيل
  const byCode = {};
  apiList.forEach(function (m) {
    if (!m || !m.code) return;
    if (isExcludedCountry(m.code)) return;      // ← استثناء إسرائيل
    byCode[m.code] = m;
  });

  let matched = 0;

  // 1) حدّث الدول الموجودة عندنا بالبيانات الرسمية
  countries.forEach(function (c) {
    const m = byCode[c.code];
    if (!m) return;

    if (m.name)       c.name = m.name;
    if (m.capital)    c.capital = m.capital;
    if (m.language)   c.language = m.language;
    if (m.currency)   c.currency = m.currency;
    if (m.population) c.population = m.population;
    if (m.flagSvg)    c.flagSvg = m.flagSvg;
    if (m.flagPng)    c.flagPng = m.flagPng;
    if (m.latlng)     c.latlng = m.latlng;

    c.fromApi = true;
    matched++;

    delete byCode[c.code];   // مايتضافش تاني تحت
  });

  // 2) (اختياري) ضيف الدول اللي مش عندنا
  if (includeExtra) {
    Object.keys(byCode).forEach(function (code) {
      const m = byCode[code];
      if (!m.name) return;

      const continentKey = guessContinentKey(m.region);
      if (!continentKey) return;   // قارة مش معروفة عندنا -> نتجاهلها

      countries.push(Object.assign({
        name: m.name,
        code: m.code,
        continent: continentKey,
        capital: m.capital || '—',
        language: m.language || '—',
        currency: m.currency || '—',
        population: m.population || '—',
        flagSvg: m.flagSvg || '',
        flagPng: m.flagPng || '',
        latlng: m.latlng || null,
        fromApi: true
      }, buildEmptyPlaceholders()));
    });
  }

  return matched;
}

/* رابط علم الدولة: مكتبة flag-icons الرسمية (4:3 SVG) كأولوية،
   و flags.js المحلي (getFlag) كـ fallback لو الكود مش متاح.
   أي علم راجع من الـ API بيتجاهل تماماً */
function getCountryFlagUrl(country, size) {
  const code = country ? country.code : '';
  if (!code) return '';
  if (typeof flagUrl === 'function') return flagUrl(code, size);
  if (typeof getFlag === 'function') return getFlag(code);
  return '';
}


/* ============================================================
   3.E الكاش (localStorage)
   بيخلي التطبيق يشتغل لو النت قطع
   ============================================================ */

function writeCountriesCache(list) {
  try {
    localStorage.setItem(COUNTRIES_CACHE_KEY, JSON.stringify(list));
    localStorage.setItem(COUNTRIES_CACHE_TIME_KEY, new Date().toISOString());
  } catch (e) {
    console.warn('⚠️ فشل تخزين كاش الدول:', e.message);
  }
}

/**
 * اقرأ الكاش
 * @param {boolean} allowStale اقبل كاش قديم حتى لو عدّى المدة (للطوارئ)
 */
function readCountriesCache(allowStale) {
  try {
    const raw = localStorage.getItem(COUNTRIES_CACHE_KEY);
    const timeStr = localStorage.getItem(COUNTRIES_CACHE_TIME_KEY);
    if (!raw || !timeStr) return null;

    const time = new Date(timeStr);
    if (isNaN(time.getTime())) return null;

    const age = Date.now() - time.getTime();
    if (!allowStale && age > COUNTRIES_CACHE_TTL_MS) return null;

    const list = JSON.parse(raw);
    if (!Array.isArray(list) || list.length === 0) return null;

    return { list: list, time: time };
  } catch (e) {
    return null;
  }
}

/* ============================================================
   3.F تحميل بيانات الدول
   ============================================================ */

/**
 * بيجيب بيانات الدول من REST Countries ويدمجها مع بياناتنا،
 * ومع فشل الشبكة بيرجع للكاش وبعدين للبيانات المحلية.
 *
 * @param {Object} options { force: true, includeExtra: true }
 * @returns {Promise<string>} live | cache | fallback
 */
async function loadCountriesData(options) {
  const opts = options || {};
  const includeExtra = opts.includeExtra === true;

  // 1) الكاش الساري الأول (أسرع + بيعمل offline)
  if (!opts.force) {
    const cached = readCountriesCache(false);
    if (cached) {
      applyCountriesFromApi(cached.list, includeExtra);
      countriesSource = 'cache';
      countriesLastUpdate = cached.time;
      console.log('💾 Countries loaded from cache (' + cached.list.length + ' records)');
      return countriesSource;
    }
  }

  // 2) المفتاح
  const apiKey = (typeof getSafrKey === 'function') ? getSafrKey('restCountriesApiKey') : '';
  if (!apiKey || apiKey === REST_COUNTRIES_DEMO_KEY) {
    countriesSource = 'fallback';
    console.warn(
      '⚠️ مفيش مفتاح صالح لـ REST Countries — هنستخدم البيانات الاحتياطية (' +
      countries.length + ' دولة).\n' +
      '   سجّل مجاناً من https://restcountries.com/sign-up وحط المفتاح في config.js'
    );
    return countriesSource;
  }

  // 3) المصدر الخارجي الموثوق
  try {
    console.log('🌐 Fetching countries from REST Countries...');

    const payload = await fetchJsonWithTimeout(REST_COUNTRIES_BASE, {
      headers: {
        'Authorization': 'Bearer ' + apiKey,
        'Accept': 'application/json'
      }
    });

    const objects = extractApiObjects(payload);
    if (!objects.length) throw new Error('رد فاضي من الـ API');

    // تحويل + استثناء إسرائيل قبل أي تخزين
    const list = objects
      .filter(function (o) { return !isExcludedCountry(getApiCountryCode(o)); })
      .map(mapApiCountry)
      .filter(function (m) { return m && m.code && m.name; });

    if (!list.length) throw new Error('مفيش دول صالحة في الرد');

    writeCountriesCache(list);                 // احفظ للـ offline
    const matched = applyCountriesFromApi(list, includeExtra);   // طبّق

    countriesSource = 'live';
    countriesLastUpdate = new Date();

    console.log('🌍 Countries loaded from REST Countries:', list.length, 'records');
    console.log('✅ تم تحديث بيانات', matched, 'دولة من المصدر الرسمي');
    return countriesSource;

  } catch (err) {
    console.warn('⚠️ فشل تحميل بيانات الدول من REST Countries:', err.message);

    // جرّب كاش قديم (أحسن من مفيش)
    const stale = readCountriesCache(true);
    if (stale) {
      applyCountriesFromApi(stale.list, includeExtra);
      countriesSource = 'cache';
      countriesLastUpdate = stale.time;
      console.log('💾 رجعنا لكاش قديم (' + stale.list.length + ' records)');
      return countriesSource;
    }

    countriesSource = 'fallback';
    console.log('🛟 بنستخدم البيانات الاحتياطية المحلية (' + countries.length + ' دولة)');
    return countriesSource;
  }
}

console.log('🗺️ Countries data module loaded (' + countries.length + ' fallback countries)');

