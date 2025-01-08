import React from 'react';
import { Card, ListGroup, Button, Container, Row, Col, Alert } from 'react-bootstrap';

const About = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-center mb-5'>둘리와 친구들</h2>
      <Alert className='bg-secondary'>둘리와 그의 친구들은, 서로 돕고, 함께 성장하는 귀여운 캐릭터들입니다!</Alert>
      <Row>
        <Col md={6}>
        <Card>
          <Card.Header>둘리</Card.Header>
          <Card.Body>
            <Card.Title>둘리는 1,000을 떠돌아다닌 공룡으로, 많은 모험을 겪고 성장한 캐릭터입니다.</Card.Title>
            <Button variant="primary">둘리의 이야기 보기</Button>
          </Card.Body>
        </Card>
        </Col>
        <Col md={6}>
        <Card>
          <Card.Header>또치</Card.Header>
          <Card.Body>
            <Card.Title>용감한 또치는 둘리와 함께 여러가지 모험을 떠납니다.</Card.Title>
            <Button variant="primary">또치와 여행하기</Button>
          </Card.Body>
        </Card>
        </Col>
      </Row>
      <div className='my-2'>
        <h3>둘리의 친구들</h3>
        <ListGroup>
          <ListGroup.Item>또치 - 용감한 친구</ListGroup.Item>
          <ListGroup.Item>희동이 - 장난꾸러기 친구</ListGroup.Item>
          <ListGroup.Item>마이콜 - 든든한 친구</ListGroup.Item>
        </ListGroup>
      </div>
    </Container>
  )
}

export default About