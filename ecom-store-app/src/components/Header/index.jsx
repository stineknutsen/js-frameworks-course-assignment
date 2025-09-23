import React from "react";
import CartIcon from "../CartIcon";

function Header() {
  return (
    <div className="App-header">
      <div className="">
        <p>Logo</p>
      </div>
      <div className="App-header-nav">
        <p>Contact</p>
        <CartIcon />
      </div>
    </div>
  );
}

export default Header;
