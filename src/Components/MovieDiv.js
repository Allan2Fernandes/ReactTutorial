import React, {useState} from 'react'
import PopUp from "./PopUp";




function GetMovieDiv(props){
    const [showPopup, setShowPopup] = useState(false);
    let divStyle = {
        borderColor: "black"
    }

    const onClickHandler = () =>{
        setShowPopup(!showPopup);
    }



    let duration = props.duration + " minutes"
    return (
        <div style={divStyle} onClick={onClickHandler}>
            {showPopup && (
                <PopUp name = {props.name} duration ={props.duration}/>
            )}
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <p>{duration}</p>
            <p>{props.releaseDate}</p>
            <a>
                <img src={props.movieLink} height={"300"}/>
            </a>
            <hr/>
        </div>
    )
}







export default GetMovieDiv
