"use client";
// pages/index.tsx
import React, { useState } from "react";

const ZodToTypescript: React.FC = () => {
  const [schema, setSchema] = useState<string>("");
  const [typescriptCode, setTypescriptCode] = useState<string>("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("/api/zod-to-typescript", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ schema }),
      });

      const data = await response.json();

      if (response.ok) {
        setTypescriptCode(data.typescript);
        setError(null);
      } else {
        setError(data.error);
        setTypescriptCode("");
      }
    } catch (err) {
      setError("Something went wrong!");
      setTypescriptCode("");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Generate TypeScript from Zod Schema</h1>
      <form onSubmit={handleSubmit}>
        <textarea
          value={schema}
          onChange={(e) => setSchema(e.target.value)}
          placeholder="Enter your Zod schema here"
          rows={10}
          style={{ width: "100%", fontFamily: "monospace", padding: "10px" }}
        />
        <button
          type="submit"
          style={{ marginTop: "10px", padding: "10px 20px" }}
        >
          Generate TypeScript
        </button>
      </form>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {typescriptCode && (
        <div style={{ marginTop: "20px" }}>
          <h2>Generated TypeScript</h2>
          <pre style={{ backgroundColor: "#f0f0f0", padding: "10px" }}>
            {typescriptCode}
          </pre>
        </div>
      )}
    </div>
  );
};

export default ZodToTypescript;
