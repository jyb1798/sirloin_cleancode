# 설로인 기업과제 상품 등록 페이지

## [GO DEMO🚀](https://)

## 이슈 정리

### 다계층 구조

우리팀은 각 Component에서 `Container`를 하위 컴포넌트로 하고 그 안에서 `Header`와 `Content` 를 하위 컴포넌트로 하는 구조를 선택하였습니다.

```js
// Nav와 TopBar를 제외한 모든 컴포넌트는 Container안의 Header + Content 구조로 구성되어 있습니다.

- Component/
--- index.js
--- style.js
----- Container/ // Component에서 Header와 Content를 props로 전달합니다.
--- index.js
--- style.js
------- Header/  //Component-Header
------- Content/ //Component-Content

- src/
--- App/
----- Nav/
----- TopBar/
----- ProductSalesperiod/
----- ProductInfo/
----- PDOption/
----- ProductImage/
----- ProductInfoNotice/
----- ProductDelivery/
----- PDMileage/
----- ETC/
```

각 컴포넌트들의 일관적 구조를 찾을 수 있었고, 재사용성의 극대화를 위한 선택이였습니다. 하지만 각 Component의 state들을 서로가 공유해야 하는 상황이 있었고, 각각의 props들이 전달되면서 props의 추적이 어려워지는 props Drilling 문제에 직면하게 되었습니다. 따라서 전역 state 관리를 위한 방법이 필요하다고 느꼈습니다.

### How to Control Global State

본 프로젝트에서는 각 컴포넌트 마다 공유해야 하는 state가 있습니다. 때문에 효율적인 전역 State 관리가 필요했고, 우리팀은 React에서 제공하는 `ContextAPI`를 사용하기로 결정했습니다.

```jsx
// store / PDdata.js

export const PDcontext = createContext();

const [componentState,setComponentState] = useState();

const PDdata = {
  ComponentData: {
    state: componentState,
    setState: setComponentState,
  }
  ...
}
```

전역 state에서 각 컴포넌트에 전달하고 사용할 데이터는 다음과 같습니다.

```
// PDoption

PDoption = {
  [...optionSetList, {
    optionImg: [],
    optionList: [
      {
        optionName: '',
        optionValue: [],
        additionnal: []
      }
    ],
    }
  ]
}

//ProductInfo

ProductInfo = {
    categoryList:[],
    filterTagList:[],
    Product:{
      idx:""
      category:[],
      filterTag:[],
      name:"",
      description:"",
      thumbnail:"",
      imgs:[],
      stock:"",
  }
}

...

```

### Re-Rendering을 막기위한 노력

Context API를 사용하면서 리렌더링 문제를 겪었습니다. Context API의 `Provider`가 Component 전체를 감싸고 있기 때문에 하나의 컴포넌트에서 전역 State를 Update하면 전체가 리렌더링되는 현상이 있었습니다.

해결을 위해 `React.Memo()` , `useCallback()`등의 방법을 시도해봤지만, 여전히 현상이 나타났습니다. 규모가 작은 App에서는 문제가 안될지라도, 큰 프로젝트에서는 분명히 퍼포먼스 이슈를 가져올 것이라고 생각했습니다.

이러한 경험을 통해, Context API를 사용하기 좋은 조건은 Static한 상태에 가까운(거의 변하지 않는) 데이터(ex. Theme)를 하위 컴포넌트에 전달해줘야 할 때 적합하다고 생각했습니다.

### Input(file)에 같은 파일 업로드

input(type = file)에 파일을 업로드하면 onChange 이벤트가 작동을 하는데, 같은 파일을 다시 업로드 할 경우, 이벤트가 정확히 동작하지 않았습니다.

예를들어, 임의의 파일을 업로드 후, 삭제 후 업로드하면 onChange를 감지하지 못했습니다. 원인은 onChange는 실질적인 내용 변화에만 초점을 맞추고 있기 때문입니다.

이벤트의 값을 초기화 해준 후 사용하니 문제 없이 작동 되었습니다.

```jsx
<input
  type={"file"}
  accept="image/*"
  onChange={useCallback((e) => handleImage(e))}
/>;

const handleImage = (e) => {
  imgsetter();
  e.target.value = ""; // 이벤트 변수의 값을 초기화 해줍니다.
};
```

<!-- <details>
<summary>
<h2 style="display:inline"> 기능 구현 요구사항 </h2>
</summary> -->

## 기능 구현 요구사항

### 노출 및 판매기간 설정

✔️ 달력 및 시간 지정 컴포넌트 제공(MUI)

#### 노출 기한

✔️ 노출 기한 설정(제한 없음 default)

#### 판매 기한

✔️ 판매 기한 설정(제한 없음 default)

### 상품 기본 정보

![ProductInfo](https://user-images.githubusercontent.com/84373490/151648643-82e21a6e-09d7-4b80-a459-7f23b94902cd.gif)

#### 카테고리

✔️ 체크박스 선택을 통해 해당 상품에 카테고리 지정

✔️ 체크박스 지정 해제 또는 선택된 카테고리 X버튼을 통해 카테고리 지정을 해제할 수 있음

✔️ 상품은 최소 1개 이상의 카테고리가 지정되어 있어야 함

#### 필터태그

✔️ 검색 결과 시 검색어 텍스트 일치가 높은 순으로 리스팅

✔️ 필터태그 포커스시, 필터태그에 등록되어 있는 모든 필터태그가 제공됨

✔️ 검색 결과가 없는 경우 '검색 결과 없음' 안내

✔️ 검색한 필터태그 TAP시, 해당 필터태그 지정됨

#### 상품코드 & 상품명

✔️ 고유한 상품코드 부여

✔️ 상품명 입력

#### 상품 구성 소개 정보

✔️ 커머스 리스트에서 상품의 구성을 설명하는 텍스트 입력

#### 상품 썸네일

✔️ 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출

✔️ 추가 첨부 시, 기존 이미지 삭제 후 새로 업로드

#### 상품 대표 이미지

✔️ 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출

✔️ 추가 첨부 시, 최신 업로드 순으로 추가

#### 상품 총 재고

✔️ 해당 상품에 등록되어있는 옵션 재고의 총합 표시

### 상품 옵션

![Option2](https://user-images.githubusercontent.com/84373490/151648761-e41f0f76-e9eb-4220-b3ee-3b1c4ef45340.gif)

#### 상품 옵션 등록

✔️ 옵션세트 및 옵션세트 내 옵션은 여러개 생성 가능

✔️ 이미지는 1개만 지정 가능, 옵션은 여러개 생성 가능

✔️ 옵션을 모두 삭제하면 옵션 세트 또한 삭제

✔️ 정수형 숫자를 입력받는 곳에는, 타문자 입력을 방지하는 기능추가.

#### 추가 옵션 상품 등록

✔️ 옵션 1개당 여러개의 추가 옵션 상품 등록 가능

#### 옵션 내용 등록 영역

✔️ 옵션은 옵션 세트내에서 1개이상 생성 가능

✔️ 상품 정상가, 할인율, 상품 판매가, 재고, 과세 구분 입력 가능

✔️ 비과세: 해당 옵션의 부과세가 0원으로 저장

✔️ 과세: 해당 판매가의 10%가 부과세로 저장

### 상품 이미지

![ProductImg](https://user-images.githubusercontent.com/84373490/151648642-b98bdf53-472d-4649-a915-413332269b3b.gif)

✔️ 이미지 TAP 후 이미지 업로드 시, 우측에 이미지 파일명과 X버튼이 함께 노출

✔️ 추가 첨부 시, 최신업로드 순으로 추가

### 상품 정보 고시

![InfoNotice](https://user-images.githubusercontent.com/84373490/151648636-a96e0909-b7b9-44cf-ba24-cac9ed5f0a9c.gif)

#### 상품 정보 고시 알림 설정

✔️ 정보고시 추가 시, 정보고시 생성 순서 숫자 표기

✔️ '제품명/중량' ~ '식품 유형' 항목까지 타이틀 고정

✔️ 타이틀 우측 내용 입력

✔️ 항목 추가를 통해 정보고시 항목 추가 가능

#### 사용자 배송 출발일 지정

![Delivery](https://user-images.githubusercontent.com/84373490/151648987-1e09b64b-b095-49d1-9b5d-fcfd939582ca.gif)

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 선주문 예약 배송 비활성화

#### 방문 수령 지정

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 선주문 예약 배송 비활성화

#### 선 주문 예약 배송

✔️ 토글 버튼 On/Off

✔️ 해당 영역 활성화 시 위 두 항목 비활성화

### 상품 혜택 허용 설정

#### 마일리지 적립

✔️ 토글 버튼 On/Off

### 기타 설정

#### 감사카드 제공

✔️ 토글 버튼 On/Off

### 저장하기 버튼

![save](https://user-images.githubusercontent.com/84373490/151658437-c42ee70b-b365-4e7c-983a-a59e349a522f.jpg)

✔️ 필수값 미 입력시, 얼럿 제공

✔️ console창에 결과 출력

<!-- </details>

<br/> -->
