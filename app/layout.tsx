import type { Metadata } from "next";
import "./globals.css";
import GlobalProviders from "@/components/GlobalProviders";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GlobalProviders>
        <body className={"antialiased"}>{children}</body>
      </GlobalProviders>
    </html>
  );
}
