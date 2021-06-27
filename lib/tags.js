import { data } from "remark";
import { getSortedPostsData } from "./posts";

export async function getAllTags() {
  const allPostsData = getSortedPostsData();

  let tags = {};
  allPostsData.forEach((data) => {
    data.tags.forEach((tag) => {
      console.log(tag);
      if (tag in tags) {
        tags[tag] += 1;
      } else {
        tags[tag] = 1;
      }
    });
  });

  console.log("tags: ", tags);
  return tags;
}
