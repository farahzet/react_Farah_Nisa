import { Component } from "react";
import article from "../data";

class Article extends Component {

    render(){
        const descEn = article.description.en;
        return(
            <section className="content">
                <div className="d-grid gap-2 col-4 mx-auto ">
                <p>{descEn}</p>
            </div>
            </section>
            
        )
    }
}

export default Article