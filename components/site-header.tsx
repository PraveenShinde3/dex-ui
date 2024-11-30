import Link from "next/link";
import { Github, Twitter } from "lucide-react";
import { ThemeToggle } from "@/components/theme-toggle";
import Image from "next/image";
import logo from "@/public/logo.svg";

export function SiteHeader() {
  return (
    <header className="sticky px-20 top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <Image src={logo} alt="logo" className="w-4 h-4" />
            <span className="font-bold">Dex-ui</span>
            <span className="rounded-md -mt-2 bg-muted text-muted-foreground px-2 py-0.5 text-xs">
              Beta
            </span>
          </Link>
        </div>
        <div className="flex flex-1 items-center space-x-2 justify-between">
          <nav className="flex items-center space-x-6">
            <Link href="/docs" className="text-sm font-medium">
              Documentation
            </Link>
            <Link href="/components" className="text-sm font-medium">
              Components
            </Link>
          </nav>
          <div className="flex items-center space-x-2">
            <Link href="https://github.com" target="_blank" rel="noreferrer">
              <Github className="h-5 w-5" />
            </Link>
            <Link href="https://twitter.com" target="_blank" rel="noreferrer">
              <Twitter className="h-5 w-5" />
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
