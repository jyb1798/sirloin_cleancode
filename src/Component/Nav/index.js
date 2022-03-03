import React from "react";
import * as S from "./style";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const Nav = (props) => {
  const menu = [
    { id: 1, title: "Sir.LOIN" },
    { id: 2, title: "기본설정" },
    { id: 3, title: "회원" },
    { id: 4, title: "진열" },
    { id: 5, title: "상품" },
    { id: 6, title: "상품 리스트" },
    { id: 7, title: "상품 재고 관리" },
    { id: 8, title: "상품 등록" },
    { id: 9, title: "주문" },
    { id: 10, title: "배송" },
    { id: 11, title: "프로모션" },
    { id: 12, title: "혜택" },
    { id: 13, title: "혜택" },
    { id: 14, title: "고객 센터 관리" },
    { id: 15, title: "알림" },
  ];

  return (
    <S.NavContainer>
      {menu.map((index, title) => (
        <S.NavMenu key={index.id}>
          <S.MenuDropDown>
            <div>{index.title}</div>
            <S.DropDownImage
              key={index.id}
              selected={index.id}
              icon={faChevronDown}
            />
          </S.MenuDropDown>
        </S.NavMenu>
      ))}
    </S.NavContainer>
  );
};

export default Nav;
