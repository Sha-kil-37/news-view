import { NewsArticle } from "@/types/news"
import NewsCard from "./NewsCard"

export default function NewsList({ news }: { news: NewsArticle[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {news.map((article, index) => (
        <NewsCard key={index} article={article} />
      ))}
    </div>
  )
}
