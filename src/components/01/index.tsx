import React from "react";

const Tutorial01: React.FC = () => {
  return (
    <div>
      <h2 className="title">선택자</h2>
      <div title="this_is_title">Title!!</div>
      <div role="this_is_role">Role!!</div>
      <div data-testid="1011110"></div>
      <input type="input" aria-label="input" defaultValue="안녕하세요." placeholder="내용을 입력해주세요." alt="alt" />
    </div>
  );
};

export default Tutorial01;
