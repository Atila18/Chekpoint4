import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import PrivatePartForGallery from "./PrivatePartForGallery";

export default function MangaAPI({ id, mangaName, image }) {
  return (
    <div className="parent">
      <div>
        <figure className="visage">
          <div className="image-container">
            <PrivatePartForGallery authorizedRoles={[1]} mangaId={id} />
            <div className="image-container">
              <img
                src={`${import.meta.env.VITE_ASSETS_IMAGES_URL}/${image}`}
                alt={mangaName}
              />
            </div>
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
