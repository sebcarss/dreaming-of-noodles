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

describe("getSortedPostsFrontMatter returns front matter filtered and sorted", () => {
  /**
   * Note that in fs.js (__Mocks__) "Hello World 3" has published=false so should be filtered out of the posts
   */
  it('should return all published posts', () => {
    const posts = getSortedPostsFrontMatter();
    const postTitles = posts.map((post) => post.title);

    expect(postTitles).not.toContain("Hello World 3");
  });

  /**
   * fs.js (__mocks__) has mocked markdown files
   */
  it('should return all posts sorted by date descending', () => {
    const posts = getSortedPostsFrontMatter();
    expect(posts[0].title).toBe('Hello World 2');
    expect(posts[1].title).toBe('Hello World 1');
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
