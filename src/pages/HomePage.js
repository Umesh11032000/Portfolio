import React from 'react';

import Hero from '../components/Hero';
import Carousel from '../components/Carousel';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';

function HomePage(props) {

    return(
        <div>
            <Row>
                <Col>
                    <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
                </Col>
                <Col>
                </Col>
                    <Carousel />
            </Row>
        </div>
    );

}

export default HomePage;