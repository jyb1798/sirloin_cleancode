# Context api로 전역상태를 관리한 어드민 페이지

## [GO DEMO🚀]

## 나의 기여

- Nav 폴더 : 사이드바
- ProductSalesperiod 폴더 : 노출 및 판매기간 설정 Box!
- [mypart1](https://user-images.githubusercontent.com/64634495/159304943-507f4a6e-c74e-4606-989f-6946720b5a27.png)

- Util 폴더 중 DateTime, RadioButton 폴더 : 달력 컴포넌트, RadioButton 컴포넌트
- ![mypart2](https://user-images.githubusercontent.com/64634495/159304989-48c08490-c097-49d4-97fd-bc38b9068502.png)


## 이슈 정리

### 다계층 구조

우리팀은 각 Component에서 `Container`를 하위 컴포넌트로 하고 그 안에서 `Header`와 `Content` 를 하위 컴포넌트로 하는 구조를 선택하였습니다.

```js
// 모든 컴포넌트는 Container안의 Header + Content 구조로 구성되어 있습니다.

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
----- ProductSalesperiod/
----- ProductInfo/
----- PDOption/
----- ProductImage/
----- ProductInfoNotice/
----- ProductDelivery/
----- PDMileage/
----- ETC/
```

각 컴포넌트들의 일관적 구조를 찾을 수 있었고, 재사용성의 극대화를 위한 선택이였습니다. 하지만 각 Component의 state들을 공유해야 했고, 각각의 props들이 전달되면서 props의 추적이 어려워지는 props Drilling 문제에 직면하게 되었습니다. 전역 state 관리를 위한 방법이 필요하다고 느꼈습니다.

### How to Control Global State

본 프로젝트에서는 각 컴포넌트 마다 공유하는 state가 있습니다. 때문에 효율적인 전역 State 관리가 필요했고, 우리팀은 React에서 제공하는 `ContextAPI`를 사용하기로 결정했습니다. 전역 state에서 각 컴포넌트에 전달하고 사용할 데이터는 다음과 같습니다.

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

## 기능 구현 요구사항

### 노출 및 판매기간 설정

- 달력 및 시간 지정 컴포넌트 제공(MUI)
- 제한 없음 default)

#### 카테고리

- 체크박스 선택을 통해 해당 상품에 카테고리 지정
- 체크박스 지정 해제 또는 선택된 카테고리 X버튼을 통해 카테고리 지정을 해제할 수 있음
- 상품은 최소 1개 이상의 카테고리가 지정되어 있어야 함

#### 필터태그

- 검색 결과 시 검색어 텍스트 일치가 높은 순으로 리스팅
- 필터태그 포커스시, 필터태그에 등록되어 있는 모든 필터태그가 제공됨
- 검색 결과가 없는 경우 '검색 결과 없음' 안
- 검색한 필터태그 TAP시, 해당 필터태그 지정됨

#### 상품 구성 소개 정보

- 커머스 리스트에서 상품의 구성을 설명하는 텍스트 입력

#### 상품 썸네일

- 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출
- 추가 첨부 시, 기존 이미지 삭제 후 새로 업로드

#### 상품 대표 이미지

- 첨부 버튼 TAP 후, 우측에 파일명 X버튼과 함께 노출
- 추가 첨부 시, 최신 업로드 순으로 추가

#### 상품 옵션 등록

- 옵션세트 및 옵션세트 내 옵션은 여러개 생성 가능
- 이미지는 1개만 지정 가능, 옵션은 여러개 생성 가능
- 옵션을 모두 삭제하면 옵션 세트 또한 삭제

#### 추가 옵션 상품 등록

- 옵션 1개당 여러개의 추가 옵션 상품 등록 가능

#### 옵션 내용 등록 영역

- 옵션은 옵션 세트내에서 1개이상 생성 가능
- 상품 정상가, 할인율, 상품 판매가, 재고, 과세 구분 입력 가능
- 비과세: 해당 옵션의 부과세가 0원으로 저장
- 과세: 해당 판매가의 10%가 부과세로 저장

### 상품 이미지

- 이미지 TAP 후 이미지 업로드 시, 우측에 이미지 파일명과 X버튼이 함께 노출
- 추가 첨부 시, 최신업로드 순으로 추가

### 상품 정보 고시

- 상품 정보 고시 알림 설정

#### 사용자 배송 출발일 지정 / 방문 수령 지정 / 선 주문 예약 배송

- 토글 버튼 On/Off
- 해당 영역 활성화 시 선주문 예약 배송 비활성화

### 상품 혜택 허용 설정 / 기타 설정

- 토글 버튼 On/Off

### 저장하기 버튼

- 필수값 미 입력시, 얼럿 제공
- console창에 결과 출력

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
  e.target.value; // 이벤트 변수의 값을 초기화 해줍니다.
};
```
