import React from "react"

function Home (){

    return(
        <div className="Home">
            <h1>Welcome to Flatiron Football</h1>
            <h3>🏈  Look around in the database of the top fantasy players of 2021  🏈</h3>
            <br/>
            <h3>🏈  You can add players to your own watchlist to keep an eye on them for next year's draft  🏈</h3>
            <br/>
            <h3>🏈  Also feel free to add any player we don't have in our database using our form  🏈</h3>
            <br/>
            <p>Scoring numbers are compiled using ESPN's Standard Points-Per-Reception format</p>
        </div>
    );
}

export default Home;