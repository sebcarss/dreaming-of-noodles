import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from 'react-bootstrap/Container'

export async function getStaticProps() {
  const allPostsData = getSortedPostsFrontMatter();
  const title = "Dreaming of Noodles";

  return {
    props: {
      allPostsData,
      title,
    },
  };
}

export default function Home({ allPostsData, title, preview }) {
  return (
    <Layout title={title} preview={preview} >
      <Container className="mt-3">
        <PostsList allPostsData={allPostsData} />
      </Container>
    </Layout>
  );
}
