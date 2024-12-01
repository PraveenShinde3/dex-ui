import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { promises as fs } from "fs";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getCodeFromFilePath = async (filePath: string) => {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    return fileContent;
    // ... Use the fileContent
  } catch (error) {
    // Handle errors, e.g., if the file doesn't exist
    console.error("Error reading file:", error);
  }
};
