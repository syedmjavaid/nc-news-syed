import { patchVote } from "../utils/api";
import { useParams } from "react-router-dom";

const Votes = ({ voteNumber }) => {
  const { article_id } = useParams();

  const increaseVote = () => {
    patchVote(article_id);
  };

  return (
    <button
      onClick={() => {
        increaseVote();
      }}
    >
      ⬆️ {voteNumber}
    </button>
  );
};

export default Votes;
