'use client';
import React, { useState, useEffect } from "react";
import { messages } from "../data/development";

const AttentionMessage = () => {
    const [showMessage, setShowMessage] = useState(false);

    useEffect(() => {
        const showMessage = localStorage.getItem("showAttentionMessage");
        if (showMessage === "true" || showMessage === null) {
            setShowMessage(true);
        }
    }, []);

    const handleDismiss = () => {
        localStorage.setItem("showAttentionMessage", "false");
        console.log("showAttentionMessage status:", localStorage.getItem("showAttentionMessage"));
        setShowMessage(false);
    };

    const handleClose = () => {
        localStorage.setItem("showAttentionMessage", "true");
        console.log("showAttentionMessage status:", localStorage.getItem("showAttentionMessage"));
        setShowMessage(false);
    };

    if (!showMessage) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center relative">
            {/* Background Blur */}
            <div className="absolute bg-black bg-opacity-50 backdrop-blur-md w-[415px] h-[896px] z-30"></div>
            
            {/* Message Box */}
            <div className="relative bg-[#FF5050] text-white px-5 py-3 rounded-xl shadow-lg z-50">
                {/* Close Button */}
                <button onClick={handleClose} className="absolute top-4 right-5">
                    <img src="/icons/x_icon.png" alt="Close" className="w-5 h-5" />
                </button>
                
                {/* Message Content */}
                <div className="flex flex-col items-start">
                    <div className="flex items-center gap-2">
                        <img width="27px" height="27px" src={messages.attention.icon} alt="Attention" />
                        <h1 className="uppercase font-bold text-2xl">{messages.attention.header}</h1>
                    </div>
                    <p className="mt-2">{messages.attention.message}</p>
                    
                    {/* Don't show again button */}
                    <button 
                        onClick={handleDismiss} 
                        className="mt-3 bg-white text-[#FF5050] font-semibold px-3 py-1 rounded-lg shadow-md hover:bg-gray-200 transition text-sm self-end underline"
                    >
                        Don't show again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AttentionMessage;