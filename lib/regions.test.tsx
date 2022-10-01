import { LinkCardData } from "../components/LinkCardData";
import { getCountryRegionData } from "./regions";

jest.mock("fs");

describe("getCountryRegionData", () => {

  let posts: { [key: string]: LinkCardData }[];

  beforeAll(() => {
    posts = getCountryRegionData("japan");
  });

  it("should return country in region data", () => {
    expect(posts[0].country).toEqual("Japan");
  });

  it("should return region in region data", () => {
    expect(posts[0].region).toEqual("Hokkaido");
  });

  it("should return grid link URL in region data", () => {
    expect(posts[0].gridLinkUrl).toEqual("/japan/hokkaido");
  });

  it("should return grid link image in region data", () => {
    expect(posts[0].gridLinkImage).toEqual("/japan-hokkaido.jpg");
  });
});
