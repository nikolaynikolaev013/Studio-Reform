import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { ContactUs } from "../ContactUs";
import toast from "react-hot-toast";

// Mock react-hot-toast
jest.mock("react-hot-toast", () => ({
  __esModule: true,
  default: {
    success: jest.fn(),
    error: jest.fn(),
  },
}));

// Mock fetch
global.fetch = jest.fn();

const mockToast = toast as jest.Mocked<typeof toast>;
const mockFetch = global.fetch as jest.MockedFunction<typeof fetch>;

const renderContactUs = () => {
  return render(
    <MemoryRouter>
      <ContactUs />
    </MemoryRouter>
  );
};

describe("ContactUs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetch.mockClear();
  });

  it("should render contact form with all fields", () => {
    renderContactUs();

    expect(screen.getByPlaceholderText("Вашите имена")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Вашият имейл")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Съобщение...")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Изпрати запитване" })
    ).toBeInTheDocument();
  });

  it("should show validation error for empty name field", async () => {
    renderContactUs();

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Полето 'Имена' е задължително")
      ).toBeInTheDocument();
    });
  });

  it("should show validation error for empty email field", async () => {
    renderContactUs();

    const nameInput = screen.getByPlaceholderText("Вашите имена");
    fireEvent.change(nameInput, { target: { value: "Test Name" } });

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Полето 'Имейл' е задължително")
      ).toBeInTheDocument();
    });
  });

  it("should show validation error for empty message field", async () => {
    renderContactUs();

    const nameInput = screen.getByPlaceholderText("Вашите имена");
    const emailInput = screen.getByPlaceholderText("Вашият имейл");

    fireEvent.change(nameInput, { target: { value: "Test Name" } });
    fireEvent.change(emailInput, { target: { value: "test@example.com" } });

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(
        screen.getByText("Полето 'Съобщение' е задължително")
      ).toBeInTheDocument();
    });
  });

  it("should submit form successfully with valid data", async () => {
    mockFetch.mockResolvedValueOnce({
      ok: true,
      json: async () => ({}),
    } as Response);

    renderContactUs();

    const nameInput = screen.getByPlaceholderText("Вашите имена");
    const emailInput = screen.getByPlaceholderText("Вашият имейл");
    const messageInput = screen.getByPlaceholderText("Съобщение...");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockFetch).toHaveBeenCalledWith(
        "https://formspree.io/f/xqapyrae",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: "John Doe",
            email: "john@example.com",
            message: "Test message",
          }),
        }
      );
    });

    await waitFor(() => {
      expect(mockToast.success).toHaveBeenCalledWith(
        "Съобщението Ви беше изпратено успешно!"
      );
    });
  });

  it("should show error message on form submission failure", async () => {
    mockFetch.mockRejectedValueOnce(new Error("Network error"));

    renderContactUs();

    const nameInput = screen.getByPlaceholderText("Вашите имена");
    const emailInput = screen.getByPlaceholderText("Вашият имейл");
    const messageInput = screen.getByPlaceholderText("Съобщение...");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockToast.error).toHaveBeenCalledWith(
        "За съжаление не успехме да изпратим съобщението. Моля опитайте по-късно."
      );
    });
  });

  it("should show loading state during form submission", async () => {
    // Mock a delayed response
    mockFetch.mockImplementation(
      () =>
        new Promise((resolve) =>
          setTimeout(
            () =>
              resolve({
                ok: true,
                json: async () => ({}),
              } as Response),
            100
          )
        )
    );

    renderContactUs();

    const nameInput = screen.getByPlaceholderText("Вашите имена");
    const emailInput = screen.getByPlaceholderText("Вашият имейл");
    const messageInput = screen.getByPlaceholderText("Съобщение...");

    fireEvent.change(nameInput, { target: { value: "John Doe" } });
    fireEvent.change(emailInput, { target: { value: "john@example.com" } });
    fireEvent.change(messageInput, { target: { value: "Test message" } });

    const submitButton = screen.getByRole("button", {
      name: "Изпрати запитване",
    });
    fireEvent.click(submitButton);

    // Wait for submission to complete
    await waitFor(() => {
      expect(mockToast.success).toHaveBeenCalled();
    });
  });

  it("should accept valid email formats", async () => {
    renderContactUs();

    const emailInput = screen.getByPlaceholderText("Вашият имейл");

    // Test various valid email formats
    const validEmails = [
      "test@example.com",
      "user.name@domain.co.uk",
      "user+tag@example.org",
      "user123@test-domain.com",
    ];

    for (const email of validEmails) {
      fireEvent.change(emailInput, { target: { value: email } });

      const nameInput = screen.getByPlaceholderText("Вашите имена");
      const messageInput = screen.getByPlaceholderText("Съобщение...");

      fireEvent.change(nameInput, { target: { value: "Test Name" } });
      fireEvent.change(messageInput, { target: { value: "Test message" } });

      const submitButton = screen.getByRole("button", {
        name: "Изпрати запитване",
      });
      fireEvent.click(submitButton);

      // Should not show email validation error
      await waitFor(() => {
        expect(
          screen.queryByText("Невалиден имейл адрес")
        ).not.toBeInTheDocument();
      });
    }
  });
});
