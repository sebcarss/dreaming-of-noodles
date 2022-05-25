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
        <Row>
          <h1 className="text-center">{title}</h1>
        </Row>
        <Row>
          <Col></Col>
          <Col xs={12} md={10} lg={8}>
            <Image
              src="https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/tomato-ramen-strawberry-custard-unsplash.jpg"
              alt="dreaming of noodles splash image"
              width={300}
              height={200}
              layout="responsive"
            />
          </Col>
          <Col></Col>
        </Row>
        <Row className="mt-3">
          <Col></Col>
          <Col xs={12} md={10} lg={8}>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </p>
          </Col>
          <Col></Col>
        </Row>
        <Row>
          <PostsList allPostsData={allPostsData} />
        </Row>
      </Container>
    </Layout>
  );
}
