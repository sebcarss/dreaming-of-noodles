import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"
import ZonePageDescription from "../components/zonepagedescription";
import Image from "next/image";
import { PostData } from '../types/PostData';

export async function getStaticProps() {
  const allPostsFrontMatter = getSortedPostsFrontMatter();
  const title = "Dreaming of Noodles";
  const preview = true;

  return {
    props: {
      allPostsData: allPostsFrontMatter,
      title,
      preview
    },
  };
}

type PreviewProps = {
  allPostsData: PostData[];
  title: string;
  preview: boolean;
};


export default function Home({ allPostsData, title, preview }: PreviewProps) {
  return (
    <Layout title={title} preview={preview}>
      <div className="d-flex justify-content-center">
        <Image
          alt="dreaming of nooodles logo"
          src="https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/dreaming-of-noodles.png"
          width={320}
          height={320}
          layout="fixed" />
      </div>
      <Container className="mt-3">
        <ZonePageDescription
          title={title}
        >
          <div>
            <p>
              Welcome to Dreaming of Noodles, a food blog which will take you on a virtual journey through
              the flavours of Japan. Starting in the North of Japan, in Hokkaido, I will be exploring
              each of the country's prefectures and sharing the unique dishes and regional specialities I
              discover.
            </p>
            <p>
              Through my passion for food and travel, I will bring you on an adventure to discover
              new flavours and ingredients, while also sharing recipes and tips and tricks for recreating
              these dishes at home.
            </p>
            <p>
              So come and join me on my culinary adventure as I dive into the rich culture and history
              of Japanese cuisine, one prefecture at a time. Whether you are a seasoned foodie or simply
              curious about trying new things, Dreaming of Noodles has something for everyone.
            </p>
          </div>
        </ZonePageDescription>
        <Row>
          <h2 className="text-center mt-3">Latest Recipes</h2>
          <Col>
            <PostsList allPostsData={allPostsData} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
}
