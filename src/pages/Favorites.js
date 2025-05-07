import { useContext } from "react"
import MovieCard from "../components/MovieCard"
import { FavoritesContext } from "../context/FavoritesContext"
import { FaHeart, FaArrowLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import "../styles/pages/Favorites.css"

const Favorites = () => {
  const { favorites, toggleFavorite } = useContext(FavoritesContext)

  return (
    <div className="favorites-page">
      <div className="favorites-header">
        <h1>
          <FaHeart className="favorites-icon" />
          Your Favorites
        </h1>
        <p className="favorites-subtitle">
          {favorites.length > 0
            ? `You have ${favorites.length} favorite movie${favorites.length !== 1 ? "s" : ""}`
            : "Start adding movies to your favorites collection"}
        </p>
      </div>

      {favorites.length > 0 ? (
        <div className="movie-grid">
          {favorites.map((movie) => (
            <MovieCard
              key={movie.imdbID}
              movie={movie}
              isFavorite={true}
              toggleFavorite={toggleFavorite}
              fromFavoritesPage={true}
            />
          ))}
        </div>
      ) : (
        <div className="empty-favorites">
          <div className="empty-favorites-icon">
            <FaHeart />
          </div>
          <h2>No favorites yet</h2>
          <p>Start exploring and add movies to your favorites</p>
          <Link to="/" className="back-to-home">
            <FaArrowLeft />
            Explore Movies
          </Link>
        </div>
      )}
    </div>
  )
}

export default Favorites
