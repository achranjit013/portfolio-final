import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { ThemeProvider, styled } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import BigTitlte from "../subComponents/BigTitlte";
import { DarkTheme } from "./Themes";
import { Skills } from "../data/SkillsData";
import SkillsCard from "../subComponents/SkillsCard";
import { Qualification } from "../data/EducationsData";
import { Professions } from "../data/ExperiencesData";

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
  height: 140vh;
  position: relative;
  display: flex;
  align-items: center;

  @media ${media.xxLargeDevices} {
    height: 260vh;
  }

  @media ${media.xLargeDevices} {
    height: 240vh;
  }

  @media ${media.largeDevices} {
    height: 220vh;
  }

  @media ${media.mediumDevices} {
    height: 160vh;
  }
`;

const Main = styled(motion.ul)`
  position: fixed;
  top: 12rem;
  left: calc(5rem + 5vw);
  height: 40vh;
  display: flex;
  color: white;

  @media ${media.mediumDevices} {
    left: calc(3.5rem + 5vw);
    top: 8rem;
    z-index: 5;
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

const TopBar = styled.div`
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  width: 50vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Experiences = () => {
  const ref = useRef(null);
  const yinyang = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      element.style.transform = `translateX(${-window.pageYOffset}px)`;

      return (yinyang.current.style.transform =
        "rotate(" + -window.pageYOffset + "deg)");
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={DarkTheme}>
      <Box>
        <TopBar>
          <LogoComponent theme="dark" />
          <PowerButton />
        </TopBar>

        <SocialIcons theme="dark" />

        <Main ref={ref} variants={container} initial="hidden" animate="show">
          {Professions.map((d) => (
            <SkillsCard key={d.id} data={d} />
          ))}
        </Main>

        <Rotate ref={yinyang}>
          <YinYang width={80} height={80} fill={DarkTheme.text} />
        </Rotate>

        <BigTitlte text="EXPERIENCES" />
      </Box>
    </ThemeProvider>
  );
};

export default Experiences;
