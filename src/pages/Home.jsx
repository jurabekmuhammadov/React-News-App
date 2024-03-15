import axios from "axios";
import { useEffect, useState } from "react";
import "./section.scss";
import NewCard from "../components/NewCard/NewCard";

const HomePage = () => {
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);
  const [count, setCount] = useState(0);
  const [searchedNews, setSearchedNews] = useState(news);
  const hasPrev = Boolean(page > 1);
  const hasNext = Boolean(page >= Math.trunc(count / 8));

  useEffect(() => {
    fetchNews();
    getCount();
  }, [page]);

  useEffect(() => {
    setSearchedNews(news);
  }, [news]);

  async function fetchNews() {
    try {
      const response = await axios.get(
        `http://localhost:3000/news?_page=${page}&_per_page=8`
      );
      setNews(response.data.data);
    } catch (error) {
      console.log(error.message);
    }
  }
  async function getCount() {
    try {
      const response = await axios.get(`http://localhost:3000/news`);
      setCount(response.data.length);
    } catch (error) {
      console.log(error.message);
    }
  }
  const handlePage = (type) => {
    if (type === "prev") {
      setPage(page - 1);
    } else {
      setPage(page + 1);
    }
  };
  const handleSearch = (e) => {
    let search = e.target.value.trim().toLowerCase();
    setSearchedNews(
      news.filter((news) => news.title.toLowerCase().includes(search))
    );
  };

  return (
    <section id="home">
      <div className="title container">
        <h1>Our Latest News</h1>
        <input
          type="text"
          onChange={handleSearch}
          placeholder="Search news..."
          className="search-input"
        />
      </div>
      <div className="container home__container">
        {searchedNews.map((item, index) => (
          <NewCard key={index} news={item} />
        ))}
      </div>
      <div className="pagination">
        <button
          className="prev"
          disabled={!hasPrev}
          onClick={() => handlePage("prev")}
        >
          Prev
        </button>
        <span>{page}</span>
        <button
          className="next"
          disabled={hasNext}
          onClick={() => handlePage("next")}
        >
          Next
        </button>
      </div>
    </section>
  );
};

export default HomePage;
