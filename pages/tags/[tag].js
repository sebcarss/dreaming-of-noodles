import Layout from "../../components/layout";
import { getSortedPostsFrontMatter } from "../../lib/posts";
import { getAllTags } from "../../lib/tags";
import { kebabCase, titleCase } from "../../lib/string-utils";
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
    return {
      params: {
        tag: name,
      },
    };
  });

  return {
    paths: paths,
    fallback: false,
  };
}

/**
 * Create an object that stores the posts that contain the tag name in the path
 * and return that as the props which will be passed to the page component.
 *
 * @param {*} param0 contains the route parameters in the dynamic path
 * @returns props that are passed to the page component
 */
export async function getStaticProps({ params }) {
  // Get all posts from the /posts/ directory
  const allPosts = await getSortedPostsFrontMatter();

  // Filter the posts for just the ones that have the tag name in from the path
  const filteredPosts = allPosts.filter((post) => {
    const kebabedTags = post.tags.map((tag) => kebabCase(tag));
    return kebabedTags.includes(params.tag);
  });

  // The name to display on the website as in title format
  const tagDisplayName = titleCase(params.tag);

  return {
    props: {
      posts: filteredPosts,
      tag: tagDisplayName,
    },
  };
}

export default function Tag({ posts, tag }) {
  // TODO Get the count of posts with this tag and display on site.

  const title = `${tag} Recipes`

  return (
    <Layout title={title} preview={true}>
      <h1 className="mt-3">{title}</h1>
      <PostsList allPostsData={posts} />
    </Layout>
  );
}
