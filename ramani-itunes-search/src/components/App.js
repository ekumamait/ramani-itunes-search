import React, { useState } from "react";
import Header from "../components/Header";
import ItemsList from "../components/List";
import { itunesApiRequest } from "../utils/api";
import { mediaTypes } from "../utils/index";
import { GlobalStyle, Content } from "../common/index.js";

const App = () => {
 const [state, setState] = useState({ searchResults: [] });

 const updateSearch = async (text, media) => {
  const response = await itunesApiRequest(text, media);
  setState((state) => ({ ...state, state: response.results }));
 };
 console.log(state.searchResults);
 return (
  <>
   <GlobalStyle />
   <Content>
    <Header mediaTypes={mediaTypes} startSearch={updateSearch} />
    <ItemsList items={state.searchResults} />
   </Content>
  </>
 );
};

export default App;