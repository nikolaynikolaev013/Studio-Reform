import { render, screen } from "@testing-library/react";
import { TransparentPanel } from "../TransparentPanel";

describe("TransparentPanel", () => {
  it("should render children content", () => {
    const testContent = <div data-testid="test-content">Test Content</div>;

    render(<TransparentPanel>{testContent}</TransparentPanel>);

    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });

  it("should apply transparent panel styles", () => {
    const { container } = render(
      <TransparentPanel>
        <div>Content</div>
      </TransparentPanel>
    );

    const panel = container.querySelector(".panel");
    expect(panel).toBeInTheDocument();
  });

  it("should render multiple children", () => {
    render(
      <TransparentPanel>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
        <span data-testid="child-3">Child 3</span>
      </TransparentPanel>
    );

    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
    expect(screen.getByTestId("child-3")).toBeInTheDocument();
  });

  it("should render with required children prop", () => {
    const { container } = render(
      <TransparentPanel>
        <div>Required child</div>
      </TransparentPanel>
    );

    const panel = container.querySelector(".panel");
    expect(panel).toBeInTheDocument();
  });

  it("should render text content", () => {
    render(<TransparentPanel>Simple text content</TransparentPanel>);

    expect(screen.getByText("Simple text content")).toBeInTheDocument();
  });

  it("should render complex nested content", () => {
    const complexContent = (
      <div>
        <h2 data-testid="heading">Heading</h2>
        <p data-testid="paragraph">Paragraph content</p>
        <ul>
          <li data-testid="list-item">List item</li>
        </ul>
      </div>
    );

    render(<TransparentPanel>{complexContent}</TransparentPanel>);

    expect(screen.getByTestId("heading")).toBeInTheDocument();
    expect(screen.getByTestId("paragraph")).toBeInTheDocument();
    expect(screen.getByTestId("list-item")).toBeInTheDocument();
  });
});
