import styled from 'styled-components';

export const ProductDeliveryContainer = styled.div`
  .container {
    display: flex;
    flex-direction: column;
  }
  .flex {
    display: flex;
  }
  .bottom_border {
    border-bottom: 0.1em solid rgb(227, 227, 227);
  }
  .preorder_content_box {
    padding-top: 20px;
  }
  .bottom_margin {
    margin-bottom: 20px;
  }
  .margin-right {
    margin-right: 20px;
  }
  .margin-right-more {
    margin-right: 54px;
  }
`;

export const HeaderContainer = styled.span`
  font-size: 0.9em;
  font-weight: 900;
  margin: 0.5rem;
`;

export const Content = styled.div`
  display: flex;
`;

export const PreOrderSpan = styled.span``;
export const titleSpan = styled.span`
  font-weight: 600;
`;
export const titleBox = styled.div`
  border-right: 0.1em solid rgb(227, 227, 227);
  width: 20%;
  margin: 1em 1em;
`;
export const ContentBox = styled.div`
  width: 80%;
  margin: auto 0;
  margin-left: 1em;
`;
