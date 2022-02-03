import router from "next/router";
import { useState } from "react";
import CeoError from "./ceoError";
import axios from "axios";

export default function CeoLogin() {
  const [ceo, setCeo] = useState("");
  const onLogin = (event) => {
    setCeo(event.target.value);
  };

  return (
    <div>
      <h1>CEO LOGIN</h1>
      <br></br>
      <br></br>
      <br></br>
      <input
        placeholder="ceo 이름을 입력하세요."
        onChange={onLogin}
        value={ceo}
      />
      <button
        onClick={() =>
          ceo !== ""
            ? axios
                .get(`http://localhost:9101/ceo/${ceo}`)
                .then((res) =>
                  router.push(`http://localhost:3002/${res.data.name}`)
                )
                .catch((err) => router.push(`http://localhost:3002/ceoError`))
            : router.push("http://localhost:3002/ceoError")
        }
      >
        로그인 하기
      </button>
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
