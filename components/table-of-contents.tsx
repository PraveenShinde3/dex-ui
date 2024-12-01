"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import * as ScrollArea from "@radix-ui/react-scroll-area";

interface TOCItem {
  id: string;
  text: string;
  level: number;
}

export function TableOfContents() {
  const [toc, setToc] = useState<TOCItem[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    const headings = document.querySelectorAll("h1, h2, h3, h4");
    const tocItems: TOCItem[] = Array.from(headings).map((heading) => ({
      id: heading.id,
      text: heading.textContent || "",
      level: parseInt(heading.tagName.charAt(1)),
    }));
    console.log(tocItems);
    setToc(tocItems);
  }, [pathname]);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      router.push(`#${id}`, { scroll: false });
    }
  };

  return (
    <ScrollArea.Root className="h-[calc(100vh-3.6rem)] w-full overflow-hidden pt-8">
      <ScrollArea.Viewport className="h-full w-full">
        <nav className="space-y-2 p-4">
          {/* <h2 className="font-medium text-sm">On this page</h2> */}
          <ul className="space-y-2 text-sm">
            {toc.map((item, index) => (
              <li
                key={index}
                style={{ marginLeft: `${(item.level - 2) * 12}px` }}
              >
                <a
                  href={`#${item.id}`}
                  onClick={(e) => handleClick(e, item.id)}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none bg-black/10 p-0.5 transition-colors duration-150 ease-out hover:bg-black/20 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-[10px] bg-black/50 before:absolute before:left-1/2 before:top-1/2 before:h-full before:min-h-[44px] before:w-full before:min-w-[44px] before:-translate-x-1/2 before:-translate-y-1/2 before:content-['']" />
      </ScrollArea.Scrollbar>
    </ScrollArea.Root>
  );
}
