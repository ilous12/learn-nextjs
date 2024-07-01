import { API_URL } from "../constants";
import style from "../styles/movie-info.module.css";
import { title } from "process";

export async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = `${API_URL}/${id}`;
  console.log(`URL=${url}`);
  const response = await fetch(url);
  const json = await response.json();
  console.log("now fetching");
  return json;
}

export default async function MovieInfo({ id }: { id: string }) {
  const movie = await getMovie(id);
  // return <h6>{JSON.stringify(movie)}</h6>;
  return (
    <div className={style.movie_info}>
      <img className={style.poster} src={movie.poster_path} alt={movie.title} />
      <div>
        <h1 className={style.title}>{movie.title}</h1>
        <h3 className={style.info}>⭐️ {movie.vote_average.toFixed(1)}</h3>
        <p className={style.info}>{movie.overview}</p>
        <a className={style.info} href={movie.homepage} target="_blank">
          Homepage &rarr;
        </a>
      </div>
    </div>
  );
}
