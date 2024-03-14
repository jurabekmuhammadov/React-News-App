import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./single-new.scss";
const SingleNew = () => {
  const { id } = useParams();
  const [singleNew, setSingleNew] = useState([]);

  useEffect(() => {
    async function fetchSingleNew() {
      await axios
        .get(`http://localhost:3000/news?id=${id}`)
        .then((response) => {
          setSingleNew(response.data);
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
    fetchSingleNew();
  }, [id]);
  return (
    <section id="single-new">
      {singleNew.map((item, index) => (
        <div key={index} className="single-new-container">
          <div className="top">
            <div className="top__container container">
              <div className="content">
                <div className="back">
                  <Link to={"/"}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      height="25"
                      viewBox="0 -960 960 960"
                      width="25"
                      fill="white"
                    >
                      <path d="M400-80 0-480l400-400 71 71-329 329 329 329-71 71Z" />
                    </svg>
                    Back
                  </Link>
                </div>
                <div className="date">
                  <span>Published at {item.published_date}</span>
                  <span>Updated at {item.updated}</span>
                </div>
                <h1 className="title">{item.title}</h1>
                <span className="author">
                  By {item.media.map((item) => item.copyright)}
                </span>
              </div>
              <div className="pic">
                <img
                  src={item.media.map((item) => item.metadata[2].url)}
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="content">
            <div className="content__container container">
              <h3>{item.category}</h3>
              <p>{item.abstract}</p>
              <a target="_blank" href={item.url}>
                Read more
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default SingleNew;
