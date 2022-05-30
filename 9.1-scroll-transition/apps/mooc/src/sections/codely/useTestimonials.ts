import testimonials from "../../data/testimonials.json";

export interface Testimonial {
  quote: string;
  author: {
    name: string;
    avatar: string;
    position: string;
    company?: {
      name: string;
      logo: string;
    };
  };
}

export function useTestimonials(): Testimonial[] {
  return testimonials;
}
