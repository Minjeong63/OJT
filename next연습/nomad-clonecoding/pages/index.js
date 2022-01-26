import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Seo from "../conponents/Seo";

const API_KEY = "9681b24cba137dbc5fc9d831319eb1d5";

export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(
          `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
        )
      ).json();
      setMovies(results);
    })();
  }, []);
  return (
    <div>
      <Seo title="Home" />
      {!movies && <h4>Loading...</h4>}
      {movies?.map((movie) => (
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
