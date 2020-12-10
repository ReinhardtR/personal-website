import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Socials from "./components/socials/socials";

const App = () => {
  return (
    <div className="font-body">
      <Router>
        <Landing path="/personal-website" />
        <Projects path="/personal-website/projects" />
        <Socials path="/personal-website/socials" />
      </Router>
    </div>
  );
};

export default App;
