import { Fifty } from "../sections/codely/Fifty";
import { Hero } from "../sections/codely/Hero";
import { TrustedCompanies } from "../sections/codely/TrustedCompanies";
import { Value } from "../sections/codely/Value";

export default function Empresas(): JSX.Element {
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

  return (
    <>
      <Hero
        titleId="companies-title"
        ctaText="Calcula tu precio"
        ctaUrl="#pricing"
        claim="✌️ Aprende de experiencias reales y no de tutoriales"
        stories={[
          {
            videoSrc: "/story.mp4",
            posterSrc: "/story.png",
          },
        ]}
      >
        Lleva el desarrollo de tu equipo al siguiente nivel
      </Hero>
      <TrustedCompanies />
      <Fifty />
      <Value cards={valueCards} />
    </>
  );
}
