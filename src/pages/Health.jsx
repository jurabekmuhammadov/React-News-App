import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Health = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?category=health`
      );
      setNews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section id="health">
      <div className="title container">
        <h1>Health News</h1>
      </div>
      <div className="container health__container">
        {news.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Health;
