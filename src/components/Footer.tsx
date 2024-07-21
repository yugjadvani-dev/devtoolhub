"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="py-8 bg-primary">
      <div className="container">
        <Link
          href={"/"}
          className="text-2xl font-bold text-white">
          <strong>DevToolHub</strong>
        </Link>
        <div className="py-8">
        <div className="text-white text-base font-semibold mb-3">Code Minifiers</div>
        <ul className="flex items-start gap-3 [&>li]:mt-2">
        <Link
          href="/html-minify"
          className="font-medium text-white underline underline-offset-4"
        >
          HTML Minify
        </Link>
        <Link
          href="/css-minify"
          className="font-medium text-white underline underline-offset-4"
        >
          CSS Minify
        </Link>
        </ul>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm font-medium leading-none text-white">
            © 2024 - {date.getFullYear()} Yug Jadvani&apos;s Tools
          </p>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Link
              href={"/"}
              className="font-medium text-white underline underline-offset-4">
              Privacy Policy
            </Link>
            <Separator orientation="vertical" />
            <Link
              href={"/"}
              className="font-medium text-white underline underline-offset-4">
              Website terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
