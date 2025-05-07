"use client"

import { createContext, useState, useEffect } from "react"

// Create Context
export const FavoritesContext = createContext()

// Create Provider Component
export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([])

  // Fetch favorites from localStorage when the app loads
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || []
    setFavorites(storedFavorites)
  }, [])

  // Update localStorage whenever favorites change
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites))
  }, [favorites])

  // Function to add/remove movies from favorites
  const toggleFavorite = (movie) => {
    const isFav = favorites.some((fav) => fav.imdbID === movie.imdbID)

    if (isFav) {
      // Remove from favorites with animation
      const updatedFavorites = favorites.filter((fav) => fav.imdbID !== movie.imdbID)
      setFavorites(updatedFavorites)
    } else {
      // Add to favorites
      setFavorites([...favorites, movie])
    }
  }

  return <FavoritesContext.Provider value={{ favorites, toggleFavorite }}>{children}</FavoritesContext.Provider>
}
