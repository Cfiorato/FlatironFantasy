
function Search({search, onSearch}){
  return(
    <div className="Search">
      <input 
        placeholder="Player Name"
        className="searchBar"
        type="text"
        value={search}
        onChange={(e) => onSearch(e)}
      />
    </div>
  )
}

export default Search;