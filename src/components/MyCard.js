import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import CardGroup from 'react-bootstrap/CardGroup';
import Col from 'react-bootstrap/Col';
import CardMyCompetencies from './CardMyCompetencies';
import me from '../me.png';
import {myCompetencies} from '../myCompetencies';
import {myColTechnologi} from '../myColTechnologi';

class MyCard extends Component {
    render() {
        return (
            <Card className='card'>
                <Row className='cardMe'>
                    <Card.Img width={250} src={me} rounded variant="top"></Card.Img>
                    <Card.Title className='myText'>Михеева Екатерина Андреевна</Card.Title>
                    <Card.Text className='myText'>Мои компетенции:</Card.Text>
                </Row>
                <Row className='myRow'>
                    <CardGroup className='myCompetencies'>
                        {myCompetencies.map(nameCompetencies =>
                            <Col>
                                <CardMyCompetencies myCompetencies={nameCompetencies}/>
                            </Col> 
                        )
                        }
                    </CardGroup>
                </Row>
                <Row>
                    <Card.Text className='myText'>Хочу изучить:</Card.Text>
                </Row>
                <Row >
                    <CardGroup className='myColTechnologi'>
                        {myColTechnologi.map(nameCompetencies =>
                            <Col>
                                <CardMyCompetencies myCompetencies={nameCompetencies}/>
                            </Col> 
                        )
                        }
                    </CardGroup>`
                </Row>
            </Card>
        );
    }
}

export default MyCard;
