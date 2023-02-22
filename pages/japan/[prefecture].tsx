
import Layout from "../../components/layout";
import { getCountryRegionData } from "../../lib/regions";
import { titleCase } from "../../lib/string-utils";
import { LinkCardData } from "../../types/LinkCardData";
import Image from 'next/image';
import { Row, Col } from 'react-bootstrap';

export async function getStaticPaths() {

    const prefecturesData: LinkCardData[] = await getCountryRegionData("japan");

    const paths = prefecturesData.map((data) => {
        return {
            params: {
                prefecture: (data.frontmatter.region).toLowerCase(),
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    const prefecture: LinkCardData = (await getCountryRegionData("japan")).find((data) => {
        return (data.frontmatter.region).toLowerCase() === params.prefecture;
    });

    return {
        props: {
            regionData: prefecture
        }
    }
}

type PrefectureProps = {
    regionData: LinkCardData;
}

export default function JapanPrefecture({ regionData }: PrefectureProps) {
    const prefectureDisplayName = titleCase(regionData.frontmatter.region);
    const title = `${prefectureDisplayName} | Japan | Dreaming of Noodles`;
    const splashImagePath = "https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/" + regionData.frontmatter.splashImage;

    return (
        <Layout title={title} preview={true}>
            <Row style={{ marginTop: "1rem" }}>
                <div>
                    <Col xs={12} md={6} style={{ float: "left", marginRight: "1rem", marginTop: "1rem" }}>
                        <Image
                            alt={regionData.frontmatter.splashImageAlt}
                            src={splashImagePath}
                            width={640}
                            height={640}
                        />
                    </Col>
                    <h1 className="mt-3">{prefectureDisplayName}</h1>
                    <hr />
                    <Col dangerouslySetInnerHTML={{ __html: regionData.content }} />
                </div>
            </Row>
        </Layout>
    );
}