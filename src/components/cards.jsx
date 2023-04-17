import React from "react";
import Name from "./name";
function Card(props) {
    return (
        <div className="card">
            <div className="top">
            <p>{props.id}</p>
                <Name name={props.name}/>
                <img className="circle-img" src={props.img} alt="avatar_img" />
            </div>
            <div className="bottom">
                <p className="info">{props.tel}</p>
                <p className="info">{props.email}</p>
            </div>
        </div>
    )
}

export default Card;