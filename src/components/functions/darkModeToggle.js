import React from "react";
import DarkModeToggle from "react-dark-mode-toggle";

export default class DarkModeSwitch extends React.Component {
  constructor() {
    super();
    this.state = {
      darkMode: localStorage.theme === "dark",
    };
  }

  darkModeChange = () => {
    if (this.state.darkMode) {
      localStorage.theme = "dark";
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    } else {
      localStorage.theme = "light";
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  };

  render() {
    return (
      <DarkModeToggle
        onChange={() =>
          this.setState({ darkMode: !this.state.darkMode }, this.darkModeChange)
        }
        checked={this.state.darkMode}
        size={"5rem"}
        speed={2}
      />
    );
  }
}
