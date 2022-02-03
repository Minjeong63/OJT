import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import router from "next/router";

export default function Home() {
  return (
    <div>
      <button onClick={() => router.push("/ceoLogin")}>CEO LOGIN</button>
      <br></br>
      <button onClick={() => router.push("/signUp")}>CEO 되고 싶은 사람</button>
    </div>
  );
}
