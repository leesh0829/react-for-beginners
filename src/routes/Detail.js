import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovies(json.data.movie);
    setLoading(false);

    console.log(movies);
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          <div>
            <h1>{movies.title}'s Detail</h1>
            <img src={movies.medium_cover_image} alt="title" />
          </div>
          <div>
            <h2>title: {movies.title}</h2>
            <p>description: {movies.description_full}</p>
            <p>Like: {movies.like_count}</p>
            <p>rating: {movies.rating}</p>
            <p>made year: {movies.year}</p>
            <iframe
              title={movies.id}
              width="560"
              height="315"
              src={`https://www.youtube.com/embed/${movies.yt_trailer_code}`}
              frameBorder="0"
            ></iframe>
          </div>
        </div>
      )}
    </div>
  );
}

export default Detail;
