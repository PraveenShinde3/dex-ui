"use client";

import { FileTree } from "./file-tree";

interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
}
const sampleData: FileTreeItem[] = [
  {
    name: "Project Root",
    type: "folder",
    children: [
      {
        name: "src",
        type: "folder",
        children: [
          {
            name: "components",
            type: "folder",
            children: [
              { name: "Button.tsx", type: "file" },
              { name: "Card.tsx", type: "file" },
            ],
          },
          {
            name: "pages",
            type: "folder",
            children: [
              { name: "index.tsx", type: "file" },
              { name: "about.tsx", type: "file" },
            ],
          },
          {
            name: "styles",
            type: "folder",
            children: [{ name: "globals.css", type: "file" }],
          },
        ],
      },
      { name: "package.json", type: "file" },
      { name: "tsconfig.json", type: "file" },
      { name: "README.md", type: "file" },
    ],
  },
];

export default function FileTreeDemo() {
  const handleSelect = (item: FileTreeItem) => {
    console.log("Selected:", item.name);
  };

  return (
    <div className="flex justify-center items-center mx-auto p-4">
      <FileTree data={sampleData} onSelect={handleSelect} />
    </div>
  );
}
