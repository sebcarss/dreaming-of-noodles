import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ZonePageDescription from "../components/zonepagedescription";

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
    <Layout title={title} preview={preview}>
      <Container className="mt-3">
        <ZonePageDescription
          title={title}
          image="tomato-ramen-strawberry-custard-unsplash.jpg"
          alt="dreaming of noodles splash image"
        >
          <p>
            Welcome to Dreaming of Noodles, my personal blog dedicated to my
            love of Asian food, heavily influenced by the wonderful cuisine of
            Japan, and in particular, their delicious (oishī) ramen.
          </p>
          <p>
            This blog will see me virtually touring the world through food,
            starting with Japan, where I will be exploring the regional dishes
            from the northenmost prefecture, Hokkaido, and working my way down
            to the southernmost prefecture, Okinawa.
          </p>
          <p>So come and join me on my culinary adventure!</p>
        </ZonePageDescription>
        <Row>
          <h2 className="text-center mt-3">Latest Recipes</h2>
          <hr />
          <PostsList allPostsData={allPostsData} />
        </Row>
      </Container>
    </Layout>
  );
}
