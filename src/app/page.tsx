"use client";

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import axios from "axios";
import React, { useState } from "react";

const Home: React.FC = () => {
  const [inputCss, setInputCss] = useState("");
  const [minifiedCss, setMinifiedCss] = useState<string | null>(null);

  const { toast } = useToast()

  const handleMinify = async () => {
    try {
      const result = await axios.post("/api/raw", { input: inputCss });
      setMinifiedCss(result.data.minifiedCss);
    } catch (error) {
      console.error("Error fetching minified CSS:", error);
      // Handle error (e.g., show an error message)
    }
  };

  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        toast({
          title: "Text copied to clipboard",
        })
      }).catch((err) => {
        toast({
          title: "Could not copy text",
          description: err,
          variant: "destructive",
        })
      })
    }
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="container">
        <div>
          <h4 className="scroll-m-20 mb-10 text-xl font-semibold tracking-tight">
            DevToolHub offers a comprehensive suite of free online tools for developers, including formatters, validators, minifiers, escapers, encoders, decoders, message digesters, and various web resources, with regular updates and a commitment to user feedback.
          </h4>
          <div>
            <Label htmlFor="inputcss" className="mb-3 flex">Css for minify</Label>
            <Textarea
              value={inputCss}
              onChange={(e) => setInputCss(e.target.value)}
              placeholder="Enter your CSS here..."
              className="resize-none h-96"
            />
          </div>
          <div className="flex items-center justify-between mt-3">
            <Button disabled={inputCss ? false : true} onClick={() => setInputCss("")} variant={"outline"}>Clear</Button>
            <Button disabled={inputCss ? false : true} onClick={handleMinify} className="">Minify CSS</Button>
          </div>
        </div>
        {minifiedCss ?
          <div className="mt-16">
            <Label htmlFor="inputcss" className="mb-3 flex">Output</Label>
            {minifiedCss && <pre className="flex min-h-96 w-full rounded-md border border-input bg-indigo-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">{minifiedCss}</pre>}
            <Button onClick={() => copyToClipboard(minifiedCss)} className="mt-3 ml-auto flex">
              Copy to Clipboard
            </Button>
          </div> : null
        }
      </div>
    </main>
  );
};

export default Home;
