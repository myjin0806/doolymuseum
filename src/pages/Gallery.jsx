import React from 'react';
import { Container, Row, Col, Card, Button, Tabs, Tab } from 'react-bootstrap';

const characters = {
  duli: {
    key: "duli",
    name: "둘리",
    description: "시간 여행을 떠난 공룡. 마법 같은 능력과 순수한 마음을 가진 둘리.",
    img: "https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC"
  },
  tochi: {
    key: "tochi",
    name: "또치",
    description: "둘리의 용감한 친구이자, 좋은 마음을 가진 개성 강한 캐릭터.",
    img: "https://via.placeholder.com/150?text=%EB%91%98%EB%A6%AC%20%EB%91%98%EB%A6%AC"
  },
  hidoongi: {
    key: "hidoongi",
    name: "희동이",
    description: "둘리의 장난꾸러기 친구로, 늘 새로운 장난을 시도하는 캐릭터.",
    img: "https://via.placeholder.com/150?text=%ED%9D%AC%EB%8F%99%EC%9D%B4"
  },
  maikol: {
    key: "maikol",
    name: "마이콜",
    description: "둘리의 든든한 친구, 멋진 외모와 친절한 성격을 가진 인물.",
    img: "https://via.placeholder.com/150?text=%EB%A7%88%EC%9D%B4%EC%BD%9C"
  }
};

const Gallery = () => {
  return (
    <Container className='my-5'>
      <h2>등장인물 소개</h2>
      <Tabs defaultActiveKey="duli" id='chracter-tabs'>
        {Object.values(characters).map((character, index) => (
          <Tab eventKey={character.key} title={character.name} key={index}>
            <Row className='mt-3'>
              <Col sm={12} md={4}>
                <Card>
                  <Card.Img src={character.img} />
                  <Card.Body>
                    <Card.Title>{character.name}</Card.Title>
                    <Card.Text>{character.description}</Card.Text>
                    <Button>자세히 보기</Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Tab>
        ))}
      </Tabs>
    </Container>
  );
};

export default Gallery;
