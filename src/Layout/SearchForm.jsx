import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useGlobalContext } from "../context/context";

export default function SearchForm() {
  const { handleSearch, onSearchSubmit } = useGlobalContext();
   

  return (
    <>
      <div className="input-search  flex justify-center items-center bg-white md:text-2xl   border  md:p-4  md:border-lightGrey rounded md:rounded-xl      ">

        {/* form input */}
        <input
          className=" flex  flex-1 justify-center placeholder-darkGrey text-darkGrey   outline-transparent text-center "
          placeholder="Search for an artist..."
          onChange={handleSearch}
        />

        {/* search icon */}
        <button className=" md:ml-auto outline-transparent" onClick = {onSearchSubmit}>
          <FontAwesomeIcon icon={faSearch} className="text-lightGrey" />
        </button>

      </div>
      
    </>
  );
}
