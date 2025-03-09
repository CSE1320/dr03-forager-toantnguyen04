'use client';
import React from 'react';
import { useState } from 'react';
import { mushroomData } from '../data/development';

const AddtoFavorites = () => {
    const [isFavorite, setIsFavorite] = useState(
        mushroomData.mushrooms.find(mushroom => mushroom.name === "Death Cap").isFavorite
    );

    const handleAddToFavorites = () => {
        const deathCapIndex = mushroomData.mushrooms.findIndex(m => m.name === "Death Cap");
        if (deathCapIndex !== -1) {
            mushroomData.mushrooms[deathCapIndex].isFavorite = !isFavorite;
            setIsFavorite(!isFavorite);
        }
    };

    return (
        <div className="add-to-favorites mt-[3%] mx-[12.5%] flex items-center justify-between text-darkBlue">
            <div>
                <span className="death-cap font-semibold text-[30px]">Death Cap</span>
                <br />
                <span className="text-[20px]"><i>Amanita phalloides</i></span>
            </div>
            <button onClick={handleAddToFavorites} className="favorites-icon">
                <img 
                    src={isFavorite ? "/icons/favorites_icon.png" : "/icons/favorites_icon.png"} 
                    alt={isFavorite ? "Remove from Favorites" : "Add to Favorites"} 
                />
            </button>
        </div>
    );
};

export default AddtoFavorites;
