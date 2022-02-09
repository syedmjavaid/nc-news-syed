import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://fe-project-api.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = () => {
  return newsApi.get("/articles").then(({ data }) => {
    return data.articles;
  });
};
