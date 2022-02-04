import axios from "axios";
import router from "next/router";
import { useState } from "react";
import OnClickButton from "../../../components/onclickbutton";
import TextInput from "../../../components/textinput";

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
        onclick={
          name !== ""
            ? () =>
                axios
                  .get(`http://localhost:9101/ceo/${name}`)
                  .then((res) =>
                    router.push(
                      `http://localhost:3002/ceo/id/${res.data.name}/${res.data.id}`
                    )
                  )
                  .catch((err) => console.log(err))
            : console.log("실패")
        }
      />
    </div>
  );
}
