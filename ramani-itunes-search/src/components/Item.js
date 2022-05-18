import React from "react";
import { Card, CardText } from "../common/index.js";

const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
 <Card>
  <div>{kind}</div>
  <CardText>{artistName}</CardText>
  <CardText>{trackName}</CardText>
  <div>
   <img src={artworkUrl100} alt="" width="150px"/>
  </div>
 </Card>
);

export default Item;
