import Layout from "../../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getSortedPostsFrontMatter } from "../../lib/posts";
import { kebabCase } from "../../lib/string-utils";
import PostsList from "../../components/posts-list";
import ZonePageDescription from "../../components/zonepagedescription";
import ImageLinkGrid from "../../components/image-link-grid";
import { getCountryRegionData } from "../../lib/regions";

export async function getStaticProps() {
  // Get all posts from the /posts/ directory
  const allPosts = await getSortedPostsFrontMatter();

  // Filter the posts for just the ones that have the japan as a tag
  const japanFilteredPosts = allPosts.filter((post) => {
    const kebabedTags = post.tags.map((tag) => kebabCase(tag));
    return kebabedTags.includes("japan");
  });

  // Get the country and region data
  const countryRegionData = await getCountryRegionData("japan");

  const japanPrefectureLinkData = [
    {
      country: "Japan",
      region: "Hokkaido",
      gridLinkImage: "japan-hokkaido.jpg",
      gridLinkUrl: "/japan/hokkaido",
    },
    {
      country: "Japan",
      region: "Aomori",
      gridLinkImage: "japan-aomori.jpg",
      gridLinkUrl: "/japan/aomori",
    },
    {
      country: "Japan",
      region: "Iwate",
      gridLinkImage: "japan-iwate.jpg",
      gridLinkUrl: "/japan/iwate",
    },
    {
      country: "Japan",
      region: "Miyagi",
      gridLinkImage: "japan-miyagi.jpg",
      gridLinkUrl: "/japan/miyagi",
    }
  ];

  return {
    props: {
      posts: japanFilteredPosts,
      regionLinkData: countryRegionData,
    },
  };
}

export default function Japan({ posts, regionLinkData }) {
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
        <Row>
          <ImageLinkGrid linkData={regionLinkData}/>
        </Row>
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
