import { patchVote } from "../utils/api";
import { useParams } from "react-router-dom";

const Votes = ({ voteNumber }) => {
  const { article_id } = useParams();
  const params = useParams();
  console.log(params);

  const increaseVote = (e, comment_id) => {
    console.log(e);
    console.log(comment_id);
    patchVote(article_id);
  };

  return (
    <button
      onClick={(e, comment_id) => {
        increaseVote(e, comment_id);
      }}
    >
      ⬆️ {voteNumber}
    </button>
  );
};

export default Votes;
