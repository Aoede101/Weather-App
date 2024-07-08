import "./searchbar.css"
export default function SearchBar() {
  return (
    <form>
      <input type="search" placeholder="Search Location" />
      <i
        className="fa-solid fa-magnifying-glass"
        style={{ color: "#ffffff" }}
      ></i>
    </form>
  )
}

