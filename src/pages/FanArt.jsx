import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'

const FanArt = () => {
  return (
    <Container className='my-5'>
      <h2>둘리 팬 아트</h2>
      <p>팬들이 그린 멋진 둘리의 작품들을 감상하세요!</p>
      <Row>
        <Col sm={6} md={4}>
          <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ29sfRpCTvD1N6LSmk58SXK-Uy9ze5vkaduQ&s' alt='둘리 팬 아트' style={{width:'200px', height:'200px', objectFit:'cover'}}/>
        </Col>
        <Col sm={6} md={4}>
          <Image src='https://i.pinimg.com/236x/6c/76/fa/6c76fa417534359f94fd383c933e2282.jpg' alt='둘리 팬 아트' style={{width:'200px', height:'200px', objectFit:'cover'}}/>
        </Col>
        <Col sm={6} md={4}>
          <Image src='https://mediahub.seoul.go.kr/uploads/mediahub/2023/02/ntShDnkaDrPaDmulPZZenyiKhXnbTwKV.jpg' alt='둘리 팬 아트' style={{width:'200px', height:'200px', objectFit:'cover'}}/>
        </Col>
      </Row>
    </Container>
  )
}

export default FanArt