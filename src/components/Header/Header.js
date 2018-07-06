import React from "react";
import "./Header.css";
import Card from "../Card"

const Header = props => (
<div className="header">
<div className="title">{props.children}</div>
{/* <div className="score">Score:{props.score}</div> */}
</div>
);

export default Header;
