import axios from "axios";

export default class NewsService {
  static async getNews(
    pageSize = 100,
    page = 1,
    country = "us",
    category = "",
    q = "",
  ) {
    return await axios.get(`https://newsapi.org/v2/top-headlines`, {
      params: {
        apiKey: "9af56d4529424362b9e84fe7a9446478",
        country,
        category,
        pageSize,
        page,
        q,
      },
    });
  }
}
