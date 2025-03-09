import React from "react";

const SimilarMushrooms = ({ name, imageSrc, toxic, matchPercent, matchColor }) => {
    return (
        <div className="text-center">
            <div className="bg-white shadow-md rounded-lg px-1 py-3 w-32 relative mx-auto">
                <img
                    src={imageSrc}
                    alt={name}
                    className="w-[98%] h-32 object-cover rounded-md mx-auto"
                />

                {/* Match Percentage and Warning Icon */}
                {(matchPercent || toxic) && (
                    <div className="absolute top-5 left-3 flex items-center gap-1">
                        {matchPercent && (
                            <span 
                                className='text-white text-xs font-bold flex items-center justify-center rounded-md w-8 h-6'
                                style={{ backgroundColor: matchColor}}
                            >
                                {matchPercent}
                            </span>
                        )}
                        {toxic && (
                            <img 
                                src="/icons/red_warning_icon.svg" 
                                alt="Warning: Toxic" 
                                className="w-6 h-6" 
                            /> 
                        )}
                    </div>
                )}
            </div>
            <h3 className="text-lg font-nunito font-semibold text-darkBlue mt-2 flex justify-center">{name}</h3>
        </div>
    );
};

export default SimilarMushrooms;