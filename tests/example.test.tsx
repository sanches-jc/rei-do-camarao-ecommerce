import { render, screen } from "@testing-library/react";
import React from "react";

function Hello() {
  return <div>Hello Vitest</div>;
}

test("renders hello", () => {
  render(<Hello />);
  expect(screen.getByText("Hello Vitest")).toBeInTheDocument();
});
