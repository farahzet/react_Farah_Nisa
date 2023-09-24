
function Header(){
    return(
        <header>
            <div id="header_left">
            <h4>Simple Header</h4>
            </div>
            <div id="header_right">
            <ul className="nav nav-pills">
                <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                    Home
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Features
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    Pricing
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    FAQs
                </a>
                </li>
                <li className="nav-item">
                <a className="nav-link" href="#">
                    About
                </a>
                </li>
            </ul>
            </div>
        </header>

    )
}

export default Header