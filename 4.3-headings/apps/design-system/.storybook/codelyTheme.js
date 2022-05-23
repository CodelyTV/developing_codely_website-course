import { create } from "@storybook/theming";

export default create({
  base: "light",
  brandTitle: "Codely's Design System",
  brandUrl: "https://www.codely.com",
  brandImage: "/brand.svg",
  colorPrimary: "#3cff64",
  colorSecondary: "#7026f4",

  fontBase: "Moderat, sans-serif",
  fontCode: "'Moderat Mono', monospace",
  textColor: "#1a2233",
  textInverseColor: "rgba(255,255,255,0.9)",
  textMutedColor: "#787676",

  barTextColor: "#787676",
  barSelectedColor: "#1a2233",
});
