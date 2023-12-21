import { motion } from "framer-motion";
import { styled } from "styled-components";

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
  gap: 2rem;

  transition: all 0.2s ease;

  &:hover {
    background-color: ${(props) => props.theme.body};
    color: ${(props) => props.theme.text};
    border: 1px solid ${(props) => props.theme.text};
  }

  @media ${media.mediumDevices} {
    width: 20rem;
    height: 25rem;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: start;
`;

const Heading = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 1rem;
`;

const Logo = styled.div`
  width: 40px;
  height: 40px;
  ${Box}:hover & {
    background: ${(props) => props.theme.text};
    border-radius: 5px;
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

const Tags = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border-top: 2px solid ${(props) => props.theme.body};
  padding-top: 1.5rem;

  ${Box}:hover & {
    border-top: 2px solid ${(props) => props.theme.text};
  }
`;

const Tag = styled.li`
  margin-left: 2rem;
  font-size: calc(0.8em + 0.3vw);
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

const EduCard = (props) => {
  const {
    id,
    logo,
    heading,
    description,
    subHeading,
    currSkills,
    university,
    gradPeriod,
  } = props.data;

  return (
    <Box key={id} variants={Item}>
      <Content>
        <Heading>
          <Logo>{logo}</Logo>
          <Title>{heading}</Title>
        </Heading>

        {university && (
          <p style={{ fontStyle: "italic" }}>
            {university} ({gradPeriod})
          </p>
        )}

        <Description>{description}</Description>
      </Content>

      <Tags>
        <Title>{subHeading}</Title>

        <ul>
          {currSkills.map((t, id) => {
            return <Tag key={id}>{t}</Tag>;
          })}
        </ul>
      </Tags>
    </Box>
  );
};

export default EduCard;
