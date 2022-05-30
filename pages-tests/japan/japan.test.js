import React from "react";
import { render, screen } from "@testing-library/react";
import Japan from "../../pages/japan";

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
  it("should render the navbar", () => {
    render(<Japan posts={allPostsData} />);
    expect(screen.getByRole("navigation")).not.toBeNull();
  });

  it("should render the title", () => {
    render(<Japan posts={allPostsData} />);
    expect(screen.getByRole("heading", { level: 1 }).textContent).toBe("Japan");
  });

  it('should render a prefecture section', () => {
    render(<Japan posts={allPostsData} />);
    expect(screen.getAllByRole('heading', { level: 2 })[0].textContent).toBe('Japanese Prefectures');
  });

  it("should render the Japanese recipes section", () => {
    render(<Japan posts={allPostsData} />);
    expect(screen.getAllByRole("heading", { level: 2 })[1].textContent).toBe("Japanese Recipes");
  });
});
