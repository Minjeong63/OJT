import { useRouter } from "next/router";

export default function CeoLoginCheck() {
  const router = useRouter();
  const ceoId = router.query.name[0];

  return <div>아이디가 {ceoId}인 CEO 회원입니다.</div>;
}
