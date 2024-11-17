import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Toaster } from 'sonner';
import Providers from "@/lib/Theme/Providers";

const inter = Inter({ subsets: ["latin"] });
export const metadata: Metadata = {
  title: "ghuronti",
  description: "welcome to ghuronti",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <Providers>
        <body className={`${inter.className}`}>

          <Toaster position="bottom-right" richColors />
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </body>
      </Providers>

    </html>
  );
}
