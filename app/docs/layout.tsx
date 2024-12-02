import React from "react";
import { SiteHeader } from "@/components/site-header";
import { SiteNav } from "@/components/site-nav";
import { TableOfContents } from "@/components/table-of-contents";

export default function DocsLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="relative flex h-screen max-w-[1920px] mx-auto flex-col ">
      <SiteHeader />
      <div className="flex-1 mx-auto w-full px-20 ">
        <div className="mx-auto flex w-full flex-col justify-between items-start md:flex-row md:space-x-12">
          <aside className="sticky top-14 hidden w-[220px] shrink-0 md:block overflow-y-auto">
            <SiteNav />
          </aside>
          <main className="prose prose-hr:my-4 prose-pre:m-0 prose-pre:bg-transparent prose-pre:p-0 text-base prose-zinc min-w-0 max-w-full flex-1 pb-16 pt-8 dark:prose-invert prose-h1:scroll-m-10 prose-h1:text-xl prose-h1:font-semibold prose-h2:scroll-m-10 prose-h2:text-lg prose-h2:font-medium prose-h3:scroll-m-10 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-10 prose-h5:scroll-m-10 prose-h6:scroll-m-10 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto xl:max-w-4xl">
            {children}
          </main>
          <aside className=" sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 xl:block">
            <div>
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
