import logo from "../images/logo_full.png";
import styled from "styled-components"

const BigHeader = styled.h1`
  padding: 50px;
  font-size: 50px;
  text-align: center;
`;

const BigLogo = styled.img.attrs({
  src: `${logo}`
})`
  width: 50%;
  height: auto;
  margin: auto;
`;



export default function About() {
  return (
    <div>
      <BigHeader>About Us</BigHeader>
      <BigLogo alt="logo" />
    </div>
  );
}