"use client";
import HtmlMinifyToolOverview from "@/components/(overview)/HtmlMinifyToolOverview";
import CheckboxWithText from "@/components/CheckboxWithText";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import useCopyToClipboard from "@/hooks/useCopyToClipboard";
import { ApiResponse } from "@/types/ApiResponse";
import axios, { AxiosError } from "axios";
import React from "react";

interface Option {
  label: string;
  description: JSX.Element | string;
  default: boolean | string | RegExp[] | RegExp;
}

type OptionsState = Record<string, boolean | string | RegExp[] | RegExp>;

const optionsData: Record<string, Option> = {
  caseSensitive: {
    label: "Case Sensitive",
    description:
      "Treat attributes in case sensitive manner (useful for custom HTML tags)",
    default: false,
  },
  collapseBooleanAttributes: {
    label: "Collapse Boolean Attributes",
    description: "Omit attribute values from boolean attributes",
    default: false,
  },
  collapseInlineTagWhitespace: {
    label: "Collapse Inline Tag Whitespace",
    description:
      "Don't leave any spaces between display:inline; elements when collapsing. Must be used in conjunction with collapseWhitespace=true",
    default: false,
  },
  collapseWhitespace: {
    label: "Collapse Whitespace",
    description:
      "Collapse white space that contributes to text nodes in a document tree",
    default: true,
  },
  conservativeCollapse: {
    label: "Conservative Collapse",
    description:
      "Always collapse to 1 space (never remove it entirely). Must be used in conjunction with collapseWhitespace=true",
    default: false,
  },
  continueOnParseError: {
    label: "Continue On Parse Error",
    description: "Handle parse errors instead of aborting.",
    default: false,
  },
  // customAttrAssign: {
  //     label: 'Custom Attribute Assign',
  //     description: 'Arrays of regex\'es that allow to support custom attribute assign expressions (e.g. \'<div flex?="{{mode != cover}}"></div>\')',
  //     default: []
  // },
  // customAttrCollapse: {
  //     label: 'Custom Attribute Collapse',
  //     description: 'Regex that specifies custom attribute to strip newlines from (e.g. /ng-class/)',
  //     default: ''
  // },
  // customAttrSurround: {
  //     label: 'Custom Attribute Surround',
  //     description: 'Arrays of regex\'es that allow to support custom attribute surround expressions (e.g. <input {{#if value}}checked="checked"{{/if}}>)',
  //     default: []
  // },
  // customEventAttributes: {
  //     label: 'Custom Event Attributes',
  //     description: 'Arrays of regex\'es that allow to support custom event attributes for minifyJS (e.g. ng-click)',
  //     default: [/^on[a-z]{3,}$/]
  // },
  decodeEntities: {
    label: "Decode Entities",
    description: "Use direct Unicode characters whenever possible",
    default: false,
  },
  html5: {
    label: "HTML5",
    description: "Parse input according to HTML5 specifications",
    default: true,
  },
  // ignoreCustomComments: {
  //     label: 'Ignore Custom Comments',
  //     description: 'Array of regex\'es that allow to ignore certain comments, when matched',
  //     default: [/^!/, /^\s*#/]
  // },
  // ignoreCustomFragments: {
  //     label: 'Ignore Custom Fragments',
  //     description: 'Array of regex\'es that allow to ignore certain fragments, when matched (e.g. <?php ... ?>, {{ ... }}, etc.)',
  //     default: [/<%[\s\S]*?%>/, /<\?[\s\S]*?\?>/]
  // },
  includeAutoGeneratedTags: {
    label: "Include Auto Generated Tags",
    description: "Insert tags generated by HTML parser",
    default: true,
  },
  keepClosingSlash: {
    label: "Keep Closing Slash",
    description: "Keep the trailing slash on singleton elements",
    default: false,
  },
  // maxLineLength: {
  //     label: 'Max Line Length',
  //     description: 'Specify a maximum line length. Compressed output will be split by newlines at valid HTML split-points',
  //     default: ''
  // },
  minifyCSS: {
    label: "Minify CSS",
    description:
      "Minify CSS in style elements and style attributes (uses clean-css)",
    default: true,
  },
  minifyJS: {
    label: "Minify JS",
    description:
      "Minify JavaScript in script elements and event attributes (uses Terser)",
    default: true,
  },
  minifyURLs: {
    label: "Minify URLs",
    description: "Minify URLs in various attributes (uses relateurl)",
    default: true,
  },
  noNewlinesBeforeTagClose: {
    label: "No Newlines Before Tag Close",
    description: "Never add a newline before a tag that closes an element",
    default: false,
  },
  preserveLineBreaks: {
    label: "Preserve Line Breaks",
    description:
      "Always collapse to 1 line break (never remove it entirely) when whitespace between tags include a line break. Must be used in conjunction with collapseWhitespace=true",
    default: false,
  },
  preventAttributesEscaping: {
    label: "Prevent Attributes Escaping",
    description: "Prevents the escaping of the values of attributes",
    default: false,
  },
  processConditionalComments: {
    label: "Process Conditional Comments",
    description: "Process contents of conditional comments through minifier",
    default: false,
  },
  // processScripts: {
  //     label: 'Process Scripts',
  //     description: 'Array of strings corresponding to types of script elements to process through minifier (e.g. text/ng-template, text/x-handlebars-template, etc.)',
  //     default: []
  // },
  // quoteCharacter: {
  //     label: 'Quote Character',
  //     description: 'Type of quote to use for attribute values (\' or ")',
  //     default: ''
  // },
  removeAttributeQuotes: {
    label: "Remove Attribute Quotes",
    description: "Remove quotes around attributes when possible",
    default: false,
  },
  removeComments: {
    label: "Remove Comments",
    description: "Strip HTML comments",
    default: true,
  },
  removeEmptyAttributes: {
    label: "Remove Empty Attributes",
    description: "Remove all attributes with whitespace-only values",
    default: false,
  },
  removeEmptyElements: {
    label: "Remove Empty Elements",
    description: "Remove all elements with empty contents",
    default: false,
  },
  removeOptionalTags: {
    label: "Remove Optional Tags",
    description: "Remove optional tags",
    default: false,
  },
  removeRedundantAttributes: {
    label: "Remove Redundant Attributes",
    description: "Remove attributes when value matches default.",
    default: false,
  },
  removeScriptTypeAttributes: {
    label: "Remove Script Type Attributes",
    description:
      'Remove type="text/javascript" from script tags. Other type attribute values are left intact',
    default: false,
  },
  removeStyleLinkTypeAttributes: {
    label: "Remove Style Link Type Attributes",
    description:
      'Remove type="text/css" from style and link tags. Other type attribute values are left intact',
    default: false,
  },
  removeTagWhitespace: {
    label: "Remove Tag Whitespace",
    description:
      "Remove space between attributes whenever possible. Note that this will result in invalid HTML!",
    default: false,
  },
  sortAttributes: {
    label: "Sort Attributes",
    description: "Sort attributes by frequency",
    default: false,
  },
  sortClassName: {
    label: "Sort Class Name",
    description: "Sort style classes by frequency",
    default: false,
  },
  trimCustomFragments: {
    label: "Trim Custom Fragments",
    description: "Trim white space around ignoreCustomFragments.",
    default: false,
  },
  useShortDoctype: {
    label: "Use Short Doctype",
    description: "Replaces the doctype with the short (HTML5) doctype",
    default: false,
  },
};

const HTMLMinify: React.FC = () => {
  const [inputHtml, setInputHtml] = React.useState<string>("");
  const [minifyHtml, setMinifyHtml] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const [optionsState, setOptionsState] = React.useState<OptionsState>(() => {
    const initialState: OptionsState = {};
    Object.keys(optionsData).forEach((key) => {
      initialState[key] = optionsData[key].default;
    });
    return initialState;
  });

  const { toast } = useToast();
  const copyToClipboard = useCopyToClipboard();

  const handleOptionsChange = (id: string, checked: boolean) => {
    setOptionsState((prevState) => ({
      ...prevState,
      [id]: checked,
    }));
  };

  const handleMinify = async () => {
    setIsLoading(true);
    try {
      const axiosBody = {
        html: inputHtml,
        options: optionsState,
      };
      const result = await axios.post("/api/html-minifier", axiosBody);
      setMinifyHtml(result?.data?.minifiedHtml);
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
    setInputHtml("");
    setMinifyHtml("");
  };

  const renderCheckboxes = (options: Record<string, Option>) => {
    return Object.keys(options).map((key) => {
      const option = options[key];
      return (
        <CheckboxWithText
          key={key}
          id={key}
          label={option.label}
          description={option.description}
          checked={optionsState[key] as boolean} // Ensure correct type
          onCheckedChange={(checked) => handleOptionsChange(key, checked)}
        />
      );
    });
  };

  return (
    <>
      <div className="flex items-end justify-between gap-4 mb-3">
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
              {renderCheckboxes(optionsData)}
            </div>
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
        >
          {isLoading ? "Loading..." : "Minify HTML"}
        </Button>
      </div>
      {minifyHtml ? (
        <div className="mt-16">
          <Label htmlFor="inputhtml" className="mb-3 flex">
            Output
          </Label>
          {minifyHtml && (
            <pre className="flex h-full max-h-[30rem] min-h-[30rem] overflow-y-scroll w-full rounded-md border border-input bg-gray-100 dark:bg-gray-800 px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 whitespace-normal">
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
