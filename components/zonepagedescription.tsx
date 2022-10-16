import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

type PrefectureProps = {
  children: React.ReactNode;
  title: string;
};

export default function ZonePageDescription({ children, title }: PrefectureProps) {
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
