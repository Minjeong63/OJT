import { useState } from "react";
import { useRouter } from "next/router";
import NavBar from "../conponents/NavBar";

export default function Home() {
  const [counter, setCounter] = useState(0);
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div>
        Home {counter}
        <button onClick={() => setCounter((item) => item + 5)}>+5</button>
      </div>
    </div>
  );
}
