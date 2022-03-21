import Container from "Component/Container";
import PScontentBox from "./PScontentBox";
import * as Style from "./style";

export const PSheader = () => {
  return (
    <>
      <Style.ProductContainer>
        <h4>노출 및 판매기간 설정</h4>
      </Style.ProductContainer>
    </>
  );
};

const ProductSalesperiod = (props) => {
  return (
    <>
      <Container
        ContainerHeader={<PSheader />}
        ContainerContent={
          <>
            <PScontentBox name={"상품 노출 기간"} />

            <PScontentBox name={"상품 판매 기간"} />
          </>
        }
      />
    </>
  );
};

export default ProductSalesperiod;
