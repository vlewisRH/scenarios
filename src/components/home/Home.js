import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Icon from '../icon/Icon';

import './Home.css';

class Home extends React.Component {
    render(){
        return(
            <Container fluid>
                <Row className='screen m-auto'>
                    <Col md={3} className="h-100">
                        <Row>
                            <Col md={4} className='m-2'>
                                < Icon />
                            </Col>
                        </Row>
                    </Col>
                    <Col md={9} className="h-100">test</Col>
                </Row>
            </Container>
        );
    }
}

export default Home;