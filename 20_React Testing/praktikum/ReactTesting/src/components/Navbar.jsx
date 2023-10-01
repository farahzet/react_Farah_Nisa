import React from "react"
function Navbar(){
    return(
        <header>
            <div id="header_left">
            <h4>Simple Header</h4>
            </div>
            <div id="header_right" className="menu">
            <a href="menu1">Home</a>
            <a href="menu2">Feature</a>
            <a href="menu3">Pricing</a>
            <a href="menu4">FAQs</a>
            <a href="menu5">About</a>
            </div>
        </header>
    )
}

export default Navbar