import Link from 'next/link'
import Card from 'react-bootstrap/card'
import Row from 'react-bootstrap/row'
import Col from 'react-bootstrap/col'

export default function PostsLists({ allPostsData }) {
  const posts = allPostsData.map(({ id, date, title, image }, index) => {
    const imagePath = `/images/${image}`
    
    return (
      <Col key={index}>
        <Link href={`/posts/${id}`}>
          <a>
            <Card bg="dark" text="white" style={{ width: 'auto' }}>
              <Card.Img variant="top" src={imagePath} />
              <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="text-muted">{date}</Card.Text>
              </Card.Body>
            </Card>
          </a>
        </Link>
      </Col>
  )});

  return (
    <Row xs={1} md={2} lg={3} xl={3} className="g-1">
      {posts}
    </Row>
  );
}
