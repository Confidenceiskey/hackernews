import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Search extends Component {
  componentDidMount() {
    if (this.input) {
      this.input.focus();
    }
  }


  render(){
    const { searchTerm, onTextChange, onSubmit, children } = this.props;

    Search.propTypes = {
      searchTerm: PropTypes.string,
      onTextChange: PropTypes.func,
      onSubmit: PropTypes.func.isRequired,
      children: PropTypes.node.isRequired,
    };

    return (
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          value={searchTerm}
          onChange={onTextChange} 
          ref={ element => this.input = element }
        />
        <button type="submit">
          {children}
        </button>
      </form>
    );
  }
}

export default Search;