import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Table from './Table';

const list = [
  {
    title: "React",
    url: "https://reactjs.org",
    author: "Jordan Walke",
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: "Redux",
    url: "https://redux.js.org",
    author: "Dan Abramov, Andrew Clark",
    num_comments: 2,
    points: 5,
    objectID: 1,
  },
];

class App extends Component {

  constructor() {
    super();

    this.state = {
      list,
      searchTerm: ""
    };
  }

  onDismiss = (id) => {
    const newList = this.state.list.filter( (item) => {
      return item.objectID !== id;
    });

    this.setState({
      list: newList
    });
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }


  render() {
    const { list, searchTerm } = this.state;
    return (
      <div className="App">
        <Search 
          value={searchTerm}
          onTextChange={this.onSearchChange}
        >
        Search
        </Search>
        <Table 
          list={list}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
