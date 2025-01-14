"use client";
import React, { useState } from "react";
import { Clipboard } from "lucide-react";

interface CodeSnippetProps {
  code: string; // Code string to display
  language?: string; // Programming language for syntax highlighting, defaults to 'typescript'
  theme?: string; // Theme for Shiki, defaults to 'nord'
  className?: string; // Optional custom classes
}

const CodeSnippet: React.FC<CodeSnippetProps> = ({ code, className }) => {
  //   const [highlightedCode, setHighlightedCode] = useState<string>("");
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      setCopied(true);
      await navigator.clipboard.writeText(code);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCopied(false);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <div className={`relative border rounded-md ${className}`}>
      <button
        onClick={handleCopy}
        className="px-1 text-xs absolute top-2 right-2"
      >
        {copied ? (
          <span>Copied!</span>
        ) : (
          <span className="flex font-mono gap-1 items-center">
            Copy <Clipboard size="0.7rem" />
          </span>
        )}
      </button>

      <pre className="overflow-auto max-h-[500px] text-black text-base scrollbar-hidden">
        {code}
      </pre>
    </div>
  );
};

export default CodeSnippet;
