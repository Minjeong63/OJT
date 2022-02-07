import router from "next/router";
import OnClickButton from "../../../components/onclickbutton";

export default function ChangePassword() {
  const name = router.query.changePassword[0];
  const password = router.query.changePassword[1];
  return (
    <div>
      {name}님의 비밀번호는 {password}입니다.
      <OnClickButton
        onclick={() => router.push("../login/ceoLogin")}
        content="로그인하러 가기"
      />
    </div>
  );
}
