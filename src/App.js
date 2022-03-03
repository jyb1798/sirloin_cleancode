import styled from "styled-components";
import Nav from "Component/Nav";

const App = () => {
  return (
    <div className="App">
      <Nav />
      {/* <Main>
        <PDdata>
          <Topbar/>
          <ProductSalesperiod />
          <ProductInfo />
          <PDOption/>
          <ProductImage/>
          <ProductInfoNotice/>
          <ProductDelivery/>
          <PDMileage/>
          <ETC/>
        </PDdata>
     </Main> */}
    </div>
  );
};
export default App;

const Main = styled.div`
  margin-left: 10vw;
  padding: 0.5em;
  padding-top: 5vh;
  border: 0.1em solid rgb(200, 200, 200);
  border-radius: 5px;
`;
