import SearchBar from "./SearchBar/SearchBar"

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
