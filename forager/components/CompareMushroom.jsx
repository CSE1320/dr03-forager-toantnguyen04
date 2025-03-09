import React from 'react';

const CompareMushroom = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg px-1 pt-2 w-[150px] h-[230px] relative">
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
                    src="/images/death_cap.png"
                    alt="Death Cap"
                    className="w-full h-[182px] object-cover rounded-md mx-auto"
                />
            </div>
            <div className='text-center'>
            <h3 className="text-lg font-nunito font-semibold text-darkBlue mt-2 text-center">Death Cap</h3>
            </div>
        </div>
    );
};

export default CompareMushroom;