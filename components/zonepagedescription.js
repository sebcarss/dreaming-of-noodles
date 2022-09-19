import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

export default function ZonePageDescription({ children, title }) {
  return (
    <section>
      <Row>  
        <Col>
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
