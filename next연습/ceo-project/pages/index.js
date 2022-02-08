import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import router from "next/router";
import OnClickButton from "../components/OnClickButton";

export default function Home() {
  return (
    <div>
      <Head>
        <title>MJ Page</title>
      </Head>
      <OnClickButton
        onclick={() => router.push("/ceo/login/ceoLogin")}
        content="CEO LOGIN"
      />
      <OnClickButton
        onclick={() => router.push("/signup/signUp")}
        content="CEO 되고 싶은 사람"
      />
    </div>
  );
}
