import Layout from "../components/layout";
import { getAllTagLinkData } from "../lib/tags";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'

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
            <Container className="mt-3">
                <h2>Recipe Index</h2>
                <p>
                    Here you will find a list of all the recipes on the site by type so that you can easily find what you are looking for.
                </p>
                <h3>Tags</h3>
                <ul>
                    {tagLinks}
                </ul>
            </Container>
        </Layout>
    );
}