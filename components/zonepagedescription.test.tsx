import React from "react";
import { render, screen } from "@testing-library/react";
import ZonePageDescription from "./zonepagedescription";

const title = "Japan";

describe("ZonePageDescription component", () => {
  it("should render a title", () => {
    render(<ZonePageDescription title={title}>Child HTML</ZonePageDescription>);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Japan");
  });

  it('should display the markdown content', () => {
    render(<ZonePageDescription title={title}>Markdown content</ZonePageDescription>);
    expect(screen.getByText("Markdown content")).not.toBeNull();
  });
});
