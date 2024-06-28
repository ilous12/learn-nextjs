import { API_URL } from "../../(home)/page";

async function getMovie(id: string) {
  console.log(`Fetching movies: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const url = `${API_URL}/${id}`;
  console.log(`URL=${url}`);
  const response = await fetch(url);
  const json = await response.json();
  console.log("now fetching");
  return json;
}

export default async function Movie({ id }: { id: string }) {
  const movie = await getMovie(id);
  return <h6>{JSON.stringify(movie)}</h6>;
}
