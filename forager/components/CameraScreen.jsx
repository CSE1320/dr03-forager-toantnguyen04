'use client';
import React from 'react';
import Link from 'next/link';

const CameraScreen = () => {
    return (
        <div>
            <div className="flex flex-col items-center justify-center w-screen h-screen bg-cover bg-center" style={{ backgroundImage: 'url(/images/camera_screen.svg)' }}>
            </div>
        </div>
    );
};

export default CameraScreen;
