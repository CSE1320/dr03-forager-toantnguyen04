import Link from 'next/link';
import NavBar from '../../components/NavBar';
import PageHeader from '../../components/PageHeader';
import ReportError from '@/components/ReportError';
import MatchList from '../../components/MatchList';
import Message from '@/components/Message';
import AddtoFavorites from '@/components/AddtoFavorites';
import FastFacts from '@/components/FastFacts';
import AttentionMessage from "@/components/AttentionMessage";
import DeathCap from "@/components/DeathCap";

export default function MushroomPage() {
  return (
    <div className="relative">

      {/* Attention Message */}
        <div className='attention-message fixed w-[90%] top-1/2 left-1/2 transform -translate-x-1/3 -translate-y-1/2 m-[-15%] z-50'>
          <AttentionMessage />
        </div>

        {/* Page Header */}
      <PageHeader pageType="mushroom" />
      
      {/* Report Error Section */}
      <div className="report-error mt-[32.5%]">
        <ReportError />
      </div>

      {/* Warning Message */}
      <div className="warning-message">
        <Message type="warning" />
      </div>

      {/* Navigate to Comparison Page Button */}
        <div className=" ml-[62%]">
          <Link href="/comparison" passHref>
            <button className="text-[#888787] px-6 py-3 font-semibold transition">
          Compare   &gt;
            </button>
          </Link>
        </div>

        <div className="death-cap">
          <DeathCap/>
        </div>
        
        <div className="add-to-favorites">
          <AddtoFavorites />
        </div>

        <div className="fast-facts">
          <FastFacts />
        </div>

        <div className="similar-match-header mt-[3%] text-center font-semibold text-[30px] text-darkBlue">
          <h1>Similar Matches</h1>
        </div>

        <div className="similar-match-list flex justify-center">
          <MatchList/>
        </div>

          {/* Blank Space so u can see all of the similar matches*/}
        <div className="blank-space flex justify-center bg-[#F5F5F5] h-[84px]">
        </div>

        {/* Navigation Bar */}
      <div className="page">
        <NavBar />
      </div>
    </div>
  );
}