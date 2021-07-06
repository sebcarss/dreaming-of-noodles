import Layout from "../../components/layout";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Ingredients from "../../components/ingredients";
import Method from "../../components/method";
import { getAllTagLinkData } from "../../lib/tags"

// TODO Add title for page in head

/**
 *
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({ params }) {
  console.log("info - [id].js:getStaticProps")

  const postData = await getPostData(params.id);
  const tagLinkData = await getAllTagLinkData();

  return {
    props: {
      postData,
      tagLinkData,
    },
  };
}

/**
 * Gets the paths of the pages that Next will build statically during build time.
 * The IDs are the filenames without the `.md` suffix that are in the /posts/ directory.
 * /posts/ is not part of the paths returned.
 *
 * e.g. paths: [
 *  {
 *    params: {
 *      id: 'fried-rice'
 *    }
 *  }
 * ]
 *
 * @returns the array of post IDs
 */
export async function getStaticPaths() {
  console.log("info - [id].js:getStaticPaths")

  const paths = getAllPostIds();
  console.log("paths: ", paths);
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData, tagLinkData }) {
  return (
    <Layout tagLinkData={tagLinkData}>
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
