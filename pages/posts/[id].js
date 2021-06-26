import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Ingredients from "../../components/ingredients";

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
  const instructions = postData.instructions;
  const instructionsList = instructions.map(function (instruction, index) {
    return <li key={index}>{instruction}</li>;
  });

  return (
    <Layout>
      <div>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        <Ingredients postData={postData} />
        {/* TODO Move this to a Method component */}
        <div>
          <h2>Method</h2>
          <ol>{instructionsList}</ol>
        </div>
      </div>
    </Layout>
  );
}
