import * as S from "./style";
import Container from "Component/Container";
import SelectImg from "Util/SelectImg";
import React, { useContext, useEffect, useState } from "react";
import { PDcontext } from "store/PDdata.js";

/*

간략히=======================

props = {

  ProductInfoList = {

    categoryList:[],
    filterTagList:[],

    Product:{
      idx:""
      category:[],
      filterTag:[],
      name:"",
      description:"",
      thumbnail:"",
      imgs:"",
      stock:"",
    }

  }

}


자세히========================

props = {
  ProductInfoList = {
    category:[ // 전체 카테고리 목록
      {
        idx:1,
        content: "카테고리1" String
      },
      {
        idx:1,
        content: "카테고리2" String
      },
      ...
    ], 
    filterTag:[ // 전체 필터태그 목록
      {
        idx:1,
        content: "필터태그1" String
      },
      {
        idx:2,
        content: "필터태그2" String
      },
      ...
    ], 
    product:{ // 등록할 상품에 대한 정보
      idx: "#1234" 고유번호 String
      category:[ // 선택한 카테고리,
        {
          idx:1,
          content:"카테고리1" String
        }
        ...
    ]
      filterTag:[ //// 선택한 필터태그
        {
          idx:1,
          content:"필터태그1" String
        }
        ...
      ]
      description:"" // string 상품 구성 소개 정보(설명)
      thumbnail: "" // string 상품 썸네일
      imgs: [ // 대표 이미지들
        {
          idx:1,
          content:"이미지1" String
        }
        ...
      ]
      stock: "" // int 상품 재고
    }
  }
}
*/

const ProductInfo = () => {
  return (
    <S.ProductInfoContainer>
      <Container
        ContainerHeader={<PIHeader />}
        ContainerContent={<PIContent />}
      />
    </S.ProductInfoContainer>
  );
};

export const PIHeader = (props) => {
  return <h4>상품 기본 정보</h4>;
};

export const PIContent = (props) => {
  const PIcontext = useContext(PDcontext).PIData;
  const optionContext = useContext(PDcontext).OptionSetData;
  const state = PIcontext.state;
  const setState = PIcontext.setState;
  const optionState = optionContext.state;
  const [filterTagData, setFilterTagData] = useState();
  const [productImgList, setProductImgList] = useState([]);
  const [thumbnail, setThumbnail] = useState("");
  const [openFilterBox, setOpenFilterBox] = useState(false);
  const [filterTagInput, setFilterTagInput] = useState("");
  const [stock, setStock] = useState(0);

  useEffect(() => {
    //console.log("ProductInfo: ", state);
  }, [state]);

  useEffect(() => {
    let stock = 0;

    if (optionState.length !== 0) {
      for (let i of optionState) {
        for (let j of i.optionList) {
          j.optionValue[2] !== ""
            ? (stock += parseInt(j.optionValue[2]))
            : (stock += parseInt(0));
        }
      }
    }
    setStock(stock);
  }, [optionState]);

  useEffect(() => {
    const filterTagCopyData = [...state.filterTagList];

    setFilterTagData(searchResultSort(filterTagCopyData));
  }, [state.filterTagList]);

  useEffect(() => {
    if (thumbnail !== "") {
      const newState = { ...state };
      newState.product.thumbnail = thumbnail[0];
      thumbnail.shift();
      setState(newState);
    }
  }, [thumbnail]);

  useEffect(() => {
    const newState = { ...state };

    if (productImgList.length > 0) {
      const target = [...productImgList][0];
      newState.product.imgs.unshift(target);
      setState(newState);
      //console.log(newState)
      setProductImgList([]);
    }
  }, [productImgList]);

  useEffect(() => {
    const idx = handleProductIdx();
    const newState = { ...state };
    newState.product.idx = idx;
    setState(newState);
  }, []);

  const handleProductCategory = (item) => {
    const newState = { ...state };

    const originalIndex = newState.categoryList.findIndex(
      (el) => el.idx === item.idx
    );

    if (!newState.categoryList[originalIndex].checked) {
      newState.product.category.push(newState.categoryList[originalIndex]);
    } else {
      const findIndex = newState.product.category.findIndex(
        (el) => el.idx === item.idx
      );
      newState.product.category.splice(findIndex, 1);
    }
    newState.categoryList[originalIndex].checked =
      !newState.categoryList[originalIndex].checked;

    setState(newState);
  };

  const handleProductFilterTag = (item, index) => {
    const newState = { ...state };

    const originalIndex = newState.filterTagList.findIndex(
      (el) => el.idx === item.idx
    );

    if (!newState.filterTagList[originalIndex].checked) {
      newState.product.filterTag.push(newState.filterTagList[originalIndex]);
    } else {
      const findIndex = newState.product.filterTag.findIndex(
        (el) => el.idx === item.idx
      );
      newState.product.filterTag.splice(findIndex, 1);
    }
    newState.filterTagList[originalIndex].checked =
      !newState.filterTagList[originalIndex].checked;

    setState(newState);
  };

  const handleProductFilterTagSearch = (e) => {
    setFilterTagInput(e.target.value);
  };

  const handleSearch = () => {
    let filterTagCopyData = [...state.filterTagList];

    filterTagCopyData =
      filterTagInput !== ""
        ? filterTagCopyData.filter((el) => {
            if (el.content.indexOf(filterTagInput) !== -1) return el;
          })
        : filterTagCopyData;

    setFilterTagData(searchResultSort(filterTagCopyData));
  };

  const handleKeyUp = (e) => {
    if (e.key === "Enter") {
      setOpenFilterBox(true);
      handleSearch();
    }
  };

  const searchResultSort = (arr) => {
    arr.sort((a, b) => {
      let x = a.content;
      let y = b.content;

      if (x < y) return -1;
      if (x > y) return 1;
      return 0;
    });

    return arr;
  };

  const handleProductDescription = (e) => {
    const newState = { ...state };

    newState.product.description = e.target.value;

    setState(newState);
  };

  const handleProductName = (e) => {
    const newState = { ...state };

    newState.product.name = e.target.value;

    setState(newState);
  };

  const handleProductIdx = () => {
    let idx = "#";

    const strArr = [];

    for (let i = "a"; i <= "z"; i++) {
      strArr.push(i);
    }

    for (let i = "A"; i <= "Z"; i++) {
      strArr.push(i);
    }

    for (let i = 0; i <= 9; i++) {
      strArr.push(i);
    }

    while (idx.length < 5) {
      idx += strArr[Math.floor(Math.random() * strArr.length)];
    }

    return idx;
  };

  const handleImgPop = (index) => {
    const newState = { ...state };
    newState.product.imgs.splice(index, 1);
    setState(newState);
  };

  const handleThumbnailPop = () => {
    const newState = { ...state };
    newState.product.thumbnail = "";
    setState(newState);
  };

  return (
    <S.ItemContainer>
      <S.Item>
        <S.Title>카테고리</S.Title>
        <S.InnerContainer width={`500px`}>
          <S.ListContainer width={`50%`}>
            {state.categoryList.map((item, index) => {
              return (
                <S.ListItem key={item.idx}>
                  <S.Check
                    type="checkbox"
                    value={index}
                    checked={item.checked}
                    onChange={() => {
                      handleProductCategory(item);
                    }}
                  />
                  {item.content}
                </S.ListItem>
              );
            })}
          </S.ListContainer>
          <S.ListContainer width={`30%`} className="selectedBox">
            {state.product.category.length !== 0 ? (
              state.product.category.map((item) => {
                return (
                  <S.Tag key={item.idx}>
                    {item.content}
                    <button
                      onClick={() => {
                        handleProductCategory(item);
                      }}
                    >
                      X
                    </button>
                  </S.Tag>
                );
              })
            ) : (
              <div>카테고리를 지정해주세요.</div>
            )}
          </S.ListContainer>
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>필터 태그</S.Title>
        <S.InnerContainer
          className="filterBox"
          onMouseEnter={() => {
            setOpenFilterBox(true);
          }}
          onMouseLeave={() => {
            setOpenFilterBox(false);
          }}
        >
          <S.InputContainer>
            <input
              type="text"
              placeholder="필터태그를 검색해 주세요."
              onChange={(e) => {
                handleProductFilterTagSearch(e);
              }}
              onClick={() => {
                setOpenFilterBox(!openFilterBox);
              }}
              onKeyPress={(e) => {
                handleKeyUp(e);
              }}
            />
            <button
              onClick={() => {
                handleSearch();
              }}
            >
              검색
            </button>
          </S.InputContainer>
          {openFilterBox && (
            <S.OverFlowContainer>
              <S.FilterTagBox className="filterContainer">
                {filterTagData.length !== 0 && <p> 선택 가능한 태그</p>}
                <S.ListContainer className="filterList">
                  {filterTagData.length === 0 ? (
                    <p>검색 결과가 없습니다.</p>
                  ) : (
                    filterTagData.map((item, index) => {
                      return (
                        !item.checked && (
                          <S.ListItem
                            checked={item.checked}
                            className="filterItem"
                            onClick={() => {
                              handleProductFilterTag(item, index);
                            }}
                            key={item.idx}
                          >
                            {item.content}
                          </S.ListItem>
                        )
                      );
                    })
                  )}
                </S.ListContainer>
              </S.FilterTagBox>
            </S.OverFlowContainer>
          )}
          {state.product.filterTag.length > 0 && (
            <S.OverFlowContainer>
              <S.FilterTagBox>
                {state.product.filterTag.length !== 0 && (
                  <p className="selectedFilterTag">지정된 필터태그</p>
                )}
                <S.ListContainer className="filterList">
                  {state.product.filterTag.map((item, index) => {
                    return (
                      item.checked && (
                        <S.ListItem
                          onClick={() => {
                            handleProductFilterTag(item, index);
                          }}
                          key={item.idx}
                        >
                          {item.content}
                        </S.ListItem>
                      )
                    );
                  })}
                </S.ListContainer>
              </S.FilterTagBox>
            </S.OverFlowContainer>
          )}
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>상품명</S.Title>
        <S.InnerContainer>
          <S.InputContainer>
            <input
              type="text"
              placeholder="상품명을 입력해주세요."
              onChange={(e) => {
                handleProductName(e);
              }}
            />
          </S.InputContainer>
          <S.ProductContainer>
            <span>상품 코드</span> <span>{state.product.idx}</span>
          </S.ProductContainer>
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>상품 구성 소개 정보</S.Title>
        <S.InnerContainer>
          <S.InputContainer>
            <input
              type="text"
              onChange={(e) => {
                handleProductDescription(e);
              }}
              placeholder="상품 구성 소개 정보를 입력해 주세요."
            />
          </S.InputContainer>
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>상품 썸네일</S.Title>
        <S.InnerContainer>
          <SelectImg imgList={thumbnail} imgSetter={setThumbnail} />
          <div className="thumbnail">
            {state.product.thumbnail !== "" && (
              <>
                {" "}
                {state.product.thumbnail.name}{" "}
                <button
                  onClick={() => {
                    handleThumbnailPop();
                  }}
                >
                  X
                </button>{" "}
              </>
            )}
          </div>
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>
          상품 대표 <br />
          이미지
        </S.Title>
        <S.InnerContainer>
          <SelectImg imgList={productImgList} imgSetter={setProductImgList} />
          <S.ListContainer className="imgBox">
            {state.product.imgs.length > 0 &&
              state.product.imgs.map((item, index) => {
                return (
                  <S.ListItem key={index}>
                    {item.name}{" "}
                    <button
                      onClick={() => {
                        handleImgPop(index);
                      }}
                    >
                      X
                    </button>
                  </S.ListItem>
                );
              })}
          </S.ListContainer>
        </S.InnerContainer>
      </S.Item>
      <S.Item>
        <S.Title>상품 총 재고</S.Title>
        <S.InnerContainer>
          <span>{stock}개</span>
        </S.InnerContainer>
      </S.Item>
    </S.ItemContainer>
  );
};

export default React.memo(ProductInfo);
