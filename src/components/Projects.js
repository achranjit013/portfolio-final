import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";
import { ThemeProvider, styled } from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import { Work } from "../data/WorkData";
import Card from "../subComponents/Card";
import { DarkTheme } from "./Themes";
import { Menubar } from "./Menubar";

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

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  height: 300vh;
  position: relative;
  display: flex;
  align-items: center;

  @media ${media.xxLargeDevices} {
    height: 340vh;
  }

  @media ${media.xLargeDevices} {
    height: 360vh;
  }

  @media ${media.largeDevices} {
    height: 400vh;
  }

  @media ${media.mediumDevices} {
    height: 420vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(5rem + 5vw);
  height: 40vh;
  display: flex;
  color: white;
  z-index: 5;

  @media ${media.mediumDevices} {
    top: 8rem;
    left: calc(3.5rem + 5vw);
  }
`;

const Rotate = styled.span`
  display: block;
  position: fixed;
  right: 1rem;
  bottom: 1rem;
  width: 80px;
  height: 80px;
  z-index: 1;
`;

// Framer-motion Configuration
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,

    transition: {
      staggerChildren: 0.5,
      duration: 0.5,
    },
  },
};

const Projects = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      if (element) {
        element.style.transform = `translateX(${-window.pageYOffset}px)`;
      }

      if (yinyang.current) {
        return (yinyang.current.style.transform = `rotate(${-window.pageYOffset}deg)`);
      }
    };

    window.addEventListener("scroll", rotate);

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <Menubar click={true} barcolor="white" />

        <SocialIcons theme="dark" />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Work.map((d) => (
            <Card key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="PROJECTS" />
      </Box>
    </ThemeProvider>
  );
};

export default Projects;
