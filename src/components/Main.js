import { keyframes, styled } from "styled-components";
import SocialIcons from "../subComponents/SocialIcons";
import { YinYang } from "./AllSvgs";
import Intro from "./Intro";
import { useState } from "react";
import { motion } from "framer-motion";
import FooterComponent from "../subComponents/FooterComponent";
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

  bottom: ${(props) => (props.click ? "8%" : "50%")};
  right: ${(props) => (props.click ? "11%" : "50%")};
  transform: translate(50%, 50%);

  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  transition: all 1s ease;

  z-index: 1;

  & > :first-child {
    animation: ${rotate} infinite 1.5s linear;
  }

  & > :last-child {
    display: ${(props) => (props.click ? "none" : "inline-block")};
    padding-top: 1rem;
  }

  @media ${media.mediumDevices} {
    & > :first-child {
      width: ${(props) => (props.click ? "5rem" : "7rem")};
      height: ${(props) => (props.click ? "5rem" : "7rem")};
    }

    bottom: ${(props) => (props.click ? "6%" : "50%")};
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

const DisplaySocials = styled.span`
  display: block;

  @media ${media.mediumDevices} {
    display: ${(props) => (props.click ? "none" : "block")};
  }
`;

const Main = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <MainContainer>
      <DarkDiv click={click} />
      <Container>
        <Menubar click={click} />

        <DisplaySocials click={click}>
          <SocialIcons theme={click ? "dark" : "light"} click={click} />
        </DisplaySocials>

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
