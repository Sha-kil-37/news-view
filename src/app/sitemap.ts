import { MetadataRoute } from "next";
//
export default function sitemap(): MetadataRoute.Sitemap {
  // const baseUrl = process.env.NEXT_PUBLIC_SITE_URL
  //   ? `https://${process.env.VERCEL_URL}`
  //   : "http://localhost:3000";
  return [
    {
      url: "http://localhost:3000/",
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1,
    },
  ];
}
