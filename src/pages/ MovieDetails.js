"use client"

import { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom"
import { Star, Calendar, User, Users, Globe, ArrowLeft, Award, Clock } from "lucide-react"
import "./MovieDetails.css"

const MovieDetails = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMovieDetails = async () => {
      if (!id) {
        console.error("Movie ID is undefined")
        return
      }

      try {
        setLoading(true)
        const res = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=a411eecc`)
        const data = await res.json()
        setMovie(data)
      } catch (err) {
        console.error("Failed to fetch movie details:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchMovieDetails()
  }, [id])

  if (loading) {
    return <div className="loader">Loading movie details</div>
  }

  if (!movie) return <div className="loader">Movie not found</div>

  // Split genres into an array for rendering as tags
  const genres = movie.Genre ? movie.Genre.split(", ") : []

  return (
    <div className="details-container">
      <div className="details-card">
        <div className="poster-container">
          <img
            src={movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/300x450?text=No+Poster+Available"}
            alt={movie.Title}
            className="poster"
          />
        </div>
        <div className="details-info">
          <div>
            <h2>
              {movie.Title}
              <span className="year-badge">{movie.Year}</span>
            </h2>

            <div className="genre-tags">
              {genres.map((genre, index) => (
                <span key={index} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>

            {movie.imdbRating !== "N/A" && (
              <div className="rating-container">
                <div className="rating-badge">
                  <Star size={18} fill="#FFF" stroke="none" />
                  {movie.imdbRating}/10
                </div>
              </div>
            )}
          </div>

          <p className="plot">{movie.Plot}</p>

          <div className="info-row">
            <Calendar size={20} />
            <span className="info-label">Released:</span>
            <span>{movie.Released}</span>
          </div>

          <div className="info-row">
            <Clock size={20} />
            <span className="info-label">Runtime:</span>
            <span>{movie.Runtime}</span>
          </div>

          <div className="info-row">
            <User size={20} />
            <span className="info-label">Director:</span>
            <span>{movie.Director}</span>
          </div>

          <div className="info-row">
            <Users size={20} />
            <span className="info-label">Actors:</span>
            <span>{movie.Actors}</span>
          </div>

          <div className="info-row">
            <Globe size={20} />
            <span className="info-label">Language:</span>
            <span>{movie.Language}</span>
          </div>

          {movie.Awards !== "N/A" && (
            <div className="info-row">
              <Award size={20} />
              <span className="info-label">Awards:</span>
              <span>{movie.Awards}</span>
            </div>
          )}

          <Link to="/" className="back-btn">
            <ArrowLeft size={18} />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
