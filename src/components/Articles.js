import React, { useEffect, useState } from "react";
import { getArticles } from "../utils/api";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function Articles() {
  const [articles, setArticles] = useState([]);
  const { slug } = useParams();

  useEffect(() => {
    getArticles(slug).then((articlesFromApi) => {
      setArticles(articlesFromApi);
    });
  }, [slug]);

  return (
    <main>
      <h2>All Articles</h2>
      <ul className="article-list">
        {articles.map((article) => {
          return (
            <Link
              key={article.article_id}
              to={`/articles/${article.article_id}`}
            >
              <li key={article.article_id} className="articles">
                <h3>{article.title}</h3>
                <p>Author: {article.author}</p>
                <p>Date: {article.created_at}</p>
              </li>
            </Link>
          );
        })}
      </ul>
    </main>
  );
}

export default Articles;
