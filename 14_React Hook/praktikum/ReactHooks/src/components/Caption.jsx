import React from "react";
import article from "../data";

const Caption = () => {
    const descEn = article.description.en;
    return(
        <>
        
                <p>{descEn}</p>

        </>
    )
}

export default Caption