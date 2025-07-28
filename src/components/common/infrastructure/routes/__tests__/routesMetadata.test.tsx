import { routesMetadata, IRoute } from "../routesMetadata";
import { routePaths } from "../routePaths";

// Mock the page components
jest.mock("../../../../home/Home", () => ({
  Home: () => <div data-testid="home-page">Home</div>,
}));

jest.mock("../../../../prices/Prices", () => ({
  Prices: () => <div data-testid="prices-page">Prices</div>,
}));

jest.mock("../../../../contactUs/ContactUs", () => ({
  ContactUs: () => <div data-testid="contact-us-page">ContactUs</div>,
}));

jest.mock("../../../../studios/Studios", () => ({
  Studios: () => <div data-testid="studios-page">Studios</div>,
}));

jest.mock("../../../../reformer/Reformer", () => ({
  Reformer: () => <div data-testid="reformer-page">Reformer</div>,
}));

jest.mock("../../../../careers/Careers", () => ({
  Careers: () => <div data-testid="careers-page">Careers</div>,
}));

jest.mock("../../../../policies/PrivacyPolicy", () => ({
  PrivacyPolicy: () => (
    <div data-testid="privacy-policy-page">PrivacyPolicy</div>
  ),
}));

jest.mock("../../../../policies/TermsOfUse", () => ({
  TermsOfUse: () => <div data-testid="terms-of-use-page">TermsOfUse</div>,
}));

describe("routesMetadata", () => {
  it("should have correct number of routes", () => {
    expect(routesMetadata).toHaveLength(8);
  });

  it("should have home route configured correctly", () => {
    const homeRoute = routesMetadata.find((route) => route.name === "home");
    expect(homeRoute).toBeDefined();
    expect(homeRoute?.path).toBe(routePaths.home);
    expect(homeRoute?.element).toBeDefined();
  });

  it("should have reformer route configured correctly", () => {
    const reformerRoute = routesMetadata.find(
      (route) => route.name === "reformer"
    );
    expect(reformerRoute).toBeDefined();
    expect(reformerRoute?.path).toBe(routePaths.reformer);
    expect(reformerRoute?.element).toBeDefined();
  });

  it("should have prices route configured correctly", () => {
    const pricesRoute = routesMetadata.find((route) => route.name === "prices");
    expect(pricesRoute).toBeDefined();
    expect(pricesRoute?.path).toBe(routePaths.prices);
    expect(pricesRoute?.element).toBeDefined();
  });

  it("should have contact-us route configured correctly", () => {
    const contactRoute = routesMetadata.find(
      (route) => route.name === "contact-us"
    );
    expect(contactRoute).toBeDefined();
    expect(contactRoute?.path).toBe(routePaths.contacts);
    expect(contactRoute?.element).toBeDefined();
  });

  it("should have studio route configured correctly", () => {
    const studioRoute = routesMetadata.find((route) => route.name === "studio");
    expect(studioRoute).toBeDefined();
    expect(studioRoute?.path).toBe(routePaths.studios);
    expect(studioRoute?.element).toBeDefined();
  });

  it("should have careers route configured correctly", () => {
    const careersRoute = routesMetadata.find(
      (route) => route.name === "Стани част от нашият екип"
    );
    expect(careersRoute).toBeDefined();
    expect(careersRoute?.path).toBe(routePaths.careers);
    expect(careersRoute?.element).toBeDefined();
  });

  it("should have privacy policy route configured correctly", () => {
    const privacyRoute = routesMetadata.find(
      (route) => route.name === "Политика за поверителност"
    );
    expect(privacyRoute).toBeDefined();
    expect(privacyRoute?.path).toBe(routePaths.privacyPolicy);
    expect(privacyRoute?.element).toBeDefined();
  });

  it("should have terms of use route configured correctly", () => {
    const termsRoute = routesMetadata.find(
      (route) => route.name === "Общи условия за ползване"
    );
    expect(termsRoute).toBeDefined();
    expect(termsRoute?.path).toBe(routePaths.termsOfUse);
    expect(termsRoute?.element).toBeDefined();
  });

  it("should have all routes with valid IRoute interface", () => {
    routesMetadata.forEach((route: IRoute) => {
      expect(route.name).toBeDefined();
      expect(typeof route.name).toBe("string");
      expect(route.path).toBeDefined();
      expect(typeof route.path).toBe("string");
      expect(route.element).toBeDefined();
    });
  });
});
