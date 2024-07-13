"use client";
import Link from "next/link";
import { Separator } from "./ui/separator";

const Footer = () => {
  const date = new Date();

  return (
    <footer className="py-4 bg-primary">
      <div className="container">
        <Link
          href={"/"}
          className="text-2xl font-bold text-white">
          <strong>DevToolHub</strong>
        </Link>
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
