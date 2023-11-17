import { ThemeProvider, styled } from "styled-components";
import LogoComponent from "../subComponents/LogoComponent";
import PowerButton from "../subComponents/PowerButton";
import SocialIcons from "../subComponents/SocialIcons";
import ParticlesComponent from "../subComponents/ParticleComponent";
import BigTitlte from "../subComponents/BigTitlte";
import { LightTheme } from "./Themes";
import { Backend, Design, Frontend } from "./AllSvgs";

const Box = styled.div`
  background-color: ${(props) => props.theme.body};
  width: 100vw;
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Main = styled.div`
  border: 2px solid ${(props) => props.theme.text};
  color: ${(props) => props.theme.text};
  // background-color: ${(props) => props.theme.body};
  padding: 2rem;
  width: 22vw;
  height: 70vh;
  z-index: 3;
  line-height: 1.5;
  cursor: pointer;

  font-family: "Ubuntu Mono", monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

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
  position: absolute;
  top: 1rem;
  left: 0;
  right: 0;
  width: 50vw;

  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

const Skills = () => {
  return (
    <ThemeProvider theme={LightTheme}>
      <Box>
        <TopBar>
          <LogoComponent theme="light" />

          <PowerButton />
        </TopBar>

        <SocialIcons theme="light" />

        <ParticlesComponent theme="light" />

        <Main>
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

        <Main>
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

        <Main>
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

        <BigTitlte text="SKILLS" top="80%" right="35%" />
      </Box>
    </ThemeProvider>
  );
};

export default Skills;
