import { render, screen } from "@testing-library/react";
import { TestemonialCard } from "../TestemonialCard";

describe("TestemonialCard", () => {
  const defaultProps = {
    text: "This is a great testimonial about the service.",
    names: "John Doe",
  };

  it("should render testimonial text as h3", () => {
    render(<TestemonialCard {...defaultProps} />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(
      "This is a great testimonial about the service."
    );
  });

  it("should render names with dash prefix", () => {
    render(<TestemonialCard {...defaultProps} />);

    expect(screen.getByText("- John Doe")).toBeInTheDocument();
  });

  it("should apply correct CSS classes", () => {
    const { container } = render(<TestemonialCard {...defaultProps} />);

    expect(container.querySelector(".testemonial")).toBeInTheDocument();
    expect(container.querySelector(".testemonial_user")).toBeInTheDocument();
    expect(
      container.querySelector(".testemonial_user_names")
    ).toBeInTheDocument();
  });

  it("should handle long testimonial text", () => {
    const longText =
      "This is a very long testimonial that spans multiple lines and contains detailed feedback about the excellent service provided by the studio and the professional instructors who made the experience amazing.";

    render(<TestemonialCard text={longText} names="Jane Smith" />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent(longText);
  });

  it("should handle Bulgarian names and text", () => {
    const bulgarianText =
      "Тренировките тук преобразиха тялото ми и подобриха стойката ми. Професионализмът на инструкторите е впечатляващ!";
    const bulgarianName = "Николай Николаев";

    render(<TestemonialCard text={bulgarianText} names={bulgarianName} />);

    expect(screen.getByText(bulgarianText)).toBeInTheDocument();
    expect(screen.getByText(`- ${bulgarianName}`)).toBeInTheDocument();
  });

  it("should handle empty text", () => {
    render(<TestemonialCard text="" names="Anonymous" />);

    const heading = screen.getByRole("heading", { level: 3 });
    expect(heading).toHaveTextContent("");
    expect(screen.getByText("- Anonymous")).toBeInTheDocument();
  });

  it("should handle empty names", () => {
    render(<TestemonialCard text="Great service!" names="" />);

    expect(screen.getByText("Great service!")).toBeInTheDocument();
    expect(screen.getByText("-")).toBeInTheDocument();
  });

  it("should handle special characters in text", () => {
    const specialText =
      "Amazing service! 5/5 stars ⭐⭐⭐⭐⭐ - highly recommended!";
    const specialName = "María José";

    render(<TestemonialCard text={specialText} names={specialName} />);

    expect(screen.getByText(specialText)).toBeInTheDocument();
    expect(screen.getByText(`- ${specialName}`)).toBeInTheDocument();
  });

  it("should handle multiple names", () => {
    const multipleNames = "John and Jane Doe";

    render(<TestemonialCard text="We both loved it!" names={multipleNames} />);

    expect(screen.getByText(`- ${multipleNames}`)).toBeInTheDocument();
  });

  it("should maintain proper HTML structure", () => {
    const { container } = render(<TestemonialCard {...defaultProps} />);

    const testimonial = container.querySelector(".testemonial");
    const heading = testimonial?.querySelector("h3");
    const user = testimonial?.querySelector(".testemonial_user");
    const names = user?.querySelector(".testemonial_user_names");

    expect(testimonial).toBeInTheDocument();
    expect(heading).toBeInTheDocument();
    expect(user).toBeInTheDocument();
    expect(names).toBeInTheDocument();
  });

  it("should handle quotes in testimonial text", () => {
    const textWithQuotes =
      '"This is the best pilates studio I\'ve ever been to!"';

    render(<TestemonialCard text={textWithQuotes} names="Sarah Wilson" />);

    expect(screen.getByText(textWithQuotes)).toBeInTheDocument();
  });

  it("should handle numbers in names", () => {
    const nameWithNumbers = "User123";

    render(
      <TestemonialCard text="Great experience!" names={nameWithNumbers} />
    );

    expect(screen.getByText(`- ${nameWithNumbers}`)).toBeInTheDocument();
  });
});
