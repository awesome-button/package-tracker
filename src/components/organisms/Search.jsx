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
      <div className="intro-text">
        <h1>
          Track your <br />
          package
        </h1>
        <p>
          Are you expecting a delivery? Cool! <br />
          Fill in your package ID below
        </p>
      </div>

      <form type="submit" onSubmit={(event) => searchPackage(event)}>
        <label>Your package ID:</label>
        <input
          placeholder="5625"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="search-button"
          type="submit"
          onClick={(event) => searchPackage(event)}
        >
          Track
        </button>
      </form>
    </div>
  );
};

export default Search;
