import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const NavContainer = styled.ul`
  list-style-type: none;
  margin-top: -13px;
  padding: 0;
  width: 10%;
  position: fixed;
  height: 100%;
  overflow: auto;
  border-right: 1px solid gray;
`;

export const NavMenu = styled.li`
  color: #000;
  padding: 8px 20px;
  text-decoration: none;
  text-align: left;
  font-weight: 600;
  border-bottom: 1px solid gray;
  &:first-child {
    padding: 12px 20px;
    color: rgb(53, 47, 110);
    font-size: 16px;
    height: 4em;
    box-sizing: border-box;
    div{
      margin-top:0.5em;
    }
  }
  &:nth-child(n + 6):nth-child(-n + 7) {
    background: rgb(229, 229, 229);
  }
  &:nth-child(8) {
    color: rgb(53, 47, 110);
    background: rgb(53, 47, 110, 0.3);
  }
`;

export const MenuDropDown = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const DropDownImage = styled(FontAwesomeIcon)`
  width: 10px;
  height: 10px;
  margin-top: 3%;
  display: ${(props) =>
    (props.selected === 1 ||
      props.selected === 6 ||
      props.selected === 7 ||
      props.selected === 8) &&
    "none"};
}
`;
