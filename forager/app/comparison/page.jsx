import NavBar from '../../components/NavBar';
import PageHeader from '@/components/PageHeader';
import Message from '@/components/Message';
import CompareMushroomList from '@/components/CompareMushroomList';
import ComparisonTable from '@/components/ComparisonTable';

export default function MushroomComparisonPage() {
  return (
    <div className="page relative">
      <PageHeader pageType="comparison" />

      <div className="warning-message mt-[40%]">
        <Message type="warning" />
      </div>

      <div className="mushroom-comparision">
        <CompareMushroomList />
      </div>

      <div className="compairson-table-header mt-[3%] text-center font-semibold text-[30px] text-darkBlue">
          <h1>Comparison Table</h1>
        </div>

      <div className="comparison-table mt-[3%]">
        <ComparisonTable />
      </div>

      {/* Blank Space so u can see all of the similar matches*/}
      <div className="blank-space flex justify-center bg-[#F5F5F5] h-[84px]">
      </div>

      <NavBar />
    </div>
  );
}
