"use client";
import Link from "next/link";
import React from "react";

const Home: React.FC = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-24">
      <div className="container">
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Welcome to DevToolHub
          </h1>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            DevToolHub is a comprehensive suite of free online tools designed to assist developers in their everyday tasks. Our tools include formatters, validators, code minifiers, string escapers, encoders and decoders, message digesters, and a variety of other web resources.
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            This platform is built by developers for developers, offering a free and accessible way to streamline your workflow. We regularly add new tools, so be sure to bookmark this site and check back often.
          </p>
          <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
            Get Involved
          </h2>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Your feedback is invaluable to us. If you encounter any bugs or have suggestions for new tools, please don&apos;t hesitate to reach out. You can send an email to 
            <a
              href="mailto:yugjadvani@gmail.com"
              className="font-medium text-primary underline underline-offset-4"
            >
              {" "} yugjadvani@gmail.com {" "}
            </a>
            with details such as the browser version you&apos;re using and steps to reproduce any issues. Other comments and suggestions are always welcome.
          </p>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Stay Connected
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Follow us on social media to stay updated with the latest tools and features:
          </p>
          <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
            <li>
              <Link href="https://x.com/jadvani_yug" className="font-medium text-primary underline underline-offset-4">Twitter</Link>
            </li>
            <li>
              <Link href="https://github.com/yugjadvani-dev" className="font-medium text-primary underline underline-offset-4">GitHub</Link>
            </li>
            <li>
              <Link href="https://www.linkedin.com/in/yug-jadvani" className="font-medium text-primary underline underline-offset-4">LinkedIn</Link>
            </li>
          </ul>
          <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
            Your Feedback Matters
          </h3>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            We are committed to continuous improvement and your feedback helps us achieve that. Share your thoughts with us by clicking the link below:
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            <Link
              href="https://truefeedback-nu.vercel.app"
              className="font-medium text-primary underline underline-offset-4"
            >
              Submit Feedback
            </Link>
          </p>
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            Thank you for using DevToolHub. Happy coding!
          </p>
      </div>
    </main>
  );
};

export default Home;
