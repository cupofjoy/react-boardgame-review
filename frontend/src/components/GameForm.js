import React, { Component } from 'react';
import GenreDropdown from './GenreDropdown';

export default class GameForm extends Component {
  state = {
    name: "",
    genre: {
      id: "",
      name: "",
    }
  }

  selectGenre = (event) => {
    const genre = this.props.genres.find(genre => genre.id == event.target.value);
    this.setState({ genre });
  }

  handleChange = (event) => {
    this.setState({name: event.target.value}, () => {console.log(this.state.name)})
  }

  render() {
    return (
      <div className="gameform">
        <form className="create">
          <label>
            Name:
            <input
              type="text"
              name="name"
              placeholder="Filter board games by name"
              onChange={this.handleChange}
            />
          </label>
          <GenreDropdown
            genres={this.props.genres}
            currentGenre={this.state.genre}
            handleDropdown={this.selectGenre}
          />
        <input type="submit" value="Add Game" onClick={(event) => {this.props.handleSubmit(event, this.state)}}/>
        </form>
      </div>
    )
  }
}
