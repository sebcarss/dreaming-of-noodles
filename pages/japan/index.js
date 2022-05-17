import Layout from "../../components/layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Link from "next/link";

export default function Japan() {
  const title = "Japan | World Food Tour";

  return (
    <Layout title={title}>
      <Container className="mt-3">
        {/* 
                    At the top should be the title of the country page as well as some blurb about the country and what I want to cook from it.
                */}

        <Row>
          <h1>Japan</h1>
        </Row>
        <Row>
            <Link href="/japan/prefectures">
                <a>
                    <h2>Prefectures</h2>
                </a>
            </Link>
        </Row>
      </Container>
    </Layout>
  );
}
