import React from "react";
import Header from "../Header";
import Footer from "../Footer";

function Layout({ children }) {
  return (
    <div className="App">
      <Header />
      <div className="App-body">{children}</div>
      <Footer />
    </div>
  );
}

export default Layout;
