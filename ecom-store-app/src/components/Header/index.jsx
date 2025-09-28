import React from "react";
import CartIcon from "../CartIcon";
import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderDiv = styled.div`
  display: flex;
  padding: 12px 10px;
  align-items: center;
  justify-content: space-between;
  color: black;
  background-color: #fff;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  position: sticky;
  top: 0;
  z-index: 100;
`;

const Logo = styled.img`
  height: 22px;

  @media (min-width: 500px) {
    height: 28px;
  }
`;

const Nav = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-size: 1rem;

  @media (min-width: 500px) {
    font-size: 1.2rem;
  }

  a {
    text-decoration: none;
    color: black;
  }

  a:hover {
    text-decoration: underline;
  }
`;

export default function Header() {
  return (
    <HeaderDiv>
      <Link to="/">
        <Logo src="logo.png" alt="logo" />
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
