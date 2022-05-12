import { useEffect, useState } from "react";
import "./Main.style.css";

export const Main = () => {
  const [movies, setMovies] = useState([]);
  const image_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    //consumir a api...

    fetch(
      "https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <section id="dsmovie-card-list" className="container">
      <div className="dsmovie-card">
        {movies.map((movies) => {
          return <Movie key={movie.id}>
            <a href="https://google.com.br"<img src={`${image_path}${movie.poster_path}`}>             
            <span>{movie.title}</span>
          </Movie>;
        })
      </div>
    </section>
  );
};
