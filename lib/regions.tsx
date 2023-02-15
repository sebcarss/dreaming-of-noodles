import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LinkCardData } from "../types/LinkCardData";

const regionsDirectory = path.join(process.cwd(), "regions");

/**
 * This function is used to analyse all the front matter in the `/regions/` folder and
 * returns an array of objects for each region of that country. An example object is: 
 * 
  [
    {
      country: 'Japan',
      region: 'Hokkaido',
      gridLinkUrl: '/japan/hokkaido',
      gridLinkImage: '/japan-hokkaido.jpg'
    }
  ]
 * @param {String} country 
 * @returns 
 */
export function getCountryRegionData(country: string) {
  const countryDirectory = path.join(regionsDirectory, country);
  const fileNames = fs.readdirSync(countryDirectory);
  const regionData = fileNames.map((fileName) => {
    let fullPath = path.join(countryDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, "utf8");
    let matterResult = matter(fileContents);

    return {
      ...matterResult.data,
    };
  });

  console.log(regionData);

  return regionData;
}
