import { getCountryRegionData } from "../lib/regions";

jest.mock("fs");

describe("getCountryRegionData", () => {
  it("should return all region data", () => {
    const posts = getCountryRegionData("japan");

    expect(posts).toEqual(
      expect.arrayContaining([
        {
            id: "001_Hokkaido",
            country: "Japan",
            region: "Hokkaido",
            gridLinkUrl: "/japan/hokkaido",
            gridLinkImage: "/japan-hokkaido.jpg",
        },
        {
            id: "002_Aomori",
            country: "Japan",
            region: "Aomori",
            gridLinkUrl: "/japan/aomori",
            gridLinkImage: "/japan-aomori.jpg",
        },
      ])
    );
  });
});
