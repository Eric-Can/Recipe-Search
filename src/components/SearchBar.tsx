import react, { useState, FunctionComponent, useEffect } from "react";
// import "filterthing" from "./filter"

export function SearchBar() {
  const [recipe, setRecipe] = useState([]);
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(true)

  const API_ID: string | undefined = process.env.REACT_APP_API_ID
  const API_KEY: string | undefined = process.env.REACT_APP_API_KEY
  const API_URL_BASE: string | undefined = process.env.REACT_APP_API_URL_BASE

  const searchParams = {
      q: null,
      app_id: API_ID,
      app_key: API_KEY,
      diet: null,
      health: null,
      mealType: null,
      calories: null,
      nutrients: null,
  }

  useEffect(() => {
    const requestRecipes = () => {
      const response = fetch(API_URL_BASE as RequestInfo)
        .then(res => res.json())
        .then(response => {
        
          setIsLoading(false)
        })
}   

  }, [search]);


  return (
    <div>
      {/* <form
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
      </form> */}
      <h1>SearchBar</h1>
    </div>
  );
};
