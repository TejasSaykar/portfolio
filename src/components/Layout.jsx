import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children, description, keyword, author, title }) => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <meta name="description" content={description} />
        <meta name="keyword" content={keyword} />
        <meta name="author" content={author} />
        <title>{title}</title>
      </Helmet>
      {/* -[#0e1630]  */}
      <div className="bg-neutral-900 h-screen text-stone-100">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
};

export default Layout;
