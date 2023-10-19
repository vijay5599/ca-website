import React from "react";

function SearchForm() {
  return (
    <div className="bg-blue-50 overflow-hidden m-0 top-0">
      <div className="top-12">
        <b className="inline-block text-46xl font-poppins mt-40 ml-9">
          <span className="text-gradient mr-1">All in one</span>
          <span>
            Platform <br></br>thats Make Easier
          </span>
        </b>
        <div className="text-5xl font-poppins ml-9 mt-5">
          We are more than a platform; We are your<br></br> success partner.
          Discover our services to achieve<br></br> your business and
          educational goals
        </div>

        <div className="grid grid-cols-2 list-none ml-9 mt-4 w-[40%] gap-10 font-poppins mb-48">
          <li className="flex">
            <img src="/iconparktwotonesearch.svg" className="w-12 h-12 mr-4" />
            <span>
              <b>SEARCH</b> for vital company information
            </span>
          </li>
          <li className="flex">
            <img src="/iconparktwotoneenquire.svg" className="w-11 h-11 mr-4" />
            <span>
              <b>CONNECT</b> with the resources to meet your business needs
            </span>
          </li>
          <li className="flex">
            <img
              src="/iconparktwotonetablereport.svg"
              className="w-12 h-12 mr-4"
            />
            <span>
              <b>RESEARCH</b> and generate reports that drive growth
            </span>
          </li>
          <li className="flex">
            <img
              src="/iconparktwotonedegreehat.svg"
              className="w-12 h-12 mr-4"
            />
            <span>
              <b>ACADEMY</b> to give you the skills for success in your career
            </span>
          </li>
        </div>
      </div>
    </div>
  );
}

export default SearchForm;
