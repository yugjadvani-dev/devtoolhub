"use client";
import { cn } from "@/lib/utils";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import React from "react";
import AnimatedGradientText from "../magicui/animated-gradient-text";

const Overview: React.FC = () => {
  return (
    <>
      {/* <AdBanner
        dataAdFormat="auto"
        dataFullWidthResponsive={true}
        dataAdSlot="6548389295"
      /> */}
      <div className="z-10 flex items-start justify-start mb-8">
        <AnimatedGradientText className="m-0">
          ✨ <hr className="mx-2 h-4 w-[1px] shrink-0 bg-gray-300" />{" "}
          <span
            className={cn(
              `inline animate-gradient bg-gradient-to-r from-[#ffaa40] via-[#9c40ff] to-[#ffaa40] bg-[length:var(--bg-size)_100%] bg-clip-text text-transparent`
            )}
          >
            Request a Tool & Feature
          </span>
          <ChevronRight className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedGradientText>
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Welcome to DevToolHub
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        DevToolHub is a comprehensive suite of free online tools designed to
        assist developers in their everyday tasks. Our tools include formatters,
        validators, code minifiers, string escapers, encoders and decoders,
        message digesters, and a variety of other web resources.
      </p>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        This platform is built by developers for developers, offering a free and
        accessible way to streamline your workflow. We regularly add new tools,
        so be sure to bookmark this site and check back often.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Our Vision
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        At DevToolHub, our vision is clear: to provide developers with a
        comprehensive, user-friendly toolkit that covers a wide range of needs.
        From formatters and validators to code minifiers and string escapers,
        we&lsquo;ve got you covered.
      </p>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &ldquo;A well-equipped developer is an unstoppable force in the tech
        world.&ldquo;
      </blockquote>

      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Our Tools
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Our diverse range of tools includes:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Formatters for various programming languages</li>
        <li>Validators to ensure your code meets standards</li>
        <li>CSS Minifiers to optimize your code</li>
        <li>String escapers for secure coding</li>
        <li>Encoders and decoders for data transformation</li>
        <li>Message digesters for hashing and security</li>
        <li>Various web resources to aid your development process</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Each tool is designed to be intuitive and efficient, allowing you to
        focus on what you do best: developing amazing software.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        Get Involved
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Your feedback is invaluable to us. If you encounter any bugs or have
        suggestions for new tools, please don&apos;t hesitate to reach out. You
        can send an email to
        <Link
          href="mailto:yugjadvani@gmail.com"
          className="font-medium text-primary underline underline-offset-4"
        >
          {" "}
          yugjadvani@gmail.com{" "}
        </Link>
        with details such as the browser version you&apos;re using and steps to
        reproduce any issues. Other comments and suggestions are always welcome.
      </p>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Stay Connected
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Follow us on social media to stay updated with the latest tools and
        features:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>
          <Link
            href="https://x.com/jadvani_yug"
            className="font-medium text-primary underline underline-offset-4"
          >
            Twitter
          </Link>
        </li>
        <li>
          <Link
            href="https://github.com/yugjadvani-dev"
            className="font-medium text-primary underline underline-offset-4"
          >
            GitHub
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/yug-jadvani"
            className="font-medium text-primary underline underline-offset-4"
          >
            LinkedIn
          </Link>
        </li>
      </ul>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Your Feedback Matters
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        We are committed to continuous improvement and your feedback helps us
        achieve that. Share your thoughts with us by clicking the link below:
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
    </>
  );
};

export default Overview;
