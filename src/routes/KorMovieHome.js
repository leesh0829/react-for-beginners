import { useEffect, useState } from "react";
import KorMovie from "../KorMovie";

function KorMovieHome() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchWeeklyBoxOfficeList.json?key=82ca741a2844c5c180a208137bb92bd7&targetDt=20240908`
      )
    ).json();
    setMovies(json.boxOfficeResult.weeklyBoxOfficeList);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  console.log(movies);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <div>
          {movies.map((movie) => (
            <KorMovie
              key={movie.movieCd}
              //coverImg={movie.medium_cover_image}
              title={movie.movieNm}
              rank={movie.rank}
              //summary={movie.summary}
              //genres={movie.}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default KorMovieHome;
