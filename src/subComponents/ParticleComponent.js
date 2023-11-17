import ConfigDark from "../config/particlesjs-config.json";
import ConfigLight from "../config/particlesjs-config-light.json";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { styled } from "styled-components";

const Box = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 0;
`;

const ParticlesComponent = (props) => {
  const particlesInit = async (main) => {
    await loadFull(main);
  };

  return (
    <Box>
      <Particles
        id="tsparticles"
        style={{ position: "absolute", top: 0 }}
        params={props.theme === "light" ? ConfigLight : ConfigDark}
        init={particlesInit}
      />
    </Box>
  );
};

export default ParticlesComponent;
