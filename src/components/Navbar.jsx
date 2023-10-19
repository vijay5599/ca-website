import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  return (
    <div>
      <header className="flex h-[70px] justify-between w-[90vw] text-lg text-black mx-8 font-poppins">
        <div className="flex items-center mx-7">
          <img
            className="w-[138px] h-auto items-center mr-8"
            alt=""
            src="/image-11@2x.png"
          />
          <b className="px-1">Solutions</b>
          <KeyboardArrowDownIcon />
          <b className="px-1 ml-5">Features</b>
          <KeyboardArrowDownIcon />
          <b className="px-1 ml-5">Blogs</b>
          <KeyboardArrowDownIcon />
          <b className="px-1 ml-5">About</b>
          <KeyboardArrowDownIcon />
        </div>
        <div className="flex-none">
          <button class="bg-transparent text-blue-700 font-semibold py-2 px-4 border border-blue-500 rounded mx-4 my-4 cursor-pointer">
            Login
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded border-none cursor-pointer">
            Register
          </button>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
