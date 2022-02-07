import { useRouter } from "next/router";
import OnClickButton from "../../../components/onclickbutton";

export default function IdCheck() {
  const router = useRouter();
  const name = router.query.idCheck[0];
  const id = router.query.idCheck[1];

  return (
    <div>
      {name}님의 아이디는 {id}입니다.
      <OnClickButton
        onclick={() => router.push("../login/ceoLogin")}
        content="로그인하러 가기"
      />
    </div>
  );
}
