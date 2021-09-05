import Layout from "../components/layout";
import { getAllTagLinkData } from "../lib/tags";
import Link from 'next/link'

export async function getStaticProps({ params }) {
    const tagLinkData = await getAllTagLinkData();

    return {
        props: {
            tagLinkData,
        }
    }
}

export default function Tags({ tagLinkData }) {
    const title = "Tags"

    const tagLinks = tagLinkData.map((tagData, index) => {
        const path = "/tags/" + tagData.slug;
    
        return (
            <li key={index}>
                <Link href={path}>
                    <a>{tagData.title}</a>
                </Link>
            </li>
        );
      });

    return (
        <Layout title={title}>
            <ul>
                {tagLinks}
            </ul>
        </Layout>
    );
}