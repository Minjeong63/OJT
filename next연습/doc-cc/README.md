# NextJS 공식문서 정리

## Pages

### Pre-rendering

---

- 기본적으로 Next.js는 모든 페이지를 미리 렌더링함
- 즉, 클라이언트 측 JavaScript로 모든 작업을 수행하는 대신 각 페이지에 대해 미리 HTML을 생성함
- Next.js에는 Static Generation과 Server-side Rendering 두 개의 pre-rendering이 존재함

  - Static Generation : HTML은 빌드 시 생성되며 각 요청에서 재사용됨
  - Server-side Rendering : HTML은 각 요청 에 대해 생성됨

#### Static-Generation

---

- 데이터 없는 정적 생성 : 이 페이지는 미리 렌더링할 외부 데이터를 가져올 필요가 없으며 이와 같은 경우 Next.js는 빌드 시 페이지당 하나의 HTML 파일을 생성
- 데이터를 사용한 정적 생성 :

  - getStaticProps : 페이지 내용이 외부 데이터에 의존할 때 사용
  - getStaticPaths : 페이지 경로가 외부 데이터에 의존할 때 사용

#### getServerSideProps

---

- 서버 측에서만 실행되고 브라우저에서는 실행되지 않음
- 이 페이지를 직접 요청하면 getServerSideProps를 요청 시 실행되며 이 페이지는 반환된 props로 미리 렌더링됨

#### 새로 알게된 용어

---

- CDN(콘텐츠 전송 네트워크) :

  - 지리적으로 분산된 여러 개의 서버임
  - 웹 콘텐츠를 사용자와 가까운 곳에서 전송함으로써 전송 속도를 높이고 전 세계 데이터센터는 파일 복사본을 임시로 저장하는 프로세스인 캐싱을 사용

- json :

  - Java Script Object Notation 의 약자
  - json은 단순히 데이터를 표시하는 방법일 뿐
  - json을 쓰는 이유는 json파일이 가지고 있는 데이터를 받아서 객체나 변수에 할당해서 사용하기 위함

- Compiletile : 프로그램을 생성하기 위해 개발자는 첫째로 소스코드를 작성하고 컴파일이라는 과정을 통해 기계어코드로 변환되어 실행 가능한 프로그램이 되며, 이러한 편집 과정을 컴파일 타임이라고 함
- Runtime : 컴파일과정을 마친 프로그램은 사용자에 의해 실행되어지며, 이러한 응용프로그램이 동작되어지는 때를 런타임이라고 함
