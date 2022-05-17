import React, { useState } from "react";
import {
 HeaderContent,
 Title,
 ItunesForm,
 Input,
 Select,
 Button,
} from "../common/index.js";

const Header = (props) => {
 const [state, setState] = useState({
  searchText: "",
  searchMedia: "all",
 });

 const { mediaTypes, startSearch } = props;
 const { searchText, searchMedia } = state;
 const mediaOptions = mediaTypes.map((media) => (
  <option value={media} label={media} key={media} />
 ));

 const handleChange = (event) =>
  setState((state) => ({ ...state, [event.target.name]: event.target.value }));

 return (
  <HeaderContent>
   <Title>iTunes Search</Title>
   <ItunesForm>
    <Input
     type="text"
     name="searchText"
     value={searchText}
     placeholder="Search..."
     onChange={handleChange}
    />
    <Select name="searchMedia" value={searchMedia} onChange={handleChange}>
     {mediaOptions}
    </Select>
    <Button onClick={() => startSearch(searchText, searchMedia)}>
     <i className="material-icons">search</i>
    </Button>
   </ItunesForm>
  </HeaderContent>
 );
};

export default Header;
