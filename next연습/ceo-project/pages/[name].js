import { useRouter } from "next/router";
export default function CeoLoginCheck() {
  const router = useRouter();
  const { name } = router.query;
  return <div>{name}님은 CEO입니다.</div>;
}
