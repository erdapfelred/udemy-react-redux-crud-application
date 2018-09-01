import React, { Component } from 'react';

/*
class App extends Component {
  render() {
    return (
      <div>
        <h1>Hello, World!</h1>
      </div>
    );
  }
}

*/

class App extends Component {
  render(){
    return React.createElement(
      "H1",
      null,
      "Hello World",
    );
  }

}



export default App;
