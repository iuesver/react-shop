# React-Shop

## 프로젝트 개요

본 프로젝트는 React와 Typescript를 사용해 상용화 될만한 웹페이지를 UI/UX에 중점을 두어 제작한 3명으로 구성된 FE 개발자팀의 팀 프로젝트입니다.

### 프로젝트 링크

[배포된 사이트 바로가기](https://react-shop-peach.vercel.app/)

### 설치 방법

```
npm install -> npm run dev
```

## 작업 분배

1. 각 상품 페이지 및 상세페이지 + 검색 기능 + 스켈레톤 UI (김우진님)
2. 메인페이지 슬라이더 및 리스트 + 로그인 페이지 (강인웅님)
3. 상품 장바구니 + 다크 모드 + 반응형 디자인 (오혁상님)

## 디렉토리 구조

```
/src
├── actions     // 비동기 통신 처리 코드
├── assets      // 프로젝트에 필요한 이미지 파일 저장
├── components  // 프로젝트의 컴포넌트
│   ├── carousel
│   ├── function      // 컴포넌트 내에 활용될 함수
│   ├── layout        // 공용 페이지 레이아웃
│   ├── navigation
│   └── types
├── hooks       // custom hook
├── pages       // 라우팅 처리할 페이지
├── reducers    // redux
├── styles      // 스타일링 관련 코드 집합
│   ├── cart
│   ├── header
│   ├── modal
│   └── product
├── App.tsx
├── index.css
└── main.tsx
```

## 기술 스택

| 기술명                          | 사용처          | 사용 이유                                                                                                                                   |
| ------------------------------- | --------------- | ------------------------------------------------------------------------------------------------------------------------------------------- |
| Vite                            | 프로젝트 생성   | CRA와 비교해 확연히 체감되는 서버 구동 시간                                                                                                 |
| TypeSciprt                      | 프로그래밍 언어 | 타입 선언으로 인한 코드 가독성 향상 및 자바스크립트의 타입 추론에 대한 불확실성을 보완                                                      |
| TailwindCSS + Styled-components | 스타일링        | TailwindCSS의 단순화된 스타일링 코드 작성법<br/>styled-components로 사용함으로써 기능, JSX와 스타일 관련 코드를 분리함으로 코드 가독성 향상 |
| Redux                           | 상태관리        | 타 상태관리 라이브러리에 비해 역사와 커뮤니티, 사용량이 풍부함으로 오는 다양한 정보와 전역 상태관리의 편리성                                |
| Axios + SWR                     | 비동기 통신     | 간편한 비동기 통신 관련 코드 사용법과 SWR의 캐싱 처리에서 오는 이점 활용                                                                    |

## 이용하는 협업툴

- Gather Town
- Slack
- Github
- Sourcetree

## Convention

### Prettier

```
{
  "printWidth": 80,
  "tabWidth": 2,
  "useTabs": false,
  "semi": true,
  "singleQuote": true,
  "quoteProps": "as-needed",
  "trailingComma": "es5",
  "bracketSpacing": true,
  "jsxBracketSameLine": false,
  "arrowParens": "always",
  "endOfLine": "lf",
  "embeddedLanguageFormatting": "auto"
}
```

### Git Convention

#### branch

- develop branch를 통한 버전관리

  > 완성 이후에 추가 버전 업데이트 등을 위해 develop_v1과 같은 branch에서 작업을 한 뒤 test 후 main branch에 병합

- feature

  > feauture/login_addFirebase 와 같이 이번에 하려고 하는 기능에 대해 브랜치 작성

- hotfix
  > feauture로 작업 한 내용 중 issue가 발생한 내용에 대한 수정 및 오류 정정 작업을 할 때 사용

#### commit

[좋은 commit message 작성을 위한 7가지 방법](https://meetup.toast.com/posts/106)글 참조

1. 제목과 본문을 한 줄 띄워 분리하기
2. 제목은 영문 기준 50자 이내로
3. 제목 첫글자를 대문자로
4. 제목 끝에 .금지
5. 제목은 명령조로
6. 본문은 영문 기준 72자마다 줄 바꾸기
7. 본문은 어떻게 보다 무엇을, 왜에 맞춰 작성하기
