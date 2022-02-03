import router from "next/router";

export default function CeoError() {
  const backPage = () => {
    router.push("/ceoLogin");
  };
  return (
    <div>
      CEO를 잘못 입력하셨습니다. 다시 입력하시기 바랍니다.<br></br>
      <br></br>
      <button onClick={backPage}>되돌아가기</button>
    </div>
  );
}
