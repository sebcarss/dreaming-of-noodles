import { getSortedPostsData } from "./posts";

export async function getAllTags() {
  const allPostsData = getSortedPostsData();

  let tags = {};
  allPostsData.forEach((data) => {
    data.tags.forEach((tag) => {
      let formattedTag = kebabCase(tag);
      if (formattedTag in tags) {
        tags[formattedTag] += 1;
      } else {
        tags[formattedTag] = 1;
      }
    });
  });

  console.log("tags: ", tags);
  return tags;
}

export function kebabCase(str) {
  return str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");
}

export function titleCase(str) {
  return str.replace(/-/g, " ").replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
