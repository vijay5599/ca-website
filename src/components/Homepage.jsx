import React, { useEffect, useState } from "react";
import "./Homepage.css";
import Connect from "./Connect";
import Navbar from "./Navbar";
import jsonData from "../data/CA.json";
import { Link } from "react-router-dom";

function Homepage() {
  const [searchName, setSearchName] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [nameNotFound, setNameNotFound] = useState(false);

  const handleSearch = () => {
    const filteredResults = jsonData.details.filter((person) =>
      person.name.toLowerCase().includes(searchName.toLowerCase())
    );

    if (filteredResults.length === 0 || searchName.length === 0) {
      // If no results found, set nameNotFound to true
      setNameNotFound(true);
    } else {
      setNameNotFound(false);
    }

    setSearchResults(filteredResults);
  };
  return (
    <div>
      <section className=" bg-blue-50 w-full h-full text-left text-46xl text-black font-poppins">
        <Navbar />
        <div className="absolute flex flex-col mt-40 ml-3 font-poppins">
          <b className="inline-block">
            <span>{`Find  `}</span>
            <span className="text-gradient ">Partner</span>
            <span>
              (CAs)<br></br>available online
            </span>
          </b>
          <div className="text-lg text-dimgray inline-block h-[55px] font-poppins">
            <b>{`CONNECT `}</b>
            <span>
              with us where your services are listed and visible to a myriad
              <br></br>
              of businesses seeking CA’s for compliance support
            </span>
          </div>
          <div className="">
            <input
              type="text"
              placeholder="Search by name"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
              className="absolute w-[400px] h-[55px] bg-white font-poppins border-darkgray border-2 outline-none rounded-md text-black text-lg mt-9 px-2"
            />

            <button
              className="absolute bg-blue-500 hover:bg-blue-700 text-white border-0 font-bold py-2 px-4 rounded ml-96 mb-10 h-[60px] mt-9 w-40 cursor-pointer"
              onClick={handleSearch}
            >
              Search
            </button>
            {nameNotFound ? (
              <div className="mt-28 text-red-500 text-lg">Name not found</div>
            ) : (
              searchResults.map((person, index) => (
                <div key={index} className="mt-28 text-sm ml-2">
                  <Link to={`/details/${person.name}`}>{person.name}</Link>
                </div>
              ))
            )}
          </div>
        </div>

        <div className="flex flex-row mt-12 ml-[670px] gap-10 w-96 items-start justify-stretch ">
          <div className="flex-1 flex flex-row items-start justify-start pt-[83.96552276611328px] px-0 pb-0">
            <img src="/picture@2x.png" className="w-44 h-[350px] rounded-2xl" />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start">
            <img
              src="/picture1@2x.png"
              className="w-44 h-[350px] rounded-2xl"
            />
          </div>
          <div className="flex-1 flex flex-row items-start justify-start pt-[41.98276138305664px] px-0 pb-0">
            <img
              src="/picture2@2x.png"
              className="w-44 h-[350px] rounded-2xl"
            />
          </div>
        </div>
      </section>
      <Connect />
    </div>
  );
}

export default Homepage;
