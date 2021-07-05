import React from "react";

interface Props {
  title: string;
}

const Tutorial03: React.FC<Props> = ({ title }) => {
  return <div>{title}</div>;
};

export default Tutorial03;
