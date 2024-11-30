// CopyButton.tsx
"use client";
import { Clipboard } from "lucide-react";
import React from "react";

const CopyButton: React.FC<{ text: string }> = ({ text }) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Copied to clipboard!");
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center px-1 text-xs absolute top-2 right-2"
    >
      Copy <Clipboard size={"0.7rem"} />
    </button>
  );
};

export default CopyButton;
