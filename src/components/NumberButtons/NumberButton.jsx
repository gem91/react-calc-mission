import React from "react";
import styled from "styled-components";

const Button = styled.button`
  flex: 1 0 30%;
  font-size: 2rem;
  border: 0.5px solid #989898;
  background-color: #efefef;
`;

const NumberButton = ({ number, setDigit, setNextNum, operator }) => {
  const alertDigit = () => {
    const calculate = operator === null ? setDigit : setNextNum;

    calculate((num) => {
      if (num >= 100) {
        alert("3자리까지만 됩니다.");
        return num;
      }
      return num * 10 + number;
    });
  };

  return <Button onClick={alertDigit}>{number}</Button>;
};

export default NumberButton;
