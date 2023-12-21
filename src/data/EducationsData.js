import { Bachelor, Bootcamp, Frontend } from "../components/AllSvgs";

export const Qualification = [
  {
    id: 1,
    logo: <Bootcamp width={40} height={40} />,
    heading: "MERN Stack Bootcamp",
    university: "Dented Code Academy",
    gradPeriod: "July 2023 - current",
    description:
      "The degree helped me to equip with skills in designing and developing innovative software solutions. Combining theoretical knowledge with hands-on practical skills, I was able to adept software engineering principles and address complex challenges in the ever-evolving technological landscape",
    subHeading: "Majors",
    currSkills: [
      "HTML, CSS, JS",
      "React, Bootstrap",
      "Node.js, Express, Mongodb",
      "RestFul API, JWT authentication",
      "Monolithic and Microservices architecture",
    ],
  },
  {
    id: 2,
    logo: <Frontend width={40} height={40} />,
    heading: "Master of Technology (Software Engineering)",
    university: "Federation University",
    gradPeriod: "2018 - 2020",
    description:
      "The degree helped me to equip with skills in designing and developing innovative software solutions. Combining theoretical knowledge with hands-on practical skills, I was able to adept software engineering principles and address complex challenges in the ever-evolving technological landscape",
    subHeading: "Majors",
    currSkills: [
      "Software engineering principles",
      "SDLC",
      "Database Management System",
      "Software testing",
      "Network and security",
    ],
  },
  {
    id: 3,
    logo: <Bachelor width={40} height={40} />,
    heading: "Bachelor of Electronics and Communication",
    university: "Tribhuvan University",
    gradPeriod: "2009 - 2013",
    description:
      "The degree helped me to equip with skills in designing and developing innovative software solutions. Combining theoretical knowledge with hands-on practical skills, I was able to adept software engineering principles and address complex challenges in the ever-evolving technological landscape",
    subHeading: "Majors",
    currSkills: ["OOP concepts", "Communications", "Computer Network"],
  },
];
