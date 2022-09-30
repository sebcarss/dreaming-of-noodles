import Layout from "../../components/layout";
import { getAllPostIds, getPostMatterAndContent } from "../../lib/posts";
import Image from 'next/image';

/**
 *
 * @param {*} param0
 * @returns
 */
export async function getStaticProps({ params }) {
  const postData = await getPostMatterAndContent(params.id);

  return {
    props: {
      postData,
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
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}

export default function Post({ postData }) {
  return (
    <Layout title={postData.title} preview={true}>
    <div className="mt-3">
      <div >
        <Image 
          alt="test" 
          src={postData.image}
          width={300} 
          height={200}
          layout="responsive" />
      </div>
      <div>
        <h1>{postData.title}</h1>
        <div>{postData.date}</div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />  
      </div>
    </div>
    </Layout>
  );
}
