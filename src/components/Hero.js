import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';



const Hero = (props) => {

    return (
        <Jumbotron className="bg-transparent jumbotron-fluid">
            <Container fluid={true} className='col-auto' >
                <Row className="justify-content-center">
                    <Col md={6}>
                        <img
                            src={props.imgsrc}
                            className='home-banner'
                            alt='home banner'
                        />
                    </Col>

                    <Col className='py-5' md={6} >
                        <h1 className='name-title'>
                            {props.title}
                        </h1>
                        <h3 className='name-subtitle'>
                            {props.subtitle}
                        </h3>
                        <NavLink to={props.link} className="btn btn-outline-warning">
                            {props.btn}
                        </NavLink>
                    </Col>
                </Row>
            </Container>
        </Jumbotron>
    );

}


export default Hero;