import React, { useState } from "react";
import {
 Wrapper,
 ContentWrapper,
 Title,
 ItunesForm,
 Input,
 Select,
 Button,
} from "../styles/index.js";

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
  <Wrapper>
   <ContentWrapper>
    <Title>iTUNES SEARCH</Title>
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
      Search
     </Button>
    </ItunesForm>
   </ContentWrapper>
  </Wrapper>
 );
};

export default Header;
