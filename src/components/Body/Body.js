import React from "react";
import CardList from '../CardList/CardList';

const Body = () => {
    return (
        <div className="body">
            <div>
                <h2>Clicky Game</h2>
                <p>Game instructions here</p>
            </div>
            <CardList />
        </div>
    )
}

export default Body;