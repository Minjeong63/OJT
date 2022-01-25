import { Axios } from "axios";
import { useEffect } from "react";
import { useRouter } from "react";

export default function Admin() {
  const router = useRouter();

  function checkLogin() {
    Axios.get("/api/isLogin").then((res) => {
      if (res.status === 200 && res.data.name) {
      } else {
        router.push("/login");
      }
    });
  }
  useEffect(() => {
    checkLogin();
  }, []);
  return <>admin</>;
}
