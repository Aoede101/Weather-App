import SearchBar from "../SearchBar/SearchBar"
import "./NavBar.css"

export default function NavBar() {
  return (
    <nav>
      <a href="/" className="logo">
        Weather
      </a>
      <SearchBar />
    </nav>
  )
}
