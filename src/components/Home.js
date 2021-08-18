import React from 'react';
import '../App.css'
import Me from '../assets/images/Me.jpg'


export function Home() {
return (
    <>
<div>
<h1 id="title">Kirsten Nelson</h1>
<h1 id="subtitle">Full Stack Web Developer</h1>
</div>
<div id='aboutMe'>
<img id="selfImg" src={Me} />
<p>I am a recent graduate of the University of Washington Coding Bootcamp living in Everett Washington. I have experience working with HTML, CSS, Javascript, 
    JQuery, React, MySQL, Sequalize, MongoDB, Mongoose, Bootstrap, Bulma, Github, Heroku and more.  </p>
</div>
</>
)};