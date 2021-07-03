import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { getAllTags, kebabCase, titleCase } from "../../lib/tags";
import PostsList from "../../components/posts-list";

/**
 * Determines the dynamic paths that need to be generated at build time for the [tag].js
 * path. It gets a unique list of tags from the metadata stored in the markdown files within
 * /posts/ and then generates the paths array to be returned, e.g. 
 * 
 * [
 *  {params: {tag: bread}}, 
 *  {params: {tag: chinese}}
 * ]
 * 
 * @returns list of paths by tag id, e.g. 
 */
export async function getStaticPaths() {
  const tags = await getAllTags();

  // Create an array of tag names, e.g. ['bread','chinese']
  const tagNames = Object.keys(tags);

  // Map the array to a new array with paths, e.g. [{params: {tag: bread}}, {params: {tag: chinese}}]
  const paths = tagNames.map((name) => {
      console.log("tag: ", name);
      return {
          params: {
              tag: name
          }
      }
  })

  console.log("paths: ", paths)

  return {
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const allPosts = await getSortedPostsData();
  const filteredPosts = allPosts.filter((post) => {
    const formattedTags = post.tags.map((tag) => kebabCase(tag));
    console.log("formattedTags: ", formattedTags);
    return formattedTags.includes(params.tag);
  });

  const tagDisplayName = titleCase(params.tag)

  console.log("tagDisplayName: ", tagDisplayName);

  return {
    props: {
      posts: filteredPosts,
      tag: tagDisplayName,
    },
  };
}

export default function Tag({ posts }) {
  return (
    <Layout>
      <h1>Bread Recipes</h1>
      <PostsList allPostsData={posts} />
    </Layout>
  );
}
