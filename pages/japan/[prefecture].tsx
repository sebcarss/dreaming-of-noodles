
import Layout from "../../components/layout";
import { getCountryRegionData } from "../../lib/regions";
import { titleCase, kebabCase } from "../../lib/string-utils";
import { LinkCardData } from "../../types/LinkCardData";
import Image from "next/legacy/image";
import { Row, Col } from 'react-bootstrap';
import { PostData } from '../../types/PostData';
import PostsList from "../../components/posts-list";
import { getSortedPostsFrontMatter } from "../../lib/posts";

export async function getStaticPaths() {

    const prefecturesData: LinkCardData[] = await getCountryRegionData("japan");

    const paths = prefecturesData.map((data) => {
        return {
            params: {
                prefecture: (data.frontmatter.region).toLowerCase(),
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const prefecture: LinkCardData = (await getCountryRegionData("japan")).find((data) => {
      return (data.frontmatter.region).toLowerCase() === params.prefecture;
    });
  
    // Get all posts from the /posts/ directory
    const allPosts = await getSortedPostsFrontMatter();
  
    // Filter the posts for just the ones that have japan as a tag
    const filteredPosts = allPosts.filter((post) => {
      const kebabedTags = post.tags.map((tag) => kebabCase(tag));
      return kebabedTags.includes(kebabCase(prefecture.frontmatter.region));
    });
  
    return {
      props: {
        regionData: prefecture,
        posts: filteredPosts
      }
    };
  }
  

type PrefectureProps = {
    regionData: LinkCardData;
    posts: PostData[];
}

export default function JapanPrefecture({ regionData, posts }: PrefectureProps) {
    const prefectureDisplayName = titleCase(regionData.frontmatter.region);
    const title = `${prefectureDisplayName} | Japan | Dreaming of Noodles`;
    const splashImagePath = "https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/" + regionData.frontmatter.splashImage;

    return (
        <Layout title={title} preview={true}>
            <Row style={{ marginTop: "1rem" }}>
                <div>
                    <Col xs={12} md={6}
                        className="prefecture-image">
                        <Image
                            alt={regionData.frontmatter.splashImageAlt}
                            src={splashImagePath}
                            width={640}
                            height={640}
                        />
                    </Col>
                    <h1 className="mt-3">{prefectureDisplayName}</h1>
                    <hr />
                    <Col dangerouslySetInnerHTML={{ __html: regionData.content }} />
                </div>
            </Row>
            <Row>
                <h2 className="text-center mt-3">{prefectureDisplayName} Recipes</h2>
                <Col>
                    <PostsList allPostsData={posts} />
                </Col>
            </Row>
        </Layout>
    );
}