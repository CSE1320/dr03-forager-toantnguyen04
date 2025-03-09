"use client";
import React from "react";
import { FaSearch } from "react-icons/fa";
import { useSearch } from "../context/SearchContext"; // ✅ Import Search Context

const Search = ({ onFilterOpen }) => {
  const { searchQuery, setSearchQuery } = useSearch(); // ✅ Use global search state

  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <div className="flex items-center gap-2 p-5 w-full">
      <div className="relative flex-grow">
        <FaSearch className="absolute left-3 top-3 text-gray-400 w-4 h-4" />
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search for a mushroom"
          className="w-full pl-10 pr-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-[#579076]"
        />
      </div>

      {/* Filter Button */}
      <button
        onClick={onFilterOpen}
        className="p-2 rounded-md"
      >
        <img src="/icons/filter_icon.svg" alt="filter button" className="w-5 h-5" />
      </button>
    </div>
  );
};

export default Search;
