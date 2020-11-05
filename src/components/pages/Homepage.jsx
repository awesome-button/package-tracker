import React from "react";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";
import Search from "../organisms/Search";

const Homepage = () => {
  return (
    <div className="homepage">
      <Header />
      <main>
        <Search />
      </main>
      <Footer />
    </div>
  );
};

export default Homepage;
