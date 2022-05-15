import Link from 'next/link'
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const cardStyle = { width: 'auto', borderRadius: 0, objectFit: 'none' }

export default function PostsLists({ allPostsData }) {
  const posts = allPostsData.map(({ id, excerpt, title, image }, index) => {
    const imagePath = `${image}`
    // Note I've removed /images/ from the prefix of the imagePath to test calling S3 to get images. 
    // Reason for this is storing the images in Git will bloat it. Instead it may be best to get them from S3. 
    // Especially if I am going to be doing videos too.
    
    return (
      <Col key={index}>
        <Link href={`/posts/${id}`}>
          <a>
            <Card bg="dark" text="white" style={cardStyle} className="h-100">
              <Card.Img variant="top" src={imagePath} style={{cardStyle}} />
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
