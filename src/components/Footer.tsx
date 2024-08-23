"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="py-8 bg-primary">
      <div className="container">
        <div className="flex gap-8 pb-8">
          <div>
            <Link href={"/"} className="text-2xl font-bold text-white">
              <strong>DevToolHub</strong>
            </Link>
            <div className="text-white leading-7 [&:not(:first-child)]:mt-2">
              A Product by{" "}
              <Link href="https://x.com/jadvani_yug" className="underline">
                @yugjadvani
              </Link>
            </div>
          </div>
          <div>
            <div className="text-white text-base font-semibold mb-3">
              Minifiers
            </div>
            <div className="flex items-start flex-col gap-3">
              <Link
                href="/html-minify"
                className="font-medium text-white text-base underline underline-offset-4"
              >
                HTML Minify
              </Link>
              <Link
                href="/css-minify"
                className="font-medium text-white text-base underline underline-offset-4"
              >
                CSS Minify
              </Link>
              <Link
                href="/javascript-minify"
                className="font-medium text-white text-base underline underline-offset-4"
              >
                JavaScript Minify
              </Link>
            </div>
          </div>
          <div>
            <div className="text-white text-base font-semibold mb-3">
              Converter
            </div>
            <div className="flex items-start flex-col gap-3">
              <Link
                href="/rgba-to-hex"
                className="font-medium text-white text-base underline underline-offset-4"
              >
                RGBA to HEX
              </Link>
              <Link
                href="/typescript-to-zod"
                className="font-medium text-white text-base underline underline-offset-4"
              >
                Typescript to ZOD
              </Link>
            </div>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex items-center justify-between flex-wrap gap-4">
          <p className="text-sm font-medium leading-none text-white">
            © 2024 - {date.getFullYear()} Yug Jadvani&apos;s Tools
          </p>
          <div className="flex h-5 items-center space-x-4 text-sm">
            <Link
              href={"/"}
              className="font-medium text-white underline underline-offset-4"
            >
              Privacy Policy
            </Link>
            <Separator orientation="vertical" />
            <Link
              href={"/"}
              className="font-medium text-white underline underline-offset-4"
            >
              Website terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
