import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyAI3",
  description: "MyAI3",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     <body
  className="bg-background text-foreground font-sans bg-[url('/Gemini_Generated_Image_tbk7r0tbk7r0tbk7.png')] bg-cover bg-center bg-no-repeat min-h-screen"
>
  {children}
</body>
    </html>
  );
}
