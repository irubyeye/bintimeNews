import { useMemo } from "react";

export const useNews = (news, query) => {
  return useMemo(() => {
    if (news.articles) {
      return news.articles.filter(
        (article) =>
          article?.title?.toLowerCase().includes(query.toLowerCase()) ||
          article?.description?.toLowerCase().includes(query.toLowerCase()),
      );
    }
  }, [news, query]);
};
