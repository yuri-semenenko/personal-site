import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Yuri Semenenko — Senior Frontend Engineer",
    short_name: "Yuri Semenenko",
    description:
      "Senior Frontend Engineer with Tech Lead scope, based in Krakow. Building scalable React and Next.js platforms.",
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
