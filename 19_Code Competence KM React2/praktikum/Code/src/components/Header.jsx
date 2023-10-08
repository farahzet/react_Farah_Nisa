
function Header(){
    return(
        <header>
            <div className="navbar">
            <div className="logo">
                <h2>
                <b>MyZet</b>
                </h2>
            </div>
            <div id="menu">
                <ul className="nav justify-content-center">
                <li className="nav-item">
                    <a className="nav-link" aria-current="page" href="#">
                    Home
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    About
                    </a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">
                    Contact Us
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </header>
    )
}

export default Header