import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Prostore",
  description: "Dress in style. Website build on next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
        >
          {children}
          <Toaster position="bottom-right" />
        </ThemeProvider>
      </body>
    </html>
  );
}

// import type { Metadata } from "next";
// import { Inter } from "next/font/google";
// import "./globals.css";
// // import "@/assets/styles/globals.css";
// import { APP_NAME, APP_DESCRIPTION, SERVER_URL } from "@/lib/constants";
// import { ThemeProvider } from "next-themes";
// import React from "react";
// const inter = Inter({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   // title: APP_NAME,
//   title: {
//     template: `%s | Prostore`,
//     default: APP_NAME,
//   },
//   description: APP_DESCRIPTION,
//   metadataBase: new URL(SERVER_URL),
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body className={`${inter.className} antialiased`}>
//         <ThemeProvider attribute="class" defaultTheme="dark">
//           {children}
//         </ThemeProvider>
//       </body>
//     </html>
//   );
// }
