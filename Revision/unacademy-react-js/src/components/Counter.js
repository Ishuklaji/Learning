import React from "react";

class Counter extends React.Component {
  componentDidMount() {
    console.log("componentDidMount runs");
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.number !== this.props.number) {
      console.log("componentDidUpdate runs");
    }
  }

  componentWillUnmount() {
    console.log("componentWillUnmount runs");
  }

  render() {
    return <h1>{this.props.number} times</h1>;
  }
}

export default Counter;
