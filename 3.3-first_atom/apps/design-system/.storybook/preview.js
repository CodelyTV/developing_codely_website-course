import * as NextImage from "next/image";
import codelyTheme from "./codelyTheme";
import "../src/docs/index.scss";

export const decorators = [
  (Story) => (
    <div>
      <Story />
      <footer className="docs-footer">
        <a href="https://vercel.com/?utm_source=[codely-courses]&utm_campaign=oss">
          <img src="/powered-by-vercel.svg" alt="powered by Vercel" />
        </a>
      </footer>
    </div>
  ),
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    theme: codelyTheme,
  },
};

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
