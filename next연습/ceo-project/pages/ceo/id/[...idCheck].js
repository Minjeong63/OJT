import { useRouter } from "next/router";

export default function IdCheck() {
  const router = useRouter();
  const name = router.query.idCheck[0];
  const id = router.query.idCheck[1];

  return (
    <div>
      {name}님의 아이디는 {id}입니다.
    </div>
  );
}
