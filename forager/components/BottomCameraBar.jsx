'use client';
import React from 'react';
import Link from 'next/link';

const BottomCameraBar = () => {
    return (
        <div className="w-full h-1/6 bg-black bg-opacity-50 flex items-center justify-between absolute bottom-0 px-[10%]">
            {/* Back Button */}
            <Link href="/dashboard" passHref>
                <div className="flex items-center justify-center h-full">
                    <img src="/icons/gallery_icon.svg" alt="gallery button" />
                </div>
            </Link>

            <div className="flex-grow" />

            {/* Capture Button */}
            <Link href="/mushroom" passHref>
                <div className="flex items-center justify-center pl-5 h-full">
                    <img src="/icons/capture_icon.svg" alt="capture button" />
                </div>
            </Link>

            {/* Spacer to create 50% gap */}
            <div className="flex-grow" />

            {/* Flash Button */}
            <div className="flex items-center justify-center h-full w-1/6">
                <img src="/icons/flip_icon.svg" alt="flip camera button" />
            </div>
        </div>
    );
};

export default BottomCameraBar;