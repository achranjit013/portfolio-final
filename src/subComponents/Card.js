import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { Github } from "../components/AllSvgs";

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

const Box = styled(motion.li)`
  width: 40rem;
  height: 25rem;

  background-color: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};

  padding: 1.5rem 2rem;
  margin-right: 8rem;

  border: 1px solid ${(props) => props.theme.body};
  border-radius: 0 50px 0 50px;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media ${media.mediumDevices} {
    width: 13.5rem;
    height: 25rem;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  gap: 1rem;
`;

const ContentLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media ${media.mediumDevices} {
    gap: 0.5rem;
  }
`;

const Title = styled.h2`
  font-size: calc(1em + 0.5vw);
`;

const Description = styled.h2`
  font-size: calc(0.8em + 0.3vw);
  font-family: "Karla", sans-serif;
  font-weight: 500;
  text-align: justify;
`;

const ImgBox = styled.img`
  display: inline-block;
  height: 16rem;
  width: 20rem;
  border-radius: 0 50px 0 0;

  @media ${media.mediumDevices} {
    display: none;
  }
`;

const Tags = styled.div`
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;
const Tag = styled.span`
  margin-right: 1rem;
  font-size: calc(0.8em + 0.3vw);
`;

const Footer = styled.footer`
  display: flex;
  justify-content: space-between;
`;

const Link = styled.a`
  background-color: ${(props) => props.theme.body};
  color: ${(props) => props.theme.text};
  text-decoration: none;
  padding: 0.5rem calc(2rem + 2vw);
  border-radius: 0 0 0 50px;
  font-size: calc(1em + 0.5vw);

  ${Box}:hover & {
    background-color: ${(props) => props.theme.text};
    color: ${(props) => props.theme.body};
  }
`;

const Git = styled.a`
  color: inherit;
  text-decoration: none;
  ${Box}:hover & {
    & > * {
      fill: ${(props) => props.theme.text};
    }
  }
`;

// Framer motion configuration
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

const Card = (props) => {
  const { id, name, description, tags, displayImg, demo, github } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Content>
        <ContentLeft>
          <Title>{name}</Title>
          <Description>{description}</Description>
        </ContentLeft>
        <ImgBox src={displayImg} />
      </Content>

      <Tags>
        {tags.map((t, id) => {
          return <Tag key={id}>#{t}</Tag>;
        })}
      </Tags>
      <Footer>
        <Link href={demo} target="_blank">
          Visit
        </Link>
        <Git href={github} target="_blank">
          <Github width={30} height={30} />
        </Git>
      </Footer>
    </Box>
  );
};

export default Card;
