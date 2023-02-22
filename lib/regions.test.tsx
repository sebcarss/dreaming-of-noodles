import { LinkCardData } from "../types/LinkCardData";
import { getCountryRegionData } from "./regions";

jest.mock("fs");

describe("getCountryRegionData", () => {

  let posts: LinkCardData[];

  beforeAll(async () => {
    posts = await getCountryRegionData("japan");
  });

  it("should return country in frontmatter", () => {
    expect(posts[0].frontmatter.country).toEqual("Japan");
  });

  it("should return region in frontmatter", () => {
    expect(posts[0].frontmatter.region).toEqual("Hokkaido");
  });

  it("should return grid link URL in frontmatter", () => {
    expect(posts[0].frontmatter.gridLinkUrl).toEqual("/japan/hokkaido");
  });

  it("should return grid link image in frontmatter", () => {
    expect(posts[0].frontmatter.gridLinkImage).toEqual("/japan-hokkaido.jpg");
  });

  it("should return splash image in frontmatter", () => {
    expect(posts[0].frontmatter.splashImage).toEqual("/splash-image.webp");
  });

  it("should return splash image alt in frontmatter", () => {
    expect(posts[0].frontmatter.splashImageAlt).toEqual("Splash Image Alt");
  });

  it("should return the HTML content from the markdown file", () => {
    expect(posts[0].content).toEqual("<p>Welcome to Hokkaido!</p>\n");
  });
});
