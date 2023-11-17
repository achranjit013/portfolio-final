import React from "react";
import styled from "styled-components";
import { DarkTheme } from "../components/Themes";

const Logo = styled.span`
  display: inline-block;
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  font-family: "Pacifico", cursive;

  z-index: 3;
  font-size: 2.2rem;
  font-weight: 800;
`;

const LogoComponent = (props) => {
  return <Logo color={props.theme}>RA</Logo>;
};

export default LogoComponent;
