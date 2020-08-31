import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/esm/Container';
import Hero from './Hero';

function Skills(props) {

    return (
        <div>

        <Hero title={'Skills'} />

        <Container>
            <Row>
                <Col className='left'>
                    <div className='p-3'>
                        <span><label>HTML/CSS</label></span>
                        <ProgressBar striped variant="info" now={75} />
                    </div>
                    <div className='p-3'>
                        <span><label>JAVASCRIPT</label></span>
                        <ProgressBar striped variant="warning" now={75} />
                    </div>
                    <div className='p-3'>
                        <span><label>PHP</label></span>
                        <ProgressBar striped variant="info" now={75} />
                    </div>
                    <div className='p-3'>
                        <span><label>NODE JS</label></span>
                        <ProgressBar striped variant="warning" now={65} />
                    </div>
                </Col>
                <Col className='right'>
                    <div className='p-3'>
                        <span><label>Laravel</label></span>
                        <ProgressBar striped variant="warning" now={75} />
                    </div>
                    <div className='p-3'>
                        <span><label>REACTJS</label></span>
                        <ProgressBar striped variant="info" now={70} />
                    </div>
                    <div className='p-3'>
                        <span><label>BOOTSTARP</label></span>
                        <ProgressBar striped variant="warning" now={70} />
                    </div>
                </Col>
            </Row>
        </Container>

        </div>

    );

}


export default Skills;