import React from 'react'
import logo from "../img/logo.jpg"
import {Link} from 'react-router-dom'

export default function Intro() {
    return (
        <div className='intro'>
            <img src={logo} alt="Hermon Samson" width='150px'/>
            WELCOME TO MY PORTOFOLIO
            <h4>Thanks for visiting to my portofolio. My portofolio consists <br />
            of five components, <br />
            <li><Link to='/about' className='intro-p' >Something About me</Link></li>
            <li><Link to='/skills' className='intro-p'>Skills that I have mastered</Link></li>
            <li><Link to='/education' className='intro-p'>My education I've graduated of</Link></li>
            <li><Link to='/repos' className='intro-p'>Check out my repository in My Github</Link></li>
            <li><Link to='/contact' className='intro-p'>And finally Contact me page if you want to contact me</Link></li></h4>
        </div>
    )
}
