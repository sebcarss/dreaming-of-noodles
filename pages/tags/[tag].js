import Layout from "../../components/layout";
import { getSortedPostsData } from "../../lib/posts";
import { getAllTags } from "../../lib/tags";
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
    console.log(post.tags);
    return post.tags.includes(params.tag);
  });

  return {
    props: {
      posts: filteredPosts,
      tag: params.tag,
    },
  };
}

export default function Tag({ posts, tag }) {
  // TODO Get the tag from the path and search all posts data to render PostsList
  console.log(posts);

  return (
    <Layout>
      <h1>{tag} Recipes</h1>
      <PostsList allPostsData={posts} />
    </Layout>
  );
}
