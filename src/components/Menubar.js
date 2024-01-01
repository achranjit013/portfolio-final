import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import { motion } from "framer-motion";

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

const TopBar = styled.div`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  width: 100%;

  display: flex;
  justify-content: space-evenly;
  align-items: center;

  z-index: 6;
`;

const TopBarLeft = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 50vw;
`;

const TopBarRight = styled.div`
  width: 50vw;
`;

const MenuBar = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${media.mediumDevices} {
    gap: 5rem;
    justify-content: center;
    position: fixed;
    width: 100vw;
    left: 100%;
    height: 100vh;
    top: 5rem;
    transition: 0.5s ease-in;
    background: ${(props) => props.theme.body};
    z-index: 6;
  }
`;

const MenubarTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 2rem;

  @media ${media.mediumDevices} {
    padding: 0;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
  }
`;

const MenubarBottom = styled.div`
  display: flex;
  justify-content: space-evenly;

  @media ${media.mediumDevices} {
    flex-direction: column;
    align-items: center;
    gap: 5rem;
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
  z-index: 2;
`;

const Skills = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 2;
`;

const About = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 2;
`;

const Education = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 2;
`;

const Experience = styled(NavLink)`
  display: block;
  color: ${(props) => props.theme.text};
  text-decoration: none;
  z-index: 2;
`;

export const Menubar = ({ click, barcolor }) => {
  const [showMenu, setShowMenu] = useState(false);

  return (
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
              style={{ color: barcolor }}
            ></i>
          ) : (
            <i
              className="fa-solid fa-bars"
              onClick={() => setShowMenu(true)}
              style={{ color: barcolor }}
            ></i>
          )}
        </Hamburger>

        <MenuBar style={showMenu ? { left: `calc(100% - ${100}vw)` } : {}}>
          <MenubarTop>
            <Projects to="/projects">
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

            <Skills to="/skills">
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

            <About to="/about">
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
          </MenubarTop>

          <MenubarBottom>
            <Education to="/educations">
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
                Education
              </motion.h2>
            </Education>

            <Experience to="/experiences">
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
                Experiences
              </motion.h2>
            </Experience>
          </MenubarBottom>
        </MenuBar>
      </TopBarRight>
    </TopBar>
  );
};
