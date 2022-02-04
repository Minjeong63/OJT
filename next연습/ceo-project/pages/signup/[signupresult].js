import { useRouter } from "next/router";
import OnClickButton from "../../components/onclickbutton";

export default function SignUpError() {
  const router = useRouter();
  const { signupresult } = router.query;
  const backPage = () => {
    router.push("/signup/signUp");
  };
  return (
    <div>
      {signupresult}
      <OnClickButton onclick={backPage} content="뒤로 가기" />
    </div>
  );
}
