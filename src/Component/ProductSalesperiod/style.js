import styled from "styled-components";

export const ProductContainer = styled.span`
  font-size: 0.9em;
  font-weight: 900;
`;

export const TitleBox = styled.div`
  width: 20%;
  border-right: 0.1em solid rgb(227, 227, 227);
  border-top: 0.1em solid rgb(227, 227, 227);
`;

export const Input = styled.input.attrs({ type: "radio" })`
  width: 20px;
  color: blue;
  }
`;

export const Container = styled.div``;

export const RadioContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto 170px;
`;

export const CheckBoxWrapper = styled.div``;

export const CheckBox = styled.div``;

export const CheckBoxLabel = styled.div``;

export const DatePickerContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Separator = styled.p`
  display: flex;
  justify-content: center;
  margin: 0 20px;
`;
