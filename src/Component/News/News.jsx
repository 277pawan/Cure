import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ff06d8ce7424c81814eab28fe975e61"
        );
        const data = await response.json();
        console.log("fetched the data");
        setdata(data.articles);
        setLoading(false);
      } catch (err) {
        console.log("error in fetching the data=", err);
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
            <h2>{article.title}</h2>
            {article.author && <p>Author: {article.author}</p>}
            <p>{article.description}</p>
            <img src={article.urlToImage} alt={article.title} />
            <a
              className="anchor"
              href={article.url}
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
