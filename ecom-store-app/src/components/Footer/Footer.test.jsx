import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("renders footer navigation items", () => {
    render(<Footer />);

    expect(screen.getByText(/About/i)).toBeInTheDocument();
    expect(screen.getByText(/Terms/i)).toBeInTheDocument();
    expect(screen.getByText(/Privacy/i)).toBeInTheDocument();
    expect(screen.getByText(/Help/i)).toBeInTheDocument();
  });
});
