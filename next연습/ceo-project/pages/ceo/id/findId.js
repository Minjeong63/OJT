import axios from "axios";
import router from "next/router";
import { useState } from "react";
import OnClickButton from "../../../components/OnClickButton";
import TextInput from "../../../components/TextInput";

export default function FindId() {
  const [name, setName] = useState("");
  const onName = (e) => {
    setName(e.target.value);
  };

  return (
    <div>
      {" "}
      이름 : <TextInput content="이름을" onchange={onName} value={name} />
      <OnClickButton
        content="확인"
        onclick={() =>
          name !== ""
            ? axios
                .get(`http://localhost:9101/ceo/${name}`)
                .then((res) =>
                  router.push(
                    `http://localhost:9100/ceo/id/${res.data.name}/${res.data.id}`
                  )
                )
                .catch((err) =>
                  router.push("http://localhost:9100/ceo/id/findIdError")
                )
            : router.push("http://localhost:9100/ceo/id/findIdError")
        }
      />
    </div>
  );
}
