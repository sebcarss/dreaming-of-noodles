import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'next/image'

const cardStyle = { width: 'auto', borderRadius: 0, objectFit: 'none' }

export default function PostsLists({ allPostsData }) {
  const posts = allPostsData.map(({ id, excerpt, title, image }, index) => {
    const imagePath = `${image}`
    
    return (
      <Col key={index}>
        <Link href={`/posts/${id}`}>
          <a>
            <Card bg="dark" text="white" style={cardStyle} className="h-100">
              {/* <Card.Img variant="top" src={imagePath} style={{cardStyle, layout: 'responsive'}} /> */}
              <Image alt="Mountains" src={imagePath} width={300} height={200} layout="responsive" priority="true"/>
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-muted">{excerpt}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Link>
      </Col>
  )});

  return (
    <Row xs={1} md={2} lg={3} className="g-1">
      {posts}
    </Row>
  );
}
