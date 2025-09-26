import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div className="App">
      <Header />
      <main className="Main">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
