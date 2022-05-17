import Layout from "../../../components/layout";
import Container from "react-bootstrap/Container";
import Image from "next/image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";

export default function JapanPrefecture() {
  return (
    <Layout>
      <h1 className="mt-3">Japan Prefectures</h1>
      <Container>
        <Row>
          <Row>
            <Col>
              <p>
                This is the starting point on my virtual culinary world tour,
                and where better to start than in my spiritually-adopted home of
                Japan! On this journey I will travel along the length of Japan
                and will research the local cuisines and dishes remotely and try
                tro recreate the wonderful dishes at home.
              </p>
              <p>
                Japan has 47 prefectures, which you can see in the map below.
                This blog will explore each of the prefectures and the local
                cuisines and dishes that are found there.
              </p>
            </Col>
          </Row>
          <Row>
            <Col sm={0} md={1} lg={2} xl={3} />
            {/* Remove this image and replace it with one that I have created instead of copying others */}
            <Col>
              <Image
                src="https://dreamingofnoodles.s3.eu-west-1.amazonaws.com/images/japanese-prefectures.webp"
                height="720"
                width="865"
                layout="responsive"
              />
            </Col>
            <Col sm={0} md={1} lg={2} xl={3} />
          </Row>

          {/* 
                    This section needs to be turned into a component that I can import and use in the future.
                    The component should be a list view of the Japanese prefectures that are clickable and take
                    the user to the prefecture page e.g. /japan/prefectures/hokkaido

                    This Japan page should have a link to the /japan/prefectures page which will list all the 
                    prefectures in order as well as link the user to the listing page for that prefecture. This
                    page should then show all Japenese recipes in order of when they were posted.
                */}

          <Row>
            <Col>
              <h2>Japanese Prefectures</h2>
            </Col>
          </Row>
          <Link href="/japan/prefectures/hokkaido">
            <a>
              <Row>
                <Col>
                  <h3>1. Hokkaido</h3>
                </Col>
                <Col>
                  <p>insert excerpt here about Hokkaido</p>
                </Col>
                <Col>
                  <p>Insert pic of Hokkaido here</p>
                </Col>
              </Row>
            </a>
          </Link>
          <Link href="/japan/prefectures/aomori">
            <a>
              <Row>
                <Col>
                  <h3>2. Aomori</h3>
                </Col>
                <Col>
                  <p>insert excerpt here about Aomori</p>
                </Col>
                <Col>
                  <p>Insert pic of Aomori here</p>
                </Col>
              </Row>
            </a>
          </Link>
          {/* <PostsList allPostsData={posts} /> */}

          <p>Add PostsList here for japan tags</p>
        </Row>
      </Container>
    </Layout>
  );
}
