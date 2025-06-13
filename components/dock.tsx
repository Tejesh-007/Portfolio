"use client";

import { Dock, DockIcon } from "@/components/magicui/dock";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HomeIcon, MailIcon, GithubIcon, Sun, Moon } from "lucide-react";
import React from "react";
import { useTheme } from "next-themes";

// SVGs for LinkedIn and X (Twitter)
const LinkedInIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>LinkedIn</title>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const XIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <title>X</title>
    <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
  </svg>
);

export default function DockBar() {
  const { theme, setTheme } = useTheme();
  return (
    <div className="fixed bottom-6 left-1/2 z-50 -translate-x-1/2">
      <TooltipProvider>
        <Dock direction="middle">
          {/* Home */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="/" aria-label="Home">
                  <Button variant="ghost" size="icon" className="size-10 rounded-full">
                    <HomeIcon className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>Home</TooltipContent>
            </Tooltip>
          </DockIcon>
          {/* Separator */}
          <Separator orientation="vertical" className="h-8 mx-1" />
          {/* GitHub */}
          {/* <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://github.com/Tejesh-007" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="size-10 rounded-full">
                    <GithubIcon className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          </DockIcon> */}
          {/* LinkedIn */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://www.linkedin.com/in/sai-tejesh-gonemadatala-bb41a9179/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="size-10 rounded-full">
                    <LinkedInIcon className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          </DockIcon>
          {/* X */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Link href="https://x.com/saitejesh007" aria-label="X">
                  <Button variant="ghost" size="icon" className="size-10 rounded-full">
                    <XIcon className="size-5" />
                  </Button>
                </Link>
              </TooltipTrigger>
              <TooltipContent>X</TooltipContent>
            </Tooltip>
          </DockIcon>
          {/* Separator */}
          <Separator orientation="vertical" className="h-8 mx-1" />
          {/* Theme Toggle */}
          <DockIcon>
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-10 rounded-full relative"
                  aria-label="Toggle theme"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>Theme</TooltipContent>
            </Tooltip>
          </DockIcon>
        </Dock>
      </TooltipProvider>
    </div>
  );
} 