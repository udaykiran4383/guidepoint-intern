import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Favorites from "./pages/Favorites"
import MovieDetails from "./pages/ MovieDetails.js"
import Navbar from "./components/Navbar"
import { FavoritesProvider } from "./context/FavoritesContext"
import Footer from "./components/Footer.js"
import "./styles/global.css"

const App = () => {
  return (
    <FavoritesProvider>
      <Router>
        <div className="app-container">
          <Navbar />
          <main className="main-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/movie/:id" element={<MovieDetails />} />
            </Routes>
          </main>
          <Footer /> 
        </div>
      </Router>
    </FavoritesProvider>
  )
}

export default App
