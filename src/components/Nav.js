import { useEffect, useState } from "react";
import { getTopics } from "../utils/api";
import { Link } from "react-router-dom";

function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    getTopics().then((topicsFromApi) => {
      setTopics(topicsFromApi);
    });
  }, []);

  return (
    <nav className="Nav">
      Home
      {topics.map((topic) => {
        return (
          <Link key={topic.slug} to={`/topics/${topic.slug}`}>
            {topic.slug}
          </Link>
        );
      })}
    </nav>
  );
}

export default Nav;
