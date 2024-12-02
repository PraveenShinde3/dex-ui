"use client";

import React, { useState } from "react";
import { ChevronRight, ChevronDown, Folder, File } from "lucide-react";

interface FileTreeItem {
  name: string;
  type: "file" | "folder";
  children?: FileTreeItem[];
}

interface FileTreeProps {
  data: FileTreeItem[];
  initialDepth?: number;
  onSelect?: (item: FileTreeItem) => void;
}

const FileTreeNode: React.FC<{
  item: FileTreeItem;
  depth: number;
  onSelect?: (item: FileTreeItem) => void;
}> = ({ item, depth, onSelect }) => {
  const [isExpanded, setIsExpanded] = useState(depth === 0);

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (item.type === "folder") {
      setIsExpanded(!isExpanded);
    }
  };

  const handleSelect = () => {
    if (onSelect) {
      onSelect(item);
    }
  };

  return (
    <div className="select-none">
      <div
        className={`flex items-center py-1 px-2 hover:bg-gray-100 cursor-pointer ${
          depth === 0 ? "bg-gray-50" : ""
        }`}
        style={{ paddingLeft: `${depth * 1.5 + 0.5}rem` }}
        onClick={handleSelect}
      >
        {item.type === "folder" && (
          <span className="mr-1" onClick={handleToggle}>
            {isExpanded ? (
              <ChevronDown className="w-4 h-4 text-gray-500" />
            ) : (
              <ChevronRight className="w-4 h-4 text-gray-500" />
            )}
          </span>
        )}
        {item.type === "folder" ? (
          <Folder className="w-4 h-4 text-zinc-900  mr-2" />
        ) : (
          <File className="w-4 h-4 text-gray-500 mr-2" />
        )}
        <span className="text-sm">{item.name}</span>
      </div>
      {item.type === "folder" && isExpanded && item.children && (
        <div>
          {item.children.map((child, index) => (
            <FileTreeNode
              key={`${child.name}-${index}`}
              item={child}
              depth={depth + 1}
              onSelect={onSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export const FileTree: React.FC<FileTreeProps> = ({
  data,
  initialDepth = 0,
  onSelect,
}) => {
  return (
    <div className="border w-fit p-4 border-gray-200 rounded-md overflow-hidden">
      {data.map((item, index) => (
        <FileTreeNode
          key={`${item.name}-${index}`}
          item={item}
          depth={initialDepth}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
