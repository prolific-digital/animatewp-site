import type { Metadata } from "next";
import "./globals.css";

const description =
  "AnimateWP is the ultimate solution for adding captivating animations to your WordPress site. Effortlessly bring your content to life and enhance user interaction with stunning visual effects.";

const ogDescription =
  "AnimateWP is the ultimate solution for adding captivating animations to your WordPress site. Effortlessly bring your content to life and enhance user";

export const metadata: Metadata = {
  metadataBase: new URL("https://animatewp.com"),
  title: "AnimateWP - Animations for WordPress",
  description,
  alternates: {
    canonical: "https://animatewp.com/",
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://animatewp.com/",
    siteName: "AnimateWP",
    title: "AnimateWP - Animations for WordPress",
    description: ogDescription,
    images: [
      {
        url: "/og/og-image.png",
        secureUrl: "/og/og-image.png",
        width: 1024,
        height: 541,
        alt: "Screenshot of AnimateWP in action",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AnimateWP - Animations for WordPress",
    description: ogDescription,
    images: ["/og/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
