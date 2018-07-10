import React from 'react';

const GamesTable = (props) => {
  const mapGames = () => {
    return props.games.map((game) => {
      return (
        <tr>
          <td>{game.name}</td>
          <td>{game.genre.name}</td>
        </tr>
      )
    })
  }

  return (
    <table className="games">
      <tbody>
        <tr>
          <th>
            <h3 className="">Name</h3>
          </th>
          <th>
            <h3 className="">Genre</h3>
          </th>
        </tr>
      </tbody>
      {mapGames()}
    </table>
  )
}

export default GamesTable;
