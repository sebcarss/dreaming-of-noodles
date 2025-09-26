import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { LinkCardData } from "../types/LinkCardData";
import { remark } from "remark";
import html from 'remark-html';

const regionsDirectory = path.join(process.cwd(), "regions");

/**
 * This function is used to analyse all the front matter in the `/regions/` folder and
 * returns an array of objects for each region of that country. An example object is: 
 * 
  [
    {
      frontmatter: {
        country: 'Japan',
        region: 'Hokkaido',
        gridLinkUrl: '/japan/hokkaido',
        gridLinkImage: '/japan-hokkaido.jpg'
      },
      content: "<p>Welcome to Hokkaido!</p>"
    }
  ]
 * @param {String} country 
 * @returns 
 */
export async function getCountryRegionData(country: string): Promise<LinkCardData[]> {
  const countryDirectory = path.join(regionsDirectory, country);
  const filenames = fs.readdirSync(countryDirectory);

  const regionData: LinkCardData[] = [];

  for (const filename of filenames) {
    try {
      const fullPath = path.join(countryDirectory, filename);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const { data, content } = matter(fileContents);
      const processedContent = await remark().use(html).process(content);
      const htmlContent = processedContent.toString();
      regionData.push({ frontmatter: data, content: htmlContent});
    } catch (error) {
      console.error(error);
    }
  }

  return regionData;
}
