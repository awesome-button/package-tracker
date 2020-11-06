import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const searchByID = (event) => {
    event.preventDefault();
    history.push(`/parcels/${query}`);
  };

  const searchByName = (event) => {
    event.preventDefault();
    history.push(`/parcels/${name}`);
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

      <form type="submit" onSubmit={(event) => searchByID(event)}>
        <label>Your package ID:</label>
        <input
          placeholder="5625"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
        <button
          className="search-button"
          type="submit"
          onClick={(event) => searchByID(event)}
        >
          Track
        </button>
      </form>

      <p>or enter your name to see all your packages</p>

      <form type="submit" onSubmit={(event) => searchByName(event)}>
        <label>Full Name:</label>
        <input
          placeholder="John Snow"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
        <button
          className="search-button"
          type="submit"
          onClick={(event) => searchByName(event)}
        >
          Track
        </button>
      </form>
    </div>
  );
};

export default Search;
