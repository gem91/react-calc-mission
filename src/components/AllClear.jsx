import React from "react";
import styled from "styled-components";

const Button = styled.button`
  grid-area: modif;
  grid-auto-flow: column;
  grid-auto-columns: 1fr;

  font-size: 2rem;
  border: 0.5px solid #98999b;
  background-color: #ccc;
`;

const AllClear = ({ setDigit, setNextNum }) => {
  const onClear = () => {
    setDigit(0);
    setNextNum(0);
  };
  return <Button onClick={onClear}>AC</Button>;
};

export default AllClear;
