import React from "react";

// can  have multilple export per file
export const sayHello = () => {
  console.log("hell0");
};

export const sayHello1 = () => {
  console.log("hell01");
};

class Counter extends React.Component {
  // constructor(props){
  //   super(props)
  //   this.state = {
  //     count: 0,
  //     message: "Counter Demo",
  //   }

  //   // es5 to bind this to inc function
  //   this.inc = this.inc.bind(this)
  // }
  // es5 way
  // inc() {

  //   // changes state and this will automatically trigger
  //   // render to be called
  //   this.setState({
  //     count: 5,
  //   });
  // }

  // es6 class property
  state = {
    count: 0,
    message: "Counter Demo",
    arr: [],
  };

  // es6 way
  inc = () => {
    // changes state and this will automatically trigger
    // render to be called
    this.setState({
      count: this.state.count + 1,
    });
  };

  dec = () => {
    this.setState({
      count: this.state.count - 1,
    });
  };

  render() {
    return (
      <div>
        <h1>{this.state.message}</h1>
        <p>{this.state.count}</p>
        <div>
          <p onClick={this.inc}>add 1</p>
          <p onClick={this.dec}>minus 1</p>
        </div>
      </div>
    );
  }
}

// can only have one default export per file
export default Counter;
