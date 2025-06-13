import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Toaster } from "@/components/ui/toaster"
import { Pointer } from "@/components/ui/pointer"
import DockBar from "@/components/dock"
import { ThemeProvider } from "@/components/theme-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Sai Tejesh Gonemadatala - Full Stack Developer",
  description:
    "Experienced Full Stack Developer with 3+ years of experience in Angular, React.js, Node.js, and Java. Specializing in enterprise-level applications and system optimization.",
  keywords: "Full Stack Developer, React, Angular, Node.js, Java, Software Engineer, Web Development",
  authors: [{ name: "Sai Tejesh Gonemadatala" }],
  openGraph: {
    title: "Sai Tejesh Gonemadatala - Full Stack Developer",
    description: "Experienced Full Stack Developer specializing in modern web technologies",
    type: "website",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div id="main-content" style={{ minHeight: "100vh" }}>
            {children}
            <DockBar />
            <Toaster />
            <Pointer className="fill-blue-500" />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
