import Layout from "../components/layout";
import { getAllTagLinkData } from "../lib/tags";
import Link from 'next/link'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Emoji from '../components/emoji'

export async function getStaticProps({ params }) {
    const tagLinkData = await getAllTagLinkData();

    return {
        props: {
            tagLinkData,
        }
    }
}

export default function Tags({ tagLinkData }) {
    const title = "Recipe Index"

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
                <Row className="mb-3">
                    <h1>Recipe Index</h1>
                    <p>
                        Here you will find a list of all the recipes on the site by type so that you can easily find what you are looking for.
                    </p>
                </Row>
                <Row className="mb-3">
                    <h2>Recipes by Country</h2>
                    <hr />
                    <Link href="/japan">
                        <a><Emoji symbol="🇯🇵" label="Japanese flag" />&nbsp;&nbsp;Japanese Recipes</a>
                    </Link>
                    {/* <Link href="/south-korea">
                        <a><Emoji symbol="🇰🇷" label="South Korean flag" />&nbsp;&nbsp;South Korean Recipes</a>
                    </Link> */}
                </Row>
                <Row>
                    <h2>Tags</h2>
                    <hr />
                    <ul style={{ listStyleType: "none" }}>
                        {tagLinks}
                    </ul>
                </Row>
            </Container>
        </Layout>
    );
}