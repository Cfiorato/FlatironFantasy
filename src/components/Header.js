import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../images/flatiron-football-logo.png"

function Header () {
  return(
    <div className="Header">
      <Link to = '/'>
        <img id="logo" src={logo} alt="logo" />
      </Link>
      <h1>Fantasy Football Database</h1>
      <div className="pageLinks">
        <Link id = "dataBaseButton" to ='/players'><button>Database</button></Link>
        <Link id = "watchlistButton" to = '/watchlist'><button>Watchlist</button></Link>
        <Link id = "createPlayerButton" to = '/create'><button>Create</button></Link>
      </div>
    </div>
  )
}

export default Header;