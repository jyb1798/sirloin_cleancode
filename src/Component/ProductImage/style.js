import styled from "styled-components";

export const ProductImageContainer = styled.div`
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  font-weight: 600;

  h4 {
    margin: 0 0 0 10px;
    height: 30px;
    display: flex;
    align-items: center;
  }
`;

export const InnerContainer = styled.div`
  height: 100px;
  padding: 10px 12px;
  display: flex;
`;

export const ImageContainer = styled.ul`
  width: 80%;
  margin: 0 0 0 20px;
  overflow-y: scroll;
  list-style: none;

  button{
      border-radius: 50px;
      border:1px solid black;
      width: 25px;
      height: 25px;
      margin-left: 10px;
      cursor: pointer;
  }

  &::-webkit-scrollbar {
    border-radius: 6px;
    background: none;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4bd;
  }
`;

export const ImageItem = styled.li``;
