import React, { ReactNode } from "react";
import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

const Layout = ({ children, title = "PM Portfolio" }: LayoutProps) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content="Product Management Portfolio - Engineering to PM Journey"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </div>
    </>
  );
};

export default Layout;
