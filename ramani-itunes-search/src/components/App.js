import React, { useState, useEffect } from "react";
import "../App.css";
import Header from "./Header";
import Itunes from "./Itunes";
import Search from "./Search";
import {Oval as Loader} from "react-loader-spinner";
import styled from "styled-components";

const MOVIE_API_URL = "";

const LoaderContainer = styled.div`
 position: absolute;
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 font-size: 16px;
 font-weight: 500;
 color: #fff;
 height: 100%;
 width: 100%;
 background-image: linear-gradient(
  to right top,
  #161c0a,
  #24342e,
  #3e4c4e,
  #616569,
  #808080
 );
 top: 0;
 left: 0;
`;

const App = () => {
 const [loading, setLoading] = useState(true);
 const [movies, setMovies] = useState([]);
 const [errorMessage, setErrorMessage] = useState(null);

 useEffect(() => {
  fetch(MOVIE_API_URL)
   .then((response) => response.json())
   .then((jsonResponse) => {
    setMovies(jsonResponse.Search);
    setLoading(false);
   });
 }, []);

 const search = (searchValue) => {
  setLoading(true);
  setErrorMessage(null);

  fetch(``)
   .then((response) => response.json())
   .then((jsonResponse) => {
    if (jsonResponse.Response === "True") {
     setMovies(jsonResponse.Search);
     setLoading(false);
    } else {
     setErrorMessage(jsonResponse.Error);
     setLoading(false);
    }
   });
 };

 return (
  <div className="App">
   <Header text="RAMANI" />
   <Search search={search} />
   <p className="App-intro">Sharing a few of our favourite movies</p>
   <div className="movies">
    {loading && !errorMessage ? (
     <LoaderContainer>
      <Loader color="#eb7924" />
      <div>
       {" "}
       <p>RAMANI</p>{" "}
      </div>
     </LoaderContainer>
    ) : errorMessage ? (
     <div className="errorMessage">{errorMessage}</div>
    ) : (
     movies.map((movie, index) => (
      <Itunes key={`${index}-${movie.Title}`} movie={movie} />
     ))
    )}
   </div>
  </div>
 );
};

export default App;
