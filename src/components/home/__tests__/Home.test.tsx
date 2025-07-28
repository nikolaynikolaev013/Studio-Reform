import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Home } from "../Home";

// Mock child components
jest.mock("../components/Card", () => ({
  Card: ({ firstText, secondText }: any) => (
    <div data-testid="card">
      <span>{firstText}</span>
      <span>{secondText}</span>
    </div>
  ),
}));

jest.mock("../components/TestemonialCard", () => ({
  TestemonialCard: ({ text, names }: any) => (
    <div data-testid="testimonial-card">
      <span>{text}</span>
      <span>{names}</span>
    </div>
  ),
}));

jest.mock("../../common/buttons/AppButton", () => ({
  AppButton: ({ text, onClick }: any) => (
    <button data-testid="app-button" onClick={onClick}>
      {text}
    </button>
  ),
}));

jest.mock("../../common/Seo", () => ({
  Seo: ({ title, description }: any) => (
    <div data-testid="seo" data-title={title} data-description={description}>
      SEO Component
    </div>
  ),
}));

jest.mock("../../common/icons/Icon", () => ({
  Icon: ({ type }: any) => <div data-testid={`icon-${type}`}>Icon</div>,
  IconType: {
    ReformPilatesLogo: "ReformPilatesLogo",
  },
}));

const renderHome = () => {
  return render(
    <MemoryRouter>
      <Home />
    </MemoryRouter>
  );
};

describe("Home", () => {
  it("should render main heading", () => {
    renderHome();

    const heading = screen.getByRole("heading", { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent(/Какво е Пилатес Реформър/);
  });

  it("should render SEO component", () => {
    renderHome();

    expect(screen.getByTestId("seo")).toBeInTheDocument();
  });

  it("should render cards section", () => {
    renderHome();

    const cards = screen.getAllByTestId("card");
    expect(cards.length).toBeGreaterThan(0);
  });

  it("should render testimonials section", () => {
    renderHome();

    const testimonials = screen.getAllByTestId("testimonial-card");
    expect(testimonials.length).toBeGreaterThan(0);
  });

  it("should render call-to-action button", () => {
    renderHome();

    const ctaButton = screen.getByTestId("app-button");
    expect(ctaButton).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = renderHome();

    const wrapper = container.querySelector(".wrapper");
    expect(wrapper).toBeInTheDocument();
  });
});
