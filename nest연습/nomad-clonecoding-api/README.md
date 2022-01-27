# NOMAD와 함께하는 NESTJS API 만들기

### Parameter

---

- @Get("/:id")
  getOne(@Param('id')id: string) {
  return `This will return one movie with the id: ${id}`
  }
  - url에 있는 id라는 parameter를 get하기 위해 @Param('id')라고 함
  - id라는 parameter를 id라는 argument에 저장하고 싶음

### 핸들러

---

- Put : 모든 리소스를 업데이트하는 핸들러
- Patch : 리소스의 일부분만 업데이트 해주는 핸들러

#### parameter와 argument의 차이

---

- Parameter : 매개변수이며, 함수와 메서드 입력 변수명
- Argument : 전달인자이며, 함수와 메서드의 입력값

#### @Query와 @Param 사용의 차이

---

- Query : Query parameter를 받아올 때 사용

  - ex) /movies?id=123

- Param : Path variable을 받아올 때 사용

  - ex) /movies/123

- @Query 사용 : 정렬이나 필터링을 할 때
- @Param 사용 : 어떤 리소스를 식별하고 싶을 때
