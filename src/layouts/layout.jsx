import React from "react";
import Footer from "./footer";
import Header from "./header";
// komponen layout utama

function Layout({ children, className }) {
  return (
    <div>
      <Header />
      <main className={className}>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
