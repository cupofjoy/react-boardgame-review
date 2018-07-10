import React, { Component } from 'react';

const NameFilter = (props) => {
  return (
    <div className="filter">
      <form className="search">
        <label>
          Name Filter:
          <input
            type="text"
            name="name"
            placeholder="Filter board games by name"
            onChange={(event) => {props.handleSearchFilter(event)}}
          />
        </label>
        <input
          type="submit"
          value="Filter"
          onSubmit={(event) => {props.handleSearchSubmit(event)}}
        />
      </form>
    </div>
  )
}

export default NameFilter;
