import Layout from "../components/layout";
import { getSortedPostsFrontMatter } from "../lib/posts";
import Container from 'react-bootstrap/Container'
import Emoji from "../components/emoji";

export async function getStaticProps() {
  const allPostsData = getSortedPostsFrontMatter();
  const title = "Dreaming of Noodles";
  const preview = true

  return {
    props: {
      allPostsData,
      title,
      preview,
    },
  };
}

export default function Home({ title, preview }) {
  return (
    <Layout title={title} preview={preview} >
      <Container className="mt-3">
        <div  className="lead text-center mb-3 mt-5">
          <Emoji symbol="🍜" label="noodles" /> I&apos;m currently slurping on some noodles and as soon as I&apos;m done I&apos;ll get back to making this website <Emoji symbol="🍜" label="noodles" />
        </div>
      </Container>
    </Layout>
  );
}
