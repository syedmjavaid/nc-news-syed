import axios from "axios";

const newsApi = axios.create({
  baseURL: "https://fe-project-api.herokuapp.com/api",
});

export const getTopics = () => {
  return newsApi.get("/topics").then(({ data }) => {
    return data.topics;
  });
};

export const getArticles = (topic) => {
  let path = "/articles";
  if (topic) path += `?topic=${topic}`;
  return newsApi.get(path).then(({ data }) => {
    return data.articles;
  });
};

export const getSingleArticle = (id) => {
  return newsApi.get(`articles/${id}`).then(({ data }) => {
    return data.article;
  });
};

export const getArticleComments = (id) => {
  return newsApi.get(`articles/${id}/comments`).then(({ data }) => {
    return data.comments;
  });
};
