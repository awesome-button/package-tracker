import React from "react";

const Item = ({ item }) => {
  console.log(item);
  const { id, status, sender, location_name, eta } = item;

  return (
    <article className="item">
      <span>
        <strong>Status:</strong>
        {status}
      </span>
      <span>
        <strong>Sender:</strong>
        {sender}
      </span>
      <span>
        <strong>Pick-up location:</strong>
        {location_name}
      </span>
    </article>
  );
};

export default Item;
