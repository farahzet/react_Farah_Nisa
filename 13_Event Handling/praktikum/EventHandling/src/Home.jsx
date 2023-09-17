import Header from "./components/Header"
import Form from "./components/Form"
import React, {components} from 'react'
import bootstrap_logo from "./assets/bootstrap_logo.png"
import Button from "./components/Button"
import './Home.css'
import Article from "./components/Article"
import FormAccount from "./components/FormAccount"
import Caption from "./components/Caption"


function Home(){
    return(
        <>
        {/* <div>
            <img src={bootstrap_logo} className="logo" alt="Bootstrap logo"/>
        </div> */}
            <Header/>
            {/* <Article/> */}
            <FormAccount/>
            {/* <Form/> */}
            <Button/>
        </>
    )
}

// class Home extends Component{
    
    
// }

export default Home