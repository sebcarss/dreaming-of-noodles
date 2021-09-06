import { getSortedPostsData } from "./posts";

/**
 * Loops through all the posts within the /posts directory and creates a Map
 * containing the unique tag names and the count of posts that have the tag. 
 * The tag is converted to kebab-case to ensure that we can match them. 
 * 
 * @returns a unique map of tags names and their count
 */
export async function getAllTags() {
  const allPostsData = getSortedPostsData();

  let tags = {};
  allPostsData.forEach((postData) => {
    postData.tags.forEach((tag) => {
      let formattedTag = kebabCase(tag);
      if (formattedTag in tags) {
        tags[formattedTag] += 1;
      } else {
        tags[formattedTag] = 1;
      }
    });
  });

  // Order the tags based on their key value
  const orderedTags = Object.keys(tags).sort().reduce(
    (obj, key) => {
      obj[key] = tags[key]
      return obj
    },
    {}
  )

  return orderedTags;
}

/**
 * Creates an object from all the unique tags that are found in the posts within 
 * the /posts directory containing the slug, which is a kebab-case version of the 
 * tag name for the URL, and a title, which is the Title Case version for display 
 * in the Navigation component. 
 * 
 * @returns an object with a slug name and a title name for the tags
 */
export async function getAllTagLinkData() {
  const allTags = await getAllTags();
  const tagsData = Object.keys(allTags).map((tag) => {
    const slug = kebabCase(tag);
    const title = titleCase(tag);

    return {
      slug: slug,
      title: title,
    };
  });
  
  return tagsData;
}

/**
 * Takes the input String object and converts it to kebab-case, e.g. 
 * "Sri Lanka" becomes "sri-lanka".
 * 
 * @param {String} str The string to convert to kebab-case
 * @returns The String in kebab-case
 */
export function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
}

/**
 * Takes the input String object and converts it to Title Case, e.g.
 * "sri lanka" becomes "Sri Lanka"
 * @param {String} str The string to convert to Title Case
 * @returns The string in Title Case
 */
export function titleCase(str) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
