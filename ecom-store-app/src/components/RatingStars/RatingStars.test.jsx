import { render, screen } from "@testing-library/react";
import RatingStars from "../RatingStars";

test("renders 5 full stars when rating is 5", () => {
  render(<RatingStars rating={5} />);
  expect(screen.getAllByTestId("full-star")).toHaveLength(5);
  expect(screen.queryByTestId("half-star")).toBeNull();
  expect(screen.queryByTestId("empty-star")).toBeNull();
});

test("renders 3 full, 1 half, 1 empty when rating is 3.5", () => {
  render(<RatingStars rating={3.5} />);
  expect(screen.getAllByTestId("full-star")).toHaveLength(3);
  expect(screen.getAllByTestId("half-star")).toHaveLength(1);
  expect(screen.getAllByTestId("empty-star")).toHaveLength(1);
});

test("renders 5 empty stars when rating is 0", () => {
  render(<RatingStars rating={0} />);
  expect(screen.getAllByTestId("empty-star")).toHaveLength(5);
  expect(screen.queryByTestId("full-star")).toBeNull();
  expect(screen.queryByTestId("half-star")).toBeNull();
});
