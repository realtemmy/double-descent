import { Link } from "react-router-dom";
import "./directoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, slug } = category;
  return (
    <div className="directory-container">
      <Link to={`/${slug}`} className="nav-link">
        <div
          className="img"
          style={{
            backgroundImage: `url(${imageUrl})`,
          }}
        >
          <div className="content">
            <h5>{title}</h5>
            {/* <p>Shop now</p> */}
          </div>
        </div>
      </Link>
    </div>
  );
};

export default DirectoryItem;
