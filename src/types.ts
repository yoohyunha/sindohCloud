export type NavItem = {
  label: string;
  href: string;
};

export type Product = {
  id: string;
  name: string;
  category: string;
  listingGroup: "rental" | "multifunction" | "printer" | "supplies" | "scanner" | "shredder" | "kyocera-mono" | "kyocera-color";
  price: string;
  spec: string;
  description: string;
  image: string;
  gallery?: string[];
  detailImages?: string[];
  detailNotices?: string[];
  storeUrl: string;
  officialUrl?: string;
  features?: string[];
  details?: Array<{ label: string; value: string }>;
  featured?: boolean;
  visible: boolean;
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
