import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import PostsList from '../components/posts-list'

// TODO Add title for page in head

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <PostsList allPostsData={allPostsData} />
    </Layout>
  )
}
