import { useContext, useEffect, useState } from "react"
import MovieCard from "../components/MovieCard"
import SearchBar from "../components/SearchBar"
import { FavoritesContext } from "../context/FavoritesContext"
import { FaFilm } from "react-icons/fa"
import "../styles/pages/Home.css"

const Home = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext)
  const [movies, setMovies] = useState([])
  const [query, setQuery] = useState("")
  const [searchTerm, setSearchTerm] = useState("avengers")
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  // Debounce search input
  useEffect(() => {
    const timer = setTimeout(() => {
      if (query) {
        setSearchTerm(query)
      }
    }, 500)

    return () => clearTimeout(timer)
  }, [query])

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true)
      setError(null)

      try {
        const res = await fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=a411eecc`)
        const data = await res.json()

        if (data.Response === "False") {
          setError(data.Error)
          setMovies([])
        } else {
          setMovies(data.Search || [])
        }
      } catch (err) {
        console.error("Error fetching data:", err)
        setError("Failed to fetch movies. Please try again.")
      } finally {
        setLoading(false)
      }
    }

    fetchMovies()
  }, [searchTerm])

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1>Discover Movies</h1>
        <p className="subtitle">Search for your favorite movies and add them to your collection</p>
        <SearchBar query={query} setQuery={setQuery} />
      </div>

      <div className="content-section">
        {loading ? (
          <div className="loading-container">
            <div className="loader"></div>
            <p>Searching for movies...</p>
          </div>
        ) : error ? (
          <div className="error-container">
            <p>{error}</p>
            <p>Try searching for a different movie</p>
          </div>
        ) : movies.length === 0 ? (
          <div className="empty-container">
            <FaFilm size={40} />
            <p>No movies found. Try a different search term.</p>
          </div>
        ) : (
          <>
            <h2 className="results-title">{searchTerm ? `Results for "${searchTerm}"` : "Popular Movies"}</h2>
            <div className="movie-grid">
              {movies.map((movie) => (
                <MovieCard
                  key={movie.imdbID}
                  movie={movie}
                  isFavorite={favorites.some((fav) => fav.imdbID === movie.imdbID)}
                  toggleFavorite={toggleFavorite}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
