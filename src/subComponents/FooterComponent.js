import React from "react";
import { styled } from "styled-components";
import { DarkTheme } from "../components/Themes";

const Footer = styled.span`
  color: ${(props) =>
    props.color === "dark" ? DarkTheme.text : DarkTheme.body};
  z-index: 3;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.1rem;
`;

const FooterCopy = styled.span`
  display: inline-block;
  font-size: 0.9rem;
  font-weight: 700;
`;

const FooterText = styled.span`
  display: inline-block;
  font-size: 0.6rem;
  font-weight: 600;
`;

const FooterComponent = (props) => {
  return (
    <Footer color={props.theme}>
      <FooterCopy>&copy;</FooterCopy>
      <FooterText>All Rights Reserved. Made by R. Acharya</FooterText>
    </Footer>
  );
};

export default FooterComponent;
