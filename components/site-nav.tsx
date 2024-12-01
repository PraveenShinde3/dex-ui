"use client";
import Link from "next/link";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { cn } from "@/libs/utils";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef } from "react";

type NavigationItem = {
  title: string;
  href: string;
  isNew?: boolean; // Optional property
};

type NavigationSection = {
  [section: string]: NavigationItem[];
};

const navigation: NavigationSection = {
  "Getting started": [
    { title: "Introduction", href: "/docs" },
    { title: "Installation", href: "/docs/installation" },
  ],
  "Core Components": [
    { title: "Accordion", href: "/docs/accordion", isNew: true },
    { title: "Animated Background", href: "/docs/animated-background" },
    { title: "Animated Group", href: "/docs/animated-group" },
    { title: "Animated Number", href: "/docs/animated-number" },
    { title: "Border Trail", href: "/docs/border-trail" },
    { title: "Carousel", href: "/docs/carousel" },
    { title: "Cursor", href: "/docs/cursor" },
    { title: "Dialog", href: "/docs/dialog" },
  ],
  "Text Animations": [
    { title: "Text Effect", href: "/docs/text-effect" },
    { title: "Text Loop", href: "/docs/text-loop" },
    { title: "Text Morph", href: "/docs/text-morph" },
    { title: "Text Scramble", href: "/docs/text-scramble" },
    { title: "Text Shimmer", href: "/docs/text-shimmer" },
  ],
};

export function SiteNav() {
  const pathname = usePathname();
  const activeRef = useRef<HTMLLIElement | null>(null);

  useEffect(() => {
    if (activeRef.current) {
      activeRef.current.scrollIntoView({
        behavior: "auto",
        block: "nearest",
      });
    }
  }, [pathname]);

  return (
    // <ScrollArea.Root className="relative h-[calc(100dvh-rem)] pt-8">
    //   <ScrollArea.Viewport className="rounded-[inherit] overflow-auto">

    //   </ScrollArea.Viewport>
    //   <ScrollArea.Scrollbar
    //     className="flex touch-none select-none bg-black/10 p-0.5 transition-colors duration-150 ease-out hover:bg-black/20 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
    //     orientation="vertical"
    //   >
    //     <ScrollArea.Thumb className="ScrollAreaThumb" />
    //   </ScrollArea.Scrollbar>
    //   <ScrollArea.Scrollbar
    //     className="flex touch-none select-none bg-black/10 p-0.5 transition-colors duration-150 ease-out hover:bg-black/20 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
    //     orientation="horizontal"
    //   >
    //     <ScrollArea.Thumb className="ScrollAreaThumb" />
    //   </ScrollArea.Scrollbar>
    // </ScrollArea.Root>
    <ScrollArea.Root className="w-full h-[calc(100dvh-3.6rem)] overflow-hidden pt-8">
      <ScrollArea.Viewport className="w-full h-full">
        <nav>
          <ul role="list" className="h-full">
            {Object.entries(navigation).map(([section, items], index) => {
              return (
                <li className="mb-6" key={index}>
                  <div className="text-sm/6 font-[450] text-zinc-950 dark:text-white">
                    {section}
                  </div>
                  <ul
                    role="list"
                    className="mt-4 space-y-3.5 border-l border-zinc-200 dark:border-zinc-800"
                  >
                    {items.map((child, index) => {
                      const isActive = pathname === child.href;

                      return (
                        <li
                          key={`${index}-${child.title}`}
                          ref={isActive ? activeRef : null}
                        >
                          <Link
                            className={cn(
                              "relative inline-flex items-center space-x-1 pl-4 text-sm font-normal text-zinc-700 hover:text-zinc-950 dark:text-zinc-400 dark:hover:text-white",
                              isActive &&
                                "text-zinc-950 before:absolute before:inset-y-0 before:left-[-1.5px] before:w-[2px] before:rounded-full before:bg-zinc-950 dark:text-white dark:before:bg-white"
                            )}
                            href={child.href}
                          >
                            <span>{child.title}</span>
                            {child?.isNew && (
                              <span className="whitespace-nowrap rounded-lg bg-emerald-100 px-2 text-[10px] font-semibold text-emerald-800 dark:bg-emerald-950 dark:text-emerald-50">
                                New
                              </span>
                            )}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </li>
              );
            })}
          </ul>
        </nav>
      </ScrollArea.Viewport>
      <ScrollArea.Scrollbar
        className="flex touch-none select-none bg-transparent p-0.5 transition-colors duration-150 ease-out hover:bg-black/20 data-[orientation=horizontal]:h-2.5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col"
        orientation="vertical"
      >
        <ScrollArea.Thumb className="relative flex-1 rounded-full bg-zinc-300/60" />
      </ScrollArea.Scrollbar>

      <ScrollArea.Corner />
    </ScrollArea.Root>
  );
}
