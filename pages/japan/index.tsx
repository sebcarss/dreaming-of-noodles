import Layout from "../../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { getSortedPostsFrontMatter } from "../../lib/posts";
import { kebabCase } from "../../lib/string-utils";
import PostsList from "../../components/posts-list";
import ZonePageDescription from "../../components/zonepagedescription";
import RegionLinkGrid from "../../components/region-link-grid";
import { getCountryRegionData } from "../../lib/regions";
import { PostData } from '../../types/PostData';
import { LinkCardData } from '../../types/LinkCardData';

export async function getStaticProps() {
  // Get all posts from the /posts/ directory
  const allPosts = await getSortedPostsFrontMatter();

  // Filter the posts for just the ones that have japan as a tag
  const japanFilteredPosts = allPosts.filter((post) => {
    const kebabedTags = post.tags.map((tag) => kebabCase(tag));
    return kebabedTags.includes("japan");
  });

  // Get the country and region data
  const countryRegionData = await getCountryRegionData("japan");

  return {
    props: {
      posts: japanFilteredPosts,
      regionLinkData: countryRegionData,
    },
  };
}

type JapanProps = {
  posts: PostData[];
  regionLinkData: LinkCardData[];
};

export default function Japan({ posts, regionLinkData }: JapanProps) {
  const title: string = "Japan | Dreaming of Noodles";

  return (
    <Layout title={title} preview={true}>
      <Container className="mt-3">
        <ZonePageDescription
          title="Japan"
        >
          <p>
            Japan is a country of diverse and rich cuisine, with each of its 47 prefectures
            offering a unique and delicious array of regional dishes. From Hokkaido in the
            north to Okinawa in the south, there is a world of flavors waiting to be explored.
          </p>
          <p>
            Some of the most famous regional dishes include:
          </p>
          <p>
            <ul>
              <li>
                <p>
                  <strong>Hokkaido</strong> - Known for its seafood, Hokkaido offers a variety of
                  dishes featuring fresh ingredients from the sea, such as sushi, sashimi, and
                  grilled fish.
                </p>
              </li>
              <li>
                <p>
                  <strong>Kyoto</strong> - Famous for its traditional Japanese cuisine, Kyoto is
                  home to Kaiseki, a multi-course meal featuring beautifully arranged dishes made
                  with fresh, local ingredients.
                </p>
              </li>
              <li>
                <p>
                  <strong>Osaka</strong> - The food capital of Japan, Osaka is famous for its street
                  food and hearty dishes, such as Takoyaki (octopus balls), Okonomiyaki (savoury
                  pancakes), and Kushikatsu (deep-fried skewered meat and vegetables).
                </p>
              </li>
              <li>
                <p>
                  <strong>Hiroshima</strong> - A city in western Japan, Hiroshima is famous for its
                  unique take on Okonomiyaki, where the ingredients are layered rather than mixed
                  together.
                </p>
              </li>
            </ul>
          </p>
          <p>
            With so many delicious regional dishes to explore, the culinary adventure in Japan
            never ends. Join us as we travel virtually through Japan, exploring the flavors and
            culture of each of its prefectures.
          </p>
        </ZonePageDescription>
        <Row>
          <RegionLinkGrid
            linkData={regionLinkData}
            heading="Japanese Prefectures"
          />
        </Row>
        <Row>
          <h2 className="text-center mt-3">Japanese Recipes</h2>
          <Col>
            <PostsList allPostsData={posts} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
