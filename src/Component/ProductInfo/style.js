import styled from "styled-components";

export const ProductInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin:1rem;
  border: 0.1em solid rgb(227,227,227); */
  font-weight: 600;

  h4 {
    margin: 0.5rem;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

  }



  .selectedBox{
    margin-left:30px;
  }

  .filterBox {
    flex-direction: column;
  }
  
  .filterContainer{
  }

  .imgBox{
    width: 100%;
    overflow-y:auto;
    display: grid;
    grid-template-columns: 1fr;
    grid-row-gap: 5px;
    margin-left: 30px;
  }

  .thumbnail{
    margin-left:30px;
    align-self: center;
    button{
      border-radius: 50px;
      border:1px solid black;
      width: 25px;
      height: 25px;
  }
}
`;

export const Title = styled.span`
  width: 160px;
  min-height: 65px;
  display: flex;
  align-items: center;
  font-weight: 700;
  margin: 0.5rem;
`;

export const ItemContainer = styled.ul`
  width: 100%;
  height: 100%;
`;

export const Item = styled.li`
  display: flex;
  :not(:last-child) {
    border-bottom: none;
  }
`;

export const InnerContainer = styled.div`
  display: flex;
  padding: 10px 12px;
  width: 100%;
`;

export const ListContainer = styled.ul`
  height: 100px;
  overflow-y: scroll;
  /* width: ${(props) => props.width}; */
  width: 100%;
  border-radius: 4px;

  &::-webkit-scrollbar {
    border-radius: 6px;
    background: none;
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 6px;
    background-color: #c4c4bd;
  }
  

  button{
    border-radius: 50px;
    border:1px solid black;
    width: 25px;
    height: 25px;
  }
`;

export const ListItem = styled.li``;

export const Tag = styled.li`
  background-color: #ddd;
  border: 1px solid cornflowerblue;
  border-radius: 4px;
  padding: 6px 8px;
  margin-bottom: 8px;
  width: 200px;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Check = styled.input``;

export const InputContainer = styled.div`
  border: 0.1em solid rgb(227, 227, 227);
  border-radius: 4px;
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;

  input {
    height: 100%;
    width: 95%;
    background: none;
    outline: none;
    border: none;
    font-size: 14px;
  }

  button {
    background-color: none;
    border:1px solid #414;
    border-radius:5px;
    width: 70px;
    height: 80%;
    font-weight: 600;
  }
`;

export const ProductContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;

  span {
    width: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  span:nth-child(1) {
    border-right: 1px solid #eee;
  }
`;

export const ScrollContainer = styled.div`
  border: 1px solid #eee;
  border-radius: 4px;
  width: 70%;
  padding: 4px 6px;

  input {
    height: 100%;
    width: 90%;
    background: none;
    outline: none;
    border: none;
  }
`;

export const FilterTagBox = styled.div`
  border-radius: 10px;
  width: 100%;
  height: 200px;
  overflow-y: scroll;
  padding: 6px 8px;

  & .selectedFilterTag{
    animation: up 0.5 ease;
  }
  

  &.filterContainer{
    animation: down 0.5s ease;
    li{
      animation: down 0.5s ease;
    }
  }
  
  .filterList {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, auto));
    grid-row-gap: 10px;
    overflow-y: scroll;
    animation: up 0.5s ease;
    li {
      margin-left: 10px;
      padding: 6px 8px;
      background-color: #c5e699;
      display:flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 30px;
      border-radius: 4px;
      cursor: pointer;
      animation: up 0.5s ease;
    }
  }


  @keyframes down {
    0%{
      transform: translateY(-300px);
    }
    100%{
      transform: translateY(0);
    }
  }

  @keyframes up {
    0%{
      transform: translateY(300px);
    }
    100%{
      transform: translateY(0);
    }
  }
`;

export const OverFlowContainer = styled.div`
overflow: hidden;
`