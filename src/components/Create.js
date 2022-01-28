import { useState } from 'react'

function Create({ handleSubmit }) {
  
  const [newData, setNewData] = useState({
    position: 'QB',
    team_name: 'Arizona Cardinals'
  })
  
  function handleChange(e){
    const name = e.target.name
    const value = e.target.value
    setNewData(values => ({...values, [name]: value}))
  }

  function submitHandler(e){
    e.preventDefault()
    handleSubmit(newData)
  }

  return(
    <div id='formContainer' >
      <h2>Create a Player Below</h2>
      <br/>
      <form onSubmit={(e) => submitHandler(e)}>
        <label>Name
          <input
          type="text"
          name='name'
          value={newData.name || ''}
          onChange={handleChange}
          />
        </label>
        <br/>
        <label>Jersey Number
          <input
          type="number"
          name='jersey_number'
          min='0'
          max='99' 
          value={newData.jersey_number || ''}
          onChange={handleChange}
          />
        </label>
        <br/>
        <label>Position
          <select name="position" onChange={handleChange}> 
            <option value="QB">Quarterback</option>
            <option value="RB">Running Back</option>
            <option value="WR">Wide Receiver</option> 
            <option value="TE">Tight End</option> 
            <option value="K">Kicker</option>
          </select>
        </label>
        <br/>
        <label>Team
          <select name="team_name" onChange={handleChange}> 
            <option value="Arizona Cardinals">ARI</option>
            <option value="Atlanta Falcons">ATL</option>
            <option value="Carolina Panthers">CAR</option> 
            <option value="Chicago Bears">CHI</option> 
            <option value="Dallas Cowboys">DAL</option>
            <option value="Detroit Lions">DET</option>
            <option value="Green Bay Packers">GB</option>
            <option value="Los Angeles Rams">LAR</option> 
            <option value="Minnesota Vikings">MIN</option> 
            <option value="New Orleans Saints">NO</option>
            <option value="New York Giants">NYG</option>
            <option value="Philidelphia Eagles">PHI</option>
            <option value="San Francisco 49ers">SF</option> 
            <option value="Seattle Seahawks">SEA</option> 
            <option value="Tampa Bay Buccaneers">TB</option>
            <option value="Washington Football Team">WAS</option>
            <option value="Baltimore Ravens">BAL</option>
            <option value="Buffalo Bills">BUF</option> 
            <option value="Cincinnati Bengals">CIN</option> 
            <option value="Cleveland Browns">CLE</option>
            <option value="Denver Broncos">DEN</option> 
            <option value="Houston Texans">HOU</option>
            <option value="Indianapolis Colts">IND</option>
            <option value="Jacksonville Jaguars">JAX</option>
            <option value="Kansas City Chiefs">KC</option> 
            <option value="Las Vegas Raiders">LV</option> 
            <option value="Los Angeles Chargers">LAC</option>
            <option value="Miami Dolphins">MIA</option> 
            <option value="New England Patriots">NE</option>
            <option value="New York Jets">NYJ</option>
            <option value="Pittsburgh Steelers">PIT</option>
            <option value="Tennesee Titans">TEN</option>
          </select>
        </label>
        <br/>
        <label>Player Image
          <input
          type="text"
          name='img'
          value={newData.img || ''}
          onChange={handleChange}
          />
        </label>
        <br/>
        <input id="submit" type='submit' />
      </form>
    </div>
  )
}

export default Create;