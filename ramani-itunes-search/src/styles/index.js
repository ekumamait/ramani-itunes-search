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

export const Card = styled.div`
 height: 350px;
 width: 18%;
 display: flex;
 flex-direction: column;
 justify-content: space-between;
 text-align: center;
 white-space: nowrap;
 margin: 5px;
 padding: 30px;
 cursor: pointer;
 background-color: ${Palette("Grey", 600)};
 color: ${Palette("White")};
 position: relative;

 :hover {
  box-shadow: 0 0 20px rgba(235, 116, 1, 0.6);
 }
`;

export const CardText = styled.div`
 overflow: hidden;
 text-overflow: ellipsis;
`;

export const Image = styled.img`
 width: 100%;
 height: 84%;
 background-fit cover;
`;

export const Kind = styled.div`
 position: absolute;
 bottom: 0;
 right: 0;
 padding: 3px 5px;
 background: ${Palette("Green", "orange")};
 font-size: 13px;
`;

export const Wrapper = styled.div`
 position: fixed;
 top: 0;
 width: 100%;
 background-color: ${Palette("Primary", "dark")};
 padding: 20px 0px;
 z-index: 1;
`;

export const ContentWrapper = styled.div`
 display: flex;
 align-items: center;
 justify-content: space-between;
 width: 95%;
 margin: 0 auto;
`;

export const Content = styled.div`
 width: 100%;
 margin-top: 80px;
 display: flex;
 flex-wrap: wrap;
 justify-content: center;
 background: #5c5c5c;
 padding: 10px 0 20px 0px;
`;

export const Title = styled.h2`
 margin: 0;
 letter: 0.52px;
 font-size: 24px;
 font-weight: 700;
 color: ${Palette("White")};
`;

export const ItunesForm = styled.div`
 display: flex;
 align-items: center;
`;

export const Input = styled.input`
 height: 40px;
 width: 300px;
 padding: 0 1em;
 background-color: white;
 border-bottom-left-radius: 0.5em;
 border-top-left-radius: 0.5em;
 color: black;
 font-size: 16px;
 border: none;
 ::placeholder {
  color: rgba(0, 0, 0, 0.4);
 }
 :focus {
  outline: none;
 }
`;

export const Select = styled.select`
 height: 40px;
 width: 120px;
 padding: 0 10px;
 margin: 0 1em 0 0;
 border-top-right-radius: 0.5em;
 border-bottom-right-radius: 0.5em;
 background-color: ${Palette("White", "transparent_50")};
 color: ${Palette("White")};
 font-size: 16px;
 :focus {
  outline: none;
 }
`;

export const Button = styled.button`
 background-color: ${Palette("Green", "orange")};
 color: ${Palette("White")};
 border-radius: 10px;
 height: 40px;
 width: 100px;
 border: none;
 :hover {
  cursor: pointer;
  background-color: ${Palette("Secondary", "dark")};
 }
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