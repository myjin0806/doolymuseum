import React from 'react'
import { Carousel, Container, Row, Col, Card, Image } from 'react-bootstrap'

const characterData = [
  {
    name: '둘리',
    image: '/images/dooly.jpg',
    details: [
      { label: '출생', value: '1억여 년 전 지구' },
      { label: '종족', value: '공룡' },
      { label: '거주지', value: '도봉구 쌍문동' },
    ],
    description: '둘리는 헤어진 엄마와 떠나온 고향에 대한 그리움으로 외로움을 품고 있는 아기공룡입니다.',
  },
  {
    name: '도우너',
    image: '/images/dounar.jpg',
    details: [
      { label: '출생', value: '깐따삐야 별' },
      { label: '종족', value: '외계인' },
      { label: '특기', value: '시공간 여행' },
    ],
    description: '도우너는 우주여행 중 고길동 집에 불시착하여 둘리와 함께 지내는 외계인입니다.',
  },
  {
    name: '공심이',
    image: '/images/gongsimi.jpg',
    details: [
      { label: '출생', value: '도봉구 쌍문동' },
      { label: '종족', value: '인형' },
      { label: '특기', value: '요리, 집안일' },
    ],
    description: '공심이는 둘리 일행이 돌보는 내성적이지만 순수한 인형입니다.',
  },
  {
    name: '희동이',
    image: '/images/heedong.jpg',
    details: [
      { label: '출생', value: '대한민국' },
      { label: '종족', value: '인간' },
      { label: '성격', value: '고집이 셈' },
    ],
    description: '희동이는 고길동의 조카로 모두에게 사랑받는 귀염둥이입니다.',
  },
  {
    name: '고길동',
    image: '/images/gildong.png',
    details: [
      { label: '출생', value: '대한민국' },
      { label: '직업', value: '회사원' },
      { label: '특기', value: '둘리 일당 구박하기' },
    ],
    description: '고길동은 가족을 사랑하고 책임감이 강한 대한민국의 평범한 가장입니다.',
  },
  {
    name: '마이콜',
    image: '/images/michael.jpg',
    details: [
      { label: '출생', value: '대한민국' },
      { label: '직업', value: '가수지망생' },
      { label: '특기', value: '노래 부르기' },
    ],
    description: '마이콜은 가수의 꿈을 꾸는 청년으로 둘리 일행과 함께 즐거운 시간을 보냅니다.',
  },
];

const Home = () => {

  return (
    <Container>
      {/* 슬라이드 섹션 */}
      <Carousel className='py-5'>
        {['main_slide_0.jpg',
        'main_slide_1.jpg',
        'main_slide_2.jpg',
          ].map((img, index)=>(
            <Carousel.Item key={index}>
            <img
              className="d-block w-100"
              src={`/images/${img}`}
              alt={`${index + 1}번째 slide`}
              style={{height:'300px', objectFit:'cover',}}
            />
            <Carousel.Caption className='bg-dark-op'>
              <h3>
                {/* {`${index + 1}번 슬라이드`} */}
                {
                  index === 0 ? '첫번째 슬라이드':
                  index === 1 ? '두번째 슬라이드':
                  '세번째 슬라이드'
                }
              </h3>
              <p>
                {
                  index === 0 ? '추억 속의 둘리를 만나러 떠나는 시간 여행, 여긴 둘리 뮤지엄!':
                  index === 1 ? '빙하 속에 잠든 아기 공룡, 둘리의 전설이 시작된 순간!':
                  '둘리에 대한 모든 것! 여기서 둘리와 친구들의 숨겨진 이야기를 찾아보세요.'
                }
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          ))}
      </Carousel>
      {/* 캐릭터 소개 카드 */}
      <Container>
        <h2 className='text-center'>둘리 뮤지엄</h2>
        <Row className='d-flex jusctify-content-spacebetween my-3'>
          {characterData.map((character, index)=>(
            <Col key={index} sm={12} md={6} lg={4} xl={2}>
              <Card className='text-center shadow'>
                {/* 이미지 영역 */}
                <Image
                  src={character.image}
                  alt={character.name}
                  roundedCircle
                  fluid
                  className='mx-auto mt-2'
                  style={{width:'50px', height:'50px', objectFit:'cover', border:'1px solid #ddd'}} />
                {/* 본문 영역 */}
                <Card.Body className='p-2'>
                  <Card.Title className='fw-bold'>{character.name}</Card.Title>
                  <Card.Text className='fs-6'>{character.description}</Card.Text>
                  <ul style={{listStyle:'none', paddingLeft:'0', textAlign:'left'}}>
                    {character.details.map((detail, index)=>(
                      <li>
                        <span className='fw-bold'>{detail.label}</span>:{detail.value}
                      </li>
                    ))}
                  </ul>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  )
}

export default Home