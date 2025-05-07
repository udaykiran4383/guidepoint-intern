"use client"
import { Link } from "react-router-dom"
import { FaHeart, FaRegHeart } from "react-icons/fa"
import "./MovieCard.css"

const MovieCard = ({ movie, isFavorite, toggleFavorite, fromFavoritesPage = false }) => {
  const handleToggleFavorite = (e) => {
    e.preventDefault()
    e.stopPropagation()
    toggleFavorite(movie)
  }

  return (
    <div className="movie-card">
      {fromFavoritesPage && <div className="movie-badge">Favorite</div>}
      <Link to={`/movie/${movie.imdbID}`} className="movie-link">
        <div className="movie-poster">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Image"}
            alt={movie.Title}
            loading="lazy"
          />
        </div>
        <div className="movie-info">
          <h3 className="movie-title">{movie.Title}</h3>
          <div className="movie-year">{movie.Year}</div>
          <div className="movie-actions">
            <button className="view-details">View Details</button>
            <button
              className={`favorite-btn ${isFavorite ? "active" : ""}`}
              onClick={handleToggleFavorite}
              aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
            >
              {isFavorite ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default MovieCard
