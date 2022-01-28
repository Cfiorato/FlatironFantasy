import { Link } from 'react-router-dom'

function Player({ player, team, handleDelete }){

  const teamobj = team.filter(t => t.id === player.team_id)

  return(
    <div className="Player" style = {{
      border: `5px solid ${teamobj[0].primary}`,
      boxShadow: `0 0 10px solid ${teamobj[0].secondary}`
    }}>
      <li id="playerInfo" >
        <img className="playerImage" src={player.img} alt={player.name}/>
        <h3>{player.name}</h3>
        <p>{teamobj[0].name}</p>
        <p className="total">2021 Total: {player.stats[0].total_points}</p>
      </li>
      <Link to={`/players/${player.id}`}><button className="detailsBtn">Details</button></Link>
      <button className="deleteBtn" onClick={() => handleDelete(player.id)}>Delete</button>
    </div>
  )
}

export default Player;