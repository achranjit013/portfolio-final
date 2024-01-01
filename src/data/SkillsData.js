import { Backend, Design, Frontend } from "../components/AllSvgs";

export const Skills = [
  {
    id: 1,
    logo: <Frontend width={40} height={40} />,
    heading: "Frontend",
    description:
      "I love to translate design concepts into interactive and visually appealing web applications.",
    subHeading: "Skills",
    currSkills: [
      "Html, Css, Js",
      "React, Bootstrap, Styled componets",
      "Framer motion",
      "Responsive Design",
      "Cross-Browser Development",
      "APIs and RESTful Services",
    ],
  },
  {
    id: 2,
    logo: <Backend width={40} height={40} />,
    heading: "Backend",
    description:
      "I love crafting robust server-side solutions for seamless application functionality.",
    subHeading: "Skills",
    currSkills: [
      "Node.js",
      "Express",
      "MySQL",
      "MongoDB",
      "RESTful API",
      "Testing",
      "Debugging",
      "Troubleshooting",
    ],
  },
  {
    id: 3,
    logo: <Design width={40} height={40} />,
    heading: "More",
    description:
      "I love learning and acquiring new skills for continuous personal and professional development.",
    subHeading: "Skills",
    currSkills: [
      "Version Control/Git",
      "Build Tools: Webpack, Babel, npm, or Yarn",
      "Monolithic and Microservices architecture",
      "Communication, Quick Learner, Problem solving, Attention to details, Collaboration & Team work, Adaptability",
    ],
  },
];
