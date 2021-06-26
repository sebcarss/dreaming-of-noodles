import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";

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
  console.log(postData.ingredients)
  const ingredients = postData.ingredients
  const ingredientsList = ingredients.map(function (ingredient, index) {
    return <li key={index}>{ingredient}</li>
  })
  const instructions = postData.instructions
  const instructionsList = instructions.map(function(instruction, index) {
    return <li key={index}>{instruction}</li>
  })

  return (
    <Layout>
      <div>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* TODO Move this to an Ingredients component? */}
        <div>
          <h2>Ingredients</h2>
          <ul>{ingredientsList}</ul>
        </div>
        {/* TODO Move this to a Method component */}
        <div>
          <h2>Method</h2>
          <ol>{instructionsList}</ol>
        </div>
      </div>
    </Layout>
  );
}
