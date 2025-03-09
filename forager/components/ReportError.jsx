'use client';
import React, { useState } from "react";

const ReportError = () => {
    const [showTextField, setShowTextField] = useState(false);
    const [errorText, setErrorText] = useState("");

    const handleReportError = () => {
        setShowTextField(true);
    };

    const handleSubmit = () => {
        setShowTextField(false);
        setErrorText("");
    };

    return (
        <div className="flex flex-col items-center p-3 mx-[10%]">
            <div className="flex justify-between items-center w-full">
                
                {/* Left Text */}
                <span className="text-gray-700 font-nunito text-sm whitespace-nowrap">Not what you expected?</span>
                
                {/* Report Error Button */}
                <button 
                    onClick={handleReportError} 
                    className="bg-[#FF5050] text-white font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-red-600 transition text-sm"
                >
                    Report Error &gt;
                </button>
            </div>
            
            {/* Error Text Field and Submit Button */}
            {showTextField && (
                <div className="mt-3 w-full">
                    <label className="text-gray-700 font-nunito text-sm">Tell us what's wrong!</label>
                    <textarea 
                        className="w-full p-2 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF5050]"
                        rows="3"
                        value={errorText}
                        onChange={(e) => setErrorText(e.target.value)}
                        placeholder="Describe the issue here..."
                    ></textarea>
                    <button 
                        onClick={handleSubmit} 
                        className="bg-[#FF5050] text-white font-semibold px-4 py-2 mt-2 rounded-lg shadow-md hover:bg-red-600 transition text-sm"
                    >
                        Submit
                    </button>
                </div>
            )}
        </div>
    );
};

export default ReportError;
