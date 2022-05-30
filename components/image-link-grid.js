import React from "react";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const imagePath = `${process.env.IMAGE_PATH}japan-hokkaido.jpg`;
const cardStyle = {
  borderRadius: "2em",
  textAlign: "center",
  width: "auto",
  boxShadow: "0 5px 10px rgba(0,0,0,.2)"
};

export default function ImageLinkGrid() {
  return (
    <div>
      <Row xs="1" sm="2" md="3" xl="6">
        <Col index="0" className="mt-1">
          <Link href="/japan/hokkaido">
            <a>
              <Card bg="light" text="black" style={cardStyle}>
                <Card.Body>
                  <Card.Title>Hokkaido</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </Col>
        <Col index="1" className="mt-1">
          <Link href="/japan/hokkaido">
            <a>
              <Card bg="light" text="black" style={cardStyle}>
                <Card.Body>
                  <Card.Title>Aomori</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </Col>
        <Col index="2" className="mt-1">
          <Link href="/japan/hokkaido">
            <a>
              <Card bg="light" text="black" style={cardStyle}>
                <Card.Body>
                  <Card.Title>Iwate</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </Col>
        <Col index="3" className="mt-1">
          <Link href="/japan/hokkaido">
            <a>
              <Card bg="light" text="black" style={cardStyle}>
                <Card.Body>
                  <Card.Title>Miyagi</Card.Title>
                </Card.Body>
              </Card>
            </a>
          </Link>
        </Col>
      </Row>
    </div>
  );
}

export async function getStaticProps() {
    // Fetch necessary data for the blog post from the markdown files in /regions/
}
