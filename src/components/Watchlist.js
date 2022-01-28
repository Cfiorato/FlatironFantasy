import { useState, useEffect } from 'react'
import Player from './Player';

function Watchlist({ players, teams, handleDelete }){
  const [favorites, setFavorites] = useState([])

  useEffect(() => {
    setFavorites(players.filter(p => p.favorite === true))
  }, [players])

  if (favorites.length > 0) {
    return(
      <div className = "Database">
        <ul id="Players">
          {favorites.map(player => <Player key={player.id} player={player} team={teams} handleDelete={handleDelete}/> )}
        </ul>
      </div>
    )
  }else{
    return(
      <div className = "Warning">
        <h2>No Players are on your watch list yet</h2>
        <h2>Add some by visiting the database</h2>
      </div>
    )
  }
}

export default Watchlist