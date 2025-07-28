import { render, screen } from "@testing-library/react";
import { InfoCard } from "../InfoCard";

describe("InfoCard", () => {
  it("should render hardcoded title", () => {
    render(<InfoCard />);

    expect(screen.getByText("Текущи отворени позиции")).toBeInTheDocument();
  });

  it("should render hardcoded description", () => {
    render(<InfoCard />);

    expect(
      screen.getByText(/В момента търсим талантливи хора/)
    ).toBeInTheDocument();
  });

  it("should apply info card styles", () => {
    const { container } = render(<InfoCard />);

    const card = container.querySelector(".info_card");
    expect(card).toBeInTheDocument();
  });

  it("should render title as h4 heading", () => {
    render(<InfoCard />);

    const heading = screen.getByRole("heading", { level: 4 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent("Текущи отворени позиции");
  });

  it("should render description as paragraph", () => {
    const { container } = render(<InfoCard />);

    const paragraph = container.querySelector("p");
    expect(paragraph).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = render(<InfoCard />);

    const card = container.querySelector(".info_card");
    const title = card?.querySelector("h4");
    const description = card?.querySelector("p");

    expect(card).toBeInTheDocument();
    expect(title).toBeInTheDocument();
    expect(description).toBeInTheDocument();
  });

  it("should render without crashing", () => {
    expect(() => render(<InfoCard />)).not.toThrow();
  });
});
