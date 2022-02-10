import router from "next/router";
import { useState } from "react";
import CheckButton from "../../../OJT/next연습/first-project/components/CheckButton";
import styles from "../styles/main.module.css";
import axios from "axios";
import TextInput from "../../../OJT/next연습/first-project/components/TextInput";
import Footer from "../../../OJT/next연습/first-project/components/Layout/Footer";
import Layout from "../../../OJT/next연습/first-project/components/Layout/Layout";

export default function Home() {
  const [code, setCode] = useState("");
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

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
    <div className={styles.bodywrapper}>
      <div>
        <div className={styles.layout}>
          <div className={styles.center}>
            <p className={styles.mktitle}> MKcarRental</p>
            <p className={styles.mksubtitle}>렌터카 관리의 모든 것</p>
            <br />
            <br />
            <TextInput placeholder="회사코드" value={code} onChange={onCode} />
            <br />
            <TextInput placeholder="아이디" value={id} onChange={onId} />
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
              content="로그인"
              onClick={() =>
                code !== "" && id !== "" && password !== ""
                  ? axios
                      .get("http://172.30.1.9:9001/users", {
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
              <a className={styles.link} href="/signUpPage">
                회원가입
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
