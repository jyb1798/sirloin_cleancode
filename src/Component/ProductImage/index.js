import Container from "Component/Container";
import React from "react";
import * as S from "./style";
import SelectImg from "Util/SelectImg";
import { useState, useContext, useEffect } from "react";
import { PDcontext } from "store/PDdata.js";

const PDIntroduceHeader = () => {
  return <h4>상품 소개 이미지</h4>;
};

const PDIntroduceContent = () => {
  const [PDIntroduceImg, setPDIntroduceImg] = useState([]);
  const PDImageContext = useContext(PDcontext).PDImage;
  const state = PDImageContext.state;
  const setState = PDImageContext.setState;

  useEffect(() => {}, [state]);

  useEffect(() => {
    const newState = { ...state };

    if (PDIntroduceImg.length > 0) {
      const newItem = [...PDIntroduceImg][0];
      newState.productIntroduceImg.unshift(newItem);
      setState(newState);
      setPDIntroduceImg([]);
    }
  }, [PDIntroduceImg]);

  const handlePop = (index) => {
    const newState = { ...state };
    newState.productIntroduceImg.splice(index, 1);
    setState(newState);
  };

  return (
    <S.InnerContainer>
      <SelectImg imgList={PDIntroduceImg} imgSetter={setPDIntroduceImg} />
      <S.ImageContainer>
        {state.productIntroduceImg.length > 0 &&
          state.productIntroduceImg.map((item, index) => {
            return (
              <S.ImageItem key={index}>
                {item.name}
                <button
                  onClick={() => {
                    handlePop(index);
                  }}
                >
                  X
                </button>
              </S.ImageItem>
            );
          })}
      </S.ImageContainer>
    </S.InnerContainer>
  );
};

const PDBuyerHeader = () => {
  return <h4>구매자 추천 이미지</h4>;
};

const PDBuyerContent = () => {
  const [PDBuyerImg, setPDBuyerImg] = useState([]);
  const PDImageContext = useContext(PDcontext).PDImage;
  const state = PDImageContext.state;
  const setState = PDImageContext.setState;

  useEffect(() => {
    const newState = { ...state };

    if (PDBuyerImg.length > 0) {
      const newItem = [...PDBuyerImg][0];
      newState.productBuyerImg.unshift(newItem);
      setPDBuyerImg([]);
      setState(newState);
    }
  }, [PDBuyerImg]);

  const handlePop = (index) => {
    const newState = { ...state };
    newState.productBuyerImg.splice(index, 1);
    setState(newState);
  };

  return (
    <S.InnerContainer>
      <SelectImg imgList={PDBuyerImg} imgSetter={setPDBuyerImg} />
      <S.ImageContainer>
        {state.productBuyerImg.length > 0 &&
          state.productBuyerImg.map((item, index) => {
            return (
              <S.ImageItem key={index}>
                {item.name}
                <button
                  onClick={() => {
                    handlePop(index);
                  }}
                >
                  X
                </button>
              </S.ImageItem>
            );
          })}
      </S.ImageContainer>
    </S.InnerContainer>
  );
};

const ProductImage = () => {
  return (
    <S.ProductImageContainer>
      <Container
        ContainerHeader={<PDIntroduceHeader />}
        ContainerContent={<PDIntroduceContent />}
      />
      <Container
        ContainerHeader={<PDBuyerHeader />}
        ContainerContent={<PDBuyerContent />}
      />
    </S.ProductImageContainer>
  );
};

export default ProductImage;
