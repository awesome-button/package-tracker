import React from "react";

const Item = ({ item }) => {
  //Destructuring to use properties of the item
  const { parcel_id, status, sender, location_name, eta } = item;

  //use RegEx to format the eta fetched from API
  const formatETA = (eta) => {
    const regex = new RegExp(/\d{4}-\d{2}-\d{2}/g);
    const date = eta.match(regex);
    return date;
  };

  const formatStatus = (status) => {
    return status.split("-").join(" ");
  };

  return (
    <article className="item">
      {/* ID and status will be displayed on the left of the item */}
      <div className="left">
        <span className="signature">
          #ID:
          <strong> {parcel_id}</strong>
        </span>
        <span className="signature">Status:</span>
        <span>
          <strong>{formatStatus(status)}</strong>
        </span>
      </div>
      {/* The rest of info on the right side */}
      <div className="right">
        <span className="signature">Arrival expected on:</span>
        <span>
          <strong>{formatETA(eta)}</strong>
        </span>
        <span className="signature">Sender:</span>
        <span>
          <strong> {sender}</strong>
        </span>
        <span className="signature">Pick-up location:</span>
        <span>
          {" "}
          <strong> {location_name}</strong>
        </span>
      </div>
    </article>
  );
};

export default Item;
