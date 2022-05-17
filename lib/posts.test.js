import { getAllPostIds, getSortedPostsData } from "./posts";

jest.mock("fs");
jest.mock("gray-matter");

describe("getAllPostIds", () => {
  it("should return all posts ids", () => {
    const posts = getAllPostIds();
    expect(posts).toEqual(
      expect.arrayContaining([
        {
          params: {
            id: "2019-01-01-hello-world",
          },
        },
        {
          params: {
            id: "2019-01-02-hello-world-2",
          },
        },
      ])
    );
  });
});

// describe("getSortedPostsData", () => {
//     it("should return all posts data sorted", () => {
//         const posts = getSortedPostsData();
//         expect(posts).toEqual(
//             expect.arrayContaining([
//             {
//                 id: "2019-01-01-hello-world",
//                 title: "Hello World",
//                 date: "2019-01-01",
//                 tags: ["hello", "world"],
//                 contentHtml: "<p>Hello World</p>",
//             },
//             {
//                 id: "2019-01-02-hello-world-2",
//                 title: "Hello World 2",
//                 date: "2019-01-02",
//                 tags: ["hello", "world"],
//                 contentHtml: "<p>Hello World 2</p>",
//             },
//             ])
//         );
//     })
// })
