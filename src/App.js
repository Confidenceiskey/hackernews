import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Button from './Button';
import Search from './Search';
import Table from './Table';

const DEFAULT_QUERY = 'redux';
const DEFAULT_HPP = '100';

const PATH_BASE = 'https://hn.algolia.com/api/v1';
const PATH_SEARCH = '/search';
const PARAM_SEARCH = 'query=';
const PARAM_PAGE = 'page=';
const PARAM_HPP = 'hitsPerPage=';
const url = `${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${DEFAULT_QUERY}&${PARAM_PAGE}`;

class App extends Component {
  _isMounted = false;

  constructor() {
    super();
    this.state = {
      results: null,
      searchKey: '',
      searchTerm: DEFAULT_QUERY,
      error: null
    };
  }

  onDismiss = (id) => {
    const { searchKey, results } = this.state;
    const { hits, page } = results[searchKey];

    const isNotId = item => item.objectID !== id;
    const updatedHits = hits.filter(isNotId);

    this.setState({
      results: { 
        ...results, 
        [searchKey]: {hits: updatedHits, page: page } 
      }
    });
  }

  onSearchChange = (event) => {
    this.setState({
      searchTerm: event.target.value
    });
  }

  onSearchSubmit = (event) => {
    const { searchTerm } = this.state;
    this.setState({
      searchKey: searchTerm
    });
    if (this.needsToSearchTopStories(searchTerm)) {
      this.fetchSearchTopStories(searchTerm);
    }
    event.preventDefault();
  }

  setSearchTopStories = (result) => {
    const { hits, page } = result;
    const { searchKey, results } = this.state;

    const oldHits = results && result[searchKey] ? results[searchKey].hits : [];

    const updatedHits = [...oldHits, ...hits];

    this.setState({
      results: {
        ...results, [searchKey]: { hits: updatedHits, page: page } 
      }
    });
  }

  fetchSearchTopStories = (searchTerm, page = 0) => {
    axios(`${PATH_BASE}${PATH_SEARCH}?${PARAM_SEARCH}${searchTerm}&${PARAM_PAGE}${page}&${PARAM_HPP}${DEFAULT_HPP}`)
      .then(result => this._isMounted && this.setSearchTopStories(result.data))
      .catch(err => this._isMounted && this.setState({ error: err }));
  }

  needsToSearchTopStories = (searchTerm) => {
    return !this.state.results[searchTerm];
  }

  componentDidMount() {
    this._isMounted = true;

    const { searchTerm } = this.state;
    this.setState({
      searchKey: searchTerm
    });
    this.fetchSearchTopStories(searchTerm);
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  render() {
    const { results, searchTerm, searchKey, error } = this.state;
    const page = results && results[searchKey] ? results[searchKey].page : 0;
    const list = results && results[searchKey] ? results[searchKey].hits : [];

    return (
      <div className="page">
        <div className="interactions">
          <Search 
            value={searchTerm}
            onTextChange={this.onSearchChange}
            onSubmit={this.onSearchSubmit}
          >
          Search
          </Search>
        </div>
        { error ?
          <div className="interactions">
            <p style={{color: "red"}}>Something went wrong!</p>
          </div>
          :
          <Table 
            list={list}
            onDismiss={this.onDismiss}
          />
        }
        <div className ="interactions">
          <Button onClick={() => this.fetchSearchTopStories(searchKey, page + 1)}>
            More
          </Button>
        </div>
      </div>
    );
  }
}

export default App;


































