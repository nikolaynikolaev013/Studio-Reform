import { render, screen } from "@testing-library/react";
import { Icon, IconType } from "../Icon";

// Mock the base icon components
jest.mock("../baseIcons/InstagramIcon", () => ({
  InstagramIcon: () => <div data-testid="instagram-icon">Instagram</div>,
}));

jest.mock("../baseIcons/TikTokIcon", () => ({
  TikTokIcon: () => <div data-testid="tiktok-icon">TikTok</div>,
}));

jest.mock("../baseIcons/MailIcon", () => ({
  MailIcon: () => <div data-testid="mail-icon">Mail</div>,
}));

jest.mock("../baseIcons/PhoneIcon", () => ({
  PhoneIcon: () => <div data-testid="phone-icon">Phone</div>,
}));

jest.mock("../baseIcons/ReformPilatesLogo", () => ({
  ReformPilatesLogo: () => <div data-testid="logo-icon">Logo</div>,
}));

describe("Icon", () => {
  it("should render with Instagram type", () => {
    const { container } = render(<Icon type={IconType.Instagram} />);

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toBeInTheDocument();
    expect(screen.getByTestId("instagram-icon")).toBeInTheDocument();
  });

  it("should render with TikTok type", () => {
    const { container } = render(<Icon type={IconType.TikTok} />);

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toBeInTheDocument();
    expect(screen.getByTestId("tiktok-icon")).toBeInTheDocument();
  });

  it("should render with MailIcon type", () => {
    const { container } = render(<Icon type={IconType.MailIcon} />);

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toBeInTheDocument();
    expect(screen.getByTestId("mail-icon")).toBeInTheDocument();
  });

  it("should render with Phone type", () => {
    const { container } = render(<Icon type={IconType.Phone} />);

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toBeInTheDocument();
    expect(screen.getByTestId("phone-icon")).toBeInTheDocument();
  });

  it("should apply custom className", () => {
    const customClass = "custom-icon-class";
    const { container } = render(
      <Icon type={IconType.Instagram} className={customClass} />
    );

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toHaveClass(customClass);
  });

  it("should render without className", () => {
    const { container } = render(<Icon type={IconType.MailIcon} />);

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toBeInTheDocument();
  });

  it("should apply width and height styles", () => {
    const width = "50px";
    const height = "40px";
    const { container } = render(
      <Icon type={IconType.Instagram} width={width} height={height} />
    );

    const iconContainer = container.querySelector(".root");
    expect(iconContainer).toHaveStyle({
      maxWidth: width,
      maxHeight: height,
    });
  });

  it("should render ReformPilatesLogo type", () => {
    render(<Icon type={IconType.ReformPilatesLogo} />);

    expect(screen.getByTestId("logo-icon")).toBeInTheDocument();
  });

  it("should handle all provided icon types", () => {
    const iconTypes = [
      IconType.Instagram,
      IconType.TikTok,
      IconType.MailIcon,
      IconType.Phone,
      IconType.ReformPilatesLogo,
    ];

    iconTypes.forEach((type) => {
      const { container } = render(<Icon type={type} />);
      const iconContainer = container.querySelector(".root");
      expect(iconContainer).toBeInTheDocument();
    });
  });
});
