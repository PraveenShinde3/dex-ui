import React from "react";
import type { MDXComponents } from "mdx/types";
import { CodeShow } from "./components/code-show";

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
  }) => {
    return <CodeShow code={children.trim()} />;
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
