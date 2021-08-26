import React, { useState } from 'react';
import '../App.css'
import { Link } from 'react-router-dom';


export function Navbar() {

const [ isActive, setActive] = useState("false");
const toggleClass = () => {
    setActive(!isActive);
};

return (
<div id='navbar'>
    <h1 id='title'>Kirsten Nelson</h1>
<ul className={isActive ? "navActive" : "navHidden" }>
    <li><a href='#'> Home </a></li>
    <li><a href='#'> About Me </a></li>
    <li><a href='#'> Projects </a></li>
    <li><a href='#'> Contact</a></li>
</ul>
<div id='burgerMenu' onClick={toggleClass}>
    <div id='line1'></div>
    <div id='line2'></div>
    <div id='line3'></div>
</div>
</div>

)};