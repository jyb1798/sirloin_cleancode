import styled from "styled-components";

export const RadioWrapper = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  position: relative;
  margin-bottom: 15px;
`;

export const RadioButton = styled.input.attrs(() => ({
  type: "radio",
}))`
  display: block;
  width: 20px;
  height: 20px;
  margin: 0;
  border: 1px solid #ccc;
  border-radius: 10px;
  appearance: none;
  &:checked {
    appearance: none;
  }
  &:checked&::after {
    content: "";
    position: absolute;
    left: 4px;
    top: 9px;
    width: 12px;
    height: 12px;
    border-radius: 20px;
    background-color: #28205c;
  }
`;

export const Label = styled.label`
  padding-left: 10px;
  line-height: 30px;
`;
