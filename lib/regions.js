import fs from "fs";
import path from "path";
import matter from "gray-matter";

const regionsDirectory = path.join(process.cwd(), "regions");

/**
 * This function is used to analyse all the front matter in the `/regions/` folder and
 * returns an array of objects for each region of that country. An example object is: 
 * 
  [
    {
      id: '001_Hokkaido',
      country: 'Japan',
      region: 'Hokkaido',
      gridLinkUrl: '/japan/hokkaido',
      gridLinkImage: '/japan-hokkaido.jpg'
    }
  ]
 * @param {String} country 
 * @returns 
 */
export function getCountryRegionData(country) {
  const countryDirectory = path.join(regionsDirectory, country);
  const fileNames = fs.readdirSync(countryDirectory);
  const regionData = fileNames.map((fileName) => {
    let id = fileName.replace(/\.md$/, "");
    let fullPath = path.join(countryDirectory, fileName);
    let fileContents = fs.readFileSync(fullPath, "utf8");
    let matterResult = matter(fileContents);

    return {
      id,
      ...matterResult.data,
    };
  });

  console.log(regionData);

  return regionData;
}
