import React, { useState } from "react";
import Header from "../components/Header";
import ItemsList from "../components/List";
import { itunesApiRequest } from "../utils/api";
import { mediaTypes } from "../utils/index";
import { GlobalStyle, Content } from "../common/index.js";
import { LoaderContainer } from "../common/index.js";
import { Oval as Loader } from "react-loader-spinner";

const App = () => {
 const [searchResults, setsearchResults] = useState([]);
 const [loading, setLoading] = useState(false);
 const [errorMessage, setErrorMessage] = useState(null);

 const updateSearch = async (text, media) => {
  const { data } = await itunesApiRequest(
   text,
   media,
   setLoading,
   setErrorMessage
  );
  setsearchResults([...searchResults, ...data.results]);
 };

 return (
  <>
   <GlobalStyle />
   <div>
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
     <Content>
      <Header mediaTypes={mediaTypes} startSearch={updateSearch} />
      <ItemsList items={searchResults} />
     </Content>
    )}
   </div>
  </>
 );
};

export default App;
