import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';

class TechnologicalCompetencies extends Component {
    render() {
        return (
            <Card className='m-2 cardCompetencies'>
                <Card.Title>{this.props.myTechnologicalCompetencies}</Card.Title>
            </Card>
        );
    }
}

export default TechnologicalCompetencies;
