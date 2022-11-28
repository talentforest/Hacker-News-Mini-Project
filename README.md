# 📰 Hacker News 해커 뉴스

### ✨ 프로젝트에 사용한 스택 ✨

<div>
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">
  <img src="https://img.shields.io/badge/React Router Dom-CA4245?style=for-the-badge&logo=React Router&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
</div>

### ✨ 기타 라이브러리 ✨

<div>
  <img src="https://img.shields.io/badge/styled component-DB7093?style=for-the-badge&logo=styled-component">
  <img src="https://img.shields.io/badge/swiper-6332F6&?style=for-the-badge&logo=swiper&logoColor=white">
  <img src="https://img.shields.io/badge/axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white">
</div>

<br/>

<div>
  <img width="30%" alt="스크린샷 2022-11-11 오전 4 35 16" src="https://user-images.githubusercontent.com/91457443/204194744-bbce50d0-c2e5-4b7a-83ba-6a0adf3ea1bf.png">
  <img width="30%" alt="스크린샷 2022-11-11 오전 4 35 28" src="https://user-images.githubusercontent.com/91457443/204194827-282e46b0-340c-408f-ae9e-7916c3c0e151.png">
</div>

다크모드와 라이트모드

<br/>

### 📍 해커 뉴스 미니 프로젝트 소개

> UX/UI디자인 수강생 분들과 협업하여 전세계 개발자들의 소셜 네트워크 웹사이트인 해커 뉴스를 모바일 웹(Mobile Web) 버전으로 만들어보는 프로젝트를 진행해보았습니다!
>
> 해커 뉴스가 제공하는 Hacker News API를 통해 개발되었으며 시각적으로 편리하게 이용할 수 있도록 구성했습니다.
>
> 이 프로젝트를 통해 디자이너와의 협업을 경험해볼 수 있었습니다.
>
> ## [Demo 보기 👀](https://hacker-news-mini-project.vercel.app/)

<br/>

<br/>

### 📍 프로젝트로 공부하게 된 부분

> ### 1. React Rendering Optimization

- **리액트의 리렌더링 조건**
  - state가 변경될 때
    - 최상위에 있는 컴포넌트일수록 state를 적게 가져야 한다는 것을 배웠다.
    
  - 부모에게서 받는 props가 변경될 때
    - 최상위 컴포넌트는 잘 변하지 않는 props를 보내는 컴포넌트(template정도의 규모)로 이루어져 있는 것이 좋은 것 같다.
    
  - 부모 컴포넌트가 변경될 때
    - 컴포넌트를 적게 쓰려고 하는 것도 좋지만, 그보다 우선적으로 렌더링이 최적화된 컴포넌트 구조를 생각해야한다.
    
- **훅 useCallback과 memo**
  - memoization을 한다고 해도 **클릭시 계속 값이 변하는 상태**인 경우 useCallback이나 memo는 의미가 없다.


> ### 2. Skeleton Loading UI 적용
  - 굳이 Skeleton Loading 라이브러리를 쓰지 않아도 구현이 쉽게 가능한 것 같아서 직접 구현해보았다.

> ### 3. 아토믹 디자인 패턴
  - 아래 파일 구조 참고
  
<br />

### 📍 파일 구조

```bash
.root
├── node_modules
├── public
├── src
│   ├── assets
│   ├── component
│   │   ├── atom # 다른 컴포넌트와 결합되지 않는 순수 컴포넌트
│   │   │   ├── skeleton
│   │   ├── molecules # 최대 하나의 컴포넌트와 결합되어 박스 안의 일부분을 차지하는 컴포넌트
│   │   ├── organisms # 포스트 박스 크기 정도의 컴포넌트
│   │   ├── template # 최소 3개 이상의 컴포넌트가 결합되어, 전체 페이지의 일정 영역을 차지하는 컴포넌트
│   ├── context
│   ├── hooks
│   ├── layout
│   ├── routes
│   ├── pages # 라우터 전체 페이지 컴포넌트
│   ├── theme
│   ├── util
│   └── App.jsx
│   ├── index.css
│   ├── index.js
├── .gitignore
├── package-lock.json
├── package.json
└── README.md
```

> 이 프로젝트를 통해 좀더 효율적인 폴더 구조롤 생각해보게 되었습니다. 지금은 아토믹 디자인 패턴 구조로 폴더를 구성했는지 기존에 페이지별로 폴더를 구성했던 것과 비교해 뚜렷한 장단점이 있었습니다. 특히나 각 페이지별로 공유되는 컴포넌트가 많다면 아토믹 디자인 패턴은 좋은 선택이 될 것 같습니다. 또한 이 부분을 위해 디자이너와 함께 공유될만한 컴포넌트에 대해 상의해본 것도 좋은 경험이 되었습니다.
>
> 그러나 단점도 있었는데 각 아토믹 디자인의 5단계로 분류하기 어려운 컴포넌트들도 조금 있었다는 점입니다. 또한 예를 들어 A페이지와 B페이지의 요구사항이 달라질 경우 복잡성이 올라간다는 점이었습니다.
>
> 아토믹 디자인 패턴을 100% 활용했다고 생각하지는 않지만 프로젝트에 맞추어 기준을 생각해서 나름대로 효율적인 구조를 짜보려고 노력했습니다.

<br/>

### 📍 프로젝트 후기
해커뉴스 프로젝트는 디자이너와 협업하여 만들었다는 점에서 디자이너와의 소통에 대해 직접적으로 경헙해볼 수 있었던 아주 좋은 기회였습니다. 프로젝트를 진행하며 어떤 부분을 디자이너와 이야기해야하는지, 작업을 더 효율적으로 할 방법은 없는지 등등에 대해 이야기를 나누며 아주 즐겁게 작업했습니다. 또한 이 프로젝트를 통해서 리액트 렌더링 최적화와 사용자 친화적 UI에 대해 배울 수 있었습니다.👍 그리고 이 프로젝트를 통해서 디자인 패턴에 대한 생각을 하게 되었고, 개발 초기부터 아토믹 디자인 패턴을 생각하며 컴포넌트를 만든다면 더 빠르게 디자이너와 소통하며 작업을 시작할 수 있지 않을까 하는 생각이 들었습니다. 
