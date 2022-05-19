import React from "react";
import Item from "./Item";
import Header from "./Header";
import { Content } from "../styles/index.js";

const SearchPage = (props) => {
 const { items, mediaTypes, startSearch } = props;
 console.log(items);
 const itemsArray = items?.map((item, index) => <Item key={index} {...item} />);

 return (
  <>
   <Header startSearch={startSearch} mediaTypes={mediaTypes} />
   <Content>{itemsArray}</Content>
  </>
 );
};

export default SearchPage;
