import { ThemeProvider, styled } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticlesComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";
import { LightTheme } from "./Themes";
import { Backend, Design, Frontend } from "./AllSvgs";
import { useEffect, useRef } from "react";

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
  // width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  // justify-content: space-evenly;
  align-items: center;

  @media ${media.mediumDevices} {
    // flex-direction: column;
    // gap: 1rem;
  }
`;

const SkillsContainer = styled.div`
  position: fixed;
  top: 12rem;
  left: 5rem;
  height: 40vh;
  // width: 70vw;
  display: flex;
  // gap: 1rem
  color: white;

  @media ${media.mediumDevices} {
    top: 8rem;
  }
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  // background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 50vw;
  height: 50vh;
  // z-index: 3;
  line-height: 1.5;
  font-family: "Ubuntu Mono", monospace;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.2s ease;

  &:hover {
    color: ${(props) => props.theme.body};
    background-color: ${(props) => props.theme.text};
  }
`;

const Title = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: calc(1em + 1vw);

  ${Main}:hover & {
    & > * {
      fill: ${(props) => props.theme.body};
    }
  }

  & > *:first-child {
    margin-right: 1rem;
  }
`;

const Description = styled.div`
  color: ${(props) => props.theme.text};
  font-size: calc(0.6em + 1vw);
  padding: 0.5rem 0;

  ${Main}:hover & {
    color: ${(props) => props.theme.body};
  }

  strong {
    margin-bottom: 1rem;
    text-transform: uppercase;
  }
  ul,
  p {
    margin-left: 2rem;
  }
`;

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

const Item = {
  hidden: {
    scale: 0,
  },
  show: {
    scale: 1,
    transition: {
      type: "spring",
      duration: 0.5,
    },
  },
};

const Skills = () => {
  const ref = useRef(null);

  useEffect(() => {
    let element = ref.current;

    const rotate = () => {
      return (element.style.transform = `translateX(${-window.pageYOffset}px)`);
    };

    window.addEventListener("scroll", rotate);
    return () => {
      window.removeEventListener("scroll", rotate);
    };
  }, []);

  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <TopBar>
          <LogoComponent theme="light" />

          <PowerButton />
        </TopBar>

        <SocialIcons theme="light" />

        <ParticlesComponent theme="light" />

        <SkillsContainer
          ref={ref}
          variants={container}
          initial="hidden"
          animate="show"
        >
          <Main variants={Item}>
            <Title>
              <Frontend width={40} height={40} /> Frontend
            </Title>
            <Description>
              I love to translate design concepts into interactive and visually
              appealing web applications.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Html, Css, Js, Responsive Design, React, Bootstrap, Styled
                componets, Framer motion, Cross-Browser Development, APIs and
                RESTful Services, Web Security.
              </p>
            </Description>
          </Main>

          <Main variants={Item}>
            <Title>
              <Backend width={40} height={40} /> Backend
            </Title>
            <Description>
              I love crafting robust server-side solutions for seamless
              application functionality.
            </Description>
            <Description>
              <strong>Skills</strong>
              <p>
                Node.js, Express, MySQL, MongoDB, RESTful and GraphQL, Testing,
                Debugging, Troubleshooting
              </p>
            </Description>
          </Main>

          <Main variants={Item}>
            <Title>
              <Design width={40} height={40} /> More...
            </Title>
            <Description>I love learning and applying.</Description>
            <Description>
              <strong>Skills</strong>
              <ul>
                <li>Version Control/Git</li>
                <li>Build Tools: Webpack, Babel, npm, or Yarn</li>
                <li>Monolithic and Microservices architecture</li>
                <li>
                  Soft Skills: Communication, Problem-Solving and Attention to
                  Details
                </li>
              </ul>
            </Description>
          </Main>
        </SkillsContainer>

        {/* <BigTitlte text="SKILLS" top="80%" right="35%" /> */}
        <BigTitlte text="SKILLS" />
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
