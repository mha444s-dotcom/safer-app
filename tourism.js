/* ============================================================
   SAFR APP - TOURISM.JS
   بيانات السياحة لكل دولة: المدن والمعالم السياحية
   11 دولة: fr, it, tr, ae, eg, gb, es, de, us, jp, th  (44 مدينة / 236 معلم)
   الصور من Wikimedia Commons
   ============================================================ */

const tourismData = {

  /* ==================== فرنسا - France ==================== */
  fr: {
    country: 'فرنسا',
    cities: [

      /* --- باريس --- */
      {
        name: 'باريس',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg/1280px-La_Tour_Eiffel_vue_de_la_Tour_Saint-Jacques%2C_Paris_ao%C3%BBt_2014_%282%29.jpg',
        description: 'عاصمة النور، مدينة الحب والفن',
        landmarks: [
          {
            name: 'برج إيفل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg/960px-Tour_Eiffel_Wikimedia_Commons_%28cropped%29.jpg',
            address: 'Champ de Mars, 5 Av. Anatole France, 75007 Paris',
            description: 'برج حديدي شهير، رمز فرنسا والعالم',
            bestTime: 'أبريل - يونيو',
            ticket: '€26'
          },
          {
            name: 'متحف اللوفر',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/Louvre_Museum_Wikimedia_Commons.jpg/960px-Louvre_Museum_Wikimedia_Commons.jpg',
            address: 'Rue de Rivoli, 75001 Paris',
            description: 'أكبر متحف فني في العالم، ويضم لوحة الموناليزا',
            bestTime: 'سبتمبر - نوفمبر',
            ticket: '€22'
          },
          {
            name: 'كاتدرائية نوتردام',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Notre-Dame_de_Paris%2C_4_October_2017.jpg/960px-Notre-Dame_de_Paris%2C_4_October_2017.jpg',
            address: '6 Parvis Notre-Dame, 75004 Paris',
            description: 'كاتدرائية قوطية أيقونية على ضفاف نهر السين',
            bestTime: 'أبريل - أكتوبر',
            ticket: 'الدخول مجاني'
          },
          {
            name: 'قوس النصر',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg/960px-Arc_de_Triomphe_-_Ao%C3%BBt_2026.jpg',
            address: 'Place Charles de Gaulle, 75008 Paris',
            description: 'قوس تاريخي في نهاية شارع الشانزليزيه',
            bestTime: 'أبريل - يونيو',
            ticket: '€16'
          },
          {
            name: 'كنيسة ساكري كور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Le_sacre_coeur.jpg/960px-Le_sacre_coeur.jpg',
            address: '35 Rue du Chevalier de la Barre, 75018 Paris',
            description: 'بازيليكا بيضاء على تلة مونمارتر بإطلالة بانورامية',
            bestTime: 'مايو - سبتمبر',
            ticket: 'الدخول مجاني'
          },
          {
            name: 'شارع الشانزليزيه',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg/960px-Avenue_des_Champs-%C3%89lys%C3%A9es_July_24%2C_2009_N1.jpg',
            address: 'Avenue des Champs-Élysées, 75008 Paris',
            description: 'أشهر شارع في العالم للتسوق والتنزه',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- نيس --- */
      {
        name: 'نيس',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Promenade_des_Anglais_Nice_IMG_1255.jpg/1280px-Promenade_des_Anglais_Nice_IMG_1255.jpg',
        description: 'جوهرة الريفييرا الفرنسية على البحر المتوسط',
        landmarks: [
          {
            name: 'ممشى الإنجليز',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Nice-night-view-with-blurred-cars_1200x900.jpg/960px-Nice-night-view-with-blurred-cars_1200x900.jpg',
            address: 'Promenade des Anglais, 06000 Nice',
            description: 'كورنيش ساحلي شهير يمتد على طول شاطئ البحر المتوسط',
            bestTime: 'مايو - سبتمبر',
            ticket: 'مجاني'
          },
          {
            name: 'تلة القلعة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Nice_from_Castle_Hill_01.jpg/960px-Nice_from_Castle_Hill_01.jpg',
            address: 'Colline du Château, 06300 Nice',
            description: 'حديقة مرتفعة بإطلالة بانورامية على المدينة والبحر',
            bestTime: 'مارس - أكتوبر',
            ticket: 'مجاني (تلفريك مدفوع)'
          },
          {
            name: 'ساحة ماسينا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Place-Mass%C3%A9na_01.jpg/960px-Place-Mass%C3%A9na_01.jpg',
            address: 'Place Masséna, 06000 Nice',
            description: 'أكبر ساحات نيس بأرضيتها الرخامية ونافورتها الشهيرة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'البلدة القديمة (فيو نيس)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Vue_du_Vieux-Nice.jpg/960px-Vue_du_Vieux-Nice.jpg',
            address: 'Vieux Nice, 06300 Nice',
            description: 'أزقة ضيقة ملوّنة عامرة بالمطاعم والمحلات التقليدية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'الكاتدرائية الأرثوذكسية الروسية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Cath%C3%A9drale_ortodoxe_russe.jpg/960px-Cath%C3%A9drale_ortodoxe_russe.jpg',
            address: 'Av. Nicolas II, 06000 Nice',
            description: 'من أكبر الكاتدرائيات الأرثوذكسية الروسية خارج روسيا',
            bestTime: 'طوال العام',
            ticket: '€3'
          },
          {
            name: 'سوق كور ساليا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cours_Saleya_-_Nice.jpg/960px-Cours_Saleya_-_Nice.jpg',
            address: 'Cours Saleya, 06300 Nice',
            description: 'سوق مفتوح شهير للزهور والخضروات والأطعمة المحلية',
            bestTime: 'الصباح (ما عدا الاثنين)',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- ليون --- */
      {
        name: 'ليون',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/97/Lyon-part-dieu-2023.jpg/1280px-Lyon-part-dieu-2023.jpg',
        description: 'عاصمة المطبخ الفرنسي ومدينة التراث العالمي',
        landmarks: [
          {
            name: 'بازيليكا فورفيير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Fourviere_Lyon.jpg/960px-Fourviere_Lyon.jpg',
            address: '8 Pl. de Fourvière, 69005 Lyon',
            description: 'بازيليكا على تلة فورفيير تطل على مدينة ليون كاملة',
            bestTime: 'مايو - سبتمبر',
            ticket: 'الدخول مجاني'
          },
          {
            name: 'ليون القديمة (فيو ليون)',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Vieuxlyon_saintjean_toits.jpg/960px-Vieuxlyon_saintjean_toits.jpg',
            address: 'Vieux Lyon, 69005 Lyon',
            description: 'حي تراثي مُدرج لدى اليونسكو بشوارع من العصور الوسطى',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'ساحة بيلكور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Place_Bellecour_%28Lyon%2C_2024%2C_version_recentr%C3%A9e_2%29.jpg/960px-Place_Bellecour_%28Lyon%2C_2024%2C_version_recentr%C3%A9e_2%29.jpg',
            address: 'Place Bellecour, 69002 Lyon',
            description: 'من أكبر الساحات المفتوحة في أوروبا وتضم تمثال لويس الرابع عشر',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'حديقة تيت دور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Parc_de_la_T%C3%AAte_d%27Or_Vue_sur_le_lac7.jpg/960px-Parc_de_la_T%C3%AAte_d%27Or_Vue_sur_le_lac7.jpg',
            address: 'Pl. Général Leclerc, 69006 Lyon',
            description: 'أكبر حديقة في ليون ببحيرة وحديقة حيوان مجانية',
            bestTime: 'أبريل - أكتوبر',
            ticket: 'مجاني'
          },
          {
            name: 'كاتدرائية سان جان',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Lyon_-_Primatiale_Saint-Jean_6964.jpg/960px-Lyon_-_Primatiale_Saint-Jean_6964.jpg',
            address: 'Pl. Saint-Jean, 69005 Lyon',
            description: 'كاتدرائية قوطية تاريخية في قلب مدينة ليون القديمة',
            bestTime: 'طوال العام',
            ticket: 'الدخول مجاني'
          },
          {
            name: 'ساحة تيرو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Lyon_1er_-_Place_des_Terreaux_-_H%C3%B4tel_de_Ville_-_Statue_d%27Hercule.jpg/960px-Lyon_1er_-_Place_des_Terreaux_-_H%C3%B4tel_de_Ville_-_Statue_d%27Hercule.jpg',
            address: 'Place des Terreaux, 69001 Lyon',
            description: 'ساحة تاريخية بنافورة بارتولدي ومتحف الفنون الجميلة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      }

    ]
  },

  /* ==================== إيطاليا - Italy ==================== */
  it: {
    country: 'إيطاليا',
    cities: [
      /* --- روما --- */
      {
        name: 'روما',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rome_skyline_panorama.jpg/1280px-Rome_skyline_panorama.jpg',
        description: 'المدينة الخالدة وعاصمة إيطاليا',
        landmarks: [
          {
            name: 'الكولوسيوم',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Colosseo_2020.jpg/960px-Colosseo_2020.jpg',
            address: 'Piazza del Colosseo 1, 00184 Roma',
            description: 'مدرج روماني ضخم من القرن الأول ومن عجائب الدنيا السبع الجديدة',
            bestTime: 'أبريل - يونيو',
            ticket: '€18'
          },
          {
            name: 'نافورة تريفي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Trevi_Fountain_-_Roma.jpg/960px-Trevi_Fountain_-_Roma.jpg',
            address: 'Piazza di Trevi, 00187 Roma',
            description: 'أشهر نافورة باروكية في العالم ويرمي فيها الزوار العملة ليعودوا لروما',
            bestTime: 'الصباح الباكر',
            ticket: 'مجاني'
          },
          {
            name: 'البانثيون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7b/Pantheon_%28Rome%29_-_Right_side_and_front.jpg/960px-Pantheon_%28Rome%29_-_Right_side_and_front.jpg',
            address: 'Piazza della Rotonda, 00186 Roma',
            description: 'معبد روماني قديم بقبة دائرية تتسلل منها الشمس من فتحة في الوسط',
            bestTime: 'طوال العام',
            ticket: '€5'
          },
          {
            name: 'كاتدرائية القديس بطرس',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg/960px-Basilica_di_San_Pietro_in_Vaticano_September_2015-1a.jpg',
            address: 'Piazza San Pietro, 00120 Citta del Vaticano',
            description: 'أكبر كنيسة في العالم وقلب الفاتيكان بقبتها الشهيرة',
            bestTime: 'أكتوبر - مارس',
            ticket: 'الدخول مجاني'
          },
          {
            name: 'المنتدى الروماني',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Foro_Romano_Musei_Capitolini_Roma.jpg/960px-Foro_Romano_Musei_Capitolini_Roma.jpg',
            address: 'Via della Salara Vecchia 5/6, 00186 Roma',
            description: 'قلب روما القديمة بأطلال المعابد والمباني الإمبراطورية',
            bestTime: 'أبريل - أكتوبر',
            ticket: '€18'
          },
          {
            name: 'السلالم الإسبانية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Piazza_di_Spagna_%28Rome%29_0004.jpg/960px-Piazza_di_Spagna_%28Rome%29_0004.jpg',
            address: 'Piazza di Spagna, 00187 Roma',
            description: 'درج شهير يربط ساحة إسبانيا بكنيسة ترينيتا دي مونتي',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- فلورنسا --- */
      {
        name: 'فلورنسا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Firenze_-_Piazzale_Michelangelo%2C_Firenze%2C_Italy_-_April_6%2C_2015_02.jpg/1280px-Firenze_-_Piazzale_Michelangelo%2C_Firenze%2C_Italy_-_April_6%2C_2015_02.jpg',
        description: 'مهد عصر النهضة ومدينة الفنون',
        landmarks: [
          {
            name: 'كاتدرائية دومو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg/960px-Cattedrale_di_Santa_Maria_del_Fiore_%E2%80%93_Il_Duomo_di_Firenze.jpg',
            address: 'Piazza del Duomo, 50122 Firenze',
            description: 'كاتدرائية بقبة برونليسكي الشهيرة وزخارف رخامية خلابة',
            bestTime: 'أبريل - يونيو',
            ticket: '€20 لقبة'
          },
          {
            name: 'جسر بونتي فيكيو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Ponte_Vecchio_from_Ponte_alle_Grazie.jpg/960px-Ponte_Vecchio_from_Ponte_alle_Grazie.jpg',
            address: 'Ponte Vecchio, 50125 Firenze',
            description: 'جسر قديم مزدحم بمحلات الذهب فوق نهر أرنو',
            bestTime: 'الغروب',
            ticket: 'مجاني'
          },
          {
            name: 'معرض أوفيزي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Florence%2C_Italy_-_panoramio_%28125%29.jpg/960px-Florence%2C_Italy_-_panoramio_%28125%29.jpg',
            address: 'Piazzale degli Uffizi 6, 50122 Firenze',
            description: 'من أشهر متاحف العالم ويضم لوحات بوتيتشيلي ومايكل أنجلو',
            bestTime: 'سبتمبر - نوفمبر',
            ticket: '€25'
          },
          {
            name: 'ساحة ديلا سينيوريا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/Piazza_Signoria_-_Firenze.jpg/960px-Piazza_Signoria_-_Firenze.jpg',
            address: 'Piazza della Signoria, 50122 Firenze',
            description: 'ساحة مفتوحة بتماثيل رائعة وقصر فيكيو التاريخي',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'تلة ميكيلانجيلو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Vista_de_Florencia_desde_Piazzale_Michelangelo%2C_Italia%2C_2022-09-18%2C_DD_212-214_HDR.jpg/960px-Vista_de_Florencia_desde_Piazzale_Michelangelo%2C_Italia%2C_2022-09-18%2C_DD_212-214_HDR.jpg',
            address: 'Piazzale Michelangelo, 50125 Firenze',
            description: 'أجمل نقطة لمشاهدة فلورنسا من الأعلى خاصة وقت الغروب',
            bestTime: 'الغروب',
            ticket: 'مجاني'
          },
          {
            name: 'بازيليكا سانتا كروتشي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Bas%C3%ADlica_de_la_Santa_Cruz%2C_Florencia%2C_Italia%2C_2022-09-18%2C_DD_95.jpg/960px-Bas%C3%ADlica_de_la_Santa_Cruz%2C_Florencia%2C_Italia%2C_2022-09-18%2C_DD_95.jpg',
            address: 'Piazza di Santa Croce 16, 50122 Firenze',
            description: 'بازيليكا تضم مقابر ميكيلانجيلو وجاليليو وماكيافيلي',
            bestTime: 'طوال العام',
            ticket: '€8'
          }
        ]
      },

      /* --- البندقية --- */
      {
        name: 'البندقية',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/Venezia_aerial_view.jpg/1280px-Venezia_aerial_view.jpg',
        description: 'مدينة القنوات والجندول المبنية على الماء',
        landmarks: [
          {
            name: 'ساحة سان ماركو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Piazza_San_Marco_%28Venice%29_at_night-msu-2021-6449-.jpg/960px-Piazza_San_Marco_%28Venice%29_at_night-msu-2021-6449-.jpg',
            address: 'Piazza San Marco, 30124 Venezia',
            description: 'أشهر ساحات البندقية وقلب المدينة التاريخي',
            bestTime: 'أبريل - يونيو',
            ticket: 'مجاني'
          },
          {
            name: 'جسر ريالتو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Rialto_2025_4.jpg/960px-Rialto_2025_4.jpg',
            address: 'Ponte di Rialto, 30125 Venezia',
            description: 'أقدم جسور البندقية وأشهرها فوق القناة الكبرى',
            bestTime: 'الصباح الباكر',
            ticket: 'مجاني'
          },
          {
            name: 'قصر دوجي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg/960px-%28Venice%29_Doge%27s_Palace_and_campanile_of_St._Mark%27s_Basilica_facing_the_sea.jpg',
            address: 'Piazza San Marco 1, 30124 Venezia',
            description: 'قصر الحكام القوطي الملاصق لكاتدرائية سان ماركو',
            bestTime: 'سبتمبر - نوفمبر',
            ticket: '€30'
          },
          {
            name: 'جسر التنهدات',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Antonio_Contin_-_Ponte_dei_sospiri_%28Venice%29.jpg/960px-Antonio_Contin_-_Ponte_dei_sospiri_%28Venice%29.jpg',
            address: 'Ponte dei Sospiri, 30122 Venezia',
            description: 'جسر صغير تاريخي كان يربط القصر بالسجون',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'كاتدرائية سان ماركو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Venezia_Basilica_di_San_Marco_Fassade_2.jpg/960px-Venezia_Basilica_di_San_Marco_Fassade_2.jpg',
            address: 'Piazza San Marco 328, 30124 Venezia',
            description: 'بازيليكا بيزنطية بفسيفساء ذهبية مذهلة',
            bestTime: 'أبريل - أكتوبر',
            ticket: '€3'
          },
          {
            name: 'جزيرة مورانو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bb/Murano_sunset.JPG/960px-Murano_sunset.JPG',
            address: 'Murano, 30141 Venezia',
            description: 'جزيرة شهيرة بمصانع الزجاج الملون التقليدي',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- ميلانو --- */
      {
        name: 'ميلانو',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/1280px-Milan_Cathedral_from_Piazza_del_Duomo.jpg',
        description: 'عاصمة الموضة وأكبر مدن شمال إيطاليا',
        landmarks: [
          {
            name: 'كاتدرائية ميلانو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/70/Milan_Cathedral_from_Piazza_del_Duomo.jpg/960px-Milan_Cathedral_from_Piazza_del_Duomo.jpg',
            address: 'Piazza del Duomo, 20122 Milano',
            description: 'كاتدرائية قوطية ضخمة بأبراجها الرخامية التي تعد بالآلاف',
            bestTime: 'طوال العام',
            ticket: '€10 للأسطح'
          },
          {
            name: 'غاليريا فيتوريو إيمانويل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Galleria_Milano_%28179532365%29.jpeg/960px-Galleria_Milano_%28179532365%29.jpeg',
            address: 'Piazza del Duomo, 20121 Milano',
            description: 'من أقدم مراكز التسوق المغطاة في العالم بقبة زجاجية خلابة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'مسرح لا سكالا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Exterior_Teatro_Alla_Scala_high_quality_01.jpg/960px-Exterior_Teatro_Alla_Scala_high_quality_01.jpg',
            address: 'Via Filodrammatici 2, 20121 Milano',
            description: 'أشهر دار أوبرا في العالم منذ عام 1778',
            bestTime: 'أكتوبر - مايو',
            ticket: '€15 للمتحف'
          },
          {
            name: 'سانتا ماريا ديلي غرازي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Santa_Maria_delle_Grazie_Milan_2013.jpg/960px-Santa_Maria_delle_Grazie_Milan_2013.jpg',
            address: 'Piazza di Santa Maria delle Grazie, 20123 Milano',
            description: 'الكنيسة التي تضم لوحة العشاء الأخير لدافنشي',
            bestTime: 'طوال العام',
            ticket: '€15 بحجز مسبق'
          },
          {
            name: 'قلعة سفورزا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/20110725_Castello_Sforzesco_Milan_5557.jpg/960px-20110725_Castello_Sforzesco_Milan_5557.jpg',
            address: 'Piazza Castello, 20121 Milano',
            description: 'قلعة تاريخية ضخمة بها متاحف وحدائق واسعة',
            bestTime: 'طوال العام',
            ticket: 'الحدائق مجانية'
          },
          {
            name: 'ملعب سان سيرو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Stadio_Meazza_2021_3.jpg/960px-Stadio_Meazza_2021_3.jpg',
            address: 'Piazzale Angelo Moratti, 20151 Milano',
            description: 'الملعب الأسطوري لفريقي ميلان وإنتر',
            bestTime: 'سبتمبر - مايو',
            ticket: '€30 للجولة'
          }
        ]
      }
    ]
  },


  /* ==================== تركيا - Turkey ==================== */
  tr: {
    country: 'تركيا',
    cities: [
      /* --- إسطنبول --- */
      {
        name: 'إسطنبول',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Historical_peninsula_and_modern_skyline_of_Istanbul.jpg/1280px-Historical_peninsula_and_modern_skyline_of_Istanbul.jpg',
        description: 'المدينة التي تجمع بين قارتين وحضارتين',
        landmarks: [
          {
            name: 'آيا صوفيا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Hagia_Sophia_%28228968325%29.jpeg/960px-Hagia_Sophia_%28228968325%29.jpeg',
            address: 'Sultan Ahmet, Ayasofya Meydani, 34122 Fatih, Istanbul',
            description: 'تحفة معمارية بُنيت ككنيسة ثم مسجدا بمزيج فريد لا مثيل له',
            bestTime: 'طوال العام',
            ticket: '€25'
          },
          {
            name: 'المسجد الأزرق',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/Istanbul_%2834223582516%29_%28cropped%29.jpg/960px-Istanbul_%2834223582516%29_%28cropped%29.jpg',
            address: 'At Meydani Cd 10, 34122 Fatih, Istanbul',
            description: 'مسجد شهير بقبابه الزرقاء وست مآذن وزخارف داخلية مبهرة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'قصر توبكابي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Topkap%C4%B1_-_01.jpg/960px-Topkap%C4%B1_-_01.jpg',
            address: 'Cankurtaran, 34122 Fatih, Istanbul',
            description: 'مقر السلاطين العثمانيين بإطلالة ساحرة على مضيق البوسفور',
            bestTime: 'أبريل - يونيو',
            ticket: '1700 ليرة'
          },
          {
            name: 'البازار الكبير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Istanbul_asv2021-11_img41_Grand_Bazaar.jpg/960px-Istanbul_asv2021-11_img41_Grand_Bazaar.jpg',
            address: 'Beyazit, 34126 Fatih, Istanbul',
            description: 'من أكبر وأقدم الأسواق المغطاة في العالم بأكثر من أربعة آلاف محل',
            bestTime: 'طوال العام ما عدا الأحد',
            ticket: 'مجاني'
          },
          {
            name: 'برج غلطة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Galata_tower_01_23.jpg/960px-Galata_tower_01_23.jpg',
            address: 'Bereketzade, 34421 Beyoglu, Istanbul',
            description: 'برج تاريخي بإطلالة بانورامية 360 درجة على المدينة',
            bestTime: 'قبل الغروب',
            ticket: '650 ليرة'
          },
          {
            name: 'مضيق البوسفور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Turkish_Strait_disambig.svg/960px-Turkish_Strait_disambig.svg.png',
            address: 'Eminonu Iskelesi, Fatih, Istanbul',
            description: 'رحلة بحرية بين أوروبا وآسيا تمر بالقصور والجسور الشهيرة',
            bestTime: 'مايو - سبتمبر',
            ticket: '250 ليرة'
          }
        ]
      },

      /* --- كابادوكيا --- */
      {
        name: 'كابادوكيا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg/1280px-Cappadocia_balloon_trip%2C_Ortahisar_Castle_%2811893715185%29.jpg',
        description: 'مدينة الصخور العجيبة ومناطيد الهواء الساخن',
        landmarks: [
          {
            name: 'غوريم',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/G%C3%B6reme_town_and_valley_2015.JPG/960px-G%C3%B6reme_town_and_valley_2015.JPG',
            address: 'Goreme, 50180 Nevsehir',
            description: 'بيوت منقورة في الصخور البركانية ومتحف مفتوح',
            bestTime: 'أبريل - يونيو',
            ticket: '700 ليرة'
          },
          {
            name: 'رحلة المناطيد',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Autumn_in_G%C3%B6reme_Valley.jpg/960px-Autumn_in_G%C3%B6reme_Valley.jpg',
            address: 'Goreme, 50180 Nevsehir',
            description: 'أشهر تجربة مناطيد في العالم ومعشوقة المصورين عند شروق الشمس',
            bestTime: 'أبريل - نوفمبر',
            ticket: '€200'
          },
          {
            name: 'قلعة أورتاهيسار',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/Castillo_de_Ortahisar%2C_Capadocia%2C_Turqu%C3%ADa%2C_2024-10-01%2C_DD_01-03_HDR.jpg/960px-Castillo_de_Ortahisar%2C_Capadocia%2C_Turqu%C3%ADa%2C_2024-10-01%2C_DD_01-03_HDR.jpg',
            address: 'Ortahisar, 50650 Urgup, Nevsehir',
            description: 'قلعة صخرية طبيعية تمنح إطلالة شاملة على كابادوكيا',
            bestTime: 'طوال العام',
            ticket: '100 ليرة'
          },
          {
            name: 'وادي الحب',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Love_Valley_from_hot_air_balloon.jpg/960px-Love_Valley_from_hot_air_balloon.jpg',
            address: 'Goreme, 50180 Nevsehir',
            description: 'وادي بأعمدة صخرية غريبة الشكل ويشتهر برحلات المناطيد',
            bestTime: 'شروق الشمس',
            ticket: 'مجاني'
          },
          {
            name: 'المدينة الجوفية كايمكلي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Kaymakl%C4%B1_Underground_City_large_room.JPG/960px-Kaymakl%C4%B1_Underground_City_large_room.JPG',
            address: 'Kaymakli, 50800 Nevsehir',
            description: 'مدينة كاملة محفورة تحت الأرض بعمق عدة طوابق',
            bestTime: 'طوال العام',
            ticket: '700 ليرة'
          },
          {
            name: 'المدينة الجوفية ديرينكويو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Derinkuyu_Underground_City_9910_Nevit.jpg/960px-Derinkuyu_Underground_City_9910_Nevit.jpg',
            address: 'Derinkuyu, 51300 Nevsehir',
            description: 'أعمق مدينة جوفية مكتشفة وتصل إلى ثمانية طوابق',
            bestTime: 'طوال العام',
            ticket: '700 ليرة'
          }
        ]
      },

      /* --- أنطاليا --- */
      {
        name: 'أنطاليا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Falezlerden_Antalya_Konyaalt%C4%B1_Plaj%C4%B1na_do%C4%9Fru_bir_g%C3%B6r%C3%BCn%C3%BCm.jpg/1280px-Falezlerden_Antalya_Konyaalt%C4%B1_Plaj%C4%B1na_do%C4%9Fru_bir_g%C3%B6r%C3%BCn%C3%BCm.jpg',
        description: 'عاصمة السياحة على الريفييرا التركية',
        landmarks: [
          {
            name: 'البلدة القديمة كاليتشي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Kalei%C3%A7i_Old_Town%2C_Antalya%2C_Turkey_26_Feb_2022.jpg/960px-Kalei%C3%A7i_Old_Town%2C_Antalya%2C_Turkey_26_Feb_2022.jpg',
            address: 'Kaleici, 07100 Muratpasa, Antalya',
            description: 'أزقة عثمانية ضيقة تنتهي بمرفأ قديم خلاب',
            bestTime: 'أبريل - أكتوبر',
            ticket: 'مجاني'
          },
          {
            name: 'شلالات دودن',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Upper_Duden_Falls.jpg/960px-Upper_Duden_Falls.jpg',
            address: 'Caglayan, 07230 Muratpasa, Antalya',
            description: 'شلالات تصب في البحر المتوسط من فوق الجرف',
            bestTime: 'مايو - سبتمبر',
            ticket: '250 ليرة'
          },
          {
            name: 'بوابة هادريان',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/P9271452_Hadrians_Gate.jpg/960px-P9271452_Hadrians_Gate.jpg',
            address: 'Kaleici, Hadrian Kale Kapisi, 07100 Muratpasa, Antalya',
            description: 'قوس نصر روماني من القرن الثاني ما زال قائما',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'ميناء أنطاليا القديم',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/75/Antalya_kalei%C3%A7i_2.jpg/960px-Antalya_kalei%C3%A7i_2.jpg',
            address: 'Kaleici, 07100 Muratpasa, Antalya',
            description: 'ميناء تاريخي مزدحم بقوارب الرحلات والمطاعم',
            bestTime: 'المساء',
            ticket: 'مجاني'
          },
          {
            name: 'متحف أنطاليا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Antalya_M%C3%BCzesi_%28Arch%C3%A4ologisches_Museum_Antalya%29.JPG/960px-Antalya_M%C3%BCzesi_%28Arch%C3%A4ologisches_Museum_Antalya%29.JPG',
            address: 'Bahcelievler, Konyaalti Cd 88, 07050 Muratpasa, Antalya',
            description: 'من أهم متاحف العالم بالآثار الرومانية والمنحوتات',
            bestTime: 'طوال العام',
            ticket: '350 ليرة'
          }
        ]
      },

      /* --- بورصة --- */
      {
        name: 'بورصة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Bursa_image.jpg/1280px-Bursa_image.jpg',
        description: 'المدينة الخضراء وأول عاصمة للدولة العثمانية',
        landmarks: [
          {
            name: 'الجامع الكبير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/71_Bursa_la_Grande_Moschea_%28Edited%29.jpg/960px-71_Bursa_la_Grande_Moschea_%28Edited%29.jpg',
            address: 'Nalbantoglu, Ulucami Cd 2, 16010 Osmangazi, Bursa',
            description: 'مسجد عثماني ضخم بعشرين قبة ومئذنتين',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'جبل أولوداغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Uluda%C4%9F_-_Olympos_Misios.jpg/960px-Uluda%C4%9F_-_Olympos_Misios.jpg',
            address: 'Uludag, 16370 Osmangazi, Bursa',
            description: 'منتجع التزلج الأشهر في تركيا وبه تلفريك طويل',
            bestTime: 'ديسمبر - مارس',
            ticket: '600 ليرة للتلفريك'
          },
          {
            name: 'قرية جوماليكيزيك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Bursa_Cumal%C4%B1k%C4%B1z%C4%B1k_in_the_spring_2014_0116.jpg/960px-Bursa_Cumal%C4%B1k%C4%B1z%C4%B1k_in_the_spring_2014_0116.jpg',
            address: 'Cumalikizik, 16370 Osmangazi, Bursa',
            description: 'قرية عثمانية تراثية ببيوت ملونة قديمة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'ضريح أورخان غازي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5b/T%C3%BCrbe_of_Orhan_Gazi%2C_Bursa.jpg/960px-T%C3%BCrbe_of_Orhan_Gazi%2C_Bursa.jpg',
            address: 'Hisar, 16010 Osmangazi, Bursa',
            description: 'ضريح السلطان أورخان مؤسس الجيش العثماني الحديث',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'ينابيع تشيكرغه الحرارية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/%C3%87EK%C4%B0RGE-ESK%C4%B0_KAPLICA_-_panoramio_-_HALUK_COMERTEL.jpg/960px-%C3%87EK%C4%B0RGE-ESK%C4%B0_KAPLICA_-_panoramio_-_HALUK_COMERTEL.jpg',
            address: 'Cekirge, 16285 Osmangazi, Bursa',
            description: 'حمامات تاريخية بمياه معدنية ساخنة',
            bestTime: 'طوال العام',
            ticket: '300 ليرة'
          }
        ]
      }
    ]
  },


  /* ==================== الإمارات - UAE ==================== */
  ae: {
    country: 'الإمارات',
    cities: [
      /* --- دبي --- */
      {
        name: 'دبي',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Dubai_Skyline_mit_Burj_Khalifa_%2818241030269%29.jpg/1280px-Dubai_Skyline_mit_Burj_Khalifa_%2818241030269%29.jpg',
        description: 'مدينة المستقبل وأيقونة السياحة الخليجية',
        landmarks: [
          {
            name: 'برج خليفة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg/960px-Burj_Khalifa_%28worlds_tallest_building%29_and_the_Dubai_skyline_%2825781049892%29.jpg',
            address: 'Downtown Dubai, Sheikh Mohammed bin Rashid Blvd',
            description: 'أطول برج في العالم بارتفاع 828 مترا ومنصة مشاهدة بانورامية',
            bestTime: 'أكتوبر - مارس',
            ticket: 'AED 179'
          },
          {
            name: 'دبي مول ونافورة دبي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Water_Fountain_at_The_Dubai_Mall_%28Ank_Kumar%2C_Infosys%29_04.jpg/960px-Water_Fountain_at_The_Dubai_Mall_%28Ank_Kumar%2C_Infosys%29_04.jpg',
            address: 'Downtown Dubai, Financial Center Rd',
            description: 'من أكبر مراكز التسوق في العالم وأمامه نافورة راقصة شهيرة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'برج العرب',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Hotel_Burj_al_Arab_in_Dubay_2.jpg/960px-Hotel_Burj_al_Arab_in_Dubay_2.jpg',
            address: 'Jumeirah St, Umm Suqeim 3, Dubai',
            description: 'فندق الأشرعة الشهير وأول فندق سبع نجوم في العالم',
            bestTime: 'طوال العام',
            ticket: 'AED 250 للجولة'
          },
          {
            name: 'جزيرة النخلة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Palm_Jumeirah%2CDubai_%2815048707596%29.jpg/960px-Palm_Jumeirah%2CDubai_%2815048707596%29.jpg',
            address: 'Palm Jumeirah, Dubai',
            description: 'جزيرة صناعية على شكل نخلة تضم أتلانتس والمنتجعات الفاخرة',
            bestTime: 'نوفمبر - مارس',
            ticket: 'مجاني'
          },
          {
            name: 'متحف المستقبل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Museum_of_the_Future.jpg/960px-Museum_of_the_Future.jpg',
            address: 'Sheikh Zayed Rd, Trade Centre, Dubai',
            description: 'تحفة معمارية بتصميم مستقبلي ومعارض تقنية تفاعلية',
            bestTime: 'طوال العام',
            ticket: 'AED 149'
          },
          {
            name: 'دبي مارينا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/960px-Dubai_Marina_Skyline.jpg',
            address: 'Dubai Marina, Dubai',
            description: 'كورنيش عصري بأبراج شاهقة ومقاهي ومطاعم على الماء',
            bestTime: 'أكتوبر - أبريل',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- أبو ظبي --- */
      {
        name: 'أبو ظبي',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Abu_dhabi_skylines_2014.jpg/1280px-Abu_dhabi_skylines_2014.jpg',
        description: 'العاصمة وأيقونة الثقافة والفخامة',
        landmarks: [
          {
            name: 'جامع الشيخ زايد الكبير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/SZGM%2C_Abu_Dhabi_%28IMG_20230812_132052%29.jpg/960px-SZGM%2C_Abu_Dhabi_%28IMG_20230812_132052%29.jpg',
            address: 'Al Rawdah, Abu Dhabi',
            description: 'من أكبر وأجمل مساجد العالم بأيقونته البيضاء النقية',
            bestTime: 'أكتوبر - مارس',
            ticket: 'مجاني'
          },
          {
            name: 'متحف اللوفر أبوظبي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/26/Louvre_Abu_Dhabi_01.jpg/960px-Louvre_Abu_Dhabi_01.jpg',
            address: 'Saadiyat Cultural District, Abu Dhabi',
            description: 'فرع اللوفر بباريس تحت قبة شمس النور الشهيرة',
            bestTime: 'طوال العام ما عدا الاثنين',
            ticket: 'AED 63'
          },
          {
            name: 'قصر الحصن',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Qasr_al_Hosn_in_2019.jpg/960px-Qasr_al_Hosn_in_2019.jpg',
            address: 'Rashid Bin Saeed Al Maktoum St, Abu Dhabi',
            description: 'أقدم مبنى تاريخي في العاصمة ومهد الحكم فيها',
            bestTime: 'طوال العام',
            ticket: 'AED 30'
          },
          {
            name: 'عالم فيراري',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Ferrari_World_Abu_Dhabi_%2839958235100%29.jpg/960px-Ferrari_World_Abu_Dhabi_%2839958235100%29.jpg',
            address: 'Yas Island, Abu Dhabi',
            description: 'أكبر مدينة ملاه مغطاة في العالم وبها أسرع أفعوانية',
            bestTime: 'طوال العام',
            ticket: 'AED 345'
          },
          {
            name: 'قصر الإمارات',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Emirates_Palace.jpg/960px-Emirates_Palace.jpg',
            address: 'West Corniche Rd, Al Ras Al Akhdar, Abu Dhabi',
            description: 'فندق قصر فخم يعد من أفخم فنادق العالم',
            bestTime: 'طوال العام',
            ticket: 'AED 100 للجولة'
          },
          {
            name: 'كورنيش أبوظبي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Abu_Dhabi_Corniche_Beach.jpg/960px-Abu_Dhabi_Corniche_Beach.jpg',
            address: 'Corniche Rd W, Abu Dhabi',
            description: 'ممشى ساحلي طويل بحدائق وشواطئ مجانية للعائلات',
            bestTime: 'نوفمبر - مارس',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- الشارقة --- */
      {
        name: 'الشارقة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/b/b7/Al_Qasba.jpg',
        description: 'عاصمة الثقافة الإماراتية',
        landmarks: [
          {
            name: 'متحف الشارقة الإسلامي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Sharjah_Museum_of_Islamic_Civilisation_north-west_facade_%2822025908913%29.jpg/960px-Sharjah_Museum_of_Islamic_Civilisation_north-west_facade_%2822025908913%29.jpg',
            address: 'Al Majarrah, Sharjah',
            description: 'متحف ضخم يحكي الحضارة الإسلامية عبر العصور',
            bestTime: 'طوال العام',
            ticket: 'AED 20'
          },
          {
            name: 'قلب الشارقة التراثي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Heart_of_Sharjah.jpg/960px-Heart_of_Sharjah.jpg',
            address: 'Al Shuwaihiyeen, Sharjah',
            description: 'أحياء تراثية مرممة ببيوت قديمة وأسواق تقليدية',
            bestTime: 'نوفمبر - مارس',
            ticket: 'مجاني'
          },
          {
            name: 'سوق الجبيل الأزرق',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Blue_Souk%2C_Sharjah%2C_UAE_%284323843389%29.jpg/960px-Blue_Souk%2C_Sharjah%2C_UAE_%284323843389%29.jpg',
            address: 'King Faisal St, Sharjah',
            description: 'أشهر أسواق الإمارات بتصميمه الإسلامي الأزرق المميز',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'مربى الشارقة للأحياء المائية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Sharjah_Aquarium_-_panoramio_%289%29.jpg/960px-Sharjah_Aquarium_-_panoramio_%289%29.jpg',
            address: 'Al Khan, Sharjah',
            description: 'أكبر حوض مائي في الإمارات بكائنات مدهشة',
            bestTime: 'طوال العام',
            ticket: 'AED 25'
          },
          {
            name: 'مسجد النور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Al_Noor_Mosque_%2810%29.jpg/960px-Al_Noor_Mosque_%2810%29.jpg',
            address: 'Khor Al Khan St, Sharjah',
            description: 'مسجد بتصميم عثماني بإطلالة على خور الشارقة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- رأس الخيمة --- */
      {
        name: 'رأس الخيمة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Aerial_view_of_RAK_City_from_Al_Qawasim_Corniche_flagpole.jpg/1280px-Aerial_view_of_RAK_City_from_Al_Qawasim_Corniche_flagpole.jpg',
        description: 'إمارة الجبال والمغامرات والبحر',
        landmarks: [
          {
            name: 'جبل جيس',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/View_from_Jebel_Jais_-_panoramio.jpg/960px-View_from_Jebel_Jais_-_panoramio.jpg',
            address: 'Jebel Jais Rd, Ras Al Khaimah',
            description: 'أعلى قمة في الإمارات وبها أطول أفعوانية في العالم',
            bestTime: 'سبتمبر - أبريل',
            ticket: 'AED 100 للافعة'
          },
          {
            name: 'جزيرة المرجان',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Aerial_View_Al_Marjan_Island.jpg/960px-Aerial_View_Al_Marjan_Island.jpg',
            address: 'Al Marjan Island, Ras Al Khaimah',
            description: 'جزر صناعية بشواطئ رملية ومنتجعات فاخرة',
            bestTime: 'أكتوبر - أبريل',
            ticket: 'مجاني'
          },
          {
            name: 'قلعة ضاية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Dhayah_Fort_showing_hilltop_location.jpg/960px-Dhayah_Fort_showing_hilltop_location.jpg',
            address: 'Wadi Haqil, Ras Al Khaimah',
            description: 'قلعة حجرية على تلة بإطلالة على النخيل والساحل',
            bestTime: 'أكتوبر - مارس',
            ticket: 'مجاني'
          },
          {
            name: 'وادي شوكة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Mountains_of_Wadi_Shawka_denoised.jpg/960px-Mountains_of_Wadi_Shawka_denoised.jpg',
            address: 'Wadi Shawka, Ras Al Khaimah',
            description: 'وادٍ صخري رائع للمشي والاسترخاء بين الجبال وبحيرات المياه الطبيعية',
            bestTime: 'أكتوبر - مارس',
            ticket: 'مجاني'
          },
          {
            name: 'شاطئ كورنيش القواسم',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/66/RAK_Corniche_%28Costanera_de_Ras_al-Khaimah%29.jpg/960px-RAK_Corniche_%28Costanera_de_Ras_al-Khaimah%29.jpg',
            address: 'Al Qawasim Corniche, Ras Al Khaimah',
            description: 'شاطئ طويل هادئ مناسب للعائلات والاسترخاء',
            bestTime: 'نوفمبر - مارس',
            ticket: 'مجاني'
          }
        ]
      }
    ]
  },


  /* ==================== مصر - Egypt ==================== */
  eg: {
    country: 'مصر',
    cities: [
      /* --- القاهرة --- */
      {
        name: 'القاهرة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg/1280px-Cairo_Opera_House%2C_Al_Hurriyah_Park_and_the_Nile_river_%2814797782354%29.jpg',
        description: 'عاصمة مصر ومنارة الحضارة الفرعونية والإسلامية',
        landmarks: [
          {
            name: 'أهرامات الجيزة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg/960px-Great_Pyramid_of_Giza_-_Pyramid_of_Khufu.jpg',
            address: 'Al Haram, Giza Governorate',
            description: 'آخر عجائب الدنيا السبع القديمة الباقية وأشهر معالم الأرض',
            bestTime: 'أكتوبر - أبريل',
            ticket: '540 جنيه'
          },
          {
            name: 'أبو الهول',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/Sphinx_with_the_third_pyramid.jpg/960px-Sphinx_with_the_third_pyramid.jpg',
            address: 'Al Haram, Giza Governorate',
            description: 'تمثال أسطوري بجسم أسد ورأس إنسان يحرس الأهرامات',
            bestTime: 'أكتوبر - أبريل',
            ticket: 'ضمن تذكرة المنطقة'
          },
          {
            name: 'المتحف المصري الكبير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Logo_of_the_Grand_Egyptian_Museum.svg/960px-Logo_of_the_Grand_Egyptian_Museum.svg.png',
            address: 'Al Remaya Sq, Cairo Alexandria Desert Rd, Giza',
            description: 'أكبر متحف في العالم لحضارة واحدة ومنزل كنوز توت عنخ آمون',
            bestTime: 'طوال العام',
            ticket: '1200 جنيه'
          },
          {
            name: 'قلعة صلاح الدين',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Flickr_-_HuTect_ShOts_-_Citadel_of_Salah_El.Din_and_Masjid_Muhammad_Ali_%D9%82%D9%84%D8%B9%D8%A9_%D8%B5%D9%84%D8%A7%D8%AD_%D8%A7%D9%84%D8%AF%D9%8A%D9%86_%D8%A7%D9%84%D8%A3%D9%8A%D9%88%D8%A8%D9%8A_%D9%88%D9%85%D8%B3%D8%AC%D8%AF_%D9%85%D8%AD%D9%85%D8%AF_%D8%B9%D9%84%D9%8A_-_Cairo_-_Egypt_-_17_04_2010_%284%29.jpg/960px-thumbnail.jpg',
            address: 'Salah Salem St, Al Abageyah, Cairo',
            description: 'قلعة تاريخية بمسجد محمد علي وإطلالة شاملة على القاهرة',
            bestTime: 'طوال العام',
            ticket: '450 جنيه'
          },
          {
            name: 'خان الخليلي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg/960px-%D8%AE%D8%A7%D9%86_%D8%A7%D9%84%D8%AE%D9%84%D9%8A%D9%84%D9%8A_1.jpg',
            address: 'Al-Azhar St, El-Gamaleya, Cairo',
            description: 'سوق تاريخي شهير بجوار الحسين والأزهر وبيت القهوة الشهير',
            bestTime: 'المساء',
            ticket: 'مجاني'
          },
          {
            name: 'المتحف المصري بالتحرير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/1897_bis_1902_wurde_das_%C3%84gyptische_Museum_in_Kairo_gebaut._04.jpg/960px-1897_bis_1902_wurde_das_%C3%84gyptische_Museum_in_Kairo_gebaut._04.jpg',
            address: 'Tahrir Sq, Cairo',
            description: 'المتحف الأثري الأشهر وأقدم متحف للآثار المصرية',
            bestTime: 'طوال العام',
            ticket: '550 جنيه'
          }
        ]
      },

      /* --- الأقصر --- */
      {
        name: 'الأقصر',
        image: 'https://upload.wikimedia.org/wikipedia/commons/3/35/LuxorHotelsIbnWalidSt.jpg',
        description: 'أكبر متحف مفتوح في العالم',
        landmarks: [
          {
            name: 'معبد الكرنك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Temple_de_Louxor_68.jpg/960px-Temple_de_Louxor_68.jpg',
            address: 'Karnak, Luxor',
            description: 'أضخم مجمع معابد في العالم بقاعة الأعمدة الشهيرة',
            bestTime: 'أكتوبر - أبريل',
            ticket: '450 جنيه'
          },
          {
            name: 'وادي الملوك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/0/0c/Luxor%2C_Tal_der_K%C3%B6nige_%281995%2C_860x605%29.jpg',
            address: 'West Bank, Luxor',
            description: 'مقابر ملوك مصر القديمة المنقوشة بألوان ما زالت ساحرة',
            bestTime: 'أكتوبر - أبريل',
            ticket: '600 جنيه'
          },
          {
            name: 'معبد الأقصر',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/1550_bis_1070_v._Chr._ca._wurde_der_Tempel_von_Luxor_erbaut._01.jpg/960px-1550_bis_1070_v._Chr._ca._wurde_der_Tempel_von_Luxor_erbaut._01.jpg',
            address: 'Corniche an-Nil, Luxor',
            description: 'معبد مذهل يُضاء ليلا في قلب مدينة الأقصر',
            bestTime: 'المساء',
            ticket: '400 جنيه'
          },
          {
            name: 'معبد حتشبسوت',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/Templo_funerario_de_Hatshepsut%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_13.jpg/960px-Templo_funerario_de_Hatshepsut%2C_Luxor%2C_Egipto%2C_2022-04-03%2C_DD_13.jpg',
            address: 'Deir el-Bahari, West Bank, Luxor',
            description: 'معبد جنائزي بشرفاته الثلاث وأعمدته المميزة',
            bestTime: 'أكتوبر - أبريل',
            ticket: '360 جنيه'
          },
          {
            name: 'تمثالي ممنون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Colossi_of_Memnon_May_2015_2.JPG/960px-Colossi_of_Memnon_May_2015_2.JPG',
            address: 'West Bank, Luxor',
            description: 'تمثالان ضخمان لأمنحتب الثالث على طريق الساحل الغربي',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'معبد دندرة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Dendera_7_977.PNG/960px-Dendera_7_977.PNG',
            address: 'Dendera, Qena',
            description: 'معبد محفوظ بالكامل بسقف مليء بالرسوم الفلكية الشهيرة',
            bestTime: 'أكتوبر - أبريل',
            ticket: '360 جنيه'
          }
        ]
      },

      /* --- أسوان --- */
      {
        name: 'أسوان',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Panoramic_view_of_Aswan%2C_Egypt.jpg/1280px-Panoramic_view_of_Aswan%2C_Egypt.jpg',
        description: 'أجمل مدن النيل وجوهرة الجنوب الهادئ',
        landmarks: [
          {
            name: 'معبد أبو سمبل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg/960px-Ramsis%2C_Aswan_Governorate%2C_Egypt_-_panoramio.jpg',
            address: 'Abu Simbel, Aswan',
            description: 'معبد رمسيس الثاني بحجم هائل وتظاهرة تعامد الشمس',
            bestTime: 'أكتوبر - أبريل',
            ticket: '600 جنيه'
          },
          {
            name: 'معبد فيلة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/1977_bis_1980_wurde_die_Tempel_auf_der_Insel_Philae_auf_die_h%C3%B6her_gelegene_Insel_Agilka_versetzt._01.jpg/960px-1977_bis_1980_wurde_die_Tempel_auf_der_Insel_Philae_auf_die_h%C3%B6her_gelegene_Insel_Agilka_versetzt._01.jpg',
            address: 'Agilkia Island, Aswan',
            description: 'معبد الإلهة إيزيس على جزيرة تُوصل بالقوارب',
            bestTime: 'المساء',
            ticket: '450 جنيه'
          },
          {
            name: 'السد العالي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/BarragemAssu%C3%A3o.jpg/960px-BarragemAssu%C3%A3o.jpg',
            address: 'Aswan High Dam, Aswan',
            description: 'من أعظم المشروعات الهندسية في القرن العشرين',
            bestTime: 'طوال العام',
            ticket: '200 جنيه'
          },
          {
            name: 'جزيرة النباتات',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Aswan_Botanical_Garden_09.jpg/960px-Aswan_Botanical_Garden_09.jpg',
            address: 'El Nabatat Island, Aswan',
            description: 'حديقة نباتات نادرة في وسط النيل',
            bestTime: 'أكتوبر - أبريل',
            ticket: '100 جنيه'
          },
          {
            name: 'القرية النوبية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Mosque_in_the_Nubian_Village_at_Aswan_-_panoramio.jpg/960px-Mosque_in_the_Nubian_Village_at_Aswan_-_panoramio.jpg',
            address: 'Gharb Seheyl, Aswan',
            description: 'بيوت ملونة بألوان نوبية أصيلة وضيافة دافئة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- الإسكندرية --- */
      {
        name: 'الإسكندرية',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/79/San_Stefano_Grand_Plaza.JPG/1280px-San_Stefano_Grand_Plaza.JPG',
        description: 'عروس البحر المتوسط ومدينة المكتبة القديمة',
        landmarks: [
          {
            name: 'مكتبة الإسكندرية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Bibliotiqa_Alexandria_9_edited.jpg/960px-Bibliotiqa_Alexandria_9_edited.jpg',
            address: 'Al Azaritah, Bab Sharqi, Alexandria',
            description: 'صرح ثقافي حديث بتصميم قرص شمس مائل',
            bestTime: 'طوال العام',
            ticket: '100 جنيه'
          },
          {
            name: 'قلعة قايتباي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f1/%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A_%D9%85%D9%86_%D8%A7%D9%84%D8%AC%D9%88.jpg/960px-%D9%82%D9%84%D8%B9%D8%A9_%D9%82%D8%A7%D9%8A%D8%AA%D8%A8%D8%A7%D9%8A_%D9%85%D9%86_%D8%A7%D9%84%D8%AC%D9%88.jpg',
            address: 'As Sayalah Sharq, Al Gomrok, Alexandria',
            description: 'قلعة بُنيت على موقع فنار الإسكندرية القديم',
            bestTime: 'طوال العام',
            ticket: '200 جنيه'
          },
          {
            name: 'عمود السواري',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/AlexSarapeionPompeysPillar.jpg/960px-AlexSarapeionPompeysPillar.jpg',
            address: 'Karmouz, Alexandria',
            description: 'عمود رخامي ضخم من العصر الروماني',
            bestTime: 'طوال العام',
            ticket: '150 جنيه'
          },
          {
            name: 'حدائق وقصر المنتزه',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Motazah_palace_-_Alexandria.jpg/960px-Motazah_palace_-_Alexandria.jpg',
            address: 'El Montazah, Alexandria',
            description: 'قصر ملكي وحدائق وشواطئ على أسوأل المدينة',
            bestTime: 'مايو - سبتمبر',
            ticket: '50 جنيه'
          },
          {
            name: 'المسرح الروماني',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Alexandria%2C_Kom_el-Dikka%2C_Theatre.JPG/960px-Alexandria%2C_Kom_el-Dikka%2C_Theatre.JPG',
            address: 'Kom El-Dikka, Alexandria',
            description: 'أثر روماني مكتشف في قلب المدينة الحديثة',
            bestTime: 'طوال العام',
            ticket: '150 جنيه'
          }
        ]
      },

      /* --- شرم الشيخ --- */
      {
        name: 'شرم الشيخ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Sharm_El_Sheikh_Panoramic.jpg/1280px-Sharm_El_Sheikh_Panoramic.jpg',
        description: 'مدينة السلام وأجمل شواطئ البحر الأحمر',
        landmarks: [
          {
            name: 'محمية رأس محمد',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/28/%D8%A8%D9%88%D8%A7%D8%A8%D8%A7%D8%AA_%D9%85%D8%AD%D9%85%D9%8A%D9%87_%D8%B1%D8%A7%D8%B3_%D9%85%D8%AD%D9%85%D8%AF.png/960px-%D8%A8%D9%88%D8%A7%D8%A8%D8%A7%D8%AA_%D9%85%D8%AD%D9%85%D9%8A%D9%87_%D8%B1%D8%A7%D8%B3_%D9%85%D8%AD%D9%85%D8%AF.png',
            address: 'Ras Muhammad, Sharm El Sheikh',
            description: 'من أجمل الشعاب المرجانية في العالم',
            bestTime: 'مارس - نوفمبر',
            ticket: '500 جنيه'
          },
          {
            name: 'نعمة باي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Naama_Bay_R01.jpg/960px-Naama_Bay_R01.jpg',
            address: 'Naama Bay, Sharm El Sheikh',
            description: 'أشهر مناطق المدينة بالمطاعم والحياة الليلية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'جزيرة تيران',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Sharm_El-Sheikh%2C_Egypt.jpg/960px-Sharm_El-Sheikh%2C_Egypt.jpg',
            address: 'Tiran Island, Gulf of Aqaba',
            description: 'جزيرة رائعة للغوص بمياه فيروزية صافية',
            bestTime: 'مايو - أكتوبر',
            ticket: '700 جنيه للرحلة'
          },
          {
            name: 'موقع غوص الرساسة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Gold_Beach_at_Ras_Um_Sid_Bay.jpg/960px-Gold_Beach_at_Ras_Um_Sid_Bay.jpg',
            address: 'Ras Um Sid, Sharm El Sheikh',
            description: 'موقع غوص شهير بين أعمدة المرجان الفريدة',
            bestTime: 'أبريل - نوفمبر',
            ticket: 'ضمن الرحلة'
          },
          {
            name: 'مسجد الصحابة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Al-Sahaba_Mosque_in_Sharm_El-Sheikh_%282%29.jpg/960px-Al-Sahaba_Mosque_in_Sharm_El-Sheikh_%282%29.jpg',
            address: 'Old Market, Sharm El Sheikh',
            description: 'مسجد بتصميم فاطمي مميز من أشهر معالم المدينة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      }
    ]
  },


  /* ==================== بريطانيا - United Kingdom ==================== */
  gb: {
    country: 'بريطانيا',
    cities: [
      /* --- لندن --- */
      {
        name: 'لندن',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/67/London_Skyline_%28125508655%29.jpeg/1280px-London_Skyline_%28125508655%29.jpeg',
        description: 'أكبر مدن أوروبا وعاصمة التاريخ والثقافة',
        landmarks: [
          {
            name: 'بيغ بن ومبنى البرلمان',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg/960px-Elizabeth_Tower_and_the_north_front_of_the_Palace_of_Westminster%2C_London.jpg',
            address: 'Westminster, London SW1A 0AA',
            description: 'أشهر ساعة في العالم وقلب الحياة السياسية البريطانية',
            bestTime: 'أبريل - سبتمبر',
            ticket: 'مجاني'
          },
          {
            name: 'برج لندن',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Tower_of_London_from_the_Shard_%288515883950%29.jpg/960px-Tower_of_London_from_the_Shard_%288515883950%29.jpg',
            address: 'London EC3N 4AB',
            description: 'قلعة تاريخية عمرها ألف عام وتضم الجوهرة الملكية',
            bestTime: 'طوال العام',
            ticket: '£34'
          },
          {
            name: 'لندن آي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/London-Eye-2009.JPG/960px-London-Eye-2009.JPG',
            address: 'Riverside Building, County Hall, London SE1 7PB',
            description: 'عجلة عملاقة بارتفاع 135 مترا بإطلالة على نهر التايمز',
            bestTime: 'الغروب',
            ticket: '£35'
          },
          {
            name: 'قصر باكنغهام',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg/960px-Buckingham_Palace_London_Morning_2020_01_%28cropped%29.jpg',
            address: 'London SW1A 1AA',
            description: 'المقر الملكي وحفل تغيير الحرس الشهير',
            bestTime: 'مايو - يوليو',
            ticket: '£30 صيفا'
          },
          {
            name: 'المتحف البريطاني',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/British_Museum_from_NE_2.JPG/960px-British_Museum_from_NE_2.JPG',
            address: 'Great Russell St, London WC1B 3DG',
            description: 'من أعظم متاحف العالم ويضم حجر رشيد والآثار المصرية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'جسر البرج',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Tower_Bridge_at_Dawn.jpg/960px-Tower_Bridge_at_Dawn.jpg',
            address: 'Tower Bridge Rd, London SE1 2UP',
            description: 'جسر تاريخي بممر زجاجي معلق فوق نهر التايمز',
            bestTime: 'طوال العام',
            ticket: '£12'
          }
        ]
      },

      /* --- إدنبرة --- */
      {
        name: 'إدنبرة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Skyline_of_Edinburgh.jpg/1280px-Skyline_of_Edinburgh.jpg',
        description: 'عاصمة اسكتلندا ومدينة القلاع والأدب',
        landmarks: [
          {
            name: 'قلعة إدنبرة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/City_of_Edinburgh_-_Edinburgh_Castle_-_20140421004403.jpg/960px-City_of_Edinburgh_-_Edinburgh_Castle_-_20140421004403.jpg',
            address: 'Castlehill, Edinburgh EH1 2NG',
            description: 'قلعة على قمة بركان خامد بإطلالة شاملة على المدينة',
            bestTime: 'مايو - سبتمبر',
            ticket: '£21'
          },
          {
            name: 'الشارع الملكي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8d/High_Street%2C_Edinburgh.JPG/960px-High_Street%2C_Edinburgh.JPG',
            address: 'Royal Mile, Edinburgh EH1',
            description: 'الشارع التاريخي الرئيسي بأزقته القديمة ومحلاته',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'تلة آرثرز سيت',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Arthur%27s_Seat%2C_Edinburgh.JPG/960px-Arthur%27s_Seat%2C_Edinburgh.JPG',
            address: 'Holyrood Park, Edinburgh EH8 8AZ',
            description: 'قمة بركانية خامدة بإطلالة بانورامية مجانية على المدينة',
            bestTime: 'أبريل - سبتمبر',
            ticket: 'مجاني'
          },
          {
            name: 'قصر هوليرود',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Holyrood_Palace_-_aerial_-_2025-04-19_01_%28cropped%29.jpg/960px-Holyrood_Palace_-_aerial_-_2025-04-19_01_%28cropped%29.jpg',
            address: 'Canongate, Edinburgh EH8 8DX',
            description: 'المقر الملكي الرسمي للأسرة الحاكمة في اسكتلندا',
            bestTime: 'مايو - سبتمبر',
            ticket: '£19'
          },
          {
            name: 'متحف اسكتلندا الوطني',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Museum_of_Scotland.jpg/960px-Museum_of_Scotland.jpg',
            address: 'Chambers St, Edinburgh EH1 1JF',
            description: 'متحف مجاني ممتع يحكي تاريخ اسكتلندا والعلوم',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- مانشستر --- */
      {
        name: 'مانشستر',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Manchester_Skyline_2025.jpg/1280px-Manchester_Skyline_2025.jpg',
        description: 'مدينة كرة القدم والموسيقى في شمال إنجلترا',
        landmarks: [
          {
            name: 'ملعب أولد ترافورد',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/2023_07_31_arne_mueseler_00060-Verbessert-RR_%2853106651455%29.jpg/960px-2023_07_31_arne_mueseler_00060-Verbessert-RR_%2853106651455%29.jpg',
            address: 'Sir Matt Busby Way, Old Trafford, Manchester M16 0RA',
            description: 'مسرح الأحلام وملعب مانشستر يونايتد الأسطوري',
            bestTime: 'أغسطس - مايو',
            ticket: '£36 للجولة'
          },
          {
            name: 'ملعب الاتحاد',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/27/City_of_Manchester_Stadium_2023_cropped.jpg/960px-City_of_Manchester_Stadium_2023_cropped.jpg',
            address: 'Etihad Campus, Manchester M11 3FF',
            description: 'ملعب مانشستر سيتي وجولات في متحف النادي',
            bestTime: 'أغسطس - مايو',
            ticket: '£27 للجولة'
          },
          {
            name: 'متحف العلوم والصناعة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Science_and_Industry_Museum.jpg/960px-Science_and_Industry_Museum.jpg',
            address: 'Liverpool Rd, Manchester M3 4FP',
            description: 'متحف في أقدم محطة قطار في العالم عن الثورة الصناعية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'كاتدرائية مانشستر',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/72/Manchester_Cathedral_-_Aerial_-_2024-06-16_02.jpg/960px-Manchester_Cathedral_-_Aerial_-_2024-06-16_02.jpg',
            address: 'Victoria St, Manchester M3 1SX',
            description: 'كاتدرائية قوطية قديمة في قلب المدينة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },
          {
            name: 'الحي الشمالي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Oldham_Street%2C_Manchester.jpg/960px-Oldham_Street%2C_Manchester.jpg',
            address: 'Northern Quarter, Manchester M4',
            description: 'حي فني بالرسومات الجدارية والمقاهي المستقلة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- أكسفورد --- */
      {
        name: 'أكسفورد',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Museum_of_Oxford_%285652685943%29.jpg/1280px-Museum_of_Oxford_%285652685943%29.jpg',
        description: 'مدينة الجامعة الأولى في العالم',
        landmarks: [
          {
            name: 'كنيسة كريست تشيرتش',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Tom_Quad%2C_Christ_Church%2C_Oxford.jpg/960px-Tom_Quad%2C_Christ_Church%2C_Oxford.jpg',
            address: 'St Aldates, Oxford OX1 1DP',
            description: 'أشهر كليات أكسفورد وبها صالة الطعام المستوحاة من هاري بوتر',
            bestTime: 'طوال العام',
            ticket: '£18'
          },
          {
            name: 'مكتبة بودليان',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Bibliotheca_Bodleiana.jpg/960px-Bibliotheca_Bodleiana.jpg',
            address: 'Broad St, Oxford OX1 3BG',
            description: 'من أقدم مكتبات أوروبا ومدرج رادكليف الشهير',
            bestTime: 'طوال العام',
            ticket: '£10'
          },
          {
            name: 'برج كارفاكس',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Oxford_Carfax_NW.jpg/960px-Oxford_Carfax_NW.jpg',
            address: 'Queen St, Oxford OX1 1ET',
            description: 'برج بإطلالة على مدينة الأبراج الحالمة',
            bestTime: 'أبريل - أكتوبر',
            ticket: '£4'
          },
          {
            name: 'رادكليف كاميرا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Radcliffe_Camera%2C_Oxford_-_Oct_2006.jpg/960px-Radcliffe_Camera%2C_Oxford_-_Oct_2006.jpg',
            address: 'Radcliffe Sq, Oxford OX1 3BG',
            description: 'قبة مكتبة أيقونية من أشهر صور مدينة أكسفورد',
            bestTime: 'طوال العام',
            ticket: 'مجاني من الخارج'
          },
          {
            name: 'حديقة النباتات',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Oxford_Botanic_Garden_LV_2025.jpg/960px-Oxford_Botanic_Garden_LV_2025.jpg',
            address: 'Rose Ln, Oxford OX1 4AZ',
            description: 'أقدم حديقة نباتات في بريطانيا',
            bestTime: 'أبريل - سبتمبر',
            ticket: '£7'
          }
        ]
      }
    ]
  },

  /* ==================== إسبانيا - Spain ==================== */
  es: {
    country: 'إسبانيا',
    cities: [
      /* --- برشلونة --- */
      {
        name: 'برشلونة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Evening_light_over_Barcelona.jpg/1280px-Evening_light_over_Barcelona.jpg',
        description: 'عاصمة كتالونيا ومدينة غاودي والفنون ومقصد سياحي عالمي',
        landmarks: [
          {
            name: 'ساغرادا فاميليا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/SF_maig_2_cropped.jpg/960px-SF_maig_2_cropped.jpg',
            address: 'Carrer de Mallorca 401, 08013 Barcelona',
            description: 'كنيسة غاودي الشهيرة قيد الإنشاء منذ 1882 وأيقونة المدينة',
            bestTime: 'أبريل - يونيو',
            ticket: '€26'
          },

          {
            name: 'حديقة بارك غويل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Parc_guell_-_panoramio.jpg/960px-Parc_guell_-_panoramio.jpg',
            address: 'Carrer d Olot 5, 08024 Barcelona',
            description: 'حديقة ملونة من تصميم غاودي بإطلالة بانورامية على برشلونة',
            bestTime: 'مايو - سبتمبر',
            ticket: '€10'
          },

          {
            name: 'شارع لا رامبلا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f2/15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg/960px-15-10-27-Vista_des_de_l%27est%C3%A0tua_de_Colom_a_Barcelona-WMA_2791.jpg',
            address: 'La Rambla, 08002 Barcelona',
            description: 'أشهر شارع مشاة في المدينة بأسواق الزهور والمقاهي',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'كازا باتلو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Casa_Batllo_Overview_Barcelona_Spain_cut.jpg/960px-Casa_Batllo_Overview_Barcelona_Spain_cut.jpg',
            address: 'Passeig de Gràcia 43, 08007 Barcelona',
            description: 'مبنى غاودي الأسطوري بواجهة مستوحاة من البحر والتنين',
            bestTime: 'طوال العام',
            ticket: '€35'
          },

          {
            name: 'ملعب كامب نو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Camp_Nou_aerial.jpg/960px-Camp_Nou_aerial.jpg',
            address: 'C. Aristides Maillol 12, 08028 Barcelona',
            description: 'ملعب نادي برشلونة وأحد أكبر ملاعب أوروبا',
            bestTime: 'أغسطس - مايو',
            ticket: '€28'
          }
        ]
      },

      /* --- مدريد --- */
      {
        name: 'مدريد',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg/1280px-Madrid_-_Sky_Bar_360%C2%BA_%28Hotel_Riu_Plaza_Espa%C3%B1a%29%2C_vistas_19.jpg',
        description: 'العاصمة الإسبانية ومدينة المتاحف والفنون والحياة الليلية',
        landmarks: [
          {
            name: 'القصر الملكي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9b/Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg/960px-Palacio_Real_de_Madrid_Julio_2016_%28cropped%29.jpg',
            address: 'Calle de Bailén, 28071 Madrid',
            description: 'المقر الرسمي للعائلة الملكية وأكبر قصر في أوروبا الغربية',
            bestTime: 'أبريل - يونيو',
            ticket: '€14'
          },

          {
            name: 'متحف برادو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Museo_del_Prado_2016_%2825185969599%29.jpg/960px-Museo_del_Prado_2016_%2825185969599%29.jpg',
            address: 'Calle de Ruiz de Alarcón 23, 28014 Madrid',
            description: 'أشهر متاحف إسبانيا ويضم روائع فيلاسكيز وغويا',
            bestTime: 'سبتمبر - نوفمبر',
            ticket: '€15'
          },

          {
            name: 'ساحة مايور',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Madrid_Plaza_Mayor_%2848733706273%29.jpg/960px-Madrid_Plaza_Mayor_%2848733706273%29.jpg',
            address: 'Plaza Mayor, 28012 Madrid',
            description: 'ساحة تاريخية على طراز هابسبورغ تعود للقرن السابع عشر',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'حديقة بوين ريتيرو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Barcas_-_Estanque_del_Retiro_-_Madrid_01.jpg/960px-Barcas_-_Estanque_del_Retiro_-_Madrid_01.jpg',
            address: 'Plaza de la Independencia 7, 28001 Madrid',
            description: 'أشهر حديقة في مدريد وبحيرة التجديف والنصب التذكاري',
            bestTime: 'مارس - يونيو',
            ticket: 'مجاني'
          },

          {
            name: 'استاد سانتياغو برنابيو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg/960px-Estadio_Santiago_Bernab%C3%A9u_Madrid.jpg',
            address: 'Av. de Concha Espina 1, 28036 Madrid',
            description: 'ملعب ريال مدريد الأسطوري بعد تجديده الشامل',
            bestTime: 'أغسطس - مايو',
            ticket: '€35'
          }
        ]
      },

      /* --- إشبيلية --- */
      {
        name: 'إشبيلية',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Sevilla_desde_San_Juan_de_Aznalfarache_%28Ayuntamiento_de_Sevilla%29.jpg/1280px-Sevilla_desde_San_Juan_de_Aznalfarache_%28Ayuntamiento_de_Sevilla%29.jpg',
        description: 'عاصمة الأندلس بتراثها العربي وروح الفلامنكو',
        landmarks: [
          {
            name: 'كاتدرائية إشبيلية والجيرالدا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Sevilla_Cathedral_-_Southeast.jpg/960px-Sevilla_Cathedral_-_Southeast.jpg',
            address: 'Av. de la Constitución, 41004 Sevilla',
            description: 'أكبر كاتدرائية قوطية في العالم وبها برج الجيرالدا',
            bestTime: 'أكتوبر - أبريل',
            ticket: '€13'
          },

          {
            name: 'قصر المورق الملكي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Sevilla-2-2_%2848040287512%29-edit.jpg/960px-Sevilla-2-2_%2848040287512%29-edit.jpg',
            address: 'Patio de Banderas, 41004 Sevilla',
            description: 'قصر ملكي بمعمار إسلامي رائع وصوّرت فيه مشاهد صراع العروش',
            bestTime: 'أبريل - أكتوبر',
            ticket: '€14'
          },

          {
            name: 'ساحة إسبانيا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg/960px-Plaza_de_Espa%C3%B1a_%28Sevilla%29_-_01.jpg',
            address: 'Av. de Isabel la Católica, 41013 Sevilla',
            description: 'ساحة نصف دائرية مذهلة بقناة مائية وقوارب تجديف',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'برج الذهب',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Torre_del_oro_laurels_Seville_Andalusia_Spain.jpg/960px-Torre_del_oro_laurels_Seville_Andalusia_Spain.jpg',
            address: 'Paseo de Cristóbal Colón, 41001 Sevilla',
            description: 'برج مراقبة من القرن الثالث عشر على نهر الوادي الكبير',
            bestTime: 'طوال العام',
            ticket: '€3'
          },

          {
            name: 'سيتاس الميتروبول',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Metropolparasolnov2011001.jpg/960px-Metropolparasolnov2011001.jpg',
            address: 'Plaza de la Encarnación, 41003 Sevilla',
            description: 'أكبر هيكل خشبي في العالم بممشى بانورامي فوق المدينة',
            bestTime: 'الغروب',
            ticket: '€5'
          }
        ]
      },

      /* --- غرناطة --- */
      {
        name: 'غرناطة',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Granada_%2825987961022%29.jpg/1280px-Granada_%2825987961022%29.jpg',
        description: 'آخر معاقل الأندلس وجوهرة المعمار الإسلامي',
        landmarks: [
          {
            name: 'قصر الحمراء',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg/960px-Dawn_Charles_V_Palace_Alhambra_Granada_Andalusia_Spain.jpg',
            address: 'Calle Real de la Alhambra, 18009 Granada',
            description: 'أعظم قصور الأندلس بزخارفه الإسلامية وأفنيته الخلابة',
            bestTime: 'مارس - مايو',
            ticket: '€19'
          },

          {
            name: 'قصر جنة العريف',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Patio_de_la_Acequia_%28Generalife%29_-_DSC07863_%28slightly_cropped_and_sharpened%29.jpg/960px-Patio_de_la_Acequia_%28Generalife%29_-_DSC07863_%28slightly_cropped_and_sharpened%29.jpg',
            address: 'Camino Viejo del Cementerio, 18009 Granada',
            description: 'الحدائق والقصور الصيفية لملوك غرناطة بنوافيرها وأزهارها',
            bestTime: 'أبريل - يونيو',
            ticket: 'داخل تذكرة الحمراء'
          },

          {
            name: 'حي البيازين',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/El_Albayz%C3%ADn_panorama_%282010%29.jpg/960px-El_Albayz%C3%ADn_panorama_%282010%29.jpg',
            address: 'Plaza San Nicolás, 18010 Granada',
            description: 'حي عربي عريق بأزقته الضيقة وأجمل إطلالة على الحمراء',
            bestTime: 'الغروب',
            ticket: 'مجاني'
          },

          {
            name: 'كاتدرائية غرناطة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/22/Granada_-_Cathedral_Front.jpg/960px-Granada_-_Cathedral_Front.jpg',
            address: 'Calle Gran Vía de Colón 5, 18001 Granada',
            description: 'أول كاتدرائية على طراز عصر النهضة في إسبانيا',
            bestTime: 'طوال العام',
            ticket: '€5'
          },

          {
            name: 'حي ساكرومونتي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Sacromonte_Nasrid_wall_Granada_Spain.jpg/960px-Sacromonte_Nasrid_wall_Granada_Spain.jpg',
            address: 'Camino del Sacromonte, 18010 Granada',
            description: 'حي الكهوف الشهير بعروض الفلامنكو الجبلي الأصيلة',
            bestTime: 'الليل',
            ticket: '€20 عرض فلامنكو'
          }
        ]
      }
    ]
  },

  /* ==================== ألمانيا - Germany ==================== */
  de: {
    country: 'ألمانيا',
    cities: [
      /* --- برلين --- */
      {
        name: 'برلين',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg/1280px-Museumsinsel_Berlin_Juli_2021_1_%28cropped%29_b.jpg',
        description: 'العاصمة الألمانية ومدينة التاريخ والفنون والحياة العصرية',
        landmarks: [
          {
            name: 'بوابة براندنبورغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a6/Brandenburger_Tor_abends.jpg/960px-Brandenburger_Tor_abends.jpg',
            address: 'Pariser Platz, 10117 Berlin',
            description: 'البوابة الأيقونية التي ترمز لوحدة ألمانيا',
            bestTime: 'مايو - سبتمبر',
            ticket: 'مجاني'
          },

          {
            name: 'جدار برلين',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Berlinermauer.jpg/960px-Berlinermauer.jpg',
            address: 'Mühlenstraße, 10243 Berlin',
            description: 'بقايا الجدار الشهير مع جدارية إيست سايد الفنية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'برج التلفزيون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Berliner_Fernsehturm%2C_Sicht_vom_Neptunbrunnen_-_Berlin_Mitte.jpg/960px-Berliner_Fernsehturm%2C_Sicht_vom_Neptunbrunnen_-_Berlin_Mitte.jpg',
            address: 'Panoramastraße 1A, 10178 Berlin',
            description: 'أعلى برج في ألمانيا بمنصة مشاهدة ومنطقة دوارة',
            bestTime: 'الغروب',
            ticket: '€25'
          },

          {
            name: 'جزيرة المتاحف',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Berlin_Museumsinsel_Fernsehturm.jpg/960px-Berlin_Museumsinsel_Fernsehturm.jpg',
            address: 'Bodestraße 1, 10178 Berlin',
            description: 'خمس متاحف عالمية على جزيرة واحدة وتراث يونسكو',
            bestTime: 'أكتوبر - مارس',
            ticket: '€19 تذكرة موحدة'
          },

          {
            name: 'مبنى الرايخستاغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/Berlin_reichstag_west_panorama_2.jpg/960px-Berlin_reichstag_west_panorama_2.jpg',
            address: 'Platz der Republik 1, 11011 Berlin',
            description: 'مقر البرلمان الألماني بقبة زجاجية بإطلالة بانورامية',
            bestTime: 'أبريل - سبتمبر',
            ticket: 'مجاني بتسجيل'
          }
        ]
      },

      /* --- ميونخ --- */
      {
        name: 'ميونخ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/1280px-Stadtbild_M%C3%BCnchen.jpg',
        description: 'عاصمة بافاريا ومدينة البيرة والحدائق والقصور',
        landmarks: [
          {
            name: 'ساحة ماريينبلاتز',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg/960px-Rathaus_and_Marienplatz_from_Peterskirche_-_August_2006.jpg',
            address: 'Marienplatz, 80331 München',
            description: 'قلب ميونخ النابض وساعة البلدية الراقصة الشهيرة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'حديقة إنجليشر جارتن',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Aerial_image_of_Englischer_Garten_in_Munich_%28view_from_the_southwest%29.jpg/960px-Aerial_image_of_Englischer_Garten_in_Munich_%28view_from_the_southwest%29.jpg',
            address: 'Englischer Garten 3, 80538 München',
            description: 'أكبر حديقة مدينة في أوروبا ببحيرات وأمواج راكبي الألواح',
            bestTime: 'مايو - سبتمبر',
            ticket: 'مجاني'
          },

          {
            name: 'قصر نيمفنبورغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Image-Schloss_Nymphenburg_Munich_CC_edit3.jpg/960px-Image-Schloss_Nymphenburg_Munich_CC_edit3.jpg',
            address: 'Schloß Nymphenburg 1, 80638 München',
            description: 'قصر الباروك الصيفي لملوك بافاريا بحدائقه الواسعة',
            bestTime: 'أبريل - أكتوبر',
            ticket: '€15'
          },

          {
            name: 'أولمبيابارك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/M%C3%BCnchen_-_Olympische_Bauten.jpg/960px-M%C3%BCnchen_-_Olympische_Bauten.jpg',
            address: 'Spiridon-Louis-Ring 21, 80809 München',
            description: 'الحديقة الأولمبية لأسابيع دورة 1972 ببرجها المميز',
            bestTime: 'مايو - سبتمبر',
            ticket: '€11 للبرج'
          },

          {
            name: 'كنيسة السيدة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg/960px-Frauenkirche_Munich_-_View_from_Peterskirche_Tower2.jpg',
            address: 'Frauenplatz 1, 80331 München',
            description: 'كاتدرائية بقبتيها التوأم ورمز مدينة ميونخ',
            bestTime: 'طوال العام',
            ticket: 'الدخول مجاني'
          }
        ]
      },

      /* --- كولونيا --- */
      {
        name: 'كولونيا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg/1280px-Kranh%C3%A4user_Cologne%2C_April_2018_-01.jpg',
        description: 'مدينة الراين الكبرى بكاتدرائيتها القوطية العظيمة',
        landmarks: [
          {
            name: 'كاتدرائية كولونيا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg/960px-K%C3%B6lner_Dom_-_Westfassade_2022_ohne_Ger%C3%BCst-0968_b.jpg',
            address: 'Domkloster 4, 50667 Köln',
            description: 'ثالث أكبر كاتدرائية قوطية في العالم وتراث يونسكو',
            bestTime: 'أبريل - أكتوبر',
            ticket: '€8 للبرج'
          },

          {
            name: 'الجسر الحديدي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Hohenzollernbr%C3%BCcke_K%C3%B6ln_von_oben.jpg/960px-Hohenzollernbr%C3%BCcke_K%C3%B6ln_von_oben.jpg',
            address: 'Hohenzollernbrücke, 50667 Köln',
            description: 'جسور الحب الشهيرة أمام الكاتدرائية فوق نهر الراين',
            bestTime: 'الغروب',
            ticket: 'مجاني'
          },

          {
            name: 'متحف الشوكولاتة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Schoko_Koeln_20061015.jpg/960px-Schoko_Koeln_20061015.jpg',
            address: 'Am Schokoladenmuseum 1a, 50678 Köln',
            description: 'متحف تفاعلي يشرح تاريخ الشوكولاتة مع مصنع مصغّر',
            bestTime: 'طوال العام',
            ticket: '€15'
          },

          {
            name: 'كنيسة القديس مارتن الكبرى',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/Koeln_gross_st_martin.jpg/960px-Koeln_gross_st_martin.jpg',
            address: 'An Groß St. Martin, 50667 Köln',
            description: 'كنيسة رومانية قديمة بأبراج أربع في قلب البلدة القديمة',
            bestTime: 'طوال العام',
            ticket: 'الدخول مجاني'
          },

          {
            name: 'مبنى البلدية القديم',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/K%C3%B6lner_Rathaus_-_Renaissance%E2%80%93Laube_%282621-23%29.jpg/960px-K%C3%B6lner_Rathaus_-_Renaissance%E2%80%93Laube_%282621-23%29.jpg',
            address: 'Rathausplatz 2, 50667 Köln',
            description: 'أقدم مبنى بلدية في ألمانيا وبوابة معمارية فخمة',
            bestTime: 'طوال العام',
            ticket: 'الدخول مجاني'
          }
        ]
      },

      /* --- هامبورغ --- */
      {
        name: 'هامبورغ',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Hamburg%2C_Landungsbr%C3%BCcken_--_2016_--_3131-7.jpg/1280px-Hamburg%2C_Landungsbr%C3%BCcken_--_2016_--_3131-7.jpg',
        description: 'المدينة الهانزية وميناء ألمانيا الأكبر وبوابتها للعالم',
        landmarks: [
          {
            name: 'ميناء هامبورغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Burchardkai-Nacht-%28Hamburg%29-msu-2021-4873-.jpg/960px-Burchardkai-Nacht-%28Hamburg%29-msu-2021-4873-.jpg',
            address: 'Am Sandtorkai 1, 20457 Hamburg',
            description: 'أكبر ميناء في ألمانيا وثالث أكبر ميناء أوروبي',
            bestTime: 'مايو - سبتمبر',
            ticket: '€20 رحلة بالقارب'
          },

          {
            name: 'مينييتور وندرلاند',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Miniatur_wunderland.jpg/960px-Miniatur_wunderland.jpg',
            address: 'Kehrwieder 2-4, 20457 Hamburg',
            description: 'أكبر نموذج سكة حديد مصغّر في العالم بمدن كاملة متحركة',
            bestTime: 'طوال العام',
            ticket: '€20'
          },

          {
            name: 'إلبفيلهارموني',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Elbphilharmonie_2025.jpg/960px-Elbphilharmonie_2025.jpg',
            address: 'Platz der Deutschen Einheit 1, 20457 Hamburg',
            description: 'دار الأوبرا أيقونية الشكل بواجهة زجاجية على الميناء',
            bestTime: 'طوال العام',
            ticket: '€5 للمنصة'
          },

          {
            name: 'مدينة المخازن سبايشرستادت',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Speicherstadt_abends.jpg/960px-Speicherstadt_abends.jpg',
            address: 'Am Sandtorkai 36, 20457 Hamburg',
            description: 'أكبر مجمع مخازن تجاري في العالم وتراث يونسكو',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'كنيسة القديس ميخائيل',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/Hamburg-Michaeliskirche-Hafen.jpg/960px-Hamburg-Michaeliskirche-Hafen.jpg',
            address: 'Englische Planke 1, 20459 Hamburg',
            description: 'كنيسة باروكية شهيرة ببرجها ذي الإطلالة على المدينة',
            bestTime: 'الغروب',
            ticket: '€5 للبرج'
          }
        ]
      }
    ]
  },

  /* ==================== الولايات المتحدة - United States ==================== */
  us: {
    country: 'الولايات المتحدة',
    cities: [
      /* --- نيويورك --- */
      {
        name: 'نيويورك',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Lights_of_Rockefeller_Center_during_sunset.jpg/1280px-Lights_of_Rockefeller_Center_during_sunset.jpg',
        description: 'المدينة التي لا تنام وعاصمة العالم الاقتصادية والثقافية',
        landmarks: [
          {
            name: 'تمثال الحرية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Front_view_of_Statue_of_Liberty_%28cropped%29.jpg/960px-Front_view_of_Statue_of_Liberty_%28cropped%29.jpg',
            address: 'Liberty Island, New York, NY 10004',
            description: 'رمز الحرية الأمريكي في ميناء نيويورك وهدية من فرنسا',
            bestTime: 'مايو - سبتمبر',
            ticket: '€24 بالعبارة'
          },

          {
            name: 'سنترال بارك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bethesda_Terrace_%26_Fountain_November_2020_03.jpg/960px-Bethesda_Terrace_%26_Fountain_November_2020_03.jpg',
            address: '59th to 110th St, Manhattan, New York, NY',
            description: 'أشهر حديقة حضرية في العالم وسط مانهاتن',
            bestTime: 'أبريل - يونيو',
            ticket: 'مجاني'
          },

          {
            name: 'إمباير ستيت',
            image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Empire_State_Building_%28aerial_view%29.jpg',
            address: '20 W 34th St, New York, NY 10001',
            description: 'ناطحة السحاب الأسطورية ومنصة مشاهدة بانورامية',
            bestTime: 'الغروب',
            ticket: '€44'
          },

          {
            name: 'تايمز سكوير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/New_york_times_square-terabass.jpg/960px-New_york_times_square-terabass.jpg',
            address: 'Broadway & 7th Ave, New York, NY 10036',
            description: 'مربع الأضواء العملاقة ومسرح برودواي',
            bestTime: 'الليل',
            ticket: 'مجاني'
          },

          {
            name: 'جسر بروكلين',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg/960px-Brooklyn_Bridge_and_the_Lower_Manhattan_skyline_from_Pebble_Beach%2C_New_York.jpg',
            address: 'Brooklyn Bridge, New York, NY 10038',
            description: 'جسر معلّق أيقوني من 1883 بممشى بإطلالة على مانهاتن',
            bestTime: 'الصباح الباكر',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- لوس أنجلوس --- */
      {
        name: 'لوس أنجلوس',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e4/Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg/1280px-Skyline_of_Los_Angeles%2C_Downtown_Los_Angeles%2C_California_13.jpg',
        description: 'مدينة الملائكة وعاصمة صناعة السينما والترفيه',
        landmarks: [
          {
            name: 'لوحة هوليوود',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Hollywood_sign_%288485145044%29.jpg/960px-Hollywood_sign_%288485145044%29.jpg',
            address: '3100 N Beachwood Dr, Los Angeles, CA 90068',
            description: 'أشهر لافتة في العالم على تلال هوليوود',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'ممشى المشاهير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Walk_of_Fame%2C_Hollywood_%2820986072759%29.jpg/960px-Walk_of_Fame%2C_Hollywood_%2820986072759%29.jpg',
            address: 'Hollywood Blvd, Los Angeles, CA 90028',
            description: 'أكثر من 2700 نجمة على رصيف شارع هوليوود',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'رصيف سانتا مونيكا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Santa_monica_pier_entrance_evening.jpg/960px-Santa_monica_pier_entrance_evening.jpg',
            address: '200 Santa Monica Pier, Santa Monica, CA 90401',
            description: 'رصيف خشبي شهير بمدينة ملاهي وإطلالة على المحيط',
            bestTime: 'يونيو - سبتمبر',
            ticket: 'مجاني'
          },

          {
            name: 'مرصد غريفيث',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4b/Griffith_observatory_2006.jpg/960px-Griffith_observatory_2006.jpg',
            address: '2800 E Observatory Rd, Los Angeles, CA 90027',
            description: 'مرصد فلكي مجاني بأفضل إطلالة على لوس أنجلوس',
            bestTime: 'الغروب',
            ticket: 'مجاني'
          },

          {
            name: 'بيفرلي هيلز',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/Beverly_Wilshire_Hotel_%2815676919512%29.jpg/960px-Beverly_Wilshire_Hotel_%2815676919512%29.jpg',
            address: 'Beverly Hills, CA 90210',
            description: 'من أفخم أحياء الولايات المتحدة بفيلات المشاهير وشارع روديو درايف',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- لاس فيغاس --- */
      {
        name: 'لاس فيغاس',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Las_Vegas_from_above_%2840064746644%29.jpg/1280px-Las_Vegas_from_above_%2840064746644%29.jpg',
        description: 'عاصمة الترفيه والفنادق والكازينوهات في الصحراء',
        landmarks: [
          {
            name: 'شارع الستريب',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ee/Las_Vegas_Strip_09_2017_4897.jpg/960px-Las_Vegas_Strip_09_2017_4897.jpg',
            address: 'Las Vegas Blvd S, Las Vegas, NV 89109',
            description: 'أشهر شارع ترفيهي في العالم بفنادقه العملاقة',
            bestTime: 'أكتوبر - أبريل',
            ticket: 'مجاني'
          },

          {
            name: 'نافورة بيلاجيو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Bellagio_Fountain.jpg/960px-Bellagio_Fountain.jpg',
            address: '3600 S Las Vegas Blvd, Las Vegas, NV 89109',
            description: 'عرض نوافير راقصة مجاني أمام فندق بيلاجيو',
            bestTime: 'الليل',
            ticket: 'مجاني'
          },

          {
            name: 'عجلة هاي رولر',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Las_Vegas%2C_High_Roller%2C_2018.11.22_%2801%29.jpg/960px-Las_Vegas%2C_High_Roller%2C_2018.11.22_%2801%29.jpg',
            address: '3545 S Las Vegas Blvd, Las Vegas, NV 89109',
            description: 'أطول عجلة مشاهدة في العالم بارتفاع 167 متر',
            bestTime: 'الغروب',
            ticket: '€35'
          },

          {
            name: 'شارع فريبمونت',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/LasVegas-FremontStreet.jpg/960px-LasVegas-FremontStreet.jpg',
            address: '425 Fremont St, Las Vegas, NV 89101',
            description: 'البلدة القديمة بسقف ضوئي موسيقي ضخم',
            bestTime: 'الليل',
            ticket: 'مجاني'
          },

          {
            name: 'لافتة لاس فيغاس',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Welcome_to_Fabulous_Las_Vegas.jpg/960px-Welcome_to_Fabulous_Las_Vegas.jpg',
            address: '5100 Las Vegas Blvd S, Las Vegas, NV 89119',
            description: 'لافتة الشهيرة التي يزورها كل سائح لأخذ صورة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- سان فرانسيسكو --- */
      {
        name: 'سان فرانسيسكو',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/San_Francisco_Skyline_and_East_Bay%2C_from_Twin_Peaks.jpg/1280px-San_Francisco_Skyline_and_East_Bay%2C_from_Twin_Peaks.jpg',
        description: 'مدينة التلال والضباب والجسر الذهبي على المحيط الهادئ',
        landmarks: [
          {
            name: 'جسر البوابة الذهبية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Golden_Gate_Bridge_as_seen_from_Battery_East.jpg/960px-Golden_Gate_Bridge_as_seen_from_Battery_East.jpg',
            address: 'Golden Gate Brg, San Francisco, CA 94129',
            description: 'أشهر جسر معلّق في العالم برتقالي اللون',
            bestTime: 'سبتمبر - نوفمبر',
            ticket: 'مجاني للسير'
          },

          {
            name: 'جزيرة الكاتراز',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Alcatraz_2021.jpg/960px-Alcatraz_2021.jpg',
            address: 'Alcatraz Island, San Francisco, CA 94133',
            description: 'السجن الأشهر في التاريخ وسط خليج سان فرانسيسكو',
            bestTime: 'طوال العام',
            ticket: '€45 بالعبارة'
          },

          {
            name: 'بير 39',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/Pier_39_in_2021.jpg/960px-Pier_39_in_2021.jpg',
            address: 'The Embarcadero, San Francisco, CA 94133',
            description: 'رصيف سياحي بمحلات وأسود البحر ومراكب شراعية',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'ترامواي سان فرانسيسكو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cable_car_19_on_Hyde_Street%2C_July_2023.JPG/960px-Cable_car_19_on_Hyde_Street%2C_July_2023.JPG',
            address: 'Powell St & Market St, San Francisco, CA 94102',
            description: 'أقدم نظام ترامواي في العالم وتراث متحرك',
            bestTime: 'طوال العام',
            ticket: '€8'
          },

          {
            name: 'شارع لومبارد',
            image: 'https://upload.wikimedia.org/wikipedia/commons/d/d1/Lombard_Street_2020.jpg',
            address: 'Lombard St, San Francisco, CA 94133',
            description: 'أكثر شارع متعرج في أمريكا بثمانية منعطفات حادة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      }
    ]
  },

  /* ==================== اليابان - Japan ==================== */
  jp: {
    country: 'اليابان',
    cities: [
      /* --- طوكيو --- */
      {
        name: 'طوكيو',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Skyscrapers_of_Shinjuku_2009_January.jpg/1280px-Skyscrapers_of_Shinjuku_2009_January.jpg',
        description: 'عاصمة اليابان وأكبر تجمع حضري في العالم',
        landmarks: [
          {
            name: 'برج طوكيو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tokyo_Tower_2023.jpg/960px-Tokyo_Tower_2023.jpg',
            address: '4 Chome-2-8 Shibakoen, Minato City, Tokyo',
            description: 'برج أحمر مستوحى من برج إيفل بمنصتي مشاهدة',
            bestTime: 'أكتوبر - أبريل',
            ticket: '¥1200'
          },

          {
            name: 'تقاطع شيبويا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Shibuya_Crossing%2C_Aerial.jpg/960px-Shibuya_Crossing%2C_Aerial.jpg',
            address: '2 Dogenzaka, Shibuya City, Tokyo',
            description: 'أزحم تقاطع مشاة في العالم بأضواء النيون',
            bestTime: 'الليل',
            ticket: 'مجاني'
          },

          {
            name: 'معبد سينسوجي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Sensoji_2023.jpg/960px-Sensoji_2023.jpg',
            address: '2 Chome-3-1 Asakusa, Taito City, Tokyo',
            description: 'أقدم معبد بوذي في طوكيو وبوابة الرعد الشهيرة',
            bestTime: 'مارس - مايو',
            ticket: 'مجاني'
          },

          {
            name: 'حديقة أوينو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Ueno_park.jpg/960px-Ueno_park.jpg',
            address: '5 Uenokoen, Taito City, Tokyo',
            description: 'أشهر حديقة لمشاهدة أزهار الكرز ومجموعة متاحف',
            bestTime: 'مارس - أبريل',
            ticket: 'مجاني'
          },

          {
            name: 'برج سكاي تري',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Tokyo_Skytree_2014_%E2%85%A2.jpg/960px-Tokyo_Skytree_2014_%E2%85%A2.jpg',
            address: '1 Chome-1-2 Oshiage, Sumida City, Tokyo',
            description: 'أطول برج في العالم بارتفاع 634 متر',
            bestTime: 'الغروب',
            ticket: '¥2100'
          },

          {
            name: 'ضريح ميجي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8b/Meiji_Jingu_2023-3.jpg/960px-Meiji_Jingu_2023-3.jpg',
            address: '1-1 Yoyogikamizonocho, Shibuya City, Tokyo',
            description: 'ضريح شنتو وسط غابة من مئة ألف شجرة',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          }
        ]
      },

      /* --- كيوتو --- */
      {
        name: 'كيوتو',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Kyoto%2C_Japan_%2849667780482%29.jpg/1280px-Kyoto%2C_Japan_%2849667780482%29.jpg',
        description: 'العاصمة القديمة لليابان وعاصمة المعابد والحدائق',
        landmarks: [
          {
            name: 'معبد كينكاكو-جي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg/960px-Golden_Pavilion_Kinkaku-ji_water_mirror_2024.jpg',
            address: '1 Kinkakujicho, Kita Ward, Kyoto',
            description: 'المعبد الذهبي المغطى بورق ذهب وسط حديقة يابانية',
            bestTime: 'مارس - مايو',
            ticket: '¥500'
          },

          {
            name: 'غابة الأرز أراشيياما',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Arashiyama%2C_Part_II_-_Arashiyama7534.jpg/960px-Arashiyama%2C_Part_II_-_Arashiyama7534.jpg',
            address: 'Ukyo Ward, Kyoto',
            description: 'غابة البامبو الأسطورية وطريق الأرز الأخضر',
            bestTime: 'الصباح الباكر',
            ticket: 'مجاني'
          },

          {
            name: 'ضريح فوشيمي إيناري',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg/960px-Torii_path_with_lantern_at_Fushimi_Inari_Taisha_Shrine%2C_Kyoto%2C_Japan.jpg',
            address: '68 Fukakusa Yabunouchicho, Fushimi Ward, Kyoto',
            description: 'آلاف البوابات الحمراء على مسار جبل إيناري',
            bestTime: 'الصباح الباكر',
            ticket: 'مجاني'
          },

          {
            name: 'حي جيون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/23/150124_Gion_Kyoto_Japan01s3.jpg/960px-150124_Gion_Kyoto_Japan01s3.jpg',
            address: 'Gion, Higashiyama Ward, Kyoto',
            description: 'حي الجيشا التاريخي بشوارعه الخشبية والفوانيس',
            bestTime: 'المساء',
            ticket: 'مجاني'
          },

          {
            name: 'معبد كيوميزو-ديرا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Kiyomizu.jpg/960px-Kiyomizu.jpg',
            address: '1-294 Kiyomizu, Higashiyama Ward, Kyoto',
            description: 'معبد خشبي على منصة شاهقة بإطلالة على كيوتو',
            bestTime: 'مارس - مايو',
            ticket: '¥400'
          }
        ]
      },

      /* --- أوساكا --- */
      {
        name: 'أوساكا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Osaka%2C_Japan_%2830840955005%29.jpg/1280px-Osaka%2C_Japan_%2830840955005%29.jpg',
        description: 'مدينة الطعام والترفيه وثاني أكبر مدن اليابان',
        landmarks: [
          {
            name: 'قلعة أوساكا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Osaka_Castle_03bs3200.jpg/960px-Osaka_Castle_03bs3200.jpg',
            address: '1-1 Osakajo, Chuo Ward, Osaka',
            description: 'قلعة تاريخية بخمس طبقات تحيط بها حديقة الكرز',
            bestTime: 'مارس - أبريل',
            ticket: '¥600'
          },

          {
            name: 'شارع دوتونبوري',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Osaka_Dotonbori_Ebisu_Bridge.jpg/960px-Osaka_Dotonbori_Ebisu_Bridge.jpg',
            address: '1 Chome Dotonbori, Chuo Ward, Osaka',
            description: 'أشهر شارع طعام في اليابان بنيونه على القناة',
            bestTime: 'الليل',
            ticket: 'مجاني'
          },

          {
            name: 'يونيفرسال ستوديوز',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/USJ_5years.JPG/960px-USJ_5years.JPG',
            address: '2 Chome-1-33 Sakurajima, Konohana Ward, Osaka',
            description: 'أشهر مدينة ملاهي في اليابان وعالم هاري بوتر',
            bestTime: 'مايو - يونيو',
            ticket: '¥8600'
          },

          {
            name: 'برج تسوتينكاكو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/New_Tsutenkaku%2C_Osaka.jpg/960px-New_Tsutenkaku%2C_Osaka.jpg',
            address: '1 Chome-18-6 Ebisuhigashi, Naniwa Ward, Osaka',
            description: 'برج سابق يرمز لحي شينسيكاي الشعبي',
            bestTime: 'الغروب',
            ticket: '¥900'
          },

          {
            name: 'برج أوميدا سكاي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/2018_Umeda_Sky_Building.jpg/960px-2018_Umeda_Sky_Building.jpg',
            address: '1 Chome-1-88 Oyodonaka, Kita Ward, Osaka',
            description: 'برجان متصلان بمنصة معلقة بإطلالة 360 درجة',
            bestTime: 'الغروب',
            ticket: '¥1500'
          }
        ]
      },

      /* --- هيروشيما --- */
      {
        name: 'هيروشيما',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Atomic_Bomb_Dome_and_Motoyaso_River%2C_Hiroshima%2C_Northwest_view_20190417_1.jpg/1280px-Atomic_Bomb_Dome_and_Motoyaso_River%2C_Hiroshima%2C_Northwest_view_20190417_1.jpg',
        description: 'مدينة السلام والذكرى بتراثها التاريخي وجزرها الجميلة',
        landmarks: [
          {
            name: 'حديقة السلام',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/20181111_Hiroshima_Memorial_Cenotaph-1.jpg/960px-20181111_Hiroshima_Memorial_Cenotaph-1.jpg',
            address: '1-1 Nakajimacho, Naka Ward, Hiroshima',
            description: 'حديقة تذكارية للسلام ونصب اللهب التذكاري',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'قبة القنبلة الذرية',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/Genbaku_Dome04-r.JPG/960px-Genbaku_Dome04-r.JPG',
            address: '1-10 Otemachi, Naka Ward, Hiroshima',
            description: 'أطلال القبة الشهيدة ورمز أممى للسلام وتراث يونسكو',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'ضريح إيتسوكوشيما',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ef/Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg/960px-Itsukushima_Shrine_Torii_Gate_%2813890465459%29.jpg',
            address: '1-1 Miyajimacho, Hatsukaichi, Hiroshima',
            description: 'بوابة التوري العائمة على الماء في جزيرة مياجيما',
            bestTime: 'الصباح الباكر',
            ticket: '¥300'
          },

          {
            name: 'قلعة هيروشيما',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Keep_tower%2C_Hiroshima_Castle%2C_Southwest_remote_view_20190417_1.jpg/960px-Keep_tower%2C_Hiroshima_Castle%2C_Southwest_remote_view_20190417_1.jpg',
            address: '21-1 Motomachi, Naka Ward, Hiroshima',
            description: 'قلعة كاربية أصلية تعرف باسم قلعة سمكة الشبوط',
            bestTime: 'مارس - أبريل',
            ticket: '¥370'
          },

          {
            name: 'حديقة شوكيه-إن',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Rainbow_bridge_in_Shukkei-en_Hiroshima.jpg/960px-Rainbow_bridge_in_Shukkei-en_Hiroshima.jpg',
            address: '2-11 Kaminoboricho, Naka Ward, Hiroshima',
            description: 'حديقة يابانية من عصر إيدو بمناظر مصغّرة خلابة',
            bestTime: 'الغروب',
            ticket: '¥260'
          }
        ]
      }
    ]
  },

  /* ==================== تايلاند - Thailand ==================== */
  th: {
    country: 'تايلاند',
    cities: [
      /* --- بانكوك --- */
      {
        name: 'بانكوك',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/4Y1A1159_Bangkok_%2833536795515%29.jpg/1280px-4Y1A1159_Bangkok_%2833536795515%29.jpg',
        description: 'عاصمة تايلاند ومدينة المعابد البوذية والأسواق النابضة',
        landmarks: [
          {
            name: 'القصر الكبير',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/0005574_-_Wat_Phra_Kaew_006.jpg/960px-0005574_-_Wat_Phra_Kaew_006.jpg',
            address: 'Na Phra Lan Rd, Phra Nakhon, Bangkok',
            description: 'القصر الملكي الفخم ومقر الملوك التايلانديين سابقاً',
            bestTime: 'نوفمبر - فبراير',
            ticket: '฿500'
          },

          {
            name: 'معبد وات فرا كايو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Wat_Phra_Kaew_by_Ninara_TSP_edit_crop.jpg/960px-Wat_Phra_Kaew_by_Ninara_TSP_edit_crop.jpg',
            address: 'Na Phra Lan Rd, Phra Nakhon, Bangkok',
            description: 'معبد بوذا الزمردي داخل أسوار القصر الكبير',
            bestTime: 'الصباح الباكر',
            ticket: 'داخل تذكرة القصر'
          },

          {
            name: 'معبد وات أرون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%9B%E0%B8%A3%E0%B8%B0%E0%B8%98%E0%B8%B2%E0%B8%99%E0%B8%97%E0%B8%A3%E0%B8%87%E0%B8%9B%E0%B8%A3%E0%B8%B2%E0%B8%87%E0%B8%84%E0%B9%8C%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%AD%E0%B8%A3%E0%B8%B8%E0%B8%932.jpg',
            address: '158 Thanon Wang Doem, Bangkok Yai, Bangkok',
            description: 'معبد الفجر المزخرف بالخزف على ضفة نهر تشاو فرايا',
            bestTime: 'الغروب',
            ticket: '฿100'
          },

          {
            name: 'معبد وات بو',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg/960px-%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%9E%E0%B8%B8%E0%B8%97%E0%B8%98%E0%B9%84%E0%B8%AA%E0%B8%A2%E0%B8%B2%E0%B8%AA%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B9%80%E0%B8%8A%E0%B8%95%E0%B8%B8%E0%B8%9E%E0%B8%99.jpg',
            address: '2 Sanam Chai Rd, Phra Nakhon, Bangkok',
            description: 'معبد بوذا المستلقي بطول 46 متراً ومدرسة التدليك التايلاندي',
            bestTime: 'الصباح الباكر',
            ticket: '฿200'
          },

          {
            name: 'سوق تشاتوتشاك',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Bangkok_-_Jatujak_Market_02.JPG/960px-Bangkok_-_Jatujak_Market_02.JPG',
            address: '587/10 Kamphaeng Phet 2 Rd, Bangkok',
            description: 'أكبر سوق نهاية أسبوع في العالم بأكثر من 15 ألف كشك',
            bestTime: 'السبت والأحد',
            ticket: 'مجاني'
          },

          {
            name: 'بيت جيم تومسون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Main_House_of_Jim_Thompson_photo_Don_Ramey_Logan.jpg/960px-Main_House_of_Jim_Thompson_photo_Don_Ramey_Logan.jpg',
            address: '6 Soi Kasemsan 2, Rama 1 Rd, Bangkok',
            description: 'بيت حريري تقليدي لم يبقَ أثره وراء الحرير التايلاندي',
            bestTime: 'طوال العام',
            ticket: '฿200'
          }
        ]
      },

      /* --- بوكيت --- */
      {
        name: 'بوكيت',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/60/Phuket_Aerial.jpg/1280px-Phuket_Aerial.jpg',
        description: 'أكبر جزر تايلاند وشواطئها الرملية البيضاء ومياهها الفيروزية',
        landmarks: [
          {
            name: 'شاطئ باتونغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/88/Patong_Beach.jpg/960px-Patong_Beach.jpg',
            address: 'Patong, Kathu District, Phuket',
            description: 'أشهر شواطئ بوكيت بالحياة الليلية والأسواق',
            bestTime: 'نوفمبر - أبريل',
            ticket: 'مجاني'
          },

          {
            name: 'خليج فانغ نغا',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Dramatic_karst_landscape_of_Phang_Nga_Bay%2C_Thailand.jpg/960px-Dramatic_karst_landscape_of_Phang_Nga_Bay%2C_Thailand.jpg',
            address: 'Ao Phang Nga National Park, Phang Nga',
            description: 'خليج جيري مذهل بجزر الجير والصخور المعلقة',
            bestTime: 'نوفمبر - أبريل',
            ticket: '฿1500 رحلة قارب'
          },

          {
            name: 'معبد تشالونغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/8/84/Wat_chalong_pagoda.jpg',
            address: 'Chao Fa West Rd, Chalong, Phuket',
            description: 'أهم معبد بوذي في بوكيت ببرج تشانغ ذي الطوابق الثلاث',
            bestTime: 'طوال العام',
            ticket: 'مجاني'
          },

          {
            name: 'شاطئ كارون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Karonbeach_2004.jpg/960px-Karonbeach_2004.jpg',
            address: 'Karon, Mueang Phuket District, Phuket',
            description: 'شاطئ طويل هادئ برمال ناعمة ومياه صافية',
            bestTime: 'نوفمبر - أبريل',
            ticket: 'مجاني'
          },

          {
            name: 'جزر بي بي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/KohPhiPhi.JPG/960px-KohPhiPhi.JPG',
            address: 'Ao Nang, Mueang Krabi District, Krabi',
            description: 'أشهر جزر تايلاند بخلجانها المخفية ومياهها الزمردية',
            bestTime: 'نوفمبر - أبريل',
            ticket: '฿1800 رحلة يوم'
          }
        ]
      },

      /* --- شيانغ ماي --- */
      {
        name: 'شيانغ ماي',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg/1280px-0020-%E0%B8%A7%E0%B8%B1%E0%B8%94%E0%B8%9E%E0%B8%A3%E0%B8%B0%E0%B8%AA%E0%B8%B4%E0%B8%87%E0%B8%AB%E0%B9%8C%E0%B8%A7%E0%B8%A3%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%AB%E0%B8%B2%E0%B8%A3.jpg',
        description: 'عاصمة الشمال التايلاندي ومدينة المعابد والجبال والطبيعة',
        landmarks: [
          {
            name: 'معبد دوي سوتيب',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg/960px-Wat_Phra_That_Doi_Suthep_-_Chiang_Mai.jpg',
            address: '9 Mueang Chiang Mai District, Chiang Mai',
            description: 'المعبد الذهبي المقدس فوق جبل بإطلالة على المدينة',
            bestTime: 'نوفمبر - فبراير',
            ticket: '฿50'
          },

          {
            name: 'بوابة ثا فاي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Chiang_Mai_-_East_gate_of_the_city_wall_-_0001.jpg/960px-Chiang_Mai_-_East_gate_of_the_city_wall_-_0001.jpg',
            address: 'Tha Phae Gate, Chang Moi, Chiang Mai',
            description: 'البوابة التاريخية للمدينة القديمة المربعة وبوابة مهرجان يي بينغ',
            bestTime: 'نوفمبر - فبراير',
            ticket: 'مجاني'
          },

          {
            name: 'سوق شيانغ ماي الليلي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/CHIANG_MAI_NIGHT_BAZAAR_THAILAND_FEB_2012_%286869571256%29.jpg/960px-CHIANG_MAI_NIGHT_BAZAAR_THAILAND_FEB_2012_%286869571256%29.jpg',
            address: 'Chang Khlan Rd, Chang Khlan, Chiang Mai',
            description: 'سوق ليلي ضخم للحرف اليدوية والملابس والأطعمة',
            bestTime: 'المساء',
            ticket: 'مجاني'
          },

          {
            name: 'جبل دوي إنثانون',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Naphamethinidon%2C_Naphaphonphumisiri_near_summit_of_Doi_Inthanon.jpg/960px-Naphamethinidon%2C_Naphaphonphumisiri_near_summit_of_Doi_Inthanon.jpg',
            address: 'Ban Luang, Chom Thong District, Chiang Mai',
            description: 'أعلى قمة في تايلاند بشلالات ومعابد وضباب',
            bestTime: 'نوفمبر - فبراير',
            ticket: '฿300'
          },

          {
            name: 'معبد تشيدي لوانغ',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87.jpg/960px-%E0%B9%80%E0%B8%88%E0%B8%94%E0%B8%B5%E0%B8%A2%E0%B9%8C%E0%B8%AB%E0%B8%A5%E0%B8%A7%E0%B8%87.jpg',
            address: '103 Prapokkloa Rd, Si Phum, Chiang Mai',
            description: 'معبد ضخم بأكبر ستيوبا مهدمة في المدينة القديمة',
            bestTime: 'طوال العام',
            ticket: '฿40'
          }
        ]
      },

      /* --- باتايا --- */
      {
        name: 'باتايا',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Pattaya_beach_from_view_point.jpg/1280px-Pattaya_beach_from_view_point.jpg',
        description: 'مدينة الساحل الشرقي الشهيرة بشواطئها ورياضاتها المائية وليلها',
        landmarks: [
          {
            name: 'شاطئ جومتين',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/Jomtien_Beach_and_The_Gulf_of_Thailand_by_Don_Ramey_Logan.jpg/960px-Jomtien_Beach_and_The_Gulf_of_Thailand_by_Don_Ramey_Logan.jpg',
            address: 'Jomtien Beach, Pattaya, Chonburi',
            description: 'شاطئ هادئ مناسب للعائلات بمسار طويل للمشي',
            bestTime: 'نوفمبر - أبريل',
            ticket: 'مجاني'
          },

          {
            name: 'جزيرة لان كورال',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Ko_Lan_sunset.jpg/960px-Ko_Lan_sunset.jpg',
            address: 'Ko Lan, Bang Lamung District, Chonburi',
            description: 'جزيرة قريبة بشعاب مرجانية ومياه صافية للسباحة',
            bestTime: 'نوفمبر - أبريل',
            ticket: '฿1500 رحلة'
          },

          {
            name: 'حديقة نونغ نوتش',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7f/Nong_Noogh_Garden%281%29.jpg/960px-Nong_Noogh_Garden%281%29.jpg',
            address: '34/1 Moo 7, Na Jomtien, Sattahip, Chonburi',
            description: 'حديقة نباتية استوائية ضخمة بعروض ثقافية تايلاندية',
            bestTime: 'طوال العام',
            ticket: '฿500'
          },

          {
            name: 'معبد الحقيقة',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/fb/Santuaryoftruth2.jpg/960px-Santuaryoftruth2.jpg',
            address: '206/2 Moo 5, Na Kluea, Bang Lamung, Chonburi',
            description: 'معبد خشبي ضخم كامل بالمنحوتات على حافة البحر',
            bestTime: 'طوال العام',
            ticket: '฿500'
          },

          {
            name: 'شارع المشي',
            image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Pattaya%2C_Walking_Street_at_night%2C_Thailand.jpg/960px-Pattaya%2C_Walking_Street_at_night%2C_Thailand.jpg',
            address: 'Walking St, Pattaya City, Chonburi',
            description: 'أشهر شارع ترفيهي ليلي في تايلاند بأضوائه الصاخبة',
            bestTime: 'الليل',
            ticket: 'مجاني'
          }
        ]
      }
    ]
  }

};