export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  listingGroup: "rental" | "multifunction" | "printer" | "supplies" | "scanner" | "shredder" | "kyocera-color-mfp" | "kyocera-color-printer" | "kyocera-bw-mfp" | "kyocera-bw-printer";
  price: string;
  spec: string;
  description: string;
  image: string;
  gallery?: string[];
  detailImages?: string[];
  detailImageCropHeight?: number;
  detailNotices?: string[];
  storeUrl: string;
  officialUrl?: string;
  catalogUrl?: string;
  features?: string[];
  details?: Array<{ label: string; value: string }>;
  featured?: boolean;
  visible: boolean;
};

export type SupplyProduct = {
  id: string;
  model: string;
  name: string;
  kind: "정품" | "재생";
  format: "단품" | "4색 세트";
  color?: "검정" | "파랑" | "빨강" | "노랑";
  cartridge: string;
  price: string;
  spec: string;
  description: string;
  image: string;
  officialUrl?: string;
};

export type CompanyInfo = {
  name: string;
  tagline: string;
  summary: string;
  description: string;
  phone: string;
  email: string;
  address: string;
  hours: string;
  naverMapUrl: string;
  businessInfo: string;
  heroStats: Array<{ label: string; value: string }>;
  highlights: string[];
  categories: Array<{ name: string; description: string }>;
};
