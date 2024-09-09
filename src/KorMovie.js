import PropTypes from "prop-types";

function KorMovie({ coverImg, title, rank, summary, genres }) {
  return (
    <div>
      <h2>
        #{rank}. {title}
      </h2>
      {/* <img src={coverImg} alt={title} />
      <p>{summary}</p>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
    </div>
  );
}

KorMovie.propTypes = {
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default KorMovie;
