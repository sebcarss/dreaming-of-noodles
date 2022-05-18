import {
  getAllPostIds,
  getSortedPostsFrontMatter,
  getPostMatterAndContent,
} from "./posts";

jest.mock("fs");

describe("getAllPostIds", () => {
  it("should return all posts ids", () => {
    const posts = getAllPostIds();

    expect(posts).toEqual(
      expect.arrayContaining([
        {
          params: {
            id: "2019-01-01-hello-world-1",
          },
        },
        {
          params: {
            id: "2019-01-02-hello-world-2",
          },
        },
        {
          params: {
            id: "2019-01-03-hello-world-3",
          },
        },
      ])
    );
  });
});

describe("getSortedPostsFrontMatter", () => {
  it("should return all posts front matter sorted", () => {
    const posts = getSortedPostsFrontMatter();

    // Test all posts data is returned
    expect(posts).toEqual(
      expect.arrayContaining([
        {
          title: "Hello World 2",
          id: "2019-01-02-hello-world-2",
          date: "2019-01-02",
          tags: ["hello", "world"],
          published: true,
          excerpt: "Hello excerpt",
        },
        {
          title: "Hello World 1",
          id: "2019-01-01-hello-world-1",
          date: "2019-01-01",
          tags: ["hello", "world"],
          published: true,
          excerpt: "Hello excerpt",
        },
      ])
    );

    // Check posts are sorted by date
    expect(posts[0].title).toBe("Hello World 2");
    expect(posts[1].title).toBe("Hello World 1");
  });
});

describe("getPostMatterAndContent", () => {
  it("should return post front matter and content HTML", async () => {
    const post = getPostMatterAndContent("2019-01-01-hello-world-1");

    await expect(Promise.resolve(post)).resolves.toEqual({
      contentHtml: "<p>Hello World 1</p>\n",
      date: "2019-01-01",
      excerpt: "Hello excerpt",
      id: "2019-01-01-hello-world-1",
      published: true,
      tags: ["hello", "world"],
      title: "Hello World 1",      
    });
  });
});
