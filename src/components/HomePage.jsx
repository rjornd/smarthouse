import { useEffect, useState } from "react";
import { Card, Col, Container, Modal, NavDropdown, Row } from "react-bootstrap";
import {Lightbulb , ThermometerHalf, DropletHalf} from 'react-bootstrap-icons'
import { useDispatch, useSelector } from "react-redux";
import { setAtticData, setBathroomData, setBedroomData, setKitchenData, setLivingRoomData } from "../reducers/roomsReducer";
import Graphics from "./Graphics";

const iconsSize = 26;

export default function HomePage()
{
    const defaultRooms = ['Спальня', 'Кухня', 'Мансарда', 'Гостинная', 'Санузел']
    const kitchen = useSelector(state => state.rooms.kitchen)
    const attic = useSelector(state => state.rooms.attic)
    const bedroom = useSelector(state => state.rooms.bedroom)
    const livingroom = useSelector(state => state.rooms.livingroom)
    const bathroom = useSelector(state => state.rooms.bathroom)
    const dispatch = useDispatch()
    
    //установка данных с датчиков при загрузке страницы TODO: замениить на запросы с сервера
    useEffect(
        getAllRoomsData,
        []
    )
    function getAllRoomsData()
    {
        dispatch(setKitchenData({temp: "10℃", light: "65%"}));
        dispatch(setAtticData({temp: "15℃", light: "95%"}));
        dispatch(setBedroomData({temp: "25℃", light: "55%"}));
        dispatch(setBathroomData({temp: "22℃", light: "33%"}));
        dispatch(setLivingRoomData({temp: "20℃", light: "40%"}));
    }
    
    const [fullscreen, setFullscreen] = useState(true);
    const [show, setShow] = useState(false);
    let [openedModal, setOpenedModal] = useState('');
    function handleShow(room) {
        setOpenedModal(room);
        setFullscreen(true);
        setShow(true);
    }

    
    return (
        <>
    <Container fluid="sm" style={{marginTop: '1vh', border:'2px solid #cecece', borderRadius: '10px'}}>
        <Row className="justify-content-md-center" >
            <Col style={{background: 'black'}}>
                <Card role="button" onClick={()=>handleShow("Мансарда")}>
                <Card.Header className="text-center">Мансарда</Card.Header>
                    <Card.Body>
                    <Row className="justify-content-md-center text-center" >
                    <Col>
                    <Card>
                        <Card.Title ><Lightbulb style={{marginTop: '5%'}}  color="darkorange" size={iconsSize}/></Card.Title>
                        <Card.Text>{attic?.light}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>{attic?.temp}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Title><DropletHalf style={{marginTop: '5%'}} color="royalblue" size={iconsSize}/></Card.Title>
                        <Card.Text>46%</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card>
                        <Card.Title><DropletHalf style={{marginTop: '5%'}} color="royalblue" size={iconsSize}/></Card.Title>
                        <Card.Text>46%</Card.Text>
                    </Card>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="justify-content-md-center text-center" style={{marginTop: '1%'}}>
            <Col style={{background: 'gray'}}>
                <Card role="button" onClick={()=>handleShow("Санузел")}>
                    <Card.Header>Санузел</Card.Header>
                    <Card.Body>
                    <Row xs={2} md={4} className="justify-content-md-center text-center" >
                    <Col >
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title ><Lightbulb style={{marginTop: '5%'}}  color="darkorange" size={iconsSize}/></Card.Title>
                        <Card.Text>{bathroom?.light}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>{bathroom?.temp}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{background: 'red'}}>
                <Card role="button" onClick={()=>handleShow("Спальня")}>
                    <Card.Header>Спальня</Card.Header>
                    <Card.Body>
                    <Row  xs={2} md={4} className="justify-content-md-center text-center" >
                    <Col >
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title ><Lightbulb style={{marginTop: '5%'}}  color="darkorange" size={iconsSize}/></Card.Title>
                        <Card.Text>{bedroom.light}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>{bedroom.temp}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row className="justify-content-md-center text-center" style={{marginTop: '1%'}}>
            <Col style={{background: 'purple'}}>
                <Card role="button" onClick={()=>handleShow("Кухня")}>
                    <Card.Header>Кухня</Card.Header>
                    <Card.Body>
                    <Row  xs={2} md={4} className="justify-content-md-center text-center" >
                    <Col >
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title ><Lightbulb style={{marginTop: '5%'}}  color="darkorange" size={iconsSize}/></Card.Title>
                        <Card.Text>{kitchen.light}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>{kitchen.temp}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
            <Col style={{background: 'yellow'}}>
                <Card role="button" onClick={()=>handleShow("Гостинная")}>
                    <Card.Header>Гостинная</Card.Header>
                    <Card.Body>
                    <Row xs={2} md={4} className="justify-content-md-center text-center" >
                    <Col >
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title ><Lightbulb style={{marginTop: '5%'}}  color="darkorange" size={iconsSize}/></Card.Title>
                        <Card.Text>{livingroom.light}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>{livingroom.temp}</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    <Col>
                    <Card style={{marginTop: '1%'}}>
                        <Card.Title><ThermometerHalf style={{marginTop: '5%'}} color="crimson" size={iconsSize}/></Card.Title>
                        <Card.Text>40 ℃</Card.Text>
                    </Card>
                    </Col>
                    </Row>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    <Modal  show={show} fullscreen={fullscreen} onHide={() => setShow(false)}>
    <Modal.Header closeButton>
      <Modal.Title>
      <NavDropdown
          
          title={openedModal}
          menuVariant="light"
        >
            {   defaultRooms.map((val) => {
                if(val!=openedModal) return (
                <NavDropdown.Item onClick={()=>setOpenedModal(val)}>{val}</NavDropdown.Item>);
               })
            }
          
        </NavDropdown>
          
        </Modal.Title>
    </Modal.Header>
    <Modal.Body><Graphics props={
        {
            selectedRoom: openedModal,
            selectedDevice: 1
        }
        }></Graphics></Modal.Body>
    </Modal>
    </>
    );
}
