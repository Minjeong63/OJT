# 혼자 만들어보는 NestJS 프로젝트

## 2022-02-03

- ceo.controller.ts와 ceo.service.ts 파일에 임의의 배열을 만들어서 ceo 객체들을 가진 배열을 가져올 수 있는 함수 getCeo와 ceo 배열을 만든 후 임의의 배열에 집어넣게 하는 createCeo함수와 name이라는 변수를 넣었을 때, 그 name값의 해당하는 데이터를 가져올 수 있는 함수 getOneName을 만들었음

- ceo.model.ts 파일dpsms name이라는 프로퍼티를 가진 interface를 생성

- createCeo 함수에 필요한 create-ceo.dto.ts 라는 dto 파일을 만들어서 name 프로퍼티에는 string만 들어갈 수 있다고 정의함

## 2022-02-04

- ceo.controller.ts, ceo.service.ts 파일에 getNameId라는 아이디와 비밀번호에 맞는 ceo모델을 불러올 수 있는 함수를 만듦

- ceo.controller.ts, ceo.service.ts 파일에 getName이라는 이름과 아이디에 맞는 ceo모델을 불러올 수 있는 함수를 만듦
