import { Component } from "react";

class Button extends Component{
    constructor(props){
        super(props)

        this.state = {
            randomNumber : null,
        };
    }

    createRandomNumber = () => {
        const RandomNumber = Math.floor(Math.random()* 100);
        console.log('Random Number = ', RandomNumber);
        this.setState({randomNumber : RandomNumber});
    };

    render(){
        return(
            // <div className="d-grid gap-2 col-4 mx-auto">
                

            //      {/* <button onClick={this.createRandomNumber}>Click!</button> */}
            // </div>   
            <button onClick={this.createRandomNumber}
            type="submit"
            className="btn btn-primary"

            >
            Submit
            </button>  

        );
    }
}

export default Button