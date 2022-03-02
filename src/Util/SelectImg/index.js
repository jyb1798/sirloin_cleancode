import React, { useCallback, useRef } from "react";
import * as S from "Util/SelectImg/style.js";
const SelectImg = (props) => {
  const imgList = props.imgList;
  const imgSetter = props.imgSetter;
  const imgInput = useRef();

  const handleImage = (e) => {
    imgSetter([...imgList, e.target.files[0]])
    e.target.value = '';
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <S.Button
        onClick={useCallback(() => imgInput.current.click(), [imgInput])}
      >
        + 이미지 첨부
      </S.Button>
      <S.Input
        type={"file"}
        accept="image/*"
        onChange={useCallback((e) =>
          handleImage(e)
        )}
        ref={imgInput}
      ></S.Input>
    </form>
  );
};

export default React.memo(SelectImg);
