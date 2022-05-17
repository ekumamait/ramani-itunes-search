import styled, { createGlobalStyle } from "styled-components";
import Palette from "./palette";

export const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
    width: 100%;
	font-family: "Raleway";
	margin: 0;
	background-color: ${Palette("Green", "golden")};
  }
`;

export const Content = styled.div`
 width: 100%;
 height: 100%;
`;

export const HeaderContent = styled.div`
 position: fixed;
 width: 100%;
 height: 100px;
 background-color: ${Palette("Primary", "dark")};
`;

export const Title = styled.h2`
 margin: 10px 0 0;
 text-align: center;
 letter: 0.52px;
 font-size: 32px;
 font-weight: 700;
 font-family: "Raleway";
 color: ${Palette("White")};
`;

export const ItunesForm = styled.div`
 display: flex;
 align-items: center;
`;

export const Button = styled.button`
 background-color: ${Palette("Green", "orange")};
 color: ${Palette("White")};
 border-radius: 10px;
 top: 400px;
 left: 30px;
 height: 40px;
 width: 190px;
 :hover {
  cursor: pointer;
  background-color: ${Palette("Secondary", "dark")};
 }
 :focus {
  outline-color: ${Palette("Secondary")};
 }
`;

export const Input = styled.input`
 height: 40px;
 margin: 0 1em;
 padding: 0 1em;
 background-color: ${Palette("Green", "golden")};
 border-radius: 0.5em;
 color: ${Palette("White")};
 font-size: 16px;
 ::placeholder {
  color: ${Palette("White", "transparent_50")};
 }
 :focus {
  outline-color: ${Palette("Secondary")};
 }
`;

export const Select = styled.select`
 height: 40px;
 margin: 0 1em 0 0;
 border-radius: 0.5em;
 background-color: ${Palette("Green", "golden")};
 color: ${Palette("White")};
 font-size: 16px;
 :focus {
  outline-color: ${Palette("Secondary")};
 }
`;

export const Card = styled.div`
 height: 350px;
 width: 350px;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 text-align: center;
 white-space: nowrap;
 margin: 10px 5px;
 padding: 5px;
 background-color: ${Palette("Grey", 600)};
 color: ${Palette("White")};
 :hover {
  box-shadow: 0 0 0.75rem ${Palette("Green", "orange")};
 }
`;

export const CardText = styled.div`
 overflow: hidden;
 text-overflow: ellipsis;
`;

export const List = styled.div`
 display: flex;
 flex-wrap: wrap;
 flex: 0 1 auto;
 padding-top: 100px;
 padding-left: 40px;
`;

export const LoaderContainer = styled.div`
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
