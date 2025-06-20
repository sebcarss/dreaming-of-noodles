import Layout from "../components/layout";
import { getAllTagLinkData } from "../lib/tags";
import Link from 'next/link';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Emoji from '../components/emoji';

const cardStyle: object = {
    borderRadius: "0.2em",
    textAlign: "center",
    fontSize: "1rem",
    backgroundColor: "white",
    width: "auto",
    boxShadow: "0 5px 10px rgba(0,0,0,.2)",
    color: 'black'
};

export async function getStaticProps({ params }) {
    const tagLinkData = await getAllTagLinkData();

    return {
        props: {
            tagLinkData,
        }
    }
}

export default function Tags({ tagLinkData }) {
    const title = "Recipe Index | Dreaming of Noodles";

    const tagLinks = tagLinkData.map((tagData, index) => {
        const path = "/tags/" + tagData.slug;

        return (
            <Link key={index} href={path} passHref>
                <Col style={cardStyle}>
                    {tagData.title}
                </Col>
            </Link>
        );
    });

    return (
        <Layout title={title} preview={true}>
            <Container className="mt-3">
                <Row className="mb-3">
                    <h1>Recipe Index</h1>
                    <p>
                        Here you will find a list of all the recipes on the site by type so that you can easily find what you are looking for.
                    </p>
                </Row>
                <Row className="mb-3" id="recipes-by-country-row">
                    <h2>Recipes by Country</h2>
                    <Row xs={1} sm={2} lg={3} className="g-1 mt-1">
                        <Link href="/japan" passHref>
                            <Col style={cardStyle}>
                                <Emoji symbol="🇯🇵" label="Japanese flag" />&nbsp;&nbsp;Japanese Recipes
                            </Col>
                        </Link>
                    </Row>
                </Row>
                <Row id="tags-row">
                    <h2>Tags</h2>
                    <Row xs={2} sm={4} lg={6} className="g-1 mt-1">
                        {tagLinks}
                    </Row>
                </Row>
            </Container>
        </Layout>
    );
}