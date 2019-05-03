import React, { Component } from 'react';
import './App.css';
import Search from './Search';
import Table from './Table';

const DEFAULT_QUERY = 'redux';
const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}`;


class App extends Component {
  constructor() {
    super();
    this.state = {
      result: null,
      searchTerm: DEFAULT_QUERY
    };
  }

  onDismiss = (id) => {
    const newList = this.state.result.hits.filter((item) => {
      return item.objectID !== id;
    });

    this.setState({
      result: { ...this.state.result, hits: newList }
    });
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  setSearchTopStories = (result) => {
    this.setState({
      result: result
    })
  }

  componentDidMount() {
    const { searchTerm } = this.state;

    fetch(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}`)
      .then(response => response.json())
      .then(result => this.setSearchTopStories(result))
      .catch(err => err);
  }

  render() {
    const { result, searchTerm } = this.state;

    if (!result) {
      return null;
    }

    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm}
            onTextChange={this.onSearchChange}
          >
          Search
          </Search>
        </div>
        <Table 
          list={result.hits}
          searchTerm={searchTerm}
          onDismiss={this.onDismiss}
        />
      </div>
    );
  }
}

export default App;
