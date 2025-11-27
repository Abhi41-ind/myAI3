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
  style={{
    // This points to the image you uploaded in the public folder
    backgroundImage: `url('/background.png')`,
    // This ensures the image covers the whole screen without stretching weirdly
    backgroundSize: 'cover',
    // This centers the image
    backgroundPosition: 'center',
    // This stops the image from repeating into tiles
    backgroundRepeat: 'no-repeat',
    // This ensures the background takes up at least the full height of the screen
    minHeight: '100vh',
    // This removes default white borders around the edge of the browser
    margin: 0,
  }}
>
  {children}
</body>
    </html>
  );
}
