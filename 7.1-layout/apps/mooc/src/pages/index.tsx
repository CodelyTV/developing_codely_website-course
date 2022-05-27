import type { NextPage } from "next";

import { KeyPoints } from "../sections/codely/KeyPoints";
import { Value } from "../sections/codely/Value";

const Home: NextPage = () => {
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
      <KeyPoints />
      <Value cards={valueCards} />
    </>
  );
};

export default Home;
