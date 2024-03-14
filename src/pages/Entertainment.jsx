import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Entertainment = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?category=entertainment`
      );
      setNews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section id="entertainment">
      <div className="title container">
        <h1>Entertainment News</h1>
      </div>
      <div className="container entertainment__container">
        {news.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Entertainment;
