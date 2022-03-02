import styled from 'styled-components';

export const ProductInfoNoticeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 14px;
  margin: 0 auto;
  input,
  .more_button,
  .more_info_delete_btn,
  .order_delete_btn {
    border: 0.1em solid rgb(227, 227, 227);
    border-radius: 4px;
    background: none;
    height: 40px;
  }
  .more_button {
    margin-bottom: 40px;
    border-radius: 0;
    padding: 10px 60px;
    color: rgb(53, 47, 110);
    border: 0.1em solid rgb(227, 227, 227);
    font-weight: 700;
    margin-left: 10px;
  }
  h4 {
    margin-top: 0;
  }
  .title {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    > span {
      font-weight: 700;
    }
  }
  .top_container {
    padding: 20px;
  }
  .info_notify > div {
    display: flex;
    margin-bottom: 10px;
    padding: 10px;
  }
  .info_notify > div > span {
    width: 40%;
    margin: auto 0;
  }
  .info_notify > div > input {
    width: 60%;
  }
  .more_info {
    .more_info_title {
      width: 35%;
      margin-right: 30px;
    }
    .input_button {
      display: flex;
      justify-content: space-between;
      width: 60%;
    }
    .more_info_content {
      width: 80%;
    }
  }
  .add_order_btn {
    font-weight: 700;
    background: none;
    margin: auto 0;
    border: 0.14em solid rgb(53, 47, 110);
    margin: 30px;
    padding: 30px 0;
  }
  .more_info_delete_btn {
    width: 17%;
    color: red;
    height: 100%;
  }
  .order_delete_btn {
    padding: 10px 20px;
  }
`;

export const HeaderContainer = styled.span`
  font-size: 0.9em;
  font-weight: 900;
  margin: 0.5rem;
`;
