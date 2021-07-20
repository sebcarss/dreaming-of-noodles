import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostsList from "../components/posts-list";
import { getAllTagLinkData } from "../lib/tags";
import Container from 'react-bootstrap/Container'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const tagLinkData = await getAllTagLinkData();
  const title = "Dreaming of Noodles";

  return {
    props: {
      allPostsData,
      tagLinkData,
      title,
    },
  };
}

export default function Home({ allPostsData, tagLinkData, title }) {
  return (
    <Layout tagLinkData={tagLinkData} title={title} >
      <Container className="mt-3">
        <PostsList allPostsData={allPostsData} />
      </Container>
    </Layout>
  );
}
