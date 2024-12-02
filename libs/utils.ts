import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as fs from "fs/promises";
import path from "path";

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

export const readFileContents = async (filePath: string): Promise<string> => {
  try {
    const absolutePath = path.resolve(process.cwd(), filePath);
    const fileContent = await fs.readFile(absolutePath, "utf-8");
    return fileContent;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(
        `Failed to read file: ${filePath}. Error: ${error.message}`
      );
    } else {
      throw new Error(
        `Failed to read file: ${filePath}. Unknown error occurred.`
      );
    }
  }
};
