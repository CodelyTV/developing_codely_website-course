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
      <TrustedCompanies />

      <Value cards={valueCards} />
    </>
  );
}
