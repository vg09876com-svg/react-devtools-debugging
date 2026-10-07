import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();

    this.state = {
      name: "Victor",
      count: 0,
      showMessage: true,
    };
  }

  increaseCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  toggleMessage = () => {
    this.setState({
      showMessage: !this.state.showMessage,
    });
  };

  render() {
    return (
      <div style={{ textAlign: "center", padding: "40px" }}>
        <h1>React Developer Tools Practice</h1>

        <h2>Hello, {this.state.name}</h2>

        <p>Count: {this.state.count}</p>

        <button onClick={this.increaseCount}>
          Increase Count
        </button>

        <button
          onClick={this.toggleMessage}
          style={{ marginLeft: "10px" }}
        >
          Toggle Message
        </button>

        {this.state.showMessage && (
          <p>This is my React debugging practice app.</p>
        )}
      </div>
    );
  }
}

export default App;
