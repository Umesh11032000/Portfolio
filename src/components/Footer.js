import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Footer() {

    return (
        <footer className="mt-5">
            <Container fluid={true}>
                <Row >
                    <Col className="p-0 d-flex justify-content-center">
                        &copy;2020 This site was made by Umesh.
                    </Col>
                </Row>
            </Container>
        </footer>
    );

}

export default Footer;