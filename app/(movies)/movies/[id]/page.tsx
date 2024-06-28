import { Suspense } from "react";
import { API_URL } from "../../../(home)/page";
import Movie from "../../../about-us/components/movie";
import MovieVideos from "../../../about-us/components/movie-videos";

export default function MovieDetail(props: { params: { id: string } }) {
  return (
    <div>
      <h3>Movie Detail</h3>
      <Suspense fallback={<h6>Loading movie</h6>}>
        <Movie id={props.params.id} />
      </Suspense>
      <h3>Videos</h3>
      <Suspense fallback={<h6>Loading video</h6>}>
        <MovieVideos id={props.params.id} />
      </Suspense>
    </div>
  );
}
