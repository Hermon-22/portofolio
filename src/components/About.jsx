import React from 'react'
import Progimg from '../img/200w.gif'

export default function About() {
    return (
        <div>
            <h1>About me</h1>
            <h4 className='p-tag'>
                <ul style={{fontFamily:'cursive'}}>
                    <h4> I am Hermon, Front-End web developer with no years of experience in web-development <br />
                    but I can say I have better knowledge on designing and developing website. I begin self-studying with <br />
                    HTML and CSS, then I later joined some bootcamp to help me to become good web developer, it helped me a <br />
                    lot. You can see to the below list Who I am</h4>
                    
                    <li> Communicative, team working guy</li><br />
                    <li>  Social, joyful and collaborative</li><br />
                    <li>   Hard worker, with love, passion and plans</li>
                </ul>
                <img src={Progimg} alt="programmer" width='250px'/>
            </h4>
        </div>
    )
}
