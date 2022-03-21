import Container from "Component/Container";
import PScontentBox from "./PScontentBox";
import PScontentBoxSecond from "./PScontentBoxSecond";
import * as Style from "./style";

export const PSheader = () => {
  return (
    <>
      <Style.ProductContainer>
        <h3>노출 및 판매기간 설정</h3>
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
            <PScontentBoxSecond /> <PScontentBoxSecond />
          </>
        }
      />
    </>
  );
};

export default ProductSalesperiod;
