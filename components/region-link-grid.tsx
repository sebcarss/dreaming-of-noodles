import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Link from "next/link";
import { LinkCardData } from "../types/LinkCardData";

const cardStyle: object = {
  borderRadius: "0.2em",
  textAlign: "center",
  fontSize: "1rem",
  backgroundColor: "white",
  width: "auto",
  boxShadow: "0 5px 10px rgba(0,0,0,.2)",
  color: 'black'
};

type RegionLinkGridProps = {
  linkData: LinkCardData[];
  heading: string;
};

export default function RegionLinkGrid({ linkData, heading }: RegionLinkGridProps) {
  const links = linkData.map(({ region, gridLinkUrl }, index) => {
    return (
      <Link key={index} href={gridLinkUrl}>
        <a>
          <Col style={cardStyle}>
            {region}
          </Col>
        </a>
      </Link>
    );
  });

  return (
    <div>
      <Row className="mt-3">
          <h2 style={{ textAlign: "center" }}>{heading}</h2>
      </Row>
      <Row xs={2} sm={4} lg={6} className="g-1 mt-1">
        {links}
      </Row>
    </div>
  );
}
