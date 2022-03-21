import React, { useContext } from 'react';
import { PDcontext } from 'store/PDdata.js';

const ProductInfoNOticeInput = ({
  productname,
  origin,
  rating,
  productstorage,
  category,
}) => {
  const orderContext = useContext(PDcontext).PIOrder;
  const orderState = orderContext.state;
  const setOrderState = orderContext.setState;

  const addMoreInfo = e => {
    let seletedIndex = e.target.closest('.info_notify').dataset.index;
    const newState = [...orderState];
    newState[seletedIndex].moreinfo.push({
      title: '',
      content: '',
    });
    setOrderState(newState);
  };

  return (
    <>
      <div className="top_container">
        <div>
          {orderState.map((el, idx) => (
            <div key={idx} className="info_notify" data-index={idx}>
              <div className="title">
                <span>정보고시 {idx + 1}</span>
                <button
                  className="order_delete_btn"
                  onClick={() => {
                    const newState = [...orderState];
                    newState.splice(idx, 1);
                    setOrderState(newState);
                    console.log(orderState);
                  }}
                >
                  삭제
                </button>
              </div>
              <div>
                <span>제품명 / 중량</span>
                <input
                  type="text"
                  name={productname}
                  value={orderState[idx].productname}
                  placeholder="제품명 / 중량을 입력해주세요."
                  onChange={e => {
                    const newState = [...orderState];
                    newState[idx].productname = e.target.value;
                    setOrderState(newState);
                  }}
                />
              </div>
              <div>
                <span>원산지 / 원재료 함량</span>
                <input
                  type="text"
                  value={orderState[idx].origin}
                  name={origin}
                  placeholder="원산지 / 원재 함량을 입력해주세요."
                  onChange={e => {
                    const newState = [...orderState];
                    newState[idx].origin = e.target.value;
                    setOrderState(newState);
                  }}
                />
              </div>
              <div>
                <span>등급</span>
                <input
                  type="text"
                  value={orderState[idx].rating}
                  name={rating}
                  placeholder="등급(근내지방도 수치)를 입력해주세요."
                  onChange={e => {
                    const newState = [...orderState];
                    newState[idx].rating = e.target.value;
                    setOrderState(newState);
                  }}
                />
              </div>
              <div>
                <span>보관</span>
                <input
                  type="text"
                  value={orderState[idx].productstorage}
                  name={productstorage}
                  placeholder="보관 방식을 입력해주세요."
                  onChange={e => {
                    const newState = [...orderState];
                    newState[idx].productstorage = e.target.value;
                    setOrderState(newState);
                  }}
                />
              </div>
              <div>
                <span>식품 유형</span>
                <input
                  type="text"
                  value={orderState[idx].category}
                  name={category}
                  placeholder="식품 유형을 입력해주세요. (ex) 포장육"
                  onChange={e => {
                    const newState = [...orderState];
                    newState[idx].category = e.target.value;
                    setOrderState(newState);
                  }}
                />
              </div>
              {orderState[idx]['moreinfo'].length
                ? orderState[idx].moreinfo.map((el, moreinfoidx) => (
                    <div className="more_info" key={moreinfoidx}>
                      <input
                        className="more_info_title"
                        type="text"
                        value={orderState[idx].moreinfo[moreinfoidx].title}
                        placeholder="항목 제목 자유 입력"
                        onChange={e => {
                          const newState = [...orderState];
                          newState[idx].moreinfo[moreinfoidx].title =
                            e.target.value;
                          setOrderState(newState);
                        }}
                      />
                      <div className="input_button">
                        <input
                          className="more_info_content"
                          type="text"
                          value={orderState[idx].moreinfo[moreinfoidx].content}
                          placeholder="내용을 입력해주세요."
                          onChange={e => {
                            const newState = [...orderState];
                            newState[idx].moreinfo[moreinfoidx].content =
                              e.target.value;
                            setOrderState(newState);
                          }}
                        />
                        <button
                          className="more_info_delete_btn"
                          onClick={() => {
                            const newState = [...orderState];
                            newState[idx].moreinfo.splice(moreinfoidx, 1);
                            setOrderState(newState);
                          }}
                        >
                          삭제
                        </button>
                      </div>
                    </div>
                  ))
                : null}
              <button className="more_button" onClick={addMoreInfo}>
                +항목 추가
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductInfoNOticeInput;
