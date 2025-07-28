import "@testing-library/jest-dom";

// Polyfill for TextEncoder/TextDecoder
const { TextEncoder, TextDecoder } = require("util");
(global as any).TextEncoder = TextEncoder;
(global as any).TextDecoder = TextDecoder;

// Mock IntersectionObserver
(global as any).IntersectionObserver = class IntersectionObserver {
  constructor() {}
  observe() {
    return null;
  }
  disconnect() {
    return null;
  }
  unobserve() {
    return null;
  }
};

// Mock window.scrollTo
Object.defineProperty(window, "scrollTo", {
  value: jest.fn(),
  writable: true,
});

// Mock fetch
global.fetch = jest.fn();

// Mock react-cookie-consent
jest.mock("react-cookie-consent", () => ({
  __esModule: true,
  default: ({ children, onAccept }: any) => {
    const React = require("react");
    return React.createElement(
      "div",
      {
        "data-testid": "cookie-consent",
        onClick: onAccept,
      },
      children
    );
  },
  Cookies: {
    get: jest.fn(),
  },
}));

// Mock react-hot-toast
jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
  Toaster: () => {
    const React = require("react");
    return React.createElement("div", { "data-testid": "toaster" });
  },
}));

// Mock react-spinners
jest.mock("react-spinners", () => ({
  MoonLoader: ({ loading }: { loading: boolean }) => {
    const React = require("react");
    return loading
      ? React.createElement(
          "div",
          { "data-testid": "moon-loader" },
          "Loading..."
        )
      : null;
  },
}));
