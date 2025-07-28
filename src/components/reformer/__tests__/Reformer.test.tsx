import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Reformer } from "../Reformer";

// Mock child components
jest.mock("../components/Card", () => ({
  Card: ({ title, description }: any) => (
    <div data-testid="reformer-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  ),
}));

jest.mock("../../common/PageTitle", () => ({
  PageTitle: ({ text }: { text: string }) => (
    <h1 data-testid="page-title">{text}</h1>
  ),
}));

const renderReformer = () => {
  return render(
    <MemoryRouter>
      <Reformer />
    </MemoryRouter>
  );
};

describe("Reformer", () => {
  it("should render reformer cards", () => {
    renderReformer();

    const cards = screen.getAllByTestId("reformer-card");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("should have proper structure", () => {
    const { container } = renderReformer();

    const reformerContainer = container.querySelector(".reformer");
    expect(reformerContainer).toBeInTheDocument();
  });

  it("should render main content section", () => {
    const { container } = renderReformer();

    const mainSection = container.querySelector(".reformer");
    expect(mainSection).toBeInTheDocument();
  });

  it("should render without crashing", () => {
    expect(() => renderReformer()).not.toThrow();
  });
});
