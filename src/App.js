import React from "react";
import { Router } from "@reach/router";
import Landing from "./components/landing/landing";
import Projects from "./components/projects/projects";
import Socials from "./components/socials/socials";

const App = () => {
  return (
    <div>
      <Router className="font-body w-screen min-h-screen bg-gradient-to-br from-first to-second flex flex-col justify-center items-center">
        <Landing path="/personal-website" />
        <Projects path="/personal-website/projects" />
        <Socials path="/personal-website/socials" />
      </Router>
    </div>
  );
};

export default App;
