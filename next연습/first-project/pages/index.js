import router from "next/router";
import styles from "../styles/main.module.css";

export default function Home() {
  return (
    <div>
      <div className={styles.layout}>
        <div className={styles.center}>
          <p className={styles.mktitle}> MKcarRental</p>
          <p className={styles.mksubtitle}>렌터카 관리의 모든 것</p>
          <br />
          <input
            type="text"
            className={styles.inputbox}
            placeholder="회사코드"
          />
          <br />
          <input type="text" className={styles.inputbox} placeholder="아이디" />
          <br />
          <input
            type="password"
            className={styles.inputbox}
            placeholder="비밀번호"
          />
          <br />
          <button
            className={styles.button}
            onClick={() => router.push("/loginPage")}
          >
            로그인
          </button>
          <div className={styles.signup}>
            <a className={styles.link} href="/signUpPage">
              회원가입
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
