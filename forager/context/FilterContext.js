'use client';
import React, { createContext, useState, useContext, useEffect } from "react";

// Create Context
const FilterContext = createContext();

// Context Provider
export const FilterProvider = ({ children }) => {
  const [selectedFilters, setSelectedFilters] = useState({
    Tags: [],
    Regions: [],
    Categories: [],
  });

  useEffect(() => {
    console.log("📩 FilterContext Updated: ", JSON.stringify(selectedFilters, null, 2)); // Debugging log
  }, [selectedFilters]);

  return (
    <FilterContext.Provider value={{ selectedFilters, setSelectedFilters }}>
      {children}
    </FilterContext.Provider>
  );
};

// Custom Hook for easier access
export const useFilter = () => useContext(FilterContext);