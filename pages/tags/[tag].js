import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { getAllTags, kebabCase, titleCase } from "../../lib/tags";
import PostsList from "../../components/posts-list";

export async function getStaticPaths() {
  const tags = await getAllTags();

  return {
    paths: Object.keys(tags).map((tag) => ({
      params: {
        tag,
      },
    })),
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

export default function Tag({ posts, tag }) {
  return (
    <Layout>
      <h1>{tag} Recipes</h1>
      <PostsList allPostsData={posts} />
    </Layout>
  );
}
