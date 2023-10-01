import Logo from '../assets/image.png'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Hero(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/form")
    }

    return(
        <section className='Hero'>
        <div className="content">
            <div id="content_left">
                <h1>Better Solution For Your Bussiness</h1>
                <p>We are team of talented designers making website with Bootstrap</p>
                <button onClick={handleClick} class="btn2">Get Started</button>   
                <a>Watch Video </a>
            </div>
            <div id="content_right">
                <img src={Logo} alt="Bootstrap" width={500} height={300} />
            </div>
        </div>

        <div className="content2">
            <h4>Join Our Newsletter</h4>
            <p>Tamen quem nulla quae legam multos aute sint culpa legam noster magna</p>
            <div id="sub">
            <input type="text" name="subs" id="subs" />
            <button className="btn2">Subscribe</button>
            </div>
        </div>
        </section>
    )
}

export default Hero