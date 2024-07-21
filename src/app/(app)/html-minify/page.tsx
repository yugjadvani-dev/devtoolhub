"use client";
import HtmlMinifyToolOverview from '@/components/(overview)/HtmlMinifyToolOverview';
import CheckboxWithText from '@/components/CheckboxWithText';
import Sidebar from '@/components/Sidebar';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ApiResponse } from '@/types/ApiResponse';
import axios, { AxiosError } from 'axios';
import React from 'react';

interface OptionsState {
    caseSensitive: boolean
}

const HTMLMinify: React.FC = () => {
    const [inputHtml, setInputHtml] = React.useState<string>("");
    const [minifyHtml, setMinifyHtml] = React.useState<string | null>(null);
    const [options, setOptions] = React.useState<OptionsState>({
        caseSensitive: false
    })
    console.log("options",options)

    const { toast } = useToast();

    const handleOptionsChange = (id: string, value: boolean) => {
        setOptions((prev)=>({
            ...prev,
            [id]: value,
        }))
    } 

    const handleOptionsSave = () => {

    }

    const handleMinify = async () => {
        try {
            const axiosBody = {
                html: inputHtml,
            }
            const result = await axios.post("/api/html-minifier", axiosBody);
            setMinifyHtml(result?.data?.minifiedHtml);
        } catch (error) {
            const axiosError = error as AxiosError<ApiResponse>;
            toast({
                title: `Error fetching minified HTML:, ${axiosError}`,
                variant: "destructive",
              });
        }
    };

    const handleClear = () => {
        setInputHtml("");
        setMinifyHtml("");
    };

    const copyToClipboard = (minifyHtml: string) => {
        if (navigator.clipboard) {
            navigator.clipboard
                .writeText(minifyHtml)
                .then(() => {
                    toast({
                        title: "Copy to clipboard"
                    });
                })
                .catch((err) => {
                    toast({
                        title: "Could not copy text",
                        description: err,
                        variant: "destructive",
                    });
                });
        }
    };

    return (
        <>
            <section className="flex min-h-screen pb-6 flex-col items-center justify-between">
                <div className="container">
                    <div className="grid grid-cols-5 gap-4">
                        <div className="col-span-1">
                            <Sidebar />
                        </div>
                        <div className="col-span-4 w-full p-8">
                            <div className='flex items-center justify-between gap-4 mb-3'>
                                <Label htmlFor="inputhtml" className="flex">
                                    HTML for minify
                                </Label>
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <Button variant="secondary">Option's</Button>
                                        {/* <button className="font-medium text-primary underline underline-offset-4">
                                            Option's
                                        </button> */}
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[425px]">
                                        <DialogHeader>
                                            <DialogTitle>Options Quick Reference</DialogTitle>
                                            <DialogDescription>
                                            Most of the options are disabled by default.
                                            </DialogDescription>
                                        </DialogHeader>
                                        <div className="grid gap-4 py-4">
                                            <CheckboxWithText id={'caseSensitive'} label='caseSensitive' description='Treat attributes in case sensitive manner (useful for custom HTML tags)   ' checked={options.caseSensitive} onChange={handleOptionsChange} />
                                        </div>
                                        <DialogFooter>
                                            <Button onClick={handleOptionsSave}>Save changes</Button>
                                        </DialogFooter>
                                    </DialogContent>
                                </Dialog>
                            </div>
                            <Textarea
                                value={inputHtml}
                                onChange={(e) => setInputHtml(e.target.value)}
                                placeholder="Enter your HTML here..."
                                className="resize-none h-full max-h-[30rem] min-h-[30rem]"
                            />
                            <div className="flex items-center justify-between mt-3">
                                <Button
                                    disabled={inputHtml ? false : true}
                                    onClick={handleClear}
                                    variant={"outline"}
                                >
                                    Clear
                                </Button>
                                <Button
                                    disabled={inputHtml?.length ? false : true}
                                    onClick={handleMinify}
                                    className=""
                                >
                                    Minify HTML
                                </Button>
                            </div>
                            {minifyHtml ? (
                                <div className="mt-16">
                                    <Label htmlFor="inputhtml" className="mb-3 flex">
                                        Output
                                    </Label>
                                    {minifyHtml && (
                                        <pre className="flex h-full max-h-[30rem] min-h-[30rem] overflow-y-scroll w-full rounded-md border border-input bg-indigo-50 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-normal">
                                            {minifyHtml}
                                        </pre>
                                    )}
                                    <Button
                                        onClick={() => copyToClipboard(minifyHtml)}
                                        className="mt-3 ml-auto flex"
                                    >
                                        Copy to Clipboard
                                    </Button>
                                </div>
                            ) : null}
                            {/* Overview */}
                            <HtmlMinifyToolOverview />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HTMLMinify;
