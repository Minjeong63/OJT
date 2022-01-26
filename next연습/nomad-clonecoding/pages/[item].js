// 라우터 쿼리의 키 값을 name으로 받았기 때문에 파일명을 name으로 해줘야 올바르게 작동

import { useRouter } from "next/router";

export default function Name() {
  const router = useRouter();
  const { item } = router.query;
  console.log(router);
  return <h1>My name is {item}</h1>;
}
