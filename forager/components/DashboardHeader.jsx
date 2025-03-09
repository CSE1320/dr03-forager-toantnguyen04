import React from 'react';

const DashboardHeader = () => {
    return (
        <div>
            <div className="dashboard-header bg-[#397367] h-[25%] w-full fixed top-0 left-0 flex justify-between items-center z-10">
                <div>
                    <h1 className="text-white font-nunito text-[150%] px-[20%] leading-tight">
                        Hi, 
                    </h1>
                    <h1 className="text-white font-nunito font-bold text-[275%] px-[20%] leading-tight">
                        Chantelle!
                    </h1>
                </div>
                <img src="/images/dashboard_mushroom.png" alt="Mushroom" className="absolute top-0 right-0" />
            </div>
        </div>
    );
};

export default DashboardHeader;
