import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const intro = "Welcome to this page!!";
    const body = "This is going to turn into an awesome app";
    const obj = {
      firstname: "George",
      lastname: "Kettle",
      age: 27,
      height: "1.75m"
    }

    return (
      <div className="App">
        <h2>{intro}</h2>
        <br />
        <h3>{body}</h3>
        <p>{`Meet ${obj.firstname} ${obj.lastname}. They are ${obj.age} years old and a whooping ${obj.height} tall.`}</p>
      </div>
    );
  }
}

export default App;
