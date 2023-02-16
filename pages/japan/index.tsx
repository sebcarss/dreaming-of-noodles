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
