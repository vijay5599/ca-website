import React from "react";
import Homepage from "../components/Homepage";
import SearchForm from "../components/SearchForm";
import Footer from "../components/Footer";

function Fullpage() {
  return (
    <div className="">
      <Homepage />
      <SearchForm />
      <Footer />
    </div>
  );
}

export default Fullpage;
