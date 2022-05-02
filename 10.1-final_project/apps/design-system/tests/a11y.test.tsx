import { composeStories } from "@storybook/testing-react";
import { act, render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import * as components from "./library";

expect.extend(toHaveNoViolations);

const stories = Object.values(components).map((component) => {
  return {
    title: component.default.title,
    stories: composeStories(component),
  };
});

stories.forEach(({ title, stories }) => {
  const variations = Object.entries(stories);

  variations.forEach(([variationName, story]: [string, any]) => {
    it(`${title} ${variationName} should be accessible`, async () => {
      const { container } = render(story());

      await act(async () => {
        const results = await axe(container);
        expect(results).toHaveNoViolations();
      });
    });
  });
});
