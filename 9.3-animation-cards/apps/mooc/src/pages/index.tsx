import { Link } from "@codely/design-system/src/atoms/Link";

import { HomeHero } from "../sections/codely/HomeHero";
import { KeyPoints } from "../sections/codely/KeyPoints";
import { Testimonials } from "../sections/codely/Testimonials";
import { Testimonial, useTestimonials } from "../sections/codely/useTestimonials";
import { Value } from "../sections/codely/Value";
import { Changelog } from "../sections/contents/Changelog";
import { Courses } from "../sections/courses/Courses";
import { Category, useCategories } from "../sections/courses/useCategories";
import { Course, useCourses } from "../sections/courses/useCourses";

export async function getStaticProps() {
  const testimonials = useTestimonials();
  const courses = useCourses();
  const categories = useCategories();

  return {
    props: { testimonials, courses, categories },
  };
}

export default function Home({
  testimonials,
  courses,
  categories,
}: {
  testimonials: Testimonial[];
  courses: Course[];
  categories: Category[];
}): JSX.Element {
  const valueCards = [
    {
      title: "🌈 Mucho más que cursos",
      description: "Aprende de casos de El Mundo Real™️ con las auditorías, lightning talks, entrevistas…",
    },
    {
      title: "✌️ No venimos a sentar cátedra",
      description: "Hacemos el contenido y formato que nos hubiera gustado tener.",
    },
    {
      title: "⚡ Acelera tu aprendizaje",
      description: "Aprovecha el conocimiento de profesionales con una gran experiencia.",
    },
    {
      title: "🚀 Crece en equipo con tu empresa",
      description: "Sube de nivel para ponerte a punto y encarar los nuevos retos conjuntamente.",
    },
  ];

  return (
    <>
      <HomeHero />
      <Testimonials testimonials={testimonials}>
        <>
          🏢 Fórmate en equipo:{" "}
          <Link href="/empresas" mode="inverted">
            Descubre Codely para empresas
          </Link>
        </>
      </Testimonials>
      <KeyPoints />
      <Changelog />
      <Courses courses={courses} categories={categories} />
      <Value cards={valueCards} />
    </>
  );
}
