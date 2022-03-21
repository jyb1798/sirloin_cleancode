import { useContext, useCallback } from "react";
import { PDcontext } from "store/PDdata.js";
import * as S from './style.js';

const Topbar = () => {
    const context = useContext(PDcontext);
    //console.log(context);

    

    return(
        <S.Bar>
            <S.Title>상품 등록</S.Title>
            <S.SaveButton onClick={()=> {
                if(context.PIData.state.product.category.length > 0){
                    if(context.PIData.state.product.name !== ""){
                        if(context.PIData.state.product.description !== ""){ 
                            if(context.OptionSetData.state.length > 0){
                                let conditon = true;
                                const idx = context.OptionSetData.state.length
                                for(let i = 0; i < idx; i++){
                                    const jdx = context.OptionSetData.state[i].optionList.length;
                                    for(let j = 0; j < jdx; j ++){
                                        if(context.OptionSetData.state[i].optionList[j].optionName === ''){
                                            conditon = false;
                                        }
                                        for(let k = 0; k<4; k++){
                                            if (context.OptionSetData.state[i].optionList[j].optionValue[k] === ''){
                                                conditon = false;
                                            }
                                        }
                                        for(let l = 0; l < context.OptionSetData.state[i].optionList[j].additionnal.length; l++){
                                            if (context.OptionSetData.state[i].optionList[j].additionnal[l].addtionalName === "" || context.OptionSetData.state[i].optionList[j].additionnal[l].addtionalPrice === ""){
                                                conditon = false;
                                            }
                                        }
                                    }
                                }
                                if(conditon){    
                                    if(context.PDInfo.state.ispreOrder){
                                        if( ((context.PDInfo.state.earlyMorningDate === undefined) || ( Number(context.PDInfo.state.orderPeriodEnd) > Number(context.PDInfo.state.earlyMorningDate))) || (Number(context.PDInfo.state.orderPeriodEnd) > Number(context.PDInfo.state.normalDate))){
                                            alert("배송 날자를 확인해 주세요");
                                            return;
                                        }
                                    }  
                                console.log(context);
                                return
                                }
                }}}} 

                alert("필수값을 모두 입력해 주세요");
            }}>저장하기</S.SaveButton>
        </S.Bar>
    );
}


export default Topbar;