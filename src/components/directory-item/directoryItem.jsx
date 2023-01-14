import { Link } from "react-router-dom";
import "./directoryItem.scss";

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category
  return (
    <div class="card-container">
      <div
        className="img"
        style={{
          backgroundImage: `url(${imageUrl})`,
        }}
      >
        <Link to={`/${title}`} className="nav-link">
          <div className="content">
            <h5>{title}</h5>
            {/* <p>Shop now</p> */}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default DirectoryItem;
