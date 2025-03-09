import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const PageHeader = ({ pageType }) => {
    return (
        <header>
            <div className="page-header w-full h-[15%] bg-[#579076] rounded-b-[41px] fixed top-0 left-0 flex justify-between items-center z-10">
                <Link 
                    href={pageType === 'mushroom' ? '/' : pageType === 'comparison' ? '/mushroom' : '/'}
                    passHref
                >
                    <span className="back-button text-white font-semibold ml-4 mt-16 flex h-full items-center">
                        <img src="/icons/back_icon.svg" alt="Back" className="w-7 h-7" />
                        <p> </p>
                    </span>
                </Link>
                <div className="page-title text-white font-bold mt-16 flex-grow text-center flex items-center justify-center text-[2em]">
                    {pageType === 'mushroom' ? 'Match Results' : pageType === 'comparison' ? 'Compare' : ''}
                </div>
                <div className="w-7 h-7 mr-4"></div>
            </div>
        </header>
    );
};

export default PageHeader;
