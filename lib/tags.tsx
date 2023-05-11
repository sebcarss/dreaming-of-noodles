import { getSortedPostsFrontMatter } from "./posts";
import { titleCase, kebabCase } from "./string-utils";

/**
 * Loops through all the posts within the /posts directory and creates a Map
 * containing the unique tag names and the count of posts that have the tag.
 * The tag is converted to kebab-case to ensure that we can match them.
 *
 *  { hello: 2, 'jam-tart': 1, world: 1 }
 *
 * @returns a unique map of tags names and their count
 */
export async function getAllTags() {
  const allPostsData = await getSortedPostsFrontMatter();

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
  const orderedTags = Object.keys(tags)
    .sort()
    .reduce((obj, key) => {
      obj[key] = tags[key];
      return obj;
    }, {});

  return orderedTags;
}


/**
 * Creates an object from all the unique tags that are found in the posts within 
 * the /posts directory containing the slug, which is a kebab-case version of the 
 * tag name for the URL, and a title, which is the Title Case version for display 
 * in the Navigation component. 
 * 
    [
      { slug: 'hello', title: 'Hello' },
      { slug: 'jam-tart', title: 'Jam Tart' },
      { slug: 'world', title: 'World' }
    ]
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
