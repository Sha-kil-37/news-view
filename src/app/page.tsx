"use client";
//
import { useEffect, useState } from "react";
import CountrySelector from "@/components/CountrySelector";
import NewsList from "@/components/NewsList";
import { fetchNews } from "@/lib/fetchNews";
import { NewsArticle } from "@/types/news";
//
export default function Home() {
  const [country, setCountry] = useState("us");
  const [news, setNews] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(false);
  //

  useEffect(() => {
    setLoading(true);
    fetchNews(country)
      .then(setNews)
      .finally(() => setLoading(false));
  }, [country]);
  //
  return (
    <main className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Top Headlines</h1>
        <CountrySelector onChange={setCountry} />
      </div>

      {loading ? (
        <p className="font-bold text-center text-blue-500">Loading...</p>
      ) : (
        <NewsList news={news} />
      )}
    </main>
  );
}
