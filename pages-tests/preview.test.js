import React from "react";
import { render, screen } from "@testing-library/react";
import Home from "../pages/preview";

// TODO: Move these to __mocks__
const title = "Dreaming of Noodles";
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

describe("Home component", () => {
  it("should render the navbar", () => {
    render(<Home allPostsData={allPostsData} title={title} />);
    expect(screen.getByRole("navigation")).not.toBeNull();
  });

  it('should render an about the blog section', () => {
    render(<Home allPostsData={allPostsData} title={title} />);
    expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('Dreaming of Noodles');
  });

//   it('should render the latest recipes posts section', () => {
//     render(<Home allPostsData={allPostsData} title={title} />);
//     expect(screen.getByRole('heading', { level: 2 }).textContent).toBe('Latest Recipes');

//   });
});
