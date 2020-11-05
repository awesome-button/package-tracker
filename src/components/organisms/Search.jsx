import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const history = useHistory();

  const searchPackage = (event) => {
    event.preventDefault();
    history.push(`/parcels/${query}`);
    console.log(query);
  };

  return (
    <div className="search">
      <h1>Track your package</h1>
      <p>Are you expecting a delivery? Cool! Fill in your package ID below</p>

      <form type="submit" onSubmit={(event) => searchPackage(event)}>
        <label>Your package ID:</label>
        <input
          placeholder="5625"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button type="submit" onClick={(event) => searchPackage(event)}>
          Track
        </button>
      </form>
    </div>
  );
};

export default Search;
