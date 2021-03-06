import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Link from "next/link";

const cardStyle = {
  borderRadius: "2em",
  textAlign: "center",
  width: "auto",
  boxShadow: "0 5px 10px rgba(0,0,0,.2)",
};

export default function ImageLinkGrid({ linkData , heading }) {
  const links = linkData.map(({ region, gridLinkUrl }, index) => {
    return (
      <Col key={index}>
        <Link href={gridLinkUrl}>
          <a>
            <Card bg="light" text="black" style={cardStyle}>
              <Card.Body>
                <Card.Title>{region}</Card.Title>
              </Card.Body>
            </Card>
          </a>
        </Link>
      </Col>
    );
  });

  return (
    <div>
      <Row className="mt-3">
        <Col>
          <h2 style={{ textAlign: "center"}}>{heading}</h2>
          <hr />
        </Col>
      </Row>
      <Row xs={1} sm={2} md={3} lg={4} className="g-1 mt-1">
        {links}
      </Row>
    </div>
  );
}
