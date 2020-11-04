import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Search from "../organisms/Search";
import Item from "../organisms/Item";

const ResultsPage = ({ parcels, id }) => {
  console.log(parcels);
  console.log(id);
  return (
    <div className="results-page">
      <Header />
      <Search />
      <Item />
      <Footer />
    </div>
  );
};

export default ResultsPage;
