"use client";
import Header from "@/components/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import React, { useState } from "react";
import Footer from "@/components/Footer";
import Head from "next/head";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  // const [toast, setToast] = useState(true);
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          type="image/svg"
          sizes="32x32"
          href="https://flowbite.com/docs/images/logo.svg"
        />
        <link
          rel="icon"
          type="image/svg"
          sizes="16x16"
          href="https://flowbite.com/docs/images/logo.svg"
        />
        <meta title="Notation | Keep track of your activiies" />
        <meta description="Notation is note taking app that allow user user to add notes and access later" />
      </head>
      <body className={inter.className} suppressHydrationWarning={true}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
