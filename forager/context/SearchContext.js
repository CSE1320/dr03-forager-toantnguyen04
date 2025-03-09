"use client";
import React, { createContext, useState, useContext } from "react";

// Create Context
const SearchContext = createContext();

// Context Provider
export const SearchProvider = ({ children }) => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SearchContext.Provider value={{ searchQuery, setSearchQuery }}>
      {children}
    </SearchContext.Provider>
  );
};

// Custom Hook for easier access
export const useSearch = () => useContext(SearchContext);
