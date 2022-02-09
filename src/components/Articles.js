import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";

function Articles() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    getArticles().then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, []);

  return (
    <main>
      <h2>All Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <li key={article.article_id} className="articles">
              <h3>{article.title}</h3>
              <p>Author: {article.author}</p>
              <p>Date: {article.created_at}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default Articles;
