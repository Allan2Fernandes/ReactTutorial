import React from 'react'
import MovieDiv from "./MovieDiv";

class MovieClass{
    constructor(name, description, duration, releaseDate, movieLink) {
        this.name = name;
        this.description = description;
        this.duration = duration;
        this.releaseDate = releaseDate;
        this.movieLink = movieLink
    }
}

function GetListOfMovies(){
    let MoviesList = [
        new MovieClass("Titanic", "Ship attracted to ice", "150", "10-10-1950", "https://preview.redd.it/co63rm6tnl791.jpg?width=640&crop=smart&auto=webp&v=enabled&s=40803272bb9cbecb47455bdeceffb5c4450bd8c8"),
        new MovieClass("Avatar", "Aliens with guns", "200", "10-12-2010", "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F6%2F2022%2F12%2F06%2FAvatar-The-Last-Airbender-and-Avatar-120622.jpg")
    ]
    return(
        <div>{MoviesList.map((singleMovie)=>(
            <MovieDiv
                name ={singleMovie.name}
                description ={singleMovie.description}
                duration = {singleMovie.duration}
                releaseDate = {singleMovie.releaseDate}
                movieLink = {singleMovie.movieLink}
            />
        ))}
        </div>
    );
}

export default GetListOfMovies