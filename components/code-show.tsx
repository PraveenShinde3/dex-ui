"use client";

import React, { useEffect, useState } from "react";
import { createHighlighter, Highlighter } from "shiki";
import CopyButton from "./copy-button";

interface CodeShowProps {
  code: string; // Code string to display
  language?: string; // Programming language for syntax highlighting, defaults to 'typescript'
  theme?: string; // Theme for Shiki, defaults to 'nord'
  className?: string; // Optional custom classes
}

export function CodeShow({
  code,
  language = "typescript",
  theme = "vesper",
  className,
}: CodeShowProps) {
  const [highlightedCode, setHighlightedCode] = useState<string>("");

  useEffect(() => {
    let highlighter: Highlighter | null = null;

    async function initializeHighlighter() {
      try {
        highlighter = await createHighlighter({
          themes: ["github-dark", "dark-plus", "vesper"], // Default theme
          langs: ["javascript", "typescript", "html", "css"], // Add the languages you need
        });
        const formattedCode = highlighter?.codeToHtml(code, {
          lang: language,
          theme: theme,
        });
        setHighlightedCode(formattedCode);
      } catch (error) {
        console.error("Error initializing highlighter:", error);
        setHighlightedCode(code); // Fallback to raw code
      }
    }

    initializeHighlighter();

    return () => {
      highlighter = null; // Cleanup
    };
  }, [code, language, theme]);

  return (
    <div
      className={`relative border rounded-md bg-gray-900 text-white ${className}`}
    >
      <CopyButton text={code} />

      <pre
        className="overflow-auto text-base scrollbar-hidden"
        style={{ padding: "1.5rem" }}
        dangerouslySetInnerHTML={{ __html: highlightedCode }}
      ></pre>
    </div>
  );
}
