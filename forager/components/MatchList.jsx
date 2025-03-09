'use client';
import React from "react";
import SimilarMushrooms from "./SimilarMushroomCard";
import { mushroomData } from "../data/development";

const MatchList = () => {
    const filteredMushrooms = mushroomData.mushrooms.filter(
        (mushroom) => mushroom.name !== "Death Cap" && mushroom.name !== "Your Photo"
    );

    return (
        <div className="w-full flex flex-col items-start mt-[3%] mx-[10%]">
            <ul className="mushroom-list list-none grid grid-cols-2 gap-x-10 gap-y-5 max-w-md mx-auto justify-center">
                {filteredMushrooms.length > 0 ? (
                    filteredMushrooms.map((mushroom, index) => (
                        <li key={index} className="flex justify-center">
                            <SimilarMushrooms {...mushroom} />
                        </li>
                    ))
                ) : (
                    <p className="text-center text-gray-500">No mushrooms available</p>
                )}
            </ul>
        </div>
    );
};

export default MatchList;
