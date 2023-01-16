import React from "react";
import { Button } from "react-bootstrap";
import noimg from "./noimg.png";
const Details = ({ movie, handleClose }) => {
  var imgstr = noimg;
  var imdb='NA';
  if (movie.rating != null) imdb = movie.rating.average;
  if (movie.image != null) imgstr = movie.image.original;
  return (
    <div>
      <img
        className="card-img-top"
        style={{ width: "36rem" }}
        src={imgstr}
      />
      <h1>{movie.name}</h1>
      <h4>Rating: {imdb}</h4>
      <h5>Release Date: {movie.premiered}</h5>
      <br></br>
      <h1>Overview</h1>
      <div>
      {movie.summary}
      </div>

      <Button type="button" class="btn btn-primary" onClick={() => handleClose()}>Close</Button>
    </div>
  );
};

export default Details;
