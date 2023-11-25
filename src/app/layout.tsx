import type { Metadata } from "next";
import { Inter } from "next/font/google";
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
        className={["min-h-screen bg-background font-sans antialiased",
        fontSans.variable].join(' ')}>
        {children}
      </body>
    </html>
  );
};
export default RootLayout;

