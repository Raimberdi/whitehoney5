import { HoneyProduct, CustomerReview } from "./types";

// Dynamic image paths from previous generation steps
export const HONEY_IMAGES = {
  hero: "/src/assets/images/mountains_honey_jar_1781690615471.jpg",
  texture: "/src/assets/images/creamy_honey_texture_1781690632144.jpg",
  apiary: "/src/assets/images/alpine_beekeeping_1781690648381.jpg",
  yemeniSidr: "/src/assets/images/yemeni_sidr_honey_1781778910116.jpg"
};

export const INSTALLED_HONEY_PRODUCTS: HoneyProduct[] = [
  {
    id: "royal-at-bashy",
    name: "Royal At-Bashy White Honey",
    subName: "Ultra-Creamy Single-Source Sainfoin",
    altitude: "2,200 meters",
    description: "The pristine crown of our boutique. Sourced exclusively from Sainfoin (Onobrychis) meadows in the At-Bashy ranges of Naryn, this honey is slow-crystallized to a magnificent solid, milky-white buttery consistency that melts on your tongue.",
    price: 48,
    rating: 4.93,
    reviewsCount: 142,
    sensoryProfile: {
      sweetness: 3,
      creaminess: 5,
      aromaIntensity: 4,
      floralRating: 5,
      tastingNotes: ["Vanilla Custard", "Sainfoin Blossom", "Whipped Sweet Butter", "Fresh Almond Wood"]
    },
    details: "This single-nectar artisanal honey undergoes zero thermal processing, capturing the live botanical enzymes and delicate pollens. It is characterized by an elegant ivory velvet tone and an immaculate clean finish that leaves no harsh acid burn.",
    originLocation: "At-Bashy Valley, Southern Tian Shan, Kyrgyzstan",
    botanySource: "Onobrychis arenaria (Wild Sainfoin / Esparcet)",
    image: HONEY_IMAGES.texture
  },
  {
    id: "glacier-blossom",
    name: "Glacier Blossom White Honey",
    subName: "High Alpine Wildflower Cream",
    altitude: "2,800 meters",
    description: "Gathered from extreme high-altitude mountain flower meadows as the glaciological snowlines recede. A delicate, pearlescent-white cream honey accented by elements of Siberian Peashrub, wild Edelweiss, and mountain clover.",
    price: 39,
    rating: 4.88,
    reviewsCount: 89,
    sensoryProfile: {
      sweetness: 2,
      creaminess: 4,
      aromaIntensity: 5,
      floralRating: 4,
      tastingNotes: ["Alpine Clover", "Melted Snow Honey", "Wild Mountain Thyme", "Edelweiss Nectar"]
    },
    details: "Extremely rare and seasonal due to the short high-altitude summer. The bees work in chilly, unpolluted winds producing high-viscosity nectar rich in antioxidants and rare trace trace elements from alpine shale soils.",
    originLocation: "Suusamyr Valley Glaciers, Chüy Province, Kyrgyzstan",
    botanySource: "Caragana arborescens (Siberian Peashrub), Leontopodium (Edelweiss), Wild Clover",
    image: HONEY_IMAGES.hero
  },
  {
    id: "pine-wildflower",
    name: "Tian Shan Amber-Veined Whipped Honey",
    subName: "Alpine Silver Fir & Wildflower Nectar",
    altitude: "1,900 meters",
    description: "A gorgeous, slightly warmer cream honey with subtle golden-amber veins, blending the velvety mountain Sainfoin base with rich forest honeydew and blue chicory. Whipped to a spreadable frosting-like texture.",
    price: 34,
    rating: 4.85,
    reviewsCount: 61,
    sensoryProfile: {
      sweetness: 4,
      creaminess: 4,
      aromaIntensity: 5,
      floralRating: 3,
      tastingNotes: ["Herbal Caramel", "Silver Fir Pine Needle", "Plum Jam Backnotes", "Earthy Molasses"]
    },
    details: "Harvested where the dense pine forests of Ala-Too meet the wildflower meadows. Contains a higher content of natural mineral salts, organic acids, and forest honeydew, rendering a complex sweet-savory woody structure.",
    originLocation: "Arslanbob Walnut Forests & Ala-Too Slopes, Kyrgyzstan",
    botanySource: "Siberian Fir Honeydew, Wild Chicory, Sainfoin, Dandelion",
    image: HONEY_IMAGES.apiary
  },
  {
    id: "yemeni-sidr",
    name: "Yemeni Royal Sidr Honey",
    subName: "Legendary Medicinal Hadramout Elixir",
    altitude: "1,500 meters",
    description: "The absolute pinnacle of ancient liquid gold. Gathered exclusively from the blossoms of sacred Sidr (Lote) trees in the desolate ravines of Wadi Do'an, Hadramaut. Renowned worldwide for its legendary therapeutic potency, dense amber richness, and deep herbal-toffee taste.",
    price: 135,
    rating: 4.97,
    reviewsCount: 215,
    sensoryProfile: {
      sweetness: 4,
      creaminess: 2,
      aromaIntensity: 5,
      floralRating: 3,
      tastingNotes: ["Buttery Toffee", "Medicinal Herbs", "Warm Spices", "Rich Molasses"]
    },
    details: "This legendary honey is hand-harvested twice a year using ancient nomadic apicultural methods that date back three thousand years. Unfiltered, uncooked, and completely raw, Sidr honey has exceptionally high therapeutic activity, wild enzyme counts, and powerful properties.",
    originLocation: "Wadi Do'an, Hadramaut Valley, Yemen",
    botanySource: "Ziziphus spina-christi (Sacred Sidr / Lote Tree)",
    image: HONEY_IMAGES.yemeniSidr
  }
];

export const STATIC_REVIEWS: CustomerReview[] = [
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
];

export const NOMADIC_HERITAGE_SLIDES = [
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
];

export const PRESET_PAIRINGS = [
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
];
