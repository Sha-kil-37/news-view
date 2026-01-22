import { NewsArticle } from "@/types/news";
//
export async function fetchNews(country: string): Promise<NewsArticle[]> {
  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${process.env.NEWS_API_KEY}`,
    { cache: "no-store" },
  );
  //
  if (!res.ok) {
    throw new Error("Failed to fetch news");
  }
  const data = await res.json();
  return data.articles;
}
