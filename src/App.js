import { ThemeProvider } from "styled-components";
import GlobalStyle from "./globalStyles";
import { AnimatePresence } from "framer-motion";
import { LightTheme } from "./components/Themes";
import { Route, Routes, useLocation } from "react-router-dom";

// components
import Main from "./components/Main";
import About from "./components/About";
import Projects from "./components/Projects";
import SkillsPage from "./components/SkillsPage";
import Educations from "./components/Educations";
import Experiences from "./components/Experiences";

function App() {
  const location = useLocation();

  return (
    <>
      <GlobalStyle />

      <ThemeProvider theme={LightTheme}>
        {/* For framer-motion animation on page change! */}
        {/* Changed prop from exitBefore to mode */}
        <AnimatePresence mode="wait">
          {/* Changed Switch to Routes */}

          <Routes key={location.pathname} location={location}>
            {/* Changed component to element */}

            <Route path="/" element={<Main />} />

            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<SkillsPage />} />
            <Route path="/about" element={<About />} />
            <Route path="/educations" element={<Educations />} />
            <Route path="/experiences" element={<Experiences />} />

            {/* Below is to catch all the other routes and send the user to main component,
you can add custom 404 component or message instead of Main component*/}
            <Route path="*" element={<Main />} />
          </Routes>
        </AnimatePresence>
      </ThemeProvider>
    </>
  );
}

export default App;
