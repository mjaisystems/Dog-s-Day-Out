import { ServiceItem, TestimonialItem, NavLink, GalleryImage } from './types';
import { 
  Dog, 
  GraduationCap, 
  Scissors, 
  Bone, 
  Heart,
  Brain
} from 'lucide-react';

export const BRAND_INFO = {
  name: "Dog's Day Out",
  tagline: "Positive, Fear-Free Dog Care & Training — Seattle",
  phone: "(206) 706-4875",
  address: "6733 15th Ave NW, Seattle, WA 98117",
  email: "hello@dogsdayoutseattle.com", // Placeholder
  hours: "Mon–Fri 8:00am–6:00pm",
  social: {
    facebook: "#",
    instagram: "#"
  }
};

export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const SERVICES: ServiceItem[] = [
  {
    id: 'daycare',
    title: 'Full-Day Dog Daycare',
    description: 'Structured socialization and play in a safe, supervised environment.',
    features: ['Supervised small groups', 'Structured play & rest cycles', 'Mental enrichment'],
    icon: Dog
  },
  {
    id: 'training',
    title: 'Behavior-Based Training',
    description: 'Positive reinforcement methods for all behavior levels.',
    features: ['Private lessons', 'Reactive/fearful dog support', 'Certified trainers'],
    icon: GraduationCap
  },
  {
    id: 'grooming',
    title: 'Full Grooming & Spa',
    description: 'A relaxing spa experience for your furry friend.',
    features: ['Baths & haircuts', 'Nail trims & ear cleaning', 'De-shedding treatments'],
    icon: Scissors
  },
  {
    id: 'puppy',
    title: 'Puppy & Teen Programs',
    description: 'Building confidence and social skills for young dogs.',
    features: ['Safe socialization', 'Confidence building', 'Basic manners'],
    icon: Bone
  },
  {
    id: 'enrichment',
    title: 'Enrichment Classes',
    description: 'Fun activities to stimulate your dog’s mind.',
    features: ['Nose-work games', 'Mental stimulation', 'Agility basics'],
    icon: Brain
  }
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: '1',
    name: 'Sarah M.',
    location: 'Ballard',
    quote: "Dog's Day Out has transformed my anxious rescue into a confident, happy pup. The staff truly understands dog behavior!"
  },
  {
    id: '2',
    name: 'James & Riley',
    location: 'Greenwood',
    quote: "The grooming team is amazing. They took such good care of my elderly golden retriever. He looks and smells great!"
  },
  {
    id: '3',
    name: 'Elena K.',
    location: 'Crown Hill',
    quote: "I love the small play groups. I know my dog is safe and actually having fun, not just being overwhelmed."
  }
];

export const GALLERY_IMAGES: GalleryImage[] = [
  { id: '1', src: 'https://picsum.photos/id/1025/600/600', alt: 'Pug in a blanket' },
  { id: '2', src: 'https://picsum.photos/id/237/600/600', alt: 'Black dog playing' },
  { id: '3', src: 'https://picsum.photos/id/169/600/600', alt: 'Dog in park' },
  { id: '4', src: 'https://picsum.photos/id/1062/600/600', alt: 'Dog wrapped in blanket' },
  { id: '5', src: 'https://picsum.photos/id/582/600/600', alt: 'Wolf dog waiting' },
  { id: '6', src: 'https://picsum.photos/id/593/600/600', alt: 'Tiger dog portrait' },
];