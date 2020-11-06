import React from "react";
import Item from "./Item";

const Items = ({ parcels, parameter }) => {
  //checking if the parameter given by user is a number or a string
  const regex = new RegExp(/[0-9]+/);
  const isNumber = regex.test(parameter);

  let filteredItems = [];

  //If it is a number we want to find the package with this unique id
  if (isNumber && parameter) {
    console.log("number");
    filteredItems = parcels.filter((parcel) => {
      return parseInt(parcel.parcel_id) === parseInt(parameter);
    });
  } else {
    console.log("not number");
    filteredItems = parcels.filter((parcel) => {
      return parcel.user_name === parameter;
    });
  }

  return (
    <section className="items">
      {filteredItems.length === 0 ? (
        <p className="no-results">
          Your search has not given any results. <br />
          Please check that the ID/name you entered are correct and try again
        </p>
      ) : (
        filteredItems.map((item) => <Item item={item} key={item.id} />)
      )}
    </section>
  );
};

export default Items;
