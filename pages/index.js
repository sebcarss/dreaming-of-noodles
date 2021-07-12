import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostsList from "../components/posts-list";
import { getAllTagLinkData } from "../lib/tags";

// TODO Add title for page in head

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const tagLinkData = await getAllTagLinkData();

  return {
    props: {
      allPostsData,
      tagLinkData,
    },
  };
}

export default function Home({ allPostsData, tagLinkData }) {
  return (
    <Layout home tagLinkData={tagLinkData}>
      <PostsList allPostsData={allPostsData} />
    </Layout>
  );
}
