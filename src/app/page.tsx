"use client";

import React, { useState } from "react";
import axios from "axios";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

const Home: React.FC = () => {
  const [inputCss, setInputCss] = useState("");
  const [minifiedCss, setMinifiedCss] = useState<string | null>(null);

  const handleMinify = async () => {
    try {
      const result = await axios.post("/api/raw", { input: inputCss });
      setMinifiedCss(result.data.minifiedCss);
    } catch (error) {
      console.error("Error fetching minified CSS:", error);
      // Handle error (e.g., show an error message)
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
        <Textarea
          value={inputCss}
          onChange={(e) => setInputCss(e.target.value)}
          placeholder="Enter your CSS here..."
        />
        <Button onClick={handleMinify}>Minify CSS</Button>
      </div>
      {minifiedCss && <pre>{minifiedCss}</pre>}
    </main>
  );
};

export default Home;
