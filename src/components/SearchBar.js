"use client"
import { FaSearch, FaTimes } from "react-icons/fa"
import "./SearchBar.css"

const SearchBar = ({ query, setQuery }) => {
  const handleClear = () => {
    setQuery("")
  }

  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <FaSearch className="search-icon" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
          aria-label="Search movies"
        />
        {query && (
          <button className="clear-button" onClick={handleClear} aria-label="Clear search">
            <FaTimes />
          </button>
        )}
      </div>
    </div>
  )
}

export default SearchBar
