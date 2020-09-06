import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Container from 'react-bootstrap/esm/Container';

class SkillsPage extends React.Component {
    render() {
        return (
            <div >
                <h1 className='skill-text' >
                    Skills
                </h1>
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
                                <span><label>NODE JS</label></span>
                                <ProgressBar striped variant="info" now={65} />
                            </div>

                            <div className='p-3 pb-3'>
                                <span><label>PHP</label></span>
                                <ProgressBar striped variant="warning" now={75} />
                            </div>
                        </Col>
                        <Col className='right'>

                            <div className='p-3'>
                                <span><label>Laravel</label></span>
                                <ProgressBar striped variant="warning" now={75} />
                            </div>
                            <div className='p-3'>
                                <span><label>REACT JS</label></span>
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

}

export default SkillsPage;