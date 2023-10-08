import Header from "./components/Header"
import bootstrap_logo from "./assets/bootstrap_logo.png"
import AboutUs from "./components/AboutUs"
import ContactUs from "./components/ContactUs"
import Footer from "./components/Footer"
import "./Home.css"

function Home(){
    return(
        <>
        {/* <div>
            <img src={bootstrap_logo} className="logo" alt="Bootstrap logo"/>
        </div> */}
            <Header/>
            <AboutUs/>
            <ContactUs/>
            <Footer/>
        </>
    )
}

export default Home