import { render, screen, cleanup } from "@testing-library/react";
import Component from "./index";

beforeEach(() => render(<Component />)); // test마다 JSX.Element를 render 합니다.
afterEach(cleanup); // test마다 cleanup

describe("02. Matcher", () => {
  test("test!!", () => {
    const el = screen.getByText("test");
    expect(el).toBeInTheDocument();
  });
});
