import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Layout } from "../Layout";

// Mock child components
jest.mock("../Navigation", () => ({
  Navigation: ({ className }: any) => (
    <nav data-testid="navigation" className={className}>
      Navigation
    </nav>
  ),
}));

jest.mock("../../../transparentPanel/TransparentPanel", () => ({
  TransparentPanel: ({ children, className }: any) => (
    <div data-testid="transparent-panel" className={className}>
      {children}
    </div>
  ),
}));

jest.mock("../../icons/Icon", () => ({
  Icon: ({ type, width, height }: any) => (
    <div data-testid={`icon-${type}`} style={{ width, height }}>
      Icon
    </div>
  ),
  IconType: {
    ReformPilatesLogo: "ReformPilatesLogo",
    Facebook: "Facebook",
    Instagram: "Instagram",
    TikTok: "TikTok",
    MailIcon: "MailIcon",
  },
}));

const renderLayout = (children: React.ReactNode = <div>Test Content</div>) => {
  return render(
    <MemoryRouter>
      <Layout>{children}</Layout>
    </MemoryRouter>
  );
};

describe("Layout", () => {
  it("should render navigation component", () => {
    renderLayout();

    expect(screen.getByTestId("navigation")).toBeInTheDocument();
  });

  it("should render header section", () => {
    const { container } = renderLayout();

    const header = container.querySelector("header");
    expect(header).toBeInTheDocument();
  });

  it("should render children content", () => {
    const testContent = <div data-testid="test-content">Test Content</div>;
    renderLayout(testContent);

    expect(screen.getByTestId("test-content")).toBeInTheDocument();
  });

  it("should render footer section", () => {
    const { container } = renderLayout();

    const footer = container.querySelector("footer");
    expect(footer).toBeInTheDocument();
  });

  it("should render logo icons", () => {
    renderLayout();

    const logoIcons = screen.getAllByTestId("icon-ReformPilatesLogo");
    expect(logoIcons.length).toBeGreaterThan(0);
  });

  it("should render multiple children", () => {
    const multipleChildren = (
      <>
        <div data-testid="child-1">Child 1</div>
        <div data-testid="child-2">Child 2</div>
      </>
    );

    renderLayout(multipleChildren);

    expect(screen.getByTestId("child-1")).toBeInTheDocument();
    expect(screen.getByTestId("child-2")).toBeInTheDocument();
  });

  it("should render social media icons", () => {
    renderLayout();

    expect(screen.getByTestId("icon-Facebook")).toBeInTheDocument();
    expect(screen.getByTestId("icon-Instagram")).toBeInTheDocument();
    expect(screen.getByTestId("icon-TikTok")).toBeInTheDocument();
    expect(screen.getByTestId("icon-MailIcon")).toBeInTheDocument();
  });

  it("should render transparent panel", () => {
    renderLayout();

    expect(screen.getByTestId("transparent-panel")).toBeInTheDocument();
  });
});
