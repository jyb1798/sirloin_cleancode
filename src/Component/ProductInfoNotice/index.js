import React, { useContext } from 'react';
import Container from 'Component/Container';
import PINoticeContentInput from './ProductInfo';
import { PDcontext } from 'store/PDdata.js';
import * as S from './style';

const ProductInfoNotice = () => {
  return (
    <S.ProductInfoNoticeContainer>
      <Container
        ContainerHeader={<PINoticeHeader />}
        ContainerContent={<PINoticeContent />}
      />
    </S.ProductInfoNoticeContainer>
  );
};

export const PINoticeHeader = () => {
  return <h4>상품 정보 고시</h4>;
};

/*  
간략히 ===================
PIOrder = {
  productname: '',
  origin: '',
  rating: '',
  productstorage: '',
  category: '',
  moreinfo: [],
}
자세히 ===================
  PIOrder = [
    {
      productname: '',
      origin: '',
      rating: '',
      productstorage: '',
      category: '',
      moreinfo: [
        {
          title: String, content:String
        }
        ...
      ]
    },
    {
      productname: '',
      origin: '',
      rating: '',
      productstorage: '',
      category: '',
      moreinfo: [],
    },
    ...
  ]
*/
const PINoticeContent = () => {
  const orderContext = useContext(PDcontext).PIOrder;
  const orderState = orderContext.state;
  const setOrderState = orderContext.setState;

  const inputs = {
    productname: '',
    origin: '',
    rating: '',
    productstorage: '',
    category: '',
    moreinfo: [],
  };
  const { productname, origin, rating, productstorage, category, moreinfo } =
    inputs;

  const addProductInfoOrder = () => {
    const newProductIfoOrder = {
      productname,
      origin,
      rating,
      productstorage,
      category,
      moreinfo,
    };
    setOrderState(orderState.concat(newProductIfoOrder));
    console.log(orderState);
  };

  return (
    <>
      <PINoticeContentInput
        productname={productname}
        origin={origin}
        rating={rating}
        productstorage={productstorage}
        category={category}
      />
      <button className="add_order_btn" onClick={addProductInfoOrder}>
        + 정보고시 추가
      </button>
    </>
  );
};

export default ProductInfoNotice;
