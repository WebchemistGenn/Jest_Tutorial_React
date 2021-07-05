import { render, screen, cleanup } from "@testing-library/react";
import Component from "./index";

beforeEach(() => render(<Component title="Snapshots" />));
afterEach(() => cleanup());

describe("03. Snapshots", () => {
  test("Get Snapshots", () => {
    const el = screen.getByText("Snapshots");
    expect(el).toBeInTheDocument();
    expect(el).toMatchSnapshot();
  });
});
