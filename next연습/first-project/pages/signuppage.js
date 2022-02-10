import { useState } from "react";
import CheckButton from "../components/CheckButton";
import TextInput from "../components/TextInput";
import styles from "../styles/main.module.css";
import axios from "axios";

export default function SignUp() {
  const [ownerNumber, setOwnerNumber] = useState("");
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  const onOwnerNumber = (e) => {
    setOwnerNumber(e.target.value);
  };
  const onName = (e) => {
    setName(e.target.value);
  };
  const onNumber = (e) => {
    setNumber(e.target.value);
  };
  const onCode = (e) => {
    setCode(e.target.value);
  };
  const onId = (e) => {
    setId(e.target.value);
  };
  const onPassword = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.center}>
          <p className={styles.mktitles}>회원가입</p>
          <br />
          <TextInput
            placeholder="사업자등록번호"
            value={ownerNumber}
            onchange={onOwnerNumber}
          />
          <br />
          <TextInput placeholder="이름" value={name} onchange={onName} />
          <br />
          <TextInput
            placeholder="전화번호"
            value={number}
            onchange={onNumber}
          />
          <br />
          <TextInput placeholder="회사코드" value={code} onchange={onCode} />
          <br />
          <TextInput placeholder="아이디" value={id} onchange={onId} />
          <br />
          <input
            type="password"
            className={styles.signupinputbox}
            placeholder="비밀번호"
            value={password}
            onChange={onPassword}
          />
          <br />
          <CheckButton
            content="가입하기"
            onClick={() =>
              ownerNumber !== "" &&
              name !== "" &&
              number !== "" &&
              code !== "" &&
              id !== "" &&
              password !== ""
                ? axios
                    .post("http://172.30.1.9:9001/users", {
                      ownerNumber,
                      name,
                      number,
                      code,
                      id,
                      password,
                    })
                    .then((res) => console.log("성공"))
                    .catch((err) => console.log("실패"))
                : console.log("메롱")
            }
          />
          <br />
          <div className={styles.signup}>
            <a className={styles.link} href="/">
              로그인하기
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
