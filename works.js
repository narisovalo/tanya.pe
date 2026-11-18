// ===== TANYA PÉ — список серий и работ =====
// Как редактировать:
//  • продано: замените st:"available" на st:"sold"
//  • цена в евро: p:385 (до 500 € показывается цифрой); p:null = "Price on request"
//  • убрать работу: удалите её строку целиком (от { до },)
//  • добавить работу: скопируйте строку соседней работы и поменяйте id, название, размер;
//    фото положите в ту же папку как ID.jpg (большое) и ID_t.jpg (маленькое)
//  • ex:[...] — дополнительные фото в карточке; имена на mk_ показываются с подписью Visualisation
const SERIES=[
 {k:"redfish",cls:"ch-indigo",en:"Red fish and blue pears",ru:"Красная рыба и голубые груши",
  attr:{en:"2026–ongoing. Vinyl paint on paper, 14.8 × 10.5 cm (5.8 × 4.1 in) each",ru:"2026, серия продолжается. Виниловая краска, бумага, 14,8 × 10,5 см каждая"},
  den:"Still lifes the size of a postcard. Small talismans that remind you your ideas are worth pursuing.",
  dru:"Натюрморты размером с открытку. Маленькие талисманы, которые напоминают, что ваши идеи стоят того, чтобы за ними идти."},
 {k:"castle",cls:"ch-lemon",en:"My home is my castle",ru:"Мой дом моя крепость",
  attr:{en:"2026. Vinyl paint on 300 g/m² watercolour paper, 36 × 33 cm (14.2 × 13 in) each",ru:"2026. Виниловая краска, акварельная бумага 300 г/м², 36 × 33 см каждая"},photo:"castle_wall",
  den:"Works on coarse watercolour paper about the inner limits we build to keep our ideas of ourselves and the world intact. They can be dense and confident, sometimes absurd. Sometimes they save our lives.",
  dru:"Работы на акварельной бумаге с крупным зерном о внутренних границах, которые мы строим, чтобы сохранить представления о себе и о мире. Они бывают плотными и уверенными, иногда абсурдными. Иногда они спасают нам жизнь."},
 {k:"mono",cls:"ch-paper",en:"The Taming",ru:"Приручение",
  attr:{en:"2026. Pink acrylic on paper, 42 × 30 cm (16.5 × 11.8 in) each. Series of 12 unique prints",ru:"2026. Розовый акрил, бумага, 42 × 30 см каждый. Серия из 12 уникальных оттисков"},
  den:"A fish covered in pink acrylic paint, pressed to paper twelve times. Each impression fainter than the last. This shade of pink does not exist in nature. Here the pink is fear. Can emotions be tamed at all? Or do we simply learn to press them to paper again and again and watch the mark grow fainter?",
  dru:"Рыба, покрытая розовым акрилом, двенадцать раз прижата к бумаге. Каждый оттиск бледнее предыдущего. Такого оттенка розового нет в природе. Здесь розовый означает страх. Можно ли вообще приручить эмоции? Или мы просто учимся снова и снова прижимать их к бумаге и смотреть, как след становится бледнее?"},
 {k:"paint",cls:"ch-reddark",en:"Fish",ru:"Рыбы",
  attr:{en:"Oil on canvas, 2023",ru:"Холст, масло, 2023"},
  den:"Fish in unexpected places. A cathedral, a doll among fish, goldfish in plastic bags next to a tin of caviar.",
  dru:"Рыбы в неожиданных местах. Собор, кукла среди рыб, золотые рыбки в пакетах рядом с банкой икры."}
];
const MED={vinyl:{en:"Vinyl paint on 300 g watercolour paper",ru:"Виниловая краска, акварельная бумага 300 г"},
 vinylp:{en:"Vinyl paint on paper",ru:"Виниловая краска, бумага"},oil:{en:"Oil on canvas",ru:"Холст, масло"},
 mono:{en:"Pink acrylic on paper",ru:"Розовый акрил, бумага"}};
const MSK={en:"Moscow",ru:"Москве"};
// w = size on page (l/m/s); p = price EUR (shown if <= 500), null = on request; st = available | sold
const WORKS=[
 {id:"c3",s:"castle",n:3,w:"l",m:"vinyl",z:"36 × 33 cm",p:null,st:"available",y:"2026",zi:"14.2 × 13 in",ex:["c3_flat","c3_easel","mk_green","mk_pink"]},
 {id:"c2",s:"castle",n:2,w:"m",m:"vinyl",z:"36 × 33 cm",p:null,st:"available",y:"2026",zi:"14.2 × 13 in",ex:["c2_flat","mk_green","mk_21","mk_24"]},
 {id:"c1",s:"castle",n:1,w:"m",m:"vinyl",z:"36 × 33 cm",p:null,st:"sold",y:"2026",zi:"14.2 × 13 in",ex:["c1_flat","c1_easel","mk_green","mk_21"]},
 {id:"c5",s:"castle",n:5,w:"s",m:"vinyl",z:"36 × 33 cm",p:null,st:"available",y:"2026",zi:"14.2 × 13 in"},
 {id:"c6",s:"castle",n:6,w:"m",m:"vinyl",z:"36 × 33 cm",p:null,st:"available",y:"2026",zi:"14.2 × 13 in"},
 {id:"c4",s:"castle",n:4,w:"s",m:"vinyl",z:"36 × 33 cm",p:null,st:"sold",y:"2026",zi:"14.2 × 13 in",ex:["mk_24"]},
 {id:"rf1",s:"redfish",n:1,w:"m",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"available",y:"2026",zi:"5.8 × 4.1 in",ex:["mk_rf_desk","mk_rf_living"]},
 {id:"rf3",s:"redfish",n:3,w:"s",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"available",y:"2026",zi:"5.8 × 4.1 in",ex:["mk_rf_living"]},
 {id:"rf2",s:"redfish",n:2,w:"m",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"available",y:"2026",zi:"5.8 × 4.1 in",ex:["mk_rf_living"]},
 {id:"rf4",s:"redfish",n:4,w:"s",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"available",y:"2026",zi:"5.8 × 4.1 in"},
 {id:"rf5",s:"redfish",n:5,w:"m",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"available",y:"2026",zi:"5.8 × 4.1 in"},
 {id:"rf6",s:"redfish",n:6,w:"s",m:"vinylp",z:"14.8 × 10.5 cm",p:null,st:"sold",y:"2026",zi:"5.8 × 4.1 in"},
 {id:"mono4",s:"mono",t:{en:"Untitled I",ru:"Без названия I"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"mono2",s:"mono",t:{en:"Untitled II",ru:"Без названия II"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"mono1_b",s:"mono",t:{en:"Untitled III",ru:"Без названия III"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"mono1_c",s:"mono",t:{en:"Untitled IV",ru:"Без названия IV"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"mono1",s:"mono",t:{en:"Untitled V",ru:"Без названия V"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"mono3_b",s:"mono",t:{en:"Untitled VI",ru:"Без названия VI"},w:"m",m:"mono",z:"",p:null,st:"available",ex:["mono3_d"]},
 {id:"mono3",s:"mono",t:{en:"Untitled VII",ru:"Без названия VII"},w:"m",m:"mono",z:"",p:null,st:"available"},
 {id:"possibly",s:"paint",t:{en:"Possibly",ru:"Possibly"},y:"2023",w:"q",m:"oil",oil:1,z:"120 × 80 cm",zi:"47.2 × 31.5 in",p:null,st:"sold"},
 {id:"thoughts",s:"paint",t:{en:"Thoughts",ru:"Мысли"},y:"2023",w:"q",m:"oil",z:"70 × 70 cm",p:495,st:"available",oil:1,zi:"27.6 × 27.6 in"},
 {id:"quieter",s:"paint",t:{en:"Quieter",ru:"Потише"},y:"2023",w:"q",m:"oil",z:"70 × 50 cm",p:385,st:"available",oil:1,zi:"27.6 × 19.7 in"},
 {id:"caviar",s:"paint",t:{en:"Still Life with Caviar",ru:"Натюрморт с икрой"},y:"2023",w:"q",m:"oil",z:"60 × 80 cm",p:null,st:"available",oil:1,zi:"23.6 × 31.5 in",ex:["mk_caviar"]},
];
