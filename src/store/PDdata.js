import React, { createContext, useState } from "react";
import PIData from "Component/ProductInfo/data";
import PDImage from "Component/ProductImage/data";
import PDInfo from "Component/ProductDelivery/data";
import PIOrder from "Component/ProductInfoNotice/data";
import PSPInfo from "Component/ProductSalesperiod/calenderData";
export const PDcontext = createContext();

const PDdata = (props) => {
  const [OptionSetList, setOptionLIst] = useState([]);
  const [ProductInfoList, setProductInfoLIst] = useState(PIData);
  const [ProductInfoOrder, setProductInfoOrder] = useState([PIOrder]);
  const [PDMileage, setPDMileage] = useState(true);
  const [ProductImage, setProductImage] = useState(PDImage);
  const [ETC, setETC] = useState(false);
  const [PspState, setPspSate] = useState(PSPInfo);
  const [ProductDelivery, setProductDelibery] = useState(PDInfo);

  const PDdata = {
    OptionSetData: {
      state: OptionSetList,
      setstate: setOptionLIst,
    },
    PIData: {
      state: ProductInfoList,
      setState: setProductInfoLIst,
    },
    PIOrder: {
      state: ProductInfoOrder,
      setState: setProductInfoOrder,
    },
    PDMileage: {
      state: PDMileage,
      setState: setPDMileage,
    },
    PDImage: {
      state: ProductImage,
      setState: setProductImage,
    },
    ETC: {
      state: ETC,
      setState: setETC,
    },
    PspInfoState: {
      state: PspState,
      setState: setPspSate,
    },
    PDInfo: {
      state: ProductDelivery,
      setState: setProductDelibery,
    },
  };

  return (
    <PDcontext.Provider value={PDdata}>{props.children}</PDcontext.Provider>
  );
};

export default PDdata;
