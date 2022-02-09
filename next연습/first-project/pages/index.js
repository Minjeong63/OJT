import router from "next/router";
import CheckButton from "../components/CheckButton";
import styles from "../styles/main.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.center}>
          <p className={styles.mktitle}> MKcarRental</p>
          <p className={styles.mksubtitle}>렌터카 관리의 모든 것</p>
          <br />
          <br />
          <input
            type="text"
            className={styles.signupinputbox}
            placeholder="회사코드"
          />
          <br />
          <input
            type="text"
            className={styles.signupinputbox}
            placeholder="아이디"
          />
          <br />
          <input
            type="password"
            className={styles.signupinputbox}
            placeholder="비밀번호"
          />
          <br />
          <CheckButton
            content="로그인"
            onClick={() => router.push("/loginPage")}
          />
          <br />
          <div className={styles.signup}>
            <a className={styles.link} href="/signUpPage0209">
              회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
