import React from "react";
import "./Nav.css";
import Requests from "./requests";

function Nav({ setSelectedOption }) {
  return (
    // on click, we're going to call setSelectedOption and pass the finishing url
    <div className="nav">
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchTrending);
        }}
      >
        Trending
      </h2>

      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchTopRated);
        }}
      >
        Top Rated
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchActionMovies);
        }}
      >
        Action
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchComedyMovies);
        }}
      >
        Comedy
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchHorrorMovies);
        }}
      >
        Horror
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchRomanceMovies);
        }}
      >
        Romance
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchMystery);
        }}
      >
        Mystery
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchScifi);
        }}
      >
        Sci-fi
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchWestern);
        }}
      >
        Western
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchAnimation);
        }}
      >
        Animation
      </h2>
      <h2
        onClick={() => {
          setSelectedOption(Requests.fetchTv);
        }}
      >
        Movie
      </h2>
    </div>
  );
}

export default Nav;
