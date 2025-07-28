import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Prices } from "../Prices";

// Mock child components
jest.mock("../components/PricesTable", () => ({
  PricesTable: ({ studioPrices }: any) => (
    <div data-testid="prices-table">Prices Table</div>
  ),
}));

jest.mock("../../common/PageTitle", () => ({
  PageTitle: ({ text }: { text: string }) => (
    <h1 data-testid="page-title">{text}</h1>
  ),
}));

jest.mock("../../common/Tabs/Tabs", () => ({
  Tabs: ({ tabs, defaultSelectedValue }: any) => (
    <div data-testid="tabs">
      {tabs.map((tab: any) => (
        <div key={tab.key} data-testid={`tab-${tab.key}`}>
          {tab.label}
        </div>
      ))}
      <div data-testid="tab-content">
        {tabs.find((tab: any) => tab.key === defaultSelectedValue)?.children}
      </div>
    </div>
  ),
}));

jest.mock("../../common/Seo", () => ({
  Seo: ({ title, description }: any) => (
    <div data-testid="seo" data-title={title} data-description={description}>
      SEO Component
    </div>
  ),
}));

const renderPrices = () => {
  return render(
    <MemoryRouter>
      <Prices />
    </MemoryRouter>
  );
};

describe("Prices", () => {
  it("should render tabs component", () => {
    renderPrices();

    expect(screen.getByTestId("tabs")).toBeInTheDocument();
  });

  it("should render city tabs", () => {
    renderPrices();

    expect(screen.getByTestId("tab-sofia")).toBeInTheDocument();
    expect(screen.getByTestId("tab-varna")).toBeInTheDocument();
  });

  it("should render tab labels correctly", () => {
    renderPrices();

    expect(screen.getByText("София")).toBeInTheDocument();
    expect(screen.getByText("Варна")).toBeInTheDocument();
  });

  it("should render prices table in tab content", () => {
    renderPrices();

    const tabContent = screen.getByTestId("tab-content");
    expect(tabContent).toBeInTheDocument();

    const pricesTable = screen.getByTestId("prices-table");
    expect(pricesTable).toBeInTheDocument();
  });

  it("should have proper structure", () => {
    const { container } = renderPrices();

    const pricesContainer = container.querySelector(".prices");
    expect(pricesContainer).toBeInTheDocument();
  });

  it("should render default tab content", () => {
    renderPrices();

    // Should render Sofia center prices by default
    const tabContent = screen.getByTestId("tab-content");
    expect(tabContent).toBeInTheDocument();
  });
});
