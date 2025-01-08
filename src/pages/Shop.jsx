import React from 'react'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'

const Shop = () => {
  return (
    <Container className='my-5'>
      <h2>둘리쇼핑몰</h2>
      <p>둘리와 관련된 다양한 상품들을 만나보세요!</p>
      <Row>
        <Col md={6} className='mb-1'>
          <Card>
            <Card.Body>
              <Card.Title>둘리 인형</Card.Title>
              <Card.Text>귀여운 둘리 인형입니다. 집에 하나 장만해보세요!</Card.Text>
              <Button>구매하기</Button>
            </Card.Body>
          </Card>
        </Col>  
        <Col md={6} className='mb-1'>
          <Card>
            <Card.Body>
              <Card.Title>둘리 티셔츠</Card.Title>
              <Card.Text>둘리의 귀여운 얼굴이 그려진 티셔츠입니다. 모두의 관심을 끌게 될 거예요!</Card.Text>
              <Button>구매하기</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Shop