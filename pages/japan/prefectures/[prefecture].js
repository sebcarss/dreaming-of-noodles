
import Layout from "../../../components/layout";
import { titleCase, kebabCase } from "../../../lib/string-utils";

export async function getStaticPaths() {

    const prefectures = ["hokkaido", "aomori", "iwate", "miyagi", "akita", "yamagata", "fukushima", "ibaraki", "tochigi", "gunma", "saitama", "chiba", "tokyo", "kanagawa", "niigata", "toyama", "ishikawa", "fukui", "yamanashi", "nagano", "gifu", "shizuoka", "aichi", "mie", "shiga", "kyoto", "osaka", "hyogo", "nara", "wakayama", "tottori", "shimane", "okayama", "hiroshima", "yamaguchi", "tokushima", "kagawa", "ehime", "kochi", "fukuoka", "saga", "nagasaki", "kumamoto", "oita", "miyazaki", "kagoshima", "okinawa"];
    const paths = prefectures.map((prefecture) => {
        return {
            params: {
                prefecture: prefecture,
            },
        };
    });

    return {
        paths: paths,
        fallback: false,
    }
}

export async function getStaticProps({ params }) {
    return {
        props: {
            prefecture: params.prefecture
        }
    }
}

export default function JapanPrefecture({ prefecture }) {
    const prefectureDisplayName = titleCase(prefecture);

  return (
    <Layout>
      <h1>{prefectureDisplayName}</h1>
    </Layout>
  );
}