import React from "react";



function Popup(props){

    return (
        <div className={"popup"}>
            <p>{props.name}</p>
            <p>{props.duration}</p>
        </div>
    )
}

export default Popup