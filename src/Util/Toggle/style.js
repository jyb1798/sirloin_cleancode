import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
position: relative;
`;

export const CheckBoxLabel = styled.label` //53, 47, 110 
position: absolute;
top: 0;
left: 0;
width: 42px;
height: 15px;
border-radius: 15px;
background: #bebebe;
cursor: pointer;
&::after {
  content: "";
  display: block;
  position: relative;
  top: -5px;
  left: -3px;
  border-radius: 50%;
  width: 18px;
  height: 18px;
  margin: 3px;
  background: #ffffff;
  box-shadow: 1px 3px 3px 1px rgba(0, 0, 0, 0.2);
  transition: 0.2s;
}
`;

export const CheckBox = styled.input`
opacity: 0;
z-index: 1;
border-radius: 15px;
width: 42px;
height: 15px;
&:checked + ${CheckBoxLabel} {
  background:  rgb(174, 168, 230);
  &::after {
    content: "";
    display: block;
    position: absolute;
    left: 5px;
    background: rgb(42, 35, 189);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    margin-left: 21px;
    transition: 0.2s;
  }
}
`;