import './App.css'
import {Button, Card, Col, Container, Row} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux"
import { changeShowState } from '../reducers/appReducer';
import { Navbar, Nav, Offcanvas } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import ScrollToTop from './ScrollToTop';
import HomePage from './HomePage';
import { useState } from 'react';


function NavigationBar() {
  const timeString = () => `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`;
    const [curTime, setCurTime] = useState(timeString());
    const [curDate, setCurDate] = useState(new Date().toDateString());
    function timer()
    {
        setCurTime(timeString());
        setCurDate(new Date().toDateString());
    }
    
    setInterval(() => timer(), 1000);

  const dispatch = useDispatch()
  return(
    <Navbar bg="light" expand={false} collapseOnSelect>

      <Container fluid className="d-flex justify-content-between">
      <Navbar.Toggle className="d-flex p-1 " aria-controls="offcanvasNavbar"/>
      <Navbar.Brand className="d-flex p-1 " href="#home">АС умный дом</Navbar.Brand>
      <div className="d-flex p-30 ">
      <Navbar.Text>
        Signed in: <a onClick={()=>dispatch(changeShowState())} href="#login">Log Out</a>
      </Navbar.Text>
      </div>
      
      <Navbar.Offcanvas
      id="offcanvasNavbar"
      aria-labelledby="offcanvasNavbarLabel"
      >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body >
        <Nav className="justify-content-end flex-grow-1 pe-3">
          <LinkContainer to="/">
            <Nav.Link>Дом</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/1">
            <Nav.Link>Управление</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/2">
            <Nav.Link>Энергопотребление</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/3">
            <Nav.Link>Настройки</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/4">
            <Nav.Link>Гостинная</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/5">
            <Nav.Link>Энергопотребление</Nav.Link>
          </LinkContainer>
        </Nav>
        <Row className="justify-content-md-center text-center"style={{marginTop: '1%'}} >
            <Col style={{background: 'purple'}}>
                <Card>
                    <Card.Header>Время</Card.Header>
                    <Card.Body>
                    <Card.Title>{curTime}</Card.Title>
                    <Card.Text>{curDate}</Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}



export default function App() {
 
  const isAuthorized = useSelector(state => state.app.loader)
  const dispatch = useDispatch()

  const Registration = () => <div>Регистрация</div>;

  const Login = () => (
    <div className='App'>
      <header className='App-header'>
      <Button onClick={()=>(dispatch(changeShowState()))}>Authorize</Button>
      </header>
    </div>
  )
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <div>
      {isAuthorized ? <NavigationBar/> : <div/>}
      {
      !isAuthorized ?
      <Switch>
        <Route path = "/registration" component = {Registration}/>
        <Route path = "/login" component = {Login}/>
        <Redirect to ="/login"/>
      </Switch>
      :
      <Switch>
      <Route exact path="/" component={HomePage}></Route>
      <Route path="/1" component={HomePage}></Route>
      <Route path="/2" component={HomePage}></Route>
      <Route path="/3" component={HomePage}></Route>
      <Route path="/4" component={HomePage}></Route>
      <Route path="/5" component={HomePage}></Route>
      <Route path="/6" component={HomePage}></Route>
      <Route path="/7" component={HomePage}></Route>
      <Route path="/8" component={HomePage}></Route>
      <Redirect to ="/"/>
      </Switch>
    }
    </div>
    </BrowserRouter>
  );
}
