# 어떤 네이버 블로그 따라 하는 클론 코딩

## 구조 분석

---

- dist : 서버를 실행하면 dist폴더 아래 컴파일 파일이 생성이 됩니다.(TypeScript -> JavaScript)

- src : 프로젝트 core 폴더 (실제 작업은 src 하위에서 진행한다.)

- nest-cli.json : 프로젝트 Root 경로를 설정하는 파일

- tsconfig.build.json : 컴파일 시 ignore 설정을 하는 파일

- tsconfig.json : TypeScript 환경설정을 담당하는 파일

### src 폴더 분석

---

- main.ts

  - main.ts 파일을 통해 서버가 실행됨

  - root module은 AppModule이며, 해당 AppModule은 애플리케이션 전체에 모듈을 통합한 모듈

  - NestFactory는 AppModule을 통해 애플리케이션 전체에 모듈을 조립하고 필요한 클래스를 생성해서 서버를 실행

- app.module.ts

  - 프로젝트 최상위 모듈

  - @Module() 데코레이터를 선언해서 사용할 수 있으며, 같은 기능에 해당하는 것들은 하나의 모듈 폴더 안에 넣어서 사용

- app.controller.ts

  - Controller 역할을 함

  - @Controller() 데코레이터로 선언해 지정할 수 있음

  - @Controller는 클라이언트에서 들어오는 "요청"과 "응답"을 반환하는 역할을 함

  - Controller에 경로 설정은 @Controller("/경로") 첫 번째 인자 값으로 설정할 수 있음

  - Handler : @Get, @Post 등과 같은 RESTFul API에서 사용하는 메서드

- app.service.ts

  - Service 역할을 함

  - @Service() 데코레이터로 선언해 지정할 수 있음

  - 비즈니스 로직을 담당하며 우리가 실제 개발하는 로직들은 Service 로직에서 처리

  - @Injectable 데코레이터를 선언해서 Nest.js는 이것을 다른 곳에서 이 서비스를 사용할 수 있게 만들어줌

### REST Method

---

- @GET : 조회

- @POST : 생성

- @PATCH : 단일 수정

- @PUT : 전체 수정

- @DELETE : 삭제

  - 클라이언트가 데이터를 전송하는 방식

    - Body (@Body() 변수명: 자료형) -> @Body() body -> 전체 처리방식

    - Body (@Body('키') 키\_변수: 자료형) -> @Body('id') id : number - 단일 처리 방식

    - Query Params (@Query('키') 키\_변수: 자료형) -> @Query('id') id: number

    - Path Variables (@Param('키') 키\_변수: 자료형) -> @Param('id') id: number

### DTO (Data Transfer Object)

---

- DTO : "데이터를 객체로 옮기다" 로 해석할 수 있음

- 즉, 클라이언트에서 서버로 데이터를 전송할 때 사용되며, 계층 간(Controller => Service)에 데이터를 전송할 때도 사용됨

- 또, 클라이언트로부터 전송받은 데이터를 객체로 변환할 때도 사용됨
