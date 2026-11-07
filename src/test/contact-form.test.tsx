import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { ContactForm } from "@/components/site/ContactForm";

describe("ContactForm", () => {
  it("submits the inquiry to the backend API instead of opening a mailto link", async () => {
    const fetchMock = vi.fn().mockResolvedValue(
      new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    vi.stubGlobal("fetch", fetchMock);

    render(<ContactForm />);

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: "Jane Doe" } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: "jane@example.com" } });
    fireEvent.change(screen.getByLabelText(/project type/i), { target: { value: "Website" } });
    fireEvent.change(screen.getByLabelText(/project description/i), {
      target: { value: "We need a modern website for our business with a booking form and key pages." },
    });

    fireEvent.click(screen.getByRole("button", { name: /send project inquiry/i }));

    await waitFor(() => {
      expect(fetchMock).toHaveBeenCalled();
    });

    expect(fetchMock.mock.calls[0][0]).toBe("http://localhost:4000/api/inquiries");
    expect(fetchMock.mock.calls[0][1]).toMatchObject({
      method: "POST",
      headers: { "Content-Type": "application/json" },
    });

    expect(window.location.href).not.toContain("mailto:");
  });
});
