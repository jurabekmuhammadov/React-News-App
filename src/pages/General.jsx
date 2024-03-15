import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const General = () => {
  const [news, setNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState(news);

  useEffect(() => {
    fetchNews();
  }, []);

  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?category=general`
      );
      setNews(response.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handleSearch = (e) => {
    let search = e.target.value.trim().toLowerCase();
    setSearchedNews(
      news.filter((news) => news.title.toLowerCase().includes(search))
    );
  };
  return (
    <section id="general">
      <div className="title container">
        <h1>General News</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search news..."
          className="search-input"
        />
      </div>
      <div className="container general__container">
        {searchedNews.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default General;
