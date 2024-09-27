import AdSense from "@/components/AdSense";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import dynamic from "next/dynamic";
import { Inter } from "next/font/google";
import "./globals.css";
import { PHProvider } from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevToolHub - Free Online Tools for Developers",
  description:
    "DevToolHub provides a powerful collection of free online tools for developers. Access formatters, validators, minifiers, escapers, encoders, decoders, message digesters, and other essential web resources. Regularly updated with user feedback to meet modern development needs.",
  keywords: [
    "DevToolHub",
    "developer tools",
    "free online tools",
    "code formatter",
    "code validator",
    "minifier",
    "encoder",
    "decoder",
    "message digester",
    "web resources for developers",
    "programming tools",
    "developer utilities",
  ],
  openGraph: {
    title: "DevToolHub - Free Online Tools for Developers",
    description:
      "Explore DevToolHub for an extensive range of free online tools including code formatters, validators, minifiers, and more to boost your development workflow.",
    url: "https://devtoolhub.vercel.app/",
    images: [
      {
        url: "https://devtoolhub.vercel.app/image/og-image.png",
        width: 1200,
        height: 630,
        alt: "DevToolHub - Free Online Tools for Developers",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DevToolHub - Free Online Tools for Developers",
    description:
      "DevToolHub offers a suite of free tools for developers, including formatters, validators, encoders, decoders, and more to optimize your workflow.",
    images: [
      {
        url: "https://devtoolhub.vercel.app/image/og-image.png",
        alt: "DevToolHub - Free Online Tools for Developers",
      },
    ],
  },
};

const PostHogPageView = dynamic(() => import("./PostHogPageView"), {
  ssr: false,
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <AdSense pId="ca-pub-3383380915794879" />
      </head>
      <PHProvider>
        <body className={inter.className}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            <div className="container">
              <div className="grid md:grid-cols-5 md:gap-8">
                <div className="md:col-span-1 md:block hidden">
                  <Sidebar />
                </div>
                <div className="md:col-span-4 w-full py-8">{children}</div>
              </div>
            </div>
            <Footer />
          </ThemeProvider>
          <PostHogPageView />
          <Toaster />
          <script
            data-name="BMC-Widget"
            data-cfasync="false"
            src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js"
            data-id="yugjadvani9"
            data-description="Support me on Buy me a coffee!"
            data-message=""
            data-color="#5F7FFF"
            data-position="Right"
            data-x_margin="18"
            data-y_margin="18"
            defer
          ></script>
          {/* <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383380915794879"
            crossOrigin="anonymous"
          ></script>
          <script
            async
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3383380915794879"
            crossOrigin="anonymous"
          ></script>
          <ins
            className="adsbygoogle"
            style={{ display: "block" }}
            data-ad-client="ca-pub-3383380915794879"
            data-ad-slot="6548389295"
            data-ad-format="auto"
            data-full-width-responsive="true"
          ></ins>
          <script>(adsbygoogle = window.adsbygoogle || []).push({});</script> */}
        </body>
      </PHProvider>
    </html>
  );
}
