import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=6ff06d8ce7424c81814eab28fe975e61"
        );
        const data = await response.json();
        setdata(data.articles);
        setLoading(false); // Data fetched, set loading to false
      } catch (err) {
        console.log(err);
        setLoading(false); // Handle error and set loading to false
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="newscontainer">
      {loading ? ( // Render spinner if loading is true
        <div className="spinner-container">
          <div className="spinner"></div>
        </div>
      ) : (
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
      )}
    </div>
  );
}

export default News;
