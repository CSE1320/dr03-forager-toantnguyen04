'use client';
import React from 'react';
import Link from 'next/link';

const TopCameraBar = () => {
    return (
        <div className="w-full h-1/6 bg-black bg-opacity-50 flex items-center justify-between absolute top-0 pt-10 px-10">
            {/* Back Button */}
            <Link href="/dashboard" passHref>
                <div className="flex items-center justify-center h-full">
                    <img src="/icons/back_icon.svg" alt="back button" />
                </div>
            </Link>

            {/* Spacer to create 50% gap */}
            <div className="flex-grow" />

            {/* Flash Button */}
            <div className="flex items-center justify-center h-full w-1/6">
                <img src="/icons/flash_icon.svg" alt="flash button" />
            </div>
        </div>
    );
};

export default TopCameraBar;
