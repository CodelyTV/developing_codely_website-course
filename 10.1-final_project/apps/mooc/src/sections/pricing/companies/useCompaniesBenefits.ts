import { Benefit } from "../shared/Benefit";

export function useCompaniesBenefits(employeeAmount: number): Benefit[] {
  return [
    { label: "Acceso a todos los cursos", emoji: "💻" },
    { label: "Contenido de calidad", emoji: "🏅" },
    { label: "Profesionales con amplia experiencia", emoji: "🧑‍🏫" },
    { label: "Nuevo contenido cada semana", emoji: "🚀" },
    { label: "Acceso a la comunidad CodelyTV", emoji: "🧑‍🤝‍🧑" },
    { label: "Certificados al completar cursos", emoji: "🧑‍🎓" },
    {
      label: "2 meses gratis",
      emoji: "💸",
      status: employeeAmount > 10 ? "enabled" : "disabled",
    },
  ];
}
