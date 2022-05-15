import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from 'react-bootstrap/Container'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  const title = "Dreaming of Noodles";

  return {
    props: {
      allPostsData,
      title,
    },
  };
}

export default function Home({ allPostsData, title }) {
  return (
    <Layout title={title} >
      <Container className="mt-3">
        <PostsList allPostsData={allPostsData} />
      </Container>
    </Layout>
  );
}