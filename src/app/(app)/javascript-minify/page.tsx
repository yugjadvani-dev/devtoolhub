"use client";

import JsMinifyToolOverview from "@/components/(overview)/JsMinifyToolOverview";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import React from "react";

const JsMinify: React.FC = () => {
  const [inputJs, setInputJs] = React.useState<string>("");
  const [minifiedJs, setMinifiedJs] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const { toast } = useToast();
  const copyToClipboard = useCopyToClipboard();

  const handleMinify = async () => {
    setIsLoading(true);
    try {
      const result = await axios.post("/api/javascript-minify", {
        code: inputJs,
      });
      setMinifiedJs(result?.data?.minifiedCode);
    } catch (error) {
      const axiosError = error as AxiosError<ApiResponse>;
      toast({
        title: `Error fetching minified HTML:, ${axiosError}`,
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setMinifiedJs("");
    setInputJs("");
  };

  return (
    <>
      <Label htmlFor="inputJs" className="mb-3 flex">
        JavaScript for minify
      </Label>
      <Textarea
        value={inputJs}
        onChange={(e) => setInputJs(e.target.value)}
        placeholder="Enter your JavaScript here..."
        className="resize-none h-full max-h-[30rem] min-h-[30rem]"
      />
      <div className="flex items-center justify-between mt-3">
        <Button
          disabled={inputJs ? false : true}
          onClick={handleClear}
          variant={"outline"}
        >
          Clear
        </Button>
        <Button
          disabled={inputJs?.length ? false : true}
          onClick={handleMinify}
        >
          {isLoading ? "Loading..." : "Minify JavaScript"}
        </Button>
      </div>
      {minifiedJs ? (
        <div className="mt-16">
          <Label htmlFor="inputJs" className="mb-3 flex">
            Output
          </Label>
          {minifiedJs && (
            <pre className="flex h-full max-h-[30rem] min-h-[30rem] overflow-y-scroll w-full rounded-md border border-input bg-gray-100 dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-normal">
              {minifiedJs}
            </pre>
          )}
          <Button
            onClick={() => copyToClipboard(minifiedJs)}
            className="mt-3 ml-auto flex"
          >
            Copy to Clipboard
          </Button>
        </div>
      ) : null}
      {/* Overview */}
      <JsMinifyToolOverview />
    </>
  );
};

export default JsMinify;
