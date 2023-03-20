import "./App.css";
import styled from "styled-components";
import ResultPannel from "./components/ResultPannel";
import AllClear from "./components/AllClear";
import Operators from "./components/Operators";
import NumberButtons from "./components/NumberButtons";
import { useEffect, useState } from "react";

const CalculatorContainer = styled.div`
  margin: 20px auto 0;
  width: 300px;
  display: grid;
  grid-template-areas:
    "total total total total"
    "modif modif modif oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper"
    "digit digit digit oper";
  grid-auto-columns: 1fr;
  grid-auto-rows: 1fr;
  height: 500px;
`;

function Calculator() {
  const [displayDigit, setDisplayDisit] = useState(0);
  const [digit, setDigit] = useState(0);
  const [nextNum, setNextNum] = useState(0);
  const [operator, setOperator] = useState(null);

  const calculate = () => {
    // 덧셈로직
    switch (operator) {
      case "+":
        setDigit(digit + nextNum);
        break;

      case "-":
        setDigit(digit - nextNum);
        break;

      case "/":
        setDigit(Math.floor(digit / nextNum));
        break;

      case "*":
        setDigit(digit * nextNum);
        break;
    }
    setOperator(null);
  };

  useEffect(() => {
    console.log(operator);
  }, [operator]);

  useEffect(() => {
    if (operator === null) {
      setDisplayDisit(digit);
      return;
    }
    setDisplayDisit(nextNum);
  }, [digit, nextNum, operator]);

  return (
    <>
      <CalculatorContainer>
        <ResultPannel data={displayDigit} />
        <AllClear setDigit={setDigit} setNextNum={setNextNum} />
        <Operators setOperator={setOperator} digit={digit} nextNum={nextNum} calculate={calculate} />
        <NumberButtons setDigit={setDigit} setNextNum={setNextNum} operator={operator} />
      </CalculatorContainer>
    </>
  );
}

export default Calculator;
