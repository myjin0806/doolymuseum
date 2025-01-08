import React from 'react'
import { Container, Alert, Form, Button } from 'react-bootstrap'

const Contact = () => {
  return (
    <Container className='my-5'>
      <h2 className='text-center'>둘리에게 연락하기</h2>
      <Alert className='bg-secondary my-3'>둘리와의 팬미팅이나 이벤트에 대한 문의를 남겨주세요!</Alert>
      <Form.Group>
        <Form.Label>이름</Form.Label>
        <Form.Control type='text' placeholder='이름을 입력하세요'></Form.Control>
        <Form.Label>이메일</Form.Label>
        <Form.Control type='email' placeholder='이메일을 입력하세요'></Form.Control>
        <Form.Label>메세지</Form.Label>
        <Form.Control
          as="textarea"
          placeholder="메세지를 입력하세요"
          style={{
            resize: 'vertical',
            minHeight: '80px',
            height: 'auto',
            overflow: 'auto'}}
        />
        <Button className='mt-3'>보내기</Button>
      </Form.Group>
    </Container>
  )
}

export default Contact