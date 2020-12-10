import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Socials from "./components/socials/socials";

const App = () => {
  return (
    <div className="font-body">
      <Router>
        <Landing path="/" />
        <Projects path="projects" />
        <Socials path="socials" />
      </Router>
    </div>
  );
};

export default App;
