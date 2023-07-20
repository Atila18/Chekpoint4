import { Link } from "react-router-dom";
import PropTypes from "prop-types";

export default function MangaAPI({ id, mangaName, image }) {
  return (
    <div className="parent">
      <div>
        <figure className="visage">
          <div className="image-container">
            <img src={image} alt={mangaName} />
          </div>
          <figcaption className={!mangaName ? "only-link" : ""}>
            {mangaName}
            <Link to={`/mangaDetails/${id}`} className="link">
              + D'INFOS
            </Link>
          </figcaption>
        </figure>
      </div>
    </div>
  );
}

MangaAPI.propTypes = {
  mangaName: PropTypes.string,
  image: PropTypes.string,
  id: PropTypes.number,
};

MangaAPI.defaultProps = {
  mangaName: undefined,
  image: undefined,
  id: undefined,
};
