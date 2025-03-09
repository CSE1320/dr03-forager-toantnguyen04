import React from 'react';

const DeathCap = () => {
    return (
        <div className="">
            <div className="bg-white shadow-md rounded-lg px-5 pt-[2%] pb-[3%] relative mx-[12.5%]">
                <div className="flex items-center pb-[2%]">
                    <img 
                        src="/icons/skull_icon.png"
                        alt="Skull"
                        className="mr-2" 
                    />
                    <span className="bg-[#FF5050] text-white text-sm font-semibold px-[2%] py-[1%] rounded-lg flex items-center">
                        <img 
                            src="/icons/icon_warning.svg"
                            alt="Warning"
                            className="w-4 h-4 mr-2"
                        />
                        97% Match
                    </span>
                </div>
                <img
                    src="/images/death_cap_match.png"
                    alt="Death Cap"
                    className="w-full object-cover rounded-md mx-auto pb-[10%]"
                />
            </div>
        </div>
    );
};

export default DeathCap;