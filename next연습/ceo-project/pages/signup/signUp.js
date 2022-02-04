import Home from "../../components/home";
import OnClickButton from "../../components/onclickbutton";
import TextInput from "../../components/textinput";
import { useState } from "react";
import axios from "axios";
import router from "next/router";

export default function SignUp() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onName = (e) => {
    setName(e.target.value);
  };
  const onId = (e) => {
    setId(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <h1>CEO SIGNUP</h1>

      <div>
        이름 : <TextInput content="이름을" onchange={onName} value={name} />
        <br></br>
        아이디 : <TextInput content="아이디를" onchange={onId} value={id} />
        <br></br>
        비밀번호 :{" "}
        <input
          type="password"
          placeholder="비밀번호를 입력하세요."
          onChange={onPassword}
          value={password}
          maxLength="20"
          minLength="2"
        ></input>
      </div>
      <OnClickButton
        content="신청하기"
        onclick={() =>
          name !== "" && id !== "" && password !== ""
            ? axios
                .post("http://localhost:9101/ceo", {
                  name: name,
                  id: id,
                  password: password,
                })
                .then((res) => {
                  router.push(`/signup/${"회원가입을 완료하셨습니다 :)"}`);
                })
                .catch((err) => {
                  console.log(err);
                })
            : router.push(
                `/signup/${"잘못 입력하셨습니다. 다시 입력해주세요 :("}`
              )
        }
      />
    </div>
  );
}
