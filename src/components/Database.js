import React, { useState } from 'react';
import Player from "./Player"
import Search from "./Search"

function Database ({ players, teams, handleDelete }) {
  const [search, setSearch] = useState('')


  function handleSearch(e){
    setSearch(e.target.value)
  }

  let filteredPlayers = players.filter(player => {
    return(
      player.name.toLowerCase().includes(search.toLowerCase()) 
    )
  })
    

  if (players.length > 0) {
    return(
      <div>
        <Search search={search} onSearch={handleSearch}/>
        <div className = "Database">
          <ul id="Players">
            {filteredPlayers.map(player => <Player key={player.id} player={player} team={teams} handleDelete={handleDelete} /> )}
          </ul>
        </div>
      </div>
    )
  }else{
    return(
      <div className = "Database">
        <h2>Loading...</h2>
      </div>
    )
  }
}

export default Database;