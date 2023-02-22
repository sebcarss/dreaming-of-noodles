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
  const links = linkData.map(({ frontmatter }, index) => {
    return (
      <Link key={index} href={frontmatter.gridLinkUrl}>
        <a>
          <Col style={cardStyle}>
            {frontmatter.region}
          </Col>
        </a>
      </Link>
    );
  });

  return (
    <div style={{
      paddingBottom: "10px",
      width: "100vw",
      left: "50%",
      right: "50%",
      marginLeft: "-50vw",
      marginRight: "-50vw",
      position: "relative",
      backgroundColor: "white",
      maxWidth: "100vw",
      borderTop: "1px black solid",
      borderBottom: "1px black solid"
    }}>
      <Row className="mt-3">
        <h2 style={{ textAlign: "center" }}>{heading}</h2>
      </Row>
      <Row xs={2} sm={4} lg={6} className="g-1 mt-1">
        {links}
      </Row>
    </div>
  );
}
