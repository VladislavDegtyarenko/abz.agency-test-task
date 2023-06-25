import "./globals.css";
import { Nunito } from "next/font/google";

const nunito = Nunito({ subsets: ["latin"], weight: "400" });

export const metadata = {
  title: "abz.agency test",
  description: "Developed by Vladyslav Dihtiarenko",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={nunito.className}>{children}</body>
    </html>
  );
}
