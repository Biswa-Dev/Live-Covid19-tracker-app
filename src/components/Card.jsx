import React from "react";

function Card(props){
    return(
        <div className={"cards"+" "+props.class}>
            <p className="head {props.class}">{props.head}</p>
            <h1 className="value">{props.value}</h1>
        </div>
    );
}

export default Card;