import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "../conponents/Seo";

export default function Home({ results }) {
  // const [movies, setMovies] = useState([]);
  // useEffect(() => {
  //   (async () => {
  //     const { results } = await (await fetch("/api/movies")).json();
  //     setMovies(results);
  //   })();
  // }, []);
  return (
    <div>
      <Seo title="Home" />
      {results?.map((movie) => (
        <div key={movie.id}>
          <h4>{movie.original_title}</h4>
        </div>
      ))}

      <style jsx>
        {`
          div {
            text-align: center;
            font-size: xx-large;
          }
        `}
      </style>
    </div>
  );
}

export async function getServerSideProps() {
  const { results } = await (
    await fetch("http://localhost:9100/api/movies")
  ).json();
  return {
    props: {
      results,
    },
  };
}
// getServerSideProps는 이름 절대로 바꾸면 안됨
// props : key or property
// 이건 서버에서 돌아감
// 여기서 무엇을 return 하던지, 이걸 props로써 page에게 줌
