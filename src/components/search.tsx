import react, { useState, FunctionComponent, useEffect } from "react";
// import "filterthing" from "./filter"

const searchBar: FunctionComponent = () => {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {}, [search]);
  async function requestRecipes() {}

  return (
    <div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <label htmlFor="search"> Search </label>
        <input
          id="search"
          value={search}
          placeholder="Search"
          onChange={(e) => setSearch(e.target.value)}
        />
      </form>
    </div>
  );
};

export default searchBar;
