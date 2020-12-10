import React from "react";

const textArray = ["Pog", "Yo", "PepeLaugh", "Sup"];

export default class LoopingText extends React.Component {
  constructor() {
    super();
    this.state = {
      index: 0,
    };
  }

  loopThroughArray() {
    setInterval(() => {
      if (this.state.index < textArray.length-1) {
        this.setState({ index: this.state.index + 1 });
      } else {
        this.setState({ index: 0 });
      }
    }, 850);
  }

  componentDidMount() {
    this.loopThroughArray();
  }

  render() {
    return <div className="text-white text-2xl">{textArray[this.state.index]}</div>;
  }
}
