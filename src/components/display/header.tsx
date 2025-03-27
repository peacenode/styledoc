"use client"

import { ThemeToggle } from "@/components/display/theme-toggle"

export function Header() {
  return (
    <header className="fixed top-4 right-4 z-50 bg-background/60 backdrop-blur-sm rounded-lg">
      <ThemeToggle />
    </header>
  )
} 