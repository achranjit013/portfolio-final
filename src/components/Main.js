import { keyframes, styled } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import PowerButton from "../subComponents/PowerButton";
import FooterComponent from "../subComponents/FooterComponent";

/* Small devices (landscape phones, 576px and up) */
/* Medium devices (tablets, 768px and up) */
/* Large devices (desktops, 992px and up) */
/* X-Large devices (large desktops, 1200px and up) */
/* XX-Large devices (larger desktops, 1400px and up) */
const breakpoints = {
  smallDevices: "576px",
  mediumDevices: "768px",
  largeDevices: "992px",
  xLargeDevices: "1200px",
  xxLargeDevices: "1400px",
};

const media = {
  smallDevices: `(max-width: ${breakpoints.smallDevices})`,
  mediumDevices: `(max-width: ${breakpoints.mediumDevices})`,
  largeDevices: `(max-width: ${breakpoints.largeDevices})`,
  xLargeDevices: `(max-width: ${breakpoints.xLargeDevices})`,
  xxLargeDevices: `(max-width: ${breakpoints.xxLargeDevices})`,
};

const MainContainer = styled.div`
  background: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  position: relative;

  h2,
  h3,
  h4,
  h5,
  h6 {
    font-family: "Karla", sans-serif;
    font-weight: 500;
  }
`;

const DarkDiv = styled.div`
  position: absolute;
  top: 0;
  background-color: #000;
  bottom: 0;
  right: 50%;
  width: ${(props) => (props.click ? "50%" : "0%")};
  height: ${(props) => (props.click ? "100%" : "0%")};
  z-index: 1;
  transition: height 0.5s ease, width 1s ease 0.5s;
`;

const Container = styled.div`
  padding: 2rem;
`;

const TopBar = styled.div`
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const TopBarLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
`;

const TopBarRight = styled.div`
  // display: flex;
  // justify-content: space-evenly;
  // align-items: center;
  width: 50vw;
`;

const MenuBar = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${media.mediumDevices} {
    flex-direction: column;
    position: fixed;
    width: 100vw;
    left: 100%;
    height: 100vh;
    top: 5rem;
    transition: 0.5s ease-in;
    background: ${(props) => props.theme.body};
    z-index: 4;
  }
`;

const Hamburger = styled.div`
  display: none;

  @media ${media.mediumDevices} {
    cursor: pointer;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-right: 2rem;
  }
`;

const Projects = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const Skills = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const About = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;
`;

const rotate = keyframes`
from{
    transform: rotate(0);
}
to{
    transform: rotate(360deg);
}
`;

const Center = styled.button`
  position: absolute;
  top: ${(props) => (props.click ? "85%" : "50%")};
  left: ${(props) => (props.click ? "92%" : "50%")};
  transform: translate(-50%, -50%);
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s ease;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media ${media.smallDevices} {
    left: ${(props) => (props.click ? "87%" : "50%")};
  }

  @media ${media.mediumDevices} {
    & > :first-child {
      width: ${(props) => (props.click ? "5rem" : "7rem")};
      height: ${(props) => (props.click ? "5rem" : "7rem")};
    }
  }
`;

const BottomBar = styled.div`
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media ${media.mediumDevices} {
    flex-direction: column-reverse;
    align-items: ${(props) => (props.click ? "start" : "center")};
    gap: 1rem;
    padding-left: 0.5rem;
  }
`;

const Contact = styled.a`
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 1;

  @media ${media.mediumDevices} {
    color: ${(props) => (props.click ? props.theme.body : props.theme.text)};
  }
`;

const Main = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <TopBar>
          <TopBarLeft>
            <LogoComponent theme={click ? "dark" : "light"} />

            <PowerButton />
          </TopBarLeft>

          <TopBarRight>
            <Hamburger>
              {showMenu ? (
                <i
                  className="fa-solid fa-xmark"
                  onClick={() => setShowMenu(false)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-bars"
                  onClick={() => setShowMenu(true)}
                ></i>
              )}
            </Hamburger>

            <MenuBar style={showMenu ? { left: `calc(100% - ${100}vw)` } : {}}>
              <Projects to="/projects" click={click}>
                <motion.h2
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Projects
                </motion.h2>
              </Projects>

              <Skills to="/skills" click={click}>
                <motion.h2
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  Skills
                </motion.h2>
              </Skills>

              <About to="/about" click={click}>
                <motion.h2
                  initial={{
                    y: -200,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  animate={{
                    y: 0,
                    transition: { type: "spring", duration: 1.5, delay: 1 },
                  }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  About
                </motion.h2>
              </About>
            </MenuBar>
          </TopBarRight>
        </TopBar>

        <SocialIcons theme={click ? "dark" : "light"} click={click} />

        <Center click={click}>
          <YinYang
            onClick={() => handleClick()}
            width={click ? 120 : 200}
            height={click ? 120 : 200}
            fill="currentColor"
          />
          <span>click here</span>
        </Center>

        <BottomBar click={click}>
          <FooterComponent theme={click ? "dark" : "light"} />
          <Contact
            click={click}
            target="_blank"
            href="mailto:achranjit013@gmail.com"
          >
            <motion.h2
              initial={{
                y: 200,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              animate={{
                y: 0,
                transition: { type: "spring", duration: 1.5, delay: 1 },
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              Say hi . . .
            </motion.h2>
          </Contact>
        </BottomBar>
      </Container>
      {click ? <Intro click={click} /> : null}
    </MainContainer>
  );
};

export default Main;
