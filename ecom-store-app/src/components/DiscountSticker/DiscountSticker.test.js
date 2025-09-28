import { render, screen } from "@testing-library/react";
import DiscountSticker from "../DiscountSticker";

test("does not render if discount is 0", () => {
  const { container } = render(<DiscountSticker discount={0} />);
  expect(container).toBeEmptyDOMElement();
});

test("renders sticker with correct percentage", () => {
  render(<DiscountSticker discount={25} />);
  expect(screen.getByText("-25%")).toBeInTheDocument();
});
