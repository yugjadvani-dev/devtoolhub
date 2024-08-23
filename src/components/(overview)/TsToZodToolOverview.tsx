"use client";
import React from "react";

const TsToZodToolOverview: React.FC = () => {
  return (
    <div className="mt-12">
      <h1 className="scroll-m-20 text-3xl font-semibold tracking-tight">
        TypeScript to Zod Converter: Simplifying Type Safety
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The TypeScript to Zod Converter is an essential tool for developers,
        streamlining the process of converting TypeScript types into Zod
        schemas. This ensures that your application’s data validation is
        accurate, reliable, and in sync with your TypeScript types.
      </p>
      <h2 className="mt-10 scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
        How It Works
      </h2>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The TypeScript to Zod Converter operates by analyzing your TypeScript
        type definitions and converting them into Zod schemas. The process
        involves:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Parsing TypeScript type definitions</li>
        <li>Mapping TypeScript types to corresponding Zod schema types</li>
        <li>Generating Zod schemas that ensure type safety at runtime</li>
      </ul>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Example
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        Consider the following TypeScript type before conversion:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code>
          {`type User = {
  name: string;
  age: number;
  email: string;
};`}
        </code>
      </pre>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        After using the TypeScript to Zod Converter, the output is:
      </p>
      <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
        <code className="whitespace-normal">
          {`const UserSchema = z.object({
  name: z.string(),
  age: z.number(),
  email: z.string(),
});`}
        </code>
      </pre>
      <h3 className="mt-8 scroll-m-20 text-2xl font-semibold tracking-tight">
        Benefits
      </h3>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        The TypeScript to Zod Converter offers several benefits:
      </p>
      <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
        <li>Ensures type safety between TypeScript and runtime validation.</li>
        <li>Automates the creation of Zod schemas from TypeScript types.</li>
        <li>
          Reduces potential errors and inconsistencies in your application.
        </li>
      </ul>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        By integrating this converter into your development process, you can
        save time and enhance the reliability of your application’s data
        handling.
      </p>
    </div>
  );
};

export default TsToZodToolOverview;
