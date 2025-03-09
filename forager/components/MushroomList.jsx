'use client';
import React from "react";
import { useRouter } from "next/navigation"; // ✅ Import useRouter for navigation
import { useFilter } from "../context/FilterContext";
import { useSearch } from "../context/SearchContext";
import MushroomCard from "./MushroomCard";
import PillList from "./PillList";
import { mushroomData } from "../data/development";

const MushroomList = ({ }) => {
    const router = useRouter(); // ✅ Initialize router for navigation
    const { selectedFilters = { tags: [] } } = useFilter() || {};
    const { searchQuery = "" } = useSearch() || {};

    let filteredMushrooms = mushroomData.mushrooms.filter(mushroom => mushroom.name !== "Your Photo");

    // Apply "Favorites" filter if selected
    if ((selectedFilters.tags ?? []).includes("Favorites")) {
        filteredMushrooms = filteredMushrooms.filter(mushroom => mushroom.isFavorite);
    }

    // Apply Search Filter
    if (searchQuery.trim() !== "") {
        filteredMushrooms = filteredMushrooms.filter(mushroom =>
            mushroom.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }

    // Handle navigation when clicking on a mushroom
    const handleCardClick = (mushroom) => {
        if (mushroom.name === "Death Cap") {
            router.push("/mushroom"); // ✅ Navigate to the mushroom page
        }
    };

    return (
        <div className="w-full flex flex-col items-start mx-[10%]">
            {/* Display selected filters using PillList */}
            {selectedFilters.tags?.length > 0 && (
                <div className="my-4 w-full pl-[6.5%] mt-[-10%] mb-[-1%]">
                    <PillList pills={selectedFilters.tags} category="tags" />
                </div>
            )}
            <ul className={`mushroom-list list-none grid grid-cols-3 gap-x-10 mx-[10%] justify-center`}>
                {filteredMushrooms.map((mushroom, index) => (
                    <li key={index} className="flex justify-center" onClick={() => handleCardClick(mushroom)}>
                        <MushroomCard {...mushroom} />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MushroomList;