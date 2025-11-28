import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";  // Thêm Poppins
import { AppProvider } from "@/components/app-provider";
import "./globals.css";

const roboto = Roboto({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto',
});

const poppins = Poppins({  
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '600', '700'],  
  variable: '--font-poppins',  
});

export const metadata: Metadata = {
  title: "Rento App",
  description: "Rento application frontend",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className={`${roboto.variable} ${poppins.variable}`}>  
      <body className="antialiased">
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  );
}