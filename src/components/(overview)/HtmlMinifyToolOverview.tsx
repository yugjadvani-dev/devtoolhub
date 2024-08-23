"use client";
import React from "react";

const HtmlMinifyToolOverview: React.FC = () => {
  return (
    <div className="mt-12">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        HTML Minify Tool
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The HTML Minify Tool is designed to help developers reduce the size of
        their HTML files, improving load times and overall performance. By
        removing unnecessary characters, such as whitespace, line breaks, and
        comments, the minified HTML becomes more compact without altering its
        functionality.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The HTML Minify Tool processes the HTML content and performs a series of
        optimizations:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Removes extra spaces, tabs, and line breaks.</li>
        <li>Eliminates HTML comments.</li>
        <li>Condenses inline CSS and JavaScript.</li>
      </ul>
      <blockquote className="mt-6 border-l-2 pl-6 italic">
        &ldquo;Efficiency is doing better what is already being done.&ldquo; –
        Peter Drucker
      </blockquote>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Example
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Consider the following HTML code before minification:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>
          {`<!DOCTYPE html>
<html>
  <head>
    <title>My Page</title>
    <style>
      body {
        background-color: white;
        color: black;
      }
    </style>
  </head>
  <body>
    <!-- This is a comment -->
    <h1>Welcome to My Page</h1>
    <p>This is a sample paragraph.</p>
  </body>
</html>`}
        </code>
      </pre>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        After using the HTML Minify Tool, the output is:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>
          {`<!DOCTYPE html><html><head><title>My Page</title><style>body{background-color:white;color:black;}</style></head><body><h1>Welcome to My Page</h1><p>This is a sample paragraph.</p></body></html>`}
        </code>
      </pre>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Benefits
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The HTML Minify Tool offers several benefits:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Reduces file size, leading to faster load times.</li>
        <li>Improves website performance and user experience.</li>
        <li>Decreases bandwidth usage.</li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        By utilizing the HTML Minify Tool, developers can ensure their web
        applications run more efficiently and provide a better experience for
        users. Try it out and see the difference it makes!
      </p>
    </div>
  );
};

export default HtmlMinifyToolOverview;
