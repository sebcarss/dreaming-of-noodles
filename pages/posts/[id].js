import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Ingredients from "../../components/ingredients";
import Method from "../../components/method"

// TODO Add title for page in head

export async function getStaticProps({ params }) {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
}

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout>
      <div>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Ingredients postData={postData} />
        <Method postData={postData} />
      </div>
    </Layout>
  );
}
