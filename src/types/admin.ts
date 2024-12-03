export interface Feature {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

export interface SiteConfig {
  title: string;
  subtitle: string;
  features: Feature[];
}