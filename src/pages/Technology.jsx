import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Technology = () => {
  const [news, setNews] = useState([]);
  const [searchedNews, setSearchedNews] = useState(news);

  useEffect(() => {
    fetchNews();
  }, []);
  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  async function fetchNews() {
    await axios
      .get(`http://localhost:3000/news?category=technology`)
      .then((response) => {
        setNews(response.data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }

  const handleSearch = (e) => {
    let search = e.target.value.trim().toLowerCase();
    setSearchedNews(
      news.filter((news) => news.title.toLowerCase().includes(search)) ||
        news.filter((news) => news.abstract.toLowerCase().includes(search))
    );
  };
  return (
    <section id="sports">
      <div className="title container">
        <h1>Technology News</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search news..."
          className="search-input"
        />
      </div>
      <div className="container technology__container">
        {searchedNews.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Technology;
