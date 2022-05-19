import React from "react";
import { Card, CardText, Image, Kind } from "../styles/index.js";

const Item = ({ kind, artistName, trackName, artworkUrl100 }) => (
 <Card>
  <Image src={artworkUrl100} alt="image" />
  <Kind>{kind}</Kind>
  <CardText>{artistName}</CardText>
  <CardText>{trackName}</CardText>
 </Card>
);

export default Item;
