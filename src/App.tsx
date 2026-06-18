import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ShoppingBag,
  Award,
  Compass,
  Feather,
  HelpCircle,
  MapPin,
  RotateCcw,
  Plus,
  Minus,
  Trash2,
  Check,
  CheckCircle2,
  X,
  ChevronRight,
  Info,
  Sliders,
  Gift,
  Globe,
  Sparkles,
  Camera,
  Upload,
  ArrowRight,
  User,
  Star,
  BookOpen,
  MessageCircle,
  Send,
  Phone,
  Instagram
} from "lucide-react";
import { INSTALLED_HONEY_PRODUCTS, STATIC_REVIEWS, NOMADIC_HERITAGE_SLIDES, PRESET_PAIRINGS, HONEY_IMAGES } from "./data";
import { HoneyProduct, CustomJarConfig, CartItem, SommelierPairing, CustomerReview, ChatMessage } from "./types";
import { SUPPORTED_LANGUAGES, TRANSLATIONS, LOCALIZED_PRODUCTS, LOCALIZED_REVIEWS, LOCALIZED_HERITAGE_SLIDES, LOCALIZED_PAIRINGS } from "./translations";

const whatsappGreetings: Record<string, string> = {
  en: "Greetings Ala-Too! I am interested in your luxury high-altitude honey collection.",
  es: "¡Saludos Ala-Too! Estoy interesado en su colección de miel de lujo de alta montaña.",
  ru: "Приветствую Ala-Too! Меня интересует ваша коллекция премиального высокогорного меда.",
  ar: "مرحباً ألا-تو! أنا مهتم بمجموعة العسل الجبلي الفاخرة والنادرة لديكم.",
  ur: "خوش آمدید Ala-Too! میں آپ کے پریمیم اور نایاب جنگلی شہد کے بارے میں جاننا چاہتا ہوں۔"
};

const whatsappButtonLabels: Record<string, string> = {
  en: "Chat on WhatsApp",
  es: "Hablar por WhatsApp",
  ru: "Написать в WhatsApp",
  ar: "تواصل عبر واتساب",
  ur: "واٹس ایپ پر رابطہ کریں"
};

const instagramButtonLabels: Record<string, string> = {
  en: "Instagram",
  es: "Instagram",
  ru: "Instagram",
  ar: "إنستغرام",
  ur: "انسٹاگرام"
};

const mapSectionTitles: Record<string, string> = {
  en: "Map of the High-Altitude Sanctuary",
  es: "Mapa del Santuario de Alta Montaña",
  ru: "Карта Высокогорного Святилища",
  ar: "خريطة محمية المرتفعات الشاهقة",
  ur: "بلند ترین پہاڑی پناہ گاہ کا نقشہ"
};

const mapBarLabels: Record<string, string> = {
  en: "Interactive Geographic Provenance",
  es: "Procedencia Geográfica Interactiva",
  ru: "Интерактивное Географическое Происхождение",
  ar: "الموقع الجغرافي التفاعلي للمحميات",
  ur: "مخصوص طبعی جغرافیائی نقشہ"
};

const apiaryLocationsDesc: Record<string, string> = {
  en: "Explore the wild glacial valleys and apiary coordinates where our pure white honey is collected. Locate our luxury experiences or seek the freezing slopes of the At-Bashy alpine ranges.",
  es: "Explore los valles glaciares salvajes y las coordenadas de los apiarios donde se recolecta nuestra miel blanca pura. Ubique nuestras experiencias de lujo o explore las gélidas laderas de las cordilleras alpinas de At-Bashy.",
  ru: "Исследуйте дикие ледниковые долины и координаты пасек, где собирается наш чистейший белый мед. Найдите наши роскошные бутики или отыщите морозные склоны высокогорных хребтов Ат-Баши.",
  ar: "استكشف الوديان الجليدية البرية وإحداثيات المناحل التي يُجمع فيها عسلنا الأبيض النقي. تتبع محلاتنا الفاخرة أو المنحدرات الجليدية في جبال آت-باشي.",
  ur: "ہمارے خالص سفید شہد کے ماخذ، جنگلی گلیشیئر کی وادیوں اور مکھیوں کے پالنے کے مقامات کو دریافت کریں۔ عیش و آرام کے تجربات تلاش کریں۔"
};

export default function App() {
  // Localization State
  const [currentLang, setCurrentLang] = useState<"en" | "es" | "ru" | "ar" | "ur">(() => {
    try {
      const saved = localStorage.getItem("ala_too_honey_lang");
      return (saved as any) || "en";
    } catch {
      return "en";
    }
  });

  // Handle document direction
  useEffect(() => {
    try {
      localStorage.setItem("ala_too_honey_lang", currentLang);
    } catch (e) {}
    const dir = currentLang === "ar" || currentLang === "ur" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
    document.documentElement.setAttribute("lang", currentLang);
  }, [currentLang]);

  const t = (key: string): string => {
    return TRANSLATIONS[currentLang]?.[key] || TRANSLATIONS["en"]?.[key] || key;
  };

  // Localized Honey Products computed variable
  const localizedProducts = INSTALLED_HONEY_PRODUCTS.map((product) => {
    const translation = LOCALIZED_PRODUCTS[currentLang]?.[product.id] || {};
    return {
      ...product,
      ...translation,
    };
  });

  const localizedReviews = LOCALIZED_REVIEWS[currentLang] || LOCALIZED_REVIEWS["en"] || STATIC_REVIEWS;
  const localizedHeritageSlides = LOCALIZED_HERITAGE_SLIDES[currentLang] || LOCALIZED_HERITAGE_SLIDES["en"] || NOMADIC_HERITAGE_SLIDES;
  const localizedPairings = LOCALIZED_PAIRINGS[currentLang] || LOCALIZED_PAIRINGS["en"] || PRESET_PAIRINGS;

  // Navigation & View State
  const [activeTab, setActiveTab] = useState<"collection" | "studio" | "sommelier" | "story">("collection");
  const [selectedProduct, setSelectedProduct] = useState<HoneyProduct | null>(null);
  const [catalogFilter, setCatalogFilter] = useState<"all" | "kyrgyz" | "yemeni">("kyrgyz");

  // Chatbot State
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);
  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([]);
  const [inputMessage, setInputMessage] = useState("");
  const [chatbotLoading, setChatbotLoading] = useState(false);

  // Sync chatbot default greeting when language changes
  useEffect(() => {
    const greetings: Record<string, string> = {
      en: "Greetings! I am Pristine Bee, your luxury honey sommelier and boutique concierge. How may I sweeten your journey of taste today?",
      es: "¡Saludos! Soy Pristine Bee, su sumiller de miel de lujo y guía de nuestra boutique. ¿Cómo puedo endulzar su viaje de degustación hoy?",
      ru: "Приветствую! Я Pristine Bee, ваш личный сомелье премиального меда. Как я могу украсить ваше гастрономическое путешествие сегодня?",
      ar: "مرحباً بك! أنا Pristine Bee، مستشار العسل الفاخر ودليلك الخاص. كيف يمكنني إثراء تجربة التذوق الفاخرة لديك اليوم؟",
      ur: "خوش آمدید! میں ہوں Pristine Bee، آپ کا پریمیم شہد صوملیئر اور بوتیک گائیڈ۔ آج آپ کے ذائقے کے اس سفر کو مزید شیریں بنانے میں کیسے مدد کروں؟"
    };
    const welcomeText = greetings[currentLang] || greetings["en"];

    setChatMessages(prev => {
      if (prev.length === 0) {
        return [{
          id: "welcome",
          sender: "bot",
          text: welcomeText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }];
      } else if (prev.length === 1 && prev[0].id === "welcome") {
        return [{
          ...prev[0],
          text: welcomeText
        }];
      }
      return prev;
    });
  }, [currentLang]);

  // Cart State (Persisted in localStorage)
  const [cart, setCart] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem("ala_too_honey_cart");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [promoCode, setPromoCode] = useState("");
  const [appliedPromo, setAppliedPromo] = useState<string | null>(null);

  // Checkout State
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [shippingForm, setShippingForm] = useState({
    fullName: "",
    email: "",
    address: "",
    city: "",
    postalCode: "",
    deliveryTier: "caravan", // caravan (nomadic direct) vs standard courier
    cardName: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
    giftNotes: ""
  });
  const [isOrderPlaced, setIsOrderPlaced] = useState(false);
  const [placedOrderDetails, setPlacedOrderDetails] = useState<any>(null);

  // Sensory Taste Matcher State
  const [sensoryPref, setSensoryPref] = useState({
    sweetness: 3,
    creaminess: 4,
    aromaIntensity: 4
  });
  const [suggestedProduct, setSuggestedProduct] = useState<HoneyProduct | null>(null);

  // Artisanal Jar Studio Configurator State
  const [customJar, setCustomJar] = useState<CustomJarConfig>({
    size: "500g",
    varietyId: "royal-at-bashy",
    dipperType: "olivewood",
    packaging: "linen_wax",
    nomadicCharm: true,
    giftTagMessage: "To culinary heights, with Kyrgyz warmth."
  });
  const [customJarPrice, setCustomJarPrice] = useState(65);

  // Sommelier & AI Pairing State
  const [customPairingInput, setCustomPairingInput] = useState("");
  const [selectedPresetIndex, setSelectedPresetIndex] = useState<number | null>(null);
  const [sommelierHoneyVariety, setSommelierHoneyVariety] = useState("royal-at-bashy");
  const [sommelierContext, setSommelierContext] = useState("Gourmet gastronomy with friends");
  
  // Drag and Drop Image state for Sommelier
  const [uploadedBase64, setUploadedBase64] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll chatbot to bottom on updates
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [chatMessages, isChatbotOpen]);

  const [sommelierLoading, setSommelierLoading] = useState(false);
  const [sommelierStatusText, setSommelierStatusText] = useState("");
  const [sommelierVerdict, setSommelierVerdict] = useState<SommelierPairing | null>(null);
  const [pairingHistory, setPairingHistory] = useState<SommelierPairing[]>(() => {
    try {
      const saved = localStorage.getItem("ala_too_pairing_history");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Persist Cart
  useEffect(() => {
    localStorage.setItem("ala_too_honey_cart", JSON.stringify(cart));
  }, [cart]);

  // Persist Pairing History
  useEffect(() => {
    localStorage.setItem("ala_too_pairing_history", JSON.stringify(pairingHistory));
  }, [pairingHistory]);

  // Live Sensory Filter algorithm
  useEffect(() => {
    let bestMatch: HoneyProduct | null = null;
    let leastDiff = 999;

    localizedProducts.forEach((product) => {
      const diffSweet = Math.abs(product.sensoryProfile.sweetness - sensoryPref.sweetness);
      const diffCream = Math.abs(product.sensoryProfile.creaminess - sensoryPref.creaminess);
      const diffAroma = Math.abs(product.sensoryProfile.aromaIntensity - sensoryPref.aromaIntensity);
      
      const totalDiff = diffSweet + diffCream + diffAroma;
      if (totalDiff < leastDiff) {
        leastDiff = totalDiff;
        bestMatch = product;
      }
    });

    setSuggestedProduct(bestMatch);
  }, [sensoryPref, currentLang]);

  // Live price updater for Custom Studio Jar
  useEffect(() => {
    let base = 35;
    
    // Jar Size
    if (customJar.size === "500g") base += 20;
    if (customJar.size === "1000g_ceramic") base += 45;

    // Premium Honey Type multiplier
    const selectedVariety = localizedProducts.find(p => p.id === customJar.varietyId);
    if (selectedVariety) {
      base += Math.round(selectedVariety.price * 0.3); // add variety premium charge
    }

    // Dipper choice
    if (customJar.dipperType === "olivewood") base += 8;
    if (customJar.dipperType === "brass_leaf") base += 12;
    if (customJar.dipperType === "nomadic_birch") base += 10;

    // Specialty Packaging
    if (customJar.packaging === "scorched_crate") base += 15;
    if (customJar.packaging === "minimalist_gold") base += 10;

    // Nomadic Leather Charm
    if (customJar.nomadicCharm) base += 5;

    setCustomJarPrice(base);
  }, [customJar]);

  // Add standard selection to Cart
  const addProductToCart = (product: HoneyProduct) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((item) => item.product?.id === product.id && !item.customConfig);
      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += 1;
        return copy;
      } else {
        return [
          ...prev,
          {
            id: `cart-p-${product.id}`,
            product,
            quantity: 1,
            price: product.price,
            name: product.name,
            description: product.subName
          }
        ];
      }
    });
    setIsCartOpen(true);
  };

  // Add customized studio jar to Cart
  const addCustomJarToCart = () => {
    const chosenProduct = localizedProducts.find(p => p.id === customJar.varietyId);
    const sizeName = customJar.size === "1000g_ceramic" ? "1kg Nomadic Ceramic Crock" : `${customJar.size} Glass Flask`;
    const accessoryName = customJar.dipperType !== "none" ? `with ${customJar.dipperType.replace("_", " ")} dipper` : "";
    
    const label = `Bespoke Jar: ${chosenProduct?.name || "Kyrgyz White Honey"} (${sizeName}) ${accessoryName}`.trim();
    const detailDesc = `Wrapped in ${customJar.packaging.replace("_", " ")} packaging. Tag reads: "${customJar.giftTagMessage}"`;

    const customItemId = `cart-custom-${Date.now()}`;
    
    setCart((prev) => [
      ...prev,
      {
        id: customItemId,
        customConfig: { ...customJar },
        quantity: 1,
        price: customJarPrice,
        name: label,
        description: detailDesc
      }
    ]);
    setIsCartOpen(true);
  };

  // Quantities handlers
  const updateQuantity = (itemId: string, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.id === itemId) {
            const nextQty = item.quantity + delta;
            return { ...item, quantity: nextQty };
          }
          return item;
        })
        .filter((item) => item.quantity > 0);
    });
  };

  const removeCartItem = (itemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== itemId));
  };

  // Calculate cart costs
  const calculateSubtotal = () => {
    return cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getDiscountAmount = () => {
    if (appliedPromo === "KYRGYZGLACIER") {
      return calculateSubtotal() * 0.15; // 15% discount
    }
    return 0;
  };

  const getShippingCost = () => {
    if (cart.length === 0) return 0;
    if (shippingForm.deliveryTier === "caravan") return 19; // Premium carriage
    return 8; // Standard courier
  };

  const calculateTotal = () => {
    return calculateSubtotal() - getDiscountAmount() + getShippingCost();
  };

  const handleApplyPromo = () => {
    if (promoCode.trim().toUpperCase() === "KYRGYZGLACIER") {
      setAppliedPromo("KYRGYZGLACIER");
    } else {
      alert("Invalid boutique promo code. Feel free to try 'KYRGYZGLACIER' for an introductory 15% off!");
    }
  };

  // Sommelier File Uploader callbacks
  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith("image/")) {
      alert("Please upload a genuine culinary image file (PNG, JPG, or WEBP).");
      return;
    }
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === "string") {
        setUploadedBase64(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      processFile(e.target.files[0]);
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const clearUploadedImage = () => {
    setUploadedBase64(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  // Gemini Sommelier Fetch Call
  const handleConsultSommelier = async (e: React.FormEvent) => {
    e.preventDefault();
    const itemToPair = selectedPresetIndex !== null 
      ? localizedPairings[selectedPresetIndex].name 
      : customPairingInput.trim();

    if (!itemToPair) {
      alert("Please designate a gourmet pairing item, such as an aged cheese, a delicate tea, or fresh brioche!");
      return;
    }

    setSommelierLoading(true);
    setSommelierStatusText("Ascending Tian Shan ridges to establish glacier connection...");

    const loadingPhases = [
      "Analyzing molecular flavor compounds of Kyrgyz white honey...",
      "Analyzing tactile and melt consistency under nominated temperatures...",
      "Sieving botanical sainfoin nectar properties...",
      "Formulating serving ceremony and ritual presentation...",
      "Composing final sommelier verdict..."
    ];

    let currentPhase = 0;
    const interval = setInterval(() => {
      if (currentPhase < loadingPhases.length) {
        setSommelierStatusText(loadingPhases[currentPhase]);
        currentPhase++;
      }
    }, 1800);

    const matchVariety = localizedProducts.find(p => p.id === sommelierHoneyVariety);

    try {
      const response = await fetch("/api/gemini/pairings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          pairingItem: itemToPair,
          honeyVariety: matchVariety ? `${matchVariety.name} (${matchVariety.subName})` : "Ala-Too At-Bashy White Honey",
          userContext: sommelierContext,
          base64Image: uploadedBase64, // Multimodal image parsed over the server
          language: currentLang
        })
      });

      if (!response.ok) {
        throw new Error("Gourmet server returned non-200 state.");
      }

      const data = await response.json();
      
      const newPairing: SommelierPairing = {
        id: `pairing-${Date.now()}`,
        pairingName: data.pairingName || itemToPair,
        compatibilityScore: data.compatibilityScore || 9,
        sensoryNotes: data.sensoryNotes || "Delicate, vanilla undertones intertwining flawlessly.",
        sommelierVerdict: data.sommelierVerdict || "A magnificent harmony of texture and salt-fat distribution.",
        servingCeremony: data.servingCeremony || "1. Serve chilled at 12°C. 2. Layer onto structural sourdough. 3. Savor.",
        recommendedHoneyTemperature: data.recommendedHoneyTemperature || "14°C - Cellar temperature",
        honeyVariety: matchVariety ? matchVariety.name : "Ala-Too Alpine White Honey",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })
      };

      setSommelierVerdict(newPairing);
      setPairingHistory((prev) => [newPairing, ...prev.slice(0, 5)]); // limit history to 6 entries

    } catch (error) {
      console.error(error);
      // Fallback elegant report in case API key fails
      const fallbackPairing: SommelierPairing = {
        id: `pairing-fallback-${Date.now()}`,
        pairingName: itemToPair,
        compatibilityScore: 9,
        sensoryNotes: "Chilled pearly-white Sainfoin honey offers rich vanilla accents that melt simultaneously with the creamy medium of your pairing companion.",
        sommelierVerdict: "The high-altitude clean salinity of sainfoin petals highlights the nutty profile of the pairing. Textures align inside a velvety buttery feel on the middle tastebuds.",
        servingCeremony: "1. Present the At-Bashy honey inside a chilled porcelain saucer. 2. Heat your pairing companion slightly to 35°C to create a gorgeous thermal contrast. 3. Drizzle slowly using a cedar spoon.",
        recommendedHoneyTemperature: "15°C - Chilled",
        honeyVariety: matchVariety ? matchVariety.name : "Ala-Too Alpine White Honey",
        timestamp: new Date().toLocaleTimeString("en-US", { hour: '2-digit', minute: '2-digit' })
      };
      setSommelierVerdict(fallbackPairing);
      setPairingHistory((prev) => [fallbackPairing, ...prev.slice(0, 5)]);
    } finally {
      clearInterval(interval);
      setSommelierLoading(false);
    }
  };

  // Chatbot Send Message Handler
  const handleSendMessage = async (textToSend?: string) => {
    const msgText = textToSend !== undefined ? textToSend : inputMessage;
    if (!msgText.trim() || chatbotLoading) return;

    const newUserMsg: ChatMessage = {
      id: `chat-${Date.now()}`,
      sender: "user",
      text: msgText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setChatMessages(prev => [...prev, newUserMsg]);
    if (textToSend === undefined) {
      setInputMessage("");
    }
    setChatbotLoading(true);

    try {
      // Package conversation history for prompt continuity
      const historyPayload = chatMessages
        .filter(m => m.id !== "welcome")
        .map(m => ({
          sender: m.sender,
          text: m.text
        }));

      const response = await fetch("/api/gemini/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          message: msgText,
          history: historyPayload,
          language: currentLang
        })
      });

      if (!response.ok) {
        throw new Error("Chat bot returned status error.");
      }

      const data = await response.json();
      const botReply: ChatMessage = {
        id: `chat-reply-${Date.now()}`,
        sender: "bot",
        text: data.reply || "A quiet buzz surrounds the hives. Please try again shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, botReply]);
    } catch (error) {
      console.error(error);
      const errorMsg: ChatMessage = {
        id: `chat-error-${Date.now()}`,
        sender: "bot",
        text: currentLang === "es"
          ? "Parece que nuestras abejas están un poco de descanso en la colmena. Por favor, intente de nuevo en breve."
          : currentLang === "ru"
          ? "Кажется, наши пчелы отдыхают в улье. Пожалуйста, попробуйте еще раз через минуту."
          : currentLang === "ar"
          ? "يبدو أن خلية النحل متعبة قليلاً حالياً. يرجى إعادة المحاولة بعد دقيقة."
          : currentLang === "ur"
          ? "ایسا لگتا ہے کہ ہماری شہد کی مکھیاں آرام کر رہی ہیں۔ براہ کرم کچھ دیر بعد دوبارہ کوشش کریں۔"
          : "The high-alpine hives seem a bit distant right now. Let me rest a moment and try again.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setChatMessages(prev => [...prev, errorMsg]);
    } finally {
      setChatbotLoading(false);
    }
  };

  // Checkout submission
  const handleCheckoutSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!shippingForm.fullName || !shippingForm.email || !shippingForm.address || !shippingForm.cardNumber) {
      alert("Please populate the critical name, email, address, and mock credit parameters for secure boutique validation.");
      return;
    }
    
    // Formulate final receipt
    const orderData = {
      orderId: `ALATOO-${Math.floor(Math.random() * 900000 + 100000)}`,
      date: new Date().toLocaleDateString("en-US", { year: 'numeric', month: 'long', day: 'numeric' }),
      items: [...cart],
      discount: getDiscountAmount(),
      shippingCost: getShippingCost(),
      total: calculateTotal(),
      shippingInfo: { ...shippingForm }
    };

    setPlacedOrderDetails(orderData);
    setIsOrderPlaced(true);
    setCart([]); // reset cart
  };

  // Close Checkout and receipts
  const resetAfterSuccess = () => {
    setIsCheckoutOpen(false);
    setIsOrderPlaced(false);
    setPlacedOrderDetails(null);
    setShippingForm({
      fullName: "",
      email: "",
      address: "",
      city: "",
      postalCode: "",
      deliveryTier: "caravan",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCVV: "",
      giftNotes: ""
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream text-brand-ink font-sans selection:bg-brand-brown selection:text-brand-ink">
      
      {/* EXQUISITE BOUTIQUE HEADER */}
      <header className="sticky top-0 z-40 bg-brand-cream/90 backdrop-blur-md border-b border-brand-brown/40 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => setActiveTab("collection")}>
            <div className="w-10 h-10 rounded-full border border-brand-gold bg-white flex items-center justify-center text-brand-gold shadow-sm">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h1 className="text-sm font-semibold tracking-widest text-[#2D2926] uppercase font-mono">{t("appName")}</h1>
              <p className="text-xs text-stone-500 font-serif italic">{t("appSubtitle")}</p>
            </div>
          </div>

          {/* Nav items */}
          <nav className="hidden md:flex space-x-8 text-xs uppercase tracking-wider font-medium text-[#2D2926]">
            <button
              onClick={() => setActiveTab("collection")}
              className={`hover:text-brand-gold transition-colors py-1 relative cursor-pointer ${activeTab === "collection" ? "text-brand-ink font-semibold" : ""}`}
            >
              {t("navCollection")}
              {activeTab === "collection" && <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />}
            </button>
            <button
              onClick={() => setActiveTab("studio")}
              className={`hover:text-brand-gold transition-colors py-1 relative cursor-pointer ${activeTab === "studio" ? "text-brand-ink font-semibold" : ""}`}
            >
              {t("navStudio")}
              {activeTab === "studio" && <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />}
            </button>
            <button
              onClick={() => setActiveTab("sommelier")}
              className={`hover:text-brand-gold transition-colors py-1 relative cursor-pointer ${activeTab === "sommelier" ? "text-brand-ink font-semibold" : ""}`}
            >
              {t("navSommelier")}
              {activeTab === "sommelier" && <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />}
            </button>
            <button
              onClick={() => setActiveTab("story")}
              className={`hover:text-brand-gold transition-colors py-1 relative cursor-pointer ${activeTab === "story" ? "text-brand-ink font-semibold" : ""}`}
            >
              {t("navOrigins")}
              {activeTab === "story" && <motion.div layoutId="navIndicator" className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-gold" />}
            </button>
          </nav>

          {/* Cart trigger button and Language Selection */}
          <div className="flex items-center space-x-3">
            {/* Language Selection Select Menu */}
            <div className="relative">
              <select
                value={currentLang}
                onChange={(e) => setCurrentLang(e.target.value as any)}
                className="appearance-none bg-white/70 border border-brand-brown/50 hover:border-brand-gold rounded-full px-3 py-1.5 text-[11px] font-mono tracking-wider font-semibold uppercase text-brand-ink outline-none cursor-pointer pr-6 shadow-sm transition-all text-center"
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.code} value={lang.code} className="normal-case bg-brand-cream text-brand-ink">
                    {lang.name} {lang.dir === "rtl" ? " ✍" : ""}
                  </option>
                ))}
              </select>
              <div className="absolute top-1/2 right-2 -translate-y-1/2 pointer-events-none text-stone-400 text-[10px]">
                ▼
              </div>
            </div>

            {/* Cart Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              className="flex items-center space-x-2 bg-brand-ink hover:bg-brand-ink/90 text-brand-cream px-4 py-2 rounded-full text-xs tracking-wider uppercase transition-all shadow-sm cursor-pointer"
            >
              <ShoppingBag className="w-4 h-4 text-brand-gold" />
              <span className="hidden sm:inline">{t("cartLabel")}</span>
              <span className="bg-brand-gold text-brand-ink rounded-full w-5 h-5 flex items-center justify-center font-bold font-mono text-[10px]">
                {cart.reduce((total, item) => total + item.quantity, 0)}
              </span>
            </button>
          </div>
        </div>
      </header>

      {/* MOBILE TAB DRAWER */}
      <div className="md:hidden flex bg-brand-brown/40 border-b border-brand-brown text-[10px] uppercase tracking-wider justify-around py-3 font-medium text-brand-ink/75">
        <button onClick={() => setActiveTab("collection")} className={`cursor-pointer ${activeTab === "collection" ? "text-brand-gold font-bold" : ""}`}>{t("navCollection")}</button>
        <button onClick={() => setActiveTab("studio")} className={`cursor-pointer ${activeTab === "studio" ? "text-[#C5A059] font-bold" : ""}`}>{t("navStudio")}</button>
        <button onClick={() => setActiveTab("sommelier")} className={`cursor-pointer ${activeTab === "sommelier" ? "text-brand-gold font-bold" : ""}`}>{t("navSommelier")}</button>
        <button onClick={() => setActiveTab("story")} className={`cursor-pointer ${activeTab === "story" ? "text-brand-gold font-bold" : ""}`}>{t("navOrigins")}</button>
      </div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <AnimatePresence mode="wait">
          
          {/* TAB 1: THE COLLECTION & MOOD HEROS */}
          {activeTab === "collection" && (
            <motion.div
              key="collection-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-16"
            >
              {/* LANDING EDITORIAL HERO */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center pt-4">
                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center space-x-2 border border-brand-brown px-3 py-1 rounded-full text-xs text-[#2D2926] bg-brand-brown/20">
                    <Award className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{t("glacierNectarTag")}</span>
                  </div>
                  <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif text-brand-ink leading-tight tracking-tight font-light col-span-12">
                    {t("rarePristineTitle")} <br />
                    <span className="font-normal italic text-brand-gold relative">
                      {t("pearlyWhiteHoney")}
                      <span className="absolute bottom-1 left-0 right-0 h-1.5 bg-brand-gold/10 -z-10 rounded-full" />
                    </span> <br />
                    {t("ofAlaToo")}
                  </h2>
                  <p className="text-sm sm:text-base text-stone-600 max-w-xl leading-relaxed">
                    {t("heroDesc")}
                  </p>
                  <div className="flex flex-wrap gap-4 pt-2">
                    <button
                      onClick={() => {
                        const target = document.getElementById("catalog-section");
                        target?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-[#F9F6F1] px-6 py-3 rounded-md text-xs uppercase tracking-wider font-medium transition-all shadow-sm flex items-center space-x-2 cursor-pointer"
                    >
                      <span>{t("exploreCollection")}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setActiveTab("sommelier")}
                      className="border border-brand-brown hover:border-[#C5A059] bg-white text-stone-800 px-6 py-3 rounded-md text-xs uppercase tracking-wider font-medium transition-all block text-center cursor-pointer"
                    >
                      {t("navSommelier")}
                    </button>
                  </div>
                </div>

                {/* HERO GALLERY */}
                <div className="lg:col-span-5 relative mt-6 lg:mt-0">
                  <div className="relative z-10 rounded-2xl overflow-hidden border border-stone-250 shadow-xl bg-white aspect-[5/4] sm:aspect-video lg:aspect-auto lg:h-[480px]">
                    <img
                      src={HONEY_IMAGES.hero}
                      alt="Ala-Too Mountain Honey Jar resting on high alpine gravel surrounded by delicate sainfoin petals"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* Absolute organic highlight overlay tag */}
                  <div className="absolute -bottom-4 -left-4 z-25 bg-[#2D2926] text-[#F9F6F1] p-5 rounded-lg border border-brand-brown/30 shadow-xl max-w-xs hidden sm:block">
                    <p className="font-mono text-[9px] tracking-widest text-brand-gold uppercase mb-1">PROVENANCE</p>
                    <p className="text-xs leading-relaxed text-stone-300 font-serif">
                      "At-Bashy stands alone: sub-zero winters and pristine volcanic slates create a solid white butter honey with natural almond and warm milk notes."
                    </p>
                  </div>
                  {/* Soft circular luxury design ring element in background */}
                  <div className="absolute -top-16 -right-16 w-64 h-64 border-2 border-brand-gold/20 rounded-full -z-10" />
                </div>
              </div>

              {/* TASTE PREFERENCE FINDING ENGINE */}
              <section className="bg-brand-brown/30 rounded-3xl p-8 border border-brand-brown">
                <div className="max-w-3xl mx-auto space-y-6 text-center">
                  <div className="flex justify-center">
                    <span className="bg-white border border-brand-brown text-brand-gold rounded-full p-2.5 shadow-sm">
                      <Sliders className="w-5 h-5 text-brand-gold" />
                    </span>
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl sm:text-2xl font-serif text-brand-ink">{t("sensoryTitle")}</h3>
                    <p className="text-xs text-stone-600 max-w-lg mx-auto">
                      {t("sensoryDesc")}
                    </p>
                  </div>

                  {/* Sliders panel */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 max-w-2xl mx-auto">
                    <div className="space-y-2 bg-white rounded-xl p-4 shadow-sm border border-brand-brown/50">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#2D2926] font-medium">{t("sweetnessLabel")}</span>
                        <span className="text-brand-gold font-bold">Level {sensoryPref.sweetness}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={sensoryPref.sweetness}
                        onChange={(e) => setSensoryPref(p => ({ ...p, sweetness: parseInt(e.target.value) }))}
                        className="w-full accent-brand-gold"
                      />
                      <div className="flex justify-between text-[9px] text-[#2D2926]/70 font-mono">
                        <span>Low Acid</span>
                        <span>Sweet Nectar</span>
                      </div>
                    </div>

                    <div className="space-y-2 bg-white rounded-xl p-4 shadow-sm border border-brand-brown/50">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#2D2926] font-medium">{t("creaminessLabel")}</span>
                        <span className="text-brand-gold font-bold">Level {sensoryPref.creaminess}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={sensoryPref.creaminess}
                        onChange={(e) => setSensoryPref(p => ({ ...p, creaminess: parseInt(e.target.value) }))}
                        className="w-full accent-brand-gold"
                      />
                      <div className="flex justify-between text-[9px] text-[#2D2926]/70 font-mono">
                        <span>Fluid</span>
                        <span>Buttery Solid</span>
                      </div>
                    </div>

                    <div className="space-y-2 bg-white rounded-xl p-4 shadow-sm border border-brand-brown/50">
                      <div className="flex justify-between text-xs font-mono">
                        <span className="text-[#2D2926] font-medium">{t("aromaLabel")}</span>
                        <span className="text-brand-gold font-bold">Level {sensoryPref.aromaIntensity}</span>
                      </div>
                      <input
                        type="range"
                        min="1"
                        max="5"
                        value={sensoryPref.aromaIntensity}
                        onChange={(e) => setSensoryPref(p => ({ ...p, aromaIntensity: parseInt(e.target.value) }))}
                        className="w-full accent-brand-gold"
                      />
                      <div className="flex justify-between text-[9px] text-[#2D2926]/70 font-mono">
                        <span>Subtle</span>
                        <span>Highly Aromatic</span>
                      </div>
                    </div>
                  </div>

                  {/* Suggestion Result */}
                  {suggestedProduct && (
                    <motion.div
                      layout
                      className="bg-white rounded-2xl p-5 border border-brand-gold/40 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 max-w-xl mx-auto pt-3 mt-4"
                    >
                      <div className="flex items-center space-x-3 text-left">
                        <img
                          src={suggestedProduct.image}
                          alt={suggestedProduct.name}
                          referrerPolicy="no-referrer"
                          className="w-12 h-12 rounded-lg object-cover border border-brand-brown/40"
                        />
                        <div>
                          <p className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">{t("suggestedProductTitle")}</p>
                          <h4 className="text-sm font-semibold text-brand-ink">{suggestedProduct.name}</h4>
                          <p className="text-xs text-stone-500 italic">{suggestedProduct.subName}</p>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm font-semibold tracking-tight text-brand-ink">${suggestedProduct.price}</span>
                        <button
                          onClick={() => addProductToCart(suggestedProduct)}
                          className="bg-brand-ink text-white hover:bg-brand-gold hover:text-[#F9F6F1] transition-all px-4 py-2 rounded-lg text-xs font-medium uppercase tracking-wider"
                        >
                          Add to Bag
                        </button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </section>

              {/* MAIN PRODUCT CATALOGUE */}
              <div id="catalog-section" className="space-y-8">
                <div className="text-center pt-2">
                  <p className="text-xs font-mono tracking-wider text-brand-gold uppercase font-semibold">THE RARE HARVEST</p>
                  <h3 className="text-3xl font-serif text-brand-ink mt-1">Sainfoin & High-Altitude Varieties</h3>
                  <div className="h-0.5 w-12 bg-brand-gold mx-auto mt-3" />
                </div>

                {/* Honey Origin Category Filter Selector */}
                <div id="catalog-origin-filter" className="flex justify-center flex-wrap gap-2 md:gap-3 max-w-xl mx-auto pt-1 pb-4">
                  {[
                    {
                      id: "all",
                      label: {
                        en: "All Varieties",
                        es: "Todas las Variedades",
                        ru: "Все Сорта",
                        ar: "جميع الأصناف",
                        ur: "تمام اقسام"
                      }
                    },
                    {
                      id: "kyrgyz",
                      label: {
                        en: "Kyrgyz Honey (Default)",
                        es: "Miel de Kirguistán (Predeterminada)",
                        ru: "Киргизский Мед (По умолчанию)",
                        ar: "العسل الكيرغيزي (الافتراضي)",
                        ur: "کرغیز شہد (ڈیفالٹ)"
                      }
                    },
                    {
                      id: "yemeni",
                      label: {
                        en: "Yemeni Honey",
                        es: "Miel de Yemen",
                        ru: "Йеменский Мед",
                        ar: "العسل اليمني",
                        ur: "یمنی شہد"
                      }
                    }
                  ].map((filterTab) => {
                    const labelText = filterTab.label[currentLang] || filterTab.label["en"];
                    const isActive = catalogFilter === filterTab.id;
                    return (
                      <button
                        id={`filter-tab-${filterTab.id}`}
                        key={filterTab.id}
                        onClick={() => setCatalogFilter(filterTab.id as any)}
                        className={`px-4.5 py-2 text-xs font-mono tracking-wider uppercase rounded-full border transition-all duration-300 cursor-pointer ${
                          isActive
                            ? "bg-[#2D2926] text-[#F9F6F1] border-brand-gold font-bold shadow-sm"
                            : "bg-white text-stone-600 border-stone-200 hover:border-brand-gold hover:text-brand-ink"
                        }`}
                      >
                        {labelText}
                      </button>
                    );
                  })}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {localizedProducts
                    .filter((product) => {
                      if (catalogFilter === "kyrgyz") return product.id !== "yemeni-sidr";
                      if (catalogFilter === "yemeni") return product.id === "yemeni-sidr";
                      return true;
                    })
                    .map((product) => (
                    <motion.div
                      key={product.id}
                      className="bg-white rounded-2xl border border-brand-brown overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      {/* Product card visual */}
                      <div className="h-56 relative overflow-hidden bg-brand-cream cursor-pointer" onClick={() => setSelectedProduct(product)}>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute top-3 left-3 bg-brand-ink/80 backdrop-blur-md text-[#FCFAF7] text-[10px] tracking-wider uppercase py-1 px-2.5 rounded-full border border-brand-brown/30">
                          {product.altitude}
                        </div>
                      </div>

                      {/* Details content */}
                      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[10px] font-mono tracking-wider text-stone-500 uppercase">{product.botanySource.split(" (")[0]}</span>
                            <div className="flex items-center text-brand-gold text-xs">
                              <Star className="w-3.5 h-3.5 fill-current" />
                              <span className="font-semibold ml-0.5 font-mono">{product.rating}</span>
                            </div>
                          </div>
                          
                          <h4
                            className="text-lg font-medium text-brand-ink hover:text-brand-gold transition-colors cursor-pointer"
                            onClick={() => setSelectedProduct(product)}
                          >
                            {product.name}
                          </h4>
                          <p className="text-xs text-stone-500 italic font-serif">{product.subName}</p>
                          <p className="text-xs text-[#5D5B56] leading-relaxed line-clamp-3 pt-1">
                            {product.description}
                          </p>
                        </div>

                        {/* Sensory Profiles Bar graph representation */}
                        <div className="border-t border-brand-brown/60 pt-3 space-y-2">
                          <p className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase">SENSORY BALANCES</p>
                          <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[10px] text-[#2D2926] bg-brand-cream/40 p-2.5 rounded-lg border border-brand-brown/40">
                            <div className="flex items-center justify-between">
                              <span>Acidity:</span>
                              <span className="font-serif font-semibold">{product.sensoryProfile.sweetness}/5</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Creamy:</span>
                              <span className="font-serif font-semibold">{product.sensoryProfile.creaminess}/5</span>
                            </div>
                            <div className="col-span-2 flex flex-wrap gap-1 mt-1.5 border-t border-brand-brown/30 pt-1.5">
                              {product.sensoryProfile.tastingNotes.slice(0, 3).map((note, index) => (
                                <span key={index} className="text-[9px] bg-white border border-brand-brown/40 rounded px-1.5 text-[#2D2926]">
                                  {note}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Card bottom actions */}
                        <div className="pt-2 flex items-center justify-between">
                          <span className="text-xl font-semibold text-brand-ink font-serif">${product.price}</span>
                          <div className="flex space-x-2">
                            <button
                              onClick={() => setSelectedProduct(product)}
                              className="border border-brand-brown hover:border-brand-gold text-stone-700 p-2.5 rounded-lg text-xs uppercase tracking-wider font-semibold"
                              title="Details"
                            >
                              <Info className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => addProductToCart(product)}
                              className="bg-[#2D2926] hover:bg-brand-gold text-[#FCFAF7] hover:text-[#2D2926] px-4 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all"
                            >
                              Add to Bag
                            </button>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* REVIEWS TESTIMONY SECTION */}
              <section className="border-t border-brand-brown pt-12">
                <div className="max-w-4xl mx-auto space-y-8">
                  <div className="text-center space-y-1">
                    <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">GLOBAL APPRAISAL</p>
                    <h3 className="text-2xl font-serif text-brand-ink">Connoisseur Testimony</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {localizedReviews.map((rev) => (
                      <div key={rev.id} className="bg-white p-6 rounded-2xl border border-brand-brown shadow-sm space-y-3 relative">
                        <div className="flex justify-between items-center">
                          <div>
                            <h5 className="text-sm font-semibold text-brand-ink">{rev.author}</h5>
                            <span className="text-[10px] text-stone-400 font-mono">{rev.date}</span>
                          </div>
                          <div className="flex space-x-0.5 text-brand-gold">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                        </div>
                        <p className="text-xs text-stone-600 leading-relaxed font-sans">{rev.message}</p>
                        <div className="flex items-center justify-between pt-1 border-t border-brand-brown/40">
                          <span className="text-[9px] font-semibold text-stone-400 uppercase tracking-wider">
                            Verified Beneficiary
                          </span>
                          <span className="text-[10px] font-mono text-brand-gold bg-brand-cream border border-brand-brown/40 px-1.5 py-0.5 rounded">
                            {localizedProducts.find(p => p.id === rev.varietyId)?.name.split(" ")[1]} Variety
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {/* TAB 2: ARTISANAL JAR CUSTOMIZER */}
          {activeTab === "studio" && (
            <motion.div
              key="studio-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="text-center max-w-xl mx-auto space-y-2">
                <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">CO-CREATION STUDIO</p>
                <h3 className="text-3xl font-serif text-[#2D2926]">Artisanal Jar Customizer</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Design a personal treasure. Select a size, nominate your glacier variety, accessorize with raw elements, and dictate a message to be scorched down by calligraphy.
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Visualizer Panel (Left 5 cols) */}
                <div className="lg:col-span-5 bg-[#2D2926] text-stone-200 rounded-3xl p-6 border border-brand-brown/40 shadow-xl space-y-6 lg:sticky lg:top-24">
                  <div className="text-center py-2 border-b border-brand-brown/20">
                    <p className="text-[9px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">LIVE CALLIGRAPHY PREVIEW</p>
                    <p className="text-xs text-stone-400 font-serif italic mt-0.5">Mock representation of hand-stamped wax custom jar</p>
                  </div>

                  {/* 3D-like Mock representation of jar details */}
                  <div className="h-64 rounded-2xl bg-brand-ink border border-white/5 flex flex-col items-center justify-center relative overflow-hidden p-6 text-center">
                    {/* Atmospheric warm backglow */}
                    <div className="absolute w-44 h-44 bg-[#C5A059]/10 rounded-full blur-2xl" />
                    
                    {/* Glass Jar Mock Vector Layout */}
                    <div className="relative z-10 space-y-4">
                      {/* Wax Seal Overlay Graphic representation */}
                      {customJar.packaging === "linen_wax" && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-800 w-8 h-8 rounded-full flex items-center justify-center border border-red-900 shadow-md transform rotate-12">
                          <span className="text-[#E5DACE] font-serif text-[10px] font-semibold">AS</span>
                        </div>
                      )}

                      {/* Nomadic Leather Strap Element */}
                      {customJar.nomadicCharm && (
                        <div className="absolute top-8 left-[30%] right-[30%] h-1 bg-[#856545] border-t border-b border-brand-ink z-20 flex items-center justify-center">
                          <span className="w-2.5 h-2.5 bg-yellow-900 rounded-full" />
                        </div>
                      )}

                      {/* Glass Body representation based on sizing */}
                      <div className={`mx-auto border-2 border-white/20 bg-white/5 backdrop-blur-sm rounded-xl relative transition-all duration-300 shadow-2xl flex flex-col justify-end p-2 ${
                        customJar.size === "250g" ? "w-28 h-28" :
                        customJar.size === "500g" ? "w-36 h-36" : "w-40 h-40 bg-orange-50/5 border-amber-300/30 rounded-2xl"
                      }`}>
                        {/* Golden honey content level */}
                        <div className="bg-[#C5A059]/40 border-t border-[#E5DACE]/70 rounded-b-lg absolute inset-x-0 bottom-0 h-3/4 flex flex-col items-center justify-center p-1 text-center font-serif text-[9px] text-[#FCFAF7]">
                          <span className="font-mono tracking-wider uppercase font-bold text-[8px] text-[#E5DACE]">
                            {customJar.size.toUpperCase().replace("_", " ")}
                          </span>
                          <span className="line-clamp-1 italic px-1 font-sans">
                            {localizedProducts.find(p => p.id === customJar.varietyId)?.name.split(" ")[1]}
                          </span>
                        </div>
                      </div>

                      {/* Display wood spoon underneath or alongside */}
                      {customJar.dipperType !== "none" && (
                        <div className="inline-flex items-center space-x-1 bg-[#2D2926] border border-white/5 px-2 py-0.5 rounded text-[9px]" style={{ color: '#E5DACE' }}>
                          <span className="font-mono uppercase font-semibold">Included Accessories:</span>
                          <span className="lowercase italic">{customJar.dipperType.replace("_", " ")} tool</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* CALLOGRAPHY TAG WRITING BOX */}
                  <div className="bg-orange-50/5 rounded-2xl p-4 border border-brand-brown/20 space-y-2 text-left">
                    <div className="flex items-center space-x-2 text-[#E5DACE] text-[10px] font-mono tracking-wider uppercase font-bold">
                      <Feather className="w-3.5 h-3.5" />
                      <span>Scribbled Parchment Inlay</span>
                    </div>
                    <div className="bg-[#FAF9F1] text-brand-ink p-4 rounded-lg shadow-inner border border-brand-brown/40 font-serif italic text-xs leading-relaxed text-center py-6">
                      "{customJar.giftTagMessage || "Write your customized message..."}"
                      <div className="mt-4 flex items-center justify-center space-x-2 text-[9px] font-mono tracking-widest text-[#C5A059] not-italic uppercase font-semibold">
                        <span>Handburned Alpine Tag</span>
                      </div>
                    </div>
                  </div>

                  {/* PRICE SUMMARY */}
                  <div className="flex items-center justify-between pt-4 border-t border-brand-brown/20">
                    <div>
                      <p className="text-[10px] uppercase font-mono tracking-widest text-[#E5DACE]">BOUTIQUE ESTIMATION</p>
                      <h4 className="text-2xl font-serif text-[#F9F6F1]">${customJarPrice}</h4>
                    </div>
                    <button
                      onClick={addCustomJarToCart}
                      className="bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold px-5 py-3 rounded-md text-xs uppercase tracking-wider transition-all cursor-pointer"
                    >
                      Build & Bag Jar
                    </button>
                  </div>
                </div>

                {/* Configuration Options Panel (Right 7 cols) */}
                <div className="lg:col-span-7 bg-white rounded-3xl p-6 border border-brand-brown shadow-sm space-y-8 text-left">
                  
                  {/* STEP 1: Select Variety */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold block">
                      1. Mountain Variety Core
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {INSTALLED_HONEY_PRODUCTS.map((prod) => (
                        <div
                          key={prod.id}
                          onClick={() => setCustomJar(c => ({ ...c, varietyId: prod.id }))}
                          className={`border p-4 rounded-xl cursor-pointer transition-all ${
                            customJar.varietyId === prod.id
                              ? "border-[#C5A059] bg-brand-cream ring-1 ring-[#C5A059]"
                              : "border-brand-brown hover:border-brand-gold"
                          }`}
                        >
                          <h5 className="text-xs font-semibold text-[#2D2926] font-mono">{prod.name.split(" ")[1]} Nectar</h5>
                          <p className="text-[10px] text-brand-gold font-mono mt-0.5">{prod.altitude}</p>
                          <p className="text-[10px] text-stone-500 mt-1 leading-snug line-clamp-2">{prod.subName}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STEP 2: Choose Sizing */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold block">
                      2. Vessel Architecture
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div
                        onClick={() => setCustomJar(c => ({ ...c, size: "250g" }))}
                        className={`border p-4 rounded-xl cursor-pointer transition-all ${
                          customJar.size === "250g" ? "border-brand-gold bg-brand-cream ring-1 ring-brand-gold" : "border-brand-brown hover:border-brand-gold"
                        }`}
                      >
                        <h5 className="text-xs font-semibold text-brand-ink font-mono">250g Petite Flask</h5>
                        <p className="text-[10px] text-stone-500 mt-1 leading-snug">Elegant low-capacity glass flask with metal seal. Excellent sampler.</p>
                        <span className="text-xs font-semibold font-mono block mt-2 text-brand-gold">+$0</span>
                      </div>
                      <div
                        onClick={() => setCustomJar(c => ({ ...c, size: "500g" }))}
                        className={`border p-4 rounded-xl cursor-pointer transition-all ${
                          customJar.size === "500g" ? "border-brand-gold bg-brand-cream ring-1 ring-brand-gold" : "border-brand-brown hover:border-brand-gold"
                        }`}
                      >
                        <h5 className="text-xs font-semibold text-brand-ink font-mono">500g Heavy Glass</h5>
                        <p className="text-[10px] text-stone-500 mt-1 leading-snug">Heavy bottom faceted luxury flask with wooden stopper overlay.</p>
                        <span className="text-xs font-semibold font-mono block mt-2 text-brand-gold">+$20</span>
                      </div>
                      <div
                        onClick={() => setCustomJar(c => ({ ...c, size: "1000g_ceramic" }))}
                        className={`border p-4 rounded-xl cursor-pointer transition-all ${
                          customJar.size === "1000g_ceramic" ? "border-brand-gold bg-brand-cream ring-1 ring-brand-gold" : "border-brand-brown hover:border-brand-gold"
                        }`}
                      >
                        <h5 className="text-xs font-semibold text-brand-ink font-mono">1kg Ceramic Crock</h5>
                        <p className="text-[10px] text-stone-500 mt-1 leading-snug">Handmade clay crock baked with thermal-lining to preserve raw honey enzymes.</p>
                        <span className="text-xs font-semibold font-mono block mt-2 text-brand-gold">+$45</span>
                      </div>
                    </div>
                  </div>

                  {/* STEP 3: Dipper and Accessories */}
                  <div className="space-y-3">
                    <label className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold block">
                      3. Serving Utensils
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {[
                        { id: "none", name: "No Utensil", cost: 0, desc: "Jar alone" },
                        { id: "olivewood", name: "Olivewood Dipper", cost: 8, desc: "Hand-turned" },
                        { id: "brass_leaf", name: "Brass Leaf Spoon", cost: 12, desc: "Gilded leaf accent" },
                        { id: "nomadic_birch", name: "Flat Birch Scraper", cost: 10, desc: "Nomadic traditional" }
                      ].map((dip) => (
                        <div
                          key={dip.id}
                          onClick={() => setCustomJar(c => ({ ...c, dipperType: dip.id as any }))}
                          className={`border p-3 rounded-xl cursor-pointer transition-all ${
                            customJar.dipperType === dip.id ? "border-brand-gold bg-brand-cream ring-1 ring-brand-gold" : "border-brand-brown hover:border-brand-gold"
                          }`}
                        >
                          <h5 className="text-[11px] font-semibold text-brand-ink font-mono">{dip.name}</h5>
                          <p className="text-[9px] text-stone-550 italic leading-snug mt-0.5">{dip.desc}</p>
                          <span className="text-[10px] font-mono block mt-1.5 font-bold text-brand-gold">
                            {dip.cost === 0 ? "Included" : `+$${dip.cost}`}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* STEP 4: Specialty Wrap & Ribbon styles */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                       <label className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold block">
                        4. Botanical Wrap
                      </label>
                      <select
                        value={customJar.packaging}
                        onChange={(e) => setCustomJar(c => ({ ...c, packaging: e.target.value as any }))}
                        className="w-full border border-brand-brown rounded-lg p-2.5 text-xs bg-brand-cream"
                      >
                        <option value="linen_wax">Raw Linen Wrap with Melted Beeswax Seal</option>
                        <option value="scorched_crate">Scorched Siberian Pine Wooden Crate (+$15)</option>
                        <option value="minimalist_gold">Minimalist Gold Leaf Paper Envelope (+$10)</option>
                      </select>
                    </div>

                    <div className="space-y-4">
                      <div className="flex items-center justify-between pt-4">
                        <div>
                          <span className="text-xs font-semibold text-brand-ink block font-mono">Include Nomadic Leather Charm</span>
                          <span className="text-[10px] text-stone-500">Traditional hand-stamped leather thread overlay (+ $5)</span>
                        </div>
                        <input
                          type="checkbox"
                          checked={customJar.nomadicCharm}
                          onChange={(e) => setCustomJar(c => ({ ...c, nomadicCharm: e.target.checked }))}
                          className="w-4 h-4 accent-brand-gold"
                        />
                      </div>
                    </div>
                  </div>

                  {/* STEP 5: Parchment Text */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold block">
                      5. Dictate Calligraphy Message on Tag
                    </label>
                    <input
                      type="text"
                      maxLength={65}
                      value={customJar.giftTagMessage}
                      onChange={(e) => setCustomJar(c => ({ ...c, giftTagMessage: e.target.value }))}
                      placeholder="Type a thoughtful statement down..."
                      className="w-full border border-brand-brown focus:border-brand-gold focus:ring-1 focus:ring-brand-gold rounded-lg p-3 text-xs bg-brand-cream outline-none"
                    />
                    <div className="flex justify-between text-[9px] text-stone-400 font-mono">
                      <span>Maximum character limit is 65</span>
                      <span>{customJar.giftTagMessage.length}/65 characters</span>
                    </div>
                  </div>

                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 3: GEMINI HONEY SOMMELIER */}
          {activeTab === "sommelier" && (
            <motion.div
              key="sommelier-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12"
            >
              <div className="text-center max-w-xl mx-auto space-y-2">
                <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">MULTIMODAL GASTRONOMY CO-PILOT</p>
                <h3 className="text-3xl font-serif text-[#2D2926]">Bespoke Pairings with Gemini AI</h3>
                <p className="text-xs text-stone-600 leading-relaxed">
                  Query our server-side Gemini Intelligence to formulate molecular level gastronomic unions. 
                  Select a predefined pairing below, or upload a photo of your culinary platter for custom visual analysis!
                </p>
              </div>

              {/* Presets and manual fields */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                
                {/* Inputs & Uploader panel (Left 6 cols) */}
                <form onSubmit={handleConsultSommelier} className="lg:col-span-6 bg-white rounded-3xl p-6 border border-brand-brown shadow-sm space-y-6 text-left">
                  <div className="space-y-2">
                    <p className="text-xs font-mono tracking-widest text-brand-gold uppercase font-bold">1. Select Preset Gastronomy or Type Custom</p>
                    <div className="grid grid-cols-2 gap-2">
                      {localizedPairings.map((preset, idx) => (
                        <div
                          key={idx}
                          onClick={() => {
                            setSelectedPresetIndex(idx);
                            setCustomPairingInput("");
                          }}
                          className={`p-3 rounded-lg cursor-pointer border text-left transition-all ${
                            selectedPresetIndex === idx
                              ? "border-brand-gold bg-brand-cream"
                              : "border-brand-brown/40 hover:border-brand-gold/70 bg-brand-cream/10"
                          }`}
                        >
                          <p className="text-[11px] font-semibold text-[#2D2926] font-mono">{preset.name}</p>
                          <p className="text-[9px] text-stone-500 mt-0.5 capitalize">{preset.type} pairing</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Manual Companion Input */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-stone-555">Or Write Your Custom Dining Companion</label>
                    <input
                      type="text"
                      value={customPairingInput}
                      onChange={(e) => {
                        setCustomPairingInput(e.target.value);
                        setSelectedPresetIndex(null);
                      }}
                      placeholder="e.g. Sharp English Cheddar, hot cinnamon baked pears, or dark pu-erh tea..."
                      className="w-full border border-brand-brown focus:border-brand-gold rounded-lg p-2.5 text-xs bg-brand-cream outline-none font-mono"
                    />
                  </div>

                  {/* Select Honey Base variety */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-[#C5A059] font-bold">2. Nominated Honey Variety</label>
                    <select
                      value={sommelierHoneyVariety}
                      onChange={(e) => setSommelierHoneyVariety(e.target.value)}
                      className="w-full border border-brand-brown rounded-lg p-2.5 text-xs bg-brand-cream"
                    >
                      {localizedProducts.map((p) => (
                        <option key={p.id} value={p.id}>
                          {p.name} ({p.altitude})
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Context / Dining Occasion */}
                  <div className="space-y-1">
                    <label className="text-[10px] uppercase font-mono tracking-wider text-stone-500">3. Context / Taste Predilection (Optional)</label>
                    <input
                      type="text"
                      value={sommelierContext}
                      onChange={(e) => setSommelierContext(e.target.value)}
                      placeholder="e.g. Romantic twilight dining, summer picnic, sore throat wellness aid..."
                      className="w-full border border-brand-brown rounded-lg p-2.5 text-xs bg-brand-cream outline-none"
                    />
                  </div>

                  {/* DRAG AND DROP FILE UPLOAD AREA */}
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <label className="text-[10px] uppercase font-mono tracking-wider text-[#C5A059] font-bold block">
                        4. Visual Analysis (Optional Upload)
                      </label>
                      {uploadedBase64 && (
                        <button
                          type="button"
                          onClick={clearUploadedImage}
                          className="text-[9px] font-mono tracking-widest text-red-650 uppercase flex items-center space-x-1 cursor-pointer"
                        >
                          <X className="w-3" />
                          <span>Clear Photo</span>
                        </button>
                      )}
                    </div>
                    
                    {/* DROPZONE */}
                    <div
                      onDragOver={handleDragOver}
                      onDragLeave={handleDragLeave}
                      onDrop={handleDrop}
                      onClick={triggerFileSelect}
                      className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center space-y-2 min-h-[120px] ${
                        isDragging ? "border-brand-gold bg-brand-cream" : "border-brand-brown hover:border-brand-gold/60"
                      }`}
                    >
                      <input
                        type="file"
                        ref={fileInputRef}
                        onChange={handleFileSelect}
                        accept="image/*"
                        className="hidden"
                      />

                      {uploadedBase64 ? (
                        <div className="flex items-center space-x-3 text-left">
                          <img
                            src={uploadedBase64}
                            alt="Preview companion"
                            className="w-14 h-14 rounded-lg object-cover border border-brand-brown"
                            referrerPolicy="no-referrer"
                          />
                          <div>
                            <p className="text-xs font-semibold text-brand-ink font-mono">Image Attached Successfully</p>
                            <p className="text-[10px] text-stone-500 italic">Gemini will evaluate colors and texture profiles</p>
                          </div>
                        </div>
                      ) : (
                        <>
                          <div className="bg-brand-cream/60 p-2 rounded-full border border-brand-brown/40 inline-flex">
                            <Camera className="w-4 h-4 text-brand-gold" />
                          </div>
                          <div>
                            <p className="text-xs text-stone-700">
                              <span className="font-semibold text-stone-900">Drag & drop photo</span> or <span className="text-brand-gold font-semibold">browse files</span>
                            </p>
                            <p className="text-[9px] text-stone-400 mt-0.5">Supports PNG, JPG, or WEBP culinary images</p>
                          </div>
                        </>
                      )}
                    </div>
                  </div>

                  {/* SUBMIT */}
                  <button
                    type="submit"
                    disabled={sommelierLoading}
                    className="w-full bg-[#C5A059] hover:bg-brand-gold/90 text-[#F9F6F1] p-3.5 rounded-lg text-xs font-bold uppercase tracking-wider transition-all shadow-sm flex items-center justify-center space-x-2 cursor-pointer"
                  >
                    {sommelierLoading ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Analyzing Compound Matrix...</span>
                      </>
                    ) : (
                      <>
                        <Sparkles className="w-4 h-4 text-[#F9F6F1] fill-current" />
                        <span>Consult Premium Honey Sommelier</span>
                      </>
                    )}
                  </button>
                </form>

                {/* Return Result Panel (Right 6 cols) */}
                <div className="lg:col-span-6 space-y-6">
                  
                  {/* LOADING GRAPHICS */}
                  {sommelierLoading && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="bg-[#2D2926] text-[#FAF9F5] rounded-3xl p-8 border border-brand-brown/40 shadow-xl flex flex-col items-center justify-center space-y-4 text-center min-h-[350px]"
                    >
                      <div className="relative">
                        <div className="w-12 h-12 border-2 border-[#C5A059] border-t-transparent rounded-full animate-spin" />
                        <div className="absolute inset-0 flex items-center justify-center text-xs font-serif italic text-brand-gold">
                          At
                        </div>
                      </div>
                      <div className="space-y-1">
                        <p className="text-xs font-mono tracking-widest text-[#E5DACE] uppercase font-bold">SOMMELIER INTELLECT ACTIVE</p>
                        <p className="text-sm font-serif text-stone-300 italic animate-pulse max-w-sm mx-auto">
                          "{sommelierStatusText}"
                        </p>
                      </div>
                    </motion.div>
                  )}

                  {/* ACTUAL VERDICT PRINT SCREEN */}
                  {!sommelierLoading && sommelierVerdict && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="bg-[#FAF9F1] border-2 border-brand-gold rounded-3xl p-6 shadow-md text-left text-[#2D2926] relative overflow-hidden"
                    >
                      {/* Premium watermark crest overlay */}
                      <div className="absolute top-4 right-4 bg-white rounded-full w-14 h-14 flex items-center justify-center text-xs text-brand-gold border border-brand-brown/40 font-mono uppercase font-black font-serif">
                        {sommelierVerdict.compatibilityScore}/10
                      </div>

                      <div className="space-y-4">
                        <div>
                          <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold block">GASTRONOMIC UNION CERTIFICATE</span>
                          <h4 className="text-xl font-serif text-[#2D2926] capitalize">{sommelierVerdict.pairingName}</h4>
                          <p className="text-xs text-stone-500 leading-snug italic font-serif">paired with {sommelierVerdict.honeyVariety}</p>
                        </div>

                        {/* Sensory Notes */}
                        <div className="bg-white p-4 rounded-xl border border-brand-brown/30 space-y-1.5">
                          <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono">Sensory Synergy Summary</span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans">{sommelierVerdict.sensoryNotes}</p>
                        </div>

                        {/* Sommelier Detailed Verdict */}
                        <div className="space-y-1">
                          <span className="text-[9px] font-bold text-brand-gold uppercase tracking-widest font-mono block">Chemical & Flavor Deconstruction</span>
                          <p className="text-xs text-stone-700 leading-relaxed font-sans font-medium">{sommelierVerdict.sommelierVerdict}</p>
                        </div>

                        {/* Traditional Serving Ceremony (3 Steps) */}
                        <div className="border-t border-brand-brown/40 pt-4 space-y-3 bg-white p-4 rounded-xl">
                          <span className="text-[9px] font-bold text-stone-400 uppercase tracking-widest font-mono block">The Boutique Serving Ceremony</span>
                          <div className="text-xs text-stone-700 font-sans space-y-2 whitespace-pre-line leading-relaxed">
                            {sommelierVerdict.servingCeremony}
                          </div>
                        </div>

                        <div className="flex items-center justify-between text-[10px] font-mono uppercase text-stone-400 pt-2 border-t border-brand-brown/40">
                          <span>Ideal Honey Temp: <strong className="text-stone-700 font-bold">{sommelierVerdict.recommendedHoneyTemperature}</strong></span>
                          <span>Checked at {sommelierVerdict.timestamp}</span>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* EMPTY STATE */}
                  {!sommelierLoading && !sommelierVerdict && (
                    <div className="bg-brand-cream/40 rounded-3xl p-8 border border-brand-brown shadow-sm text-center min-h-[350px] flex flex-col items-center justify-center space-y-3">
                      <HelpCircle className="w-10 h-10 text-[#C5A059]" />
                      <div>
                        <h4 className="text-sm font-semibold text-brand-ink font-mono">Sommelier Pending Consultation</h4>
                        <p className="text-xs text-stone-500 max-w-xs mx-auto mt-1">
                          Populate the gastronomic matrix on the left and submit to let Google Gemini assemble an elite culinary report!
                        </p>
                      </div>
                    </div>
                  )}

                  {/* PAIRINGS HISTORY STACK (PERSISTENT local state drawer) */}
                  {pairingHistory.length > 0 && (
                    <div className="space-y-3 text-left">
                      <p className="text-xs font-mono tracking-widest text-[#2D2926]/70 uppercase font-semibold">Tasting Log Archives</p>
                      <div className="space-y-2">
                        {pairingHistory.map((hist) => (
                          <div
                            key={hist.id}
                            onClick={() => setSommelierVerdict(hist)}
                            className="bg-white p-3 rounded-xl border border-brand-brown hover:border-brand-gold hover:shadow-sm cursor-pointer transition-all flex justify-between items-center"
                          >
                            <div>
                              <h5 className="text-xs font-semibold text-brand-ink font-mono capitalize">{hist.pairingName}</h5>
                              <p className="text-[10px] text-stone-400 font-serif italic mt-0.5">Base: {hist.honeyVariety}</p>
                            </div>
                            <span className="bg-brand-cream text-[#2D2926] border border-brand-brown rounded px-2 py-0.5 text-[10px] font-mono font-bold">
                              {hist.compatibilityScore}/10 Match
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                </div>

              </div>
            </motion.div>
          )}

          {/* TAB 4: PRISTINE SOURE STORY */}
          {activeTab === "story" && (
            <motion.div
              key="story-tab"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4 }}
              className="space-y-12 max-w-4xl mx-auto"
            >
              {/* BRAND MISSION HEADING */}
              <div className="text-center space-y-2">
                <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">provenance</p>
                <h3 className="text-3xl font-serif text-brand-ink">A Centenary Cryosphere Legacy</h3>
                <p className="text-xs text-stone-600 max-w-lg mx-auto">
                  Our colonies operate in high altitude valleys far from industrial pollutants, producing solid white honey powered by high quality mountain waters.
                </p>
                <div className="h-0.5 w-12 bg-brand-gold mx-auto mt-4" />
              </div>

              {/* HIGH PRECISION LANDSCAPE */}
              <div className="rounded-3xl border border-brand-brown overflow-hidden bg-white shadow-sm flex flex-col md:flex-row items-stretch">
                <div className="md:w-1/2 min-h-[300px] relative">
                  <img
                    src={HONEY_IMAGES.apiary}
                    alt="Beekeeping cedar hives inside blooming mountain flower fields surrounded by snowcapped Ala-Too mountains"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {/* Glacier Coordinates annotation */}
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-brand-ink/20 to-transparent flex flex-col justify-end p-6 text-[#FCFAF7]">
                    <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider text-brand-cream uppercase font-bold">
                      <MapPin className="w-3.5 h-3.5 text-brand-gold" />
                      <span>At-Bashy Valley, Kyrgyzstan</span>
                    </div>
                    <p className="text-xs mt-0.5 text-stone-300">Elevation: 2,240m Above Sea Level</p>
                  </div>
                </div>

                <div className="md:w-1/2 p-8 flex flex-col justify-center space-y-6 text-left">
                  <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">THE WILD BOTANY ACCENTS</span>
                  <h4 className="text-xl font-serif text-brand-ink leading-snug">The Sainfoin Nectar Window</h4>
                  
                  <div className="space-y-4 text-xs text-stone-600 leading-relaxed">
                    <p>
                      Sainfoin (Onobrychis) is a wild alpine legume with striking pink blossoms that flourishes during a brief three-week period in late June. 
                      Because high-altitude soil is volcanic and glacial, the plants are forced to concentrate natural sugars and amino-essential nutrients.
                    </p>
                    <p>
                      The result is an ultra-pure white nectar. When cold-cleansed and left to naturally crystallized in chilly caves, it transforms completely into a 
                      snow-colored, buttery spread which represents one of the world's most luxurious raw food items.
                    </p>
                  </div>

                  <div className="pt-2">
                    <button
                      onClick={() => setActiveTab("collection")}
                      className="inline-flex items-center space-x-2 text-xs font-mono tracking-wider font-semibold text-brand-gold hover:text-brand-gold/80 cursor-pointer"
                    >
                      <span>Acquire the Harvest</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </div>

              {/* NOMADIC Heritage grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 text-left">
                {localizedHeritageSlides.map((slide, idx) => (
                  <div key={idx} className="bg-white p-6 rounded-2xl border border-brand-brown shadow-sm space-y-3">
                    <div className="w-9 h-9 rounded-full bg-brand-cream border border-brand-brown/40 flex items-center justify-center text-brand-gold">
                      {idx === 0 ? <Globe className="w-4 h-4" /> : idx === 1 ? <Sparkles className="w-4 h-4" /> : <BookOpen className="w-4 h-4" />}
                    </div>
                    <h5 className="text-sm font-semibold text-brand-ink font-mono">{slide.title}</h5>
                    <p className="text-xs text-stone-550 leading-relaxed">{slide.description}</p>
                  </div>
                ))}
              </div>

              {/* DYNAMIC GOOGLE MAP IFRAME SECTION */}
              <div id="origins-geographic-mapping" className="bg-white border-2 border-brand-brown rounded-3xl p-6 md:p-8 shadow-sm space-y-6 text-left">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono tracking-widest text-brand-gold uppercase font-bold">
                      {mapBarLabels[currentLang] || mapBarLabels["en"]}
                    </span>
                    <h4 className="text-xl font-serif text-brand-ink leading-snug">
                      {mapSectionTitles[currentLang] || mapSectionTitles["en"]}
                    </h4>
                  </div>
                  <div className="flex items-center space-x-2 text-xs text-stone-550 font-mono bg-brand-cream/50 px-3 py-1.5 rounded-full border border-brand-brown/40 shrink-0 w-max">
                    <MapPin className="w-3.5 h-3.5 text-brand-gold animate-bounce" />
                    <span>Naryn Province, KG</span>
                  </div>
                </div>

                <p className="text-xs text-stone-600 leading-relaxed max-w-3xl">
                  {apiaryLocationsDesc[currentLang] || apiaryLocationsDesc["en"]}
                </p>

                {/* The Responsive Google Map Frame */}
                <div className="relative w-full h-[360px] md:h-[420px] rounded-2xl overflow-hidden border border-brand-brown shadow-inner bg-stone-100">
                  <iframe
                    id="gmap-provenance-frame"
                    title="Ala-Too High Altitude Apiaries Map"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1544485.4965851493!2d74.19537380963503!3d41.42436815858066!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38927b952b144207%3A0xe7819e688cf188ea!2sAt-Bashy%20district%2C%20Kyrgyzstan!5e0!3m2!1sen!2sus!4v1718715000000!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full grayscale-[10%] contrast-[105%] hover:grayscale-0 transition-all duration-700"
                  ></iframe>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-brand-brown bg-brand-cream/40 mt-24 py-12 text-xs text-stone-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-2">
            <span className="font-semibold text-brand-gold font-mono uppercase tracking-widest text-xs">ALA-TOO BOUTIQUE</span>
            <span className="text-brand-brown">|</span>
            <span className="text-brand-ink/80">Est. 1928, Kyrgyz Alpine Range</span>
          </div>
          <div className="flex space-x-6 flex-wrap gap-y-2 justify-center md:justify-start">
            <button onClick={() => setActiveTab("collection")} className="hover:text-brand-gold transition-colors cursor-pointer">Shop Collection</button>
            <button onClick={() => setActiveTab("studio")} className="hover:text-brand-gold transition-colors cursor-pointer">Bespoke Jar Maker</button>
            <button onClick={() => setActiveTab("sommelier")} className="hover:text-brand-gold transition-colors cursor-pointer">Gastronomy Sommelier</button>
            <button onClick={() => setActiveTab("story")} className="hover:text-brand-gold transition-colors cursor-pointer">Heritage Origins</button>
            <a
              href={`https://wa.me/996500123456?text=${encodeURIComponent(whatsappGreetings[currentLang] || whatsappGreetings["en"])}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#25D366] hover:text-[#20ba56] transition-colors cursor-pointer flex items-center space-x-1 font-semibold"
              title="WhatsApp Live Support"
            >
              <span>WhatsApp Support</span>
              <span className="text-[8px] bg-[#25D366]/10 text-[#25D366] px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">LIVE</span>
            </a>
            <a
              href="https://www.instagram.com/alatoo_honey"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#E1306C] hover:text-[#c12354] transition-colors cursor-pointer flex items-center space-x-1 font-semibold"
              title="Follow our Instagram Journal"
            >
              <span>{instagramButtonLabels[currentLang] || instagramButtonLabels["en"]}</span>
              <span className="text-[8px] bg-[#E1306C]/10 text-[#E1306C] px-1.5 py-0.5 rounded font-mono font-bold tracking-wider">JOURNAL</span>
            </a>
          </div>
          <div className="text-stone-500">
            <p>© 2026 Ala-Too Alpine Honey. Hand-crafted using ancient Kyrgyz beekeeping guides.</p>
          </div>
        </div>
      </footer>

      {/* QUICK VIEW DETAILS MODAL */}
      <AnimatePresence>
        {selectedProduct && (() => {
          const activeProduct = localizedProducts.find(p => p.id === selectedProduct.id) || selectedProduct;
          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              {/* Modal backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProduct(null)}
                className="absolute inset-0 bg-stone-950"
              />

              {/* Modal Body */}
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white border-2 border-brand-gold max-w-2xl w-full rounded-3xl overflow-hidden shadow-2xl relative z-10 text-left flex flex-col md:flex-row items-stretch max-h-[85vh] overflow-y-auto"
              >
                <button
                  onClick={() => setSelectedProduct(null)}
                  className="absolute top-4 right-4 bg-[#2D2926] text-[#FCFAF7] hover:bg-brand-gold rounded-full p-1.5 z-20 transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>

                <div className="md:w-1/2 relative bg-brand-cream min-h-[220px]">
                  <img
                    src={activeProduct.image}
                    alt={activeProduct.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/80 via-transparent to-transparent flex flex-col justify-end p-5 text-[#FCFAF7]">
                    <span className="text-[10px] font-mono tracking-widest text-[#E5DACE] uppercase font-bold">{activeProduct.originLocation}</span>
                    <h4 className="text-lg font-serif">{activeProduct.name}</h4>
                  </div>
                </div>

                <div className="md:w-1/2 p-6 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div>
                      <span className="text-[9px] font-mono tracking-wider bg-brand-cream border border-brand-brown rounded px-2 py-0.5 text-stone-605">
                        Altitude: {activeProduct.altitude}
                      </span>
                      <h5 className="text-xs font-semibold text-brand-ink font-mono mt-2">{activeProduct.botanySource}</h5>
                    </div>
                    
                    <p className="text-xs text-stone-600 leading-relaxed font-sans">{activeProduct.details}</p>
                    
                    {/* Detailed sensory matrix table */}
                    <div className="bg-brand-cream/30 p-3 rounded-xl border border-brand-brown/40 text-xs space-y-1">
                      <p className="text-[9px] font-bold text-brand-gold tracking-wider uppercase font-mono mb-1">Botanical Properties</p>
                      <div className="grid grid-cols-2 gap-y-1 font-sans text-[11px] text-[#2D2926]">
                        <div className="flex justify-between border-b border-brand-brown/30 pb-0.5 pr-2"><span>Sweetness:</span> <strong>3/5</strong></div>
                        <div className="flex justify-between border-b border-brand-brown/30 pb-0.5"><span>Cream:</span> <strong>5/5</strong></div>
                        <div className="flex justify-between border-b border-brand-brown/30 pb-0.5 pr-2"><span>Aura:</span> <strong>Floral</strong></div>
                        <div className="flex justify-between border-b border-brand-brown/30 pb-0.5"><span>Moisture:</span> <strong>&lt;16.5%</strong></div>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-brand-brown">
                    <span className="text-2xl font-serif font-bold text-brand-gold">${activeProduct.price}</span>
                    <button
                      onClick={() => {
                        addProductToCart(activeProduct);
                        setSelectedProduct(null);
                      }}
                      className="bg-brand-ink hover:bg-brand-gold text-white hover:text-brand-ink px-6 py-2.5 rounded-lg text-xs uppercase tracking-wider font-bold transition-all cursor-pointer"
                    >
                      Add to Bag
                    </button>
                  </div>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>

      {/* CARTER SIDEBAR DRAWER (Slide in from right) */}
      <AnimatePresence>
        {isCartOpen && (
          <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Dark overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="absolute inset-0 bg-[#2D2926]"
            />

            {/* Sidebar drawer content */}
            <div className="absolute inset-y-0 right-0 max-w-md w-full pl-6 flex">
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.35 }}
                className="w-full bg-white border-l border-brand-brown shadow-2xl flex flex-col justify-between"
              >
                
                {/* Header */}
                <div className="p-6 border-b border-brand-brown flex items-center justify-between bg-brand-cream">
                  <div className="flex items-center space-x-2">
                    <ShoppingBag className="w-5 h-5 text-brand-gold" />
                    <h3 className="text-sm font-semibold tracking-wider font-mono text-brand-ink uppercase">Artisanal Shopping Bag</h3>
                  </div>
                  <button
                    onClick={() => setIsCartOpen(false)}
                    className="p-1 rounded-full hover:bg-brand-brown/40 text-stone-500 hover:text-brand-ink transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Main scrollable list */}
                <div className="flex-1 overflow-y-auto p-6 space-y-4">
                  {cart.length === 0 ? (
                    <div className="text-center py-16 space-y-3">
                      <div className="w-12 h-12 rounded-full bg-brand-cream flex items-center justify-center mx-auto text-brand-gold/60">
                        <ShoppingBag className="w-6 h-6" />
                      </div>
                      <p className="text-xs text-stone-500 font-mono">Your celestial bag of premium white honey is empty.</p>
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          setActiveTab("collection");
                        }}
                        className="text-xs font-mono tracking-widest text-brand-gold underline uppercase font-bold cursor-pointer hover:text-brand-gold/80"
                      >
                        Browse the collection
                      </button>
                    </div>
                  ) : (
                    cart.map((item) => (
                      <div
                        key={item.id}
                        className="bg-brand-cream/10 p-4 rounded-xl border border-brand-brown flex items-start gap-3 text-left shadow-sm"
                      >
                        {/* Standard photo if standard item */}
                        {item.product?.image && (
                          <img
                            src={item.product.image}
                            alt={item.name}
                            referrerPolicy="no-referrer"
                            className="w-12 h-12 rounded object-cover border border-brand-brown bg-brand-cream/30"
                          />
                        )}

                        {/* Config description if custom built jar */}
                        {item.customConfig && (
                          <div className="w-12 h-12 rounded bg-brand-cream border border-brand-brown/30 flex items-center justify-center text-brand-gold font-serif text-[10px] font-bold">
                            JAR
                          </div>
                        )}

                        <div className="flex-1 space-y-1">
                          <h4 className="text-xs font-semibold leading-snug text-brand-ink font-mono capitalize">{item.name}</h4>
                          <p className="text-[10px] text-stone-500 leading-relaxed italic line-clamp-2">{item.description}</p>
                          
                          <div className="flex items-center justify-between pt-1">
                            {/* Quantity buttons */}
                            <div className="flex items-center space-x-1.5 border border-brand-brown bg-brand-cream/20 rounded px-1.5 py-0.5">
                              <button
                                onClick={() => updateQuantity(item.id, -1)}
                                className="text-stone-500 hover:text-brand-ink text-xs p-0.5 cursor-pointer"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="font-mono text-xs font-semibold text-brand-ink px-1">{item.quantity}</span>
                              <button
                                onClick={() => updateQuantity(item.id, 1)}
                                className="text-stone-500 hover:text-brand-ink text-xs p-0.5 cursor-pointer"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>

                            <div className="flex items-center space-x-3">
                              <span className="text-xs font-bold text-brand-ink font-serif">${item.price * item.quantity}</span>
                              <button
                                onClick={() => removeCartItem(item.id)}
                                className="text-stone-400 hover:text-red-700 p-1 cursor-pointer transition-colors"
                                title="Remove item"
                              >
                                <Trash2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  )}
                </div>

                {/* Footer totals */}
                {cart.length > 0 && (
                  <div className="p-6 bg-brand-cream border-t border-brand-brown space-y-4">
                    {/* Promo code field */}
                    <div className="space-y-1">
                      <label className="text-[9px] font-bold text-[#C5A059] tracking-wider uppercase font-mono block text-left">
                        Introductory Promo Code?
                      </label>
                      <div className="flex gap-2">
                        <input
                          type="text"
                          value={promoCode}
                          onChange={(e) => setPromoCode(e.target.value)}
                          placeholder="e.g. KYRGYZGLACIER"
                          className="flex-1 border border-brand-brown rounded p-2 text-xs bg-white outline-none font-mono text-brand-ink"
                        />
                        <button
                          type="button"
                          onClick={handleApplyPromo}
                          className="bg-brand-ink hover:bg-brand-gold text-white hover:text-[#2D2926] px-4 text-xs font-bold rounded cursor-pointer transition-all"
                        >
                          Apply
                        </button>
                      </div>
                      {appliedPromo && (
                        <p className="text-[10px] text-green-700 font-semibold font-mono text-left">
                          ✓ "KYRGYZGLACIER" Applied! Enjoy 15% off your honey carriage.
                        </p>
                      )}
                    </div>

                    <div className="space-y-2 text-xs text-[#2D2926] border-t border-brand-brown/40 pt-3">
                      <div className="flex justify-between">
                        <span>Cart Subtotal:</span>
                        <strong className="text-brand-ink font-mono font-bold">${calculateSubtotal()}</strong>
                      </div>
                      {getDiscountAmount() > 0 && (
                        <div className="flex justify-between text-green-700">
                          <span>Introductory Reduction (15%):</span>
                          <strong className="font-mono font-bold">-${getDiscountAmount()}</strong>
                        </div>
                      )}
                      <div className="flex justify-between">
                        <span>Glacier Carriage Freight:</span>
                        <strong className="text-brand-ink font-mono font-bold">${getShippingCost()}</strong>
                      </div>
                      <div className="flex justify-between text-sm text-brand-ink font-bold border-t border-brand-brown pt-2 font-serif">
                        <span>Grand Total:</span>
                        <span className="text-brand-gold font-mono text-base font-bold">${calculateTotal()}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button
                        onClick={() => {
                          setIsCartOpen(false);
                          setIsCheckoutOpen(true);
                        }}
                        className="w-full bg-brand-gold hover:bg-brand-gold/90 text-brand-ink font-bold p-3.5 rounded-lg text-xs uppercase tracking-wider transition-colors shadow-md flex items-center justify-center space-x-1 cursor-pointer"
                      >
                        <span>Secure Premium Checkout</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                      <p className="text-[9px] text-[#2D2926]/70 mt-2 italic text-center">
                        Secure SSL Boutique Vault. 100% genuine glacier provenance certificate included inside.
                      </p>
                    </div>
                  </div>
                )}

              </motion.div>
            </div>
          </div>
        )}
      </AnimatePresence>

      {/* SECURE BOUTIQUE CHECKOUT MODAL SECTION */}
      <AnimatePresence>
        {isCheckoutOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
            {/* Modal background */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              onClick={() => {
                if (!isOrderPlaced) setIsCheckoutOpen(false);
              }}
              className="absolute inset-0 bg-[#2D2926]"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white border-2 border-brand-gold max-w-4xl w-full rounded-3xl overflow-hidden shadow-2xl relative z-10 text-left max-h-[90vh] overflow-y-auto"
            >
              
              {/* SUCCESS RECEIPT GENERATOR CONTAINER */}
              {isOrderPlaced && placedOrderDetails ? (
                <div className="p-8 space-y-6 text-center max-w-xl mx-auto py-12">
                  <div className="w-14 h-14 rounded-full bg-[#2D2926] border-2 border-brand-gold flex items-center justify-center text-brand-gold mx-auto shadow-md">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  
                  <div className="space-y-2">
                    <p className="text-[10px] font-mono tracking-widest text-[#C5A059] uppercase font-bold">CARAVAN DISPATCHED SUCCESSFULLY</p>
                    <h3 className="text-2xl font-serif text-brand-ink animate-pulse">Your Harvest is Secured</h3>
                    <p className="text-xs text-stone-500 max-w-sm mx-auto leading-relaxed">
                      Your order has been recorded inside our Ala-Too ledgers. The jars will be wrapped in raw linen and stamped with a melted bees wax seal of glacier authenticity.
                    </p>
                  </div>

                  {/* Elegant boutique invoice scroll */}
                  <div className="bg-brand-cream/10 p-6 rounded-2xl border-2 border-brand-brown/50 shadow-inner space-y-4 max-w-sm mx-auto font-mono text-xs text-[#5D5B56] text-left">
                    <div className="text-center border-b border-brand-brown/40 pb-3">
                      <p className="font-bold text-brand-ink font-sans tracking-widest text-xs uppercase text-brand-gold">ALA-TOO HARVEST CO.</p>
                      <p className="text-[9px] text-[#2D2926]/50 font-mono mt-0.5">At-Bashy Range, Naryn Province</p>
                    </div>

                    <div className="space-y-1 text-[10px] text-brand-ink">
                      <div className="flex justify-between"><span>Registry ID:</span> <span className="font-bold">{placedOrderDetails.orderId}</span></div>
                      <div className="flex justify-between"><span>Registry Date:</span> <span>{placedOrderDetails.date}</span></div>
                      <div className="flex justify-between"><span>Consignee:</span> <span className="font-bold">{placedOrderDetails.shippingInfo.fullName}</span></div>
                      <div className="flex justify-between"><span>Destiny:</span> <span className="truncate max-w-[150px]">{placedOrderDetails.shippingInfo.address}, {placedOrderDetails.shippingInfo.city}</span></div>
                    </div>

                    <div className="border-t border-b border-brand-brown/30 py-3 my-2 space-y-2 max-h-[140px] overflow-y-auto pr-1">
                      {placedOrderDetails.items.map((it: any, i: number) => (
                        <div key={i} className="flex justify-between text-[10px] text-brand-ink">
                          <span className="truncate max-w-[160px]">{it.quantity}x {it.name}</span>
                          <span className="font-bold">${it.price * it.quantity}</span>
                        </div>
                      ))}
                    </div>

                    <div className="space-y-1 text-[10px] pt-1 text-brand-ink">
                      <div className="flex justify-between"><span>Carriage Freight ({placedOrderDetails.shippingInfo.deliveryTier}):</span> <span>${placedOrderDetails.shippingCost}</span></div>
                      {placedOrderDetails.discount > 0 && (
                        <div className="flex justify-between text-green-700"><span>15% Reduction Applied:</span> <span>-${placedOrderDetails.discount}</span></div>
                      )}
                      <div className="flex justify-between text-xs font-bold text-brand-ink pt-2 border-t border-brand-brown/30">
                        <span>Sum Total:</span>
                        <span className="text-brand-gold font-bold font-sans text-xs">${placedOrderDetails.total}</span>
                      </div>
                    </div>

                    <div className="bg-brand-cream border border-brand-brown/50 p-2.5 rounded text-[8px] font-sans text-center text-brand-gold/90 leading-relaxed font-bold">
                      "Each jar in this registry has been handchecked and certified raw, unheated, organic Kyrgyz White Honey."
                    </div>
                  </div>

                  <button
                    onClick={resetAfterSuccess}
                    className="bg-[#2D2926] hover:bg-[#2D2926]/90 text-white hover:text-[#C5A059] px-8 py-3 rounded-lg text-xs tracking-wider font-bold uppercase transition-all cursor-pointer"
                  >
                    Done & Return to Boutique
                  </button>
                </div>
              ) : (
                <form onSubmit={handleCheckoutSubmit} className="grid grid-cols-1 lg:grid-cols-12">
                  
                  {/* Left Carriage Info (7 cols) */}
                  <div className="lg:col-span-7 p-6 sm:p-8 space-y-6 text-left">
                    <div className="flex items-center justify-between pb-4 border-b border-brand-brown">
                      <h4 className="text-lg font-serif font-semibold text-brand-ink">Secure Carriage Checkout</h4>
                      <button
                        type="button"
                        onClick={() => setIsCheckoutOpen(false)}
                        className="text-[#C5A059] hover:text-[#C5A059]/80 text-xs font-mono uppercase cursor-pointer"
                      >
                        Cancel
                      </button>
                    </div>

                    {/* Step label */}
                    <div className="space-y-4">
                      <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">1. Delivery Destination Details</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-1 font-mono">
                          <label className="text-[10px] uppercase text-stone-500 block">Consignee Full name</label>
                          <input
                            type="text"
                            required
                            placeholder="Aisuluu Keneshova"
                            value={shippingForm.fullName}
                            onChange={(e) => setShippingForm(p => ({ ...p, fullName: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                          />
                        </div>
                        <div className="space-y-1 font-mono">
                          <label className="text-[10px] uppercase text-stone-500 block">Contact Email Address</label>
                          <input
                            type="email"
                            required
                            placeholder="aisuluu@glacier.kg"
                            value={shippingForm.email}
                            onChange={(e) => setShippingForm(p => ({ ...p, email: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                          />
                        </div>
                      </div>

                      <div className="space-y-1 font-mono">
                        <label className="text-[10px] uppercase text-stone-500 block">Destination Street Address</label>
                        <input
                          type="text"
                          required
                          placeholder="Chüy Avenue, Block 12, Apt 8"
                          value={shippingForm.address}
                          onChange={(e) => setShippingForm(p => ({ ...p, address: e.target.value }))}
                          className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-1 font-mono">
                          <label className="text-[10px] uppercase text-stone-500 block">City</label>
                          <input
                            type="text"
                            required
                            placeholder="Bishkek"
                            value={shippingForm.city}
                            onChange={(e) => setShippingForm(p => ({ ...p, city: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                          />
                        </div>
                        <div className="space-y-1 font-mono">
                          <label className="text-[10px] uppercase text-stone-500 block">Postal / Zip Code</label>
                          <input
                            type="text"
                            required
                            placeholder="720000"
                            value={shippingForm.postalCode}
                            onChange={(e) => setShippingForm(p => ({ ...p, postalCode: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Carriage Tiers */}
                    <div className="space-y-3">
                      <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">2. Nomadic Carriage Selection</p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        <div
                          onClick={() => setShippingForm(p => ({ ...p, deliveryTier: "courier" }))}
                          className={`border p-3.5 rounded-xl cursor-pointer transition-all ${
                            shippingForm.deliveryTier === "courier"
                              ? "border-brand-gold bg-brand-cream/30"
                              : "border-brand-brown hover:border-brand-gold"
                          }`}
                        >
                          <h5 className="text-xs font-semibold text-brand-ink font-mono">Standard Couriers</h5>
                          <p className="text-[10px] text-stone-500 mt-0.5 leading-snug">Insulated climate-stable freight. Delivered in 4 to 7 working days.</p>
                          <span className="text-xs font-bold font-mono block mt-2 text-brand-gold">$8</span>
                        </div>
                        <div
                          onClick={() => setShippingForm(p => ({ ...p, deliveryTier: "caravan" }))}
                          className={`border p-3.5 rounded-xl cursor-pointer transition-all ${
                            shippingForm.deliveryTier === "caravan"
                              ? "border-brand-gold bg-brand-cream/30"
                              : "border-brand-brown hover:border-brand-gold"
                          }`}
                        >
                          <h5 className="text-xs font-semibold text-brand-ink font-mono">Nomadic Caravan Air Express</h5>
                          <p className="text-[10px] text-stone-500 mt-0.5 leading-snug">Direct priority flight pack from Bishkek glaciers. Hand-inscribed courier seal.</p>
                          <span className="text-xs font-bold font-mono block mt-2 text-brand-gold">$19</span>
                        </div>
                      </div>
                    </div>

                    {/* Step 3: Payments */}
                    <div className="space-y-4">
                      <p className="text-xs font-mono tracking-widest text-[#C5A059] uppercase font-bold">3. Secure Vault Payment Verification</p>
                      
                      <div className="space-y-1">
                        <label className="text-[10px] font-mono uppercase text-[#C5A059] block font-bold">Name Printed on Debit/Credit Card</label>
                        <input
                          type="text"
                          required
                          placeholder="Aisuluu Keneshova"
                          value={shippingForm.cardName}
                          onChange={(e) => setShippingForm(p => ({ ...p, cardName: e.target.value }))}
                          className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-sans text-brand-ink"
                        />
                      </div>

                      <div className="grid grid-cols-3 gap-3">
                        <div className="col-span-2 space-y-1">
                          <label className="text-[10px] font-mono uppercase text-[#C5A059] block font-bold">Card Number (16 Digits)</label>
                          <input
                            type="text"
                            required
                            maxLength={16}
                            placeholder="4000 1234 5678 9010"
                            value={shippingForm.cardNumber}
                            onChange={(e) => setShippingForm(p => ({ ...p, cardNumber: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-mono text-brand-ink"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="text-[10px] font-mono uppercase text-[#C5A059] block font-bold">Expiry (MM/YY)</label>
                          <input
                            type="text"
                            required
                            placeholder="08/29"
                            value={shippingForm.cardExpiry}
                            onChange={(e) => setShippingForm(p => ({ ...p, cardExpiry: e.target.value }))}
                            className="w-full border border-brand-brown rounded p-2 text-xs bg-white outline-none font-mono text-brand-ink"
                          />
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right carriage invoice preview (5 cols) */}
                  <div className="lg:col-span-5 bg-[#2D2926] text-stone-200 p-6 sm:p-8 flex flex-col justify-between border-l border-brand-brown/40">
                    <div className="space-y-6 text-left">
                      <div className="border-b border-white/20 pb-4">
                        <h5 className="text-xs font-mono tracking-widest text-[#E5DACE] uppercase font-bold">Ala-Too Carriage Sum</h5>
                        <p className="text-[10px] text-stone-400 font-serif italic mt-0.5">Please review before executing transmission</p>
                      </div>

                      {/* Display cart length inside custom receipt style block */}
                      <div className="space-y-3 max-h-[180px] overflow-y-auto pr-1">
                        {cart.map((cartItem, idx) => (
                          <div key={idx} className="flex justify-between text-xs border-b border-white/10 pb-2">
                            <div>
                              <p className="font-semibold text-stone-100 font-mono text-[11px] truncate max-w-[170px] uppercase">{cartItem.name}</p>
                              <p className="text-[10px] text-stone-400 italic">Qty: {cartItem.quantity} x ${cartItem.price}</p>
                            </div>
                            <span className="font-serif font-semibold text-brand-gold">${cartItem.price * cartItem.quantity}</span>
                          </div>
                        ))}
                      </div>

                      {/* Financial line structures */}
                      <div className="space-y-2 border-t border-white/20 pt-3 text-xs text-stone-300">
                        <div className="flex justify-between">
                          <span>Subtotal:</span>
                          <span className="font-mono text-stone-100">${calculateSubtotal()}</span>
                        </div>
                        {getDiscountAmount() > 0 && (
                          <div className="flex justify-between text-green-400">
                            <span>Promo Discount:</span>
                            <span className="font-mono">-${getDiscountAmount()}</span>
                          </div>
                        )}
                        <div className="flex justify-between">
                          <span>Carriage freight:</span>
                          <span className="font-mono text-stone-100">${getShippingCost()}</span>
                        </div>
                        <div className="flex justify-between text-sm font-bold text-white border-t border-white/20 pt-2 font-serif">
                          <span>Grand Total:</span>
                          <span className="text-brand-gold font-mono text-base font-bold">${calculateTotal()}</span>
                        </div>
                      </div>

                      {/* Direct engagement box */}
                      <div className="space-y-1.5 pt-2">
                        <label className="text-[10px] uppercase font-mono tracking-wider text-stone-400 block font-bold">Engrave Gift Note / Nomadic Greetings</label>
                        <textarea
                          placeholder="Type notes to be burned onto cedar crate wood or printed on raw flax parchment..."
                          value={shippingForm.giftNotes}
                          onChange={(e) => setShippingForm(p => ({ ...p, giftNotes: e.target.value }))}
                          className="w-full bg-[#2D2926] border border-white/20 p-2 text-[11px] text-stone-200 rounded min-h-[50px] outline-none"
                        />
                      </div>
                    </div>

                    <div className="pt-6">
                      <button
                        type="submit"
                        className="w-full bg-brand-gold hover:bg-brand-gold/80 text-brand-ink font-bold p-3.5 rounded-lg text-xs tracking-wider uppercase transition-all shadow-md cursor-pointer"
                      >
                        Transmit Sealed Secure Order (${calculateTotal()})
                      </button>
                      <p className="text-[9px] text-stone-400 mt-2 italic text-center">
                        Upon transmission, your honey registry records will sync with high-altitude packaging centers automatically.
                      </p>
                    </div>
                  </div>

                </form>
              )}

            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* LUXURY FLOATING CHATBOT (PRISTINE BEE) */}
      <div id="ai-chatbot-widget" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
        <AnimatePresence>
          {isChatbotOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 30 }}
              transition={{ type: "spring", damping: 25, stiffness: 350 }}
              className="mb-4 w-96 max-w-[calc(100vw-2rem)] h-[485px] bg-white border-2 border-brand-gold rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(45,41,38,0.25)] flex flex-col text-left"
            >
              {/* Chatbot Header */}
              <div className="bg-[#2D2926] p-4 border-b border-brand-gold flex items-center justify-between text-[#FCFAF7]">
                <div className="flex items-center space-x-2.5">
                  <div className="w-8 h-8 rounded-full bg-brand-gold/20 border border-brand-gold flex items-center justify-center text-brand-gold">
                    <Sparkles className="w-4 h-4 fill-current animate-pulse" />
                  </div>
                  <div>
                    <h4 className="font-serif text-xs font-semibold tracking-wide text-brand-gold uppercase">PRISTINE BEE</h4>
                    <p className="text-[9px] text-[#E5DACE] font-mono tracking-widest uppercase">Luxury Honey Sommelier</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsChatbotOpen(false)}
                  className="p-1 hover:text-brand-gold transition-colors text-stone-400 cursor-pointer"
                  title="Close Chat"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Message scroll logs */}
              <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gradient-to-b from-[#FCFAF7] to-[#F9F6F1]">
                {chatMessages.map((msg) => {
                  const isUser = msg.sender === "user";
                  return (
                    <motion.div
                      key={msg.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={`flex flex-col ${isUser ? "items-end" : "items-start"}`}
                    >
                      <div
                        className={`p-3.5 rounded-2xl text-[11px] leading-relaxed shadow-sm max-w-[85%] ${
                          isUser
                            ? "bg-[#2D2926] text-[#FCFAF7] rounded-tr-none font-mono"
                            : "bg-white border border-brand-brown text-[#2D2926] rounded-tl-none font-serif"
                        }`}
                      >
                        {msg.text.split("\n\n").map((para, pIdx) => (
                          <p key={pIdx} className="mb-1.5 last:mb-0">
                            {para.split("\n").map((line, lIdx) => (
                              <React.Fragment key={lIdx}>
                                {lIdx > 0 && <br />}
                                {line}
                              </React.Fragment>
                            ))}
                          </p>
                        ))}
                      </div>
                      <span className="text-[8px] text-stone-400 font-mono mt-1 px-1">
                        {msg.timestamp}
                      </span>
                    </motion.div>
                  );
                })}

                {/* Loading state indicator */}
                {chatbotLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-start"
                  >
                    <div className="p-3 bg-white border border-brand-brown rounded-2xl rounded-tl-none flex items-center space-x-2 text-stone-500 font-serif text-[11px] shadow-sm italic">
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.3s]" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce [animation-delay:-0.15s]" />
                      <span className="w-1.5 h-1.5 bg-brand-gold rounded-full animate-bounce" />
                      <span className="pl-1">Pristine Bee is drawing details from the hives...</span>
                    </div>
                  </motion.div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Predefined suggestion chips */}
              <div className="px-3 py-2 bg-brand-cream/30 border-t border-brand-brown/40 flex flex-wrap gap-1.5">
                {[
                  {
                    prompt: "Can you recommend a premium honey variety?",
                    labels: {
                      en: "Recommend variety ✨",
                      es: "Recomendar variedad ✨",
                      ru: "Порекомендовать ✨",
                      ar: "ترشيح صنف عسل ✨",
                      ur: "شہد تجویز کریں ✨"
                    }
                  },
                  {
                    prompt: "Tell me about the Yemeni Royal Sidr Honey and how to taste it.",
                    labels: {
                      en: "Yemeni Sidr 🍯",
                      es: "Sidr de Yemen 🍯",
                      ru: "Йеменский Сидр 🍯",
                      ar: "عسل السدر اليمني 🍯",
                      ur: "یمنی سدر شہد 🍯"
                    }
                  }
                ].map((chip, idx) => {
                  const label = chip.labels[currentLang] || chip.labels["en"];
                  return (
                    <button
                      key={idx}
                      onClick={() => handleSendMessage(chip.prompt)}
                      disabled={chatbotLoading}
                      className="text-[9px] font-mono tracking-wide uppercase px-2.5 py-1.5 rounded-lg border border-brand-brown/70 bg-white hover:bg-brand-gold/15 text-[#2D2926] transition-colors duration-200 cursor-pointer disabled:opacity-50"
                    >
                      {label}
                    </button>
                  );
                })}

                {/* Direct WhatsApp Concierge Link */}
                <a
                  href={`https://wa.me/996500123456?text=${encodeURIComponent(whatsappGreetings[currentLang] || whatsappGreetings["en"])}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[9px] font-mono tracking-wide uppercase px-2.5 py-1.5 rounded-lg border border-[#25D366] bg-white hover:bg-[#25D366]/10 text-[#25D366] transition-colors duration-200 cursor-pointer flex items-center space-x-1 font-semibold"
                  title="Speak to Human Concierge"
                >
                  <Phone className="w-3 h-3 shrink-0" />
                  <span>
                    {currentLang === "es" ? "WhatsApp Humano 💬" :
                     currentLang === "ru" ? "Чат WhatsApp 💬" :
                     currentLang === "ar" ? "واتساب مباشر 💬" :
                     currentLang === "ur" ? "براہ راست رابطہ 💬" :
                     "WhatsApp Concierge 💬"}
                  </span>
                </a>
              </div>

              {/* Message Input Tray */}
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSendMessage();
                }}
                className="p-3 bg-white border-t border-brand-brown/40 flex items-center space-x-2"
              >
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  disabled={chatbotLoading}
                  placeholder={
                    currentLang === "es" ? "Escriba un mensaje..." :
                    currentLang === "ru" ? "Напишите сообщение..." :
                    currentLang === "ar" ? "اكتب رسالة هنا..." :
                    currentLang === "ur" ? "یہاں پیغام لکھیں..." :
                    "Type a gourmet inquiry..."
                  }
                  className="flex-1 bg-brand-cream/30 border border-brand-brown/80 rounded-xl px-3 py-2 text-[11px] outline-none text-[#2D2926] placeholder-stone-400 focus:border-brand-gold disabled:opacity-50"
                />
                <button
                  type="submit"
                  disabled={!inputMessage.trim() || chatbotLoading}
                  className="p-2.5 bg-[#2D2926] hover:bg-brand-gold text-[#FCFAF7] hover:text-[#2D2926] rounded-xl transition-all shadow-sm cursor-pointer disabled:opacity-40"
                  title="Send message"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Floating action toggle buttons stack */}
        <div id="floating-actions-stack" className="flex flex-col space-y-3 items-end">
          {/* Floating Instagram Action Button */}
          <motion.a
            id="btn-instagram-floating"
            href="https://www.instagram.com/alatoo_honey"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center w-14 h-14 bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7] hover:opacity-95 text-white rounded-full shadow-2xl transition-all duration-300 border-2 border-white/80 cursor-pointer"
            title="Follow us on Instagram"
          >
            <div className="relative">
              <Instagram className="w-5 h-5 text-white" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
          </motion.a>

          {/* Floating WhatsApp Action Button */}
          <motion.a
            id="btn-whatsapp-floating"
            href={`https://wa.me/996500123456?text=${encodeURIComponent(whatsappGreetings[currentLang] || whatsappGreetings["en"])}`}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.92 }}
            className="flex items-center justify-center w-14 h-14 bg-[#25D366] hover:bg-[#20ba56] text-white rounded-full shadow-2xl transition-all duration-300 border-2 border-white/80 cursor-pointer"
            title="Chat on WhatsApp"
          >
            <div className="relative">
              <Phone className="w-5 h-5 fill-current" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full animate-ping" />
              <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-white rounded-full" />
            </div>
          </motion.a>

          {/* Floating action toggle button */}
          <motion.button
            id="btn-chatbot-toggle"
            onClick={() => setIsChatbotOpen(!isChatbotOpen)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center justify-center w-14 h-14 bg-[#2D2926] hover:bg-brand-gold text-[#FCFAF7] hover:text-[#2D2926] rounded-full shadow-2xl transition-colors duration-300 border-2 border-brand-gold group cursor-pointer"
            title="Chat with Pristine Bee"
          >
            {isChatbotOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <div className="relative">
                <MessageCircle className="w-6 h-6" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-brand-gold rounded-full border border-[#2D2926] animate-ping" />
                <span className="absolute -top-1.5 -right-1.5 w-3 h-3 bg-brand-gold rounded-full border border-[#2D2926]" />
              </div>
            )}
          </motion.button>
        </div>
      </div>

    </div>
  );
}
