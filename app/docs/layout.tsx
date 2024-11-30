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
    <div className="relative flex min-h-screen container mx-auto flex-col">
      <SiteHeader />
      <div className="flex-1 px-20">
        <div className="container flex-1 items-start md:grid md:grid-cols-[220px_1fr_220px] md:gap-6 lg:grid-cols-[240px_1fr_240px] lg:gap-10">
          <aside className="sticky top-14 hidden h-[calc(100dvh-3.5rem)] w-[220px] shrink-0 pt-8 md:block lg:pt-12 overflow-y-auto">
            <SiteNav />
          </aside>

          <main className="prose prose-pre:bg-transparent prose-pre:p-0 text-sm prose-zinc min-w-0 max-w-full flex-1 pb-16 pt-8 dark:prose-invert prose-h1:scroll-m-10 prose-h1:text-xl prose-h1:font-semibold prose-h2:scroll-m-10 prose-h2:text-lg prose-h2:font-medium prose-h3:scroll-m-10 prose-h3:text-base prose-h3:font-medium prose-h4:scroll-m-10 prose-h5:scroll-m-10 prose-h6:scroll-m-10 prose-strong:font-medium prose-table:block prose-table:overflow-y-auto lg:pt-12 xl:max-w-2xl">
            {children}
          </main>
          <aside className="sticky top-14 hidden h-[calc(100dvh-theme(spacing.16))] w-[220px] shrink-0 pt-8 xl:block">
            <div>
              <TableOfContents />
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
