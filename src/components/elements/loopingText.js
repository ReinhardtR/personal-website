import React from "react";

const textArray = [
  "Hello!",
  "Welcome to my website.",
  "You can change the theme!",
  "Or click on the button.",
  "There you'll find my projects.",
  "Have fun :)",
];

export default class LoopingText extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  loopThroughArray() {
    setInterval(() => {
      if (this.state.index < textArray.length - 1) {
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 0 });
      }
    }, 1500);
  }

  componentDidMount() {
    this.loopThroughArray();
  }

  render() {
    return (
      <div className="text-blue dark:text-white text-2xl">
        {textArray[this.state.index]}
      </div>
    );
  }
}
