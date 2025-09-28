import { render, screen } from "@testing-library/react";
import CartIcon from "../CartIcon";
import { useCart } from "../../context/CartContext";

jest.mock("../../context/CartContext");

test("shows correct total when cart has items", () => {
  useCart.mockReturnValue({
    cart: [
      { id: 1, title: "Test 1", quantity: 2 },
      { id: 2, title: "Test 2", quantity: 3 },
    ],
  });

  render(<CartIcon />);
  expect(screen.getByText("5")).toBeInTheDocument();
});

test("shows 0 when cart is empty", () => {
  useCart.mockReturnValue({ cart: [] });
  render(<CartIcon />);
  expect(screen.getByText("0")).toBeInTheDocument();
});
