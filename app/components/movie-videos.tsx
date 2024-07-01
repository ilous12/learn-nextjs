import { API_URL } from "../constants";
import style from "../styles/movie-videos.module.css";

async function getVideos(id: string) {
  console.log(`Fetching video: ${Date.now()}`);
  await new Promise((resolve) => setTimeout(resolve, 3000));
  const url = `${API_URL}/${id}/videos`;
  console.log(`URL=${url}`);
  const response = await fetch(url);
  const json = await response.json();
  console.log("now fetching");
  return json;
  // throw new Error("something broken...");
}

export default async function MovieVideos({ id }: { id: string }) {
  const videos = await getVideos(id);
  // return <h6>{JSON.stringify(videos)}</h6>;
  return (
    <div className={style.movie_videos}>
      {videos.map((video) => (
        <iframe
          key={video.id}
          src={`https://youtube.com/embed/${video.key}`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ))}
    </div>
  );
}
