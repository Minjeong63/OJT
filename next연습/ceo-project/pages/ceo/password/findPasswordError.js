import router from "next/router";
import OnClickButton from "../../../components/OnClickButton";

export default function FindPasswordError() {
  const backPage = () => {
    router.push("./findPassword");
  };
  return (
    <div>
      잘못 입력하셨습니다. 다시 입력하시기 바랍니다.<br></br>
      <br></br>
      <OnClickButton onclick={backPage} content="뒤로 가기" />
    </div>
  );
}
