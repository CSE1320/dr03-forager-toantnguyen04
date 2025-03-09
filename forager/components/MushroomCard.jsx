import React from "react";

const MushroomCard = ({ name, imageSrc, toxic }) => {
    return (
        <div className="text-center">
            <div className="bg-white shadow-md rounded-lg px-1 py-3 w-28 relative mx-auto">
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-[98%] h-32 object-cover rounded-md mx-auto"
                />

                {toxic && (
                    <div className="absolute top-3 left-2 m-2">
                        <img 
                            src="/icons/red_warning_icon.svg" 
                            alt="Warning: Toxic" 
                            className="w-6 h-6" />
                    </div>
                )}
            </div>
            <h3 className="text-lg font-nunito font-semibold text-darkBlue mt-2 flex justify-center">{name}</h3>
        </div>
    );
};

export default MushroomCard;
