// CopyButton.tsx
"use client";
import { Clipboard } from "lucide-react";
import React, { useState } from "react";

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    try {
      setCopied(true);
      await navigator.clipboard.writeText(text);
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setCopied(false);
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className=" px-1 text-xs absolute top-2 right-2"
    >
      {copied ? (
        <span>Copied!</span>
      ) : (
        <span className="flex font-mono gap-1 items-center">
          Copy <Clipboard size={"0.7rem"} />
        </span>
      )}
    </button>
  );
};

export default CopyButton;
