import { Metadata } from "next";
import Link from "next/link";
import { API_URL } from "../constants";
import Movie from "../components/movie";
import style from "../styles/home.module.css";

export const metadata: Metadata = {
  title: "Home",
};

async function getMovies() {
  // await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);
  const json = await response.json();
  console.log("now fetching");
  return json;
}
const movies = "";
export default async function HomePage() {
  const movies = await getMovies();
  return (
    <div className={style.home}>
      {movies.map((movie) => (
        <Movie
          key={movie.id}
          id={movie.id}
          poster_path={movie.poster_path}
          title={movie.title}
        />
      ))}
    </div>
  );
}
