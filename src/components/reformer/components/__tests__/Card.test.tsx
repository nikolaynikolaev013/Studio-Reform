import { render, screen } from "@testing-library/react";
import { Card } from "../Card";

describe("Reformer Card", () => {
  const defaultProps = {
    title: "Test Card Title",
    text: "Test card text content",
  };

  it("should render title and text", () => {
    render(<Card {...defaultProps} />);

    expect(screen.getByText("Test Card Title")).toBeInTheDocument();
    expect(screen.getByText("Test card text content")).toBeInTheDocument();
  });

  it("should apply card styles", () => {
    const { container } = render(<Card {...defaultProps} />);

    const card = container.querySelector(".card");
    expect(card).toBeInTheDocument();
  });

  it("should render without title", () => {
    render(<Card text="Text only" />);

    expect(screen.getByText("Text only")).toBeInTheDocument();
  });

  it("should render with title", () => {
    render(<Card title="Title only" text="Some text" />);

    expect(screen.getByText("Title only")).toBeInTheDocument();
    expect(screen.getByText("Some text")).toBeInTheDocument();
  });

  it("should render with Bulgarian text", () => {
    const bulgarianProps = {
      title: "Български заглавие",
      text: "Българско съдържание",
    };

    render(<Card {...bulgarianProps} />);

    expect(screen.getByText("Български заглавие")).toBeInTheDocument();
    expect(screen.getByText("Българско съдържание")).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = render(<Card {...defaultProps} />);

    const card = container.querySelector(".card");
    expect(card).toBeInTheDocument();
  });
});
