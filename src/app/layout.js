import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mero Day",
  description: "Created by subham",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>meroday</title>
        <link rel="icon" href="../../public/favicon.ico" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
