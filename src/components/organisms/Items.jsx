import React from "react";
import Item from "./Item";

const Items = ({ parcels, parameter }) => {
  //checking if the parameter given by user is a number or a string
  const regex = new RegExp(/[0-9]+/);
  const isNumber = regex.test(parameter);

  let filteredItems = [];

  //If it is a number we want to find the package with this unique id
  if (isNumber) {
    filteredItems = parcels.filter((parcel) => {
      return parseInt(parcel.id) === parseInt(parameter);
    });
  } else {
    filteredItems = parcels.filter((parcel) => {
      return parcel.user_name === parameter;
    });
  }

  console.log(filteredItems);

  return (
    <section>
      {filteredItems.length === 0 ? (
        <p>
          Your search has not given any results. Please check that the ID/name
          you entered are correct and try again
        </p>
      ) : (
        filteredItems.map((item, key) => <Item item={item} key={key} />)
      )}
    </section>
  );
  //   const item = parcels.filter((parcel) => parcel.id === input)[0];
  //   console.log(item);

  //   const { id, status, sender, location_name, eta } = item;

  //   return (
  //     <article className="item">
  //       <span>
  //         <strong>Status:</strong>
  //         {status}
  //       </span>
  //       <span>
  //         <strong>Sender:</strong>
  //         {sender}
  //       </span>
  //       <span>
  //         <strong>Pick-up location:</strong>
  //         {location_name}
  //       </span>
  //     </article>
  //   );
};

export default Items;
