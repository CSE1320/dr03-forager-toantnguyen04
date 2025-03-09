'use client';
import React from "react";
import CompareMushroom from "./CompareMushroom";
import YourMushroom from '@/components/YourMushroom';

const CompareMushroomList = () => {
    return (
        <div className="w-full flex flex-col items-center mt-[8%]">
            <ul className="list-none flex justify-center gap-x-2 max-w-lg mx-auto">
                {/* Your Mushroom */}
                <li className="flex justify-center w-full">
                    <YourMushroom />
                </li>
                
                {/* Compare Mushroom */}
                <li className="flex justify-center w-full">
                    <CompareMushroom />
                </li>
            </ul>
        </div>
    );
};

export default CompareMushroomList;
