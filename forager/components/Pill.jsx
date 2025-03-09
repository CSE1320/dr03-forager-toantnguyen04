import React from 'react';
import { useFilter } from '../context/FilterContext'; // ✅ Import the filter context

const Pill = ({ name, category }) => {
    const { selectedFilters, setSelectedFilters } = useFilter(); // ✅ Use the global filter state

    // Check if this pill is selected
    const isSelected = selectedFilters[category]?.includes(name);

    // Toggle selection
    const toggleState = () => {
        setSelectedFilters((prevFilters) => {
            const updatedCategory = prevFilters[category]?.includes(name)
                ? prevFilters[category].filter((item) => item !== name)
                : [...(prevFilters[category] || []), name]; 
            return { ...prevFilters, [category]: updatedCategory };
        });
    };

    return (
        <div 
            onClick={toggleState}
            className={`inline-flex items-center justify-center gap-2 px-[17px] py-0 rounded-full font-normal text-[16px] leading-normal 
                font-nunito cursor-pointer transition-colors
                ${isSelected ? 'bg-[#579076] text-white' : 'bg-[#D9D9D9] text-[#7C7C7C]'} 
                mt-2 mb-2 mr-2`}>
            {name}
        </div>
    );
};

export default Pill;
