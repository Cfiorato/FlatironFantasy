import {useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'

function PlayerPage({ handleChange, teams, change }) {

  const { id } = useParams()
  const [player, setPlayer] = useState()


  useEffect(() => {
    fetch(`http://localhost:9292/players/${id}`)
    .then(resp => resp.json())
    .then(data => setPlayer(data))
  }, [id, change])

  function handleClick() {
    handleChange(!player.favorite, player.id)
  }

  

  if (player !== undefined){
    const teamobj = teams.filter(t => t.id === player.team_id)
    return (
      <div className="PlayerDetails" style = {{
        border: `5px solid ${teamobj[0].primary}`,
        boxShadow: `0 0 10px solid ${teamobj[0].secondary}`
      }}>
        <img id="playerPageImg" src = {player.img} alt={player.name}/>
        <h2>{player.name}</h2>
        <h3>Team: {teamobj[0].name}</h3>
        <h4>2021 Total: {player.stats[0].total_points}</h4>
        <h4>2021 Highest Week: {player.stats[0].highest_score}</h4>
        <h4>2021 Lowest Week: {player.stats[0].lowest_score}</h4>
        <h4>2021 Avg: {player.stats[0].average_score}</h4>
        <h4>Team's Strength of Schedule Ranking: {teamobj[0].str_of_sch}</h4>
        <button className='watchlistButton' onClick={handleClick}>
          {player.favorite ? 'Remove from ' : 'Add to '}Watchlist
        </button>
      </div>  
    )
  }else{
    return(
      <div>
        <h1>Loading Player...</h1>
      </div>
    )
  }
}

export default PlayerPage;