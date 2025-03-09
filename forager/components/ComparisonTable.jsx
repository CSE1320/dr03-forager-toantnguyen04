'use client';
import React, { useState } from 'react';  
import { yourMushroom, knownMushroom, distinguishingFeatures } from '../data/development';


const ComparisonTable = () => {
  // state to track the unknown mushroom's features
  const [unknownMushroom, setUnknownMushroom] = useState(yourMushroom);
  // handle input changes
  const handleInputChange = (feature, value) => {
    setUnknownMushroom((prev) => ({
      ...prev,
      [feature]: value,
    }));
  };
  return (
    <div className="max-w-4xl mx-auto p-6 shadow-lg rounded-lg">
      <div className="overflow-x-auto">
        <table className="w-full">
          <tbody>
            {Object.keys(distinguishingFeatures).map((feature) => (
              <tr key={feature} className="">

                {/* Editable input for the unknown mushroom */}
                <td className="w-1/3 text-darkBlue font-nunito font-bold p-3">
                  <input
                    type="text"
                    value={unknownMushroom[feature]}
                    onChange={(e) => handleInputChange(feature, e.target.value)}
                    className="w-full border text-center rounded p-2"
                  />
                </td>

                {/* Feature description */}
                <td className="w-1/3 border-x-2 border-darkBlue text-darkBlue p-3 text-center font-bold font-nunito">
                  {distinguishingFeatures[feature]}
                </td>
                
                {/* Known mushroom feature */}
                <td className="w-1/3 text-center text-darkBlue font-bold p-3">{knownMushroom[feature]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ComparisonTable;