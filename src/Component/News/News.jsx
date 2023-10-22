import React, { useEffect, useState } from "react";
import "./News.css";

function News() {
  const [data, setdata] = useState([]);
  const [loading, setLoading] = useState(true);
  const [count, setcounter] = useState(1);
  const [disp, setprev] = useState(true);
  const [next, setnext] = useState(true);
  const [loadingicon, setloadingicon] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await fetch("https://dummyjson.com/products");
        const data = await response.json();
        setdata(data.products);
        setLoading(false);
        setloadingicon(true);
      } catch (err) {
        setLoading(false);
        setloadingicon(false);
      }
    }

    fetchNews();
  }, []);
  useEffect(() => {
    if (count <= 1) {
      setprev(false);
    } else {
      setprev(true);
    }
    if (count >= 4) {
      setnext(false);
    } else {
      setnext(true);
    }
  }, [count]);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [count]);
  return (
    <>
      <div className="newscontainer">
        {loading ? (
          <div className="spinner-container">
            <div className="spinner"></div>
          </div>
        ) : Array.isArray(data) && data.length > 0 ? (
          data.slice(count * 8 - 8, count * 8).map((article, index) => (
            <>
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
                  Read more.
                </a>
              </div>
            </>
          ))
        ) : (
          <p>No news articles available.</p>
        )}
      </div>
      {loadingicon ? (
        <div className="pagination">
          <span>
            <button
              className="pagination-button"
              style={{
                display: disp ? "inline-block" : "none",
              }}
              onClick={() => setcounter(count - 1)}
            >
              Prev
            </button>
            <button className="current-page">{count}</button>
            <button
              className="pagination-button"
              style={{
                display: next ? "inline-block" : "none",
              }}
              onClick={() => setcounter(count + 1)}
            >
              Next
            </button>
          </span>
        </div>
      ) : (
        <div> </div>
      )}
    </>
  );
}

export default News;
