import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSingleArticle } from "../utils/api";

function SingleArticle() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getSingleArticle(article_id).then((article) => {
      setArticle(article);
    });
  }, []);

  return (
    <main>
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <p>By {article.author}</p>
      <p>Date: {article.created_at}</p>
      <p>Votes: {article.votes}</p>
    </main>
  );
}

export default SingleArticle;
