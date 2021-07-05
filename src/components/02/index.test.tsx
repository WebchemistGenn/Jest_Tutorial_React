import { render, screen, cleanup } from "@testing-library/react";
import Component from "./index";

/**
 * toBeDisabled - 해당 Component가 Disabled인지 확인
 * toBeEnabled - 해당 Component가 Enabled인지 확인
 * toBeEmptyDOMElement - 해당 Component에 Child가 없는지 확인
 * toBeInTheDocument - 해당 Component가 Document에 존재하는지 확인
 * toBeInvalid - test
 * toBeRequired - test
 * toBeValid - test
 * toBeVisible - test
 * toContainElement - test
 * toContainHTML - test
 * toHaveAccessibleDescription - test
 * toHaveAccessibleName - test
 * toHaveAttribute - test
 * toHaveClass - test
 * toHaveFocus - test
 * toHaveFormValues - test
 * toHaveStyle - test
 * toHaveTextContent - 해당 Component에 일정한 Text가 존재하는지 확인
 * toHaveValue - test
 * toHaveDisplayValue - test
 * toBeChecked - test
 * toBePartiallyChecked - test
 * toHaveErrorMessage - test
 * toBeEmpty - test
 * toBeInTheDOM - test
 * toHaveDescription - test
 */

beforeEach(() => render(<Component />)); // test마다 JSX.Element를 render 합니다.
afterEach(cleanup); // test마다 cleanup

describe("02. Matcher", () => {
  test("toBeDisabled And toBeEnabled", () => {
    const el = screen.getByTestId("001");
    expect(el).toBeInTheDocument();
    expect(el).toBeDisabled();

    // disabled을 삭제
    el.removeAttribute("disabled");
    expect(el).toBeEnabled();
  });

  test("toBeEmptyDOMElement", () => {
    const el = screen.getByTestId("002");
    expect(el).toBeInTheDocument();
    expect(el).toBeEmptyDOMElement();
  });

  test("toBeInvalid", () => {
    const el = screen.getByTestId("003");
    expect(el).toBeInTheDocument();
  });
});
