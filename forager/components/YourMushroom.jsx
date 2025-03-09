import React from 'react';

const YourMushroom = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-lg px-1 pt-8 w-[150px] relative">
                <img
                    src="/images/your_mushroom.png"
                    alt="Your Mushroom"
                    className="w-full object-cover rounded-md mx-auto pb-[10%]"
                />
            </div>
            <div className='text-center'>
            <h3 className="text-lg font-nunito font-semibold text-darkBlue mt-2 text-center">Your Photo</h3>
            </div>
        </div>
    );
};

export default YourMushroom;