import styled from "styled-components";

export const ProductContainer = styled.span`
  font-size: 0.9em;
  font-weight: 900;
`;

export const ProductListContainer = styled.div`
  display: flex;
`;

export const TitleBox = styled.div`
  width: 20%;
  border-right: 0.1em solid rgb(227, 227, 227);
  border-top: 0.1em solid rgb(227, 227, 227);
`;

export const ContentsBox = styled.div`
  width: 80%;
  border-top: 0.1em solid rgb(227, 227, 227);
`;

export const Input = styled.input.attrs({ type: "radio" })`
  width: 20px;
  color: blue;
  }
`;

export const Box = styled.div`
  display: flex
  flex-direction: column;
  margin : 10px 20px;
`;

export const DateTimePickersContainer = styled.div`
  display: flex;
  margin: 20px 30px;
`;
