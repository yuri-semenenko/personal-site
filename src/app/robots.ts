import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://yuri-semenenko.dev/sitemap.xml",
    host: "https://yuri-semenenko.dev",
  };
}
