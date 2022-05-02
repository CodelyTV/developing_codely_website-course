import { Fifty } from "../sections/codely/Fifty";
import { Hero } from "../sections/codely/Hero";
import { TrustedCompanies } from "../sections/codely/TrustedCompanies";
import { Story, useStories } from "../sections/codely/useStories";
import { Value } from "../sections/codely/Value";
import { Categories } from "../sections/courses/Categories";
import { CategoryWithCourse, useCategoriesWithCourses } from "../sections/courses/useCategoryWithCourse";
import { PricingCompanies } from "../sections/pricing/companies/PricingCompanies";

export async function getStaticProps() {
  const categories = useCategoriesWithCourses();
  const stories = useStories();

  return {
    props: { categories, stories },
  };
}

export default function Empresas({
  categories,
  stories,
}: {
  categories: CategoryWithCourse[];
  stories: Story[];
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
      title: "🤯 Redescubre la programación",
      description: "Conoce otras formas de trabajar de la mano de profesionales y valida tu enfoque actual.",
    },
  ];

  const valueStories = [
    {
      title: "Los cursos",
      miniature: "/img/placeholders/avatar.png",
      videoSrc: "/img/placeholders/story.mp4",
      posterSrc: "/img/placeholders/story.webp",
    },
  ];

  return (
    <>
      <Hero
        titleId="companies-title"
        ctaText="Calcula tu precio"
        ctaUrl="#pricing"
        claim="✌️ Aprende de experiencias reales y no de tutoriales"
        stories={stories}
      >
        Lleva el desarrollo de tu equipo al siguiente nivel
      </Hero>
      <TrustedCompanies />
      <Fifty />
      <Categories categories={categories} />
      <Value cards={valueCards} stories={valueStories} />
      <PricingCompanies />
    </>
  );
}
