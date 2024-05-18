import React from 'react';
import Card from 'react-bootstrap/Card';

const CardMyCompetencies = (props) => {
    return (
        <Card className='m-2 cardCompetencies'>
            <Card.Title>{props.myCompetencies}</Card.Title>
        </Card>
    );
}

export default CardMyCompetencies;
