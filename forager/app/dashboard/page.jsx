"use client";
import React, { useState } from "react";
import { FilterProvider } from "../../context/FilterContext";
import { SearchProvider } from "../../context/SearchContext"; // ✅ Import SearchContext
import NavBar from "../../components/NavBar";
import DashboardHeader from "../../components/DashboardHeader";
import MushroomList from "../../components/MushroomList";
import Search from "../../components/Search";
import FilterSettings from "../../components/FilterSettings";

export default function DashboardPage() {
  const [filterVisible, setFilterVisible] = useState(false);

  return (
    <FilterProvider>
      <SearchProvider> {/* ✅ Wrap inside SearchProvider */}
        <div className="page relative">
          <div className="header relative z-0">
            <DashboardHeader />
            <NavBar />
          </div>

          <div className="background bg-[#F2F2F2] h-[103%] z-10 w-full absolute bottom-0 rounded-t-[41px]"></div>

          <div className="flex flex-col items-center justify-center relative mt-[45%] z-20">
            <Search onFilterOpen={() => setFilterVisible(true)} />
            <p className="font-nunito font-bold text-2xl self-start mx-[6%] mt-[2%] mb-[5%]">My Collection</p>

            {!filterVisible && <MushroomList layout="dashboard" />}
          </div>

          {filterVisible && (
            <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-end">
              <FilterSettings onClose={() => setFilterVisible(false)} />
            </div>
          )}
        </div>
      </SearchProvider>
    </FilterProvider>
  );
}
