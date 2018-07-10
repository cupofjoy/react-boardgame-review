import React, { Component } from 'react';
import GameFilters from './GameFilters';
import GenreDropdown from '../components/GenreDropdown';
import GamesTable from '../components/GamesTable';
import GameForm from '../components/GameForm';

export default class BoardGameContainer extends Component {
  state = {
    games: [],
    filteredGames: [],
    genres: [],
    currentGenre: {
      id: "",
      name: "",
    },
    searchTerm: ""
  }

  componentDidMount = () => {
    const gamesURL = 'http://localhost:3000/boardgames'
    const genreURL = 'http://localhost:3000/genres'

    fetch(gamesURL)
      .then(r => r.json())
      .then(d => {
        this.setState({
          games: d,
          filteredGames: d
        },
          () => {console.log("filteredGames", this.state.filteredGames)}
        )})

    fetch(genreURL).then(r => r.json()).then(d => {this.setState({genres: d}, () => {console.log(this.state.genres)})})
  }

  genreFilter = (event) => {
    // Option 1: match by name === value
    // const currentGenre = this.state.genres.find(genre => genre.name === event.target.value);
    // Option 2: change value to id in <option> and for controlled value in <select> and match by id === value
    //           Remember: The content of this attribute represents the value to be submitted with the form.
    //                     There's no rule about it having to match the name displayed.
    const currentGenre = this.state.genres.find(genre => genre.id == event.target.value);
    // Option 3: pull id out using index + data attribute, then match on id
    // const id = event.target.options[event.target.selectedIndex].dataset.value;
    // const currentGenre = this.state.genres.find(genre => genre.id == id);
    // Option 4: same as option 3 but use getAttribute
    // const id = event.target.options[event.target.selectedIndex].getAttribute('data-value');
    // const currentGenre = this.state.genres.find(genre => genre.id == id);

    this.setState(
      { currentGenre },
      () => {this.handleGenreFilter()}
    );
  }

  handleGenreFilter = () => {
    let filteredGames = this.state.games.filter(game => game.genre.id == this.state.currentGenre.id);

    this.setState({ filteredGames }, () => {console.log("filteredGames", this.state.filteredGames)})
  }

  handleSearchFilter = (event) => {
    // console.log(event.target.value)
    this.setState(
      {searchTerm: event.target.value},
      // () => {console.log("search", this.state.searchTerm);}
      () => {this.handleSearchSubmit()}
    )
  }

  handleSearchSubmit = (event) => {
    // event.preventDefault()
    if (this.state.searchTerm === "") {
      this.setState({filteredGames: this.state.games})
    } else {
      debugger
      let filteredGames = this.state.games.filter(game =>  game.name.toLowerCase() == this.state.searchTerm)
      this.setState({ filteredGames })
    }
  }

  handleSubmit = (event, newGame) => {
    event.preventDefault()
    this.setState({
      games: [...this.state.games, newGame],
      filteredGames: [...this.state.games, newGame]
    }, () => {
      console.log(this.state.games);
    })
  }

  render() {
    return (
      <div className="board-game-container">
        <GameFilters
          genres={this.state.genres}
          currentGenre={this.state.currentGenre}
          handleGenreFilter={this.genreFilter}
          handleSearchFilter={this.handleSearchFilter}
          handleSearchSubmit={this.handleSearchSubmit}
        />
        <GameForm
          genres={this.state.genres}
          handleSubmit={this.handleSubmit}
        />
      <GamesTable games={this.state.filteredGames}/>
      </div>
    )
  }
}
