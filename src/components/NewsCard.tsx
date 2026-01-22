import { NewsArticle } from "@/types/news";
export default function NewsCard({ article }: { article: NewsArticle }) {
  //
  // console.log(article.urlToImage);
  //
  return (
    <a
      href={article.url}
      target="_blank"
      className="border rounded-lg overflow-hidden hover:shadow-lg transition"
    >
      {article.urlToImage && (
        <img
          src={article.urlToImage}
          alt={article.title}
          className="h-48 w-full object-cover"
        />
      )}

      <div className="p-4 space-y-2">
        <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">
          {article.source.name}
        </span>

        <h2 className="font-semibold text-lg line-clamp-2">{article.title}</h2>

        <p className="text-sm text-gray-600 line-clamp-3">
          {article.description}
        </p>

        <p className="text-xs text-gray-400">
          {new Date(article.publishedAt).toDateString()}
        </p>
      </div>
    </a>
  );
}
