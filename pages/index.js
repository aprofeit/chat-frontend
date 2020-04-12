import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

export default function Index() {
  return (
    <Container fluid>
      <Row>
      </Row>

      <Row className="chat-input">
        <Col lg={true}>
          <Form>
            <Form.Control size="lg" type="text" placeholder="Message" />
          </Form>
        </Col>
      </Row>
    </Container>
  )
}
