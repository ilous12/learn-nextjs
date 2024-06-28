import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home",
};
export const API_URL = "https://nomad-movies.nomadcoders.workers.dev/movies";

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
    <div>
      <div>
        {movies.map((movie) => (
          <li>
            <Link href={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </div>
    </div>
  );
}