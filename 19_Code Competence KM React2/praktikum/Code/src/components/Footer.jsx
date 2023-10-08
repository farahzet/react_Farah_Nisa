import 'font-awesome/css/font-awesome.min.css';


function Footer(){
    return(
        <footer>
            <div className="container">
            <div className="row">
                <div className="footer-col-1">
                <h4>
                    <b>Our Social Media</b>
                </h4>
                <p>Follow Us On</p>
                <div className="SocialMedia">
                <a href="https://www.facebook.com/farahzahirotun.nisa.7/">
                    <i className="fa fa-facebook" />
                </a>
                <a href="https://www.instagram.com/afzaaheer_/">
                    <i className="fa fa-instagram" />
                </a>
                <a href="https://twitter.com/farahnisa7">
                    <i className="fa fa-twitter" />
                </a>
                </div>
                </div>
                <div className="footer-col-2">
                <h4>
                    <b>MyZet</b>
                </h4>
                <p>This is a zet's profile website. Enjoy the visit </p>
                <p>It's a very simple landing page</p>
                </div>
                <div className="footer-col-3">
                <h4>
                    <b>Personal</b>
                </h4>
                <p>Bantul,Yogyakarta</p>
                <p>
                    <b>Phone : </b> +62 82264xxxxx
                </p>
                <p>
                    <b>Email : </b> zet@gmail.com
                </p>
                </div>
            </div>
            <hr />
            <p className="copyright" style={{ textAlign: "center" }}>
                Copyright 2023 FarahZet
            </p>
            </div>
        </footer>
    )
}

export default Footer