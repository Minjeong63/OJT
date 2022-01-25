# 인프런사이트에서 듣는 nestjs project 정리 & nestjs 클론코딩

## NestJS 기본 구조 설명

---

- eslintrc.js : 개발자들이 특정한 규칙을 가지고 코드를 깔끔하게 짤 수 있게 도와주는 라이브러리/ 타입스크립트를 쓰는 가이드 라인 제시/ 문법에 오류가 나면 알려주는 역할 등등
- prettierrc : 주로 코드 형식을 맞추는데 사용/ 에러 찾는 것이 아닌 코드 포맷터 역할
- nest-cli.json : nest 프로젝트를 위해 특정한 설정을 할 수 있는 json파일
- tsconfig.json : 어떻게 타입스크립트를 컴파일 할지 설정
- tsconfig.build.json : tsconfig.json의 연장선상 파일이며, build를 할 때 필요한 설정들/ 파일 안의 "exclude"에서는 빌드할 떄 필요없는 파일들 명시
- src폴더(대부분의 비즈니스 로직이 들어가는 곳) : main.ts(앱을 생성하고 실행)/ app.module.ts(앱 모듈을 정의)

## 기본 구조에서 살펴보는 NestJS 로직 흐름

---

- 클라이언트가 요청을 하면 Controller에 있는 함수가 service 함수를 부르고 그 service 함수가 Controller에게 대답하면 Controller가 클라이언트에게 응답을 함

## NestJS 모듈이란?

---

- 모듈은 @Module () 데코레이터로 주석이 달린 클래스임
- @Module () 데코레이터는 Nest가 애플리케이션 구조를 구성하는 데 사용하는 메타 데이터를 제공
- 각 응용 프로그램에는 하나 이상의 모듈(루트 모듈)이 있음
- 루트 모듈은 Nest가 사용하는 시작점

## 모듈 생성하는 법

---

- nest g module 모듈이름 을 터미널에 입력하면 자동 생성
- 프로젝트 안에서 터미널에 입력하면 자동으로 src 밑에 생성

## 컨트롤러란?

---

- 들어오는 요청을 처리하고 클라이언트에 응답을 반환함
- 컨트롤러는 @Controller 데코레이터로 클래스를 데코레이션하여 정의됨

## Handler란?

---

- 핸들러는 @Get, @Post, @Delete 등과 같은 데코레이터로 장식된 컨트롤러 클래스 내의 단순한 메서드

## Controller 생성하는 법

---

- nest g controller 컨트롤러이름 --no-spec 을 터미널에 입력하면 자동 생성
- --no-spec : 테스트를 위한 소스 코드 생성x
- 프로젝트 안에서 터미널에 입력하면 자동으로 src 밑에 생성

### CLI로 명령어 입력 시 Controller 만드는 순서

---

- cli는 먼저 boards 폴더 찾기
- boards 폴더 안에 controller 파일 생성
- boards 폴더 안에 module 파일 찾기
- module 파일 안에다가 controller 넣어주기

## NestJS Providers, Service란?

---

### Providers란?

---

- 프로바이더는 Nest의 기본 개념
- 대부분의 기본 Nest 클래스는 서비스, 리포지토리, 팩토리, 헬퍼 등 프로바이더로 취급될 수 있음
- 프로바이더의 주요 아이디어는 종속성으로 주입할 수 있다는 것
- 즉, 객체는 서로 다양한 관계를 만들 수 있으며 객체의 인스턴스를 "연결"하는 기능은 대부분 Nest 런타임 시스템에 위임될 수 있음

### Service란?

---

- 서비스는 소프트웨어 개발내의 공통 개념이며 NestJS, Javascript에서만 쓰이는 개념이 아님
- @Injectable 데코레이터로 감싸져서 모듈에 제공되며, 이 서비스 인스턴스는 애플리케이션 전체에서 사용될 수 있음
- 서비스는 컨트롤러에서 데이터 유효성 체크를 하거나 데이터베이스에 아이템을 생성하는 등의 작업을 하는 부분을 처리함

### Service를 Controller에서 이용할 수 있는 방법(Dependency Injection)

---

- 타입스크립트의 기능을 이용해서 종속성을 타입으로 해결할 수 있기 때문

### Provider 등록하기

---

- Provider를 사용하기 위해서는 module 파일에 providers 항목 안에 해당 모듈에서 사용하고자 하는 Provider를 넣기

## 서비스 생성

---

- Service 안에서는 데이터베이스 관련된 로직을 처리할 것임
- 데이터베이스에서 데이터를 가져오거나 데이터베이스 안에 게시판 생성할 때 그 생성한 게시판 정보를 넣어주는등의 로직을 처리할 것임
- service 생성 명령어 : nest g service 서비스이름 --no-spec

### Board Servide를 Board Controller에서 이용할 수 있게 해주기(Dependency Injection)

- NestJS에서 Dependency Injection은 클래스의 Constructor안에서 이루어짐

---

- boardsService파라미터에 BoardsService 객체를 타입으로 지정해줌
- 이 boardservice 파라미터를 BoardsController 클래스 안에서 사용하기 위해서 this.boardsService 프로퍼티에 boardsService 파라미터를 할당해줌
- 하지만 타입스크립트에서는 선언한 값만 객체의 프로퍼티로 사용가능하기 때문에 위에 boardsService: BoardsService로 선언해줌
- 이렇게 갖게된 boardsService 프로퍼티를 이용해서 BoardsController 클래스안에서 활용할 수 있음

### 접근 제한자를 이용해서 소스 간단하게 하기

---

- 접근 제한자(public, protected, private)를 생성자(constructor) 파라미터에 선언하면 접근 제한자가 사용된 생성자 파라미터는 암묵적으로 클래스 프로퍼티로 선언됨

#### 모든 게시물을 가져오는 서비스 만들기 (CRUD => R)

### 모든 게시물 데이터를 데이터베이스에서 가져오는 로직 구현

---

- 이 로직은 Service에서 구현해주면 됨
- 바로 데이터베이스와 연동해서 하면 되지만 처음부터 데이터베이스 연결해서 하면 헷갈릴 수 있기 때문에 우선 데이터를 로컬 메모리에 담아서 처리함

정리하면,

- 클라이언트에서 요청을 보내면 먼저 컨트롤러로 가며 컨트롤러에서 알맞은 요청 경로에 라우팅해서 해당 핸들러로 가게 해줌
- 그 후에 요청을 처리해주기 위해서 서비스로 들어가며 그 요청에 맞는 로직을 서비스에서 처리해준 후 컨트롤러에 리턴값을 보내준 후 컨트롤러에서 클라이언트로 결과값을 보내줌
- 그래서 컨트롤러에서는 요청을 처리하고 결과값을 리턴해주는 역할을 함

## Model 정의하기

---

- 게시물에 필요한 데이터가 어떤 것이 필요한 지를 정의해주기 위해서 게시물의 모델을 만들어주겠음(board.model.ts파일에다가)
- 모델을 정의하기 위해서는 Class나 Interface를 이용하면 됨
- Interface: 변수의 타입만을 체크
- classes: 변수의 타입도 체크하고 인스턴스 또한 생성할 수 있음

### DTO(Data Transfer Object) 란?

---

- 계층 간 데이터 교환을 위한 객체
- DB에서 데이터를 얻어 Service나 Controller 등으로 보낼 때 사용하는 객체를 말함
- DTO는 데이터가 네트워크를 통해 전송되는 방법을 정의하는 객체
- interface나 class를 이용해서 정의될 수 있음(NestJS에서는 클래스 추천)
- 클래스는 인터페이스와 다르게 런타임에서 작동하기 때문에 파이프 같은 기능을 이용할 때 더 유용해서 클래스로 DTO를 작성함

### DTO(Data Transfer Object)를 쓰는 이유는?

---

- 데이터 유효성을 체크하는데 효율적임
- 더 안정적인 코드 만들어줌 & 타입스크립트의 타입으로도 사용됨

\* 데이터 유효성 : 사용자로부터 값을 입력받을 때 정확한 값만 입력되도록 할 때 유용한 기능

### Param

---

- import Param으로 사용
- findOne(@Param() params: string[]) : 파라미터를 여러 개 받을 때
- findOne(@Param('id') id: string[]) : 파라미터를 특정 한개만 받을 때

### NestJS Pipes

---

#### Pipe는 무엇인가요?

---

- 파이프는 @Injectable () 데코레이터로 주석이 달린 클래스
- 파이프는 data transformation과 data validation을 위해서 사용됨
- 파이프는 컨트롤러 경로 처리기에 의해 처리되는 인수에 대해 작동
- Nest는 메소드가 호출되기 직전에 파이프를 삽입하고 파이프는 메소드로 향하는 인수를 수신하고 이에 대해 작동

#### Data Transformation?

---

- 입력 데이터를 원하는 형식으로 변환 (예: 문자열에서 정수로)
- 만약 숫자를 원하는데 문자열 형식으로 온다면 파이프에서 자동으로 숫자로 바꿔줌

#### Data validation?

---

- 입력 데이터를 평가하고 유효한 경우 변경되지 않은 상태로 전달하면 됨
- 그렇지 않으면 데이터가 올바르지 않을 때 예외를 발생시킴

#### PIPE 사용하는 법(Binding Pipes)

---

- 파이프를 사용하는 방법은 세 가지로 나뉠 수 있음
- Handler-level Pipes, Parameter-level Pipes, Global-level Pipes

#### Handler-level Pipes

---

- 핸들러 레벨에서 @UsePipes() 데코레이터를 이용해서 사용할 수 있음
- 이 파이프는 모든 파라미터에 적용됨

#### Parameter-level Pipes

---

- 파라미터 레벨의 파이프이기에 특정한 파라미터에게만 적용이 되는 파이프

#### Global Pipes

---

- 글로벌 파이프로서 애플리케이션 레벨의 파이프
- 클라이언트에서 들어오는 모든 요청에 적용됨
- 가장 상단 영역인 main.ts에 넣으면 됨

#### 커스텀 파이프 구현 방법

---

- 먼저 PipeTransform이란 인터페이스를 새롭게 만들 커스텀 파이프에 구현해줘야함
- PipeTransform 인터페이스는 모든 파이프에서 구현해줘야 하는 인터페이스
- 그리고 이것과 함께 모든 파이프는 transform() 메서드를 필요로 함
- 이 메서드는 NestJS가 argument를 처리하기 위해 사용됨

##### transform() 메서드

---

- 이 메서드는 두 개의 파라미터를 가짐
- 첫 번째 파라미터는 처리가 된 인자의 값이며, 두 번째 파라미터는 인자에 대한 메타 데이터를 포함한 객체임
- transform() 메서드에서 return된 값은 Route 핸들러로 전해짐
- 만약 예외가 발생하면 클라이언트에 바로 전해짐

##### readonly class property

---

- 접두사 readonly는 속성을 읽기 전용으로 만드는 데 사용됨
- 읽기 전용 멤버는 클래스 외부에서 엑세스 할 수 있지만 해당 값은 변경할 수 없음

#### TypeORM이란?

---

- TypeORM은 node.js에서 실행되고 Typescript로 작성된 객체 관계형 매퍼 라이브러리
- ORM은 Object Relational Mapping

#### ORM이란?

---

- 객체와 관계형 데이터베이스의 데이터를 자동으로 변형 및 연결하는 작업
- 객체지향 프로그래밍은 클래스 사용
- 관계형 데이터베이스는 테이블 사용

#### TypeORM 특징과 이점

---

- 모델을 기반으로 데이터베이스 테이블 체계를 자동으로 생성함
- 데이터베이스에서 개체를 쉽게 삽입, 업데이트 및 삭제할 수 있음
- 테이블 간의 매핑(일대일, 일대다 및 다대다)을 만듦
- 간단한 CLI 명령을 제공
- TypeORM은 간단한 코딩으로 ORM 프레임워크를 사용하기 쉬움
- TypeORM은 다른 모듈과 쉽게 통합됨

#### TypeORM을 사용하기 위해서 설치해야하는 모듈들

---

- @nestjs/typeorm : NestJS에서 TypeORM을 사용하기 위해 연동시켜주는 모듈
- typeorm : TypeORM 모듈
- pg : Postgres 모듈
- 설치 : npm install pg typeorm @nestjs/typeorm --save

#### 왜 Entity를 생성해야 하나요?

---

- TypeORM을 사용할 때는 데이터베이스 테이블로 변환되는 Class이기 때문에 클래스를 생성한 후 그 안에 컬럼들을 정의해주면 됨
- @Entity() : @Entity() 데코레이터 클래스는 Board 클래스가 엔티티임을 나타내는 데 사용됨 / CREATE TABLE board 부분임
- @PrimaryGeneratedColumn() : PrimaryGeneratedColumn() 데코레이터 클래스는 id 열이 Board 엔티티의 기본 키 열임을 나타내는데 사용
- @Column() : Column() 데코레이터 클래스는 Board 엔티티의 title 및 description과 같은 다른 열을 나타내는데 사용

#### Repository란?

---

- 리포지토리는 엔티티 개체와 함께 작동하며 엔티티 찾기, 삽입, 업데이트, 삭제 등을 처리함
- 데이터베이스 관련된 일(INSERT, FIND, DELETE 등)은 서비스에서 하는게 아닌 Repository에서 하면 되고, 이것을 Repository Pattern이라고 부름

#### Repository 생성하기

---

- 리포지토리 파일 생성하기(board.repository.ts)
- 생성한 파일에 리포지토리를 위한 클래스 생성하기(생성 시 Repository 클래스를 Extends 해줌 - FIND, INSERT, DELETE 등 엔티티를 컨트롤 해줄 수 있음)
- @EntityRepository() : 클래스를 사용자 정의(CUSTOM) 저장소로 선언하는 데 사용됨
- 사용자 지정 저장소는 일부 특정 엔티티를 관리허거나 일반 저장소일 수 있음
- 생성한 Repository를 다른곳에서도 사용할 수 있기 위해서 (Injectable) board.module에서 import 해줌

### remove() vs delete()

---

- remove : 무조건 존재하는 아이템을 remove 메서드를 이용해서 지워야함, 그러지 않으면 에러가 발생(404 Error)
- delete : 만약 아이템이 존재하면 지우고 존재하지 않으면 아무 영향 x
- 이러한 차이 때문에 remove를 이용하면 하나의 아이템을 지울 때 두 번 데이터베이스를 이용해야하기 때문에 (아이템 유무 + 지우기) 데이터베이스에 한번만 접근해도 되는 delete 메서드를 사용해주겠음

## TypeScript

---

- TypeScript = JavaScript + Type문법
- js는 Dinamic Typing이 가능해서 숫자 - 문자도 알아서 숫자로 바꿔서 처리해줌
- ts는 타입에 엄격해서 에러 발생했을 때 에러도 명확하게 알려줌

### TypeScript 문법

---

- 변수 타입 지정 가능
  - 변수 :string ------- (변수에는 string 타입만 들어갈 수 있음)
  - 변수 :string[] ------- (변수에는 배열만 들어갈 수 있으며 배열 안의 원소는 string 타입만 가능)
  - 변수 :{ name? : string} = { name : 'kim' } ------- (변수에는 객체 타입만 가능하며 객체 안의 name 변수는 string 타입만 가능하고 변수에 ?가 붙으면 name값이 필수가 아닌 선택이라는 뜻)
  - 변수 :string | number ------- (Union type이라 부르며 변수에 2가지 타입 이상을 줄 수 있음)
  - type 타입이름 = string | number ------- (타입도 변수에 대입해서 사용할 수 있음)
  - 함수 만들 때 객체 앞에 :number 을 하면 객체 리턴값이 number라는 의미

#### 유저 이름에 유니크한 값 주기

---

- 유저를 생성할 때 유저 이름이 이미 사용되는 유저 이름을 사용하려 한다면 에러를 보내는 기능을 구현
  - 1. repository에서 findOne 메서드를 이용해서 이미 같은 유저 이름을 가진 아이디가 있는지 확인하고 없다면 데이터를 저장하는 방법
  - 위 방법은 데이터베이스 처리를 두 번 해줘야함
  - 2. 데이터베이스 레벨에서 만약 같은 이름을 가진 유저가 있다면 에러를 던져주는 방법
- 이미 있는 유저를 다시 생성하려 하면 아래와 같이 에러가 나오며 그냥 500에러를 던져버림
- 그 이유는 NestJS에서 에러가 발생하고 그걸 try catch 구문인 catch에서 잡아주지 않는다면 이 에러가 Controller 레벨로 가서 그냥 500 에러를 던져버림
- 이러한 이유 때문에 try catch 구문으로 에러를 잡아줘야함

#### bcryptjs

---

- 비밀번호를 암호화 해서 저장하는 부분을 구현
- npm install bcryptjs --save : bcryptjs 모듈 설치

### JWT에 대하여

---

- 로그인할 때 그 로그인한 고유 유저를 위한 토큰을 생성해야 하는데 그 토큰을 생성할 때 JWT라는 모듈을 사용함

#### JWT란 무엇인가요?

---

- JWT(JSON Web Token)는 당사자간에 정보를 JSON 개체로 안전하게 전송하기 위한 컴팩트하고 독립적인 방식을 정의하는 개방형 표준임
- 이 정보는 디지털 서명이 되어 있으므로 확인하고 신뢰할 수 있음
- 간단히 얘기하면 정보를 안전하게 전할 때 혹은 유저의 권한 같은 것을 체크하기 위해서 사용하는데 유용한 모듈

#### JWT의 구조

---

- Header, Payload, Verify Signature로 구성
  - Header : 토큰에 대한 메타 데이터를 포함하고 있음(타입, 해싱 알고리즘 ...)
  - Payload : 유저 정보(issuer), 만료 기간(expiration time), 주제(subject) 등등
  - Verify Signature : JWT의 마지막 세그먼트는 토큰이 보낸 사람에 의해 서명되었으며 어떤 식으로든 변경되지 않았는지 확인하는데 사용되는 서명임 / 서명은 헤더 및 페이로드 세그먼트, 서명 알고리즘, 비밀 또는 공개 키를 사용하여 생성됨

#### JWT 사용 흐름

---

- 유저 로그인 후 토큰 생성 후 토큰을 보관함
- Admin만 볼 수 있는 글을 보고자 할 때 => 요쳥을 보낼 때 보관하고 있던 토큰을 헤더에 넣어 같이 보냄 => 서버에서는 JWT를 이용해서 Token을 다시 생성한 후 두개를 비교함 => 그래서 통과되면 Admin 유저가 원하는 글을 볼 수 있음
- 통과되는 과정 : 서버에서 요청과 같이 온 헤더와 페이로드부분을 가져오고 서버안에 가지고 있던 비밀키를 이용해서 시그니처 부분을 다시 생성한 후 받은 토큰의 verify signature과 비교함

#### NestJs에서 Middleware들에 대해서

---

- Pipes, Filters, Guards, Interceptors 등의 미들웨어로 취급되는 것들이 있는데 각각 다른 목적을 가지며 사용됨
  - Pipes : 파이프는 요청 유효성 검사 및 페이로드 변환을 위해 만들어짐, 데이터를 예상한 대로 직렬화함
  - Filters : 필터는 오류 처리 미들웨어임, 특정 오류 처리기를 사용할 경로와 각 경로 주변의 복잡성을 관리하는 방법을 알 수 있음
  - Guards : 가드는 인증 미들웨어임, 지정된 경로로 통과할 수 있는 사람과 허용되지 않는 사람을 서버에 알려줌
  - Interceptors : 인터셉터는 응답 매핑 및 캐시 관리와 함께 요쳥 로깅과 같은 전후 미들웨어임, 각 요청 전후에 이를 실행하는 기능은 매우 강력하고 유용함

#### 각각의 미들웨어가 불러지는(called) 순서

---

- middleware > guard > interceptor > pipe > controller > service > controller > interceptor > filter > client 순서로

#### 유저와 게시물 데이터의 관계 형성

---

- 관계를 형성하기 위해서는 엔티티에 서로간의 필드를 넣어줘야함

#### Configuration

---

- Config(default.yml, development.yml, production.yml)
  - default.yml : 기본 설정(개발 환경 설정이나 운영 환경 설정에도 적용됨)
  - development.yml : default.yml에서 설정한 것 + 개발 환경에서 필요한 정보
  - production.yml : default.yml에서 설정한 것 + 운영 환경에서 필요한 정보
