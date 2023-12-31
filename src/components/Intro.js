import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import Me from "../assets/images/profile-img.png";
import Resume from "../assets/resume/Ranjit Resume.docx";
import SocialIcons from "../subComponents/SocialIcons";

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

const Box = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);

  width: 65vw;
  height: 55vh;
  display: flex;

  background: linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      bottom,
    linear-gradient(
        to right,
        ${(props) => props.theme.body} 50%,
        ${(props) => props.theme.text} 50%
      )
      top;
  background-repeat: no-repeat;
  background-size: 100% 2px;
  border-left: 2px solid ${(props) => props.theme.body};
  border-right: 2px solid ${(props) => props.theme.text};

  z-index: 1;

  @media ${media.mediumDevices} {
    width: 90vw;
  }
`;

const SubBox = styled.div`
  width: 50%;
  position: relative;
  display: flex;

  .pic {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translate(-50%, 0%);
    width: 75%;
    height: 100%;
  }

  @media ${media.mediumDevices} {
    width: 100%;
  }
`;

const Text = styled.div`
  font-size: calc(1em + 1.5vw);
  color: ${(props) => props.theme.body};
  padding: 1rem;

  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  & > *:nth-child(3) {
    color: ${(props) => `rgba(${props.theme.bodyRgba},0.6)`};
    font-size: calc(0.5rem + 1.5vw);
    font-weight: 300;
  }

  @media ${media.mediumDevices} {
    padding: 0.5rem;
  }
`;

const DownloadCVBtn = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2rem;
  border-radius: 2rem;
  color: black;
  background: white;
  border: none;
  cursor: pointer;

  @media ${media.mediumDevices} {
    font-size: 1rem;
    margin-bottom: 4rem;
  }

  @media ${media.smallDevices} {
    padding: 0.7rem 1rem;
  }
`;

const DisplaySocials = styled.p`
  display: none;
  @media ${media.mediumDevices} {
    display: block;
  }
`;

const Intro = () => {
  return (
    <Box
      initial={{ height: 0 }}
      animate={{ height: "55vh" }}
      transition={{ type: "spring", duration: 2, delay: 1 }}
    >
      <SubBox>
        <Text>
          <h1>Hi,</h1>
          <h3>I'm Ranjit Acharya.</h3>
          <h6>
            I am aspiring software developer passionate about crafting engaging
            and responsive web applications!
          </h6>
          <a href={Resume} download>
            <DownloadCVBtn type="button" className="btn btn-light">
              Download CV <i className="fa-solid fa-download"></i>
            </DownloadCVBtn>
          </a>
        </Text>

        <DisplaySocials>
          <SocialIcons theme="dark" click="true" />
        </DisplaySocials>
      </SubBox>
      <SubBox>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          <img className="pic" src={Me} alt="Profile Pic" />
        </motion.div>
      </SubBox>
    </Box>
  );
};

export default Intro;
