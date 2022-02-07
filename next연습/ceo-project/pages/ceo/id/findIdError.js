import router from "next/router";
import OnClickButton from "../../../components/onclickbutton";

export default function FindIdError() {
  const backPage = () => {
    router.push("./findId");
  };
  return (
    <div>
      잘못 입력하셨습니다. 다시 입력하시기 바랍니다.<br></br>
      <br></br>
      <OnClickButton onclick={backPage} content="뒤로 가기" />
    </div>
  );
}
