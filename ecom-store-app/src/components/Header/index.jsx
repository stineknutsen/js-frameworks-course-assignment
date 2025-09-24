import React from "react";
import CartIcon from "../CartIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: calc(10px + 2vmin);
  color: black;
  padding: 12px 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
`;

const Logo = styled.img`
  height: 30px;
`;

const Nav = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  text-decoration: none;

  a {
    text-decoration: none;
    color: black;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Link to="/">
        <Logo src="./logo.png" alt="logo" />
      </Link>

      <Nav>
        <Link to="/">Shop</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/checkout">
          <CartIcon />
        </Link>
      </Nav>
    </HeaderDiv>
  );
}
