import { getAllTags, getAllTagLinkData } from "./tags";

jest.mock("./posts", () => {
  return {
    getAllPostIds: jest.fn().mockReturnValue([
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
    ]),
    getSortedPostsFrontMatter: jest.fn().mockReturnValue([
      {
        title: "Hello World 2",
        id: "2019-01-02-hello-world-2",
        date: "2019-01-02",
        tags: ["Hello", "world"],
        published: true,
        excerpt: "Hello excerpt",
      },
      {
        title: "Hello World 1",
        id: "2019-01-01-hello-world-1",
        date: "2019-01-01",
        tags: ["hello", "jam tart"],
        published: true,
        excerpt: "Hello excerpt",
      },
    ]),
  };
});

describe("getAllTags", () => {
  it("should return all tags in kebab-case and counts for all posts", () => {
    getAllTags().then((tags) => {
      // Check correct items in object
      expect(tags).toEqual(
        expect.objectContaining({
          hello: 2,
          world: 1,
          "jam-tart": 1,
        })
      );

      // Check order of tags in array
      expect(Object.keys(tags)[0]).toEqual("hello");
      expect(Object.keys(tags)[1]).toEqual("jam-tart");
      expect(Object.keys(tags)[2]).toEqual("world");
    });
  });
});

describe("should return all tag link data", () => {
  getAllTagLinkData().then((tags) => {
    // Check correct items in object
    expect(tags).toEqual(
      expect.objectContaining([
        {
          slug: "hello",
          title: "Hello",
        },
        {
          slug: "jam-tart",
          title: "Jam Tart",
        },
        {
          slug: "world",
          title: "World",
        },
      ])
    );
  });
});
