import Seo from "../conponents/Seo";

export default function Login() {
  return (
    <div>
      <Seo title="회원가입" />
      <h2>회원가입</h2>
      <form>
        <span>아이디 : </span>
        <input type="text" placeholder="아이디를 입력해주세요" />
        <br></br>
        <span>이름 : </span>
        <input type="text" placeholder="이름을 입력해주세요" />
        <br></br>
        <span>비밀번호 : </span>
        <input type="password" placeholder="비밀번호를 입력해주세요" />
        <br></br>
        <span>비밀번호 확인 : </span>
        <input type="password" placeholder="비밀번호를 다시 입력해주세요" />
      </form>
    </div>
  );
}
