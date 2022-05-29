import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Image from "next/image";
import Col from "react-bootstrap/Col";

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
        <Row className="mt-5">
          <Col>
            <Image
              src="https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/tomato-ramen-strawberry-custard-unsplash.jpg"
              alt="dreaming of noodles splash image"
              width={300}
              height={200}
              layout="responsive"
            />
          </Col>
          <Col lg={6} className="mt-3">
            <Row>
              <h1 className="text-left">{title}</h1>
              <hr />
            </Row>
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
            <p>
              So come and join me on my culinary adventure!
            </p>
          </Col>
        </Row>
        <Row>
          <h2 className="text-center mt-3">Latest Recipes</h2>
          <hr />
          <PostsList allPostsData={allPostsData} />
        </Row>
      </Container>
    </Layout>
  );
}
