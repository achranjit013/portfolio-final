import React from "react";
import { ThemeProvider, keyframes, styled } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticlesComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";
import astronaut from "../assets/images/spaceman.png";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  overflow: hidden;
`;

const float = keyframes`
0% { transform: translateY(-10px) }
50% { transform: translateY(15px) translateX(15px) }
100% { transform: translateY(-10px) }
`;

const Spaceman = styled.div`
  position: absolute;
  top: 10%;
  right: 5%;
  width: 20vw;
  animation: ${float} 4s ease infinite;
  img {
    width: 100%;
    height: auto;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  padding: 2rem;
  width: 50vw;
  height: 60vh;
  z-index: 3;
  line-height: 1.5;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(0.6rem + 1vw);
  backdrop-filter: blur(4px);

  position: absolute;
  left: calc(5rem + 5vw);
  top: 10rem;
  font-family: "Ubuntu Mono", monospace;
  font-style: italic;
`;

const TopBar = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  width: 50vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <TopBar>
          <LogoComponent theme="dark" />

          <PowerButton />
        </TopBar>

        <SocialIcons theme="dark" />

        <ParticlesComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          I'm a well-organised and dedicated software developer. I love to
          create dynamic and user-friendly web applications.
          <br /> <br />
          I have adepted in all stages of Software Development Life Cycle
          (SDLC), bringing forth expertise in web development, testing,
          debugging processes, and maintenance of web systems.
          <br /> <br />
          I'm interested in both frontend and backend. I like trying new things
          and building great projects. I am able to effectively self-manage
          during independent projects as well as a team player.
          <br /> <br />
          Let's connect and explore opportunities for growth and collaboration!
        </Main>

        <BigTitlte text="ABOUT" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
