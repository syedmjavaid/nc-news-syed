import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getArticleComments } from "../utils/api";

function ArticleComments() {
  const [comments, setComments] = useState([]);
  const { article_id } = useParams();

  useEffect(() => {
    getArticleComments(article_id).then((commentsFromApi) => {
      setComments(commentsFromApi);
    });
  }, []);

  return (
    <main>
      <h3 className="comment-heading">Comments</h3>
      <h5>Add Comment</h5>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="comments">
              <h4>{comment.author}</h4>
              <p>{comment.body}</p>
              <p>Date: {comment.created_at}</p>
              <p>Votes: {comment.votes}</p>
            </li>
          );
        })}
      </ul>
    </main>
  );
}

export default ArticleComments;