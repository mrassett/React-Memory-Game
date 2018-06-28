//Card list should have map component - iterates - for every item in this array render this card
import React from 'react';
import Card from '../Card/Card';

let names = ["Travis", "Maggie", "Derp"];

const CardList = () => {
    return (
        <div>
            {Card.map(name => (
                <h1>{name}</h1>
            ))}
        </div>
    )
}

export default CardList;