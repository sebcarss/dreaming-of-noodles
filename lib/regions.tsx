import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LinkCardData } from "../components/LinkCardData";

const regionsDirectory: string = path.join(process.cwd(), "regions");

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
  const countryDirectory: string = path.join(regionsDirectory, country);
  const fileNames: string[] = fs.readdirSync(countryDirectory);
  const regionData: {[key: string]: LinkCardData}[] = fileNames.map((fileName) => {
    let fullPath: string = path.join(countryDirectory, fileName);
    let fileContents: string = fs.readFileSync(fullPath, "utf8");
    let matterResult: matter.GrayMatterFile<string> = matter(fileContents);

    return {
      ...matterResult.data,
    };
  });

  return regionData;
}
