import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { cn } from "@/utils";
import "./global.css";

export const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Maxcinema",
  description: "Dig deep in Cinema",
};

const RootLayout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;

