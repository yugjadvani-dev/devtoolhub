"use client";
import TsToZodToolOverview from "@/components/(overview)/TsToZodToolOverview";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import React from "react";

const GenerateZodSchema = () => {
  const [typescriptCode, setTypescriptCode] = React.useState("");
  const [zodSchema, setZodSchema] = React.useState("");
  const [error, setError] = React.useState("");
  const [isLoading, setIsLoading] = React.useState(false);
  const [keepComments, setKeepComments] = React.useState(true);
  const [skipParseJSDoc, setSkipParseJSDoc] = React.useState(true);

  const { toast } = useToast();
  const copyToClipboard = useCopyToClipboard();

  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await axios.post("/api/typescript-to-zod", {
        body: typescriptCode,
        keepComments: keepComments,
        skipParseJSDoc: skipParseJSDoc,
      });

      if (response.data.success) {
        setZodSchema(response.data.schema || "");
        setError(response.data.error || "");
      } else {
        setError("Error generating schema");
        toast({
          title: error,
          variant: "destructive",
        });
      }
    } catch (e) {
      const axiosError = e as AxiosError<ApiResponse>;
      setError(axiosError.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClear = () => {
    setTypescriptCode("");
    setZodSchema("");
    setError("");
  };

  return (
    <>
      <Label htmlFor="inputJs" className="mb-3 flex">
        TypeScript to Zod Validator
      </Label>
      <Textarea
        value={typescriptCode}
        onChange={(e) => setTypescriptCode(e.target.value)}
        placeholder="Enter your Typescript here..."
        className="resize-none h-full max-h-[30rem] min-h-[30rem]"
      />
      <div className="flex items-center justify-end flex-wrap gap-3">
        <div className="flex items-center space-x-2 mt-3">
          <Switch
            checked={keepComments}
            onCheckedChange={() => setKeepComments(!keepComments)}
            id="keepComments"
          />
          <Label htmlFor="keepComments">Keep Comments</Label>
        </div>
        <div className="flex items-center space-x-2 mt-3">
          <Switch
            checked={skipParseJSDoc}
            onCheckedChange={() => setSkipParseJSDoc(!skipParseJSDoc)}
            id="skipParseJSDoc"
          />
          <Label htmlFor="skipParseJSDoc">Skip Parse JSDoc</Label>
        </div>
      </div>
      <div className="flex items-center justify-between mt-3">
        <Button
          disabled={typescriptCode ? false : true}
          onClick={handleClear}
          variant={"outline"}
        >
          Clear
        </Button>
        <Button
          disabled={typescriptCode?.length ? false : true}
          onClick={handleSubmit}
        >
          {isLoading ? "Loading..." : "Typescript to Zod"}
        </Button>
      </div>
      {zodSchema ? (
        <div className="mt-16">
          <Label htmlFor="inputJs" className="mb-3 flex">
            Output
          </Label>
          {zodSchema && (
            <pre className="flex h-full max-h-[30rem] min-h-[30rem] overflow-y-scroll w-full rounded-md border border-input bg-gray-100 dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-normal">
              {zodSchema}
            </pre>
          )}
          <Button
            onClick={() => copyToClipboard(zodSchema)}
            className="mt-3 ml-auto flex"
          >
            Copy to Clipboard
          </Button>
        </div>
      ) : null}
      {/* Overview */}
      <TsToZodToolOverview />
    </>
  );
};

export default GenerateZodSchema;
