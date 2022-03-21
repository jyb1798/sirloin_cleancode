import * as S from "./style";
import Container from "Component/Container";
import DateTime from "Util/DateTime";
import DateTimePicker from "react-datetime-picker";
import Date from "Util/DateTime/Date";
import React, { useContext, useEffect, useState } from "react";
import { PDcontext } from "store/PDdata";
import * as ST from "Util/Toggle/style.js";
import "react-datepicker/dist/react-datepicker.css";

const ProductDelivery = () => {
  return (
    <S.ProductDeliveryContainer>
      <Container
        ContainerHeader={<PDeliveryHeader />}
        ContainerContent={<PDeliveryContent />}
      />
    </S.ProductDeliveryContainer>
  );
};

export const PDeliveryHeader = () => {
  return <S.HeaderContainer>상품 배송 설정</S.HeaderContainer>;
};

const PDdesign = () => {
  const deliveryContext = useContext(PDcontext).PDInfo;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;
  return (
    <S.Content>
      <S.titleBox>
        <S.titleSpan>사용자 배송일 출발일 지정</S.titleSpan>
      </S.titleBox>
      <S.ContentBox>
        <ST.CheckBoxWrapper>
          <ST.CheckBox
            checked={deliveryState.isDesignated}
            id="checkbox"
            type="checkbox"
          />
          <ST.CheckBoxLabel
            htmlFor="checkbox"
            onClick={() => {
              const newState = { ...deliveryState };
              newState.isDesignated = !newState.isDesignated;
              setDeliveryState(newState);
            }}
          />
        </ST.CheckBoxWrapper>
      </S.ContentBox>
    </S.Content>
  );
};

const PDpickup = () => {
  const deliveryContext = useContext(PDcontext).PDInfo;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;
  return (
    <S.Content className="bottom_border">
      <S.titleBox>
        <S.titleSpan>방문 수령</S.titleSpan>
      </S.titleBox>
      <S.ContentBox>
        <ST.CheckBoxWrapper>
          <ST.CheckBox
            checked={deliveryState.isPickup}
            id="checkbox"
            type="checkbox"
          />
          <ST.CheckBoxLabel
            htmlFor="checkbox"
            onClick={() => {
              const newState = { ...deliveryState };
              newState.isPickup = !newState.isPickup;
              setDeliveryState(newState);
            }}
          />
        </ST.CheckBoxWrapper>
      </S.ContentBox>
    </S.Content>
  );
};

export const PDeliveryContent = () => {
  const deliveryContext = useContext(PDcontext).PDInfo;
  const deliveryState = deliveryContext.state;
  const setDeliveryState = deliveryContext.setState;

  //console.log(deliveryState);

  const [startPeriodState, setStartPeriodState] = useState(
    deliveryState.orderPeriodStart
  );
  const [endPeriodState, setEndPeriodState] = useState(
    deliveryState.orderPeriodEnd
  );
  const [earlyMorningState, setEarlyMorningState] = useState(
    deliveryState.earlyMorningDate
  );
  const [normalState, setNormalState] = useState(deliveryState.nomalDate);

  useEffect(() => {
    if (Number(deliveryState.orderPeriodEnd) > Number(earlyMorningState)) {
      alert("주문시간 이후로 출고일을 지정해주세요.");
    }
    const newState = { ...deliveryState };
    newState.earlyMorningDate = earlyMorningState;
    setDeliveryState(newState);
  }, [earlyMorningState]);

  useEffect(() => {
    if (Number(deliveryState.orderPeriodEnd) > Number(normalState)) {
      alert("주문시간 이후로 출고일을 지정해주세요.");
    }
    const newState = { ...deliveryState };
    newState.normalDate = normalState;
    setDeliveryState(newState);
  }, [normalState]);

  useEffect(() => {
    const newState = { ...deliveryState };
    newState.orderPeriodStart = startPeriodState;
    setDeliveryState(newState);
    //console.log(deliveryState);
  }, [startPeriodState]);

  // toggle 조작 start
  useEffect(() => {
    if (
      deliveryState.isDesignated === true ||
      deliveryState.isPickup === true
    ) {
      const editState = { ...deliveryState };
      editState.ispreOrder = false;
      setDeliveryState(editState);
    }
  }, [deliveryState.isDesignated, deliveryState.isPickup]);

  useEffect(() => {
    if (deliveryState.ispreOrder === true) {
      const editState = { ...deliveryState };
      editState.isDesignated = false;
      editState.isPickup = false;
      setDeliveryState(editState);
    }
  }, [deliveryState.ispreOrder]);
  // toggle 조작 end

  return (
    <>
      <div className="container">
        <PDdesign />
        <PDpickup />
        <S.Content>
          <S.titleBox>
            <S.titleSpan>선 주문 예약 배송</S.titleSpan>
          </S.titleBox>
          <S.ContentBox className="preorder_content_box">
            <ST.CheckBoxWrapper className="bottom_margin">
              <ST.CheckBox
                checked={deliveryState.ispreOrder}
                id="checkbox"
                type="checkbox"
              />
              <ST.CheckBoxLabel
                htmlFor="checkbox"
                onClick={() => {
                  const newState = { ...deliveryState };
                  newState.ispreOrder = !newState.ispreOrder;
                  setDeliveryState(newState);
                }}
              />
            </ST.CheckBoxWrapper>
            <div className="flex bottom_margin">
              <S.PreOrderSpan>주문시간</S.PreOrderSpan>
              <DateTimePicker
                state={startPeriodState}
                setState={setStartPeriodState}
                acitve={deliveryState.ispreOrder}
              />
              <S.Separator>~</S.Separator>
              <DateTimePicker
                state={endPeriodState}
                setState={setEndPeriodState}
                acitve={deliveryState.ispreOrder}
              />
            </div>
            <div className="flex bottom_margin">
              <div className="flex margin-right-more">
                <S.PreOrderSpan className="margin-right">
                  새벽배송
                </S.PreOrderSpan>
                <Date
                  state={earlyMorningState}
                  setState={setEarlyMorningState}
                />
              </div>
              <div className="flex">
                <S.PreOrderSpan className="margin-right">
                  일반배송
                </S.PreOrderSpan>
                <Date state={normalState} setState={setNormalState} />
              </div>
            </div>
          </S.ContentBox>
        </S.Content>
      </div>
    </>
  );
};

export default ProductDelivery;
