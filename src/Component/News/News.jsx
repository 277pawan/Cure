import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setdata(data.products);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="newscontainer">
      {loading ? (
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : Array.isArray(data) && data.length > 0 ? (
        data.map((article, index) => (
          <div key={index} className="article">
            <h2>{article.brand}</h2>
            {article.category && <p>Author: {article.category}</p>}
            <p>{article.description}</p>
            <img src={article.images[0]} alt={article.price} />
            <a
              className="anchor"
              href={article.thumbnail}
              target="_blank"
              rel="noopener noreferrer"
            >
              Read more
            </a>
          </div>
        ))
      ) : (
        <p>No news articles available.</p>
      )}
    </div>
  );
}

export default News;
