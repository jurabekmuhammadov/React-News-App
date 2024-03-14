import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Sports = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  }, []);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?category=sports`
      );
      setNews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  return (
    <section id="sports">
      <div className="title container">
        <h1>Sport News</h1>
      </div>
      <div className="container sports__container">
        {news.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Sports;
