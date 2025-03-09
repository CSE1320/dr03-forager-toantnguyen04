import React from 'react';
import Pill from './Pill';

const PillList = ({ title, pills, category }) => {
    return (
        <div className="space-y-2 pt-[22px] pb-[22px]">
            <h2 className="text-black font-nunito font-bold text-[24px] leading-normal">
                {title}
            </h2>
            {pills.map((pillName, index) => (
                <Pill key={index} name={pillName} category={category} />
            ))}
        </div>
    );
};

export default PillList;
