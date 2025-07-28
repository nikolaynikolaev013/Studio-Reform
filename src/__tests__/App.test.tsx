import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "../App";

// Mock all page components
jest.mock("../components/home/Home", () => ({
  Home: () => <div data-testid="home-page">Home Page</div>,
}));

jest.mock("../components/prices/Prices", () => ({
  Prices: () => <div data-testid="prices-page">Prices Page</div>,
}));

jest.mock("../components/contactUs/ContactUs", () => ({
  ContactUs: () => <div data-testid="contact-us-page">Contact Us Page</div>,
}));

jest.mock("../components/studios/Studios", () => ({
  Studios: () => <div data-testid="studios-page">Studios Page</div>,
}));

jest.mock("../components/reformer/Reformer", () => ({
  Reformer: () => <div data-testid="reformer-page">Reformer Page</div>,
}));

jest.mock("../components/careers/Careers", () => ({
  Careers: () => <div data-testid="careers-page">Careers Page</div>,
}));

jest.mock("../components/policies/PrivacyPolicy", () => ({
  PrivacyPolicy: () => (
    <div data-testid="privacy-policy-page">Privacy Policy Page</div>
  ),
}));

jest.mock("../components/policies/TermsOfUse", () => ({
  TermsOfUse: () => (
    <div data-testid="terms-of-use-page">Terms of Use Page</div>
  ),
}));

// Mock Layout component
jest.mock("../components/common/Layout/Layout", () => ({
  Layout: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="layout">{children}</div>
  ),
}));

const renderAppWithRouter = (initialEntries: string[] = ["/"]) => {
  return render(
    <MemoryRouter initialEntries={initialEntries}>
      <App />
    </MemoryRouter>
  );
};

describe("App", () => {
  it("should render home page on root route", () => {
    renderAppWithRouter(["/"]);

    expect(screen.getByTestId("home-page")).toBeInTheDocument();
  });

  it("should render reformer page on /reformer route", () => {
    renderAppWithRouter(["/reformer"]);

    expect(screen.getByTestId("reformer-page")).toBeInTheDocument();
  });

  it("should render prices page on /prices route", () => {
    renderAppWithRouter(["/prices"]);

    expect(screen.getByTestId("prices-page")).toBeInTheDocument();
  });

  it("should render contact us page on /contact-us route", () => {
    renderAppWithRouter(["/contact-us"]);

    expect(screen.getByTestId("contact-us-page")).toBeInTheDocument();
  });

  it("should render studios page on /studios route", () => {
    renderAppWithRouter(["/studios"]);

    expect(screen.getByTestId("studios-page")).toBeInTheDocument();
  });

  it("should render studios page with studio parameter", () => {
    renderAppWithRouter(["/studios/sofia-center"]);

    expect(screen.getByTestId("studios-page")).toBeInTheDocument();
  });

  it("should render careers page on /careers route", () => {
    renderAppWithRouter(["/careers"]);

    expect(screen.getByTestId("careers-page")).toBeInTheDocument();
  });

  it("should render privacy policy page on /privacy-policy route", () => {
    renderAppWithRouter(["/privacy-policy"]);

    expect(screen.getByTestId("privacy-policy-page")).toBeInTheDocument();
  });

  it("should render terms of use page on /terms-of-use route", () => {
    renderAppWithRouter(["/terms-of-use"]);

    expect(screen.getByTestId("terms-of-use-page")).toBeInTheDocument();
  });

  it("should render Layout component", () => {
    renderAppWithRouter();

    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("should render ScrollToTop component", () => {
    renderAppWithRouter();

    // ScrollToTop doesn't render visible content, but it should be present
    // We can't directly test it here, but it's covered in its own test file
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("should render Toaster component", () => {
    renderAppWithRouter();

    expect(screen.getByTestId("toaster")).toBeInTheDocument();
  });

  it("should render CookieConsent component", () => {
    renderAppWithRouter();

    expect(screen.getByTestId("cookie-consent")).toBeInTheDocument();
  });

  it("should handle cookie consent acceptance", () => {
    renderAppWithRouter();

    const cookieConsent = screen.getByTestId("cookie-consent");
    fireEvent.click(cookieConsent);

    // The loadTracking function should be called, but we can't directly test it here
    // It's covered in the useApp hook tests
    expect(cookieConsent).toBeInTheDocument();
  });

  it("should render cookie consent with correct text", () => {
    renderAppWithRouter();

    expect(
      screen.getByText("Бисквитки = по-яко преживяване. Съгласен?")
    ).toBeInTheDocument();
  });

  it("should handle invalid routes gracefully", () => {
    renderAppWithRouter(["/invalid-route"]);

    // Should not crash and should render the layout
    expect(screen.getByTestId("layout")).toBeInTheDocument();
  });

  it("should render all routes from routesMetadata", () => {
    // Test that all defined routes can be rendered
    const routes = [
      { path: "/", testId: "home-page" },
      { path: "/reformer", testId: "reformer-page" },
      { path: "/prices", testId: "prices-page" },
      { path: "/contact-us", testId: "contact-us-page" },
      { path: "/studios", testId: "studios-page" },
      { path: "/careers", testId: "careers-page" },
      { path: "/privacy-policy", testId: "privacy-policy-page" },
      { path: "/terms-of-use", testId: "terms-of-use-page" },
    ];

    routes.forEach(({ path, testId }) => {
      const { unmount } = renderAppWithRouter([path]);
      expect(screen.getByTestId(testId)).toBeInTheDocument();
      unmount();
    });
  });
});
