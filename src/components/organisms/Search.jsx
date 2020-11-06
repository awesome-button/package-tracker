import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Search = () => {
  const [id, setId] = useState("");
  const [name, setName] = useState("");
  const history = useHistory();

  const searchByID = (event) => {
    event.preventDefault();
    //prevents user from submitting an empty input
    if (id === "") return;
    history.push(`/parcels/${id}`);
  };

  const searchByName = (event) => {
    event.preventDefault();
    //prevents user from submitting an empty input
    if (name === "") return;
    history.push(`/parcels/${name}`);
  };

  return (
    <section className="search">
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

      {/* The part with forms will look different depending on screen size */}

      <div className="forms">
        <form type="submit" onSubmit={(event) => searchByID(event)}>
          <label>Package ID:</label>
          <input
            placeholder="5625"
            value={id}
            onChange={(event) => setId(event.target.value)}
          />
          <button
            className="search-button"
            type="submit"
            onClick={(event) => searchByID(event)}
          >
            Track
          </button>
        </form>

        <p className="alternative">
          or enter your name to see all your packages
        </p>

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
    </section>
  );
};

export default Search;
