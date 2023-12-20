// work data

import FactsImg from "../assets/images/today-i-learned.png";
import PigGameImg from "../assets/images/pig-game.png";
import ShowsApiImg from "../assets/images/tv-shows-list-api.png";
import GuessingGameImg from "../assets/images/guess-my-number.png";

export const Work = [
  {
    id: 1,
    name: "Facts-List: Today I Learned",
    description:
      "Facts-List offers a dynamic and interactive experience that allow users to share the facts using the user-friendly form and also engage with  the facts by liking, disliking, or marking them as 'mindblowing'. Users can customize their list by selecting a category from the menu and only discover the facts that align with their interests.",
    tags: ["react", "frontend", "facts"],
    displayImg: FactsImg,
    demo: "https://react-fact-app.vercel.app/",
    github: "https://github.com/achranjit013/react-fact-app",
  },
  {
    id: 2,
    name: "Pig Game",
    description:
      "Pig Game is a simple and fun two-player dice game that challenges your luck and decision-making skills. The game revolves around rolling a dice to accumulate points while avoiding the dreaded '1'  that resets your turn. The first player to reach a score of 100 or more wins the game.",
    tags: ["react", "frontend", "fun-game"],
    displayImg: PigGameImg,
    demo: "https://pig-game-qvjvfube7-ranjits-projects.vercel.app/",
    github: "https://github.com/achranjit013/pig-game",
  },
  {
    id: 3,
    name: "TV Show List API",
    description:
      "The TV Show List API provides a user-friendly and feature-rich environment for discovering, managing, and enjoying favorite TV shows. With its intuitive search functionality, seamless favorite management, and genre-based filtering, the application delivers a personalized and organized entertainment experience tailored to each user's unique preferences.",
    tags: ["react", "api", "frontend", "tv-shows"],
    displayImg: ShowsApiImg,
    demo: "https://shows-list-api.vercel.app/",
    github: "https://github.com/achranjit013/shows-list-api",
  },
  {
    id: 4,
    name: "Number Guessing Game",
    description:
      "The Number Guessing Game is a fun and interactive project that allows users to test their guessing skills by choosing a number between 1 and 20 and comparing it with a randomly generated number by the program.",
    tags: ["html", "css", "js", "dom", "frontend", "guessing-game"],
    displayImg: GuessingGameImg,
    demo: "https://achranjit013.github.io/guess-my-number/",
    github: "https://github.com/achranjit013/guess-my-number",
  },
];
