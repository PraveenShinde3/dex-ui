import React from "react";
import type { MDXComponents } from "mdx/types";
import { createHighlighter, Highlighter } from "shiki";
import CopyButton from "@/components/copy-button";

let highlighter: Highlighter | null = null; // Specify the type explicitly

(async () => {
  highlighter = await createHighlighter({
    themes: ["github-dark", "dark-plus"], // Default theme
    langs: ["javascript", "typescript", "html", "css"], // Add the languages you need
  });
})();

export function useMDXComponents(components: MDXComponents): MDXComponents {
  // Utility to generate a slug/id from the heading text
  const generateId = (text: React.ReactNode): string => {
    if (typeof text === "string") {
      return text
        .toLowerCase()
        .replace(/\s+/g, "-")
        .replace(/[^\w-]/g, "");
    }
    return "";
  };

  const CodeBlock: React.FC<{ children: string; className?: string }> = ({
    children,
    className,
  }) => {
    const language = className ? className.replace("language-", "") : "text";
    const highlightedCode =
      highlighter?.codeToHtml(children.trim(), {
        lang: language,
        theme: "dark-plus",
      }) || children;

    return (
      <div className="code-block-wrapper" style={{ position: "relative" }}>
        <div
          dangerouslySetInnerHTML={{ __html: highlightedCode }}
          className="shiki-code relative"
        />
        <CopyButton text={children as string} />
      </div>
    );
  };

  return {
    h1: ({ children }) => {
      const id = generateId(children);
      return (
        <h1 id={id} data-heading="1">
          {children}
        </h1>
      );
    },
    h2: ({ children }) => {
      const id = generateId(children);
      return (
        <h2 id={id} data-heading="2">
          {children}
        </h2>
      );
    },
    h3: ({ children }) => {
      const id = generateId(children);
      return (
        <h3 id={id} data-heading="3">
          {children}
        </h3>
      );
    },
    code: ({ className, children }) => (
      <CodeBlock className={className}>{children as string}</CodeBlock>
    ),
    ...components,
  };
}
