import Layout from "../../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Link from "next/link";
import Col from "react-bootstrap/Col";
import Image from "next/image";
import { getSortedPostsFrontMatter } from "../../lib/posts";
import { kebabCase } from "../../lib/string-utils";
import PostsList from "../../components/posts-list";
import ZonePageDescription from "../../components/zonepagedescription";

export async function getStaticProps() {
  // Get all posts from the /posts/ directory
  const allPosts = await getSortedPostsFrontMatter();

  // Filter the posts for just the ones that have the japan as a tag
  const japanFilteredPosts = allPosts.filter((post) => {
    const kebabedTags = post.tags.map((tag) => kebabCase(tag));
    return kebabedTags.includes("japan");
  });

  return {
    props: {
      posts: japanFilteredPosts,
    },
  };
}

export default function Japan({ posts }) {
  const title = "Japan | World Food Tour";

  return (
    <Layout title={title}>
      <Container className="mt-3">
        <ZonePageDescription
          title="Japan"
          image="japanese-prefectures.webp"
          alt="Map of Japanese prefectures"
        >
          <p>
            This is the starting point on my virtual culinary world tour, and
            where better to start than in my spiritually-adopted home of Japan!
            On this journey I will travel along the length of Japan and will
            research the local cuisines and dishes remotely and try tro recreate
            the wonderful dishes at home.
          </p>
          <p>
            Japan has 47 prefectures, which you can see in the map. This blog
            will explore each of the prefectures and the local cuisines and
            dishes that are found there.
          </p>
        </ZonePageDescription>
        <Row className="mt-3">
          <Col>
            <h2>Japanese Prefectures</h2>
          </Col>
        </Row>
        <Link href="/japan/hokkaido">
          <a>
            <Row>
              <Col>
                <h3>Hokkaido</h3>
                {/* Insert pic here */}
              </Col>
            </Row>
          </a>
        </Link>
        <Link href="/japan/aomori">
          <a>
            <Row>
              <Col>
                <h3>Aomori</h3>
                {/* Insert pic here */}
              </Col>
            </Row>
          </a>
        </Link>
        <Row className="mt-3">
          <Col>
            <h2>Japanese Recipes</h2>
          </Col>
        </Row>
        <PostsList allPostsData={posts} />
      </Container>
    </Layout>
  );
}
