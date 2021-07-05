import { render, screen, cleanup } from "@testing-library/react";
import Component from "./index";

// 표준 getBy 메소드는 요소를 찾을 수 없으면 오류를 발생시킵니다.
// DOM에 요소가 없다고 주장하고 싶다면, queryBy API를 대신 사용할 수 있습니다.
// findBy의 경우는 비동기시에 사용합니다.

/**
 * [get|query|find]ByText - text의 값으로 선택
 * [get|query|find]ByLabelText - label의 값으로 선택
 * [get|query|find]ByPlaceholderText - placeholder의 값으로 선택
 * [get|query|find]ByDisplayValue - 현재 화면에 보이는 내용으로 선택 ( 존재여부로 placeholder와 같은 것은 제외 )
 * [get|query|find]ByAltText - alt의 값으로 선택
 * [get|query|find]ByTitle - title의 값으로 선택
 * [get|query|find]ByRole - role의 값으로 선택
 * [get|query|find]ByTestId - testId의 값으로 선택
 */

beforeEach(() => render(<Component />)); // test마다 JSX.Element를 render 합니다.
afterEach(cleanup); // test마다 cleanup

describe("01. 선택자", () => {
  test("getByText", () => {
    const GetByTextEl = screen.getByText(/선택자/i);
    expect(GetByTextEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByLabelText", () => {
    const GetByLabelTextEl = screen.getByLabelText("input");
    expect(GetByLabelTextEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByPlaceholderText", () => {
    const GetByPlaceholderTextEl = screen.getByPlaceholderText("내용을 입력해주세요.");
    expect(GetByPlaceholderTextEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByDisplayValue", () => {
    const GetByDisplayValueEl = screen.getByDisplayValue("안녕하세요.");
    expect(GetByDisplayValueEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByAltText", () => {
    const GetgetByAltTextEl = screen.getByAltText("alt");
    expect(GetgetByAltTextEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByTitle", () => {
    const GetByTitleEl = screen.getByTitle("this_is_title");
    expect(GetByTitleEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByRole", () => {
    const GetByRoleEl = screen.getByRole("this_is_role");
    expect(GetByRoleEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });

  test("getByTestId", () => {
    const GetByTestIdEl = screen.getByTestId("1011110");
    expect(GetByTestIdEl).toBeInTheDocument(); // 해당 Element가 Document에 존재여부
  });
});
