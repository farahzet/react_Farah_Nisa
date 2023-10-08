import background from "../assets/city.jpg"

function AboutUs(){
    return(
        <section className="WelcomePage" style={{ backgroundImage: `url(${background})`}} >
            <div id="row">
                <div className="col-md-12 ">
                <h1 className="text-white">WELCOME TO MY WEBSITE!</h1>
                <p style={{ position: "center" }}>
                    Thank You For Joining This Website. Enjoy the visit !
                </p>
                <a href="" className="btn">
                    Explore Now →
                </a>
                </div>
            </div>
        </section>
    )
}

export default AboutUs