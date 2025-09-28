import { render, screen, fireEvent, act } from "@testing-library/react";
import AddToCartIcon from "../AddToCartIcon";
import { useCart } from "../../context/CartContext";

jest.mock("../../context/CartContext");

jest.useFakeTimers();

test("renders cart icon by default", () => {
  useCart.mockReturnValue({ addToCart: jest.fn() });
  render(<AddToCartIcon product={{ id: 1, title: "Test Product" }} />);
  expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
});

test("clicking adds product and shows checkmark", () => {
  const addToCartMock = jest.fn();
  useCart.mockReturnValue({ addToCart: addToCartMock });

  render(<AddToCartIcon product={{ id: 1, title: "Test Product" }} />);

  fireEvent.click(screen.getByTestId("cart-icon"));
  expect(addToCartMock).toHaveBeenCalledTimes(1);

  expect(screen.getByTestId("check-icon")).toBeInTheDocument();

  act(() => {
    jest.advanceTimersByTime(1500);
  });

  expect(screen.getByTestId("cart-icon")).toBeInTheDocument();
});
