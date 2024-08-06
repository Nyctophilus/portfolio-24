import "./globals.css";
import TransitionProvider from "@/components/transitionProvider";

export const metadata = {
  title: {
    default: "M.Fayad's Portfolio",
    template: "%s | M.Fayad",
  },
  description:
    "A showcase of Muhammed Fayad's skills and projects. A portfolio website that highlights his ability to create beautiful fluid eye-pleasing websites.",

  icons: {
    icon: "/favicon.ico",
  },
  publisher: "Muhammed Fayad",
  authors: [{ name: "Muhammed Fayad", url: "https://github.com/Nyctophilus" }],
  keywords: [
    "portfolio",
    "react",
    "reactjs",
    "frontend",
    "developer",
    "next js",
    "next.js",
    "next.ui",
    "tailwind",
  ],
  openGraph: {
    title: "M.Fayad's Portfolio",
    description:
      "A showcase of Muhammed Fayad's skills and projects. A portfolio website that highlights his ability to create beautiful fluid eye-pleasing websites.",
    url: "https://portfolio-24-omega.vercel.app/",
    siteName: "M.Fayad's Portfolio",
    images: [
      {
        url: "/favicon.ico",
        width: 1920,
        height: 1080,
      },
    ],
    locale: "en-US",
    type: "website",
  },
  metadataBase: new URL("https://portfolio-24-omega.vercel.app/"),
  twitter: {
    title: "M.Fayad's Portfolio",
    card: "summary_large_image",
    description:
      "A showcase of Muhammed Fayad's skills and projects. A portfolio website that highlights his ability to create beautiful fluid eye-pleasing websites.",
    images: ["/favicon.ico"],
  },
  manifest: "/site.webmanifest",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <TransitionProvider>{children}</TransitionProvider>
      </body>
    </html>
  );
}
