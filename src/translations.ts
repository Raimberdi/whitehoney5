import { HoneyProduct, CustomerReview, HeritageSlide, PresetPairing } from "./types";

export interface Language {
  code: "en" | "es" | "ru" | "ar" | "ur";
  name: string;
  nativeName: string;
  dir: "ltr" | "rtl";
}

export const SUPPORTED_LANGUAGES: Language[] = [
  { code: "en", name: "English", nativeName: "English", dir: "ltr" },
  { code: "es", name: "Spanish", nativeName: "Español", dir: "ltr" },
  { code: "ru", name: "Russian", nativeName: "Русский", dir: "ltr" },
  { code: "ar", name: "Arabic", nativeName: "العربية", dir: "rtl" },
  { code: "ur", name: "Urdu", nativeName: "اردو", dir: "rtl" }
];

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  en: {
    // Navigation & Common UI
    appName: "ALA-TOO",
    appSubtitle: "Alpine White Honey",
    navCollection: "The Collection",
    navStudio: "Artisanal Studio",
    navSommelier: "AI Honey Sommelier",
    navOrigins: "Pristine Origins",
    cartLabel: "Bag",
    cartEmptyTitle: "Your celestial bag of premium white honey is empty.",
    browseCollectionBtn: "Browse the collection",
    cartSubtotal: "Cart Subtotal:",
    promoLabel: "Introductory Promo Code?",
    promoPlaceholder: "e.g. KYRGYZGLACIER",
    applyBtn: "Apply",
    freightCost: "Glacier Carriage Freight:",
    grandTotal: "Grand Total:",
    checkoutBtn: "Secure Premium Checkout",
    checkoutSub: "Secure SSL Boutique Vault. 100% genuine glacier provenance certificate included.",
    consigneeLabel: "Consignee Full Name",
    emailLabel: "Contact Email Address",
    addressLabel: "Destination Street Address",
    cityLabel: "City",
    postalCodeLabel: "Postal / Zip Code",
    shippingTitle: "2. Nomadic Carriage Selection",
    standardShipping: "Standard Couriers",
    standardShippingDesc: "Insulated climate-stable freight. Delivered in 4 to 7 working days.",
    caravanShipping: "Nomadic Caravan Air Express",
    caravanShippingDesc: "Direct priority flight pack from Bishkek glaciers. Hand-inscribed courier seal.",
    paymentTitle: "3. Secure Vault Payment Verification",
    cardNameLabel: "Name Printed on Debit/Credit Card",
    cardNumberLabel: "Card Number (16 Digits)",
    cardExpiryLabel: "Expiry (MM/YY)",
    carriageInvoiceTitle: "Ala-Too Carriage Sum",
    carriageInvoiceSub: "Please review before executing transmission",
    engraveNotesLabel: "Engrave Gift Note / Nomadic Greetings",
    engraveNotesPlaceholder: "Type notes to be burned onto cedar crate wood or printed on raw flax parchment...",
    transmitBtn: "Transmit Sealed Secure Order",
    transmitSub: "Upon transmission, your honey registry records will sync with high-altitude packaging centers.",
    securedText: "Secure Checkout",
    cancelBtn: "Cancel",

    // Success Screen
    caravanDispatched: "CARAVAN DISPATCHED SUCCESSFULLY",
    harvestSecured: "Your Harvest is Secured",
    harvestSecuredDesc: "Your order has been recorded inside our Ala-Too ledgers. The jars will be wrapped in raw linen and stamped with a melted beeswax seal of glacier authenticity.",
    registryId: "Registry ID:",
    registryDate: "Registry Date:",
    consignee: "Consignee:",
    destination: "Destination:",
    carriageFreight: "Carriage Freight",
    reductionApplied: "15% Reduction Applied:",
    certifiedText: "Each jar in this registry has been handchecked and certified raw, unheated, organic Kyrgyz White Honey.",
    returnBoutiqueBtn: "Done & Return to Boutique",

    // Hero Section
    glacierNectarTag: "Raw, Cold-Extracted Glacier Nectar",
    rarePristineTitle: "The Rare, Pristine",
    pearlyWhiteHoney: "Pearly-White Honey",
    ofAlaToo: "of the Ala-Too Meadows",
    heroDesc: "Sculpted by freezing polar winds and watered by glacial moraine basins above 2,200 meters. Our single-source Sainfoin white honey has no rival in clean sweetness, matching raw silk in aesthetic whilst offering gourmet therapeutic enzyme structures directly to your palate.",
    exploreCollection: "Explore the Collection",
    altitudecall: "Elevation: 2,240m Above Sea level",
    curatedHarvestTitle: "Curated Celestial Harvest",
    curatedHarvestSubtitle: "Bespoke Pearly White Monoflorals",
    curatedHarvestDesc: "A rare selection of high-viscosity honeys from Naryn and Chüy valleys, cold-poured into exquisite custom jars to retain pristine active botanical enzymes.",

    // Interactive Sensory Matcher
    sensoryTitle: "Sensory Taste Matcher",
    sensoryDesc: "Adjust your ideal botanical palate vector. Our high-precision Kyrgyz sensory grid will immediately isolate the perfect crop matching your desired levels of sweetness, velvet-whipped creaminess, and floral aura.",
    sweetnessLabel: "Sweetness (Mild to Vibrant)",
    creaminessLabel: "Creaminess (Liquid to Frosted Butter)",
    aromaLabel: "Aroma Intensity (Subtle to Alpine Blossom)",
    suggestedProductTitle: "YOUR DESIGNATED HARVEST MATCH:",
    ratingText: "Rating",
    sensorySweetness: "Sweetness:",
    sensoryCream: "Cream:",
    sensoryAura: "Aura:",
    sensoryMoisture: "Moisture:",
    acquireHarvestIcon: "Acquire the Harvest",
    viewSensorySpecsBtn: "View Sensory Specs",

    // Custom Jar Studio
    studioHeroTitle: "Artisanal Jar Studio",
    studioHeroDesc: "Tailor your honey treasure. Select from historic hand-blown glass or high-alpine ceramic crocks, premium sainfoin variety harvests, handcrafted olivewood dippers, and scorched cedar boxes stamped with hot beeswax.",
    studioConfigTitle: "Bespoke Jar Configurator",
    studioConfigDesc: "Every customized crock represents a dedicated heritage artifact, packed under nitrogen sealing to shield key live enzymes.",
    vesselsTitle: "1. Select Vessel Size & Style",
    vessel500: "500g Glass Flask",
    vessel500Desc: "Traditional faceted glassware with gold leaf branding.",
    vessel1000: "1kg Nomadic Ceramic Crock",
    vessel1000Desc: "Artisanal high-altitude clay pot, superb thermal insulation.",
    honeyTypeTitle: "2. Designate Honey Varietal",
    accessoryTitle: "3. Choose Saffron/Dipping Accessories",
    accOlivewood: "Handworked Olivewood",
    accBrass: "Royal Brass Leaf Dipper",
    accBirch: "Nomadic Carved Birchwood",
    accNone: "No Accessory",
    packagingTitle: "4. Select Bespoke Outer Case",
    pkgFlax: "Linen Wrapping & Beeswax Stamp",
    pkgFlaxDesc: "Simple alpine rustic elegance. Secured with natural mountain jute.",
    pkgCedar: "Scorched Siberian Cedar Box",
    pkgCedarDesc: "Premium scent protection. Handburned Ala-Too seal.",
    pkgGold: "Minimalist Gold Stamp Tube",
    pkgGoldDesc: "Gilded geometric alignment. Stunning modern aesthetic.",
    nomadicCharmTitle: "5. Attach Nomadic Leather Charm (+ 18 AED)",
    nomadicCharmDesc: "A traditional Kyrgyz horsehair & hand-tooled leather emblem symbolizing alpine safe-passage.",
    giftTagTitle: "6. Custom Hot-Stamp Gift Inscription",
    giftTagPlaceholder: "e.g. To culinary heights, with Kyrgyz warmth...",
    bespokeSummaryTitle: "Bespoke Creation Invoice",
    vesselLine: "Vessel Selection:",
    honeyVarietyLine: "Honey Variety:",
    accessoryLine: "Dipping Accessory:",
    caseLine: "Outer Case:",
    leatherCharmLine: "Nomadic Leather Charm:",
    giftTagLine: "Hot-stamp Message:",
    includedText: "Included",
    notIncludedText: "Not Selected",
    addCustomBagBtn: "Add Bespoke Jar to Bag",

    // AI Sommelier
    sommelierHeroTitle: "Multimodal Gastronomy Co-Pilot",
    sommelierHeroDesc: "Bespoke Pairings with Gemini AI",
    sommelierHeroSub: "Our advanced algorithm acts as a digital alpine sommelier, designing meticulous pairing profiles with high-altitude honey.",
    enterCulinaryText: "Enter your culinary menu or match target:",
    enterCulinaryPlaceholder: "e.g. Aged Manchego cheese with figs, sourdough toast, or matcha latte...",
    presetsTitle: "Or Select Exquisite Pairing Presets:",
    chooseHoneyType: "Choose Honey Variety for Pairing:",
    chooseContext: "Occasion & Synergy Context:",
    contextGourmet: "Gourmet gastronomy with friends",
    contextMorning: "Morning meditative culinary ritual",
    contextDessert: "High-end pastry sweet decoration",
    contextTherapeutic: "Therapeutic wellness recovery",
    visualUploadLabel: "Include Visual Culinary Image (Drag & Drop or Click)",
    visualUploadSub: "PNG, JPG or WEBP. Upload a dining plate to inspire the pairing logic.",
    unleashBtn: "Unleash AI Sommelier Wisdom",
    analyzingPlat: "Analyzing platter elements on Tian Shan servers...",
    synthesizingSensory: "Synthesizing luxury sensory matrix with Gemini...",
    aiVerdictTitle: "Gemini AI Sommelier Verdict",
    curatedByAI: "CURATED BOTANICAL SYNERGY REPORT",
    aromaSynergy: "AROMA SYNERGY SYNOPSIS",
    sensoryHarmony: "SENSORY HARMONY LEVEL",
    culinaryInstructions: "CULINARY INSTRUCTIONS",
    "re-analyzeBtn": "Re-analyze Pairings",
    historyTitle: "Bespoke Pairing Archives",

    // Pristine Origins (Heritage Section)
    provenanceTitle: "provenance",
    originsSubtitle: "A Centenary Cryosphere Legacy",
    originsDesc: "Our colonies operate in high altitude valleys far from industrial pollutants, producing solid white honey powered by high quality mountain waters.",
    botanyAccentsTitle: "THE WILD BOTANY ACCENTS",
    sainfoinNectarWindow: "The Sainfoin Nectar Window",
    sainfoinNectarDesc1: "Sainfoin (Onobrychis) is a wild alpine legume with striking pink blossoms that flourishes during a brief three-week period in late June.",
    sainfoinNectarDesc2: "Because high-altitude soil is volcanic and glacial, the plants are forced to concentrate natural sugars and amino-essential nutrients. Honeybees working at these heights must match rigorous oxygen variables, infusing the crop with superb bioactive vitality.",
    acquireHarvestBtn: "Acquire the Harvest",

    // Image Alt texts
    elevationLabel: "Elevation: 2,240m Above Sea Level",
    valleyLabel: "At-Bashy Valley, Kyrgyzstan",

    // Footer
    boutiqueEst: "Est. 1928, Kyrgyz Alpine Range",
    footerCopyright: "© 2026 Ala-Too Alpine Honey. Hand-crafted using ancient Kyrgyz beekeeping guides.",
    footerShopCol: "Shop Collection",
    footerJarMaker: "Bespoke Jar Maker",
    footerGastronomy: "Gastronomy Sommelier",
    footerHeritage: "Heritage Origins",
    propertySweetness: "Sweetness",
    propertyCream: "Cream",
    propertyAura: "Aura",
    propertyMoisture: "Moisture",
    addBagBtn: "Add to Bag",

    // Dialog product
    botanicalProperties: "Botanical Properties",
    altitudeLabel: "Altitude:"
  },
  es: {
    // Navigation & Common UI
    appName: "ALA-TOO",
    appSubtitle: "Miel Blanca de los Alpes",
    navCollection: "La Colección",
    navStudio: "Estudio Artesanal",
    navSommelier: "Sumiller de Miel de IA",
    navOrigins: "Orígenes Prístinos",
    cartLabel: "Bolsa",
    cartEmptyTitle: "Tu bolsa celestial de miel blanca premium está vacía.",
    browseCollectionBtn: "Explorar la colección",
    cartSubtotal: "Subtotal de la Bolsa:",
    promoLabel: "¿Código de Promoción?",
    promoPlaceholder: "ej. KYRGYZGLACIER",
    applyBtn: "Aplicar",
    freightCost: "Envío por Caravana Glaciar:",
    grandTotal: "Gran Total:",
    checkoutBtn: "Pago Seguro Premium",
    checkoutSub: "Bóveda Boutique SSL Segura. Certificado de procedencia de glaciar 100% genuino incluido.",
    consigneeLabel: "Nombre Completo del Destinatario",
    emailLabel: "Correo Electrónico de Contacto",
    addressLabel: "Dirección de Envío",
    cityLabel: "Ciudad",
    postalCodeLabel: "Código Postal",
    shippingTitle: "2. Selección de Transporte Nómada",
    standardShipping: "Mensajeros Estándar",
    standardShippingDesc: "Envío protegido térmicamente y estable. Entrega de 4 a 7 días hábiles.",
    caravanShipping: "Caravana Nómada Expresa Aérea",
    caravanShippingDesc: "Paquete prioritario directo de los glaciares de Biskek con sello del mensajero inscrito a mano.",
    paymentTitle: "3. Verificación de Pago Seguro de la Bóveda",
    cardNameLabel: "Nombre Impreso en la Tarjeta",
    cardNumberLabel: "Número de Tarjeta (16 Dígitos)",
    cardExpiryLabel: "Vencimiento (MM/AA)",
    carriageInvoiceTitle: "Resumen de Transporte Ala-Too",
    carriageInvoiceSub: "Por favor revise antes de proceder con la transmisión",
    engraveNotesLabel: "Añadir Nota de Regalo en Madera",
    engraveNotesPlaceholder: "Escriba un mensaje para pirograbar en la caja de cedro o imprimir en pergamino de lino...",
    transmitBtn: "Transmitir Orden Sellada Segura",
    transmitSub: "Al transmitir, los registros de su miel se sincronizarán inmediatamente con los centros de empaque alpino.",
    securedText: "Pago Seguro",
    cancelBtn: "Cancelar",

    // Success Screen
    caravanDispatched: "CARAVANA DESPACHADA CON ÉXITO",
    harvestSecured: "Tu Cosecha Está Asegurada",
    harvestSecuredDesc: "Tu pedido ha sido registrado en nuestros libros de contabilidad de Ala-Too. Los frascos serán envueltos en lino crudo y sellados con cera de abejas de autenticidad glaciar.",
    registryId: "ID de Registro:",
    registryDate: "Fecha de Registro:",
    consignee: "Destinatario:",
    destination: "Destino:",
    carriageFreight: "Transporte de Caravana",
    reductionApplied: "Descuento del 15% Aplicado:",
    certifiedText: "Cada frasco en este registro ha sido revisado a mano y certificado como Miel Blanca de Kirguistán pura, cruda y orgánica.",
    returnBoutiqueBtn: "Listo, Volver a la Boutique",

    // Hero Section
    glacierNectarTag: "Néctar de Glaciar Puro extraído en Frío",
    rarePristineTitle: "La Rara y Prístina",
    pearlyWhiteHoney: "Miel Blanco Perla",
    ofAlaToo: "de los Prados de Ala-Too",
    heroDesc: "Moldeada por los vientos polares bajo cero y regada por lagos de morrenas glaciales a más de 2,200 metros de altura. Nuestra miel de flor de esparceta (Sainfoin) no tiene rival en dulzura limpia, asemejándose a la seda cruda en aspecto y ofreciendo enzimas terapéuticas directas a su paladar.",
    exploreCollection: "Explorar la Colección",
    altitudecall: "Elevación: 2,240m sobre el nivel del mar",
    curatedHarvestTitle: "Cosecha Celestial Curada",
    curatedHarvestSubtitle: "Monoflorales Blancas Exclusivas",
    curatedHarvestDesc: "Una selección excepcional de mieles de alta viscosidad provenientes de los valles de Naryn y Chüy, vertidas en frío en elegantes frascos a medida para resguardar las enzimas botánicas activas.",

    // Interactive Sensory Matcher
    sensoryTitle: "Selector Sensorial de Sabor",
    sensoryDesc: "Ajuste su perfil de paladar ideal. Nuestra cuadrícula sensorial de Kirguistán de alta precisión aislará de inmediato la miel perfecta que se alinee con sus niveles preferidos de dulzura, cremosidad y aroma floral.",
    sweetnessLabel: "Dulzura (Suave a Vibrante)",
    creaminessLabel: "Cremosidad (Líquida a Mantequilla Batida)",
    aromaLabel: "Intensidad de Aroma (Sutil a Florecimiento Alpino)",
    suggestedProductTitle: "SU COSECHA IDEAL DETECTADA:",
    ratingText: "Calificación",
    sensorySweetness: "Dulzura:",
    sensoryCream: "Cremosidad:",
    sensoryAura: "Aura:",
    sensoryMoisture: "Humedad:",
    acquireHarvestIcon: "Adquirir esta Cosecha",
    viewSensorySpecsBtn: "Ver Detalles Sensoriales",

    // Custom Jar Studio
    studioHeroTitle: "Estudio de Frascos Artesanales",
    studioHeroDesc: "Personalice su tesoro de miel. Elija entre frascos soplados a mano, vasijas de cerámica de alta montaña, variedades premium de esparceta, cucharas de madera de olivo y estuches de cedro pirograbado.",
    studioConfigTitle: "Configurador de Frascos a Medida",
    studioConfigDesc: "Cada vasija representa un artefacto patrimonial único, sellado bajo atmósfera de nitrógeno para resguardar las importantes enzimas biológicas.",
    vesselsTitle: "1. Seleccione Estilo y Capacidad",
    vessel500: "Frasco de Vidrio de 500g",
    vessel500Desc: "Vidrio facetado tradicional con detalles en pan de oro.",
    vessel1000: "Vasija de Cerámica Nómada de 1kg",
    vessel1000Desc: "Vasija de arcilla hecha a mano, excelente aislamiento térmico.",
    honeyTypeTitle: "2. Seleccione la Variedad de Miel",
    accessoryTitle: "3. Cucharas y Accesorios",
    accOlivewood: "Madera de Olivo Tallada a Mano",
    accBrass: "Cuchara de Latón con Forma de Hoja",
    accBirch: "Madera de Abedul Tallada del Sayan",
    accNone: "Sin Accesorio",
    packagingTitle: "4. Seleccione el Estuche Exterior",
    pkgFlax: "Envoltura de Lino con Sello de Cera",
    pkgFlaxDesc: "Elegancia rústica de montaña. Asegurado con cuerda de yute.",
    pkgCedar: "Caja de Madera de Cedro Quemado",
    pkgCedarDesc: "Máxima protección de aromas de cedro siberiano. Sello Ala-Too grabado al fuego.",
    pkgGold: "Tubo Minimalista con Estampado de Oro",
    pkgGoldDesc: "Estructura geométrica dorada con un diseño moderno asombroso.",
    nomadicCharmTitle: "5. Incluir Amuleto Nómada de Cuero (+ 18 AED)",
    nomadicCharmDesc: "Un emblema tradicional kirguís de cuero repujado y crin de caballo que simboliza protección en los pasos alpinos.",
    giftTagTitle: "6. Mensaje Grabado en el Regalo",
    giftTagPlaceholder: "ej. Para las más altas exigencias culinarias...",
    bespokeSummaryTitle: "Presupuesto de Creación a Medida",
    vesselLine: "Vasija Seleccionada:",
    honeyVarietyLine: "Variedad de Miel:",
    accessoryLine: "Accesorio:",
    caseLine: "Estuche Exterior:",
    leatherCharmLine: "Amuleto de Cuero:",
    giftTagLine: "Inscripción Caligrafiada:",
    includedText: "Incluido",
    notIncludedText: "No Seleccionado",
    addCustomBagBtn: "Añadir Frasco a Medida a la Bolsa",

    // AI Sommelier
    sommelierHeroTitle: "Copiloto Gastronómico Multimodal",
    sommelierHeroDesc: "Maridajes Diseñados por Gemini AI",
    sommelierHeroSub: "Nuestro algoritmo avanzado actúa como un sommelier alpino, diseñando perfiles de maridaje de lujo con miel para postres y gastronomía fina.",
    enterCulinaryText: "Ingrese su plato o ingrediente culinario:",
    enterCulinaryPlaceholder: "ej. Queso Manchego curado, tostadas de masa madre, higos, té matcha...",
    presetsTitle: "O Seleccione Maridajes Predefinidos Exquisitos:",
    chooseHoneyType: "Seleccione la Miel para el Maridaje:",
    chooseContext: "Contexto del Evento:",
    contextGourmet: "Gastronomía gourmet con amigos",
    contextMorning: "Ritual matutino de meditación culinaria",
    contextDessert: "Decoración dulce en repostería fina",
    contextTherapeutic: "Recuperación y bienestar holístico",
    visualUploadLabel: "Incluir Imagen del Plato (Arrastrar y Soltar o Clic)",
    visualUploadSub: "Formatos PNG, JPG o WEBP para inspirar la lógica del sumiller de IA.",
    unleashBtn: "Obtener Consejo del Sumiller de IA",
    analyzingPlat: "Analizando elementos culinarios en los servidores de Ala-Too...",
    synthesizingSensory: "Sintetizando la armonía sensorial con Gemini...",
    aiVerdictTitle: "Veredicto del Sumiller Gemini AI",
    curatedByAI: "INFORME DE SINERGIA BOTÁNICA RECOMENDADA",
    aromaSynergy: "SINOPSIS DE SINERGIA DE AROMAS",
    sensoryHarmony: "NIVEL DE ARMONÍA SENSORIAL",
    culinaryInstructions: "CONSEJOS DE SERVICIO CULINARIO",
    "re-analyzeBtn": "Reanalizar Maridaje",
    historyTitle: "Archivo Histórico de Maridajes",

    // Pristine Origins
    provenanceTitle: "procedencia",
    originsSubtitle: "El Legado del Centenario de la Criósfera",
    originsDesc: "Nuestras colmenas operan en valles remotos de altas altitudes lejos de toda industria, produciendo miel blanca cristalizada regada con aguas de deshielo puro.",
    botanyAccentsTitle: "DETALLES BOTÁNICOS EXCLUSIVOS",
    sainfoinNectarWindow: "La Ventana Floral de la Esparceta",
    sainfoinNectarDesc1: "La esparceta silvestre (Onobrychis) es una leguminosa alpina de magníficas flores rosadas que florece solo durante tres semanas a finales de junio.",
    sainfoinNectarDesc2: "Bajo suelos volcánicos y de morrena, las plantas concentran azúcares de alta pureza y nutrientes esenciales. Las abejas que vuelan a estas alturas se enfrentan a un aire sutil, infundiendo la miel de propiedades bioactivas formidables.",
    acquireHarvestBtn: "Comprar la Cosecha",

    // Image Alt texts
    elevationLabel: "Elevación: 2,240m sobre el nivel del mar",
    valleyLabel: "Valle At-Bashy, Kirguistán",

    // Footer
    boutiqueEst: "Est. 1928, Cordillera Alpina de Kirguistán",
    footerCopyright: "© 2026 Miel Ala-Too. Hecha a mano siguiendo antiguos tratados de apicultura kirguís.",
    footerShopCol: "Cosechas",
    footerJarMaker: "Crear Frasco",
    footerGastronomy: "Maridaje IA",
    footerHeritage: "Nuestra Historia",
    propertySweetness: "Dulzura",
    propertyCream: "Cremosidad",
    propertyAura: "Aura",
    propertyMoisture: "Humedad",
    addBagBtn: "Añadir",

    botanicalProperties: "Propiedades Botánicas",
    altitudeLabel: "Altitud:"
  },
  ru: {
    // Navigation & Common UI
    appName: "ALA-TOO",
    appSubtitle: "Альпийский Белый Мед",
    navCollection: "Коллекция",
    navStudio: "Ателье франков",
    navSommelier: "ИИ-Сомелье Меда",
    navOrigins: "Чистые Истоки",
    cartLabel: "Корзина",
    cartEmptyTitle: "Ваша небесная корзина премиального белого меда пуста.",
    browseCollectionBtn: "Посмотреть коллекцию",
    cartSubtotal: "Сумма по корзине:",
    promoLabel: "Промокод для первого заказа?",
    promoPlaceholder: "например, KYRGYZGLACIER",
    applyBtn: "Применить",
    freightCost: "Транспортировка караваном:",
    grandTotal: "Итог к оплате:",
    checkoutBtn: "Безопасное оформление заказа",
    checkoutSub: "Защищенный бутик-шлюз SSL. В комплект входит 100% подлинный сертификат ледникового происхождения.",
    consigneeLabel: "Полное имя получателя",
    emailLabel: "Контактный эл. адрес",
    addressLabel: "Адрес доставки",
    cityLabel: "Город",
    postalCodeLabel: "Почтовый индекс",
    shippingTitle: "2. Выбор способа доставки",
    standardShipping: "Стандартная курьерская служба",
    standardShippingDesc: "Фрахт с поддержанием стабильной температуры. Доставка от 4 до 7 рабочих дней.",
    caravanShipping: "Nomadic Caravan Air Express",
    caravanShippingDesc: "Прямой приоритетный рейс с ледников Бишкека. Сургучная печать верификации пишется вручную.",
    paymentTitle: "3. Проверка безопасной оплаты через зашифрованный сейф",
    cardNameLabel: "Имя владельца на банковской карте",
    cardNumberLabel: "Номер карты (16 цифр)",
    cardExpiryLabel: "Срок действия (ММ/ГГ)",
    carriageInvoiceTitle: "Смета транспортировки Ala-Too",
    carriageInvoiceSub: "Пожалуйста, проверьте все данные перед отправкой",
    engraveNotesLabel: "Гравировка пожелания на кедровой коробке",
    engraveNotesPlaceholder: "Напишите текст для выжигания на кедровом ящике или для печати на льняном пергаменте...",
    transmitBtn: "Подтвердить закрытый заказ",
    transmitSub: "После отправки данные синхронизируются с упаковочными бутиками высокогорья Тянь-Шаня.",
    securedText: "Безопасный платеж",
    cancelBtn: "Отменить",

    // Success Screen
    caravanDispatched: "КАРАВАН С МЕДОМ УСПЕШНО ОТПРАВЛЕН",
    harvestSecured: "Ваш Медовый Урожай Закреплен",
    harvestSecuredDesc: "Ваш заказ записан в главные амбарные книги Ala-Too. Флаконы будут обернуты в натуральный лен и скреплены сургучной печатью из растопленного высокоорного воска.",
    registryId: "Реестровый ID:",
    registryDate: "Дата записи:",
    consignee: "Получатель:",
    destination: "Куда:",
    carriageFreight: "Транспортировка караваном",
    reductionApplied: "Применена скидка 15%:",
    certifiedText: "Каждая баночка из этого реестра была лично проверена вручную и сертифицирована как органический белый мед высшего сорта Киргизии.",
    returnBoutiqueBtn: "Готово, Вернуться в бутик",

    // Hero Section
    glacierNectarTag: "Сырой ледниковый нектар холодного отжима",
    rarePristineTitle: "Редкий и нетронутый",
    pearlyWhiteHoney: "Жемчужно-белый мед",
    ofAlaToo: "с хребта Ала-Тоо",
    heroDesc: "Сформирован ледяными полярными ветрами на высоте более 2200 метров. Наш монофлорный белый мед из эспарцета (Sainfoin) превосходит любые сорта в чистой шелковистой сладости и дарит суперконцентрированные лечебные ферменты дикой флоры.",
    exploreCollection: "Исследовать коллекцию",
    altitudecall: "Высота: 2 240 м над уровнем моря",
    curatedHarvestTitle: "Лимитированный ледниковый сбор",
    curatedHarvestSubtitle: "Эксклюзивные жемчужно-белые сорта",
    curatedHarvestDesc: "Уникальный отбор густого меда из долин Нарына и Чуй, разлитый холодным методом в авторские емкости для бережного сохранения природной пользы.",

    // Interactive Sensory Matcher
    sensoryTitle: "Интерактивный подбор вкуса",
    sensoryDesc: "Настройте ваш идеальный вкусовой вектор. Высокоточная сенсорная сетка Киргизии подберет тот сбор урожая, который точно соответствует вашим пожеланиям сладости, кремовости и аромата.",
    sweetnessLabel: "Сладость (Мягкая — Яркая)",
    creaminessLabel: "Текстура (Жидкая — Мусс / Масло)",
    aromaLabel: "Интенсивность аромата (Тонкий — Горное цветение)",
    suggestedProductTitle: "ВАШИМ ИДЕАЛЬНЫМ ВЫБОРОМ СТАЛ:",
    ratingText: "Рейтинг",
    sensorySweetness: "Сладость:",
    sensoryCream: "Кремовость:",
    sensoryAura: "Аромат:",
    sensoryMoisture: "Влажность:",
    acquireHarvestIcon: "Получить этот сбор",
    viewSensorySpecsBtn: "Паспорт сенсорных свойств",

    // Custom Jar Studio
    studioHeroTitle: "Ателье авторских баночек",
    studioHeroDesc: "Создайте свой шедевр. Выберите исторический выдувной флакон или сосуд из горной глины, сорт эспарцетового меда, ложку из оливы и коробку из кедра с сургучным оттиском.",
    studioConfigTitle: "Конфигуратор индивидуального заказа",
    studioConfigDesc: "Каждая банка — это памятная вещь ручной работы, запечатанная азотом для защиты биологически активных молекул и ферментов.",
    vesselsTitle: "1. Выберите объем и форму",
    vessel500: "Стеклянный флакон 500г",
    vessel500Desc: "Традиционная граненая баночка с декором золотой поталью.",
    vessel1000: "Керамический горшок кочевников 1кг",
    vessel1000Desc: "Глина высокогорного обжига. Невероятный уровень защиты от тепла.",
    honeyTypeTitle: "2. Выберите сорт белого меда",
    accessoryTitle: "3. Ложки из редких пород дерева",
    accOlivewood: "Ручная резьба, оливковое дерево",
    accBrass: "Королевская латунная ложка-листок",
    accBirch: "Вытесанная кочевниками береза",
    accNone: "Без аксессуара",
    packagingTitle: "4. Выберите подарочный кейс",
    pkgFlax: "Льняной холст и сургуч",
    pkgFlaxDesc: "Деревенская лаконичность гор. Перевязано джутовым канатом.",
    pkgCedar: "Обожженный ящик из сибирского кедра",
    pkgCedarDesc: "Превосходная защита ароматов. Герб Ala-Too выжжен огнем.",
    pkgGold: "Минималистичный золотой тубус",
    pkgGoldDesc: "Позолоченное геометрическое покрытие. Роскошный авангард.",
    nomadicCharmTitle: "5. Кожаный талисман кочевников (+ 18 AED)",
    nomadicCharmDesc: "Традиционный киргизский конский волос и тисненая кожа. Символ безопасной дороги и благополучия.",
    giftTagTitle: "6. Текст каллиграфии на ярлыке",
    giftTagPlaceholder: "например, К кулинарным вершинам, с теплом гор...",
    bespokeSummaryTitle: "Смета персонализированного заказа",
    vesselLine: "Выбранный сосуд:",
    honeyVarietyLine: "Сорт белого меда:",
    accessoryLine: "Ложечка:",
    caseLine: "Защитный кейс:",
    leatherCharmLine: "Кожаный оберег:",
    giftTagLine: "Надпись на ярлыке:",
    includedText: "Включено",
    notIncludedText: "Не выбрано",
    addCustomBagBtn: "Добавить авторский горшок в корзину",

    // AI Sommelier
    sommelierHeroTitle: "Кулинарный ИИ-проводник",
    sommelierHeroDesc: "Идеальные сочетания с Gemini AI",
    sommelierHeroSub: "Продвинутый алгоритм работает как профессиональный цифровой сомелье, создавая сенсорные пары меда с блюдами высокой гастрономии.",
    enterCulinaryText: "Введите блюдо, сыр или десерт для подбора пары:",
    enterCulinaryPlaceholder: "например, Выдержанный сыр Манчего с инжиром, хлеб на закваске, матча-латте...",
    presetsTitle: "Или выберите классические союзы вкуса:",
    chooseHoneyType: "Сорт меда для гастрономической пары:",
    chooseContext: "Тематика и повод застолья:",
    contextGourmet: "Гурме-вечер с близкими друзьями",
    contextMorning: "Утренний медитативный ритуал",
    contextDessert: "Подача к изысканной выпечке и десертам",
    contextTherapeutic: "Оздоровительное восстановление",
    visualUploadLabel: "Фотография блюда (Перетащите или добавьте кликом)",
    visualUploadSub: "Форматы PNG, JPG или WEBP. Позволяет модели распознать сервировку и цветовую гамму.",
    unleashBtn: "Получить рекомендации ИИ-Сомелье",
    analyzingPlat: "Анализируем гастрономическую тарелку...",
    synthesizingSensory: "Синтезируем вкусовую карту с Gemini ИИ...",
    aiVerdictTitle: "Вердикт ИИ-Сомелье Gemini",
    curatedByAI: "ЭКСПЕРТНЫЙ СЕНСОРНЫЙ ОТЧЕТ ИИ",
    aromaSynergy: "СИНЕРГИЯ ИМПУЛЬСОВ АРОМАТА",
    sensoryHarmony: "ПРОЦЕНТ ВКУСОВОЙ ГАРМОНИИ",
    culinaryInstructions: "СОВЕТЫ ПО СЕРВИРОВКЕ И ПОДАЧЕ",
    "re-analyzeBtn": "Подобрать сочетание заново",
    historyTitle: "Архив кулинарных вердиктов",

    // Pristine Origins
    provenanceTitle: "происхождение",
    originsSubtitle: "Столетние традиции Криосферы",
    originsDesc: "Наши пасеки расположены в нетронутых ледниками высокогорных долинах, куда не долетают промышленные выбросы, рядом с чистейшими источниками.",
    botanyAccentsTitle: "БОТАНИЧЕСКИЕ АКЦЕНТЫ СБОРА",
    sainfoinNectarWindow: "Короткое цветение эспарцета",
    sainfoinNectarDesc1: "Эспарцет песчаный (Onobrychis) — дикий медонос Тянь-Шаня со ярко-розовыми соцветиями, цветущий всего три недели в июне.",
    sainfoinNectarDesc2: "В условиях вулканической почвы и ледниковой воды, растение концентрирует рекордное количество натуральных сахаров. Пчелы трудятся на пределе сил в разреженном воздухе, насыщая мед высочайшей ферментативной активностью.",
    acquireHarvestBtn: "Заказать этот урожай",

    // Image Alt texts
    elevationLabel: "Высота: 2 240 м над уровнем моря",
    valleyLabel: "Ат-Башинская долина, Киргизия",

    // Footer
    boutiqueEst: "Основано в 1928 г., Пасеки Тянь-Шаня",
    footerCopyright: "© 2026 Белый мед Ala-Too. Собран вручную по архивным книгам киргизского пчеловодства.",
    footerShopCol: "Каталог",
    footerJarMaker: "Ателье банок",
    footerGastronomy: "ИИ-Сомелье",
    footerHeritage: "История и Истоки",
    propertySweetness: "Сладость",
    propertyCream: "Текстура",
    propertyAura: "Аромат",
    propertyMoisture: "Влажность",
    addBagBtn: "В корзину",

    botanicalProperties: "Ботанические свойства",
    altitudeLabel: "Высота сбора:"
  },
  ar: {
    // Navigation & Common UI
    appName: "آلا-تو",
    appSubtitle: "عسل جبال ألا-تو الأبيض النادر",
    navCollection: "المجموعة",
    navStudio: "الاستوديو الحرفي",
    navSommelier: "ساقي العسل الذكي",
    navOrigins: "الأصول النقية",
    cartLabel: "الحقيبة",
    cartEmptyTitle: "حقيبتكِ السماوية من العسل الأبيض الفاخر فارغة حالياً.",
    browseCollectionBtn: "تصفح المجموعة الفريدة",
    cartSubtotal: "المجموع الفرعي:",
    promoLabel: "هل لديك رمز ترويجي؟",
    promoPlaceholder: "مثال: KYRGYZGLACIER",
    applyBtn: "تطبيق",
    freightCost: "شحن القوافل الجبلية:",
    grandTotal: "المجموع الإجمالي المعزز:",
    checkoutBtn: "إتمام الشراء الآمن",
    checkoutSub: "خزنة حماية SSL مشفرة. تتضمن شهادة أصالة المصدر الجليدي بنسبة ١٠٠٪.",
    consigneeLabel: "الاسم الكامل للمستلم",
    emailLabel: "البريد الإلكتروني للتواصل",
    addressLabel: "عنوان الشارع بالكامل",
    cityLabel: "المدينة",
    postalCodeLabel: "الرمز البريدي",
    shippingTitle: "٢. اختيار وسيلة النقل البدوية التاريخية",
    standardShipping: "شركات النقل القياسية",
    standardShippingDesc: "شحن محمي حرارياً ومستقر ضد التقلبات الجوية. التوصيل في غضون ٤ إلى ٧ أيام عمل.",
    caravanShipping: "قافلة الهواء السريعة الفاخرة",
    caravanShippingDesc: "شحن جوي سريع ومباشر من جبال بيشكيك مغلف بخط يدوي وشمع العسل الملكي الأصيل.",
    paymentTitle: "٣. توثيق عملية الدفع الفوري الآمن",
    cardNameLabel: "الاسم المكتوب على بطاقة الدفع",
    cardNumberLabel: "رقم بطاقة الائتمان (١٦ خانة)",
    cardExpiryLabel: "تاريخ الانتهاء (شهر/سنة)",
    carriageInvoiceTitle: "تفاصيل شحن آلا-تو",
    carriageInvoiceSub: "يرجى مراجعة التفاصيل قبل إرسال الطلب التاريخي",
    engraveNotesLabel: "نقش رسالة إهداء على الخشب",
    engraveNotesPlaceholder: "اكتب الكلمات التي تريد حفرها على خشب الصنوبر السيبيري أو طباعتها على كتان ناعم...",
    transmitBtn: "إرسال الطلب المختوم بسلام",
    transmitSub: "بمجرد الإرسال، سيتم مزامنة حساب طلب العسل فورياً مع مراكز التعبئة اليدوية الجبلية الشاهقة.",
    securedText: "دفع آمن بالكامل",
    cancelBtn: "إلغاء الطلب",

    // Success Screen
    caravanDispatched: "تم إرسال القافلة بنجاح تام",
    harvestSecured: "تم تأمين حصادك الفاخر",
    harvestSecuredDesc: "تم تدوين طلبك في سجلات آلا-تو التاريخية. سيتم تغليف الجرار بكتان نقي غير معالج وختمها بشمع العسل الذائب للأصالة الموثقة.",
    registryId: "رقم تعريف السجل المعزز:",
    registryDate: "تاريخ التسجيل السنوي:",
    consignee: "اسم المستلم المعتمد:",
    destination: "وجهة القافلة:",
    carriageFreight: "شحن القوافل الجبلية",
    reductionApplied: "تم تطبيق خصم المبتدئين بقيمة ١٥٪:",
    certifiedText: "تم فحص كل جرة في هذا السجل التاريخي يدوياً وتأكيد خلوها من الحرارة وسيرتها العضوية النقية عسل كيرغيزستان الأبيض الشهير.",
    returnBoutiqueBtn: "تم، العودة إلى المعرض",

    // Hero Section
    glacierNectarTag: "رحيق نهر الجليد الأصيل المصفى بارداً",
    rarePristineTitle: "العسل الأسطوري النادر",
    pearlyWhiteHoney: "العسل الأبيض اللؤلؤي",
    ofAlaToo: "من مروج آلا-تو الشاهقة",
    heroDesc: "صاغته الرياح القطبية المتجمدة في قمم تزيد عن ٢,٢٠٠ متر. عسل السنفوان (Sainfoin) الأبيض أحادي المصدر لا منافس له في الحلاوة العميقة، محاكياً الحرير الطبيعي ملمساً ومقدماً الإنزيمات الحية النشطة بنكهة رائعة.",
    exploreCollection: "تصفح المجموعة",
    altitudecall: "الارتفاع: ٢,٢٤٠ متراً فوق سطح البحر",
    curatedHarvestTitle: "الحصاد الملكي المختار بعناية",
    curatedHarvestSubtitle: "أحادي الزهرة أبيض لؤلؤي شاهق",
    curatedHarvestDesc: "مجموعة منتقاة بدقة من العسل عالي النقاء واللزوجة من أودية نارين وتشوي، معبأة على البارد في أوعية مصممة خصيصاً لحماية الإنزيمات الحية.",

    // Interactive Sensory Matcher
    sensoryTitle: "مخطط التوافق الحسي الفوري",
    sensoryDesc: "اضبط مؤشرات الذوق المفضلة لديك. ستعمل شبكة كيرغيزستان الحسية فائقة الدقة فوراً على تحديد المحصول المطابق لمستويات الحلاوة، القوام الكريمي الغني، والأريج الزهري الذي ترغب به.",
    sweetnessLabel: "درجة الحلاوة (هادئة إلى دافئة ملفتة)",
    creaminessLabel: "القوام (سائل مخملي إلى زبدة متماسكة)",
    aromaLabel: "قوة الأريج العطري (خفيف إلى زهور الجبال الشاهقة)",
    suggestedProductTitle: "المطابقة المثالية لحصادك الخاص:",
    ratingText: "التقييم العام",
    sensorySweetness: "درجة الحلاوة:",
    sensoryCream: "القوام الكريمي:",
    sensoryAura: "أريج الزهور:",
    sensoryMoisture: "نسبة الرطوبة:",
    acquireHarvestIcon: "الحصول على هذا المنتج",
    viewSensorySpecsBtn: "شهادة التحليل الحسي",

    // Custom Jar Studio
    studioHeroTitle: "استوديو الجرار الحرفية المخصصة",
    studioHeroDesc: "قم بصياغة كنزك العسلي الخاص. اختر بين الأواني الزجاجية العتيقة المنفوخة باليد أو الفخار الطيني الجبلي، عسل السنفوان الملكي، الملاعق الخشبية الفاخرة، والعلب المصنعة يدوياً.",
    studioConfigTitle: "جهاز تخصيص الجرار النادرة",
    studioConfigDesc: "تمثل كل جرة قطعة فنية تراثية مغلفة تحت سحب غاز النيتروجين لحمايتها التامة والحفاظ على المكونات الطبيعية الحيوية.",
    vesselsTitle: "١. حدد نمط وحجم الوعاء الفاخر",
    vessel500: "جرة زجاجية فاخرة ٥٠٠ غرام",
    vessel500Desc: "زجاج تقليدي أنيق بنقوش ذهبية برّاقة.",
    vessel1000: "وعاء فخار كيرغيز بدوي ١ كيلوغرام",
    vessel1000Desc: "مصنوع يدوياً من الطين الجبلي الفاخر لحماية حرارية مثالية.",
    honeyTypeTitle: "٢. نوع العسل الأبيض أحادي المنشأ",
    accessoryTitle: "٣. ملاعق الغرف الفخمة المرافقة",
    accOlivewood: "خشب الزيتون الإيطالي المشغول يدوياً",
    accBrass: "ملعقة نحاسية ملكية على شكل ورقة شجر",
    accBirch: "خشب الساج المنحوت بنمط بدوي تراثي",
    accNone: "بدون ملعقة مرافقة",
    packagingTitle: "٤. غلاف الصندوق الخارجي الفاخر",
    pkgFlax: "لف من الكتان الطبيعي وختم شمع مmelted",
    pkgFlaxDesc: "بساطة جبلية ريفية ساحرة مدعمة بحبال الجوت.",
    pkgCedar: "صندوق خشب الأرز السيبيري الفخم",
    pkgCedarDesc: "حماية مطلقة للرائحة. يحمل الختم التاريخي لآلا-تو محفوراً بالنار.",
    pkgGold: "أنبوب الأبّهة الذهي الدائري لمودرن",
    pkgGoldDesc: "تصميم هندسي ذهبي يعبر عن الفخامة العصرية الصريحة.",
    nomadicCharmTitle: "٥. إرفاق تعويذة الجلد البدوية التقليدية (+ ١٨ د.إ)",
    nomadicCharmDesc: "شعار بدوي كيرغيزي تقليدي مصنوع من شعر الحصان الطبيعي والجلد المدبوغ يدوياً كرمز للأمان والبركة في السفر والترحال.",
    giftTagTitle: "٦. كتابة نص الإهداء بختم ساخن",
    giftTagPlaceholder: "مثال: إلى عشاق الطهي الرفيع، مع دفء جبال كيرغيزستان الشاهقة...",
    bespokeSummaryTitle: "سجل مواصفات فاتورة التخصيص",
    vesselLine: "نوع الوعاء المختار:",
    honeyVarietyLine: "فئة العسل المخصصة:",
    accessoryLine: "الملعقة المرافقة:",
    caseLine: "نوع غلاف الصندوق:",
    leatherCharmLine: "تعويذة الجلد البدوي:",
    giftTagLine: "نص الإهداء المحفور بالحرارة:",
    includedText: "مدرج بالطلب",
    notIncludedText: "غير محدد",
    addCustomBagBtn: "إضافة الجرة المخصصة إلى حقيبتك",

    // AI Sommelier
    sommelierHeroTitle: "موجّه الطهي والضيافة الذكي",
    sommelierHeroDesc: "تصميم المزاوجات الذكية بإنترنت الأشخاص والذكاء الاصطناعي",
    sommelierHeroSub: "يعمل خوارزمنا المتقدم بمثابة ساقي عسل رقمي ذكي، يبتكر توليفات نكهة العسل الأبيض مع الأطباق المطبخية والمخبوزات والجبن الفاخر.",
    enterCulinaryText: "أدخل طبقك أو صنف الجبن المفضل لتوليفه الحسي:",
    enterCulinaryPlaceholder: "مثال: جبن مانشيجو معتق مع التين، خبز العجين الحامض، لاتيه الماتشا الياباني الأنيق...",
    presetsTitle: "أو اختر توليفات النكهة الكلاسيكية الفاخرة المعتمدة:",
    chooseHoneyType: "صنف العسل المختار للمزاوجة النبيلة:",
    chooseContext: "سياق وضيافة المناسبة التراثية:",
    contextGourmet: "أمسية تذوق راقية مع الأصدقاء المقربين",
    contextMorning: "طقس تأملي صباحي صحي رفيع",
    contextDessert: "مرافقة المخبوزات والحلويات الراقية",
    contextTherapeutic: "الاسترداد الصحي والراحة العضوية",
    visualUploadLabel: "إرفاق صورة طبق الطعام التوضيحية (اسحبيها هنا أو اضغطي)",
    visualUploadSub: "يدعم صيغ PNG أو JPG أو WEBP لتأكيد تناغم المظهر اللوني الكلي للنكهة.",
    unleashBtn: "استرداد إشراقة الساقي الذكي فوراً",
    analyzingPlat: "جاري تحليل عناصر طبق طعامك الرفيع عبر خوادمنا السحابية ببيشكيك...",
    synthesizingSensory: "جاري تكوين خريطة النكهات والتناغم الحسي بموديل Gemini الذكي...",
    aiVerdictTitle: "تقرير توافق الساقي الذكي من Gemini",
    curatedByAI: "تقرير التناغم والتوافق العشبي والغذائي المعتمد",
    aromaSynergy: "ملخص مصفوفة النكهات ورابط الرائحة",
    sensoryHarmony: "درجة المطابقة والانسجام العطري الكلية",
    culinaryInstructions: "نصائح وإرشادات التقديم الفاخر لضيوفك",
    "re-analyzeBtn": "ابتكار توافق جديد بالكامل",
    historyTitle: "سجلات وتقارير المزاوجة المحفوظة",

    // Pristine Origins
    provenanceTitle: "أصالة المنشأ الموثقة",
    originsSubtitle: "إرث مئوي نقي عبر السحاب والجليد",
    originsDesc: "تقع مزارع نحلنا ومستعمراتها في قلب أودية معزولة تماماً في قمم جبال الألب الخالية من عوادم الصناعة، متغذية على مياه جبلية ذائبة بالغة الصفاء الرقراق.",
    botanyAccentsTitle: "أسرار وعجائب الطبيعة النباتية الخاصة",
    sainfoinNectarWindow: "فترة ازدهار زهرة السنفوان الساحرة",
    sainfoinNectarDesc1: "نبات السنفوان (Onobrychis) هو من البقوليات البرية التي تحمل أزهاراً وردية زاهية مدهشة، حيث يزدهر فقط لمدة ثلاثة أسابيع في نهاية شهر يونيو الجبلي القصير.",
    sainfoinNectarDesc2: "تحت طبقات التربة البركانية والجليدية الشاهقة، تضطر النباتات لتركيز السكريات الفائقة والمغذيات والأملاح الحية، ويقوم النحل بالطيران في أجواء تتميز بضغط منخفض، مما يشحن العسل بنشاط إنزيمي لا مثيل له.",
    acquireHarvestBtn: "اقتناء هذا الحصاد التاريخي الحصري",

    // Image Alt texts
    elevationLabel: "الارتفاع الشاهق: ٢,٢٤٠ متراً على سطح البحر",
    valleyLabel: "أودية آت-باشي الخلابة، كيرغيزستان",

    // Footer
    boutiqueEst: "تأسست عام ١٩٢٨، سلسلة جبال كيرغيزستان الشاهقة",
    footerCopyright: "جميع الحقوق محفوظة © ٢٠٢٦ عسل آلا-تو الأبيض. معبأ يدوياً بموجب تقاليد النحالين القديمة.",
    footerShopCol: "قائمة الحصاد",
    footerJarMaker: "ابتكار جرتك",
    footerGastronomy: "دليل المزاوجات الذكي",
    footerHeritage: "الأصول والتراث",
    propertySweetness: "درجة الحلاوة",
    propertyCream: "القوام الكريمي",
    propertyAura: "أريج الزهور",
    propertyMoisture: "نسبة الرطوبة",
    addBagBtn: "إضافة للحقيبة",

    botanicalProperties: "الخصائص والتحاليل النباتية",
    altitudeLabel: "ارتفاع منبع الحصاد:"
  },
  ur: {
    // Navigation & Common UI
    appName: "آلا-تو",
    appSubtitle: "الپائن سفید شہد کا شاہکار",
    navCollection: "شہد کلیکشن",
    navStudio: "حرفتی اسٹوڈیو",
    navSommelier: "آئی اے شہد کا سومیلیئر",
    navOrigins: "خالص ترین شراکت",
    cartLabel: "کیسہ",
    cartEmptyTitle: "اعلیٰ معیار کے سفید شہد کا آپ کا روحانی تھیلا ابھی خالی ہے۔",
    browseCollectionBtn: "کلیکشن دریافت کریں",
    cartSubtotal: "تھیلے کا جزوی میزان:",
    promoLabel: "کیا کوئی رعایتی کوپن کوڈ ہے؟",
    promoPlaceholder: "مثال کے طور پر: KYRGYZGLACIER",
    applyBtn: "لاگو کریں",
    freightCost: "گلیشیئر کارواں فریٹ:",
    grandTotal: "کل میزان مع برکت:",
    checkoutBtn: "محفوظ اور پریمیم چیک آؤٹ",
    checkoutSub: "محفوظ SSL بوٹیک والٹ۔ ۱۰۰٪ مستند گلیشیئر کا سرٹیفکیٹ شامل ہے۔",
    consigneeLabel: "وصول کنندہ کا پورا نام",
    emailLabel: "رابطہ ای میل پتہ",
    addressLabel: "مستقل پتہ اور گلی کا نام",
    cityLabel: "شہر کا نام",
    postalCodeLabel: "پوسٹل اور زپ کوڈ",
    shippingTitle: "۲. روایتی بدو کارواں کی منتقلی کا انتخاب",
    standardShipping: "معیاری کوریئر سروسز",
    standardShippingDesc: "موسمی تغیرات سے محفوظ اور مستحکم فریٹ۔ ترسیل ۴ سے ۷ کاروباری دنوں میں۔",
    caravanShipping: "روایتی فضائی ایکسپریس کارواں",
    caravanShippingDesc: "بشکیک کے گلیشیئرز سے براہ راست ترجیحی پرواز۔ کوریئر پر ہاتھ کی تحریر اور خالص موم کی مہر۔",
    paymentTitle: "۳. محفوظ والٹ ادائیگی کی تصدیق",
    cardNameLabel: "کارڈ پر چسپاں نامِ نامی",
    cardNumberLabel: "کارڈ کا نمبر (۱۶ ہندسے)",
    cardExpiryLabel: "میعاد ختم ہونے کی تاریخ (مہینہ/سال)",
    carriageInvoiceTitle: "آلا-تو کارواں وصول پتی",
    carriageInvoiceSub: "منتقلی سے قبل تمام تفصیلات کا برائے مہربانی جائزہ لیں",
    engraveNotesLabel: "لکڑی کے خانوں پر پیغام کی کندہ کاری",
    engraveNotesPlaceholder: "صنوبر کی لکڑی کے فریم پر کندہ کرنے یا ریشمی کاغذ پر لکھنے کے لیے پیغام درج کریں...",
    transmitBtn: "مہر بند محفوظ آرڈر کی منتقلی",
    transmitSub: "منتقلی کے بعد، آپ کے آرڈر کا ریکارڈ اونچائی پر واقع ہمارے پیکیجنگ مراکز کے ساتھ فوری مطابقت پذیر ہو جائے گا۔",
    securedText: "مکمل محفوظ ادائیگی",
    cancelBtn: "آرڈر منسوخ کریں",

    // Success Screen
    caravanDispatched: "کارواں کامیاب روانہ کر دیا گیا ہے",
    harvestSecured: "آپ کی مبارک فصل محفوظ ہو گئی ہے",
    harvestSecuredDesc: "آپ کے آرڈر کا اندراج ہمارے آلا-تو کے بڑے کھاتوں میں کر لیا گیا ہے۔ شہد کے مرتبانوں کو کچے کتان میں لپیٹا جائے گا اور گلیشیئر صداقت کی موم کی مہر لگائی جائے گی۔",
    registryId: "رجسٹری کا شناختی نمبر:",
    registryDate: "رجسٹری کے اندراج کی تاریخ:",
    consignee: "وصول کنندہ:",
    destination: "منزلِ کارواں:",
    carriageFreight: "بدو کارواں کا کرایہ",
    reductionApplied: "۱۵٪ رعایتی پیشکش لاگو کر دی گئی ہے:",
    certifiedText: "اس رجسٹری کے ہر مرتبان کی جانچ ہمارے نحالین نے کی ہے اور یہ ۱۰۰٪ مستند، بغیر گرم کیا ہوا، قدرتی کرغیز سفید شہد قرار پایا ہے۔",
    returnBoutiqueBtn: "مکمل، بوٹیک پر واپس جائیں",

    // Hero Section
    glacierNectarTag: "خام، گلیشیئر سے سرد نکالا ہوا نایاب امرت",
    rarePristineTitle: "نایاب اور خالص ترین",
    pearlyWhiteHoney: "موتی جیسا سفید شہد",
    ofAlaToo: "بلند پہاڑ آلا-تو کے میدانوں کا",
    heroDesc: "منجمد قطبی ہواؤں اور ۲,۲۰۰ میٹر سے بلند گلیشیئر کے قدرتی اور شفاف پانی کا عکس۔ سینفوئن (Sainfoin) کا یہ سنگل سورس سفید شہد اپنی مٹھاس میں بے مثال ہے، جو ریشم کی طرح نرم احساس فراہم کرتا ہے اور قدرتی علاج کے لیے مفید انزائمز پیش کرتا ہے۔",
    exploreCollection: "شہد کلیکشن کا معائنہ",
    altitudecall: "بلندی: سطح سمندر سے ۲,۲۴۰ میٹر بلند",
    curatedHarvestTitle: "منتخب کردہ آسمانی فصل",
    curatedHarvestSubtitle: "نایاب ترین موتیوں جیسا سفید مونو فلورل",
    curatedHarvestDesc: "نارین اور چوئی کی وادیوں کے انتہائی خالص اور گاڑھے شہد کا انتخاب، جسے مخصوص مرتبانوں میں سرد طریقے سے بھرا جاتا ہے تاکہ زندگی بخش انزائمز محفوظ رہیں۔",

    // Interactive Sensory Matcher
    sensoryTitle: "ذوق شناسی اور مٹھاس میچر",
    sensoryDesc: "اپنے ذائقے کے لحاظ سے پیمانے منتخب کریں۔ ہماری انتہائی درست کرغیز سینسری گرڈ فوری طور پر اس فصل کی نشاندہی کرے گی جو مٹھاس، ملائی جیسے گاڑھے پن اور خوشبو میں آپ کے معیار کے عین مطابق ہو۔",
    sweetnessLabel: "مٹھاس کا درجہ (ہلکا سے دلکش و گہرا)",
    creaminessLabel: "گاڑھا پن (مائع ریشم سے مکھن جیسا گاڑھا)",
    aromaLabel: "خوشبو کی شدت (نازک خوشبو سے الپائن پھولوں کے پھٹاؤ تک)",
    suggestedProductTitle: "آپ کی پسند کے مطابق بہترین فصل کا ملاپ:",
    ratingText: "عام درجہ بندی",
    sensorySweetness: "مٹھاس کا درجہ:",
    sensoryCream: "گاڑھا ملائی کا قوام:",
    sensoryAura: "پھولوں کی خوشبو:",
    sensoryMoisture: "نمی کا تناسب:",
    acquireHarvestIcon: "اس فصل کو حاصل کریں",
    viewSensorySpecsBtn: "ذوق شناسی اور پاسپورٹ رپورٹ",

    // Custom Jar Studio
    studioHeroTitle: "دست ساز مرتبانوں کا اسٹوڈیو",
    studioHeroDesc: "اپنے شہد کے خزانے کو اپنی مرضی سے ترتیب دیں۔ روایتی دست ساز شیشے یا پہاڑی مٹی کے برتنوں، اعلیٰ معیار کی سفید شہد کی اقسام، قیمتی زیتون کی چوبی چمچیاں اور کندہ شدہ صنوبر کے ڈبوں کا انتخاب کریں۔",
    studioConfigTitle: "مرتبان کی ترتیب نو کا نظام",
    studioConfigDesc: "ہر حسبِ ضرورت تیار شدہ مرتبان ایک ورثہ اور روایت کی عکاسی کرتا ہے، جس میں نائٹروجن گیس کی مدعیت سے انزائمز کی مکمل حفاظت یقینی بنائی جاتی ہے۔",
    vesselsTitle: "۱. سب سے پہلے برتن اور سائز کا انتخاب کریں",
    vessel500: "۵۰۰ گرام کا شیشے کا نفیس مرتبان",
    vessel500Desc: "سنہری پتی کے نقش و نگار والا روایتی فیسٹڈ گلاس۔",
    vessel1000: "۱ کلوگرام کا مٹی کا روایتی بدو گھڑا",
    vessel1000Desc: "پہاڑی مٹی سے ہاتھ کا تیار کردہ برتن جو بیرونی درجہ حرارت سے بہترین موصل ہے۔",
    honeyTypeTitle: "۲. سفید شہد کی نایاب ترین قسم کا انتخاب",
    accessoryTitle: "۳. شہد نکالنے والی نفیس لکڑی کی چمچی",
    accOlivewood: "اطالوی زیتون کی لکڑی سے تراشی گئی چمچی",
    accBrass: "شاہی پیتل کی بنی پتے جیسی نفیس چمچی",
    accBirch: "روایتی بدو طرز پر تراشی چنار کی لکڑی",
    accNone: "کسی چمچی کے بغیر",
    packagingTitle: "۴. باہر کا خوبصورت پریمیم حفاظتی کیس",
    pkgFlax: "لِنن کے کپڑے کی لپیٹ اور خالص موم کی مہر",
    pkgFlaxDesc: "روایتی الپائن خوبصورتی جو قدرتی جوٹ کی رسیوں سے محفوظ کی جاتی ہے۔",
    pkgCedar: "صنوبر کی لکڑی کا کندہ شدہ بکس",
    pkgCedarDesc: "خوشبو کی بہترین حفاظت۔ لکڑی پر آلا-تو کا نشان آگ سے کندہ کیا گیا ہے۔",
    pkgGold: "سنہری پٹی والا جدید دیدہ زیب باکس",
    pkgGoldDesc: "نئی اور شاندار سنہری جیومیٹرک شکل جو نفاست پسندوں کے لیے بنائی گئی ہے۔",
    nomadicCharmTitle: "۵. روایتی بدو لیدر چام لگوائیں (+ 18 AED)",
    nomadicCharmDesc: "کرغزستان کے روایتی گھوڑے کے بالوں اور چمڑے سے ہاتھ سے تیار کردہ نشانی جو سفر میں امان اور سلامتی کی علامت سمجھی جاتی ہے۔",
    giftTagTitle: "۶. گفٹ ٹیگ پر ہاتھ سے لکھی تحریر اور پیغام",
    giftTagPlaceholder: "مثال کے طور پر: بلند پایہ ذائقوں کے قدردانوں کے لیے، کرغیز پہاڑیوں کی حدت کے ساتھ...",
    bespokeSummaryTitle: "مخصوص آرڈر کا بل مع تفصیل",
    vesselLine: "پانی اور برتن کا انداز:",
    honeyVarietyLine: "نامزد سفید شہد کی قسم:",
    accessoryLine: "چمچی کی قسم:",
    caseLine: "باہر کا حفاظتی بکس:",
    leatherCharmLine: "روایتی لیدر چام:",
    giftTagLine: "کندہ شدہ پیغام:",
    includedText: "شاملِ آرڈر ہے",
    notIncludedText: "منتخب نہیں کیا گیا",
    addCustomBagBtn: "اس حسبِ ضرورت مرتبان کو اپنے تھیلے میں شامل کریں",

    // AI Sommelier
    sommelierHeroTitle: "اسمارٹ ہاسپیٹلیٹی اور ذائقہ گائیڈ",
    sommelierHeroDesc: "جمنائی آرٹیفیشل انٹیلیجنس کے ساتھ ملاپ",
    sommelierHeroSub: "ہمارا مائیکرو سسٹم گلیشیئر کے سفید شہد اور دنیا کے دیگر نفیس پکوانوں اور پنیروں کے درمیان پریمیم ملاپ کو ڈیزائن کرتا ہے۔",
    enterCulinaryText: "اپنے پسندیدہ آرٹ اور ڈش کا نام درج کریں:",
    enterCulinaryPlaceholder: "مثال کے طور پر: زیتون کی روٹی، اعلیٰ کوالٹی کا پنیر، تازی پستہ پیسٹری یا جاپانی گرین ٹی...",
    presetsTitle: "یا ذائقوں کے کلاسک منتخب ملاپ آزمائیں:",
    chooseHoneyType: "ملاپ کے لیے سفید شہد کی قسم منتخب کریں:",
    chooseContext: "ضیافت اور ماحول کی نوعیت:",
    contextGourmet: "خاص مہمانوں اور دوستوں کے ساتھ عمدہ ڈنر",
    contextMorning: "صبح کا پرسکون عبادت نما اور صحت بخش ناشتہ",
    contextDessert: "اعلیٰ درجے کی پیسٹری اور میٹھے پکوان کے لیے",
    contextTherapeutic: "صحت یابی اور جسمانی توانائی کی بحالی",
    visualUploadLabel: "اپنے پکوان یا پلیٹ کی تصویر اپ لوڈ کریں (یہاں کھینچیں یا کلک کریں)",
    visualUploadSub: "سومیلیئر کی عقل کو گہرا اور درست کرنے کے لیے تصویر (PNG، JPG یا WEBP) فراہم کریں۔",
    unleashBtn: "آئی اے سومیلیئر سے صلاح لیں",
    analyzingPlat: "بشکیک کے سحابی سرورز پر آپ کی پلیٹ کے عناصر کا سائنسی تجزیہ جاری ہے...",
    synthesizingSensory: "جمنائی کے جدید ترین ماڈل کے ذریعے ذائقوں کے تناسب کی ترتیب جاری ہے...",
    aiVerdictTitle: "جمنائی آئی اے سومیلیئر کا مبارک فیصلہ",
    curatedByAI: "قدرتی خوشبو، ذائقہ اور جڑوں کی ملاپ کی سائنسی رپورٹ",
    aromaSynergy: "خوشبو کی موافقت کا خلاصہ",
    sensoryHarmony: "ذائقوں کی مطابقت کا فیصد",
    culinaryInstructions: "پکوان کی سجاوٹ اور مہمانوں کو پیش کرنے کی ہدایات",
    "re-analyzeBtn": "نیا ملاپ اور ذائقہ تجویز کروائیں",
    historyTitle: "سابقہ فیصلوں اور رپورٹس کا محفوظ ریکارڈ",

    // Pristine Origins
    provenanceTitle: "مستند قدرتی منبع کی تصدیق",
    originsSubtitle: "ایک صدی پر مشتمل خالص گلیشیئر کی وراثت",
    originsDesc: "ہماری نوآبادیاں اونچی وادیوں میں آباد ہیں جو صنعتی آلودگی سے دور ہیں، جہاں سفید شہد کو گلیشیئر کے پگھلے ہوئے پانیوں سے حیات بخش تروتازگی ملتی ہے۔",
    botanyAccentsTitle: "قدرتی نباتات کی انوکھی اور شاندار خوبیاں",
    sainfoinNectarWindow: "سینفوئن پھولوں کی رونق کی عارضی کھڑکی",
    sainfoinNectarDesc1: "سینفوئن (Onobrychis) بلند وادیوں کی ایک جنگلی پھلی دار جڑی بوٹی ہے جس پر خوبصورت گلابی پھول کھلتے ہیں، یہ پھول جون کے آخر میں صرف تین ہفتے کے لیے اپنی بہار دکھاتے ہیں۔",
    sainfoinNectarDesc2: "آتش فشانی اور گلیشیئر مٹی کی بدولت یہ پودا مٹھاس، انزائمز اور قیمتی معدنیات کو انتہائی گہرا کر دیتا ہے۔ یہاں اڑنے والی شہد کی مکھیاں کم ہوا کے دباؤ میں کام کرتی ہیں جس سے شہد میں قدرت کے کرشمے شامل ہوتے ہیں۔",
    acquireHarvestBtn: "اس نایاب فصل کو فوراً حاصل کریں",

    // Image Alt texts
    elevationLabel: "بلندی: سطح سمندر سے ۲,۲۴۰ میٹر بلند",
    valleyLabel: "آت باشی کی حسین وادی، کرغیزستان",

    // Footer
    boutiqueEst: "قائم شدہ ۱۹۲۸، کرغزستان کے الپائن پہاڑی سلسلے",
    footerCopyright: "سارے حقوق محفوظ ہیں © ۲۰۲۶ آلا-تو سفید شہد۔ قدیم طریقوں پر دست کاری سے تیار کردہ۔",
    footerShopCol: "شہد کلیکشن",
    footerJarMaker: "مرتبان بنائیں",
    footerGastronomy: "آئی اے سومیلیئر",
    footerHeritage: "تاریخ اور منبع",
    propertySweetness: "مٹھاس کا درجہ",
    propertyCream: "گاڑھا پن",
    propertyAura: "پھولوں کی خوشبو",
    propertyMoisture: "نمی کا تناسب",
    addBagBtn: "تھیلے میں ڈالیں",

    botanicalProperties: "پودے کے خاص فوائد اور طبی تجزیہ",
    altitudeLabel: "فصل کی ریکارڈ بلندی:"
  }
};

export const LOCALIZED_PRODUCTS: Record<string, Record<string, Partial<HoneyProduct>>> = {
  en: {
    "royal-at-bashy": {
      name: "Royal At-Bashy White Honey",
      subName: "Ultra-Creamy Single-Source Sainfoin",
      description: "The pristine crown of our boutique. Sourced exclusively from Sainfoin (Onobrychis) meadows in the At-Bashy ranges of Naryn, this honey is slow-crystallized to a magnificent solid, milky-white buttery consistency that melts on your tongue.",
      details: "This single-nectar artisanal honey undergoes zero thermal processing, capturing the live botanical enzymes and delicate pollens. It is characterized by an elegant ivory velvet tone and an immaculate clean finish that leaves no harsh acid burn.",
      originLocation: "At-Bashy Valley, Southern Tian Shan, Kyrgyzstan",
      botanySource: "Onobrychis arenaria (Wild Sainfoin)"
    },
    "glacier-blossom": {
      name: "Glacier Blossom White Honey",
      subName: "High Alpine Wildflower Cream",
      description: "Gathered from extreme high-altitude mountain flower meadows as the glaciological snowlines recede. A delicate, pearlescent-white cream honey accented by elements of Siberian Peashrub, wild Edelweiss, and mountain clover.",
      details: "Extremely rare and seasonal due to the short high-altitude summer. The bees work in chilly, unpolluted winds producing high-viscosity nectar rich in antioxidants and rare trace elements from alpine shale soils.",
      originLocation: "Suusamyr Valley Glaciers, Chüy Province, Kyrgyzstan",
      botanySource: "Siberian Peashrub, Wild Edelweiss, Wild Clover"
    },
    "pine-wildflower": {
      name: "Tian Shan Amber-Veined Whipped Honey",
      subName: "Alpine Silver Fir & Wildflower Nectar",
      description: "A gorgeous, slightly warmer cream honey with subtle golden-amber veins, blending the velvety mountain Sainfoin base with rich forest honeydew and blue chicory. Whipped to a spreadable frosting-like texture.",
      details: "Harvested where the dense pine forests of Ala-Too meet the wildflower meadows. Contains a higher content of natural mineral salts, organic acids, and forest honeydew, rendering a complex sweet-savory woody structure.",
      originLocation: "Arslanbob Walnut Forests, Kyrgyzstan",
      botanySource: "Siberian Fir Honeydew, Wild Chicory, Sainfoin, Dandelion"
    },
    "yemeni-sidr": {
      name: "Yemeni Royal Sidr Honey",
      subName: "Legendary Medicinal Hadramout Elixir",
      description: "The absolute pinnacle of ancient liquid gold. Gathered exclusively from the blossoms of sacred Sidr (Lote) trees in the desolate ravines of Wadi Do'an, Hadramaut. Renowned worldwide for its legendary therapeutic potency, dense amber richness, and deep herbal-toffee taste.",
      details: "This legendary honey is hand-harvested twice a year using ancient nomadic apicultural methods that date back three thousand years. Unfiltered, uncooked, and completely raw, Sidr honey has exceptionally high therapeutic activity, wild enzyme counts, and powerful properties.",
      originLocation: "Wadi Do'an, Hadramaut Valley, Yemen",
      botanySource: "Ziziphus spina-christi (Sacred Sidr Tree)"
    }
  },
  es: {
    "royal-at-bashy": {
      name: "Miel Real Blanca At-Bashy",
      subName: "Sainfoin de Origen Único Ultra Cremosa",
      description: "La joya prístina de nuestra boutique. Cosechada exclusivamente en los prados de esparceta (Onobrychis) de la cordillera At-Bashy en Naryn. Cristalizada lentamente hasta lograr una textura de mantequilla blanca que se funde en el paladar.",
      details: "Miel artesanal de un néctar único con cero tratamientos térmicos, preservando intactas las enzimas vivas y los delicados pólenes. De color marfil con un acabado limpio y libre de acidez molesta.",
      originLocation: "Valle At-Bashy, Tian Shan del Sur, Kirguistán",
      botanySource: "Onobrychis arenaria (Esparceta Silvestre)"
    },
    "glacier-blossom": {
      name: "Miel Flor de Glaciar Blanca",
      subName: "Crema de Flores de Alta Montaña",
      description: "Cosechada a altitudes extremas cuando las líneas de nieve glacial se retiran. Una miel cremosa de brillo perlado enriquecida con néctar de peashrub siberiano, edelweiss silvestre y trébol de montaña.",
      details: "Fruto de cortos y rigurosos veranos alpinos. Las abejas cosechan néctar denso y viscoso cargado de antioxidantes bajo fuertes vientos helados libres de contaminantes industriales.",
      originLocation: "Glaciares del Valle Suusamyr, Provincia de Chüy, Kirguistán",
      botanySource: "Peashrub Siberiano, Edelweiss, Trébol Silvestre"
    },
    "pine-wildflower": {
      name: "Miel Batida Con Veteado Ámbar Tian Shan",
      subName: "Néctar de Abeto Silvestre y Flores Silvestres",
      description: "Una miel cremosa de tono más cálido enriquecida con sutiles vetas ámbar-doradas que combina esparceta de montaña con rico rocío de abeto silvestre y achicoria azul. Textura de frosting súper untable.",
      details: "Recolectada en las fronteras entre los densos bosques de coníferas de Ala-Too y los prados floridos. Alta concentración de sales minerales y ácidos orgánicos que otorgan ricas notas amaderadas agridulces.",
      originLocation: "Bosques de Nogal de Arslanbob, Kirguistán",
      botanySource: "Rocío de Miel de Abeto Siberiano, Achicoria, Esparceta, Diente de León"
    },
    "yemeni-sidr": {
      name: "Miel Real de Sidr de Yemen",
      subName: "Elixir Medicinal Legendario de Hadramaut",
      description: "La cumbre absoluta del oro líquido antiguo. Cosechada exclusivamente de las flores del sagrado árbol de Sidr (Lote) en los inhóspitos barrancos de Wadi Do'an, Hadramaut. Famosa mundialmente por su potencia medicinal legendaria y su profundidad herbal.",
      details: "Esta miel legendaria se cosecha a mano dos veces al año mediante métodos tradicionales ancestrales que datan de hace tres mil años. Sin filtrar, cruda y sin cocinar, tiene una actividad terapéutica excepcionalmente alta.",
      originLocation: "Wadi Do'an, Región de Hadramaut, Yemen",
      botanySource: "Ziziphus spina-christi (Árbol Sagrado de Sidr)"
    }
  },
  ru: {
    "royal-at-bashy": {
      name: "Мед Королевский Ат-Баши Белый",
      subName: "Ультракремовый Одноцветковый Эспарцет",
      description: "Вершина нашей коллекции. Добывается строго на лугах эспарцета горного хребта Ат-Баши (Нарынская область). Проходит процесс естественного деликатного сбивания до консистенции белого кулинарного крема.",
      details: "Продукт высочайшего качества, не нагревавшийся выше температуры внутри улья (33-35°C), что гарантирует сохранение всех аминокислот. Отличается благородным кремовым цветом и гладким, обволакивающим вкусом.",
      originLocation: "Ат-Башинская долина, Южный Тянь-Шань, Киргизия",
      botanySource: "Onobrychis arenaria (Эспарцет Дикий)"
    },
    "glacier-blossom": {
      name: "Мед Ледниковое Цветение Белый",
      subName: "Высокогорное Разнотравье Мусс",
      description: "Продукт экстремального высокогорья, собираемый при отступлении снежной линии. Перламутрово-белый нежный мед с легким ароматом сибирской акации, дикого эдельвейса и клевера.",
      details: "Медонос растет на сланцевых каменистых почвах, подпитываемых чистейшей талой водой грейдеров. Обладает высочайшим содержанием флавоноидов и ценных микроэлементов.",
      originLocation: "Ледники Суусамырской долины, Чуйская область, Киргизия",
      botanySource: "Сибирская Акация, Горный Эдельвейс, Клевер"
    },
    "pine-wildflower": {
      name: "Мед Амурский Янтарный Тянь-Шань",
      subName: "Взбитый Мед с Живицей и Лесными Цветами",
      description: "Прекрасный муссовый мед теплого оттенка с янтарными прожилками лесной пади, дикого василька и горной эспарцетовой основы. Консистенция нежного пирожного мусса.",
      details: "Ульи стоят на стыке кедровых массивов гор Тескей-Ала-Тоо и диких лугов. Богат фитонцидами, смолами хвойных растений и органическими кислотами, укрепляющими иммунитет.",
      originLocation: "Ореховые леса Арсланбоба и склоны Ала-Тоо, Киргизия",
      botanySource: "Пихтовая Падь, Голубой Цикорий, Дикий Эспарцет, Одуванчик"
    },
    "yemeni-sidr": {
      name: "Мед Йеменский Королевский Сидр",
      subName: "Легендарный целебный эликсир Хадрамаута",
      description: "Абсолютная вершина древнего жидкого золота. Собирается исключительно с цветков священного дерева Сидр в пустынных ущельях Вади-Доан, Хадрамаут. Славится во всем мире своей легендарной терапевтической силой.",
      details: "Этот легендарный мед собирается вручную два раза в год традиционными методами пчеловодства, зародившимися три тысячи лет назад. Нефильтрованный, не подвергавшийся температурной обработке мед Сидр обладает сильнейшими биоактивными свойствами.",
      originLocation: "Вади-Доан, долина Хадрамаут, Йемен",
      botanySource: "Ziziphus spina-christi (Священное дерево Сидр)"
    }
  },
  ar: {
    "royal-at-bashy": {
      name: "عسل ألا-تات-باشي الملكي الأبيض",
      subName: "عسل السنفوان أحادي الزهرة فائق الكثافة",
      description: "درّة تاج زجاجاتنا الحرفية. يستخلص حصرياً من مروج نبات السنفوان (Onobrychis) في أودية نارين الوعرة، حيث تتم بلورته ببطء شديد لينتج قواماً زبدياً فاخراً يذوب بمجرد لمسه للسان.",
      details: "هذا العسل الحرفي أحادي الرحيق لا يتعرض لأي حرارة على الإطلاق ليحافظ على الإنزيمات النشطة وحبوب اللقاح النادرة. يتميز بلون عاجي مخملي ناصع ونهاية نظيفة جداً وخالية من أي حادّية.",
      originLocation: "وادي آت-باشي، سلاسل تيان شان الجنوبية، كيرغيزستان",
      botanySource: "Onobrychis arenaria (زهرة السنفوان البرية)"
    },
    "glacier-blossom": {
      name: "عسل زهرة الجليد الأبيض النادر",
      subName: "كريمة أزهار جبل الألب الشاهقة",
      description: "يجنى من مروج الأزهار البرية على الارتفاعات الفائقة بمجرد تراجع الجليد. عسل كريمي لؤلؤي معزز بنكتار شجر أكاسيا سيبيريا، وزهور الإديلويس الأسطورية، ونبات البرسيم الجبلي.",
      details: "نادر وموسمي للغاية نظراً لقصَر الصيف الجبلي. يعمل النحل في درجات حرارة منخفضة جداً ورياح نظيفة خالية من ملوثات المصانع، لينتج عسلاً عالي اللزوجة غنياً بمضادات الأكسدة.",
      originLocation: "أنهار وادي سوسامير الجليدية، مقاطعة تشوي، كيرغيزستان",
      botanySource: "نكتار أكاسيا سيبيريا، زهرة الإيديلويس البرية، البرسيم الجبلي"
    },
    "pine-wildflower": {
      name: "عسل التيان شان المخفوق ذو العروق الكهرمانية",
      subName: "مزيج نكتار صنوبر سيبيريا والأزهار البرية",
      description: "عسل كريمي دافئ مائل للصفرة غني بعروق ذهبية دافئة، يجمع بين قاعدة السنفوان الجبلية وصنوبر سيبيريا والكزبرة الزرقاء البرية، مخفوق تماماً ليصبح قابلاً للدهن كطلي الكيك ذي العبق العطري.",
      details: "يجمع حيث تلتقي غابات الصنوبر الكثيفة في آلا-تو بمروج الزهور البرية. يحتوي على نسب هائلة من الأملاح المعدنية الطبيعية والمكونات العضوية الخشبية المذهلة.",
      originLocation: "غابات أرسلانبوب الشهيرة ومنحدرات آلا-تو، كيرغيزستان",
      botanySource: "ندوة صنوبر سيبيريا، الكزبرة الزرقاء، السنفوان، الهندباء"
    },
    "yemeni-sidr": {
      name: "عسل السدر اليمني الملكي الفاخر",
      subName: "إكسير حضرموت العلاجي الأسطوري النقي",
      description: "القمّة المطلقة للذهب السائل العتيق. يُجنى حصرياً من زهور شجر السدر (العلب) المقدس في الشعاب والأودية السحيقة لوادي دوعن الشهير بحضرموت. يحظى بتقدير عالمي لقوته العلاجية الفائقة ومذاق التوفي العشبي العميق.",
      details: "يُستخلص هذا العسل الأسطوري يدوياً مرتين في السنة باستخدام طرق تربية النحل التقليدية التي تعود لآلاف السنين في شبه الجزيرة العربية. عسل سدر غير مصفى وغير مسخن وخام بالكامل، يحتوي على تركيزات هائلة من مضادات الأكسدة والإنزيمات الحية اللانهائية.",
      originLocation: "وادي دوعن، منطقة حضرموت، اليمن",
      botanySource: "Ziziphus spina-christi (شجرة السدر / العلب المقدسة)"
    }
  },
  ur: {
    "royal-at-bashy": {
      name: "رائل آت-باشی سفید شہد",
      subName: "نہایت ملائم پریمیم سنگل سورس سینفوئن",
      description: "ہمارے بوٹیک کا سب سے خوبصورت شاہکار۔ نایرن کی وادی آت باشی میں واقع سینفوئن (Onobrychis) کے میدانوں سے حاصل کردہ، یہ شہد موتی کی طرح سفید اور مکھن کے قوام کا حامل ہے جو زبان پر پگھل جاتا ہے۔",
      details: "یک زردہ قدرتی شہد بغیر کسی حرارت کے پیکیج کیا جاتا ہے تاکہ انزائمز اور پولن اپنی اصل شکل میں محفوظ رہیں۔ اس کا ململ جیسا ذائقہ اپنی نفاست کے لیے دنیا بھر میں مانا جاتا ہے۔",
      originLocation: "آت باشی کی وادی، جنوبی تیا ن شان، کرغزستان",
      botanySource: "Onobrychis arenaria (جنگلی سینفوئن پھول)"
    },
    "glacier-blossom": {
      name: "گلیشیئر بلوسم سفید شہد",
      subName: "الپائن جنگلی جڑی بوٹیوں کی ملائی",
      description: "برفانی چوٹیوں کے انتہائی بلندی پر واقع میدانوں سے کشید کیا گیا پریمیم شہد۔ یہ سائبیرین اکیبیا، جنگلی ایڈلوائس اور پہاڑی تپتیا کے امرت سے سراہا گیا گہرا سفید شہد ہے۔",
      details: "شدید سردیوں کے بعد مختصر گرمی کے سیزن کی وجہ سے یہ انتہائی نایاب فضل ہے۔ مکھیاں آلودگی سے پاک گلیشیئر کی ہواؤں میں کام کرتی ہیں جس سے ایک گہرا اور صحت بخش شہد حاصل ہوتا ہے۔",
      originLocation: "سوسامیر گلیشیئرز کی وادی، صوبہ چوئی، کرغزستان",
      botanySource: "سائبیرین اکیبیا، ایڈلوائس پھول، الپائن جنگلی کلوور"
    },
    "pine-wildflower": {
      name: "تیا ن شان عنبر شیڈوز والا جھاگ شہد",
      subName: "الپائن صنوبر اور جنگلی پھولوں کا امرت",
      description: "عنبر کی سنہری لکیروں سے سجا ہوا ہلکا گرم سفید شہد جو الپائن صنوبر کی گوند اور جنگلی کاسنی کے امرت پر مشتمل ہے۔ یہ مکھن کی طرح پھیلانے والی وافر لذیذ ساخت کا حامل ہے۔",
      details: "آلا-تو کے گھنے صنوبر کے جنگلات اور پھولوں کے میدانوں کے ملاپ کی سرحد پر کٹائی کیا گیا۔ قدرتی نمکیات اور صنوبر کی لکڑی کے پیچیدہ اور خوشبودار ذائقوں سے مالا مال ہے۔",
      originLocation: "ارسلان باب کے اخروٹ کے جنگلات، کرغزستان",
      botanySource: "سائبیرین صنوبر ہنی ڈیو، جنگلی کاسنی، دیسی دندیلین"
    },
    "yemeni-sidr": {
      name: "یمنی شاہی سدر (بیری) شہد",
      subName: "وادی حضرموت کا نایاب اور شفا بخش امرت",
      description: "قدیم مائع سونے کا حتمی عروج۔ یہ شہد وادیٔ حضرموت کے ویران پہاڑوں میں اگنے والے مقدس سدر (بیری) کے درختوں سے حاصل کیا جاتا ہے۔ اپنی لاجواب شفا بخش طاقت اور گہرے کیریمل ذائقے کے لیے دنیا بھر میں پریمیم حیثیت کا حامل ہے۔",
      details: "یہ افسانوی شہد سال میں دو بار قدیم روایتی طریقوں سے ہاتھ کے ذریعے نکالا جاتا ہے۔ بغیر چھنا اور غیر گرم شدہ یمنی سدر شہد انزائمز اور جراثیم کش خصوصیات سے انتہائی مالا مال ہے۔",
      originLocation: "وادیٔ دوعان، وادیٔ حضرموت، یمن",
      botanySource: "Ziziphus spina-christi (مقدس سدر / بیری کا درخت)"
    }
  }
};

export const LOCALIZED_REVIEWS: Record<string, CustomerReview[]> = {
  en: [
    {
      id: "rev-1",
      author: "Elise Montgomery",
      rating: 5,
      date: "June 02, 2026",
      message: "I have tasted honeys from New Zealand, Greece, and France, but this royal Kyrgyz At-Bashy represents a totally different class. The texture is exactly like solid heavy cream or a dense, fine white truffle. It dissolves slowly without any granulated sugar throat burn. Absolutely phenomenal.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-2",
      author: "Chef Kaelen Vance",
      rating: 5,
      date: "May 28, 2026",
      message: "As a pastry chef, using the Glacier Blossom on our signature tea desserts has become our secret weapon. The pearlescent sheen is breathtaking on a plate. The vanilla and wild almond notes are incredibly delicate.",
      varietyId: "glacier-blossom",
      verified: true
    },
    {
      id: "rev-3",
      author: "Aruuke Temirova",
      rating: 5,
      date: "May 15, 2026",
      message: "This brings back memories of childhood in Naryn! The Sainfoin honey is pure and auténtico. It is not like supermarket run-off. When you eat this with warm boorsok and fresh kaaymak, it is heaven.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-4",
      author: "Dr. Marcus Thorne",
      rating: 4,
      date: "April 30, 2026",
      message: "The pine and wildflower blend is spectacularly complex. Slightly woody, with an herbal medicinal quality that immediately settles the throat. Love taking this with a cup of smoked lapsang souchong.",
      varietyId: "pine-wildflower",
      verified: true
    },
    {
      id: "rev-5",
      author: "Malik Bin-Hassan",
      rating: 5,
      date: "June 10, 2026",
      message: "Genuine Hadramout Sidr honey is practically liquid gold. You can smell the sacred Lote tree in the aroma instantly. It is extremely thick, with a deep toffee backnote that leaves a warm, soothing feel in your throat. Authentic, pure quality.",
      varietyId: "yemeni-sidr",
      verified: true
    }
  ],
  es: [
    {
      id: "rev-1",
      author: "Elise Montgomery",
      rating: 5,
      date: "Junio 02, 20226",
      message: "He probado mieles de Nueva Zelanda, Grecia y Francia, pero esta miel real de Kirguistán representa una categoría totalmente superior. La textura es exactamente como crema de leche espesa o trufa blanca fina. Se disuelve lentamente sin ardor de azúcar de supermercado. Absolutamente fenomenal.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-2",
      author: "Chef Kaelen Vance",
      rating: 5,
      date: "Mayo 28, 2026",
      message: "Como chef de repostería, usar Glacier Blossom en nuestros postres exclusivos se ha convertido en mi arma secreta. El brillo perlado es asombroso en el plato. Las dejos de vainilla y almendra son sumamente delicados.",
      varietyId: "glacier-blossom",
      verified: true
    },
    {
      id: "rev-3",
      author: "Aruuke Temirova",
      rating: 5,
      date: "Mayo 15, 2026",
      message: "¡Esto me trae maravillosos recuerdos de mi infancia en Naryn! La miel de Esparceta es pura y auténtica, nada que ver con los productos industriales. Comer esto con boorsok caliente y kaaymak fresco es la gloria.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-4",
      author: "Dr. Marcus Thorne",
      rating: 4,
      date: "Abril 30, 2026",
      message: "La mezcla de flores silvestres y pino es increíblemente compleja. Ligeramente amaderada, con una cualidad medicinal y herbal que alivia la garganta al instante. Me fascina tomarla con té ahumado lapsang souchong.",
      varietyId: "pine-wildflower",
      verified: true
    },
    {
      id: "rev-5",
      author: "Malik Bin-Hassan",
      rating: 5,
      date: "Junio 10, 2026",
      message: "La genuina miel de Sidr de Hadramaut es prácticamente oro líquido. Puedes percibir el aroma del árbol sagrado de Lote al instante. Es extremadamente espesa, con profundas notas de toffee y una sensación cálida y reconfortante.",
      varietyId: "yemeni-sidr",
      verified: true
    }
  ],
  ru: [
    {
      id: "rev-1",
      author: "Элиза Монтгомери",
      rating: 5,
      date: "02 июня 2026",
      message: "Я пробовала мед из Новой Зеландии, Греции и Франции, но этот королевский киргизский мед из Ат-Баши — это совершенно другой класс. Текстура точь-в-точь как взбитые сливки или нежный белый трюфель. Растворяется медленно, без сахарного першения в горле. Полный восторг.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-2",
      author: "Шеф-повар Каелен Вэнс",
      rating: 5,
      date: "28 мая 2026",
      message: "Как кондитер, использование сорта Glacier Blossom в наших авторских десертах стало моим секретным оружием. Этот перламутровый блеск на тарелке просто завораживает. Нотки ванили и дикого миндаля невероятно хрупкие и деликатные.",
      varietyId: "glacier-blossom",
      verified: true
    },
    {
      id: "rev-3",
      author: "Арууке Темирова",
      rating: 5,
      date: "15 мая 2026",
      message: "Это возвращает воспоминания о детстве в Нарыне! Мед из эспарцета чистый и настоящий, не то что разбавленный сироп из супермаркета. Есть его с теплыми боорсоками и свежим каймаком — это истинное райское наслаждение.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-4",
      author: "Д-р Маркус Торн",
      rating: 4,
      date: "30 апреля 2026",
      message: "Хвойное разнотравье Тянь-Шаня невероятно сложное и богатое. Чуть древесное, с приятной травяной лечебной горчинкой, которая мгновенно успокаивает кашель. Прекрасно сочетается с чашечкой копченого чая лапсанг сушонг.",
      varietyId: "pine-wildflower",
      verified: true
    },
    {
      id: "rev-5",
      author: "Малик Бин-Хассан",
      rating: 5,
      date: "10 июня 2026",
      message: "Настоящий мед Сидр из Хадрамаута — это буквально жидкое золото. В его аромате сразу же чувствуется священное дерево Сидр. Он чрезвычайно густой, с приятным вкусом ириса и согревающим эффектом.",
      varietyId: "yemeni-sidr",
      verified: true
    }
  ],
  ar: [
    {
      id: "rev-1",
      author: "إليز مونتغومري",
      rating: 5,
      date: "٠٢ يونيو ٢٠٢٦",
      message: "لقد تذوقت عسلاً من نيوزيلندا واليونان وفرنسا، لكن عسل آت-باشي كيرغيزستان الملكي يمثل مرتبة مختلفة تماماً. القوام يشبه تماماً الكريمة المخفوقة الكثيفة أو الترف الأبيض الفاخر. يذوب ببطء وهدوء دون أي شعور بحرقان السكر في الحلق. منتج مذهل وجبار.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-2",
      author: "الشيف كايلين فانس",
      rating: 5,
      date: "٢٨ مايو ٢٠٢٦",
      message: "بصفتي طاهياً للحلويات الغربية الراقية، أصبح استخدام 'زهرة الجليد' سرّنا الدفين لإبهار الضيوف. بريقه اللؤلؤي على الطبق يخطف الأنفاس، ونغمات الفانيليا واللوز البري تمنح حلاوة ناعمة لا تُنسى.",
      varietyId: "glacier-blossom",
      verified: true
    },
    {
      id: "rev-3",
      author: "أروكي تيميروفا",
      rating: 5,
      date: "١٥ مايو ٢٠٢٦",
      message: "هذا يعيدني لذكريات الطفولة الدافئة في نارين! عسل السنفوان هنا نقي وأصيل بنسبة ١٠٠٪ وليس كعسل المعلبات الصناعي. تناوله مع البورسوك الساخن والقشطة الجبلية الطازجة هو النعيم نفسه.",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-4",
      author: "د. ماركوس ثورن",
      rating: 4,
      date: "٣٠ أبريل ٢٠٢٦",
      message: "مزيج الصنوبر والأزهار البرية الرائع معقد للغاية. نغمة خشبية خفيفة تعطي كفاءة عشبية علاجية تريح الحلق والجهاز التنفسي فوراً. أحب تناوله صباحاً مع كوب دافئ من الشاي المدخن الفاخر.",
      varietyId: "pine-wildflower",
      verified: true
    },
    {
      id: "rev-5",
      author: "مالك بن حسن",
      rating: 5,
      date: "١٠ يونيو ٢٠٢٦",
      message: "عسل السدر الحضرمي الأصلي هو بالفعل ذهب سائل لا يقدر بثمن. تستطيع استنشاق عبير شجرة العلْب المقدسة في رائحته فوراً. قوام كثيف وممتاز وحلاوة دافئة تريح الحلق وتغذيه.",
      varietyId: "yemeni-sidr",
      verified: true
    }
  ],
  ur: [
    {
      id: "rev-1",
      author: "ایلیز مونٹگومری",
      rating: 5,
      date: "۰۲ جون، ۲۰۲۶",
      message: "میں نے نیوزی لینڈ، یونان اور فرانس کے شہد چکھے ہیں، لیکن کرغزستان کا یہ آت باشی شہد ایک بالکل مختلف پائے کا حامل ہے۔ اس کا قوام خالص بالائی اور سفید ٹرفل کی مانند ہے۔ یہ گلے میں جلن پیدا کیے بغیر دھیرے دھیرے پگھلتا ہے۔ بے حد شاندار۔",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-2",
      author: "شیف کیلن وینس",
      rating: 5,
      date: "۲۸ مئی، ۲۰۲۶",
      message: "مثالی پیسٹری شیف ہونے کے ناطے، اپنی خاص چائے اور میٹھوں میں گلیشیئر بلوسم کا استعمال کرنا میرا خفیہ ہتھیار بن گیا ہے۔ پلیٹ پر اس کے چمکتے موتیوں جیسے قطرے روح کو لبھاتے ہیں۔ اس میں ونیلا کا ذائقہ کمال نازک ہے۔",
      varietyId: "glacier-blossom",
      verified: true
    },
    {
      id: "rev-3",
      author: "اروقی تیمیوروا",
      rating: 5,
      date: "۱۵ مئی، ۲۰۲۶",
      message: "یہ مجھے نارین میں اللّٰہ کی یاد دلاتا ہے! سینفوئن سفید شہد بالکل اصلی اور خالص ہے، ڈبوں والے مصنوعی شہد سے الگ۔ جب آپ اسے گرم بورسوک لقموں اور تازہ بالائی کے ساتھ چکھتے ہیں، تو یہ بہشت محسوس ہوتا ہے۔",
      varietyId: "royal-at-bashy",
      verified: true
    },
    {
      id: "rev-4",
      author: "ڈاکٹر مارکس تھورن",
      rating: 4,
      date: "۳۰ اپریل، ۲۰۲۶",
      message: "صنوبر کی گوند اور جنگلی پھولوں کا یہ ملاپ بہت دلچسپ ہے اور دوا کی تاثیر رکھتا ہے۔ ذائقہ تھوڑا سا چوبی اور جڑی بوٹیوں جیسا دیسی ہے جو گلے کی خراش کو دور کرتا ہے۔ کوئلے کی چائے پر اس کا ایک چمچ روز کا معمول ہے۔",
      varietyId: "pine-wildflower",
      verified: true
    }
  ]
};

export const LOCALIZED_HERITAGE_SLIDES: Record<string, HeritageSlide[]> = {
  en: [
    {
      title: "The Cryosphere Pristineness",
      description: "Our colonies thrive between 2000m and 3000m on the Ala-Too glacier slopes, miles from highways or monocultural agriculture. The air is pristine, and the soil is fed directly by high-purity glacier runoff, preserving live enzymes.",
      icon: "Globe"
    },
    {
      title: "The Sainfoin Botanical Miracle",
      description: "The Sainfoin (Onobrychis) flower produces a rich, highly concentrated, iron-colored nectar during a narrow 3-week window in June. This raw material slow-crystallizes naturally to yield the ivory pearl color and smooth buttery mouthfeel.",
      icon: "Flower"
    },
    {
      title: "Centenary Woodware Craft",
      description: "Our hives are crafted with seasoned Siberian Cedar trees and run using ancient, non-interventionist apicultural steps. Bees accumulate honey naturally in wild combs, and we extract cold with extreme hygiene.",
      icon: "Trees"
    }
  ],
  es: [
    {
      title: "Pureza de la Criósfera",
      description: "Nuestras colmenas prosperan de 2000 m a 3000 m en las laderas de Ala-Too, lejos de carreteras o pesticidas de cultivo industrial. El aire es puro y el suelo se nutre directamente de agua pura de deshielo glaciar.",
      icon: "Globe"
    },
    {
      title: "Esparceta: Milagro Botánico",
      description: "La flor de Esparceta silvestre (Onobrychis) produce néctar de alta concentración durante solo 3 semanas en junio, cristalizándose de manera natural para crear el sutil color marfil perlado y la textura de mantequilla batida.",
      icon: "Flower"
    },
    {
      title: "Estuches y Colmenas Centenarias",
      description: "Nuestras colmenas están talladas en madera seca de Cedro Siberiano de forma no intrusiva. Las abejas acumulan miel naturalmente en panales silvestres, y nosotros la extraemos en frío con la máxima delicadeza e higiene.",
      icon: "Trees"
    }
  ],
  ru: [
    {
      title: "Чистейшая Криосфера",
      description: "Наши пчелиные семьи живут в уникальных условиях на высоте от 2000 до 3000 метров на склонах ледников Ала-Тоо. Воздух кристально чист, а вулканическая почва орошается первозданными талыми ледниковыми ручьями.",
      icon: "Globe"
    },
    {
      title: "Ботаническое чудо эспарцета",
      description: "Розовые цветки дикого эспарцета выделяют исключительно сладкий и густой нектар во время короткого трехнедельного цветения в июне. Это сырье кристаллизуется естественным образом без образования крупинок сахара.",
      icon: "Flower"
    },
    {
      title: "Столетние ульи из кедра",
      description: "Наши ульи изготавливаются из высушенной со временем древесины сибирского кедра по бережным древним технологиям. Мы извлекаем мед холодным деликатным методом при строжайшем соблюдении высочайшей гигиены.",
      icon: "Trees"
    }
  ],
  ar: [
    {
      title: "نقاء الغلاف الجليدي",
      description: "تزدهر مناحلنا بين ٢٠٠٠ متراً و٣٠٠٠ متراً في سفوح جبال آلا-تو الجليدية، بعيداً تماماً عن عوادم السيارات أو الكيماويات والزراعات الصناعية. التربة تتغذى بصفاء من مياه الثلوج الذائبة الصافية.",
      icon: "Globe"
    },
    {
      title: "معجزة السنفوان النباتية",
      description: "تنتج زهرة السنفوان (Onobrychis) نكتاراً فائق اللزوجة والتركيز خلال نافذة زمنية ضيقة لا تتعدى ٣ أسابيع في شهر يونيو الجبلي. هذه المادة الخام تتبلور ببطء لتعطي اللون العاجي اللؤلؤي الناصع.",
      icon: "Flower"
    },
    {
      title: "خلايا النحل من خشب الصنوبر",
      description: "خلايا نحلنا مصنوعة من كتل خشب الأرز السيبيري الطبيعي العتيق المدار بأساليب قديمة وهادئة دون تدخل بشري مزعج. يتراكم النحل بطبيعته في الأقراص البرية ونستخرج العسل ونصفيه بارداً بحرفية بالغة.",
      icon: "Trees"
    }
  ],
  ur: [
    {
      title: "گلیشیئر کی بے مثال صفائی",
      description: "ہماری نوآبادیاں آلا-تو کی پہاڑیوں پر سطح سمندر سے ۲۰۰۰ سے ۳۰۰۰ میٹر بلندی پر آباد ہیں جو آلودگی اور فیکٹریوں کے دھوئیں سے کوسوں دور ہیں۔ یہاں کی مٹی کو گلیشیئر کے شفاف پگھلے ہوئے پانیوں سے غذائیت ملتی ہے۔",
      icon: "Globe"
    },
    {
      title: "سینفوئن پھولوں کا قدرتی کرشمہ",
      description: "سینفوئن کا پھول جون کے صرف ۳ ہفتوں کے دوران انتہائی گاڑھا امرت فراہم کرتا ہے۔ یہ قدرتی خام مال آہستہ آہستہ جم کر سفید چمکدار موتی کا رنگ حاصل کرتا ہے اور ملائی جیسا ذائقہ دیتا ہے۔",
      icon: "Flower"
    },
    {
      title: "صنوبر کی صدیوں پرانی بدو دستکاری",
      description: "شہد کے چھتے سائبیرین صنوبر کی مضبوط لکڑی سے تیار کیے جاتے ہیں اور قدیم روایات کے مطابق چلائے جاتے ہیں۔ مکھیاں قدرتی طور پر چھتے بناتی ہیں اور ہم انتہائی صفائی کے ساتھ سرد امپیریل فلٹریشن کرتے ہیں۔",
      icon: "Trees"
    }
  ]
};

export const LOCALIZED_PAIRINGS: Record<string, PresetPairing[]> = {
  en: [
    {
      name: "Aged Pecorino Romano or Gouda",
      type: "cheese",
      context: "Salty crystalline sheep's milk cheese balances the floral, almond notes of Sainfoin"
    },
    {
      name: "Matcha Tea Ceremonial Bowl",
      type: "beverage",
      context: "The creaminess of high-grade matcha acts as an exquisite slate for the soft vanilla tones of our white honey"
    },
    {
      name: "Warm Pistachio Croissant & Clotted Cream",
      type: "pastry",
      context: "A classic decadent flaky pairing where the rich butter notes are lifted by high-mountain floral nectar"
    },
    {
      name: "Fresh Spoonful (The Purest Ritual)",
      type: "spoon",
      context: "Savoring 1/2 teaspoon slowly on the palate in the morning to capture the glacier-fed enzymes directly"
    }
  ],
  es: [
    {
      name: "Pecorino Romano Viejo o Gouda Añejo",
      type: "cheese",
      context: "El queso de oveja salado y de estructura cristalina equilibra las notas florales y almendradas de la esparceta"
    },
    {
      name: "Tazón Ceremonial de Té Matcha",
      type: "beverage",
      context: "La cremosidad del matcha imperial japonés sirve de lienzo perfecto para las notas de vainilla suave de nuestra miel"
    },
    {
      name: "Croissant de Pistacho Caliente y Nata Espesa",
      type: "pastry",
      context: "Un maridaje decadente y hojaldrado clásico donde las notas de mantequilla rica se elevan con el néctar floral"
    },
    {
      name: "Cucharadita Directa (El Ritual Más Puro)",
      type: "spoon",
      context: "Disfrutar de media cucharada lentamente por la mañana bajo la lengua para absorber directamente las enzimas vivas"
    }
  ],
  ru: [
    {
      name: "Выдержанный сыр Пекорино Романо или Гауда",
      type: "cheese",
      context: "Соленый кристаллический овечий сыр идеально балансирует миндально-ванильные оттенки белого эспарцета"
    },
    {
      name: "Чаша церемониального японского чая Матча",
      type: "beverage",
      context: "Плотный травяной вкус превосходного чая матча раскрывается глубокими ванильными тонами нашего застывшего меда"
    },
    {
      name: "Теплый фисташковый круассан и каймак",
      type: "pastry",
      context: "Классическое десертное сочетание, где жирные сливочные ноты подчеркиваются легким ароматом высокогорных цветов"
    },
    {
      name: "Ложка меда натощак (Чистый ритуал)",
      type: "spoon",
      context: "Рассасывание половины чайной ложки меда утром для прямого усвоения уникальных ледниковых микроэлементов"
    }
  ],
  ar: [
    {
      name: "جبن بيكورينو رومانو معتق أو جودا فاخرة",
      type: "cheese",
      context: "توازن ملوحة الجبن ورطوبته الكريستالية النكهات اللوزية العريضة لعسل السنفوان."
    },
    {
      name: "وعاء شاي الماتشا الياباني الطقسي",
      type: "beverage",
      context: "يعمل قوام شاي الماتشا الفاخر كلوح ذوق مثالي لتوضيح ملامح الفانيليا الناعمة في عسلنا الأبيض."
    },
    {
      name: "كرواسون الفستق الساخن مع القشدة الغنية",
      type: "pastry",
      context: "توليفة كلاسيكية مخبوزة شهية ترتفع ذوقياً بفعل نكتار زهور الجبل الفواحة."
    },
    {
      name: "ملعقة مباشرة صباحية (الطقس الأصفى)",
      type: "spoon",
      context: "تذوق نصف ملعقة شاي ببطء في الفم صباحاً لامتصاص الإنزيمات الحية مباشرة وتنشيط الجسم بصفاء."
    }
  ],
  ur: [
    {
      name: "ایک سال پرانا رومانو پنیر یا اوبلی گوڈا پنیر",
      type: "cheese",
      context: "بھیڑ کے نمکین پنیر کے ذرات سینفوئن شہد کے بادامی اور ونیلا ذائقے کو بہترین توازن دیتے ہیں"
    },
    {
      name: "کلاسیکی سیریمونیل جاپانی ماچا چائے",
      type: "beverage",
      context: "ماچا چائے کا گاڑھا پتوں کا ذائقہ ہمارے سفید شہد کی ململ جیسی مٹھاس کے لیے ایک خوبصورت پردہ بن جاتا ہے"
    },
    {
      name: "گرم پستہ کروسینٹ اور گاڑھی تازہ بالائی",
      type: "pastry",
      context: "ایک انتہائی لذیذ کلاسک ملاپ جہاں مکھن کے شاندار ذائقوں کو ہمارے الپائن امرت سے جلا ملتی ہے"
    },
    {
      name: "نہار منہ ایک چمچ (سب سے خالص ترین روحانی عمل)",
      type: "spoon",
      context: "صبح آدھا چمچ آہستہ آہستہ چوسیں تاکہ گلیشیئر کے انزائمز اور جڑی بوٹیوں کی افادیت براہ راست حاصل ہو سکے"
    }
  ]
};
