import react, { useCallback, useState, useContext, useEffect } from "react";
import { PDcontext } from "store/PDdata.js";
import Container from "Component/Container";
import SelectImg from "Util/SelectImg";
import * as S from "./style";
/*
optionSetter(
    [...optionSetList, {
        optionImg: [],
        optionList: [
            {
                optionName: '',
                optionValue: [undefined, undefined, undefined, false],
                additionnal: []
            }       
        ]       
    }]
}
*/
export const PDOheader = () => {
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  return (
    <>
      <S.ContainerName>상품 옵션</S.ContainerName>
      <S.OptionSetAppederButton
        onClick={() => {
          setstate([
            ...state,
            {
              optionImg: [],
              optionList: [
                {
                  optionName: "",
                  optionValue: ["", "", "", "비과세"],
                  additionnal: [],
                },
              ],
            },
          ]);
        }}
      >
        + 옵션 세트 추가
      </S.OptionSetAppederButton>
    </>
  );
};
const PDOContent = () => {
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  return state.length === 0 ? (
    <S.DefaultScreen>
      <S.H3>옵션 세트를 추가하여 옵션을 구성해 주세요</S.H3>
    </S.DefaultScreen>
  ) : (
    state.map((value, index) => {
      return (
        <S.OptionSetContainer key={index}>
          <OptionSet index={index} />
        </S.OptionSetContainer>
      );
    })
  );
};
const OptionSet = (props) => {
  const index = props.index;
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  return (
    <>
      <S.Buttonholder>
        <S.DelOptionSet
          onClick={() => {
            const newstate = [...state];
            newstate.splice(index, 1);
            setstate(newstate);
          }}
        >
          삭제
        </S.DelOptionSet>
      </S.Buttonholder>
      <PDthumbnail index={index} />
      {state[index].optionList.map((value, optionidx) => (
        <S.OptionHolder key={optionidx}>
          <Option
            OSidx={index}
            OPidx={optionidx}
          />
        </S.OptionHolder>
      ))}
      <S.AppendOption
        onClick={() => {
          const newstate = [...state];
          newstate[index].optionList.push({
            optionName: "",
            optionValue: ["", "", "", "비과세"],
            additionnal: [],
          });
          setstate(newstate);
        }}
      >
        + 옵션추가
      </S.AppendOption>
    </>
  );
};
const PDthumbnail = (props) => {
  const index = props.index;
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  const [imgList, setImgList] = useState([]);
  useEffect(() => {
    const newstate = [...state];
    newstate[index].optionImg = imgList;
    setstate(newstate);
  }, [imgList]);
  return state[index].optionImg.length === 0 ? (
    <S.Imgplaceholder>
      <SelectImg imgList={imgList} imgSetter={setImgList} />
    </S.Imgplaceholder>
  ) : (
    <S.Imgholder>
      <S.OptionThumbnail src={URL.createObjectURL(state[index].optionImg[0])} />
    </S.Imgholder>
  );
};
const Option = (props) => {
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  const { OSidx, OPidx} = props;
  const OptionData= state[OSidx].optionList[OPidx]
  //console.log(OptionData);
  const optionValue = OptionData.optionValue;
  const [inputData, setInputData] = useState(optionValue);
  const HandleChange = (e) => {
    const { value, name } = e.target;
    const newinputdata = [...inputData];
    if (name === "0" || name === "1" || name === "2") {
      if (/[^0-9]/.test(value)) {
        value = "";
        return;
      }
    }
    newinputdata[name] = value;
    setInputData(newinputdata);
  };
  useEffect(() => {
    const newstate = [...state];
    newstate[OSidx].optionList[OPidx].optionValue = inputData;
    setstate(newstate);
  }, [inputData]);
  return (
    <>
      <S.Buttonholder>
        <S.DelOption
          onClick={() => {
            const newstate = [...state];
            const newopList = newstate[OSidx].optionList;
            newopList.splice(OPidx, 1);
            //console.log(newopList);
            if (newopList.length === 0) {
              newstate.splice(OSidx, 1);
              setstate(newstate);
              return;
            }
            newstate.optionList = newopList;
            setstate(newstate);
          }}
        >
          삭제
        </S.DelOption>
      </S.Buttonholder>
      <S.OptionNameInput
        placeholder="옵션명을 입력해 주세요. (필수)"
        value={OptionData.optionName}
        onChange={(e) => {
          const newstate = [...state];
          newstate[OSidx].optionList[OPidx].optionName = e.target.value;
          setstate(newstate);
        }}
      ></S.OptionNameInput>
      <S.OptionStat>
        <div>
          <S.Input
            name="0"
            onChange={HandleChange}
            value={optionValue[0]}
            placeholder="상품 정상가 (필수)"
          />
          <span style={{ margin: "0 0.5em" }}>원</span>
        </div>
        <S.DcRate>
          {parseInt(optionValue[0]) > parseInt(optionValue[1])
            ? `${
                100 -
                parseInt(
                  (parseInt(optionValue[1]) / parseInt(optionValue[0])) * 100
                )
              } %`
            : "할인율 %"}
        </S.DcRate>
        <div>
          <S.Input
            name="1"
            onChange={HandleChange}
            value={optionValue[1]}
            placeholder="상품 판매가 (필수)"
          />
          <span style={{ margin: "0 0.5em" }}>원</span>
        </div>
        <div>
          <S.StockInput
            name="2"
            onChange={HandleChange}
            value={optionValue[2]}
            placeholder="재고 (필수)"
          />
          <span style={{ margin: "0 0.5em" }}>개</span>
        </div>
        <S.TaxInput
          name="3"
          onChange={HandleChange}
          onFocus={(e) => (e.target.value = "")}
          onMouseLeave={(e) => {
            if (e.target.value === "") {
              e.target.value = optionValue[3];
            }
          }}
          value={optionValue[3]}
          list="tax"
        />
        <datalist id="tax">
          <option value={"비과세"}></option>
          <option value={"과세"}></option>
        </datalist>
      </S.OptionStat>
      <S.AddtionalContainer>
        {state[OSidx].optionList[OPidx].additionnal.map(
          (value, addtionalidx) => {
            return (
              <Additonal
                key={addtionalidx}
                OSidx={OSidx}
                OPidx={OPidx}
                addtionalidx={addtionalidx}
              />
            );
          }
        )}
      </S.AddtionalContainer>
      <S.AppendAddtional
        onClick={() => {
          const newstate = [...state];
          newstate[OSidx].optionList[OPidx].additionnal.push({
            addtionalName: "",
            addtionalPrice: "",
          });
          setstate(newstate);
        }}
      >
        + 추가 옵션 상품 등록
      </S.AppendAddtional>
    </>
  );
};

const Additonal = (props) => {
  const { OSidx, OPidx, addtionalidx } = props;
  //console.log(OSidx, OPidx, addtionalidx);
  const context = useContext(PDcontext).OptionSetData;
  const state = context.state;
  const setstate = context.setstate;
  return (
    <S.EachAddtional>
      <S.AddtionalNameInput
        placeholder="추가 옵션명 (필수)"
        value={
          state[OSidx].optionList[OPidx].additionnal[addtionalidx].addtionalName
        }
        onChange={(e) => {
          const newstate = [...state];
          newstate[OSidx].optionList[OPidx].additionnal[
            addtionalidx
          ].addtionalName = e.target.value;
          setstate(newstate);
        }}
      />
      <S.AddtionalPriceInput
        placeholder="추가 옵션 정상가 (필수)"
        value={
          state[OSidx].optionList[OPidx].additionnal[addtionalidx]
            .addtionalPrice
        }
        onChange={(e) => {
          if (/[^0-9]/.test(e.target.value)) {
            e.target.value = "";
            return;
          }
          const newstate = [...state];
          newstate[OSidx].optionList[OPidx].additionnal[
            addtionalidx
          ].addtionalPrice = e.target.value;
          setstate(newstate);
        }}
      />
      <S.DeleteAddtional
        onClick={() => {
          const newstate = [...state];
          newstate[OSidx].optionList[OPidx].additionnal.splice(addtionalidx, 1);
          setstate(newstate);
        }}
      >
        삭제
      </S.DeleteAddtional>
    </S.EachAddtional>
  );
};

const PDoption = () => {
  const context = useContext(PDcontext).OptionSetData;
  //console.log(context.state);
  return (
    <Container
      ContainerHeader={<PDOheader />}
      ContainerContent={<PDOContent />}
    />
  );
};
export default PDoption;