import * as S from 'Util/Toggle/style.js';

const Toggle = (props) => {
    const {state, setState} = props;
    return(
    <>
    <S.CheckBoxWrapper>
        <S.CheckBox checked={state} id='checkbox' type='checkbox'/>
        <S.CheckBoxLabel htmlFor='checkbox' onClick={() => {setState(!state)}}/>
    </S.CheckBoxWrapper>
    </>
    )
}

export default Toggle