import React from 'react';
import GenreDropdown from '../components/GenreDropdown';
import NameFilter from '../components/NameFilter';

const GameFilters = (props) => {
  return (
    <div className="filterForm">
      <GenreDropdown
        genres={props.genres}
        currentGenre={props.currentGenre}
        handleDropdown={props.handleGenreFilter}
      />
      <NameFilter
        handleSearchFilter={props.handleSearchFilter}
        handleSearchSubmit={props.handleSearchSubmit}
      />
    </div>
  )
}

export default GameFilters;
