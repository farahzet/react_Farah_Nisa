import React from "react"
import { useNavigate } from "react-router-dom";
function Navbar(){
    const navigate = useNavigate();

    function handleClick(){
        navigate("/ChatAI")
        
    }

    function handleClickOpenAI(){
        navigate("/OpenAI")
    }

    return(
        <header>
            <div id="header_left">
            <h4>Simple Header</h4>
            </div>
            <div id="header_right" className="menu">
            <a href="menu1">Home</a>
            <a href= "" onClick={handleClick}>ChatAI</a>
            <a href="" onClick={handleClickOpenAI}>OpenAI</a>
            <a href="menu4">FAQs</a>
            <a href="menu5">About</a>
            </div>
        </header>
    )
}

export default Navbar