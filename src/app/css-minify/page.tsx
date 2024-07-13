"use client";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import React from "react";

const CssMinify: React.FC = () => {
    const [inputCss, setInputCss] = React.useState("");
    const [minifiedCss, setMinifiedCss] = React.useState<string | null>(null);

    const { toast } = useToast()

    const handleMinify = async () => {
        try {
            const result = await axios.post("/api/raw", { input: inputCss });
            setMinifiedCss(result.data.minifiedCSS);
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            console.error("Error fetching minified CSS:", axiosError);
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
        <section className="flex min-h-screen flex-col items-center justify-between">
            <div className="container">
                <div className="flex items-start gap-4">
                    <Sidebar />
                    <div className="w-full p-8">
                        <Label htmlFor="inputcss" className="mb-3 flex">Css for minify</Label>
                        <Textarea
                            value={inputCss}
                            onChange={(e) => setInputCss(e.target.value)}
                            placeholder="Enter your CSS here..."
                            className="resize-none h-full max-h-[30rem] min-h-[30rem]"
                        />
                        <div className="flex items-center justify-between mt-3">
                            <Button disabled={inputCss ? false : true} onClick={() => setInputCss("")} variant={"outline"}>Clear</Button>
                            <Button disabled={inputCss?.length ? false : true} onClick={handleMinify} className="">Minify CSS</Button>
                        </div>
                        {minifiedCss
                            ? <div className="mt-16">
                                <Label htmlFor="inputcss" className="mb-3 flex">Output</Label>
                                {minifiedCss && <pre className="flex h-full max-h-[30rem] overflow-scroll w-full rounded-md border border-input bg-indigo-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-normal">{minifiedCss}</pre>}
                                <Button onClick={() => copyToClipboard(minifiedCss)} className="mt-3 ml-auto flex">
                                    Copy to Clipboard
                                </Button>
                            </div>
                            : null}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CssMinify
