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

- DTO를 선언해서 사용하면 전송 데이터 형식을 알 수 있음

### Pipe

---

- 파이프는 클라이언트 요청이 @Controller에게 바로 전달되지 않고 Pipes를 한번 거친다고 생각하면 좋음

- Pipe는 3종류가 있음

  - Global-Level Pipe : 애플리케이션 전체에 적용되는 Pipe이며, main.ts 파일에 설정

    - transform 옵션 : 클라이언트가 전달하는 데이터는 기본적으로 JavaScript 객체여서 자동으로 DTO 객체로 변환할 때 사용

    - forbidNonWhitelisted 옵션 : 클라이언트가 전달하는 요청 값 중에 정의되지 않은 속성 값이 있다면 Error를 발생

    - whitelist 옵션 : 해당 옵션은 사용자가 전송한 데이터 중에 DTO 속성으로 정의되지 않은 속성은 제외시키는 옵션

    - disableErrorMessages 옵션 : 서버에서 Error가 발생했을 때 Error 메시지를 노출한다는 건 공격자에게 많은 정보를 제공할 수 있으므로 배포 단계에는 해당 옵션을 false로 설정해서 배포 환경에서는 노출하지 않는 걸 추천

  - Handler-level Pipes : @Controller 계층에서 @UsePipes() 데코레이터를 선언해 사용

  - Parameter-level Pipes : 전달받은 모든 파라미터를 검사하지 않고 특정 파라미터만 검사하는 방식

### 미들웨어

---

- 개념 : 소프트웨어 사이에 중간 매개체 역할을 하는 소프트웨어

- 왜 사용할까? : 특정 라우터에 접근 시 "인증&검증, 로그성 데이터를 기록할 때" 꼭! 거쳐야 하는 로직이 있을 때 사용

### TypeORM

---

- TypeORM은 ORM 기술 중 하나로 "객체와 관계형 데이터 베이스를 매핑(연결)을 통해 객체 모델과 관계형 모델 간 불일치를 해결" 함으로써 객체와 데이터베이스의 변형에 유연하게 사용할 수 있는 기술

TypeORM 파일 설정 : src/configs 폴더를 생성하고 파일 이름은 본인이 편한 이름으로 생성해주시면 됨
