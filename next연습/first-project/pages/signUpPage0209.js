import { useState } from "react";
import CheckButton from "../components/CheckButton";
import TextInput from "../components/TextInput";
import styles from "../styles/main.module.css";

export default function SignUp() {
  const [name, setName] = useState("");
  const onName = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.center}>
          <p className={styles.mktitles}>회원가입</p>
          <br />
          <TextInput placeholder="사업자등록번호" />
          <br />
          <TextInput placeholder="이름" />
          <br />
          <TextInput placeholder="전화번호" />
          <br />
          <TextInput placeholder="회사코드" />
          <br />
          <TextInput placeholder="아이디" />
          <br />
          <input
            type="password"
            className={styles.signupinputbox}
            placeholder="비밀번호"
          />
          <br />
          <CheckButton content="가입하기" />
        </div>
      </div>
    </div>
  );
}
