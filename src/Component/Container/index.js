import * as S from "./style.js";

const Container = (props) => {
  const ContainerHeader = props.ContainerHeader;
  const ContainerContent = props.ContainerContent;
  return (
    <S.Div>
      <S.Header>{ContainerHeader}</S.Header>
      <S.Content>{ContainerContent}</S.Content>
    </S.Div>
  );
};

export default Container;
