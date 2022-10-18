import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import PostsList from "../components/posts-list";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import ZonePageDescription from "../components/zonepagedescription";
import Image from "next/image";
import { PostData } from '../types/PostData';

export async function getStaticProps() {
  const allPostsData = getSortedPostsFrontMatter();
  const title = "Dreaming of Noodles";
  const preview = true;

  return {
    props: {
      allPostsData,
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
          layout="fixed"/>
      </div>
      <Container className="mt-3">
        <ZonePageDescription
          title={title}
        >
          <p>
            Welcome to Dreaming of Noodles, my personal blog dedicated to my
            love of food, heavily influenced by the wonderful cuisine of
            Japan, and in particular, their delicious ramen. This blog will see me virtually touring the world through food,
            creating my own recipes, pitting cooking techniques against each other
            and generally keeping my stomach happy. 
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
