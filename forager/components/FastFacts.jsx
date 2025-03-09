import React from "react";

const FastFacts = () => {
    return (
        <div className="flex flex-col items-center mx-[12.5%] mt-[3%]">
            {/* Fast Facts Card */}
            <div className="bg-[#8E4A49] text-white rounded-2xl p-4 w-full shadow-md">
                <h2 className="text-2xl font-semibold">Fast Facts</h2>
                <p className="text-lg mt-2">Cap Diameter: 5-15cm</p>
                <p className="text-lg">Gill Color: White</p>
                <p className="text-lg">Stem Color: White</p>
                <p className="text-lg">Habitat: Temperate regions</p>
            </div>
            
            {/* Description Paragraph */}
            <p className="text-darkBlue text-md mt-4 text-left">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in 
                reprehenderit in voluptate velit esse cillum dolore.
            </p>
        </div>
    );
};

export default FastFacts;