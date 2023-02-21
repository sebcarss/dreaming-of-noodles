import { LinkCardData } from "../types/LinkCardData";
import { getCountryRegionData } from "./regions";

jest.mock("fs");

describe("getCountryRegionData", () => {

  let posts: LinkCardData[];

  beforeAll(async () => {
    posts = await getCountryRegionData("japan");
  });

  it("should return country in region data", () => {
    expect(posts[0]?.frontmatter.country).toEqual("Japan");
  });

  it("should return region in region data", () => {
    expect(posts[0]?.frontmatter.region).toEqual("Hokkaido");
  });

  it("should return grid link URL in region data", () => {
    expect(posts[0]?.frontmatter.gridLinkUrl).toEqual("/japan/hokkaido");
  });

  it("should return grid link image in region data", () => {
    expect(posts[0]?.frontmatter.gridLinkImage).toEqual("/japan-hokkaido.jpg");
  });

  it("should return the HTML content from the markdown file", () => {
    expect(posts[0]?.content).toEqual("<p>Welcome to Hokkaido!</p>\n");
  });
});
