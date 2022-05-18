import React from "react";
import { List } from "../common/index.js";
import Item from "./Item";

const ItemsList = ({ items }) => {
 console.log(items);
 const itemsArray = items?.map((item, index) => <Item key={index} {...item} />);

 return (
  <>
   <List>{itemsArray}</List>
  </>
 );
};

export default ItemsList;
