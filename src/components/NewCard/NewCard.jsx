import { Link } from "react-router-dom";
import "./new-card.scss";
import PropTypes from "prop-types";
const NewCard = ({ news }) => {
  return (
    <div className="new-card">
      <div className="pic">
        <img
          src={news.media.map((item) => item.metadata[2].url)}
          alt="new-card"
        />
      </div>
      <div className="category">
        <span>{news.category}</span>
      </div>
      <div className="content">
        <Link to={`/single-new/${news.id}`}>{news.title}</Link>
        <div className="bottom">
          <span>{news.media.map((item) => item.copyright)}</span>
          <span>{news.published_date}</span>
        </div>
      </div>
    </div>
  );
};

NewCard.propTypes = {
  news: PropTypes.object,
};

export default NewCard;
