import React, { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'
import Database from './Database'
import Home from './Home'
import PlayerPage from './PlayerPage'
import Watchlist from './Watchlist'
import Create from './Create'


function App() {
  const [players, setPlayers] = useState([])
  const [teams, setTeams] = useState([])
  const [change, setChange] = useState(true)

  useEffect(() => {
    fetch('http://localhost:9292/players')
    .then(resp => resp.json())
    .then(p => setPlayers(p))
  
    fetch('http://localhost:9292/teams')
    .then(resp => resp.json())
    .then(t => setTeams(t))

  }, [change])

  function handleChange(favorite, id){
    fetch(`http://localhost:9292/players/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({favorite: favorite})
    })
    .then(setChange(!change))
  }

  function handleSubmit(input){
    const team = teams.find(t => t.name === input.team_name)
    const newPlayer = {
      name: input.name,
      jersey_number: input.jersey_number,
      position: input.position,
      team_id: team.id,
      img: input.img
    }
    console.log(newPlayer)
    fetch('http://localhost:9292/players', {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(newPlayer)
    })
    .then(setChange(!change))
  }

  function handleDelete(id){
    fetch(`http://localhost:9292/players/${id}`,{
      method: 'DELETE'
    })
    .then(setChange(!change))
  }


  return (
    <div className="App">
      <Header /> 
      <Routes>
        <Route path='/players/:id' element={<PlayerPage handleChange={handleChange} teams={teams} change={change} />} />
        <Route path="/players" element={<Database players = {players} teams = {teams} handleDelete={handleDelete} />} />
        <Route path="/watchlist" element={<Watchlist players = {players} teams = {teams} handleDelete={handleDelete} />} />
        <Route path="/create" element={<Create handleSubmit={handleSubmit} />} />
        <Route path="/*" element={<Home />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
