import React, {useState, useEffect} from 'react'
import MovieDiv from "./MovieDiv";

function GetListOfMovies(){
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch("http://51.75.69.121/api/Movies")
            .then(response => response.json())
            .then(data => {
                setData(data)
            });
    }, []);

    return(
        <div>{data.map((singleMovie)=>(
            <MovieDiv key={singleMovie.name}
                name ={singleMovie.name}
                description ={singleMovie.description}
                duration = {singleMovie.duration}
                releaseDate = {singleMovie.releaseDate}
                movieLink = {singleMovie.imageLink}
            />
        ))}
        </div>
    );
}

export default GetListOfMovies