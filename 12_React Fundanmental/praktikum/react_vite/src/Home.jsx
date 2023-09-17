import Header from "./components/Header"
import Form from "./components/form"
import bootstrap_logo from "./assets/bootstrap_logo.png"

function Home(){
    return(
        <>
        {/* <div>
            <img src={bootstrap_logo} className="logo" alt="Bootstrap logo"/>
        </div> */}
            <Header/>
            <Form/>
        </>
    )
}

export default Home