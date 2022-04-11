import { useState } from "react";
import { postComment } from "../utils/api";
import { useParams } from "react-router-dom";

function AddComment() {
  const { article_id } = useParams();
  const [commentText, setCommentText] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      AddComment
      <form
        onSubmit={(event) => {
          handleSubmit(event);
        }}
      >
        <textarea
          type="text"
          name="comment"
          placeholder="Add your comment"
          onChange={(event) => {
            handleChange(event.target.value);
          }}
        />
        <input></input>
      </form>
    </div>
  );
}

export default AddComment;
