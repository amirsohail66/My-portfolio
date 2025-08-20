import { useLocation } from "react-router-dom";
import { useEffect } from "react";

import {
  About,
  Contact,
  Experience,
  Profile,
  Navbar,
  SkillsSection,
  Works,
} from "./components";
import ReactGA from "react-ga4";

const App = () => {
  const location = useLocation();

  // ✅ Track page views
  useEffect(() => {
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
    });
  }, [location]);

  return (
    <div className="relative z-0 bg-primary">
      <div className="bg-hero-pattern bg-cover bg-center bg-no-repeat">
        <Navbar />
        <Profile />
      </div>
      <About />
      <SkillsSection />
      <Experience />
      <Works />
      <Contact />
    </div>
  );
};

export default App;
