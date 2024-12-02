import * as React from "react";
import * as Tabs from "@radix-ui/react-tabs";
import { readFileContents } from "@/libs/utils";
import { cn } from "@/libs/utils";
import { CodeShow } from "./code-show";

interface ComponentPreviewProps extends React.HTMLAttributes<HTMLDivElement> {
  component: React.ReactElement;
  filePath: string;
  align?: "center" | "start" | "end";
}

export async function ComponentPreview({
  component,
  filePath,
  align = "center",
  className,
  ...props
}: ComponentPreviewProps) {
  const codeData = await readFileContents(filePath);
  return (
    <div
      className={cn("group relative my-4 flex flex-col space-y-2", className)}
      {...props}
    >
      <Tabs.Root defaultValue="preview" className="relative w-full">
        <Tabs.List className="flex w-full justify-start rounded-none border-b bg-transparent p-0">
          <Tabs.Trigger
            value="preview"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Preview
          </Tabs.Trigger>
          <Tabs.Trigger
            value="code"
            className="relative h-9 rounded-none border-b-2 border-b-transparent bg-transparent px-4 pb-3 pt-2 font-semibold text-muted-foreground shadow-none transition-none data-[state=active]:border-b-primary data-[state=active]:text-foreground data-[state=active]:shadow-none"
          >
            Code
          </Tabs.Trigger>
        </Tabs.List>
        <Tabs.Content
          value="preview"
          className="relative rounded-md border mt-4"
        >
          <div
            className={cn(
              "flex preview min-h-[350px] w-full justify-center p-10",
              {
                "items-center": align === "center",
                "items-start": align === "start",
                "items-end": align === "end",
              }
            )}
          >
            <React.Suspense
              fallback={
                <div className="flex w-full items-center justify-center text-sm text-muted-foreground">
                  Loading...
                </div>
              }
            >
              <div className="w-full">{component}</div>
            </React.Suspense>
          </div>
        </Tabs.Content>
        <Tabs.Content value="code" className="mt-4">
          <div className="w-full rounded-md [&_pre]:my-0 [&_pre]:max-h-[350px] [&_pre]:overflow-auto">
            <CodeShow code={codeData} />
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
}
