export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  features: string[];
  icon: React.ComponentType<any>;
}

export interface TestimonialItem {
  id: string;
  name: string;
  location: string;
  quote: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}