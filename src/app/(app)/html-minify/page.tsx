"use client";
import HtmlMinifyToolOverview from '@/components/(overview)/HtmlMinifyToolOverview';
import CheckboxWithText from '@/components/CheckboxWithText';
import { Button } from '@/components/ui/button';
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/components/ui/use-toast';
import { ApiResponse } from '@/types/ApiResponse';
import axios, { AxiosError } from 'axios';
import React from 'react';

interface OptionsState {
    caseSensitive: boolean;
    collapseBooleanAttributes: boolean;
    collapseInlineTagWhitespace: boolean;
    collapseWhitespace: boolean;
    minifyJS: boolean;
    minifyCSS: boolean;
    removeComments: boolean;
}

const HTMLMinify: React.FC = () => {
    const [inputHtml, setInputHtml] = React.useState<string>("");
    const [minifyHtml, setMinifyHtml] = React.useState<string | null>(null);
    const [options, setOptions] = React.useState<OptionsState>({
        caseSensitive: false,
        collapseBooleanAttributes: false,
        collapseInlineTagWhitespace: false,
        collapseWhitespace: true,
        minifyJS: true,
        minifyCSS: true,
        removeComments: true,
    });

    const { toast } = useToast();

    const handleOptionsChange = (id: string, value: boolean) => {
        setOptions((prev) => ({
            ...prev,
            [id]: value,
        }));
    };

    const handleMinify = async () => {
        try {
            const axiosBody = {
                html: inputHtml,
                options,
            };
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
            <div className='flex items-end justify-between gap-4 mb-3'>
                <Label htmlFor="inputhtml" className="flex">
                    HTML for minify
                </Label>
                <Dialog>
                    <DialogTrigger asChild>
                        <Button variant="secondary">Option&lsquo;s</Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[600px] max-h-[600px] overflow-y-scroll">
                        <DialogHeader>
                            <DialogTitle>Options Quick Reference</DialogTitle>
                            <DialogDescription>
                                Most of the options are disabled by default.
                            </DialogDescription>
                        </DialogHeader>
                        <div className="grid gap-4 py-4">
                            <CheckboxWithText
                                id={'caseSensitive'}
                                label='caseSensitive'
                                description='Treat attributes in case sensitive manner (useful for custom HTML tags)'
                                checked={options.caseSensitive}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='collapseBooleanAttributes'
                                label='collapseBooleanAttributes'
                                description='Omit attribute values from boolean attributes'
                                checked={options.collapseBooleanAttributes}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='collapseInlineTagWhitespace'
                                label='collapseInlineTagWhitespace'
                                description={`Don't leave any spaces between <code class="code">display:inline;</code> elements when collapsing. Must be used in conjunction with <code class="code">collapseWhitespace=true</code>`}
                                checked={options.collapseInlineTagWhitespace}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='collapseWhitespace'
                                label='collapseWhitespace'
                                link={true}
                                linkURL={'http://perfectionkills.com/experimenting-with-html-minifier/#collapse_whitespace'}
                                description='Collapse white space that contributes to text nodes in a document tree'
                                checked={options.collapseWhitespace}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='minifyCSS'
                                label='minifyCSS'
                                description='Minify CSS in style elements and style attributes (uses <a class="link" href="https://github.com/clean-css/clean-css">clean CSS</a>)'
                                checked={options.minifyCSS}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='minifyJS'
                                label='minifyJS'
                                description='Minify JavaScript in script elements and event attributes (uses <a class="link" href="https://github.com/terser/terser">Terser</a>)'
                                checked={options.minifyJS}
                                onChange={handleOptionsChange}
                            />
                            <CheckboxWithText
                                id='removeComments'
                                label='removeComments'
                                link={true}
                                linkURL={'http://perfectionkills.com/experimenting-with-html-minifier/#remove_comments'}
                                description='Strip HTML comments'
                                checked={options.removeComments}
                                onChange={handleOptionsChange}
                            />
                        </div>
                        <DialogFooter>
                            <DialogClose asChild>
                                <Button>Save changes</Button>
                            </DialogClose>
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
        </>
    );
};

export default HTMLMinify;
