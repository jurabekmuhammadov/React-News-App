import axios from "axios";
import { useEffect, useState } from "react";
import NewCard from "../components/NewCard/NewCard";

const Business = () => {
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
      .get(`http://localhost:3000/news?category=business`)
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
      news.filter((news) => news.title.toLowerCase().includes(search))
    );
  };
  return (
    <section id="business">
      <div className="title container">
        <h1>Business News</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search news..."
          className="search-input"
        />
      </div>
      <div className="container business__container">
        {searchedNews.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
    </section>
  );
};

export default Business;
