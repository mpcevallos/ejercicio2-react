function buscar(event) {
  console.log(event);
}

function SearchBar() {
  return (
    <div className="container-fluid mt-4">
      <nav className="navbar">
        <div className="container">
          <form className="container-fluid" role="search">
            <input
              className="form-control me-2 mb-5"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </form>
        </div>
      </nav>
    </div>
  );
}

export default SearchBar;
