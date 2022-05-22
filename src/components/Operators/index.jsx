import OperatorButton from "./OperatorButton";

export const 연산자들 = {
  나누기: "/",
  곱하기: "*",
  빼기: "-",
  더하기: "+",
  결과구하기: "=",
};

const Operators = ({ setOperator, calculate }) => {
  return (
    <>
      {/* {Object.keys(연산자들).map((operator) => (
        <OperatorButton key={operator} 고정연산자={연산자들[operator]} setOperator={setOperator} digit={digit} nextNum={nextNum} />
      ))} */}
      <OperatorButton 고정연산자={"/"} setOperator={setOperator} />
      <OperatorButton 고정연산자={"*"} setOperator={setOperator} />
      <OperatorButton 고정연산자={"-"} setOperator={setOperator} />
      <OperatorButton 고정연산자={"+"} setOperator={setOperator} />
      <OperatorButton 고정연산자={"="} calculate={calculate} setOperator={setOperator} />
    </>
  );
};

export default Operators;
