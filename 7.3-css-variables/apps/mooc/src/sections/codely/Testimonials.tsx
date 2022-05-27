import { Carousel } from "@codely/design-system/src/molecules/Carousel";
import { QuoteCard } from "@codely/design-system/src/molecules/QuoteCard";
import { Container } from "@codely/design-system/src/objects/Container";

import { Testimonial } from "./useTestimonials";

import styles from "./Testimonials.module.scss";

interface TestimonialsProps {
  testimonials: Testimonial[];
  children: React.ReactNode;
}

export function Testimonials({ testimonials, children }: TestimonialsProps) {
  return (
    <section aria-label="Testimonials" className={styles.testimonials}>
      <Container>
        <p className={styles.testimonials__lead}>9 de cada 10 developers creen que Codely enseña y entretiene 🤓</p>
        <div className={styles.testimonials__content}>
          <Carousel>
            {testimonials.map((testimonial, i) => (
              <QuoteCard
                key={i}
                quote={testimonial.quote}
                author={testimonial.author}
                variation={((i % 3) + 1) as 1 | 2 | 3}
              />
            ))}
          </Carousel>
        </div>

        <p className={styles.testimonials__lead}>{children}</p>
      </Container>
    </section>
  );
}
