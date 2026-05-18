import type { Metadata, Viewport } from "next";
import "./globals.css";

const SITE_URL = "https://www.animatewp.com";
const GITHUB_URL = "https://github.com/prolific-digital/animatewp";
const DOCS_URL =
  "https://prolificdigital.notion.site/AnimateWP-Documentation-138f73948280458d9a2bcd298ac62354";

const description =
  "AnimateWP is the ultimate solution for adding captivating animations to your WordPress site. Effortlessly bring your content to life and enhance user interaction with stunning visual effects.";

const ogDescription =
  "AnimateWP is the ultimate solution for adding captivating animations to your WordPress site. Effortlessly bring your content to life and enhance user";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "AnimateWP - Animations for WordPress",
  description,
  applicationName: "AnimateWP",
  authors: [{ name: "Prolific Digital", url: "https://prolificdigital.com" }],
  creator: "Prolific Digital",
  publisher: "Prolific Digital",
  keywords: [
    "WordPress animations",
    "WordPress plugin",
    "Gutenberg animations",
    "block editor animations",
    "scroll animations",
    "AnimateWP",
  ],
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  robots: {
    index: true,
    follow: true,
    "max-snippet": -1,
    "max-image-preview": "large",
    "max-video-preview": -1,
  },
  manifest: "/manifest.webmanifest",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: `${SITE_URL}/`,
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
  appleWebApp: {
    capable: true,
    title: "AnimateWP",
    statusBarStyle: "default",
  },
  formatDetection: {
    telephone: false,
    email: false,
    address: false,
  },
  category: "technology",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e7" },
    { media: "(prefers-color-scheme: dark)", color: "#f3f0e7" },
  ],
  colorScheme: "light",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": `${SITE_URL}/#organization`,
      name: "AnimateWP",
      url: `${SITE_URL}/`,
      logo: `${SITE_URL}/og/og-image.png`,
      sameAs: [GITHUB_URL],
    },
    {
      "@type": "Organization",
      "@id": "https://prolificdigital.com/#organization",
      name: "Prolific Digital",
      url: "https://prolificdigital.com/",
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: "AnimateWP",
      description,
      publisher: { "@id": `${SITE_URL}/#organization` },
      inLanguage: "en-US",
    },
    {
      "@type": "ImageObject",
      "@id": `${SITE_URL}/#og-image`,
      url: `${SITE_URL}/og/og-image.png`,
      width: 1024,
      height: 541,
      caption: "Screenshot of AnimateWP in action",
      inLanguage: "en-US",
    },
    {
      "@type": "WebPage",
      "@id": `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: "AnimateWP - Animations for WordPress",
      description,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": `${SITE_URL}/#software` },
      primaryImageOfPage: { "@id": `${SITE_URL}/#og-image` },
      inLanguage: "en-US",
    },
    {
      "@type": "SoftwareApplication",
      "@id": `${SITE_URL}/#software`,
      name: "AnimateWP",
      applicationCategory: "DeveloperApplication",
      applicationSubCategory: "WordPress Plugin",
      operatingSystem: "WordPress",
      description,
      url: GITHUB_URL,
      downloadUrl: GITHUB_URL,
      softwareHelp: {
        "@type": "CreativeWork",
        url: DOCS_URL,
      },
      publisher: { "@id": "https://prolificdigital.com/#organization" },
      offers: {
        "@type": "Offer",
        price: "0",
        priceCurrency: "USD",
      },
      image: { "@id": `${SITE_URL}/#og-image` },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className="min-h-screen flex flex-col">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
