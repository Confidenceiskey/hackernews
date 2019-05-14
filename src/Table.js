import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import Sort from './Sort';

const Table = ({ list, SORTS, sortKey, onSort, onDismiss }) => {

  Table.propTypes = {
    list: PropTypes.arrayOf(
      PropTypes.shape({
        objectID: PropTypes.string.isRequired,
        author: PropTypes.string,
        url: PropTypes.string,
        num_comments: PropTypes.number,
        points: PropTypes.number,
      })
    ).isRequired,
    onDismiss: PropTypes.func.isRequired,
  };

  const largeColumn = {
    width: '40%'
  };

  const midColumn = {
    width: '30%'
  }

  const smallColumn = {
    width: '10%'
  }
  
  return (

    <div className="table">
      <div className="table-header">
        <span style={largeColumn}>
          <Sort
            sortKey={'TITLE'}
            onSort={onSort}
          >
            Title
          </Sort>
        </span>
        <span style={midColumn}>
          <Sort 
            sortKey={'AUTHOR'}
            onSort={onSort}
          >
            Author
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort  
            sortKey={'COMMENTS'}
            onSort={onSort}
          >
            Comments
          </Sort>
        </span>
        <span style={smallColumn}>
          <Sort
            sortKey={'POINTS'}
            onSort={onSort}
          >
            Points
          </Sort>
        </span>
        <span style={smallColumn}>
          Archive
        </span>
      </div>
      {SORTS[sortKey](list).map(item => 
        <div key={item.objectID} className="table-row"> 
          <span style={largeColumn}>
            <a href={item.url}>{item.title}</a>
          </span>
          <span style={midColumn}>
            {item.author}
          </span>
          <span style={smallColumn}>
            {item.num_comments}
          </span>
          <span style={smallColumn}>
            {item.points}
          </span>
          <span style={smallColumn}>
            <Button 
              onClick={() => onDismiss(item.objectID)}
              className="button-inline"
            >
              Dismiss
            </Button>
          </span>
        </div>
      )}
    </div>
  );
}

export default Table;