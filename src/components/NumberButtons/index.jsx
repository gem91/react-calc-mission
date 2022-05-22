import React from "react";
import NumberButton from "./NumberButton";
import styled from "styled-components";

const NumberContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row-reverse;
  grid-area: digit;
`;

const NumberButtons = ({ setDigit, setNextNum, operator }) => {
  const numbers = [...Array(10).keys()].reverse();
  return (
    <NumberContainer>
      {numbers.map((number) => (
        <NumberButton key={number} number={number} setDigit={setDigit} setNextNum={setNextNum} operator={operator} />
      ))}
    </NumberContainer>
  );
};

export default NumberButtons;
