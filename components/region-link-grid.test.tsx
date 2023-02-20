import React from "react";
import { render, screen } from "@testing-library/react";
import RegionLinkGrid from "./region-link-grid";
import { LinkCardData } from "../types/LinkCardData";

const testLinkData: LinkCardData[] = [
  {
    frontmatter: {
      country: "Japan",
      region: "Hokkaido",
      gridLinkImage: "japan-hokkaido.jpg",
      gridLinkUrl: "/japan/hokkaido",
    },
    content: "\nWelcome to Hokkaido!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Aomori",
      gridLinkImage: "japan-aomori.jpg",
      gridLinkUrl: "/japan/aomori",
    },
    content: "\nWelcome to Aomori!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Iwate",
      gridLinkImage: "japan-iwate.jpg",
      gridLinkUrl: "/japan/iwate",
    },
    content: "\nWelcome to Iwate!"
  },
  {
    frontmatter: {
      country: "Japan",
      region: "Miyagi",
      gridLinkImage: "japan-miyagi.jpg",
      gridLinkUrl: "/japan/miyagi",
    },
    content: "\nWelcome to Myagi"
  },
];

describe("ImageLinkGrid component", () => {
    it("should render header", () => {
        render(<RegionLinkGrid linkData={testLinkData} heading="test header"/>);
        screen.getByText("test header").textContent;
    });

    it("should render 4 cards", () => {
        render(<RegionLinkGrid linkData={testLinkData} heading="not important header"/>);
        const cards = screen.getAllByRole('link');
        expect(cards.length).toBe(4);
    });

    it("should render region title", () => {
      render(<RegionLinkGrid linkData={testLinkData} heading="not important header"/>);
      const cards = screen.getAllByRole('link');
      expect(cards[0].textContent).toBe("Hokkaido");
      expect(cards[3].textContent).toBe("Miyagi");
    });

    it("should render region URL", () => {
      render(<RegionLinkGrid linkData={testLinkData} heading="not important header"/>);
      const link = screen.getByText('Hokkaido').closest('a').getAttribute('href');
      expect(link).toBe('/japan/hokkaido');
    });
});