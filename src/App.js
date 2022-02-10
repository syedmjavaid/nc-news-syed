import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Articles from "./components/Articles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleArticle from "./components/SingleArticle";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<Articles />}></Route>
          <Route path="/topics/:slug" element={<Articles />}></Route>
          <Route
            path="/articles/:article_id"
            element={<SingleArticle />}
          ></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
