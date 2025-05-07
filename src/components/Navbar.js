import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "./Navbar.css"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)

    // Clean up event listener
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev)

    // Prevent scrolling when menu is open
    if (!isMobileMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  // Close mobile menu when clicking a link
  const closeMobileMenu = () => {
    if (isMobileMenuOpen) {
      setIsMobileMenuOpen(false)
      document.body.style.overflow = "auto"
    }
  }

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/" onClick={closeMobileMenu}>
            Movie Explorer
          </Link>
        </div>

        <div className={`menu-links ${isMobileMenuOpen ? "active" : ""}`}>
          <ul>
            <li>
              <Link to="/" onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li>
              <Link to="/favorites" onClick={closeMobileMenu}>
                Favorites
              </Link>
            </li>
            <li>
              <Link to="https://www.imdb.com" target="_blank" rel="noopener noreferrer" onClick={closeMobileMenu}>
                IMDb
              </Link>
            </li>
          </ul>
        </div>

        <div
          className={`menu-icon ${isMobileMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle menu"
          role="button"
          tabIndex={0}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
