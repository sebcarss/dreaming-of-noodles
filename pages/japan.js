import Layout from '../components/layout'
import Container from 'react-bootstrap/Container'
import Image from 'next/image'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Japan() {
    const title = "Japan | World Food Tour"

    return (
        <Layout title={title}>
            <Container className="mt-3">
                <Row>
                    <Col>
                        <Image
                            alt="World Food Tour banner image"
                            src="https://via.placeholder.com/1000x200.png?text=World+Food+Tour"
                            width={1000}
                            height={200}
                        />
                    </Col>
                </Row>
                <Row>
                    <h1>Japan</h1>
                </Row>
                <Row>
                    {/* <Col sm={0} md={1} lg={2} xl={3}/>
                    <Col>
                        <Image 
                            src="/images/Regions_and_Prefectures_of_Japan_2.svg"
                            height="722"
                            width="545"
                        />
                    </Col>
                    <Col sm={0} md={1} lg={2} xl={3}/> */}
                </Row>
            </Container>
        </Layout>
    )
}