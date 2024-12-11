import type { Metadata } from "next";
import "../styles/main.scss";
import localFont from "next/font/local";
import Providers from "@/context/Providers";

const marcellus = localFont({
  src: "./fonts/Marcellus-Regular.woff",
});

export const metadata: Metadata = {
  title: "Organic Bazar",
  description: "It a e-commerce shop",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body className={marcellus.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
