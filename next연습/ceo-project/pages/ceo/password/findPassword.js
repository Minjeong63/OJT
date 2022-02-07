import axios from "axios";
import router from "next/router";
import { useState } from "react";
import OnClickButton from "../../../components/onclickbutton";
import TextInput from "../../../components/textinput";

export default function FindPassword() {
  const [name, setName] = useState("");
  const [id, setId] = useState("");

  const onName = (e) => {
    setName(e.target.value);
  };
  const onId = (e) => {
    setId(e.target.value);
  };

  return (
    <div>
      <h2>비밀번호 찾기</h2>
      <br></br>
      이름 : <TextInput content="이름을" onchange={onName} value={name} />
      <br></br>
      아이디 : <TextInput content="아이디를" onchange={onId} value={id} />
      <OnClickButton
        content="확인"
        onclick={() =>
          id !== "" && name !== ""
            ? axios
                .get(`http://localhost:9101/ceo/${name}`)
                .then((res) =>
                  router.push(
                    `http://localhost:9100/ceo/password/${res.data.name}/${res.data.password}`
                  )
                )
                .catch((err) =>
                  router.push(
                    "http://localhost:9100/ceo/password/findPasswordError"
                  )
                )
            : router.push(
                "http://localhost:9100/ceo/password/findPasswordError"
              )
        }
      />
    </div>
  );
}
