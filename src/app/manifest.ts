import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AnimateWP",
    short_name: "AnimateWP",
    description:
      "AnimateWP is the ultimate solution for adding captivating animations to your WordPress site.",
    start_url: "/",
    display: "minimal-ui",
    background_color: "#f3f0e7",
    theme_color: "#f3f0e7",
    icons: [
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
