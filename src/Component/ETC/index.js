import React, {useContext} from 'react';
import { PDcontext } from 'store/PDdata.js';
import Container from "Component/Container";
import Toggle from 'Util/Toggle';
import * as S from './style.js';


const ETCheader = () => {
    return(
        <S.Header>기타 설정</S.Header>
    )
}

const ETContent = () => {
    const context = useContext(PDcontext).ETC;
    const state = context.state;
    const setState = context.setState;

    return(
        <S.Warpper>
            <S.Title>감사카드 제공</S.Title>
            <S.Content>
                <Toggle state={state} setState={setState}/>
            </S.Content>
        </S.Warpper>
    )
}

const ETC = () => {
    return(
        <Container
        ContainerHeader = {
            <ETCheader />
        } 
        ContainerContent = {
            <ETContent/>
        }
        />
    )
}

export default ETC