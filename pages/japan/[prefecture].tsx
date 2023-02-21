
import Layout from "../../components/layout";
import { getCountryRegionData } from "../../lib/regions";
import { titleCase } from "../../lib/string-utils";
import { LinkCardData } from "../../types/LinkCardData";

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

  return (
    <Layout title={title} preview={true}>
        <h1 className="mt-3">{prefectureDisplayName}</h1>
        <div dangerouslySetInnerHTML={{ __html: regionData.content }} />
    </Layout>
  );
}