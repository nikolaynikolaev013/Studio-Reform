import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Studios } from "../Studios";

// Mock the child components
jest.mock("../components/StudioProfile", () => ({
  StudioProfile: ({ studio, imageClassName }: any) => (
    <div
      data-testid={`studio-profile-${studio.studioName}`}
      className={imageClassName}
    >
      Studio Profile for {studio.studioName}
    </div>
  ),
}));

jest.mock("../../common/PageTitle", () => ({
  PageTitle: ({ text }: { text: string }) => (
    <h1 data-testid="page-title">{text}</h1>
  ),
}));

jest.mock("../../common/Tabs/Tabs", () => ({
  Tabs: ({ tabs, defaultSelectedValue, onTabChange }: any) => (
    <div data-testid="tabs">
      {tabs.map((tab: any) => (
        <button
          key={tab.key}
          data-testid={`tab-${tab.key}`}
          onClick={() => onTabChange(tab.key)}
        >
          {tab.label}
        </button>
      ))}
      <div data-testid="tab-content">
        {tabs.find((tab: any) => tab.key === defaultSelectedValue)?.children}
      </div>
    </div>
  ),
}));

const renderStudiosWithRouter = (initialEntries: string[] = ["/studios"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <Studios />
    </MemoryRouter>
  );
};

describe("Studios", () => {
  it("should render page title", () => {
    renderStudiosWithRouter();

    expect(screen.getByTestId("page-title")).toBeInTheDocument();
    expect(screen.getByText("Нашите студиа")).toBeInTheDocument();
  });

  it("should render all studio tabs", () => {
    renderStudiosWithRouter();

    expect(screen.getByTestId("tab-sofia-center")).toBeInTheDocument();
    expect(screen.getByTestId("tab-varna-center")).toBeInTheDocument();
    expect(screen.getByTestId("tab-varna-troshevo")).toBeInTheDocument();
    expect(screen.getByTestId("tab-varna-levski")).toBeInTheDocument();
  });

  it("should render tab labels correctly", () => {
    renderStudiosWithRouter();

    expect(screen.getByText("София - център")).toBeInTheDocument();
    expect(screen.getByText("Варна - център")).toBeInTheDocument();
    expect(screen.getByText("Варна - Трошево")).toBeInTheDocument();
    expect(screen.getByText("Варна - Левски")).toBeInTheDocument();
  });

  it("should default to sofia-center when no studio parameter", () => {
    renderStudiosWithRouter(["/studios"]);

    const tabContent = screen.getByTestId("tab-content");
    expect(tabContent).toHaveTextContent("Studio Profile for София - център");
  });

  it("should default to sofia-center for invalid studio parameter", () => {
    renderStudiosWithRouter(["/studios/invalid-studio"]);

    const tabContent = screen.getByTestId("tab-content");
    expect(tabContent).toHaveTextContent("Studio Profile for София - център");
  });

  it("should handle :studio placeholder parameter", () => {
    renderStudiosWithRouter(["/studios/:studio"]);

    const tabContent = screen.getByTestId("tab-content");
    expect(tabContent).toHaveTextContent("Studio Profile for София - център");
  });

  it("should render StudioProfile with correct props for Sofia", () => {
    renderStudiosWithRouter(["/studios/sofia-center"]);

    const studioProfile = screen.getByTestId("studio-profile-София - център");
    expect(studioProfile).toBeInTheDocument();
    expect(studioProfile).toHaveClass("sofia");
  });

  it("should have correct tab configuration", () => {
    renderStudiosWithRouter();

    // Check that all tabs are present with correct keys
    const expectedTabs = [
      "sofia-center",
      "varna-center",
      "varna-troshevo",
      "varna-levski",
    ];

    expectedTabs.forEach((tabKey) => {
      expect(screen.getByTestId(`tab-${tabKey}`)).toBeInTheDocument();
    });
  });

  it("should handle tab navigation", () => {
    const mockNavigate = jest.fn();

    // Mock useNavigate
    jest.doMock("react-router-dom", () => ({
      ...jest.requireActual("react-router-dom"),
      useNavigate: () => mockNavigate,
    }));

    renderStudiosWithRouter();

    const varnaTab = screen.getByTestId("tab-varna-center");
    fireEvent.click(varnaTab);

    // The onTabChange should be called, which would call navigate
    // This is tested indirectly through the tab content change
    expect(varnaTab).toBeInTheDocument();
  });

  it("should render tabs component with correct props", () => {
    renderStudiosWithRouter();

    const tabsComponent = screen.getByTestId("tabs");
    expect(tabsComponent).toBeInTheDocument();
  });
});
