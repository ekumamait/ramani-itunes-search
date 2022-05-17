import React, { useState, useEffect } from "react";
import { List, LoaderContainer } from "../common/index.js";
import { Oval as Loader } from "react-loader-spinner";
import Item from "./Item";

const ItemsList = ({ items }) => {
 const [loading, setLoading] = useState(true);
 const [errorMessage, setErrorMessage] = useState(null);
 const itemsArray = items?.map((item, index) => <Item key={index} {...item} />);

 useEffect(() => {
	setLoading(true);
	setErrorMessage(null);
  if (itemsArray) {
   setLoading(false);
  } else {
   setErrorMessage(errorMessage);
   setLoading(false);
  }
 }, [itemsArray, errorMessage]);

 return (
  <>
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
     <List>{itemsArray}</List>
    )}
   </div>
  </>
 );
};

export default ItemsList;
