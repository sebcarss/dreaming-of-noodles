import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostsList from "../components/posts-list";
import { getAllTagLinkData } from "../lib/tags";
import Container from 'react-bootstrap/container'

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
    <Layout tagLinkData={tagLinkData}>
      <Container className="mt-3">
        <PostsList allPostsData={allPostsData} />
      </Container>
    </Layout>
  );
}
