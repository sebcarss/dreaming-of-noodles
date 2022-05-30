import React from "react";
import Image from "next/image";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ZonePageDescription({ children, title, image, alt }) {
  const imagePath = `${process.env.IMAGE_PATH}${image}`;

  return (
    <section>
      <Row className="mt-5">
        <Col>
          <Image
            src={imagePath}
            alt={alt}
            width={300}
            height={200}
            layout="responsive"
          />
        </Col>
        <Col lg={6} className="mt-3">
          <Row>
            <h1 className="text-left">{title}</h1>
            <hr />
          </Row>
          <Row>{children}</Row>
        </Col>
      </Row>
    </section>
  );
}
