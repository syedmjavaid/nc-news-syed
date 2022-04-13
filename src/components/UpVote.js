import { patchVote } from "../utils/api";

const Votes = ({ voteNumber }) => {
  const increaseVote = () => {
    patchVote();
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
