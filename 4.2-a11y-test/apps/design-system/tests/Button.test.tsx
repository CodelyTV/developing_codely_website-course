import { render } from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

import { Button } from "../src/atoms/Button";

expect.extend(toHaveNoViolations);

it(`Button should be accessible`, async () => {
  const { container } = render(<Button>Subscribe</Button>);

  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
