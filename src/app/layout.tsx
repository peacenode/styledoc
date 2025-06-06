import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Geist_Mono } from "next/font/google";
import "@/app/globals.css";
import { Header } from "@/components/display/header";
import { ThemeProvider } from "@/components/ui/theme-provider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Style Doc",
  description: "Style documentation system",
  icons: {
    icon: [
      {
        media: '(prefers-color-scheme: light)',
        url: '/sclogo-dark.svg',
        href: '/sclogo-dark.svg',
      },
      {
        media: '(prefers-color-scheme: dark)',
        url: '/sclogo.svg',
        href: '/sclogo.svg',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${geistMono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className="relative flex min-h-screen flex-col">
            <Header />
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
