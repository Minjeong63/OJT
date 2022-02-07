import router from "next/router";
import { useState } from "react";
import axios from "axios";
import OnClickButton from "../../../components/onclickbutton";
import TextInput from "../../../components/textinput";

export default function CeoLogin() {
  const [ceo, setCeo] = useState("");
  const [ceoId, setCeoId] = useState("");
  const onPasswordLogin = (event) => {
    setCeo(event.target.value);
  };
  const onIdLogin = (e) => {
    setCeoId(e.target.value);
  };

  return (
    <div>
      <h1>CEO LOGIN</h1>

      <div>
        {" "}
        아이디 :{" "}
        <TextInput content="ceo 아이디를" onchange={onIdLogin} value={ceoId} />
      </div>
      <br></br>
      <div>
        {" "}
        비밀번호 :{" "}
        <input
          type="password"
          onChange={onPasswordLogin}
          value={ceo}
          placeholder="비밀번호를 입력하세요."
          maxLength="20"
          minLength="2"
        ></input>
      </div>
      <div>
        <OnClickButton
          onclick={() =>
            ceo !== "" && ceoId !== ""
              ? axios
                  .get(`http://localhost:9101/ceo/${ceoId}/${ceo}`)
                  .then((res) =>
                    router.push(
                      `http://localhost:9100/ceo/login/${res.data.id}/${res.data.password}`
                    )
                  )
                  .catch((err) =>
                    router.push(`http://localhost:9100/ceo/login/ceoError`)
                  )
              : router.push("http://localhost:9100/ceo/login/ceoError")
          }
          content="로그인 하기"
        />

        <OnClickButton
          onclick={() => router.push("http://localhost:9100/ceo/id/findId")}
          content="아이디 찾기"
        />

        <OnClickButton
          onclick={() =>
            router.push("http://localhost:9100/ceo/password/findPassword")
          }
          content="비밀번호 찾기"
        />
      </div>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await axios.get("http://localhost:9101/ceo");
//   const data = await res.data;

//   return {
//     props: {
//       data,
//     },
//   };
// }
