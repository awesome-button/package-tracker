import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Search from "../organisms/Search";
import Items from "../organisms/Items";

const ResultsPage = ({ parcels, parameter }) => {
  return (
    <div className="results-page">
      <Header />
      <main>
        <Search parcels={parcels} />
        <Items parcels={parcels} parameter={parameter} />
      </main>
      <Footer />
    </div>
  );
};

export default ResultsPage;
