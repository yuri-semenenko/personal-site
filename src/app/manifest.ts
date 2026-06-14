import type { MetadataRoute } from "next";
import { getContent } from "@/content";

export default function manifest(): MetadataRoute.Manifest {
  const { profile } = getContent("en");
  return {
    name: profile.seo.title,
    short_name: profile.name,
    description: profile.seo.description,
    start_url: "/",
    display: "standalone",
    background_color: "#0b0f15",
    theme_color: "#0b0f15",
    icons: [
      { src: "/icon", sizes: "32x32", type: "image/png" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png" },
    ],
  };
}
