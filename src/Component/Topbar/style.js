import styled from "styled-components";

export const Bar = styled.div`
  width: 90%;
  height: 3.7em;
  padding: 0 3%;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  border-bottom: 0.1em solid rgb(227, 227, 227);
  background-color: none;
  display: flex;
  justify-content: space-between;
  z-index: 99;
`;
export const Title = styled.span`
  font-weight: 600;
  font-size: 1.5em;
  margin-top: 0.5em;
`;

export const SaveButton = styled.button`
  background: rgb(53, 47, 110);
  color: rgb(239, 239, 239);
  border: none;
  width: 7em;
  border-radius: 9px;
  margin: 0.6em 1em;
`;
