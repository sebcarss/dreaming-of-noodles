import React from "react";
import { render, screen } from "@testing-library/react";
import ZonePageDescription from "./zonepagedescription";

const originalEnv = process.env;
const image = "tomato-ramen-strawberry-custard-unsplash.jpg";
const alt = "random image";
const title = "Japan";

describe("ZonePageDescription component", () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      IMAGE_PATH:
        "https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/",
    };
  });

  afterEach(() => {
    process.env = originalEnv;
  });

  it("should render an image", () => {
    render(<ZonePageDescription image={image} alt={alt} />);
    expect(screen.getByRole("img")).not.toBeNull();
  });

  it("should render a title", () => {
    render(<ZonePageDescription title={title} image={image} alt={alt} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Japan");
  });
});
