import React from "react";
import { ThemeProvider, keyframes, styled } from "styled-components";
import { DarkTheme } from "./Themes";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import PowerButton from "../subComponents/PowerButton";
import ParticlesComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";
import astronaut from "../assets/images/spaceman.png";
import { Link } from "react-router-dom";
import { Menubar } from "./Menubar";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
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
  flex-direction: column;
  gap: 1rem;

  font-size: calc(0.4rem + 1vw);
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

const BottomLinks = styled.p`
  display: flex;
  justify-content: space-evenly;
  margin-top: 1rem;
  font-weight: 900;
  font-style: normal;
`;

const About = () => {
  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Menubar click={true} barcolor="white" />

        <SocialIcons theme="dark" />

        <ParticlesComponent theme="dark" />

        <Spaceman>
          <img src={astronaut} alt="spaceman" />
        </Spaceman>
        <Main>
          <p>
            I'm a well-organised and dedicated software developer. I love to
            create dynamic and user-friendly web applications.
          </p>
          <p>
            I have adepted in all stages of Software Development Life Cycle
            (SDLC), bringing forth expertise in web development, testing,
            debugging processes, and maintenance of web applications.
          </p>
          <p>
            I'm interested in both frontend and backend. I like trying new
            things and building great projects. I am able to effectively
            self-manage during independent projects as well as a great team
            player.
          </p>
          <p>
            Let's connect via{" "}
            <Link
              to="mailto:achranjit013@gmail.com"
              style={{ textDecoration: "none", color: "blue" }}
            >
              email
            </Link>{" "}
            or{" "}
            <Link
              to="https://www.linkedin.com/in/ranjit-acharya/"
              target="_blank"
              style={{ textDecoration: "none", color: "blue" }}
            >
              linkedIn
            </Link>{" "}
            and explore opportunities for growth and collaboration!
          </p>
          <p>
            Please visit the links below to further explore my educational and
            professional background!
          </p>
          <BottomLinks>
            <Link
              to="/educations"
              style={{
                textDecoration: "none",
                color: "black",
                textTransform: "uppercase",
                background: "white",
                padding: "0.5rem",
                borderRadius: "10px",
              }}
            >
              Education
            </Link>

            <Link
              to="/experiences"
              style={{
                textDecoration: "none",
                color: "black",
                textTransform: "uppercase",
                background: "white",
                padding: "0.5rem",
                borderRadius: "10px",
              }}
            >
              Experiences
            </Link>
          </BottomLinks>
        </Main>

        <BigTitlte text="ABOUT" />
      </Box>
    </ThemeProvider>
  );
};

export default About;
