import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import About from './pages/About.jsx';
import Gallery from './pages/Gallery.jsx';
import Contact from './pages/Contact.jsx';
import Shop from './pages/Shop.jsx';
import FanArt from './pages/FanArt.jsx';
import { Navbar, Nav, Container, Row, Col } from 'react-bootstrap';
import './override.css';

function App() {
  return (
    <Router>
      <Navbar bg='dark' variant='dark' expand='lg'>
        <Container>
          {/* 로고 */}
          <Navbar.Brand href='/'>둘리뮤지엄</Navbar.Brand>
          {/* 내비게이션 */}
          <Navbar.Toggle aria-controls='navbar-nav' />
          <Navbar.Collapse id='navbar-nav'>
            <Nav className='ms-auto'>
              <Nav.Link href='/about'>About</Nav.Link>
              <Nav.Link href='/gallery'>Gallery</Nav.Link>
              <Nav.Link href='/contact'>Contact</Nav.Link>
              <Nav.Link href='/shop'>Shop</Nav.Link>
              <Nav.Link href='/fanart'>Fan Art</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/gallery' element={<Gallery />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/shop' element={<Shop />} />
          <Route path='/fanart' element={<FanArt />} />
        </Routes>
      </Container>
      {/* footer */}
      <footer className='bg-dark text-white py-3' >
        <Container>
          <Row>
            <Col className='text-center'>
              <p>&copy; 2025 둘리뮤지엄. All Right Reserved.</p>
              <p>
                <a href="/" className='text-white'>
                  개인정보처리방침
                </a>{" "}|{" "}
                <a href="/">
                  이용약관
                </a>{" "}|{" "}
                <a href="/">
                  고객센터
                </a>
              </p>
            </Col>
          </Row>
        </Container>
      </footer>
    </Router>
  );
}

export default App;