'use client';
import React from 'react';
import { useFilter } from "../context/FilterContext";
import PillList from './PillList';
import { filterData } from "../data/development";

const FilterSettings = ({ onClose }) => {
    const { selectedFilters, setSelectedFilters } = useFilter(); // ✅ Use context

    // Handle selection for any filter category
    const handleFilterSelection = (category, value) => {
        setSelectedFilters((prevFilters) => {
            const updatedCategory = prevFilters?.[category]?.includes(value)
                ? prevFilters[category].filter((item) => item !== value) // Remove if selected
                : [...(prevFilters[category] || []), value]; // Add if not selected

            const newFilters = { ...prevFilters, [category]: updatedCategory };
            
            console.log("🚀 Updated Filters in Context:", newFilters); // ✅ Debugging log
            return newFilters;
        });
    };

    return (
        <div className="fixed bottom-[5%] left-[2%] right-[2%] bg-[#F2F2F2] rounded-t-[20px] p-4 space-y-4 h-[75%]">
            <div className="relative flex justify-center items-center">
                <h1 className="text-black font-nunito font-bold text-[24px] leading-normal">
                    FILTER
                    <button onClick={onClose} className="absolute right-0 text-white px-[5%] py-1 h-full">
                        <img src="/icons/icon_x.png" alt="Close" />
                    </button>
                </h1>
            </div>
            <div className="pl-[5%] space-y-4">
                {/* Hardcoded filter categories */}
                <PillList title="Tags" pills={filterData.tags} category="tags" onSelect={handleFilterSelection} />
                <PillList title="Regions" pills={filterData.Regions} category="Regions" onSelect={handleFilterSelection} />
                <PillList title="Categories" pills={filterData.Categories} category="Categories" onSelect={handleFilterSelection} />
            </div>
        </div>
    );
};

export default FilterSettings;
