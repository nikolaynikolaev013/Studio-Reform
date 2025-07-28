import { render, screen, fireEvent } from "@testing-library/react";
import { Tabs } from "../Tabs";

describe("Tabs", () => {
  const mockTabs = [
    {
      key: "tab1",
      label: "Tab 1",
      children: <div data-testid="tab1-content">Tab 1 Content</div>,
    },
    {
      key: "tab2",
      label: "Tab 2",
      children: <div data-testid="tab2-content">Tab 2 Content</div>,
    },
    {
      key: "tab3",
      label: "Tab 3",
      children: <div data-testid="tab3-content">Tab 3 Content</div>,
    },
  ];

  const mockOnTabChange = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should render all tab labels", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultSelectedValue="tab1"
        onTabChange={mockOnTabChange}
      />
    );

    expect(screen.getByText("Tab 1")).toBeInTheDocument();
    expect(screen.getByText("Tab 2")).toBeInTheDocument();
    expect(screen.getByText("Tab 3")).toBeInTheDocument();
  });

  it("should render default selected tab content", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultSelectedValue="tab1"
        onTabChange={mockOnTabChange}
      />
    );

    expect(screen.getByTestId("tab1-content")).toBeInTheDocument();
    expect(screen.queryByTestId("tab2-content")).not.toBeInTheDocument();
    expect(screen.queryByTestId("tab3-content")).not.toBeInTheDocument();
  });

  it("should call onTabChange when tab is clicked", () => {
    render(
      <Tabs
        tabs={mockTabs}
        defaultSelectedValue="tab1"
        onTabChange={mockOnTabChange}
      />
    );

    const tab2Button = screen.getByText("Tab 2");
    fireEvent.click(tab2Button);

    expect(mockOnTabChange).toHaveBeenCalledWith("tab2");
  });

  it("should change active tab when clicked", () => {
    const { rerender } = render(
      <Tabs
        tabs={mockTabs}
        defaultSelectedValue="tab1"
        onTabChange={mockOnTabChange}
      />
    );

    expect(screen.getByTestId("tab1-content")).toBeInTheDocument();

    // Simulate tab change by re-rendering with new selected value
    rerender(
      <Tabs
        tabs={mockTabs}
        defaultSelectedValue="tab2"
        onTabChange={mockOnTabChange}
      />
    );

    expect(screen.getByTestId("tab2-content")).toBeInTheDocument();
    expect(screen.queryByTestId("tab1-content")).not.toBeInTheDocument();
  });
});
