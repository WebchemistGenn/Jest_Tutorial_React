# Tutorial for React Jest

> 본 튜토리얼은 [Jest의 간단한 사용법](https://github.com/WebchemistGenn/Jest_Tutorial)을 배운 이후 프론트엔드로써의 화면 테스트를 Facebook에서 권장하는 React Testing Library로 진행하는 내용을 담습니다.

1. Basic Usage
<details>
<summary>Selector</summary>
<div>

(`get`|`query`|`find`)ByText - text의 값으로 선택  
(`get`|`query`|`find`)ByLabelText - label의 값으로 선택  
(`get`|`query`|`find`)ByPlaceholderText - placeholder의 값으로 선택  
(`get`|`query`|`find`)ByDisplayValue - 현재 화면에 보이는 내용으로 선택 ( 존재여부로 placeholder와 같은 것은 제외 )  
(`get`|`query`|`find`)ByAltText - alt의 값으로 선택  
(`get`|`query`|`find`)ByTitle - title의 값으로 선택  
(`get`|`query`|`find`)ByRole - role의 값으로 선택  
(`get`|`query`|`find`)ByTestId - testId의 값으로 선택

</div>
</details>

<details>
<summary>Matcher</summary>
<div>

toBeDisabled - test  
toBeEnabled - test  
toBeEmptyDOMElement - test  
toBeInTheDocument - 해당 Component가 Document에 존재하는지 확인
toBeInvalid - test  
toBeRequired - test  
toBeValid - test  
toBeVisible - test  
toContainElement - test  
toContainHTML - test  
toHaveAccessibleDescription - test  
toHaveAccessibleName - test  
toHaveAttribute - test  
toHaveClass - test  
toHaveFocus - test  
toHaveFormValues - test  
toHaveStyle - test  
toHaveTextContent - 해당 Component에 일정한 Text가 존재하는지 확인  
toHaveValue - test  
toHaveDisplayValue - test  
toBeChecked - test  
toBePartiallyChecked - test  
toHaveErrorMessage - test  
toBeEmpty - test  
toBeInTheDOM - test  
toHaveDescription - test

</div>
</details>

2. Snapshots Usege
3. Queries Usege
4. Actions Usege
