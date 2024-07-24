import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { Toaster } from "@/components/ui/toaster";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "DevToolHub",
  description:
    "DevToolHub offers a comprehensive suite of free online tools for developers, including formatters, validators, minifiers, escapers, encoders, decoders, message digesters, and various web resources, with regular updates and a commitment to user feedback.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <div className="container">
          <div className="grid md:grid-cols-5 md:gap-4">
            <div className="md:col-span-1 md:block hidden">
              <Sidebar />
            </div>
            <div className="md:col-span-4 w-full py-8">
              {children}
            </div>
          </div>
        </div>
        <Footer />
        <Toaster />
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="yugjadvani9" data-description="Support me on Buy me a coffee!" data-message="" data-color="#5F7FFF" data-position="Right" data-x_margin="18" data-y_margin="18" defer></script>
      </body>
    </html>
  );
}
