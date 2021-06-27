import Layout from "../components/layout";
import { getSortedPostsData } from "../lib/posts";
import Link from "next/link";

// TODO Add title for page in head

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      {/* Everything inside here gets passed down as the `children` prop */}
      <div>
        <ul>
          {allPostsData.map(({ id, date, title }, index) => (
            <li key={index}>
              <Link href={`/posts/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <span>
                {date}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </Layout>
  );
}