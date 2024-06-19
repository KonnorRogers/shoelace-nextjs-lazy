import React from "react";
import { render } from "@testing-library/react";
import preloadAll from "jest-next-dynamic";

import Home from "./page";

beforeAll(async () => {
  await preloadAll();
});

describe("test", () => {
  it("renders the page", async () => {
    const { container } = render(<Home />);

    expect(container).toMatchSnapshot();
  });
});
