import styled from "styled-components";
//puple = 53 47 110

export const ContainerName = styled.span`
  font-size: 0.9em;
  font-weight: 900;
  margin: 0.5em;
`;

export const OptionSetAppederButton = styled.button`
  font-weight: 700;
  background: none;
  border: 0.14em solid rgb(53, 47, 110);
  border-radius: 5px;
  padding: 0.7em 1.4em;
`;

export const DefaultScreen = styled.div`
  background: rgb(227, 227, 227);
  h3 {
    transform: translateY(20%);
  }
`;

export const H3 = styled.h3`
  text-align: center;
  height: 25em;
`;

export const OptionSetContainer = styled.div`
    border: 0.5em, solid, rgb(227,227,227); 
    margin: 1em;
`
export const Imgplaceholder = styled.div`
  text-align: center;
  height: 10em;
  margin: 0.5em;
  padding-top: 5em;
  background: rgb(220,220,220);
  border: 1px solid rgb(130,130,130);
  border-radius: 5px;
`
export const DelOptionSet = styled.button`
  color: red;
  background: none;
  border: 1px solid red;
  width: 5em;
  height: 2em;
  border-radius: 5px;
`
export const Buttonholder = styled.div`
  margin: 0.5em;
  text-align: right;
`

export const Imgholder = styled.div`
  text-align: center;
  height: 14.5em;
  margin: 0.5em;
  padding-top: 0.5em;
  background: rgb(220,220,220);
  border: 1px solid rgb(130,130,130);
  border-radius: 5px;
`
export const AppendOption = styled.button`
  width: 100%;
  height: 3em;
  margin: 0;
  font-size: 1.2rem;
  font-weight: 500;
  box-sizing: border-box;
  border: 0.1em solid rgb(53, 47, 110);
  border-radius: 5px;

`
export const OptionHolder = styled.div`
  text-align: center;
  margin: 0.5em;
  border: 1px solid rgb(130,130,130);
  border-radius: 5px;
  box-sizing: border-box;
`

export const DelOption = styled.button`
  color: red;
  background: none;
  border: 1px solid red;
  font-size: 0.8em;
  width: 4.5em;
  height: 2.5em;
  border-radius: 5px;
`

export const OptionThumbnail = styled.img`
  height: 90%;
`

export const OptionNameInput = styled.input`
  height: 2em;
  padding: 1.3em 0.5em;
  width: calc(100% - 4em);
  margin: 1em;
  font-size: 1em;
  font-weight: 700;
  box-sizing: border-box;
`

export const OptionStat = styled.div`
  margin: 0.3em 0.1em;
  display: flex;
  justify-content: space-evenly;
  flex-wrap: nowrap;
  width : 100%;
`
export const Input = styled.input`
  flex: 0 1 auto;
  width: 7.3rem;
  font-size: 1em;
  text-align: center;
  padding: 0.5em 1em;
`

export const TaxInput = styled(Input)`
width: 4.5em;
 &::-webkit-calendar-picker-indicator{
    opacity: 100;
    padding: 0;
    font-size: 0.8rem;
  }
`
export const DcRate = styled.span`
  padding: 0.5em 1em;
`
export const StockInput = styled(Input)`
  width: 5em;
`
export const AppendAddtional = styled.div`
  margin: 1em 1em;
  text-align: left;
  font-size: 1.15em;
  font-weight: 600;
`
export const AddtionalContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
`
export const EachAddtional = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 1em;
`

export const AddtionalNameInput = styled.input`
  width: 20rem;
  font-size: 1em;
  text-align: center;
  padding: 0.5em 1em;
  margin-right: 2em;
`
export const AddtionalPriceInput = styled.input`
  width: 11rem;
  font-size: 1em;
  text-align: center;
  padding: 0.5em 1em;
  margin-right: 2em;
`
export const DeleteAddtional = styled.button`
  color: red;
  background: none;
  border: 1px solid red;
  width: 5em;
  height: 3em;
  padding: 0.5em 1em;
  border-radius: 5px;
`