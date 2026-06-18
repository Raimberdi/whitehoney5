export interface HoneyProduct {
  id: string;
  name: string;
  subName: string;
  altitude: string;
  description: string;
  price: number;
  rating: number;
  reviewsCount: number;
  sensoryProfile: {
    sweetness: number; // 1 to 5
    creaminess: number; // 1 to 5
    aromaIntensity: number; // 1 to 5
    floralRating: number; // 1 to 5
    tastingNotes: string[];
  };
  details: string;
  originLocation: string;
  botanySource: string;
  image: string;
}

export interface CustomJarConfig {
  size: '250g' | '500g' | '1000g_ceramic';
  varietyId: string;
  dipperType: 'olivewood' | 'brass_leaf' | 'nomadic_birch' | 'none';
  packaging: 'linen_wax' | 'scorched_crate' | 'minimalist_gold';
  nomadicCharm: boolean;
  giftTagMessage: string;
}

export interface CartItem {
  id: string; // unique item id (generated or product.id)
  product?: HoneyProduct; // standard product
  customConfig?: CustomJarConfig; // if it is a custom created jar
  quantity: number;
  price: number;
  name: string;
  description: string;
}

export interface SommelierPairing {
  id: string;
  pairingName: string;
  compatibilityScore: number;
  sensoryNotes: string;
  sommelierVerdict: string;
  servingCeremony: string;
  recommendedHoneyTemperature: string;
  honeyVariety: string;
  timestamp: string;
}

export interface CustomerReview {
  id: string;
  author: string;
  rating: number;
  date: string;
  message: string;
  varietyId: string;
  verified: boolean;
}

export interface HeritageSlide {
  title: string;
  description: string;
  icon: string;
}

export interface PresetPairing {
  name: string;
  type: string;
  context: string;
}

export interface ChatMessage {
  id: string;
  sender: "user" | "bot";
  text: string;
  timestamp: string;
}

