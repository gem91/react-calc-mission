import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 2rem;
  border: 0.5px solid #989898;
  background-color: orange;
`;
const OperatorButton = ({ 고정연산자, setOperator, calculate }) => {
  const onOpertator = () => {
    // = 일때 calculate => 첫번째와 두번째를 더하는 메서드
    // setOperator => 내가 뭘 눌렀는지 연산자를 업데이트한다.
    if (고정연산자 === "=") {
      calculate();
    } else {
      setOperator(고정연산자);
    }
    // console.log(`이거 ${고정연산자}`);

    // console.log(`클릭 ${calculate}`);
    // if (고정연산자 == "=") {
    //   calculate();
    // } else {
    //   return;
    // }
  };

  return <Button onClick={onOpertator}>{고정연산자}</Button>;
};

export default OperatorButton;
