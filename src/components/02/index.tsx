import React from "react";

const Tutorial02: React.FC = () => {
  return (
    <div>
      <h3>Matcher</h3>
      <input data-testid="001" type="text" disabled />
      <div data-testid="002"></div>
      <div data-testid="003"></div>
    </div>
  );
};

export default Tutorial02;
