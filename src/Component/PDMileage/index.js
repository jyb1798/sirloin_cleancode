import React, { useContext } from "react";
import { PDcontext } from "store/PDdata.js";
import Container from "Component/Container";
import Toggle from "Util/Toggle";
import * as S from "./style.js";

const PDMheader = () => {
  return <S.Header>상품 혜택 허용 결정</S.Header>;
};

const PDMContent = () => {
  const context = useContext(PDcontext).PDMileage;
  const state = context.state;
  const setState = context.setState;

  return (
    <S.Warpper>
      <S.Title>마일리지 적립</S.Title>
      <S.Content>
        <Toggle state={state} setState={setState} />
      </S.Content>
    </S.Warpper>
  );
};

const PDMileage = () => {
  const context = useContext(PDcontext).PDMileage;
  const state = context.state;
  const setState = context.setState;
  return (
    <Container
      ContainerHeader={<PDMheader />}
      ContainerContent={<PDMContent />}
    />
  );
};

export default PDMileage;
