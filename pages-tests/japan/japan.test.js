import React from "react";
import { render, screen } from "@testing-library/react";
import Japan from "../../pages/japan";

const originalEnv = process.env;

const linkData = [
  {
    country: "Japan",
    region: "Hokkaido",
    gridLinkImage: "japan-hokkaido.jpg",
    gridLinkUrl: "/japan/hokkaido",
  },
  {
    country: "Japan",
    region: "Aomori",
    gridLinkImage: "japan-aomori.jpg",
    gridLinkUrl: "/japan/aomori",
  },
  {
    country: "Japan",
    region: "Iwate",
    gridLinkImage: "japan-iwate.jpg",
    gridLinkUrl: "/japan/iwate",
  },
  {
    country: "Japan",
    region: "Miyagi",
    gridLinkImage: "japan-miyagi.jpg",
    gridLinkUrl: "/japan/miyagi",
  },
];

const allPostsData = [
  {
    title: "Hello World 2",
    id: "2019-01-02-hello-world-2",
    date: "2019-01-02",
    tags: ["hello", "world"],
    published: true,
    excerpt: "Hello excerpt",
    image: "https://source.unsplash.com/random/300x200",
  },
  {
    title: "Hello World 1",
    id: "2019-01-01-hello-world-1",
    date: "2019-01-01",
    tags: ["hello", "jam"],
    published: true,
    excerpt: "Hello 2 excerpt",
    image: "https://source.unsplash.com/random/300x200",
  },
];

describe("Japan component", () => {
  beforeEach(() => {
    jest.resetModules();
    process.env = {
      ...originalEnv,
      IMAGE_PATH: 'https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/',
    };
  });
  
  afterEach(() => {
    process.env = originalEnv;
  });
  
  it("should render the navbar", () => {
    render(<Japan posts={allPostsData} regionLinkData={linkData} />);
    expect(screen.getByRole("navigation")).not.toBeNull();
  });

  it("should render the title", () => {
    render(<Japan posts={allPostsData} regionLinkData={linkData} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Japan");
  });

  it('should render a prefecture section', () => {
    render(<Japan posts={allPostsData} regionLinkData={linkData} />);
    expect(screen.getAllByRole('heading', { level: 2 })[0].textContent).toBe('Japanese Prefectures');
  });

  it("should render the Japanese recipes section", () => {
    render(<Japan posts={allPostsData} regionLinkData={linkData} />);
    expect(screen.getAllByRole("heading", { level: 2 })[1].textContent).toBe("Japanese Recipes");
  });
});
