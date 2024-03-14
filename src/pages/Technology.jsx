import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Technology = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?category=technology`
      );
      setNews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section id="sports">
      <div className="title container">
        <h1>Technology News</h1>
      </div>
      <div className="container technology__container">
        {news.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Technology;
