# 혼자 만들어보는 NextJS 프로젝트

## 2022-02-03

- index.js에 로그인 버튼과 회원가입 신청 버튼을 만듦

- ceoLogin.js에 인풋 상자를 만든 후 인풋 상자에 값을 입력하고 옆에 있는 로그인 하기 버튼을 눌렀을 때 인풋 값이 nestjs 안에 있는 내용이면 ceo가 맞다고 하는 [name].js 페이지를 만들고, 없는 내용이면 잘못 입력했다는 내용이 나오는 ceoError.js 페이지를 만듦

- ceoLogin.js를 nestjs와 연결하기 위해 axios를 사용하여 처리했음

- post.js 페이지에는 회원가입을 할 수 있게 아이디와 이름, 비밀번호를 넣을 수 있는 인풋 상자까지 만듦

- ceoError.js 페이지에 되돌아가서 다시 입력할 수 있게 전페이지로 가는 라우터 정의해줬음

- ceoLogin.js 인풋에 아무것도 입력하지 않고 로그인 하기 버튼을 누르면 undefined로 로그인이 되서 null 값일 때는 에러페이지로 넘어가게 만들었음

- 아쉬운 점 : 컴포넌트를 사용하지 않음, 버튼 색깔 입히기, 모든 페이지 가운데 정렬, 네비게이션 바 추가하기

## 2022-02-04

- onclickbutton.js 페이지를 만든 후 css를 적용시킨 버튼 컴포넌트를 만들어서 모든 페이지에 있는 버튼에 다 적용시킴

- \_app.js에 css를 적용시켜 모든 페이지를 가운데 정렬시킴

- home.js 페이지에 index.js로 가는 버튼 link 컴포넌트를 만들어서 모든 페이지에 적용시킴

- signUp.js 페이지 안에 이름, 아이디, 비밀번호 인풋상자에 값을 넣고 신청하기 버튼을 누르면 그 내용들이 nest의 ceo모델 안으로 들어가게 만들고(axios 사용) 신청하기 버튼을 생성해서 null값 없이 버튼을 누르면 회원가입 완료 글이 뜨게 만듦

- [signupresult].js 페이지는 signUp.js의 인풋 중 null 값이 있다면 다시 채워주라는 글과 함께 뒤로 가기 버튼까지 생성

- textinput.js 만들어서 text인풋 박스를 컴포넌트로 만듦

- ceoLogin.js 파일에 아이디 찾기 버튼 생성

- findId.js 파일에 인풋 상자와 버튼을 만든 후 axios로 연결해서 인풋에 이름을 입력하고 버튼을 누르면 url로 이름과 아이디를 파라미터로 받게 함

- [...idCheck].js 파일에는 findId.js에서 받은 파라미터들을 이용하여 페이지에 표시되게 만듦

- 다음에 할 일 : home.js 경로 다시 설정하기

## 2022-02-07

- home.js 페이지 잘못 이동하는거 고침
