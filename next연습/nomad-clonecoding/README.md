# NOMAD 강의 CloneCoding

## Library vs Framework

---

- library : 개발자로서 우리가 사용하는 것
- framework : 나의 코드를 불러가는 것

### Pages

---

- export default를 꼭 쓸 것
- 파일 이름이 url이 됨
- 컴포넌트 이름은 중요하지 않음
- jsx를 사용할 땐 react를 import 할 필요 없음

### Static Pre Rendering

---

- noscript태그 : 유저가 브라우저에서 자바스크립트를 비활성화 했을 때만 나옴

### Routing

---

- Link는 오직 href만 사용가능하며, 나머지 style 등은 a태그에 넣기

### CSS Modules

---

- 파일이름.module.css 라는 파일을 만들어서 CSS모듈을 만듦
- 위의 모듈을 적용하려면 className={styles.파일이름} 형태로 사용 가능
- 위의 모듈을 css로 사용하면 개발자도구에 갔을 때 클래스 이름을 무작위로 만들어줘서 클래스이름 충돌을 겪지 않아도 됨
- 한 클래스이름에 스타일을 2가지 적용하는 방법은
  - 1. className={`${styles.클래스이름} ${}`} 이런 식으로 사용하는 법 하나
  - 2. className={[styles.클래스이름, style관련내용].join(" ")}

### Styles JSX

---

- 스타일을 적용하는 또 다른 방식
- NextJS의 고유 방법
- Styles JSX를 사용하면 오직 그 컴포넌트 내부로 범위가 한정됨

### Custom App

---

- nextjs는 \_app.js 파일을 본 후 다른 페이지의 파일들을 확인함
- \_app.js 파일에 style jsx를 넣는다면 모든 페이지에 스타일 적용 가능
- styles안에 있는 global.css 파일은 \_app.js 파일 외엔 import 할 수 없음
- 페이지를 렌더링할 때마다 사용됨
